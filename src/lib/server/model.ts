import { type Output, array, coerce, literal, number, object, safeInteger, string, tuple } from 'valibot';

export const AccessToken = object({
    access_token: string(),
    token_type: literal('Bearer'),
});

export type AccessToken = Output<typeof AccessToken>;

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

export type Sheet = Output<typeof Sheet>;
