import type { APIRoute } from "astro";
import { CHANGELOG, SITE_NAME } from "../../constants";
import { getEveryChangelog } from "../../lib/changelog";
import { atomFeed } from "../../lib/changelog-text";

export const GET: APIRoute = async ({ site }) =>
  atomFeed({
    site,
    entries: await getEveryChangelog(),
    title: `${SITE_NAME} changelog`,
    subtitle: CHANGELOG.description,
    selfPath: CHANGELOG.feedPath,
    alternatePath: CHANGELOG.path,
  });
