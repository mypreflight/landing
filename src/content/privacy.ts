import type { Policy } from "../lib/policy";

export const PRIVACY_SHORT: Policy = {
  sections: [
    {
      number: "1",
      title: "Who is responsible for your data?",
      blocks: [
        { kind: "paragraph", text: "The controller of your personal data is:" },
        {
          kind: "lines",
          lines: [
            "Oskar Barcz, operating as a sole proprietor",
            "ul. Adama Naruszewicza 30/98",
            "02-627 Warsaw, Poland",
            "NIP: 9542811840",
            "Privacy contact / Data Protection Officer: gdpr@mypreflight.io",
          ],
        },
        {
          kind: "paragraph",
          text: "“Controller” means the person responsible for deciding why and how your personal data is used.",
        },
      ],
    },
    {
      number: "2",
      title: "What data MyPreflight uses",
      blocks: [
        { kind: "paragraph", text: "We use only the information needed to run, secure, and improve the Service." },
        { kind: "paragraph", text: "Depending on how you use MyPreflight, this may include:" },
        {
          kind: "list",
          items: [
            "your name, surname, display name, or nickname,",
            "your email address,",
            "your age or age-confirmation information,",
            "account credentials, including a securely protected password,",
            "messages you send through contact forms, support, chat, or comments,",
            "free-text content you enter into the Service,",
            "IP address,",
            "browser, device, operating-system, and technical information,",
            "session identifiers, cookies, and preference settings,",
            "service-usage events,",
            "security, audit, and anti-abuse logs.",
          ],
        },
        {
          kind: "paragraph",
          text: "Please do not enter personal data about other people unless you are authorised to do so and have a valid legal basis for sharing it with us.",
        },
      ],
    },
    {
      number: "3",
      title: "Why we use it",
      blocks: [
        { kind: "paragraph", text: "We process your data to:" },
        {
          kind: "list",
          items: [
            "Create and operate your MyPreflight account",
            "Authenticate you and keep your account secure",
            "Provide features you request in the Service",
            "Respond to support or contact requests",
            "Detect, investigate, and prevent security incidents, fraud, abuse, and unauthorised access",
            "Maintain technical logs, diagnose faults, and improve reliability",
            "Meet legal obligations and protect or pursue legal claims",
          ],
        },
        {
          kind: "paragraph",
          text: "MyPreflight does not send promotional or marketing emails. We may send operational messages, such as account verification, security notices, password-reset messages, service notifications, and replies to support requests.",
        },
      ],
    },
    {
      number: "4",
      title: "Your content",
      blocks: [
        {
          kind: "paragraph",
          text: "Some areas of MyPreflight allow you to enter free text. That content may contain personal data if you choose to include it.",
        },
        {
          kind: "paragraph",
          text: "You remain responsible for the content you submit. Do not enter sensitive personal data or information about other people unless it is necessary and you are entitled to share it.",
        },
      ],
    },
    {
      number: "5",
      title: "Who helps us run MyPreflight",
      blocks: [
        { kind: "paragraph", text: "We use carefully selected service providers to operate the Service:" },
        {
          kind: "table",
          head: ["Provider / tool", "Purpose"],
          rows: [
            ["DigitalOcean", "Hosting and technical infrastructure"],
            ["Google Sign-In", "Optional sign-in using a Google account"],
            ["Discord Login", "Optional sign-in using a Discord account"],
            ["Google reCAPTCHA", "Protecting forms and the Service against automated abuse"],
            ["Leaflet and OpenStreetMap", "Displaying map features, where used"],
          ],
        },
        {
          kind: "paragraph",
          text: "These providers process limited information needed to provide their services. Some may process data outside the European Economic Area, including in the United States. Where required, we use safeguards recognised under applicable data-protection law, such as the European Commission’s Standard Contractual Clauses, and/or rely on an adequacy decision where available.",
        },
      ],
    },
    {
      number: "6",
      title: "Cookies",
      blocks: [
        { kind: "paragraph", text: "MyPreflight uses:" },
        {
          kind: "list",
          items: [
            "necessary cookies and similar technologies needed for login, security, sessions, and core functionality,",
            "preference cookies that remember choices you make,",
            "technologies connected with Google Sign-In and Google reCAPTCHA when you choose to use Google login or access a protected form.",
          ],
        },
        {
          kind: "paragraph",
          text: "We do not currently use advertising cookies, behavioural advertising, Meta Pixel, Google Analytics, or similar marketing analytics tools.",
        },
        {
          kind: "paragraph",
          text: "Because the cookies currently described are necessary or functional rather than advertising/analytics tracking, a separate opt-in cookie banner may not be required for the current implementation. However, this must change if you later add non-essential analytics, advertising, social-media tracking, or similar technologies. In that case, users should be able to accept or refuse those technologies before they are set.",
        },
      ],
    },
    {
      number: "7",
      title: "How long we keep data",
      blocks: [
        { kind: "paragraph", text: "We use deletion-oriented retention:" },
        {
          kind: "table",
          head: ["Type of data", "Retention"],
          rows: [
            [
              "Account data",
              "Deleted when the account is deleted, unless retention is legally required or necessary to establish, exercise, or defend legal claims.",
            ],
            [
              "Support and contact messages",
              "Deleted when no longer needed to handle the request or related follow-up.",
            ],
            ["Server and security logs", "Up to 1 month"],
            [
              "Backup copies",
              "Up to 1 month, after which they are overwritten or deleted through normal backup rotation.",
            ],
            [
              "Transactional-email records",
              "Kept only as long as needed for delivery, security, troubleshooting, or legal claims.",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "Actual deletion from backups may occur later than deletion from the live system because of the backup cycle.",
        },
      ],
    },
    {
      number: "8",
      title: "Your choices and rights",
      blocks: [
        { kind: "paragraph", text: "Subject to the GDPR and applicable law, you can ask us to:" },
        {
          kind: "list",
          items: [
            "Confirm whether we process your personal data and provide access to it",
            "Correct inaccurate data",
            "Delete your data",
            "Restrict processing in certain situations",
            "Receive data you provided in a portable format, where applicable",
            "Object to processing based on legitimate interests",
            "Withdraw consent where processing is based on consent",
          ],
        },
        {
          kind: "paragraph",
          text: "Complain to the Polish data-protection authority, the President of the Personal Data Protection Office (UODO)",
        },
        {
          kind: "paragraph",
          text: "To make a request, email gdpr@mypreflight.io. We may ask for information needed to verify your identity before responding.",
        },
        {
          kind: "paragraph",
          text: "UODO confirms that individuals may lodge complaints with the President of the Personal Data Protection Office where they believe their personal data has been processed in breach of data-protection law.",
        },
      ],
    },
    {
      number: "9",
      title: "Children",
      blocks: [
        { kind: "paragraph", text: "MyPreflight is not intended for children under 13." },
        {
          kind: "paragraph",
          text: "If you are 13–15 years old, you may use MyPreflight only if your parent or legal guardian has consented to or authorised the required processing of your personal data. If we learn that we have collected personal data from a child in breach of this rule, we will take reasonable steps to delete it.",
        },
      ],
    },
    {
      number: "10",
      title: "No significant automated decisions",
      blocks: [
        {
          kind: "paragraph",
          text: "We do not make decisions about you based solely on automated processing that produce legal effects or similarly significant effects. We do not use automated credit scoring, eligibility scoring, dynamic pricing, or automated account decisions of that kind.",
        },
      ],
    },
    {
      number: "11",
      title: "Changes",
      blocks: [
        {
          kind: "paragraph",
          text: "We may update this policy when MyPreflight changes or when legal requirements change. We will publish the latest version on the Service and update the effective date. If a change is material, we will take reasonable steps to notify you.",
        },
      ],
    },
  ],
};

export const PRIVACY_LONG: Policy = {
  sections: [
    {
      number: "1",
      title: "Controller",
      blocks: [
        { kind: "paragraph", text: "The controller of personal data processed in connection with MyPreflight is:" },
        {
          kind: "lines",
          lines: [
            "Oskar Barcz, sole proprietor",
            "ul. Adama Naruszewicza 30/98, 02-627 Warsaw, Poland",
            "NIP: 9542811840",
            "Email: gdpr@mypreflight.io",
          ],
        },
        {
          kind: "paragraph",
          text: "The controller also acts as the contact point for data-protection matters and performs the Data Protection Officer contact function for the Service. You can contact the controller regarding any matter related to personal-data processing at gdpr@mypreflight.io.",
        },
        {
          kind: "paragraph",
          text: "This Privacy Policy applies to mypreflight.io, app.mypreflight.io, and other subdomains operated as part of MyPreflight, collectively the Service.",
        },
      ],
    },
    {
      number: "2",
      title: "Categories and sources of data",
      blocks: [
        { kind: "paragraph", text: "We may process the following categories of personal data:" },
        {
          kind: "table",
          head: ["Category", "Examples / source"],
          rows: [
            [
              "Account and identity data",
              "Name, surname, nickname, display name, email address, age or age confirmation; supplied during registration or profile use",
            ],
            [
              "Authentication data",
              "Password hash, authentication and session tokens, account identifiers, login metadata; generated while using the Service",
            ],
            [
              "OAuth account data",
              "Information received from Google or Discord that is necessary to authenticate or create/link an account, such as an account identifier, email address, and basic profile information, depending on permissions and user settings",
            ],
            [
              "Communications data",
              "Information and messages submitted through support, contact forms, chat, comments, or other communications",
            ],
            ["User-provided content", "Free-text content entered into the Service"],
            [
              "Technical and log data",
              "IP address, timestamps, device type, browser, operating system, request metadata, session identifiers, security events, audit events, errors, and usage events",
            ],
            ["Cookie and preference data", "Necessary session cookies, security cookies, and preference settings"],
          ],
        },
        {
          kind: "paragraph",
          text: "We collect data directly from you, automatically from your device or browser when you use the Service, and from identity providers if you choose Google Sign-In or Discord Login.",
        },
      ],
    },
    {
      number: "3",
      title: "Purposes and legal bases",
      blocks: [
        {
          kind: "paragraph",
          text: "We process personal data for the following purposes and legal bases under Article 6 GDPR:",
        },
        {
          kind: "table",
          head: ["Purpose", "Legal basis"],
          rows: [
            [
              "Creating, maintaining, and administering user accounts; authenticating users; providing requested Service functionality",
              "Performance of a contract or taking steps at the user’s request before entering into a contract — Article 6(1)(b) GDPR",
            ],
            [
              "Responding to inquiries, support requests, and Service communications",
              "Performance of a contract — Article 6(1)(b); or legitimate interests — Article 6(1)(f), where the request does not relate to a contractual relationship",
            ],
            [
              "Managing Google or Discord sign-in chosen by the user",
              "Performance of a contract — Article 6(1)(b) GDPR",
            ],
            [
              "Operating, maintaining, troubleshooting, securing, and improving the Service; preventing abuse, fraud, attacks, and unauthorised access; maintaining audit trails",
              "Legitimate interests — Article 6(1)(f) GDPR. Our legitimate interests include maintaining the confidentiality, integrity, availability, and security of the Service and defending it against misuse",
            ],
            [
              "Complying with legal obligations and responding to valid requests from public authorities",
              "Compliance with a legal obligation — Article 6(1)(c) GDPR",
            ],
            ["Establishing, exercising, or defending legal claims", "Legitimate interests — Article 6(1)(f) GDPR"],
            [
              "Processing non-essential cookies or comparable technologies, if introduced in the future",
              "Consent — Article 6(1)(a) GDPR, where required by applicable law",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "We do not currently send direct-marketing emails. Transactional and app-related emails are sent because they are necessary to provide and secure the app or respond to a request.",
        },
      ],
    },
    {
      number: "4",
      title: "User-provided third-party data",
      blocks: [
        {
          kind: "paragraph",
          text: "The Service permits free-text submissions. Users may enter information relating to third parties.",
        },
        {
          kind: "paragraph",
          text: "Where a user provides personal data about another person, that user is responsible for ensuring they have an appropriate legal basis and, where required, have provided appropriate privacy information to that person. Users must not provide special-category data under Article 9 GDPR, criminal-offence data, or other sensitive information unless it is strictly necessary, lawful, and appropriate.",
        },
      ],
    },
    {
      number: "5",
      title: "Recipients and processors",
      blocks: [
        {
          kind: "paragraph",
          text: "We do not sell personal data. We do not disclose personal data to advertising networks or independent analytics vendors.",
        },
        {
          kind: "paragraph",
          text: "Data may be disclosed only to the following categories of recipients where necessary:",
        },
        {
          kind: "list",
          items: [
            "DigitalOcean, as the hosting and infrastructure provider",
            "Google, where Google Sign-In or Google reCAPTCHA is used",
            "Discord, where Discord Login is selected by the user",
            "OpenStreetMap-related providers and Leaflet-related technical resources where map functionality is used",
            "Public authorities, courts, regulators, or other authorised entities where disclosure is required by law or necessary to establish, exercise, or defend legal claims",
            "A successor entity in the event of a merger, restructuring, sale, or transfer of all or part of the business, subject to applicable legal safeguards",
          ],
        },
        {
          kind: "paragraph",
          text: "We do not currently employ staff or engage contractors with routine access to user personal data. Where processors act on our behalf, we seek to use contractual arrangements and safeguards appropriate to the applicable data-protection law.",
        },
      ],
    },
    {
      number: "6",
      title: "International transfers",
      blocks: [
        {
          kind: "paragraph",
          text: "The Service may involve processing or access to personal data outside the European Economic Area, including in the United States, particularly through DigitalOcean and Google services.",
        },
        {
          kind: "paragraph",
          text: "Where a transfer of personal data to a third country occurs, we will use an appropriate transfer mechanism under Chapter V GDPR. Depending on the provider and the processing activity, this may include:",
        },
        {
          kind: "list",
          items: [
            "an adequacy decision adopted by the European Commission,",
            "the European Commission’s Standard Contractual Clauses,",
            "supplementary technical and organisational safeguards, where appropriate.",
          ],
        },
        {
          kind: "paragraph",
          text: "The specific transfer mechanism may vary over time based on the provider’s service configuration, legal status, and applicable law.",
        },
      ],
    },
    {
      number: "7",
      title: "Retention",
      blocks: [
        { kind: "paragraph", text: "We apply the following retention periods and criteria:" },
        {
          kind: "table",
          head: ["Data category", "Retention period / criterion"],
          rows: [
            [
              "Account data",
              "Deleted upon account deletion, unless a longer period is necessary to comply with legal obligations or establish, exercise, or defend legal claims.",
            ],
            [
              "User-provided free-text content",
              "Deleted with the account or when deleted through applicable Service functionality, subject to technical limitations, backup rotation, legal requirements, and legal claims.",
            ],
            [
              "Support and contact communications",
              "Deleted when no longer needed to handle the request, provide follow-up support, protect against abuse, or establish, exercise, or defend legal claims.",
            ],
            ["Security, audit, and server logs", "Up to 1 month"],
            ["Backups", "Up to 1 month under the backup-rotation cycle."],
            [
              "Transactional-email records",
              "For the period necessary to deliver the communication, investigate delivery or security issues, and handle potential claims.",
            ],
          ],
        },
        {
          kind: "paragraph",
          text: "Deletion from the active production environment may occur earlier than deletion from backups. Data retained in backups is not normally restored except for disaster recovery or integrity purposes and is deleted or overwritten according to the backup cycle.",
        },
      ],
    },
    {
      number: "8",
      title: "Cookies and similar technologies",
      blocks: [
        { kind: "paragraph", text: "The Service uses cookies and comparable technologies, including:" },
        {
          kind: "list",
          items: [
            "strictly necessary/session technologies, used to maintain sessions, authenticate users, protect the Service, and enable core functionality,",
            "preference technologies, used to remember user choices and settings,",
            "Google Sign-In-related technologies, where a user elects to authenticate using Google,",
            "Google reCAPTCHA-related technologies, used to help distinguish legitimate human activity from automated abuse.",
          ],
        },
        {
          kind: "paragraph",
          text: "We do not currently use advertising cookies, behavioural advertising technologies, Google Analytics, or analogous third-party analytics/marketing trackers.",
        },
        {
          kind: "paragraph",
          text: "You may be able to restrict or delete cookies in browser settings. Blocking necessary cookies may prevent login or other core Service functions from working correctly.",
        },
        {
          kind: "paragraph",
          text: "A separate Cookie Policy is not strictly necessary as a standalone document if this section is complete, accurate, prominent, and kept updated. However, a dedicated Cookie Policy or cookie table is still recommended because it provides a clearer inventory of cookie names, providers, purposes, expiry periods, and legal basis.",
        },
        {
          kind: "paragraph",
          text: "Important implementation note: Google Sign-In and reCAPTCHA may set or access cookies and may involve Google processing. You should verify the actual cookies/scripts used in production and include their precise names, duration, provider, and role before launch. Google announced changes to reCAPTCHA’s data-processing model in 2026, so the exact legal and vendor wording should be confirmed against your deployed reCAPTCHA version and contractual setup.",
        },
      ],
    },
    {
      number: "9",
      title: "Children and age verification",
      blocks: [
        { kind: "paragraph", text: "MyPreflight is not intended for children under 13." },
        {
          kind: "paragraph",
          text: "For users aged 13–15, MyPreflight requires parent or legal guardian consent or authorisation where consent is the applicable legal basis for processing connected with the provision of the online service. We may take reasonable steps to verify age and, where appropriate, parental authorisation.",
        },
        {
          kind: "paragraph",
          text: "For users in countries that apply a different digital-consent age, the applicable local age threshold may apply. In Poland, the relevant GDPR threshold has not been lowered from 16 for consent-based processing in relation to online services directed to children.",
        },
        {
          kind: "paragraph",
          text: "The Service should avoid relying on consent for core account operation where performance of the service contract or another appropriate legal basis applies. Nevertheless, an age-gate and a practical parent/guardian authorisation process are prudent safeguards for users aged 13–15.",
        },
      ],
    },
    {
      number: "10",
      title: "Data-subject rights",
      blocks: [
        { kind: "paragraph", text: "Subject to applicable legal conditions and limitations, you have the right to:" },
        {
          kind: "list",
          items: [
            "request access to your personal data under Article 15 GDPR,",
            "request rectification of inaccurate or incomplete data under Article 16 GDPR,",
            "request erasure under Article 17 GDPR,",
            "request restriction of processing under Article 18 GDPR,",
            "receive data portability under Article 20 GDPR, where applicable,",
            "object to processing based on legitimate interests under Article 21 GDPR,",
            "withdraw consent at any time where processing is based on consent; withdrawal does not affect the lawfulness of processing before withdrawal,",
            "not be subject to a decision based solely on automated processing, including profiling, that produces legal effects or similarly significantly affects you, subject to Article 22 GDPR,",
          ],
        },
        {
          kind: "paragraph",
          text: "To exercise rights, contact gdpr@mypreflight.io. We may request reasonable information necessary to verify your identity, particularly where a request concerns account access, deletion, or disclosure of data.",
        },
        {
          kind: "paragraph",
          text: "We aim to respond without undue delay and, in principle, within one month as required by GDPR, subject to any lawful extension where requests are complex or numerous.",
        },
        {
          kind: "paragraph",
          text: "You also have the right to lodge a complaint with the President of the Personal Data Protection Office in Poland (Prezes Urzędu Ochrony Danych Osobowych / UODO). UODO lists rights including access, rectification, erasure, restriction, portability, objection, and protection from solely automated significant decisions.",
        },
      ],
    },
    {
      number: "11",
      title: "Automated decision-making",
      blocks: [
        {
          kind: "paragraph",
          text: "We do not make decisions based solely on automated processing, including profiling, that produce legal effects concerning you or similarly significantly affect you.",
        },
      ],
    },
    {
      number: "12",
      title: "Security",
      blocks: [
        {
          kind: "paragraph",
          text: "We use reasonable technical and organisational measures designed to protect personal data from accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures include access controls, authentication controls, encrypted communications where supported, log monitoring, and backup procedures.",
        },
        {
          kind: "paragraph",
          text: "No system can be guaranteed completely secure. You are responsible for keeping your password confidential, using a unique password, and notifying us promptly if you believe your account has been compromised.",
        },
      ],
    },
    {
      number: "13",
      title: "Changes to this policy",
      blocks: [
        {
          kind: "paragraph",
          text: "We may update this Privacy Policy to reflect changes in the app, processing activities, providers, or applicable law. The current version will be available through the app, with its effective date stated at the top.",
        },
        {
          kind: "paragraph",
          text: "Where changes materially affect your rights or how we use personal data, we will take reasonable steps to provide additional notice, such as an in-app notice or email where appropriate.",
        },
      ],
    },
  ],
};
