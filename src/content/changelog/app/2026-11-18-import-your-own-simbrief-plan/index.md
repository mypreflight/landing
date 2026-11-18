---
title: "Import your own SimBrief plan and fly it straight away"
date: 2026-11-18T12:00:00Z
version: "2.139.0"
area: "Dashboard"
summary: "On the dashboard, Import from SimBrief shows your latest SimBrief plan and checks you in with its estimated times, so you no longer wait for Operations. A new pilot adds a SimBrief ID right there, and Recent flights, Flight history and Next scheduled flight now show only your own flights."
figures:
  - before:
      light: ./dashboard-before-light.avif
      dark: ./dashboard-before-dark.avif
      alt: "The dashboard of a pilot with no flights: No flight in progress in a dashed box, Recent flights listing LH40 FRA to JFK and AA4917 and AA4905 BOS to PHL, Next scheduled flight AA4906 BOS to PHL at 13:00Z on 01JAN, Location unknown, and the postcards line in a dashed box."
      caption: "A new pilot saw other pilots' flights as their recent flights and their next one."
    after:
      light: ./dashboard-after-light.avif
      dark: ./dashboard-after-dark.avif
      alt: "The same dashboard: No flight in progress, then No flight scheduled with the line Add your SimBrief ID in order to import your first flight plan and an Add SimBrief ID button, Location unknown and No postcards yet."
      caption: "Only your own flights, and one button to your first plan."
  - after:
      light: ./import-light.avif
      dark: ./import-dark.avif
      alt: "The SimBrief import window for DLH80: FRA Frankfurt to JFK New York, scheduled off-block 09:00Z and on-block 17:25Z on 05JAN with a block time of 8h 25m, the A330-900 D-AIMC with its picture, and an Import and check in button."
      caption: "Check it's the plan you just made, then import it and you're checked in."
footnote: "The import window was opened and closed without importing."
---

Until now a flight reached you only after Operations had imported and released it, and a new account saw other pilots' flights on its dashboard. Your own import builds the same briefing, loadsheet and manifest an Operations import does. If your plan names a registration the fleet doesn't have yet, it's added for Operations to confirm instead of stopping the import, and the departure stand stays open until boarding starts, so you can still pick one after you're checked in. A plan you import but never board is removed 24 hours after check-in, so it can't keep you from importing the next one.
