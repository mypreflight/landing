import type { APIRoute } from "astro";
import { LLMS, SITE_NAME } from "../constants";

const blocks: string[] = [`# ${SITE_NAME}`, `> ${LLMS.summary}`, ...LLMS.detail];

for (const section of LLMS.sections) {
  const links = section.links.map((link) => `- [${link.label}](${link.url}): ${link.note}`);
  blocks.push(`## ${section.title}\n\n${links.join("\n")}`);
}

const body = `${blocks.join("\n\n")}\n`;

export const GET: APIRoute = () => new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
