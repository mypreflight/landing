export const SITE_NAME = "MyPreflight";
export const SITE_ORIGIN = "https://mypreflight.io";
export const APP_URL = "https://app.mypreflight.io";
export const DISCORD_URL = "https://discord.gg/YVatSsZQyw";
export const APP_RELEASES_URL = "https://github.com/mypreflight/app/releases/tag";
export const TRANSPONDER_RELEASES_URL = "https://github.com/mypreflight/transponder-app/releases/tag";
export const TRANSPONDER_SOURCE_URL = "https://github.com/mypreflight/transponder-app";
export const TRANSPONDER_DOWNLOAD_URL =
  "https://github.com/mypreflight/transponder-app/releases/latest/download/mypreflight-transponder.exe";
export const OWNER_NAME = "Oskar Barcz";
export const OWNER_URL = "https://barcz.me";

export const NAV = {
  homeLabel: "MyPreflight home",
  transponderLabel: "Transponder",
  changelogLabel: "Changelog",
  themeLabel: "Switch theme",
  signInLabel: "Sign in",
} as const;

export const CTA_DISCORD_LABEL = "Chat with us on Discord";
export const CTA_CHANGELOG_LABEL = "See recent development updates";

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
  releaseLabel: "Release",
  changelogLink: "See what we're preparing",
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

export const CHANGELOG = {
  path: "/changelog",
  feedPath: "/changelog/feed.xml",
  markdownPath: "/changelog.md",
  title: `Changelog, ${SITE_NAME}`,
  description:
    "Every feature and fix that reaches the MyPreflight web app and the Transponder, newest first, with the screen before and after the change.",
  heading: "Changelog",
  switchLabel: "Choose a changelog",
  movedLabel: "The changelog now lives at",
  feedLabel: "Follow the feed",
  discordLabel: "Release posts on Discord",
  pageSize: 5,
  olderLabel: "Older changes",
  loadingLabel: "Loading older changes...",
  loadedLabel: "Older changes loaded.",
  latestLabel: "Latest changes",
  earlierLabel: "Earlier",
  laterLabel: "Later",
  neighboursLabel: "More changes",
  compareLabel: "Show the screen",
  versionLabel: "Version",
  currentVersionLabel: "Your version",
  githubLabel: "See on GitHub",
  beforeLabel: "Before",
  afterLabel: "After",
} as const;

export const CHANGELOGS = {
  app: {
    name: "Web app",
    path: `${CHANGELOG.path}/app`,
    feedPath: `${CHANGELOG.path}/app/feed.xml`,
    markdownPath: `${CHANGELOG.path}/app.md`,
    title: `Web app changelog, ${SITE_NAME}`,
    longTitle: `${SITE_NAME} web app changelog`,
    description:
      "Every feature and fix that reaches the MyPreflight web app, newest first, with the screen before and after the change.",
    lead: "Here's what we've been building into the web app, one release at a time. The newest is at the top, and wherever a screen changed, you can flip between how it looked before and after.",
    releasesUrl: APP_RELEASES_URL,
    versionExample: "2.124.0",
    areas: ["Flight tracking", "Maps", "Briefing", "Dashboard", "Transponder", "Account", "Airport data", "App"],
  },
  transponder: {
    name: "Transponder",
    path: `${CHANGELOG.path}/transponder`,
    feedPath: `${CHANGELOG.path}/transponder/feed.xml`,
    markdownPath: `${CHANGELOG.path}/transponder.md`,
    title: `Transponder changelog, ${SITE_NAME}`,
    longTitle: `${SITE_NAME} Transponder changelog`,
    description:
      "Every Transponder release a pilot will notice, newest first, with the console before and after the change.",
    lead: "The Transponder is the small Windows app that sends your position from the simulator to MyPreflight. Here's every release you'll notice, newest first, and wherever the console changed, you can flip between how it looked before and after.",
    releasesUrl: TRANSPONDER_RELEASES_URL,
    versionExample: "1.5.4",
    areas: ["Tracking", "Dashboard", "GSX", "Account"],
  },
} as const;

export type ChangelogProduct = keyof typeof CHANGELOGS;

