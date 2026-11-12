---
title: "The flight page is built around the phase"
date: 2026-10-26T08:36:49Z
version: "2.108.0"
area: "Flight tracking"
summary: "A slim header carries the flight, the aircraft and the route. Below it, the phase card says what started the current phase, counts down to the next event and asks about the next step. Every time on the page comes from one rule: actual, then predicted, estimated, scheduled."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The previous flight page for AA4912: a narrow card with the phase, a countdown and a padlocked Manually report arrival button beside the live map."
      caption: "A narrow card beside the map, a padlocked report button, and times from sources that could disagree."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The redesigned page: a header with flight, aircraft and route, the phase card with its lifecycle track and Watching for arrival, and the map below."
      caption: "A header across the page, the phase card with its next step, and one source for every time."
---

On the old page, times came from different sources and could disagree, and the next action sat behind a padlock and a five-second window. Reporting a step now asks you to confirm it in a dialog, and the next step always says what it's waiting for.
