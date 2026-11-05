import type { APIRoute } from "astro";
import { CHANGELOG, SITE_NAME } from "../constants";
import { entryPath, formatDay, getChangelog, groupByDay, releaseUrl, typeset } from "../lib/changelog";

export const GET: APIRoute = async ({ site }) => {
  const days = groupByDay(await getChangelog());
  const blocks: string[] = [`# ${SITE_NAME} changelog`, `> ${typeset(CHANGELOG.lead)}`];

  for (const day of days) {
    blocks.push(`## ${formatDay(day.date)}`);
    for (const entry of day.entries) {
      const url = new URL(entryPath(entry), site).href;
      const body = entry.body?.trim();
      blocks.push(
        `### [${typeset(entry.data.title)}](${url})`,
        `${entry.data.area}, ${CHANGELOG.versionLabel.toLowerCase()} ${entry.data.version}. ${typeset(entry.data.summary)}`,
      );
      if (body) blocks.push(body);
      blocks.push(`[${CHANGELOG.githubLabel}](${releaseUrl(entry.data.version)})`);
    }
  }

  return new Response(`${blocks.join("\n\n")}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
