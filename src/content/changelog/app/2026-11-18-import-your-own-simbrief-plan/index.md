---
title: "Import your own SimBrief plan and fly it straight away"
date: 2026-11-18T11:13:55Z
version: "2.138.0"
area: "Dashboard"
summary: "Import from SimBrief on the dashboard shows your latest SimBrief plan and checks you in with its estimated times, so a flight no longer waits for Operations to import and release it."
figures:
  - before:
      light: ./card-before-light.avif
      dark: ./card-before-dark.avif
      alt: "The Next scheduled flight card: AA4906 on N78881, BOS Boston to PHL Philadelphia, scheduled off-block 13:00Z on 01JAN, with See flight details."
      caption: "Your next flight was whatever Operations had released."
    after:
      light: ./card-after-light.avif
      dark: ./card-after-dark.avif
      alt: "The same card with Import from SimBrief above See flight details."
      caption: "Import from SimBrief sits right on the card."
  - after:
      light: ./import-light.avif
      dark: ./import-dark.avif
      alt: "The SimBrief import window for DLH80: route EDDF to KJFK, departure 05JAN 09:00Z, aircraft A339 D-AIMC, the line You'll be checked in with the plan's estimated times, and Import and check in."
      caption: "Check it's the plan you just made, then import it and you're checked in."
footnote: "The import window was opened and closed without importing."
---

Until now only Operations could import a plan, and a flight reached you once they had released it. Your own import builds the same briefing, loadsheet and manifest theirs does, and if your plan names a registration the fleet doesn't have yet, it's added for Operations to confirm instead of stopping the import. When an import is refused, the window says why, such as an airline or aircraft type MyPreflight doesn't have yet.

The departure stand now stays open until boarding starts, so you can still pick one after the import has checked you in. A plan you import but don't board within 24 hours is removed, so it can't keep you from importing the next one.
