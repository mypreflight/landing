---
title: "See the FIRs you fly through"
date: 2026-11-02T15:20:20Z
version: "2.122.0"
area: "Maps"
summary: "Map options has a new Airspace setting that draws flight information region boundaries on the Tracking view, the public flight page and the operations route map. Each FIR is named along its own border, the way an enroute chart labels it."
figures:
  - before:
      light: ./before-light.avif
      dark: ./before-dark.avif
      alt: "The Boston to Philadelphia route on the map with state and town names, and no airspace boundaries."
      caption: "No airspace, and the basemap's place names competing with the route's fixes."
    after:
      light: ./after-light.avif
      dark: ./after-dark.avif
      alt: "The same route with grey dash-dot FIR boundaries, KZNY New York and KZBW Boston named along their shared border."
      caption: "KZNY and KZBW named along their shared border. Place names give way while FIRs show."
---

Pilots asked to see whose airspace they fly through. Enroute charts mark every FIR boundary because that's where crews change frequency, and at the edge of oceanic airspace, where they need a clearance to enter. On VATSIM it also tells you which controller you'll talk to next. FIRs are off until you turn them on in Map options. Boundaries come from the [VATSpy Data Project](https://github.com/vatsimnetwork/vatspy-data-project), licensed CC BY-SA 4.0.
