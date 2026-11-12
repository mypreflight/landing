---
title: "Report your fuel at any fix"
date: 2026-11-03T10:31:52Z
version: "2.124.0"
area: "Flight tracking"
summary: "In cruise, the fix card and the nav log take the fuel on board at a fix, in tonnes, and show it against the plan's EFOB. Below the plan reads amber, above it green, and below the minimum fuel it turns red with a warning sign."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The fix card for CMK on the Tracking map, folded to its Fuel section: EFOB 8.05 t, MFOB 2.15 t, burn to this point 3.55 t and leg burn 0.90 t, one figure per row."
      caption: "The Fuel section showed the flight plan's figures, and nothing else."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The same fix card with the plan's four figures in one row and, below them, an actual 7.90 t reading 0.15 t under the plan, next to an Update button."
      caption: "Report once at a fix, then Update it as often as you need until you land."
  - after:
      light: ./reports-light.avif
      dark: ./reports-dark.avif
      alt: "The Fuel card's list of fuel reports: HFD 9.10 t, 0.15 t above the plan; CMK 7.90 t, 0.15 t below it; ARD 1.50 t, 4.94 t below and marked with a warning sign."
      caption: "The Fuel card on Fuel & crew lists every report, in flight history too."
footnote: "Fuel reports typed in for the demo."
---

SimBrief tells you how much fuel you should have at every fix, but until now nothing showed what you actually had. Airline crews make the same check at set waypoints, writing the fuel on board next to the planned figure in the nav log, on paper or on the tablet that holds their flight plan. Done in cruise, it shows early whether a stronger headwind or a faster cruise is eating into your reserves, while there's still time to change speed, level or plan.
