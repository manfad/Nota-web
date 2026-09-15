# Nota website

A single static Astro page for Nota. Independent of the native Swift build.

## Develop

Use Node.js 22.12+ (or a current supported LTS) and pnpm.

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:4321.

```sh
pnpm check
pnpm build
pnpm preview
```

The deployable static output is `dist/`. For a static host, set the project root
to this directory, build command to `pnpm build`, and publish directory to `dist`.
Set `SITE_URL` to the final HTTPS origin at build time to include a canonical URL
and absolute social image URLs. No runtime server or environment variables are needed.

## Content and assets

- `src/config.ts`: repository and download URLs, plus the Edit / Preview / Split
  extension lists used by the file-types section.
- `src/i18n/`: translatable copy. Feature order lives here; screenshot keys must
  match `src/components/FeatureShowcase.astro`.
- `src/pages/index.astro`: locale entry that renders `src/layouts/HomePage.astro`.
- `src/components/FeatureShowcase.astro`: fourteen features in a single wheel
  selector, synchronized descriptions/screenshots, and the showcase's styles and
  interaction. Feature ids match the screenshot names one for one: `notes`,
  `markdown`, `html`, `latex`, `json`, `xml`, `csv`, `sql`, `images`, `pdf`,
  `epub`, `picture`, `bookmarks`, `zen`.
- `src/components/ThemeImage.astro`: one screenshot in both appearances. It
  renders a `<picture>` whose `<source media="(prefers-color-scheme: dark)">`
  carries the dark capture, so only one variant downloads and the right one
  shows without JavaScript. The theme toggle rewrites that `media` when a
  viewer picks a theme explicitly.
- `src/components/ThemeToggle.astro`: the header's sun/moon button. It stores
  the explicit choice in `localStorage("theme")` and removes the key again when
  the chosen theme matches the system, so the page goes back to following it.
- `src/components/FileTypes.astro`: Edit / Preview / Split columns listing every
  supported extension as a static wrap of pills.
- `src/components/InstallCommands.astro`: the single light-card install box in
  the hero, with a `brew`/`curl` tab switcher (remembered per viewer in
  `localStorage`), a command row with a copy-to-clipboard button (progressive
  enhancement; the command stays selectable without JS, and long commands
  scroll horizontally inside their own box), and an info icon that opens a
  small popover with the Gatekeeper note. Without JS, both commands show
  stacked with no tabs and the copy buttons hidden.
- `src/styles/global.css`: the colour tokens, responsive styling, local font,
  and reduced motion. Every colour on the page is a custom property on `:root`;
  the dark palette is defined twice, once under
  `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }` and
  once under `:root[data-theme="dark"]`, so the toggle wins in both directions.
  Component `<style>` blocks reuse those tokens instead of literal colours.
- `src/assets/`: real Nota window captures and the existing app icon. Each
  feature ships two captures, `nota-<name>.png` and `nota-<name>-dark.png`,
  where `<name>` is one of the fourteen feature ids above. Astro generates
  appropriately sized WebP variants during the build.
- `public/`: favicons, locally hosted DM Sans (SIL Open Font License included),
  and the 1200 × 630 social card. `scripts/social.html` is its editable source;
  render it in a browser at 1200 × 630 and capture it to `public/social.png`.
  `install.sh` is served as-is at `/install.sh` for the curl one-liner: it
  finds the latest `Nota-<version>.zip` on GitHub Releases via the GitHub API,
  downloads and extracts it with `ditto`, and installs it to `/Applications`
  (or `~/Applications`, or `$NOTA_INSTALL_DIR`), quitting an already-running
  Nota first if needed.

Screenshots were captured from a copy of `/Applications/Nota.app`, using the
isolated bundle identifier `com.manfad.nota.promo` and `NOTA_SUPPORT_DIR` pointing
to a temporary demo session. They contain prepared sample files and existing
Nota icon artwork, not the user's notes. Each feature is captured twice, once
with the app in light appearance and once in dark; both are 2940 x 1838.

The feature wheel is driven by the pointer over the names, clickable names, and
Up/Down/Home/End. Without JavaScript, a list of expandable feature descriptions
replaces the showcase. Normal page scrolling is never intercepted.

The page follows the system appearance until the viewer presses the header's
theme toggle. An inline script in `<head>` reads `localStorage("theme")` and
sets `data-theme` on `<html>` before first paint, so nothing flashes, and keeps
`<meta name="theme-color">` in step. Screenshots follow the same decision
through `ThemeImage`.

To refresh captures, use an isolated app copy and session again; do not replace
the user's real session. Capture only the app window with `screencapture -x -o -l`.

## Before publishing

The primary CTA links to https://github.com/manfad/Nota/releases, and the hero's
Homebrew and curl commands expect a `manfad/homebrew-nota` tap with a `nota`
cask, and GitHub releases carrying a `Nota-<version>.zip` asset. Releases now
exist; if the tap or a release asset ever moves, update `src/config.ts` and
`public/install.sh` together.

Check 320px, 390px, 768px, and desktop layouts in both light and dark; the
theme toggle (click, keyboard, and that choosing the system's own appearance
clears the stored key); every feature tab; keyboard navigation; file-types rotation, pause, offscreen, and reduced-motion behavior;
the no-JavaScript fallbacks; the hero install box (brew/curl tab switching
with arrow keys, the remembered tab, the copy buttons' icon-only state on
narrow screens and "Copied" swap, the info popover on hover/focus/click and
Escape/click-outside to close, and the no-JS fallback); links; image loading;
and the production build.
