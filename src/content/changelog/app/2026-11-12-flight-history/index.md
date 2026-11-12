---
title: "See where every finished flight went, minute by minute"
date: 2026-11-12T10:20:24Z
version: "2.128.0"
area: "Flight tracking"
summary: "Flight history opens a finished flight on its map: the track you flew over the filed route, each block time against schedule, fuel burned against the planned trip, and a vertical profile of altitude and ground speed against the planned altitude. Documents holds the briefing you flew it on."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The old flight page for LH40, Frankfurt to New York: an indigo banner, tabs for Overview, Fuel & crew, Events, Map, Route, OFP and Delay report, and an overview showing block time 9h 00m and air time 8h 30m twice."
      caption: "The map was the fourth tab, under a banner and an overview that repeated its own figures."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "LH40 on the globe from Frankfurt to New York, its track over the filed route across the North Atlantic, with off-block 17:45Z +5 min late, on-block 02:45Z +30 min late, block time 9h 00m and the vertical profile marked at 22:16Z."
      caption: "The flight opens on its map, with each block time against schedule above it and the profile below."
  - after:
      light: ./profile-light.avif
      dark: ./profile-dark.avif
      alt: "LH40's vertical profile from 17:45Z to 02:45Z: altitude climbing to FL360, then stepping to FL370 and FL400 against the dashed planned altitude, ground speed in grey, and 22:16Z marked at 37,000 ft and 429 kt."
      caption: "Point at any minute and the aircraft on the map moves to where you were."
  - before:
      light: ./list-before-light.avif
      dark: ./list-before-dark.avif
      alt: "Flight history listing AA4905 and AA4917 from Boston to Philadelphia and LH40 from Frankfurt to New York, each with its date, block time and air time."
      caption: "One row per flight, and nothing more until you opened one."
    after:
      light: ./list-after-light.avif
      dark: ./list-after-dark.avif
      alt: "The same list with LH40 previewed beside it: a globe with its track, off-block +5 min late, takeoff on time, on-block +30 min late, air time 8h 30m and an Open flight button."
      caption: "Point at a flight to preview its track and times before you open it."
---

Flight history used to open on a banner and a row of tabs, with the map fourth along and the same block and air times shown twice. Now the map leads. The track you flew sits over the route you filed, and the profile under it shows where you climbed, stepped up and started down against the plan. Point at any minute on the profile and the aircraft moves to where you were, with your altitude, ground speed and track at that moment.

Off-block, takeoff, arrival and on-block, the four times airlines log for every flight, each read against the schedule in words, such as +30 min late or On time. The list previews a flight before you open it, and Documents keeps the loadsheet, the OFP, the manifests and the runway analysis you flew with.
