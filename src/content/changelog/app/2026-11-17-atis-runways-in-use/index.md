---
title: "See the runways the ATIS has in use, with the wind on each"
date: 2026-11-17T14:43:31Z
version: "2.135.0"
area: "Briefing"
summary: "The runway card and the runway picker now mark the runways the ATIS has in use for your departure or arrival, with its information letter, and give the headwind or tailwind and the crosswind on each runway. Read the ATIS from SayIntentions AI or the real-world one."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "AA4912's Departure airport card at Boston Logan: the METAR, the TAF and the SayIntentions ATIS, information Delta, departing runway 9, beside runway 04L, asphalt with HIRL, 042° magnetic, 2,396 m long, 46 m wide, at 20 ft."
      caption: "The ATIS said runway 9, and comparing it with your 04L was up to you."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The same card with a SayIntentions AI and Real switch above the ATIS, and next to 04L an amber ATIS D chip reading DEP 09 and an amber wind chip with a 9 kt tailwind and no crosswind."
      caption: "Amber when the ATIS departs from another runway, and amber again for the tailwind."
  - before:
      light: ./runway-before-light.avif
      dark: ./runway-before-dark.avif
      alt: "The Philadelphia, Select arrival runway dialog listing 08, 09L, 09R, 17, 26, 27L, 27R and 35 with length, width, elevation, surface and course, beside the airport map."
      caption: "Every runway, with nothing from the ATIS."
    after:
      light: ./runway-after-light.avif
      dark: ./runway-after-dark.avif
      alt: "The same dialog with the ATIS source, SayIntentions AI at 11:47Z, and the wind 200/08 above the list. ATIS Y chips mark 27L for departure and 27R for arrival, and every runway has a wind chip, amber with a 3 to 6 kt tailwind on 08, 09L, 09R and 35."
      caption: "ARR and DEP on the runways in use, and the wind along and across every runway."
footnote: "The runway dialog was opened for the shots and closed without picking a runway."
---

The ATIS tells you which runways are in use, but until now it sat in the weather column as text, and checking it against the runway in your flight plan was up to you. Now the runway card says at a glance whether the ATIS uses your runway, and the picker shows which runways it uses for arrivals and for departures, so a runway change before pushback or before the descent takes one look. Airline crews make the same check when they copy the ATIS before departure and again before top of descent, comparing the runway in use with the one set up in the FMC and briefing again when they differ. Pick SayIntentions AI or Real, the newer of the FAA and atis.guru ATIS, as your default in Settings, and switch between them in the briefing.
