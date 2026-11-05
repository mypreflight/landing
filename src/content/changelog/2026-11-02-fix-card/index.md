---
title: "Click a fix to read its plan"
date: 2026-11-02T20:23:44Z
version: "2.123.0"
area: "Maps"
summary: "A fix on the Tracking map opens a card with its plan: position, FIR, MORA, altitude, fuel and the wind at each level. The arrows step along the route and centre the map on each fix."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The Tracking map from Boston to Philadelphia with the planned route, the flown track and the aircraft between HFD and CMK, and no card open."
      caption: "Clicking a fix opened nothing. Its figures were in the nav log, on Briefing."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The same map with the card for CMK open at the top right: position, track, altitude FL330, ETE 0:30 and the distances from the last fix and from the start."
      caption: "The card opens at the top right of the map and stays until you close it. Each section folds."
---

These are the figures an operational flight plan lists for every waypoint, and the ones a pilot gets by tapping a fix in an electronic flight bag app. Reading them used to mean leaving the map for the nav log on Briefing. Now the plan for the next fix is one click away, without losing sight of where you are.
