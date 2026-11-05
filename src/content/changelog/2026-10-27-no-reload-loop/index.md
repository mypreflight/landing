---
title: "The app stops reloading itself after an update"
date: 2026-10-27T18:23:35Z
version: "2.112.1"
area: App
summary: After a release, a browser still holding the previous version could reload the page over and over without settling. The app now spots the loop within four loads, drops the stale copy and opens the current release.
---
