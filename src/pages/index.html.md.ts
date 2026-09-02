import type { APIRoute } from "astro";
import {
  APP_URL,
  CLOSING_CTA,
  DISCORD_URL,
  FAQ,
  FEATURES,
  FOOTER,
  HERO,
  HOW_IT_WORKS,
  LLMS,
  OWNER_NAME,
  OWNER_URL,
  PRODUCT_LEAD,
  SITE_NAME,
} from "../constants";

const heroHeading = [HERO.heading.before, HERO.heading.accent, HERO.heading.after].join(" ");

const blocks: string[] = [
  `# ${SITE_NAME}`,
  `> ${LLMS.summary}`,
  `## ${heroHeading}`,
  HERO.lead,
  HERO.note.join(" "),
  `## ${PRODUCT_LEAD.heading}`,
  PRODUCT_LEAD.lead,
];

for (const feature of FEATURES) {
  blocks.push(`## ${feature.eyebrow}`, `**${feature.heading}**`, feature.lead);
}

blocks.push(
  `## ${HOW_IT_WORKS.eyebrow}`,
  HOW_IT_WORKS.heading,
  HOW_IT_WORKS.steps.map((step, index) => `${index + 1}. **${step.title}**: ${step.detail}`).join("\n"),
  `## ${FAQ.eyebrow}`,
  ...FAQ.items.flatMap((item) => [`### ${item.question}`, item.answer]),
  `## ${CLOSING_CTA.heading}`,
  CLOSING_CTA.lead,
  "## About",
  ...FOOTER.description,
  `Sign in at [${APP_URL}](${APP_URL}). Join the community on [Discord](${DISCORD_URL}). Built by [${OWNER_NAME}](${OWNER_URL}).`,
);

const body = `${blocks.join("\n\n")}\n`;

export const GET: APIRoute = () => new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
