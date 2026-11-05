---
title: "The dashboard shows the right flights"
date: 2026-10-24T12:02:21Z
version: "2.107.0"
area: "Dashboard"
summary: "Next flight is the earliest one scheduled, and last flight the one that landed last, not the newest you created. Times name their event and say whether they are estimated or scheduled, and a card that fails to load says so."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The cabin crew dashboard with last flight AA4905 and next scheduled flight CV2020, Frankfurt to New York, a totals strip beside the greeting and a five-week activity grid."
      caption: "Last and next flight followed creation order: AA4905 last, and a June flight next."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The dashboard with last flight LH40, Frankfurt to New York, on-block 02:45Z and 30 minutes late, next flight AA4906, Boston to Philadelphia, and an activity card with total block time 39 h 51 m and bars for the last seven days."
      caption: "LH40, the flight that landed last, and AA4906, the next one scheduled."
---

It used to pick flights in the order they were created, so a June flight could show up ahead of a January one. Your activity card now shows lifetime block time with fuel and distance, and your last seven days as bars. Hover or arrow through a bar for that day's figures.
