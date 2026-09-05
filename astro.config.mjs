import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL,
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh", "ms"],
    routing: { prefixDefaultLocale: false },
  },
});
