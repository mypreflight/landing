import type { APIRoute } from "astro";
import { CHANGELOG, CHANGELOGS, SITE_NAME } from "../constants";
import { getChangelog, PRODUCTS, typeset } from "../lib/changelog";
import { markdown, markdownDays } from "../lib/changelog-text";

export const GET: APIRoute = async ({ site }) => {
  const sections = await Promise.all(
    PRODUCTS.map(async (product) => [
      `## ${CHANGELOGS[product].name}`,
      `> ${typeset(CHANGELOGS[product].lead)}`,
      ...markdownDays(site, await getChangelog(product), 3),
    ]),
  );
  return markdown([`# ${SITE_NAME} changelog`, `> ${typeset(CHANGELOG.description)}`, ...sections.flat()]);
};
