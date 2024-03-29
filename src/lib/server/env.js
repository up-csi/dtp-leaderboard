import {
    GITHUB_TOKEN,
    GOOGLE_EMAIL,
    GOOGLE_NAMED_RANGE,
    GOOGLE_PRIVATE_ID,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_TOKEN_URI,
} from '$env/static/private';
import assert from 'assert/strict';

assert(GITHUB_TOKEN, 'no github token provided');
assert(GOOGLE_SPREADSHEET_ID, 'no spreadsheet id');
assert(GOOGLE_EMAIL, 'no service account email');
assert(GOOGLE_PRIVATE_ID, 'no private id');
assert(GOOGLE_PRIVATE_KEY, 'no private key');

export default {
    GITHUB_TOKEN,
    GOOGLE_TOKEN_URI: GOOGLE_TOKEN_URI || 'https://oauth2.googleapis.com/token',
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_NAMED_RANGE: GOOGLE_NAMED_RANGE || 'all',
    GOOGLE_EMAIL,
    GOOGLE_PRIVATE_ID,
    GOOGLE_PRIVATE_KEY: GOOGLE_PRIVATE_KEY.replace('\\n', '\n'),
};
