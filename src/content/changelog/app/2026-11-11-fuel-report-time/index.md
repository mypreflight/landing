---
title: "Log the time you read your fuel at a fix"
date: 2026-11-11T15:00:00Z
version: "2.125.0"
area: "Flight tracking"
summary: "A fuel report now carries the time you read the fuel, in UTC. It starts at the current minute, and you can set it earlier if you report late. The fix card, the nav log and the Fuel card's list of reports show it beside the figure."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The fix card for CMK on the Tracking map, folded to its Fuel section: EFOB 8.05 t, MFOB 2.15 t, burn to this point 3.55 t and leg burn 0.90 t, with an actual 7.90 t reading 0.15 t under the plan next to an Update button."
      caption: "A report showed the fuel on board, with no record of when you read it."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The same fix card with the actual 7.90 t, 0.15 t under the plan, and the time it was read, 14:18Z, next to the Update button."
      caption: "The time you read the fuel sits beside the figure."
  - before:
      light: ./reports-before-light.avif
      dark: ./reports-before-dark.avif
      alt: "The Fuel card's list of fuel reports: HFD 9.10 t, 0.15 t above the plan; CMK 7.90 t, 0.15 t below it; SAX 1.80 t, 5.35 t below and marked with a warning sign."
      caption: "The list of reports gave each fix's figure and its difference from the plan."
    after:
      light: ./reports-after-light.avif
      dark: ./reports-after-dark.avif
      alt: "The same list with a Time column: HFD at 13:52Z, CMK at 14:18Z and SAX at 14:36Z."
      caption: "Each report now reads with its time, in history too."
footnote: "Fuel reports typed in for the demo."
---

Until now a fuel report only recorded when you pressed Save, so a figure read over the fix and typed in ten minutes later looked as if it belonged to a later point on the route. Airline crews write the actual time over each waypoint on the flight plan next to the fuel they read there, and the two together are what make the check mean something. The time is checked against the flight: it can't be before takeoff or in the future, and a fix passed before midnight UTC keeps its day when you report it after.
