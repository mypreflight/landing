---
title: "See each airport's weather, stand and runway on one card"
date: 2026-11-16T19:15:53Z
version: "2.134.0"
area: "Briefing"
summary: "Preflight and Arrival now open with one card per airport: METAR, TAF and ATIS beside your parking stand and runway, with the stand's position for the IRS and the runway's heading, length, width and elevation. Change opens the airport map, where you pick a stand or runway on the map or from the list."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "LH81, Frankfurt to New York, on its Preflight briefing before check-in: a Weather at Frankfurt card with the METAR and TAF from AviationWeather, and under it a Departure runway and stand card with separate Airport, Terminal T1 and Parking stand B 42 boxes, beside the fuel, loadsheet, crew and the weather at New York."
      caption: "The weather in one card, the terminal, stand and runway stacked in boxes in another."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The same briefing with one Departure airport card: Frankfurt Rhein/Main with the METAR and TAF from AviationWeather, the TAF's BECMG group on its own line, and beside them Terminal 1 with operators DLH and LOT, stand B42 at a gate with an air bridge, VDGS and straight-in parking, its services and its position N50°02.83' E008°34.46', then runway 07C, asphalt with HIRL, 072° magnetic, 4,000 m long, 60 m wide, at 364 ft."
      caption: "One card for the airport, with the stand's position ready for aligning the IRS."
  - before:
      light: ./stand-before-light.avif
      dark: ./stand-before-dark.avif
      alt: "The Parking stand, Select departure dialog: one dropdown holding B 42, Terminal 1, Gate."
      caption: "A stand was a name in a dropdown, with nothing to show where it is."
    after:
      light: ./stand-after-light.avif
      dark: ./stand-after-dark.avif
      alt: "The Frankfurt, Select parking stand dialog: a search field and the stands grouped by terminal, 445 and A11 remote with stairs and a bus, B42 at a gate with an air bridge and VDGS, selected, and N4 in Terminal 2, beside a map of the apron with B42 filled green and 445 and N4 hollow."
      caption: "Search by name, terminal or type, or pick the stand on the map."
  - before:
      light: ./runway-before-light.avif
      dark: ./runway-before-dark.avif
      alt: "The Runway, Select departure dialog listing 07C, 07L, 07R and 18 with their length and surface."
      caption: "Runways were listed by length and surface only."
    after:
      light: ./runway-after-light.avif
      dark: ./runway-after-dark.avif
      alt: "The Frankfurt, Select departure runway dialog listing all seven runways with length, width, elevation, surface and course, beside a map of the airport with 07C in indigo and its departure path dashed off the far end, past 25C."
      caption: "Every runway on the map, with the departure path drawn from the one you pick."
footnote: "The stand and runway dialogs were opened for the shots and cancelled."
---

The departure airport used to be spread over two cards, its weather in one and a stack of airport, terminal and stand boxes in the other, and changing the stand meant choosing a name from a dropdown with nothing to show where it was. Now what you brief about an airport sits together, in the order the aircraft meets it: the stand, then the runway, on departure, and the runway, then the stand, on arrival. Airline crews take the stand's coordinates from the airport's parking chart to align the IRS, and the card shows them in degrees and decimal minutes. In the picker the map shows where every stand is, and a runway draws its departure path or its approach, so 07C and 25C read the right way round.
