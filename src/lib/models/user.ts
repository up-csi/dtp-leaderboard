import { type InferOutput, number, object, pipe, safeInteger, string } from 'valibot';

export const User = object({
    id: pipe(number(), safeInteger()),
    name: string(),
    score: pipe(number(), safeInteger()),
});

export type User = InferOutput<typeof User>;
