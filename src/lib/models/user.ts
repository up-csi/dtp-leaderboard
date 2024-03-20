import { type Output, number, object, safeInteger, string } from 'valibot';

export const User = object({
    id: number([safeInteger()]),
    name: string(),
    score: number([safeInteger()]),
});

export type User = Output<typeof User>;
