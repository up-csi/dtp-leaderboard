import {
    type InferOutput,
    array,
    literal,
    number,
    object,
    pipe,
    safeInteger,
    string,
    transform,
    tupleWithRest,
} from 'valibot';

export const AccessToken = object({
    access_token: string(),
    token_type: literal('Bearer'),
});

export const Sheet = object({
    majorDimension: literal('ROWS'),
    values: array(
        tupleWithRest(
            [string(), string(), string()],
            pipe(
                string(),
                transform(input => parseInt(input, 10)),
            ),
        ),
    ),
});

export const User = object({ databaseId: pipe(number(), safeInteger()) });

export type AccessToken = InferOutput<typeof AccessToken>;
export type Sheet = InferOutput<typeof Sheet>;
export type User = InferOutput<typeof User>;
