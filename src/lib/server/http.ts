import { AccessToken, Sheet, User } from '$lib/server/model';
import { SignJWT, importPKCS8 } from 'jose';
import { object, parse, record } from 'valibot';
import assert from 'assert/strict';
import env from '$lib/server/env';

export async function createJwt() {
    const key = await importPKCS8(env.GOOGLE_PRIVATE_KEY, 'RS256');
    const jwt = new SignJWT({
        iss: env.GOOGLE_EMAIL,
        sub: env.GOOGLE_EMAIL,
        aud: 'https://oauth2.googleapis.com/token',
        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    });
    return await jwt
        .setProtectedHeader({ typ: 'JWT', alg: 'RS256', kid: env.GOOGLE_PRIVATE_ID })
        .setIssuedAt(new Date())
        .setExpirationTime('3600 seconds')
        .sign(key);
}

export async function exchangeJwtForAccessToken(jwt: string, http = fetch) {
    const response = await http(env.GOOGLE_TOKEN_URI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
        }),
    });
    const json = await response.json();
    if (response.ok) {
        const { access_token } = parse(AccessToken, json, { abortEarly: true });
        return access_token;
    }
    console.error(json);
    return response.status;
}

interface Indexable {
    rank: number;
    score: number;
}

function indexRankings<T extends Indexable>(rankings: T[]) {
    for (let i = 1; i < rankings.length; ++i) {
        const prev = rankings[i - 1];
        assert(typeof prev !== 'undefined');
        const curr = rankings[i];
        assert(typeof curr !== 'undefined');
        curr.rank = curr.score === prev.score ? prev.rank : i;
    }
    return rankings;
}

interface Userable {
    user: string;
}

const GitHubUsers = object({ data: record(User) });
export async function fetchIds<T extends Userable>(rankings: T[], http = fetch) {
    const inner = rankings
        .map(({ user }) => {
            // Temporarily replace dashes with underscores for field names
            const login = user.trim();
            const key = login.replaceAll('-', '_');
            return `${key}:user(login:"${login}"){databaseId}`;
        })
        .join('');
    const query = `query{${inner}}`;
    const response = await http('https://api.github.com/graphql', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}` },
        body: JSON.stringify({ query }),
    });
    const json = await response.json();
    if (response.ok) {
        const { data } = parse(GitHubUsers, json, { abortEarly: true });
        const entries = Object.entries(data).map(([key, { databaseId }]) => {
            const field = key.replace('_', '-');
            return [field, databaseId] as const;
        });
        return Object.fromEntries(entries);
    }
    console.error(json);
    return response.status;
}

const API_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${env.GOOGLE_SPREADSHEET_ID}/values/${env.GOOGLE_NAMED_RANGE}?majorDimension=ROWS`;
export async function fetchSpreadsheet(token: string, http = fetch) {
    const response = await http(API_ENDPOINT, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
    });
    const json = await response.json();
    if (response.ok) {
        const { values } = parse(Sheet, json, { abortEarly: true });
        const rankings = values
            .map(([first, last, user, ...scores]) => {
                const score = scores.reduce((acc, curr) => acc + curr, 0);
                return { rank: 0, name: `${first} ${last}`, user, score };
            })
            .sort((a, b) => {
                const cmp = b.score - a.score;
                return cmp === 0 ? a.name.localeCompare(b.name) : cmp;
            });
        return indexRankings(rankings);
    }
    return response.status;
}
