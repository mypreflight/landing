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

Routes: the marketing page at `/`, the Transponder's download page at `/transponder` (see
"Transponder page" below), `/privacy`, `/terms`, two changelogs at `/changelog/app` and
`/changelog/transponder` with one page per entry (see "Changelog" below), a `404`, and the generated
text routes covered under "Machine-readable copies". There is no other page.

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
  home link, sits alone on the left, aligned with the content's left edge; below `sm` it shows the
  mark without the wordmark text, so the dock fits a 390 px phone. The Transponder and Changelog
  links, the theme toggle and a neutral Sign in button sit on the right, each 32 px tall and inset
  8 px so the corners stay concentric. Page content slides under it (`-mb-15` on the header), so every page's
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

The Transponder's console is set in `public/fonts/console-mono.woff2` (`--font-console`), a 6.8 KB
subset of Cascadia Mono, the Windows Terminal default, instanced at weight 400 and cut to printable
ASCII plus the box-drawing and status glyphs the dashboard draws. Cascadia's OFL reserves the name
"Cascadia Code", so the subset is renamed "MyPreflight Console Mono" and ships with
`public/fonts/console-mono-OFL.txt`. If a new frame needs a glyph the subset lacks, cut a new subset
from the same release with fontTools rather than loading the full 210 KB font.

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
`/transponder.html.md` (`src/pages/transponder.html.md.ts`) is the same kind of copy of the
Transponder page, built from the `TRANSPONDER` constant and also listed in `llms.txt`.

Each changelog has two more: `/changelog/<product>.md` (`src/pages/changelog/[product].md.ts`), its
clean-markdown copy listed in `llms.txt`, and `/changelog/<product>/feed.xml`, an Atom feed.
`/changelog.md` and `/changelog/feed.xml` carry both changelogs together; they predate the split and
stay so old links and feed subscriptions keep working. All of them are built by
`src/lib/changelog-text.ts` from the entries, so adding an entry updates them.

## Transponder page

`/transponder` is the Transponder's download page, the one the knowledge base's launch checklist
asks for. Its copy lives in the `TRANSPONDER` constant. It opens on the Transponder's real
dashboard, drawn as live text by `Console.astro`, with the download on the console's title bar and
six callouts keyed to the dashboard's own numbered boxes. Pointing at or focusing a callout rings
its box, and pointing at a box lights its callout: plain CSS `:has()` rules at the end of
`global.css`, positioned in `ch` and line-height units from the boxes `consoleBoxes()` finds in the
frame. Each callout links to the section that explains it.

Every console on the page renders at one 12 px cap (`console-compact`), sized to its own columns
(`natural`), and reads as a physical screen: a pixel grille multiplied over it
(`.console-screen::before`, one dark gap row per pixel and soft RGB subpixel columns, the pitch a
quarter of the type size rounded to whole pixels), the text lifted 22% (`brightness(1.22)` on
`.console-grid`) so the Campbell colours survive the grille, and a faint diagonal glare with a corner
vignette on top (`.console-screen::after`). The hero console alone is `animated`: on load the panel
fades up from black and the frame paints top to bottom one row at a time (`steps(var(--rows))`),
then a faint refresh band sweeps down every 9 s, paused by an `IntersectionObserver` while the
console is off screen. Reduced motion drops the row paint and the band.
From `lg` up the hero console is tilted slightly in 3D (`console-tilt`), at the user's request and
against the knowledge base's flat-surface rule; it turns flat while the pointer or keyboard focus is
in the console stage, because a 3D transform softens text and the Download button sits on it. Keep
the angle small. The GSX and Discord excerpts are full-width rows of the frame (`bandOf()`), so both
render at the same width and box 4 keeps box 3 beside it, as on Windows.

The console is not a screenshot. `src/data/transponder-console.json` holds the output of the
1.5.4 release's own `renderFrame()` (and its sign-in screen), stored as rows of styled runs, and
the page renders it in the Campbell palette Windows Terminal uses by default. The console stays
black in both themes, as it is on Windows. Refresh the frame when a release changes the dashboard:
build a `StatusRegistry` from that release tag the way its `src/presentation/tui/preview.ts` does,
with the seeded pilot and AAL4908 boarding at Boston gate B30 with GSX running (so all six boxes
show), render it at 88 columns, and store the runs. Never edit a run by hand.

The Download button links to GitHub's latest-release download, so it always serves the newest
build; the version printed beside it is the newest Transponder changelog entry's. The file size
(`TRANSPONDER.size`) is typed in and is what Windows shows; update it when a release changes it.
Every fact on the page comes from the Transponder's README and the knowledge base's
`product/transponder.md`: check both before changing copy.

## Changelog

