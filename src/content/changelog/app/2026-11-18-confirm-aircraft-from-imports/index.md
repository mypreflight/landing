---
title: "Confirm the aircraft an import added to the fleet"
date: 2026-11-18T12:00:00Z
version: "2.137.0"
area: "App"
summary: "A SimBrief plan whose registration isn't in the fleet adds the aircraft with SimBrief's type, marked Unconfirmed in the fleet table and on its page. Operations check the registration and type, then choose Confirm correctness."
figures:
  - before:
      light: ./fleet-before-light.avif
      dark: ./fleet-before-dark.avif
      alt: "The last three rows of the Lufthansa fleet table: D-AIMK planned and D-AIML in cruise, each with a SELCAL, base FRA and a cabin, then D-TEST, an Airbus A330-900 checked in with no SELCAL, base or cabin and the Lufthansa 2026 livery."
      caption: "An aircraft an import added looked like any other."
    after:
      light: ./fleet-after-light.avif
      dark: ./fleet-after-dark.avif
      alt: "The same rows with an amber Unconfirmed badge next to D-TEST."
      caption: "Aircraft an import added carry an Unconfirmed badge until someone checks them."
  - after:
      light: ./aircraft-light.avif
      dark: ./aircraft-dark.avif
      alt: "The D-TEST page: Airbus A330-900 under the registration, an amber Unconfirmed badge, and Confirm correctness next to Update airframe data in the top bar."
      caption: "The aircraft's page puts Confirm correctness next to Update airframe data."
  - after:
      light: ./confirm-light.avif
      dark: ./confirm-dark.avif
      alt: "The D-TEST / Confirm correctness dialog: D-TEST was added to the fleet by a SimBrief import, its registration and type were typed into SimBrief so they may be wrong, and it asks to confirm only if D-TEST is a real Airbus A330-900 of Lufthansa, with Cancel and Confirm aircraft."
      caption: "The dialog says what to check before you confirm."
footnote: "The confirmation dialog was opened and closed without confirming."
---

SimBrief takes any registration you type, so an aircraft an import adds may not exist, or may not be the type the plan says. Until now nothing set those aircraft apart from the ones Operations had entered by hand. The badge shows which ones still need a look, and the dialog asks for exactly that check before the badge goes, with Update airframe data next to it for anything that's wrong.
