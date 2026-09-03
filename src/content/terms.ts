import type { Policy } from "../lib/policy";

export const TERMS_DOCUMENT: Policy = {
  sections: [
    {
      number: "1",
      title: "Agreement",
      blocks: [
        {
          kind: "paragraph",
          text: "These Terms of Service (“Terms”) describe your access to and use of MyPreflight (the “Service”), operated by:",
        },
        {
          kind: "lines",
          lines: [
            "Oskar Barcz",
            "ul. Adama Naruszewicza 30/98",
            "02-627 Warsaw, Poland",
            "NIP: 9542811840",
            "Contact: gdpr@mypreflight.io",
          ],
        },
        {
          kind: "paragraph",
          text: "By creating an account, accessing, or using the Service, you agree to these Terms. If you do not agree to these terms, you cannot use the Service.",
        },
      ],
    },
    {
      number: "2",
      title: "What MyPreflight is",
      blocks: [
        {
          kind: "paragraph",
          text: "MyPreflight is a software-as-a-service application dedicated for flight simulation enthusiast. It is currently made available free of charge.",
        },
        {
          kind: "paragraph",
          text: "This app cannot be used for professional or general aviation, for real navigation and real tracking. Developers of this tool are aviation enthusiasts, but not experts in regard of creating professional aviation software.",
        },
        {
          kind: "paragraph",
          text: "The Service may change, evolve, include new features, restrict features, or become unavailable temporarily or permanently. We do not guarantee that every feature will always remain available.",
        },
      ],
    },
    {
      number: "3",
      title: "Eligibility and minors",
      blocks: [
        { kind: "paragraph", text: "You must be at least 13 years old to use MyPreflight." },
        {
          kind: "paragraph",
          text: "If you are aged 13–15, your parent or legal guardian must consent to or authorise your use of the Service where required by applicable law. By using the Service, you confirm that you meet the applicable age requirement and, where applicable, have obtained the necessary parent or guardian permission.",
        },
        {
          kind: "paragraph",
          text: "You may not use the Service if you are prohibited from doing so under applicable law.",
        },
      ],
    },
    {
      number: "4",
      title: "Accounts",
      blocks: [
        { kind: "paragraph", text: "You must provide accurate, real account information and keep it reasonably up to date." },
        { kind: "paragraph", text: "You are responsible for:" },
        {
          kind: "list",
          items: [
            "keeping your password and access credentials confidential,",
            "all activity carried out through your account,",
            "informing us promptly if you suspect unauthorised access or a security incident involving your account,",
            "ensuring that you have the right to submit any content you enter into the Service.",
          ],
        },
        {
          kind: "paragraph",
          text: "You may create an account using email and password or, where available, an approved third-party provider, like Google or Discord.",
        },
        {
          kind: "paragraph",
          text: "We may suspend, restrict, or terminate an account where reasonably necessary to protect the Service, users, or third parties; investigate suspected misuse; comply with law; or enforce these Terms.",
        },
      ],
    },
    {
      number: "5",
      title: "Acceptable use",
      blocks: [
        { kind: "paragraph", text: "You must not use MyPreflight to:" },
        {
          kind: "list",
          items: [
            "break the law or encourage unlawful conduct,",
            "infringe intellectual-property, privacy, data-protection, publicity, or other rights,",
            "upload, submit, distribute, or create content that is unlawful, harmful, deceptive, threatening, abusive, defamatory, discriminatory, or otherwise inappropriate,",
            "submit another person’s personal data without a valid legal basis or necessary permission,",
            "submit sensitive personal data unless you are entitled to do so and it is necessary for your lawful use of the Service,",
            "attempt unauthorised access to accounts, systems, APIs, infrastructure, or data,",
            "circumvent access controls, rate limits, authentication, security mechanisms, or CAPTCHA protections,",
            "use automated means to scrape, crawl, probe, overload, interfere with, or disrupt the Service without prior written permission,",
            "introduce malware, harmful code, or material designed to damage, disable, or interfere with systems,",
            "impersonate another person or misrepresent your identity or affiliation,",
            "use the Service in a manner that could endanger people, aircraft, property, or operations.",
          ],
        },
      ],
    },
    {
      number: "6",
      title: "Aviation disclaimer",
      blocks: [
        {
          kind: "paragraph",
          text: "MyPreflight may provide information, planning aids, maps, user-generated content, or other features related to aviation. It is not an operational flight-planning system, air-navigation service, weather service, aeronautical-information publication, aircraft-performance authority, dispatch service, safety-management system, or substitute for official sources.",
        },
        {
          kind: "paragraph",
          text: "Do not rely on MyPreflight as the sole source of information for any flight, operational, safety-critical, legal, navigational, weather-related, regulatory, aircraft-performance, fuel, weight-and-balance, airport, airspace, or emergency decision.",
        },
        {
          kind: "paragraph",
          text: "You are solely responsible for verifying information using current, official, authoritative, and appropriate sources; complying with applicable laws and procedures; and making safe operational decisions. You must never use the Service in a way that compromises aviation safety.",
        },
      ],
    },
    {
      number: "7",
      title: "Your content",
      blocks: [
        { kind: "paragraph", text: "You retain ownership of the content you submit to MyPreflight." },
        {
          kind: "paragraph",
          text: "You grant us a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, process, transmit, display, and otherwise use your content only as necessary to operate, secure, maintain, support, and improve the Service, comply with law, and enforce these Terms.",
        },
        { kind: "paragraph", text: "You represent that:" },
        {
          kind: "list",
          items: [
            "yu own your content or have all rights, permissions, and legal bases required to submit it and grant this licence,",
            "your content does not violate applicable law or third-party rights,",
            "you have provided any notices and obtained any permissions required for personal data included in the content.",
          ],
        },
        {
          kind: "paragraph",
          text: "You can remove your content through applicable functionality or by deleting your account, subject to technical limits, backup retention, and legal obligations described in the Privacy Policy.",
        },
      ],
    },
    {
      number: "8",
      title: "Intellectual property",
      blocks: [
        {
          kind: "paragraph",
          text: "The Service, including its software, design, interfaces, branding, text, graphics, databases, and other materials, is owned by and licensed to Oskar Barcz and protected by applicable intellectual-property laws.",
        },
        {
          kind: "paragraph",
          text: "Subject to these Terms, you receive a limited, revocable, non-exclusive, non-transferable, non-sublicensable right to use the Service for its intended purpose.",
        },
        {
          kind: "paragraph",
          text: "You may not copy, modify, distribute, reverse engineer, decompile, create derivative works from, publicly display, sell, lease, licence, or exploit any part of the Service except as expressly permitted by law or with prior written permission.",
        },
      ],
    },
    {
      number: "9",
      title: "Third-party services",
      blocks: [
        {
          kind: "paragraph",
          text: "The Service may integrate with or link to third-party services, including Google, Discord, OpenStreetMap, Leaflet-related map resources, and Google reCAPTCHA.",
        },
        {
          kind: "paragraph",
          text: "Your use of third-party services is also governed by their respective terms, privacy notices, and policies. We are not responsible for third-party services, their availability, security, data practices, content, or actions.",
        },
      ],
    },
    {
      number: "10",
      title: "Availability and changes",
      blocks: [
        {
          kind: "paragraph",
          text: "We aim to operate MyPreflight reliably, but the Service is provided on an “as available” basis.",
        },
        { kind: "paragraph", text: "We may:" },
        {
          kind: "list",
          items: [
            "modify, improve, remove, suspend, or discontinue any part of the Service,",
            "perform maintenance, which may temporarily affect access,",
            "impose reasonable technical or usage limits,",
            "update these Terms when required by changes to the Service, law, security needs, or operations.",
          ],
        },
        {
          kind: "paragraph",
          text: "Where reasonably practicable, we will provide notice of material changes. Continued use of the Service after the effective date of revised Terms means you accept the updated Terms.",
        },
      ],
    },
    {
      number: "11",
      title: "Disclaimers",
      blocks: [
        {
          kind: "paragraph",
          text: "To the maximum extent permitted by applicable law, MyPreflight is provided without warranties of any kind, whether express, implied, statutory, or otherwise.",
        },
        {
          kind: "paragraph",
          text: "We do not warrant that the Service will be uninterrupted, error-free, secure, accurate, complete, current, suitable for a particular purpose, or free of harmful components. We do not guarantee the accuracy, completeness, availability, or suitability of any maps, data, content, outputs, or third-party information available through the Service.",
        },
        {
          kind: "paragraph",
          text: "Nothing in these Terms excludes rights that cannot lawfully be excluded under mandatory consumer-protection law.",
        },
      ],
    },
    {
      number: "12",
      title: "Liability",
      blocks: [
        {
          kind: "paragraph",
          text: "To the maximum extent permitted by applicable law, Oskar Barcz will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages; loss of profits, revenue, data, goodwill, business opportunity, or anticipated savings; or losses resulting from use of or inability to use the Service.",
        },
        {
          kind: "paragraph",
          text: "Nothing in these Terms excludes or limits liability where exclusion or limitation is prohibited by law, including liability for intentional misconduct, and rights that consumers cannot waive under applicable law.",
        },
        {
          kind: "paragraph",
          text: "If mandatory law permits a limitation of liability, our total aggregate liability arising out of or relating to the Service or these Terms will not exceed the greater of:",
        },
        {
          kind: "list",
          items: [
            "EUR 50; or",
            "The amount you paid to us for the Service during the 12 months immediately before the event giving rise to liability.",
          ],
        },
        {
          kind: "paragraph",
          text: "As MyPreflight is currently free, this limitation is particularly relevant: it does not remove mandatory statutory rights but helps define the intended risk allocation for a free service.",
        },
      ],
    },
    {
      number: "13",
      title: "Suspension and termination",
      blocks: [
        {
          kind: "paragraph",
          text: "You may stop using the Service at any time and may request account deletion through available form in User Settings.",
        },
        { kind: "paragraph", text: "We may suspend or terminate access immediately where reasonably necessary to:" },
        {
          kind: "list",
          items: [
            "protect the security, integrity, or availability of the Service,",
            "prevent abuse or harm,",
            "investigate suspected violations of these Terms,",
            "comply with law or a lawful authority request,",
            "protect our rights, users, or third parties.",
          ],
        },
        {
          kind: "paragraph",
          text: "Termination does not affect provisions that by their nature should continue, including intellectual-property, disclaimer, liability, and dispute-related provisions.",
        },
      ],
    },
    {
      number: "14",
      title: "Privacy",
      blocks: [
        {
          kind: "paragraph",
          text: "Our handling of personal data is governed by the Privacy Policy. By using MyPreflight, you acknowledge that you have read the Privacy Policy.",
        },
      ],
    },
    {
      number: "15",
      title: "Governing law and disputes",
      blocks: [
        {
          kind: "paragraph",
          text: "These Terms are governed by Polish law, except where mandatory consumer-protection rules of the country in which a consumer has habitual residence provide a higher level of protection.",
        },
        {
          kind: "paragraph",
          text: "Where permitted by applicable law, disputes shall be submitted to the competent courts of Poland. This does not limit rights that consumers may have to bring proceedings in another competent court under mandatory applicable law.",
        },
      ],
    },
    {
      number: "16",
      title: "Contact",
      blocks: [
        { kind: "paragraph", text: "For questions about these Terms or the Service, contact:" },
        { kind: "lines", lines: ["gdpr@mypreflight.io"] },
      ],
    },
  ],
};
