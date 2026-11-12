---
title: "Sign in by approving a code in your browser"
date: 2026-11-01T23:47:50Z
version: "1.5.0"
area: "Account"
summary: "The Transponder no longer asks for your email and password. It shows a short code and opens MyPreflight in your browser, where you sign in the usual way and approve the code. Press s on the dashboard to sign in or out."
figures:
  - before:
      light: ./before.avif
      alt: "The Transponder 1.4.0 console asking for the MyPreflight email, filled in as cabin-crew@example.com, and the password, typed as eight asterisks."
      caption: "1.4.0 asked for your email and password in the console."
    after:
      light: ./after.avif
      alt: "The Transponder 1.5.0 console: Sign in to MyPreflight in your browser, open https://app.mypreflight.io/activate, code SFCD-NLVQ, and approve only if the browser shows the same code."
      caption: "1.5.0 shows a code and opens the page for it. Your password never passes through the Transponder."
---

The code works on any device, so the browser doesn't have to run on the simulator PC, and it lasts ten minutes. Once you approve it, the session is kept in the Windows credential store and lasts 90 days from its last use, so if you fly regularly you approve it once. The page you approve it on is in the [web app changelog](/changelog/app/2026-11-01-transponder-browser-sign-in/).
