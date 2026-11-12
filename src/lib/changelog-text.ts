import { CHANGELOG, CHANGELOGS, SITE_NAME } from "../constants";
import { type ChangelogEntry, entryPath, formatDay, groupByDay, productOf, releaseUrl, typeset } from "./changelog";

const escapeXml = (text: string): string =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

interface Feed {
  site: URL | undefined;
  entries: ChangelogEntry[];
  title: string;
  subtitle: string;
  selfPath: string;
  alternatePath: string;
}

export const atomFeed = ({ site, entries, title, subtitle, selfPath, alternatePath }: Feed): Response => {
  const absolute = (path: string) => new URL(path, site).href;
  const updated = (entries[0]?.data.date ?? new Date(0)).toISOString();

  const items = entries.map((entry) => {
    const url = absolute(entryPath(entry));
    const preview = entry.data.figures[0]?.after;
    const html = [
      `<p>${escapeXml(typeset(entry.data.summary))}</p>`,
      `<p><a href="${releaseUrl(entry)}">${CHANGELOGS[productOf(entry)].name} ${CHANGELOG.versionLabel.toLowerCase()} ${entry.data.version}, ${CHANGELOG.githubLabel.toLowerCase()}</a></p>`,
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
      `    <category term="${escapeXml(CHANGELOGS[productOf(entry)].name)}" />`,
      `    <category term="${escapeXml(entry.data.area)}" />`,
      `    <summary>${escapeXml(typeset(entry.data.summary))}</summary>`,
      `    <content type="html">${escapeXml(html)}</content>`,
      "  </entry>",
    ].join("\n");
  });

  const body = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    `  <title>${escapeXml(title)}</title>`,
    `  <subtitle>${escapeXml(subtitle)}</subtitle>`,
    `  <link rel="self" type="application/atom+xml" href="${absolute(selfPath)}" />`,
    `  <link rel="alternate" type="text/html" href="${absolute(alternatePath)}" />`,
    `  <id>${absolute(alternatePath)}</id>`,
    `  <updated>${updated}</updated>`,
    `  <author><name>${SITE_NAME}</name></author>`,
    `  <icon>${absolute("/favicon-96x96.png")}</icon>`,
    ...items,
    "</feed>",
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "application/atom+xml; charset=utf-8" } });
};

export const markdownDays = (site: URL | undefined, entries: ChangelogEntry[], level: number): string[] => {
  const heading = (depth: number) => "#".repeat(level + depth);
  const blocks: string[] = [];

  for (const day of groupByDay(entries)) {
    blocks.push(`${heading(0)} ${formatDay(day.date)}`);
    for (const entry of day.entries) {
      const url = new URL(entryPath(entry), site).href;
      const body = entry.body?.trim();
      blocks.push(
        `${heading(1)} [${typeset(entry.data.title)}](${url})`,
        `${entry.data.area}, ${CHANGELOG.versionLabel.toLowerCase()} ${entry.data.version}. ${typeset(entry.data.summary)}`,
      );
      if (body) blocks.push(body);
      blocks.push(`[${CHANGELOG.githubLabel}](${releaseUrl(entry)})`);
    }
  }

  return blocks;
};

export const markdown = (blocks: string[]): Response =>
  new Response(`${blocks.join("\n\n")}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
