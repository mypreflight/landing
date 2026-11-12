---
title: "The transponder switches itself on and off"
date: 2026-08-24T10:37:41Z
version: "0.13.0"
area: "Tracking"
summary: "It now starts in STBY and follows your flight: MODE C when boarding starts, STBY again at on-block. Start it mid-flight and it arms straight away. In between, t still switches it by hand, and r reads the current flight again without waiting."
figures:
  - before:
      light: ./before.avif
      alt: "Transponder 0.12.0 at Boston with AAL4908 checked in and the aircraft at 0 kt, the transponder in MODE C and a report accepted at 12:20:30Z."
      caption: "0.12.0 started in MODE C and published positions for a flight that hadn't begun."
    after:
      light: ./after.avif
      alt: "The same checked-in flight in 0.13.0: the transponder in STBY with no report sent, and a new r refresh key in the key bar."
      caption: "0.13.0 waits in STBY until boarding starts."
---
