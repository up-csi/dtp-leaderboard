import assert from 'assert/strict';
import { env } from '$env/dynamic/private';

const {
    GITHUB_TOKEN,
    GOOGLE_TOKEN_URI,
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_NAMED_RANGE,
    GOOGLE_EMAIL,
    GOOGLE_PRIVATE_ID,
    GOOGLE_PRIVATE_KEY,
} = env;

assert(GITHUB_TOKEN, 'no github token provided');
assert(URL.canParse(GOOGLE_TOKEN_URI), 'invalid token uri');
assert(GOOGLE_SPREADSHEET_ID, 'no spreadsheet id');
assert(GOOGLE_EMAIL, 'no service account email');
assert(GOOGLE_PRIVATE_ID, 'no private id');
assert(GOOGLE_PRIVATE_KEY, 'no private key');

export default {
    GITHUB_TOKEN,
    GOOGLE_TOKEN_URI,
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_NAMED_RANGE,
    GOOGLE_EMAIL,
    GOOGLE_PRIVATE_ID,
    GOOGLE_PRIVATE_KEY,
};
