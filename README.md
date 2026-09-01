# landing

Public marketing site for **MyPreflight** — the electronic flight board for flight simulation.

Static [Astro](https://astro.build) site, no UI framework, no server runtime. Currently an
in-preparation splash.

## Commands

| Command               | Action                                  |
| :-------------------- | :-------------------------------------- |
| `npm install`         | Install dependencies                    |
| `npm run dev`         | Dev server at `http://localhost:4321`   |
| `npm run build`       | Static build to `./dist`                |
| `npm run preview`     | Preview the production build            |
| `npm run lint`        | Biome check — linter + formatter (CI)   |
| `npm run lint:fix`    | Biome auto-fix                          |
| `npm run astro check` | Astro + TypeScript diagnostics (CI)     |
| `npm run typecheck`   | `tsc --noEmit`                          |

Node 26 (see `.nvmrc`).

## Project structure

```text
/
├── public/            static assets served as-is (favicons, robots.txt)
├── src/
│   ├── components/    Mark, Navbar
│   ├── layouts/       page shell — head, theme bootstrap, nav
│   ├── pages/         file-based routes
│   ├── styles/        global.css — Tailwind v4 entry and design tokens
│   └── constants.ts   site origin, app URL, Discord invite
└── astro.config.mjs
```

## CI/CD

- **Pull request** (`.github/workflows/integrate.yml`) — checks the `package.json` version is not
  already tagged, then runs `lint`, `astro check` and `build`.
- **Push to `main`** (`.github/workflows/deploy.yml`) — builds and deploys to GitHub Pages, then
  tags the commit with `package.json`'s `version` and creates a GitHub release.

Bump `version` in `package.json` on every PR that should produce a release tag; the PR check fails
when the version already exists as a tag.

## Deployment

GitHub Pages via GitHub Actions. In **Settings → Pages**, set the source to "GitHub Actions".

There is intentionally **no `public/CNAME`**. `mypreflight.io` is currently the verified Pages
domain of the `flight-tracker-app` repository, and two repositories cannot claim it at once. When
the app moves to `app.mypreflight.io`, add `public/CNAME` here with `mypreflight.io` and set the
custom domain in Settings → Pages. `site` in `astro.config.mjs` already points at the target
domain, so canonical and sitemap URLs are correct ahead of the move.

`APP_URL` in `src/constants.ts` points at `https://app.mypreflight.io` — the app's post-move home.
It does not resolve yet.
