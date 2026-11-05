import type { APIRoute } from "astro";
import { CHANGELOG, SITE_NAME } from "../../constants";
import { entryPath, getChangelog, releaseUrl, typeset } from "../../lib/changelog";

const escapeXml = (text: string): string =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ site }) => {
  const entries = await getChangelog();
  const absolute = (path: string) => new URL(path, site).href;
  const updated = (entries[0]?.data.date ?? new Date(0)).toISOString();

  const items = entries.map((entry) => {
    const url = absolute(entryPath(entry));
    const preview = entry.data.figures[0]?.after;
    const html = [
      `<p>${escapeXml(typeset(entry.data.summary))}</p>`,
      `<p><a href="${releaseUrl(entry.data.version)}">${CHANGELOG.versionLabel} ${entry.data.version}, ${CHANGELOG.githubLabel.toLowerCase()}</a></p>`,
      entry.rendered?.html ?? "",
      preview ? `<p><img src="${absolute(preview.light.src)}" alt="${escapeXml(typeset(preview.alt))}" /></p>` : "",
    ].join("");

    return [
      "  <entry>",
      `    <title>${escapeXml(typeset(entry.data.title))}</title>`,
      `    <link rel="alternate" type="text/html" href="${url}" />`,
      `    <id>${url}</id>`,
      `    <published>${entry.data.date.toISOString()}</published>`,
      `    <updated>${entry.data.date.toISOString()}</updated>`,
      `    <category term="${escapeXml(entry.data.area)}" />`,
      `    <summary>${escapeXml(typeset(entry.data.summary))}</summary>`,
      `    <content type="html">${escapeXml(html)}</content>`,
      "  </entry>",
    ].join("\n");
  });

  const body = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    `  <title>${SITE_NAME} changelog</title>`,
    `  <subtitle>${escapeXml(CHANGELOG.description)}</subtitle>`,
    `  <link rel="self" type="application/atom+xml" href="${absolute(CHANGELOG.feedPath)}" />`,
    `  <link rel="alternate" type="text/html" href="${absolute(CHANGELOG.path)}" />`,
    `  <id>${absolute(CHANGELOG.path)}</id>`,
    `  <updated>${updated}</updated>`,
    `  <author><name>${SITE_NAME}</name></author>`,
    `  <icon>${absolute("/favicon-96x96.png")}</icon>`,
    ...items,
    "</feed>",
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "application/atom+xml; charset=utf-8" } });
};
