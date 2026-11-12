---
title: "Offboarding finishes when GSX completes deboarding"
date: 2026-11-01T22:00:21Z
version: "1.4.0"
area: "GSX"
summary: "With automatic deboarding on, the Transponder finishes offboarding on your flight as soon as GSX reports deboarding complete, however offboarding was started. A deboarding bypassed in GSX doesn't count, because nobody was seen off."
figures:
  - before:
      light: ./before.avif
      alt: "Transponder 1.3.0 on block at Philadelphia, gate B6, in STBY: GSX shows deboarding DONE with 296 of 296 passengers off and bags at 100%, while the flight still reads Offboarding."
      caption: "GSX had finished, but the flight stayed in Offboarding until you finished it yourself."
    after:
      light: ./after.avif
      alt: "The same turnaround in 1.4.0: deboarding DONE in GSX, and the flight reading Offboarding complete."
      caption: "The flight's status, shown under Discord presence, reads Offboarding complete as soon as GSX is done."
---

Closing the flight stays with you, because it needs the actual fuel burn.
