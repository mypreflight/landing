export const SITE_NAME = "MyPreflight";
export const SITE_ORIGIN = "https://mypreflight.io";
export const APP_URL = "https://app.mypreflight.io";
export const DISCORD_URL = "https://discord.gg/YVatSsZQyw";
export const OWNER_NAME = "Oskar Barcz";
export const OWNER_URL = "https://barcz.me";

export const CTA_DISCORD_LABEL = "Chat with us on Discord";

export const APP_PATH_PREFIXES = ["/map"] as const;

export const SITE_TITLE = `${SITE_NAME}, the electronic flight board for flight simulation`;
export const SITE_DESCRIPTION =
  "Flight dispatch, real briefing materials, live tracking and a logbook for flight simulation, in one dashboard that runs in your browser. Launching late 2026.";

export const OG_IMAGE = {
  path: "/og.png",
  width: 1200,
  height: 630,
  alt: "MyPreflight, the electronic flight board for flight simulation, beside a leg tracked live from Boston to Philadelphia.",
} as const;

export const HERO = {
  eyebrow: "In development",
  heading: {
    before: "The all-in-one",
    accent: "flight management app",
    after: "for your virtual flights.",
  },
  lead: "Flight dispatch, real briefing materials, live tracking and a logbook, in one tool available in your browser and mobile devices.",
  note: [
    "Product is currently in early test phase, and the public launch is scheduled for late 2026.",
    "Join our Discord, to not miss it!",
  ],
} as const;

export const PRODUCT_LEAD = {
  eyebrow: "The Preflight",
  heading: "Know what you carry",
  lead: "From picking the aircraft to closing the log, MyPreflight keeps the whole flight in one place. No spreadsheet on a second monitor, no folder of printouts: the board holds the plan, the numbers and the state of the flight as it happens.",
} as const;

export const FEATURES = [
  {
    eyebrow: "Dispatch",
    heading: "The paperwork is done before you sit down.",
    lead: "Plan the flight in SimBrief, or book it with your virtual airline. MyPreflight reads it and prepares the documents: a passenger information list, cargo manifests, load plans, laid out the way dispatch hands them to a crew and waiting on the board before you reach the cockpit.",
    shot: {
      light: "/screenshots/dispatch-light.avif",
      dark: "/screenshots/dispatch-dark.avif",
      alt: "A cargo aboard panel reading 8,500 kg in 8 devices over 13 shipments with no dangerous goods, above a hold diagram marking which compartments carry cargo and which carry baggage from nose to tail.",
    },
  },
  {
    eyebrow: "Preflight briefing",
    heading: "You read the briefing instead of assembling it.",
    lead: "Tulips out of Amsterdam on a heavy cargo run do not brief like ski tourists into Aspen. The board reads your flight plan, works out what sort of flight this is, and has the route, the weather and the NOTAMs ready when you open it.",
    shot: {
      light: "/screenshots/briefing-light.avif",
      dark: "/screenshots/briefing-dark.avif",
      alt: "The raw METAR and TAF for Warsaw Chopin side by side, above the NOTAMs in force: a closed taxiway and bird activity at the aerodrome, each decoded to a plain subject and its period of validity.",
    },
  },
  {
    eyebrow: "Live tracking",
    heading: "The board follows the flight, not the plan.",
    lead: "Position, altitude and phase update as you fly, and so does everything attached to the leg. Aircraft, crew, cargo and times stay pinned to the flight, so the board shows what is happening rather than what was intended.",
    shot: {
      light: "/screenshots/tracking-light.avif",
      dark: "/screenshots/tracking-dark.avif",
      alt: "A leg from Boston to Philadelphia tracked live at 28,000 ft and 420 knots: the flown path is drawn behind the aircraft and shaded by altitude, the planned route ahead of it stays dashed.",
    },
  },
  {
    eyebrow: "Logbook",
    heading: "The hours stop disappearing.",
    lead: "Every leg files itself the moment you shut down: hours on type, fields visited, landings counted day and night. A postcard for every new city, a passport stamp for every new country. But the record is the point.",
    shot: {
      light: "/screenshots/logbook-light.avif",
      dark: "/screenshots/logbook-dark.avif",
      alt: "Seven logged legs listed newest first: the date and off-block time, the flight number and the registration flown, the route from Boston to Philadelphia or Frankfurt to New York, and the block and air time of each.",
    },
  },
] as const;

export const HOW_IT_WORKS = {
  eyebrow: "How to get started",
  heading: "Four steps, once.",
  steps: [
    {
      title: "Create a free account",
      detail: "The app runs in the browser, visit it from your computer, tablet or smartphone.",
    },
    {
      title: "Plan the flight",
      detail: "Pick a route and an aircraft, import your SimBrief flight plan, get the briefings.",
    },
    { title: "Brief your flight", detail: "Check your weather, NOTAMs, route, cargo manifests and passenger list." },
    {
      title: "Just fly",
      detail: "Track the flight from pushback through to shutdown. The app measures your time and performance.",
    },
  ],
} as const;

