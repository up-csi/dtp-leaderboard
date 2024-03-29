import { createJwt, exchangeJwtForAccessToken, fetchSpreadsheet } from '$lib/server/http';
import { error } from '@sveltejs/kit';

export const prerender = true;

/** @param {number} code */
function messageFromCode(code) {
    switch (code) {
        case 401:
            return 'Invalid credentials in the back-end.';
        case 403:
            return 'Credentials have been revoked in the back-end.';
        default:
            return `Unexpected status code ${code} from the Google Sheets API.`;
    }
}

export async function load({ fetch }) {
    const jwt = await createJwt();
    const token = await exchangeJwtForAccessToken(jwt, fetch);
    if (typeof token === 'number') error(500, messageFromCode(token));
    const users = await fetchSpreadsheet(token, fetch);
    if (typeof users === 'number') error(500, messageFromCode(users));
    return { users };
}
