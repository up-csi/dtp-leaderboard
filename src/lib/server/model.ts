import { type Output, array, coerce, literal, number, object, safeInteger, string, tuple } from 'valibot';

export const AccessToken = object({
    access_token: string(),
    token_type: literal('Bearer'),
});

export const Sheet = object({
    majorDimension: literal('ROWS'),
    values: array(
        tuple(
            [string(), string(), string()],
            // @ts-expect-error - We expect that the `input` is a string.
            coerce(number([safeInteger()]), input => parseInt(input, 10)),
        ),
    ),
});

export const User = object({ databaseId: number([safeInteger()]) });

export type AccessToken = Output<typeof AccessToken>;
export type Sheet = Output<typeof Sheet>;
export type User = Output<typeof User>;
