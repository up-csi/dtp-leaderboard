import { AccessToken, Sheet } from '$lib/server/model';
import { SignJWT, importPKCS8 } from 'jose';
import assert from 'assert/strict';
import env from '$lib/server/env';
import { parse } from 'valibot';

export async function createJwt() {
    const key = await importPKCS8(env.GOOGLE_PRIVATE_KEY, 'RS256');
    return await new SignJWT({ scope: 'https://www.googleapis.com/auth/spreadsheets.readonly' })
        .setProtectedHeader({ typ: 'JWT', alg: 'RS256', kid: env.GOOGLE_PRIVATE_ID })
        .setIssuer(env.GOOGLE_EMAIL)
        .setSubject(env.GOOGLE_EMAIL)
        .setAudience('https://oauth2.googleapis.com/token')
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
        const indexed = indexRankings(rankings);
        const podium = indexed.splice(0, 3);
        const [head, ...rest] = indexed;
        if (typeof head === 'undefined') return { podium, rest };
        const found = podium.findIndex(ranking => ranking.rank === head.rank);
        if (found < 0) return { podium, rest: indexed };
        const reinstated = podium.splice(found);
        return { podium, rest: reinstated.concat(indexed) };
    }
    return response.status;
}
