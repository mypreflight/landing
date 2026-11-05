# AGENTS.md

This file provides guidance to coding agents working with code in this repository.

## MyPreflight knowledge base

This repo is part of MyPreflight. The knowledge base lives in the product repo, [mypreflight/product](https://github.com/mypreflight/product). It is the primary source of truth for product decisions, standards and architecture. Read it by URL before working here:

- Start: https://raw.githubusercontent.com/mypreflight/product/main/CLAUDE.md
- Standards: https://raw.githubusercontent.com/mypreflight/product/main/technology/frontend/standards.md
- Architecture: https://raw.githubusercontent.com/mypreflight/product/main/technology/backend/architecture.md
- Brand: https://raw.githubusercontent.com/mypreflight/product/main/product/brand/identity.md

If this file or the code contradicts the knowledge base, the knowledge base takes precedence. Flag the conflict; don't silently change either side.

Anything shared between repos belongs in the knowledge base; this file keeps what is specific to this repo. When your change alters product behaviour, also open a PR to the knowledge base updating the matching file.

## Project overview

Public marketing site for MyPreflight, the electronic flight board for flight simulation. The
application itself lives in a separate repository (`flight-tracker-app`); this repo is the landing
site only. The product is flagged as in development in the hero, with launch scheduled for late
2026.

Routes: the marketing page at `/`, `/privacy`, `/terms`, the changelog at `/changelog` with one
page per entry (see "Changelog" below), a `404`, and the generated text routes covered under
"Machine-readable copies". There is no other page.

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

One thing is copied from the app on purpose and must stay in sync with it, and one used to be:

- **The indigo ramp** in `src/styles/global.css` is Flowbite's, not stock Tailwind's
  (`indigo-500: #6875f5`, `indigo-600: #5850ec`). The app inherits it from `flowbite-react`, and it
  is what makes the wordmark match the logo mark. Stock Tailwind indigo is visibly wrong here.
- **The navbar** used to mirror the app's landing navbar, which the app removed when it stopped
  serving a landing page. It is now this site's own: a floating dock, a rounded capsule 12 px below
  the top and 16 px wider than the content column on each side (`max-w-dock`, the `max-w-6xl`
  column plus `2rem`, with `px-2` on the header so the outset holds at every width). The logo, the
  home link, sits alone on the left, aligned with the content's left edge; the Changelog link, the
  theme toggle and a neutral Sign in button sit on the right, each 32 px tall and inset 8 px so the
  corners stay concentric. Page content slides under it (`-mb-15` on the header), so every page's
  first section pads its top by the dock's 60 px plus its usual spacing (`pt-36 sm:pt-44` on
  content pages).
  The dock never reloads: the site opts into cross-document view transitions (`@view-transition` in
  `global.css`, off under reduced motion), the dock is its own transition group (`nav`, which keeps its
  blur during the transition) and the page dissolves and rises underneath it. A single pill behind the
  right-hand controls marks the current page, glides to whichever control the mouse or keyboard focus
  is on, and carries its own transition name (`dock-pill`), so the hover on Changelog becomes the
  current-page highlight on the next page. An inline script places it before the first paint, because
  the new page's first frame is what the transition captures; until it runs, the items fall back to
  their own hover and current fills (`data-static`).
  The theme toggle still cycles `light → dark → auto` under the `flowbite-theme-mode` localStorage
  key, so the choice carries over to the app.

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

The changelog has two more: `/changelog.md` (`src/pages/changelog.md.ts`), its clean-markdown copy
listed in `llms.txt`, and `/changelog/feed.xml` (`src/pages/changelog/feed.xml.ts`), an Atom feed.
Both are generated from the entries, so adding an entry updates them.

## Changelog

`/changelog` lists every change a pilot will notice, newest first and grouped by UTC day. Each entry
also has its own page at `/changelog/<folder>`, with links to the entries either side of it.

**Every shipped feature or noticeable fix gets an entry, in a PR to this repo opened as part of the
work that ships it.** The app, API and Transponder `AGENTS.md` files point here. Open it as a draft
until the code it describes is merged. Only features marked **Live** in the knowledge base's feature
catalogue get an entry; Partial and Planned ones wait.

An entry is a folder in `src/content/changelog/` named `YYYY-MM-DD-<slug>` after the UTC day the
change merged, holding `index.md` and its screenshots. The folder name is the URL, so never rename
one once it's published. `src/content.config.ts` validates the frontmatter at build time:

