export const locales = ['en-US', 'nl-NL'] as const
export type Locale = (typeof locales)[number]
