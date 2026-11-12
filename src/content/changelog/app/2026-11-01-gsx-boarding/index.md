---
title: "GSX can start boarding and deboarding"
date: 2026-11-01T21:59:53Z
version: "2.116.0"
area: "Transponder"
summary: "With the GSX integration on, requesting boarding or deboarding in GSX moves your flight to Boarding or Offboarding, and GSX finishing deboarding finishes offboarding. The switches are at the end of your account page."
figures:
  - after:
      light: ./gsx-light.avif
      dark: ./gsx-dark.avif
      alt: "The GSX integration section of the account page, switched on: two plan-view drawings of an aircraft at a jet bridge, one filling the cabin from the rear and one emptying it from the front, above the Automatic boarding and Automatic deboarding switches."
      caption: "Each setting has a drawing of the aircraft at the gate, which loops while the setting is on."
---

At a real gate the ground handling agent opens and closes boarding, not the crew. In the sim that part is played by GSX, so starting boarding used to mean doing it twice: once in GSX and once in MyPreflight. Now one request does both, and the activity log records whether GSX started a step or you did it by hand.