export const TRANSPONDER = {
  path: "/transponder",
  markdownPath: "/transponder.html.md",
  title: `Transponder for Windows, ${SITE_NAME}`,
  description:
    "Download the Transponder, the small Windows app that reports your aircraft from Microsoft Flight Simulator 2024 to MyPreflight and switches itself on at boarding and off at the gate.",
  heading: "The window you leave open beside the sim.",
  lead: "Six boxes, one job each. The Transponder reads your aircraft from Microsoft Flight Simulator 2024, reports it to MyPreflight, and switches itself on and off with your flight.",
  file: "mypreflight-transponder.exe",
  size: "110 MB",
  platform: "Windows 10 and 11",
  sim: "Microsoft Flight Simulator 2024",
  downloadLabel: "Download for Windows",
  versionLabel: "Version",
  releaseNotesLabel: "What changed",
  freeNote: "Free and open source",
  checksumNote: "SHA-256 on every GitHub release",
  sourceLabel: "Read the source",
  consoleLabel:
    "The Transponder's dashboard during boarding at Boston, gate B30. 1 Crew: Rick Doe. 2 Current service: AAL4908 from BOS to PHL, a B77W registered N720AN. 3 Transponder: simulator connected, squawk 2000, MODE C, last report 12:41:10Z. 4 Comms: Discord connected, presence on, Boarding, takeoff at 13:15 UTC. 5 Status: ADS-B, tracker and Transponder all OK. 6 Ground: catering done, refueling 9840 kg loaded, boarding 112 of 296 passengers, jetway docked.",
  calloutsLabel: "What each box does",
  callouts: [
    {
      key: "1",
      title: "Who is signed in",
      detail: "You approve a short code in your browser once. No password is typed here.",
      href: "#setup",
    },
    {
      key: "2",
      title: "Your current flight",
      detail: "Callsign, route and aircraft, read from the flight you started in MyPreflight.",
      href: "#setup",
    },
    {
      key: "3",
      title: "The transponder itself",
      detail: "MODE C from boarding, standby again from on-block.",
      href: "#modes",
    },
    {
      key: "4",
      title: "Discord rich presence",
      detail: "Your route and phase as your Discord activity, once you turn it on.",
      href: "#integrations",
    },
    {
      key: "5",
      title: "Services and updates",
      detail: "Both MyPreflight services checked, and a new version one key away.",
      href: "#footprint",
    },
    {
      key: "6",
      title: "GSX ground services",
      detail: "The turnaround, shown while GSX Pro works your aircraft.",
      href: "#integrations",
    },
  ],
  modes: {
    id: "modes",
    eyebrow: "Transponder mode",
    heading: "It switches itself on at boarding and off at the gate.",
    lead: "The Transponder follows your flight in MyPreflight. It starts in standby and sends nothing until boarding starts, then reports your position until you're on block.",
    sentLabel: "Sent",
    phases: [
      { label: "Check-in", mode: "STBY", sent: "Nothing", weight: 1 },
      { label: "Boarding", mode: "MODE C", sent: "Every 10 s", weight: 1 },
      { label: "Taxi out", mode: "MODE C", sent: "Every 10 s", weight: 1 },
      {
        label: "Cruise",
        mode: "MODE C",
        sent: "Takeoff and touchdown the second they happen, every 30 s above 10,000 ft",
        weight: 4,
      },
      { label: "Taxi in", mode: "MODE C", sent: "Every 10 s", weight: 1 },
      { label: "Offboarding", mode: "STBY", sent: "Nothing", weight: 1 },
    ],
    note: "Start it mid-flight and it arms straight away. In between, press t to switch it by hand; it stays where you put it until the flight reaches the next edge.",
  },
  setup: {
    id: "setup",
    eyebrow: "Setup",
    heading: "Setting it up takes one download and one code.",
    lead: "No installer and nothing to configure. The callsign comes from the flight you start in MyPreflight, so the Transponder never transmits without one.",
    steps: [
      {
        title: "Give it a folder",
        detail: "Save mypreflight-transponder.exe into a folder of its own. Everything it writes stays there.",
      },
      {
        title: "Start the sim",
        detail: "Microsoft Flight Simulator 2024 first, and Discord too if you want rich presence.",
      },
      {
        title: "Double-click it",
        detail:
          "The file isn't code-signed, so Windows may say it doesn't recognise the app. Choose More info, then Run anyway.",
      },
      {
        title: "Approve the code",
        detail:
          "It opens MyPreflight in your browser. Check the code matches, then approve. The sign-in lasts 90 days from its last use.",
      },
      {
        title: "Fly",
        detail: "Start your flight in MyPreflight. The Transponder picks it up and arms itself when boarding starts.",
      },
    ],
    consoleLabel:
      "The Transponder asking you to sign in: open https://app.mypreflight.io/activate and check that the browser shows the code SFCD-NLVQ before you approve it.",
  },
  footprint: {
    id: "footprint",
    eyebrow: "Footprint",
    heading: "It stays light on your sim PC and open to anyone who reads it.",
    lead: "One file, no installer, nothing hidden. The source is public, and every release on GitHub lists its SHA-256.",
    specs: [
      { term: "Runs on", value: "Windows 10 and 11" },
      { term: "Reads", value: "Microsoft Flight Simulator 2024" },
      { term: "Download", value: "One .exe, 110 MB" },
      { term: "Memory", value: "About 20 MB" },
      { term: "Installs", value: "Nothing: no installer, nothing in %APPDATA% or the registry" },
      {
        term: "Writes",
        value:
          "Only into its own folder: your session, encrypted with Windows DPAPI, and a log capped at 5 MB plus one older copy",
      },
      { term: "Uninstall", value: "Delete its folder" },
      {
        term: "Updates",
        value:
          "Checks GitHub every 15 minutes. Press u to save the new version to Downloads, checksum verified. It never replaces itself while it runs.",
      },
      { term: "Licence", value: "Open source, under the Unlicense" },
    ],
    keysHeading: "Keys",
    keys: [
      { key: "s", action: "Sign in through the browser, or sign out" },
      { key: "esc", action: "Stop waiting for a browser sign-in" },
      { key: "t", action: "Switch between MODE C and STBY by hand" },
      { key: "c", action: "Transmit under a callsign you type" },
      { key: "r", action: "Read the current flight again" },
      { key: "d", action: "Show the log" },
      { key: "u", action: "Save a newer release to Downloads" },
    ],
  },
  integrations: {
    id: "integrations",
    eyebrow: "GSX and Discord",
    heading: "GSX and Discord join in when you use them.",
    lead: "Neither is needed. Without GSX Pro, box 6 never appears, and rich presence stays off until you turn it on.",
    items: [
      {
        key: "6",
        title: "GSX Pro",
        body: "While GSX works your aircraft, box 6 shows the stand and each service: passengers aboard, bags, holds and fuel. Turn on the GSX integration on your account page, and requesting boarding in GSX starts boarding in MyPreflight, while deboarding starts and then finishes offboarding. Nothing is ever sent to GSX.",
        consoleLabel:
          "Box 6, Ground, at Boston gate B30: catering done, refueling running with 9840 kg loaded, boarding running with 112 of 296 passengers aboard and bags at 40%, jetway done and docked.",
      },
      {
        key: "4",
        title: "Discord rich presence",
        body: "With rich presence on, box 4 sets your Discord activity to your route and phase, so friends can see the flight you're on. It's off until you turn it on in MyPreflight, because it shows others what you're flying.",
        consoleLabel:
          "Boxes 3 and 4. Transponder: simulator connected, callsign AAL4908, squawk 2000, MODE C, last report 12:41:10Z. Comms: Discord connected, presence on, Boston (BOS) to Philadelphia (PHL), Boarding, takeoff at 13:15 UTC.",
      },
    ],
  },
  closing: {
    heading: "Download it before your next boarding.",
    lead: "Free, open source and one file. It tells you when there's a new version.",
  },
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
        {
          label: "MyPreflight Transponder",
          url: `${SITE_ORIGIN}${TRANSPONDER.markdownPath}`,
          note: "the Windows app that reports your aircraft from the simulator: what it does, how to set it up, its footprint and the download",
        },
        {
          label: "MyPreflight web app changelog",
          url: `${SITE_ORIGIN}${CHANGELOGS.app.markdownPath}`,
          note: "every feature and fix that has reached the web app, newest first",
        },
        {
          label: "MyPreflight Transponder changelog",
          url: `${SITE_ORIGIN}${CHANGELOGS.transponder.markdownPath}`,
          note: "every release of the Windows app that sends your position from the simulator, newest first",
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
        { label: "Transponder", href: TRANSPONDER.path, external: false },
        { label: "Changelog", href: CHANGELOGS.app.path, external: false },
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
