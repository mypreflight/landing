---
title: "Requesting boarding in GSX starts it on your flight"
date: 2026-11-01T15:26:01Z
version: "1.3.0"
area: "GSX"
summary: "With the GSX integration on, requesting boarding in GSX on a checked-in flight starts boarding in MyPreflight, and requesting deboarding once you're on block starts offboarding. The transponder then switches to MODE C, as it does for any boarding."
figures:
  - before:
      light: ./before.avif
      alt: "Transponder 1.2.2 at Boston, gate B30: GSX shows boarding RUNNING with 24 of 296 passengers aboard, while the flight still reads Checked in and the transponder sits in STBY."
      caption: "GSX was boarding, but MyPreflight still had the flight checked in until you started boarding there too."
    after:
      light: ./after.avif
      alt: "The same moment in 1.3.0: the flight reads Boarding, takeoff at 13:15 UTC, and the transponder is in MODE C with a report accepted at 12:31:20Z."
      caption: "One request in GSX starts boarding in MyPreflight, and the transponder arms itself."
---

Finishing boarding stays with you, because it needs your final loadsheet, and nothing is ever sent to GSX. Request boarding before you check in, or deboarding before you report on block, and the Transponder waits, then starts the step once the flight gets there, as long as GSX is still running it. The switches are on your account page, as the [web app changelog](/changelog/app/2026-11-01-gsx-boarding/) shows.
