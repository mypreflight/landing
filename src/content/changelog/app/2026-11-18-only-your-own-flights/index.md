---
title: "Your dashboard shows only your own flights"
date: 2026-11-18T12:02:00Z
version: "2.139.0"
area: "Dashboard"
summary: "Recent flights, Flight history and Next scheduled flight now show only your own flights. A new pilot adds a SimBrief ID right on the dashboard and goes straight on to the import, and the import window lays the plan out as airports, block times and your aircraft."
figures:
  - before:
      light: ./dashboard-before-light.avif
      dark: ./dashboard-before-dark.avif
      alt: "The dashboard of a pilot with no flights: Recent flights listing LH40 FRA to JFK and AA4917 and AA4905 BOS to PHL, Next scheduled flight AA4906 BOS to PHL with Add your SimBrief ID and See flight details, and dashed boxes for the current flight, the location and postcards."
      caption: "A new pilot saw other pilots' flights as their recent flights and their next one."
    after:
      light: ./dashboard-after-light.avif
      dark: ./dashboard-after-dark.avif
      alt: "The same dashboard: No flight in progress, then No flight scheduled with the line Add your SimBrief ID in order to import your first flight plan and an Add SimBrief ID button, Location unknown and No postcards yet."
      caption: "Only your own flights, and one button to your first plan."
  - before:
      light: ./import-before-light.avif
      dark: ./import-before-dark.avif
      alt: "The SimBrief import window for DLH80 listing route EDDF to KJFK, departure 05JAN 09:00Z and aircraft A339 D-AIMC as labels and values."
      caption: "The plan as a list of labels and values."
    after:
      light: ./import-after-light.avif
      dark: ./import-after-dark.avif
      alt: "The same window with FRA Frankfurt to JFK New York, scheduled off-block 09:00Z and on-block 17:25Z on 05JAN with a block time of 8h 25m between them, and the A330-900 D-AIMC with its picture."
      caption: "Airports with their cities, the block times and your aircraft, line by line."
footnote: "The import window was opened and closed without importing."
---

A new account used to see other pilots' finished flights as its own, and the next ready flight in the shared pool as its next one, so the dashboard looked busy before you had flown anything. Now Next scheduled flight comes from the rotations Operations release to you, Recent flights stays out of the way until your first flight closes, and every empty card says what will show up there. Add SimBrief ID opens the SimBrief connection on the dashboard itself and goes straight on to the import once your ID is saved.
