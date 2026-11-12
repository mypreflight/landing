import type { APIRoute, GetStaticPaths } from "astro";
import { CHANGELOGS, type ChangelogProduct } from "../../constants";
import { getChangelog, PRODUCTS, typeset } from "../../lib/changelog";
import { markdown, markdownDays } from "../../lib/changelog-text";

export const getStaticPaths = (() => PRODUCTS.map((product) => ({ params: { product } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params, site }) => {
  const product = params.product as ChangelogProduct;
  const changelog = CHANGELOGS[product];
  return markdown([
    `# ${changelog.longTitle}`,
    `> ${typeset(changelog.lead)}`,
    ...markdownDays(site, await getChangelog(product), 2),
  ]);
};
