import { type CollectionEntry, getCollection } from "astro:content";
import { CHANGELOG, CHANGELOGS, type ChangelogProduct } from "../constants";
import { compareVersions } from "./version";

const COLLECTIONS = { app: "appChangelog", transponder: "transponderChangelog" } as const;

type ChangelogCollection = (typeof COLLECTIONS)[ChangelogProduct];

export type ChangelogEntry = CollectionEntry<ChangelogCollection>;

export const PRODUCTS = Object.keys(CHANGELOGS) as ChangelogProduct[];

export interface ChangelogDay {
  key: string;
  date: Date;
  entries: ChangelogEntry[];
}

const dayFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatDay = (date: Date): string => dayFormat.format(date);

export const dayKey = (date: Date): string => date.toISOString().slice(0, 10);

export const typeset = (text: string): string =>
  text
    .replace(/(\d)\s(t|kg|kt|ft|nm|NM|min|h|m|s)\b/g, "$1\u00a0$2")
    .replace(/(\w)'(\w)/g, "$1\u2019$2")
    .replace(/"([^"]*)"/g, "\u201c$1\u201d")
    .replace(/\.\.\./g, "\u2026");

export const versionAnchor = (version: string): string => `v${version}`;

const PRODUCT_OF: Record<ChangelogCollection, ChangelogProduct> = {
  appChangelog: "app",
  transponderChangelog: "transponder",
};

export const productOf = (entry: ChangelogEntry): ChangelogProduct => PRODUCT_OF[entry.collection];

export const releaseUrl = (entry: ChangelogEntry): string =>
  `${CHANGELOGS[productOf(entry)].releasesUrl}/${entry.data.version}`;

const byNewest = (a: ChangelogEntry, b: ChangelogEntry): number =>
  b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id);

export const getChangelog = async (product: ChangelogProduct): Promise<ChangelogEntry[]> => {
  const entries: ChangelogEntry[] = (await getCollection(COLLECTIONS[product])).sort(byNewest);
  entries.forEach((entry, index) => {
    const older = entries[index + 1];
    if (older && compareVersions(entry.data.version, older.data.version) < 0) {
      throw new Error(
        `${CHANGELOGS[product].name} changelog entry ${entry.id} is pinned to ${entry.data.version}, older than ${older.id} (${older.data.version}). Versions must not go backwards in date order.`,
      );
    }
  });
  return entries;
};

export const getEveryChangelog = async (): Promise<ChangelogEntry[]> =>
  (await Promise.all(PRODUCTS.map(getChangelog))).flat().sort(byNewest);

export const firstOfVersion = (entries: ChangelogEntry[]): Set<string> => {
  const seen = new Set<string>();
  const first = new Set<string>();
  for (const entry of entries) {
    if (seen.has(entry.data.version)) continue;
    seen.add(entry.data.version);
    first.add(entry.id);
  }
  return first;
};

export const groupByDay = (entries: ChangelogEntry[]): ChangelogDay[] => {
  const days = new Map<string, ChangelogDay>();
  for (const entry of entries) {
    const key = dayKey(entry.data.date);
    const day = days.get(key) ?? { key, date: entry.data.date, entries: [] };
    day.entries.push(entry);
    days.set(key, day);
  }
  return [...days.values()];
};

export const entryPath = (entry: ChangelogEntry): string => `${CHANGELOGS[productOf(entry)].path}/${entry.id}`;

export const pagePath = (product: ChangelogProduct, page: number): string =>
  page === 1 ? `${CHANGELOGS[product].path}/` : `${CHANGELOGS[product].path}/page/${page}/`;

export const toPages = (entries: ChangelogEntry[]): ChangelogEntry[][] => {
  const pages: ChangelogEntry[][] = [];
  for (let start = 0; start < entries.length; start += CHANGELOG.pageSize) {
    pages.push(entries.slice(start, start + CHANGELOG.pageSize));
  }
  return pages;
};

export const versionPages = (entries: ChangelogEntry[]): [string, number][] => {
  const first = firstOfVersion(entries);
  return entries.flatMap((entry, index) =>
    first.has(entry.id) ? [[entry.data.version, Math.floor(index / CHANGELOG.pageSize) + 1] as [string, number]] : [],
  );
};
