export interface LocaleEntry {
  /** URL segment and dictionary key. */
  code: string;
  /** Native name, shown in the language picker menu. */
  label: string;
  /** Compact native name, shown in the language picker trigger. */
  short: string;
  /** Value for `<html lang>` and `hreflang`. */
  htmlLang: string;
}

export const locales = [
  { code: "en", label: "English", short: "EN", htmlLang: "en" },
  { code: "zh", label: "简体中文", short: "中文", htmlLang: "zh-CN" },
  { code: "ms", label: "Bahasa Melayu", short: "MS", htmlLang: "ms" },
] as const satisfies readonly LocaleEntry[];

export type Locale = (typeof locales)[number]["code"];

export const defaultLocale: Locale = "en";

export const localeCodes = locales.map((locale) => locale.code) as Locale[];

export function isLocale(value: string): value is Locale {
  return localeCodes.includes(value as Locale);
}

export function getLocale(code: Locale): LocaleEntry {
  return locales.find((locale) => locale.code === code) ?? locales[0];
}

/**
 * Build a site path for a locale. The default locale is unprefixed, so
 * `localePath("en")` is `/` and `localePath("zh")` is `/zh/`.
 */
export function localePath(code: Locale, path = "/"): string {
  const suffix = path.startsWith("/") ? path.slice(1) : path;
  const prefix = code === defaultLocale ? "/" : `/${code}/`;
  return `${prefix}${suffix}`;
}
