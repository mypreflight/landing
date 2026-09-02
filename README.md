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

`mypreflight.io` is served by this repository. The custom domain is set in **Settings → Pages**
rather than through a `public/CNAME` file, which is why none is committed. `site` in
`astro.config.mjs` points at that domain, so canonical, sitemap and Open Graph URLs are absolute
and correct.

`APP_URL` in `src/constants.ts` points at `https://app.mypreflight.io`, which is the app.

GitHub Pages serves every asset with `Cache-Control: max-age=600` and does not allow custom
headers. That is the one cost of self-hosting the font (see "Fonts"): repeat visitors revalidate it
every ten minutes, though the response is a 304 on an already-open connection and `font-display:
swap` paints text immediately regardless. Putting a CDN in front of the domain would allow a long
immutable cache instead.