There are two changelogs, one per thing a pilot runs: the web app at `/changelog/app` and the
Transponder at `/changelog/transponder`. Each lists every change a pilot will notice in it, newest
first and grouped by UTC day, and each entry has its own page at `/changelog/<product>/<folder>`,
with links to the entries either side of it in the same changelog. `CHANGELOGS` in
`src/constants.ts` holds what differs between them: name, paths, lead, release URL and areas. A
switch under the heading, `ChangelogSwitch.astro`, moves between the two and shows each one's newest
version.

The changelog used to be the web app's alone, at `/changelog`. `/changelog/` now forwards to
`/changelog/app/`, keeping the query and the hash, and the entries and pages published before the
split redirect from their old addresses (`appChangelogBeforeSplit` in `astro.config.mjs`). That list
is frozen: never add to it.

**Every shipped feature or noticeable fix gets an entry, in a PR to this repo opened as part of the
work that ships it.** The app, API and Transponder `AGENTS.md` files point here. Open it as a draft
until the code it describes is merged. Only features marked **Live** in the knowledge base's feature
catalogue get an entry; Partial and Planned ones wait. A change in the app or the API goes in the web
app changelog, a change in the Transponder in the Transponder's. When one feature ships in both, each
changelog gets an entry for its own side, and each body links to the other.

An entry is a folder in `src/content/changelog/<product>/` named `YYYY-MM-DD-<slug>` after the UTC
day the change merged, holding `index.md` and its screenshots. The folder name is the URL, so never
rename one once it's published. `src/content.config.ts` validates the frontmatter at build time:

| Field      | What goes in it                                                                      |
| :--------- | :----------------------------------------------------------------------------------- |
| `title`    | A claim in a full sentence, without a full stop at the end, at most 60 characters    |
| `date`     | The merge time in UTC, e.g. `2026-11-03T10:31:52Z`; it orders entries within a day    |
| `version`  | The product's version once the change is live: `2.124.0` (app), `1.5.4` (Transponder) |
| `area`     | One of that changelog's `areas` in `CHANGELOGS`, `src/constants.ts`                  |
| `summary`  | What changed, for whom, in at most 320 characters                                    |
| `figures`  | Optional; each has an `after` shot and, when an existing screen changed, a `before` |
| `footnote` | Optional; only when a shot shows a value typed for it or a cancelled dialog          |

Each entry leads with its version in the left margin, then the date and a "See on GitHub" link to
that release. The area is a badge under the title. The release link uses the changelog's
`releasesUrl`; the app and the Transponder both tag releases with the bare version. The hero opens
with one status line, `ReleaseStatus.astro`: in development, the newest web app entry's version and
date, and a link to its changelog. It never animates.

The index renders the newest `CHANGELOG.pageSize` entries (five); older ones live on
`/changelog/<product>/page/<n>/`, each a complete page ending in an "Older changes" link, so it
works without JavaScript. With it, `ChangelogList.astro` fetches the next page when the reader is
about 1,500 px from the bottom, or on that link, and appends its entries in place. The index also
carries every version's page number, so a version link to an older entry loads pages until it
reaches it. The navbar, the footer and the homepage's closing section ("See recent development
updates") link to the web app changelog.

**The version is a contract with each product.** The app links to
`https://mypreflight.io/changelog/app/?version=<its own version>` (the old `/changelog/?version=`
still lands there), and the Transponder can do the same with `/changelog/transponder/?version=`. The
index page scrolls to the newest entry at or below that version and marks it "Latest in your
version". Any version works, including patch releases without an entry and releases newer than the
last landing build. Each version's first entry also carries a `#v<version>` anchor. For an app
change, pin the version that PR released; for an API change, the app version that was live when it
shipped; for a Transponder change, the Transponder version that release tagged. Versions must never
go backwards in date order within a changelog; `getChangelog()` fails the build if one does.

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

Transponder shots are renders of its console, made from the release itself. Check out the release
tag, build a `StatusRegistry` holding the state the shot needs, the way
`src/presentation/tui/preview.ts` does, and pass it to that tag's own `renderFrame()`, or for a
sign-in screen to its `ConsolePrompt`, so every character on screen comes from the shipped code.
Draw the ANSI output the way Windows Terminal does by default: Cascadia Mono at 15 px and its
natural line height, the Campbell palette (background `#0c0c0c`, text `#cccccc`, bold as the bright
colour, faint at half intensity), 88 columns, 14 px by 16 px of padding, on a page the colour of the
background, captured at device scale 2. Before and after share one row count. Use the seeded pilot,
AAL4908 (checked in, Boston to Philadelphia) or AAL4912 (in cruise), and the API and ADS-B receiver
versions that were live at the time. The console has one theme, so these shots have `light` only.

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
