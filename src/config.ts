// Locale-independent site facts. Translatable copy lives in `src/i18n/`.
export const site = {
  name: "Nota",
  repository: "https://github.com/manfad/Nota",
  download: "https://github.com/manfad/Nota/releases",
};

/** Extensions Nota actually opens. Do not invent formats here. */
export const fileTypes = {
  edit: [".txt", ".yaml", ".toml", ".js", ".py", ".swift", ".css", "README"],
  preview: [
    ".pdf",
    ".epub",
    ".png",
    ".jpg",
    ".gif",
    ".webp",
    ".heic",
    ".bmp",
    ".rtf",
  ],
  split: [
    ".md",
    ".html",
    ".tex",
    ".json",
    ".xml",
    ".csv",
    ".tsv",
    ".sql",
    ".svg",
  ],
} as const;

export type FileTypeColumn = keyof typeof fileTypes;
