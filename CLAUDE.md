# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Public marketing site for MyPreflight, the electronic flight board for flight simulation. The
application itself lives in a separate repository (`flight-tracker-app`); this repo is the landing
site only. The product is flagged as in development in the hero, with launch scheduled for late
2026.

Routes: the marketing page at `/`, a `404`, and two generated text routes covered under
"Machine-readable copies" below. There is no other page.

- **Framework**: Astro 7, static output, **no UI framework** — no React, no islands. Interactivity
  is plain `<script>` in `.astro` files. Keep it that way unless the user explicitly asks otherwise.
- **Styling**: Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js`); design tokens live in
  `@theme` inside `src/styles/global.css`
- **Linting/formatting**: Biome, mirroring `flight-tracker-app` (2-space indent, 120-char width,
  double quotes)
- **Node**: 26 (see `.nvmrc`)

## Commands

```sh
npm run dev           # Astro dev server (http://localhost:4321)
npm run build         # static build to ./dist
npm run preview       # preview the built site
npm run lint          # biome check (run by CI)
npm run lint:fix      # biome check --write
npm run astro check   # Astro + TypeScript diagnostics (run by CI)
npm run typecheck     # tsc --noEmit (not run by CI)
```

There is no test suite. CI runs `lint`, `astro check` and `build` on every PR — match those locally
before pushing.

### Biome and `.astro`

Biome parses only the frontmatter fence of an `.astro` file, not the template. It therefore reports
every frontmatter const as unused, so `biome.json` turns `noUnusedVariables` and `noUnusedImports`
off for `**/*.astro`. `astro check` covers those files properly. Biome does not format `.astro`
template markup at all — keep it tidy by hand.

## Release / deploy

- Push to `main` runs `.github/workflows/deploy.yml`: build, deploy to GitHub Pages, then tag the
  commit with `package.json`'s `version` and create a GitHub release.
- **Bump `package.json` `version` whenever a PR should produce a new release tag.**
  `.github/bin/check_version_is_free` fails the PR check when the version is already tagged.
- There is deliberately no `public/CNAME`: `mypreflight.io` is still the verified Pages domain of
  `flight-tracker-app`. See README "Deployment" before touching domains.
- Use the newest major version of every GitHub Action.

## Design context

The visual world is MyPreflight's committed system — see `PRODUCT.md` and `DESIGN.md` in the
`flight-tracker-app` repo. Guiding principles: trust the numbers, earned familiarity over novelty,
density with legibility, procedural realism not theater. Anti-reference is the flashy gamer / sci-fi
HUD. Accessibility bar is WCAG 2.1 AA in both themes.

Two things are copied from the app on purpose and must stay in sync with it:

- **The indigo ramp** in `src/styles/global.css` is Flowbite's, not stock Tailwind's
  (`indigo-500: #6875f5`, `indigo-600: #5850ec`). The app inherits it from `flowbite-react`, and it
  is what makes the wordmark match the logo mark. Stock Tailwind indigo is visibly wrong here.
- **The navbar** mirrors `app/components/public/Landing/LandingNavbar.tsx` — same mark size, same
  wordmark, same three-state theme toggle (`light → dark → auto`, persisted under the
  `flowbite-theme-mode` localStorage key), same sticky blur and scroll border, same Sign In button.

The wordmark is set `mypreflight`, all lowercase, `my` at weight 400 and `preflight` at 700. In
prose it is `MyPreflight`, one word. The two are not interchangeable.

## Page layout

The page is one fixed sequence of sections, rendered by `src/pages/index.astro`: hero, product
lead, four feature sections, how-it-works, FAQ, closing CTA, footer.

Every content section goes through **`src/components/Section.astro`** — uppercase eyebrow, `h2`,
lead paragraph, optional visual slot. It owns the vertical rhythm, the measure and the heading
styling. Add a section by calling it, never by hand-rolling the markup, or the rhythm drifts.
Feature sections pass `reverse` alternately so the visual swaps side at `lg`. Headings are written
as claims in full sentences, not as feature nouns.

Repeating copy — features, steps, FAQ — lives as typed `as const` arrays in `src/constants.ts` and
is mapped over in the template.

Each feature section carries a real screenshot of the app, in `public/screenshots/` as 1920x1080
AVIF, one file per theme. `VisualSlot.astro` takes `src` and `srcDark` and renders both behind
`dark:hidden` / `hidden dark:block`, with `loading="lazy"` so only the active theme is fetched, and
`width`/`height` so the 16:9 box is reserved before load. Paths and alt text live on each entry in
`FEATURES`.

The shots are **component crops, not full app views**: at the 544px the slot renders on desktop a
whole screen is illegible. They were captured by building a fixed 960x540 stage inside the running
app at `deviceScaleFactor: 2`, cloning the chosen panels into it, and sizing the content to fill
16:9 exactly. Reproduce that framing if you replace one.

Never fill a slot with fabricated product UI or invented numbers. Where the seeded dev data made a
panel read as broken, the fix was to correct the fixture and let the app render it, never to edit
the rendered value.

Scroll reveal is deliberately fail-open. The inline head script sets `data-reveal="on"` on
`<html>`, and `.rise` is hidden **only** under that attribute, so if JavaScript never runs nothing
is ever hidden. A single `IntersectionObserver` in `Layout.astro` adds `.is-visible` once per
element. Do not invert this to a plain `opacity: 0` default.

## Fonts

Noto Sans is **self-hosted**, not loaded from Google. Two variable woff2 subsets live in
`public/fonts/` with the `@font-face` rules at the top of `src/styles/global.css`, declared
`font-weight: 400 700` against the variable axis. Only weights 400 and 700 are used anywhere, so
do not reintroduce 600.

Both faces carry Google's original `unicode-range` values, which is what keeps the 164KB
`latin-ext` file from ever being fetched for English copy while still covering Polish diacritics
the moment they appear. The `latin` file is preloaded in `Layout.astro`; `latin-ext` deliberately
is not.

The font is redistributed under the SIL Open Font License, so `public/fonts/OFL.txt` must ship
alongside it. Do not swap in a system font stack: the app sets `--font-sans: "Noto Sans"` and the
two must match.

## SEO and metadata

`Layout.astro` owns the whole head. It takes `title`, `description` and an optional `robots`
(defaulting to indexable; the 404 passes `noindex, follow`). Alongside the usual canonical and
favicons it emits Open Graph and Twitter cards, and two JSON-LD blocks: a `SoftwareApplication`
built from the constants, and a `FAQPage` generated from `FAQ.items`, so the FAQ answers stay the
single source for both the page and the structured data.

`public/og.png` is the 1200x630 social card. Its dimensions are declared in the `OG_IMAGE` constant
and **must match the file**, or scrapers letterbox it. It was rendered from a temporary Astro page
using the real tokens, wordmark and a product screenshot, then deleted; rebuild it the same way
rather than hand-drawing one. Social platforms cache aggressively, so after changing it, re-scrape
through the Facebook Sharing Debugger and LinkedIn Post Inspector.

`SITE_TITLE` and `SITE_DESCRIPTION` live in `src/constants.ts`, not inline in the page.

## Machine-readable copies

`/llms.txt` and `/index.html.md` follow [llmstxt.org](https://llmstxt.org/). Both are Astro
endpoints (`src/pages/llms.txt.ts`, `src/pages/index.html.md.ts`) generated **from the same
constants as the page**, so copy changes propagate automatically. Never hand-edit them into static
files in `public/`.

`llms.txt` is the index: H1, a blockquote summary, detail paragraphs, then H2 file lists. Its
`## Optional` section has a defined meaning in the spec, namely links that may be skipped when a
shorter context is needed. `index.html.md` is the spec's clean-markdown copy of the page, and is
what `llms.txt` points at. Prose unique to these files lives in the `LLMS` constant.

## Code style

- **No comments. Ever.** No explanatory comments, section headers, JSDoc or TODOs. Code must be
  self-explanatory through clear names and structure; refactor instead of commenting.
- All user-facing copy is **English**.
- **No em dashes in user-facing copy.** Readers now take them as a tell that the text was
  machine-written. Use a colon, a comma or a full stop instead.
- URLs and site copy constants live in `src/constants.ts`, not inline.
- **Use Tailwind's scale, never arbitrary values.** No `text-[0.6875rem]`, `max-w-[46ch]`,
  `h-[22px]`: pick the nearest scale step (`text-xs`, `max-w-sm`, `size-5`). If a value truly has
  no scale equivalent, add a token to `@theme` in `src/styles/global.css` instead. The one
  exception is the navbar theme-toggle icon, whose `h-[22px] w-[22px]` mirrors `<Icon size={22} />`
  in the app's `LandingNavbar.tsx`.