export const FAQ = {
  eyebrow: "Questions",
  heading: "The usual ones.",
  items: [
    {
      question: "What platforms are supported on the start date?",
      answer:
        "For the release, we support Windows 10 & 11, running Microsoft Flight Simulator 2020 or 2024. In brief future, we consider expanding our compatibility for XPlane and other sims.",
    },
    {
      question: "Do I need to install anything?",
      answer:
        "Yes, and no. MyPreflight runs in the browser, so the board will be there on whatever machine you are flying from. However, to get your position and flight state, you will need a free companion app running next to your simulator.",
    },
    {
      question: "What will it cost?",
      answer:
        "Base platform should remain free. Processing flight plans, generating briefings and general flight tracking infrastructure is cheap to run. Unless any of these circumstances change, platform remains free.",
    },
    {
      question: "Can I ask for a feature?",
      answer:
        "We highly encourage you to leave your feature requests and feedback right on our Discord. That is where the build is discussed, and where a suggestion is most likely to reach the development team!",
    },
  ],
} as const;

export const PRIVACY = {
  title: `Privacy policy, ${SITE_NAME}`,
  description:
    "Short and full descriptions of what data MyPreflight app collects, why it needs it, and how long it is kept.",
  eyebrow: "How we manage your data?",
  heading: "Privacy policy",
  lead: "Short and full descriptions of what data MyPreflight app collects, why it needs it, and how long it is kept.",
  versionLabel: "Version:",
  version: "1.0",
  effectiveLabel: "effective",
  effectiveDate: "1 September 2026",
  effectiveDateIso: "2026-09-01",
  modeLabel: "Choose how much detail to read",
  modeKicker: "Reading",
  modeShort: "Simple language",
  modeLong: "Full legal text",
  outlineLabel: "On this page",
  contactLabel: "Privacy questions go to",
  contactEmail: "gdpr@mypreflight.io",
} as const;

export const TERMS = {
  title: `Terms of service, ${SITE_NAME}`,
  description:
    "The terms you agree to when using MyPreflight: what the service is, acceptable use, the aviation disclaimer, your content, and liability.",
  eyebrow: "The rules of using MyPreflight",
  heading: "Terms of service",
  lead: "What MyPreflight is, what you agree to when you use it, and what it is explicitly not a substitute for.",
  versionLabel: "Version:",
  version: "1.0",
  effectiveLabel: "effective",
  effectiveDate: "1 September 2026",
  effectiveDateIso: "2026-09-01",
  outlineLabel: "On this page",
  contactLabel: "Questions about these terms go to",
  contactEmail: "gdpr@mypreflight.io",
  privacyPrefix: "Personal data is covered separately in the",
  privacyLink: "privacy policy",
} as const;

export const NOT_FOUND = {
  title: `Page not found, ${SITE_NAME}`,
  description: "Page or resource not found. Head back to the MyPreflight home page.",
  display: "404",
  heading: "Page or resource not found",
  lead: "The link may be out of date, or it may never have existed.",
  requestedLabel: "Requested",
  action: "Back to home",
  mistakePrefix: "If you think this is a mistake,",
  mistakeLink: "tell us all about it on Discord",
} as const;

export const CLOSING_CTA = {
  heading: "We are building it now.",
  lead: "Launch is scheduled for late 2026. Come and help shape what the board becomes.",
} as const;

export const LLMS = {
  summary:
    "MyPreflight is a set of connected tools for flight simulation: flight dispatch, real briefing materials, live tracking and a logbook, combined in one dashboard that runs in the browser. It is in early testing, and the public launch is scheduled for late 2026.",
  detail: [
    "The board reads a flight plan from SimBrief, or a booking made with a virtual airline, and prepares the documents dispatch would hand to a crew: a passenger information list, cargo manifests and load plans. It works out what sort of flight it is, then has the route, the weather and the NOTAMs ready before you reach the cockpit.",
    "Once the leg is live, position, altitude and phase update as you fly, and the aircraft, crew, cargo and times stay pinned to the flight. Every leg files itself the moment you shut down, so hours on type, fields visited and landings counted day and night all end up in the logbook.",
    "At release the supported setup is Windows 10 or 11 running Microsoft Flight Simulator 2020 or 2024. The dashboard itself runs in any browser, on a computer, tablet or phone, but reading position and flight state out of the simulator needs a free companion app running alongside it. The base platform is expected to remain free.",
    "Development is posted on Discord first. That is also where feature requests reach the development team.",
  ],
  sections: [
    {
      title: "Docs",
      links: [
        {
          label: "MyPreflight landing page",
          url: `${SITE_ORIGIN}/index.html.md`,
          note: "the whole site as plain markdown: what the board does, the four feature areas, how to get started, and the FAQ",
        },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "MyPreflight app", url: APP_URL, note: "sign in to the flight board" },
        { label: "Discord", url: DISCORD_URL, note: "development updates, feature requests and support" },
      ],
    },
    {
      title: "Optional",
      links: [{ label: OWNER_NAME, url: OWNER_URL, note: "the developer behind MyPreflight" }],
    },
  ],
} as const;

export const FOOTER = {
  groups: [
    {
      label: "Product",
      links: [
        { label: "Sign in", href: `${APP_URL}/sign-in`, external: true },
        { label: "Discord", href: DISCORD_URL, external: true },
      ],
    },
    {
      label: "Legal",
      links: [
        { label: "Privacy policy", href: "/privacy", external: false },
        { label: "Terms of service", href: "/terms", external: false },
      ],
    },
  ],
  creditPrefix: " a digital product created by",
  description: [
    "MyPreflight is a set of connected tools for flight simulation. Flight dispatch, real briefing materials, live tracking and logbook combined in one, convenient dashboard.",
    "The board is under heavy development, and general launch is scheduled for late 2026. Development updates are posted on Discord regularly.",
  ],
} as const;
