import type { ImageMetadata } from "astro";
import type { Locale } from "./i18n/locales";

/**
 * Per-locale screenshots. Every feature ships a light and a dark capture:
 * `nota-<name>.png` and `nota-<name>-dark.png`. To localize a screenshot,
 * drop a file with the same name into `src/assets/screenshots/<locale>/`;
 * any locale missing a given file falls back to the English version.
 */
const screenshots = import.meta.glob<ImageMetadata>(
  "./assets/screenshots/*/*.png",
  { eager: true, import: "default" },
);

export type ScreenshotName =
  | "notes"
  | "markdown"
  | "html"
  | "latex"
  | "json"
  | "xml"
  | "csv"
  | "sql"
  | "images"
  | "pdf"
  | "epub"
  | "picture"
  | "bookmarks"
  | "zen";

export type ScreenshotVariant = "light" | "dark";

/** Both appearances of one screenshot, ready for `ThemeImage`. */
export interface ScreenshotPair {
  light: ImageMetadata;
  dark: ImageMetadata;
}

export function getScreenshot(
  locale: Locale,
  name: ScreenshotName,
  variant: ScreenshotVariant = "light",
): ImageMetadata {
  const file = variant === "dark" ? `nota-${name}-dark.png` : `nota-${name}.png`;

  const localized = screenshots[`./assets/screenshots/${locale}/${file}`];
  if (localized) return localized;

  const fallback = screenshots[`./assets/screenshots/en/${file}`];
  if (fallback) return fallback;

  throw new Error(`Missing screenshot "${file}" (no ${locale} or en fallback)`);
}

export function getScreenshotPair(
  locale: Locale,
  name: ScreenshotName,
): ScreenshotPair {
  return {
    light: getScreenshot(locale, name, "light"),
    dark: getScreenshot(locale, name, "dark"),
  };
}
