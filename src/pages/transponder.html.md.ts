import type { APIRoute } from "astro";
import { SITE_NAME, TRANSPONDER, TRANSPONDER_DOWNLOAD_URL, TRANSPONDER_SOURCE_URL } from "../constants";
import { getChangelog, pagePath } from "../lib/changelog";

export const GET: APIRoute = async ({ site }) => {
  const [latest] = await getChangelog("transponder");
  const version = latest?.data.version;
  const { callouts, modes, setup, footprint, integrations, closing } = TRANSPONDER;
  const changelog = new URL(pagePath("transponder", 1), site).href;

  const blocks: string[] = [
    `# ${SITE_NAME} Transponder`,
    `> ${TRANSPONDER.description}`,
    `## ${TRANSPONDER.heading}`,
    TRANSPONDER.lead,
    `[${TRANSPONDER.downloadLabel}](${TRANSPONDER_DOWNLOAD_URL}): ${TRANSPONDER.file}${version ? `, version ${version}` : ""}, ${TRANSPONDER.size}, ${TRANSPONDER.platform}, ${TRANSPONDER.sim}.`,
    `### ${TRANSPONDER.calloutsLabel}`,
    callouts.map((callout) => `${callout.key}. **${callout.title}**: ${callout.detail}`).join("\n"),
    `## ${modes.heading}`,
    modes.lead,
    modes.phases.map((phase) => `- **${phase.label}**, ${phase.mode}: ${phase.sent}`).join("\n"),
    modes.note,
    `## ${setup.heading}`,
    setup.lead,
    setup.steps.map((step, index) => `${index + 1}. **${step.title}**: ${step.detail}`).join("\n"),
    `## ${footprint.heading}`,
    footprint.lead,
    footprint.specs.map((spec) => `- **${spec.term}**: ${spec.value}`).join("\n"),
    `Source: [${TRANSPONDER_SOURCE_URL}](${TRANSPONDER_SOURCE_URL})`,
    `### ${footprint.keysHeading}`,
    footprint.keys.map((entry) => `- \`${entry.key}\`: ${entry.action}`).join("\n"),
    `## ${integrations.heading}`,
    integrations.lead,
    ...integrations.items.flatMap((item) => [`### ${item.title}`, item.body]),
    `## ${closing.heading}`,
    closing.lead,
    `[${TRANSPONDER.downloadLabel}](${TRANSPONDER_DOWNLOAD_URL}). Every release is listed in the [Transponder changelog](${changelog}).`,
  ];

  return new Response(`${blocks.join("\n\n")}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
