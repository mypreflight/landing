import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const appChangelogBeforeSplit = [
  "2026-10-23-seat-map-cap",
  "2026-10-24-dashboard-fixes",
  "2026-10-26-tracking-page-redesign",
  "2026-10-27-briefing-and-tracking-links",
  "2026-10-27-current-flight-card",
  "2026-10-27-no-reload-loop",
  "2026-11-01-great-circle-routes",
  "2026-11-01-gsx-boarding",
  "2026-11-01-predicted-times",
  "2026-11-01-transponder-browser-sign-in",
  "2026-11-02-fir-boundaries",
  "2026-11-02-fix-card",
  "2026-11-02-globe-maps",
  "2026-11-02-six-phase-lifecycle",
  "2026-11-03-fuel-reports",
];

export default defineConfig({
  site: "https://mypreflight.io",
  redirects: {
    "/sign-in": "https://app.mypreflight.io/sign-in",
    ...Object.fromEntries(appChangelogBeforeSplit.map((id) => [`/changelog/${id}`, `/changelog/app/${id}`])),
    "/changelog/page/2": "/changelog/app/page/2",
    "/changelog/page/3": "/changelog/app/page/3",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [sitemap({ filter: (page) => new URL(page).pathname !== "/changelog/" })],
  vite: {
    plugins: [tailwindcss()],
  },
});