| Field      | What goes in it                                                                      |
| :--------- | :----------------------------------------------------------------------------------- |
| `title`    | A claim in a full sentence, without a full stop at the end, at most 60 characters    |
| `date`     | The merge time in UTC, e.g. `2026-11-03T10:31:52Z`; it orders entries within a day    |
| `version`  | The web app version current once the change is live, e.g. `2.124.0`; see below       |
| `area`     | One of `CHANGELOG.areas` in `src/constants.ts`                                       |
| `summary`  | What changed, for whom, in at most 320 characters                                    |
| `figures`  | Optional; each has an `after` shot and, when an existing screen changed, a `before` |
| `footnote` | Optional; only when a shot shows a value typed for it or a cancelled dialog          |

Each entry leads with its version in the left margin, then the date and a "See on GitHub" link to
that release. The area is a badge under the title. The release link uses `APP_RELEASES_URL` in
`src/constants.ts`; the app tags releases with the bare version. The hero opens with one status line, `ReleaseStatus.astro`: in development, the
newest entry's version and date, and a link to the changelog. It never animates.

The index renders the newest `CHANGELOG.pageSize` entries (five); older ones live on
`/changelog/page/<n>/`, each a complete page ending in an "Older changes" link, so the changelog
works without JavaScript. With it, `ChangelogList.astro` fetches the next page when the reader is
about 1,500 px from the bottom, or on that link, and appends its entries in place. The index also
carries every version's page number, so a version link to an older entry loads pages until it
reaches it. The homepage's closing section links here as "See recent development updates".

**The version is a contract with the app.** The app links to
`https://mypreflight.io/changelog/?version=<its own version>`, and the index page scrolls to the
newest entry at or below that version and marks it "Latest in your version". Any version works,
including patch releases without an entry and releases newer than the last landing build. Each
version's first entry also carries a `#v<version>` anchor. For an app change, pin the version that
PR released. For an API or Transponder change, pin the app version that was live when it shipped.
Versions must never go backwards in date order; `getChangelog()` fails the build if one does.

A shot has `light`, an optional `dark`, an `alt` describing what the screen shows and an optional
one-sentence `caption`. A figure with a `before` renders a Before / After switch that swaps the two
images in place with a short crossfade, so both must be captured with the same crop. A figure 600 px
wide or less sits beside its caption on wide screens; wider ones stack. The markdown body carries the rest of
the story in plain prose; see "Writing" below.

Writing: feature first, plain and specific, in the product's voice (knowledge base
`product/brand/voice.md`). The summary says what a pilot can now do. For a feature, the body is
one short paragraph, two at most, that weaves together what was missing before, what the change
does for a flight and, only when it's accurate, how airline crews do the same. It reads as prose:
no labels such as "Why it matters", no headings, no lists of sub-features, and nothing the summary
already said. Never suggest MyPreflight is for real-world use. A plain fix needs no body. The app
repo's `changelog-entry` skill walks through writing one. A text-only entry is fine when
there is nothing new to see, and a short entry beats a padded one. The schema rejects em dashes.
Write quotes, apostrophes, `...` and the space between a number and its unit plainly: `typeset()`
in `src/lib/changelog.ts` sets curly quotes, ellipses and no-break spaces when the page renders.

Screenshots are real captures from the running app, never mock-ups, set up as in the knowledge
base's `product/brand/screenshots.md`. The app repo's `app-screenshots` skill does the work: the
"before" from `main` (or the release before the change), the "after" from the branch, both against
the same seeded data at 1440x900 and device scale 2, with the same clock, crop and theme, in light
and dark. `Compare.astro` renders each image at half its pixel size, capped to the column (about
850 px), so prefer component crops and keep whole views for layout changes. Commit AVIF, not PNG:
`avifenc -q 72 -y 444 -s 4 in.png out.avif`.

## Code style

- **No comments. Ever.** No explanatory comments, section headers, JSDoc or TODOs. Code must be
  self-explanatory through clear names and structure; refactor instead of commenting.
- All user-facing copy is **English**.
- **No em dashes in user-facing copy.** Readers now take them as a tell that the text was
  machine-written. Use a colon, a comma or a full stop instead.
- URLs and site copy constants live in `src/constants.ts`, not inline.
- **Use Tailwind's scale, never arbitrary values.** No `text-[0.6875rem]`, `max-w-[46ch]`,
  `h-[22px]`: pick the nearest scale step (`text-xs`, `max-w-sm`, `size-5`). If a value truly has
  no scale equivalent, add a token to `@theme` in `src/styles/global.css` instead. There are no
  exceptions.
