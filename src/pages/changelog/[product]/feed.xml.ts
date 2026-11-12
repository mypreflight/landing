import type { APIRoute, GetStaticPaths } from "astro";
import { CHANGELOGS, type ChangelogProduct } from "../../../constants";
import { getChangelog, PRODUCTS } from "../../../lib/changelog";
import { atomFeed } from "../../../lib/changelog-text";

export const getStaticPaths = (() => PRODUCTS.map((product) => ({ params: { product } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params, site }) => {
  const product = params.product as ChangelogProduct;
  const changelog = CHANGELOGS[product];
  return atomFeed({
    site,
    entries: await getChangelog(product),
    title: changelog.longTitle,
    subtitle: changelog.description,
    selfPath: changelog.feedPath,
    alternatePath: changelog.path,
  });
};
