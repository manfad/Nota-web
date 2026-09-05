import { defaultLocale, type Locale } from "./locales";
import en, { type Translation } from "./en";
import zh from "./zh";
import ms from "./ms";

const dictionaries: Record<Locale, Translation> = { en, zh, ms };

export function getTranslation(locale: Locale): Translation {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type { Translation };
export { defaultLocale, locales, localePath, getLocale, type Locale } from "./locales";
