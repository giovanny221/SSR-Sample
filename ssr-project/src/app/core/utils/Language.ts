export type Language = 'es' | 'en' | 'de';

export const SUPPORTED_LANGUAGES: Language[] = ['es', 'en', 'de'];

export const DEFAULT_LANGUAGE: Language = 'es';

export function isSupportedLanguage(language: unknown): language is Language {
  return SUPPORTED_LANGUAGES.includes(language as Language);
}
