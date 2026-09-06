import type { ImageMetadata } from "astro";
import type { Locale } from "./i18n/locales";

/**
 * Per-locale screenshots. To localize a screenshot, drop a file with the
 * same name into `src/assets/screenshots/<locale>/`; any locale missing a
 * given file falls back to the English version.
 */
const screenshots = import.meta.glob<ImageMetadata>(
  "./assets/screenshots/*/*.png",
  { eager: true, import: "default" },
);

export type ScreenshotName =
  | "book"
  | "images"
  | "csv"
  | "quiet"
  | "sql"
  | "editor"
  | "bookmarks"
  | "reading"
  | "split"
  | "html"
  | "vim"
  | "text";

export function getScreenshot(
  locale: Locale,
  name: ScreenshotName,
): ImageMetadata {
  const localized = screenshots[`./assets/screenshots/${locale}/nota-${name}.png`];
  if (localized) return localized;

  const fallback = screenshots[`./assets/screenshots/en/nota-${name}.png`];
  if (fallback) return fallback;

  throw new Error(`Missing screenshot "nota-${name}.png" (no ${locale} or en fallback)`);
}
