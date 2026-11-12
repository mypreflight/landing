import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CHANGELOGS, type ChangelogProduct } from "./constants";

const copy = z
  .string()
  .trim()
  .min(1)
  .refine((text) => !text.includes("\u2014"), "No em dashes in user-facing copy: use a colon, a comma or a full stop.");

const changelog = (product: ChangelogProduct) => {
  const { name, versionExample, areas } = CHANGELOGS[product];

  return defineCollection({
    loader: glob({ pattern: "*/index.md", base: `./src/content/changelog/${product}` }),
    schema: ({ image }) => {
      const shot = z.object({
        light: image(),
        dark: image().optional(),
        alt: copy,
        caption: copy.optional(),
      });

      return z.object({
        title: copy.max(60).refine((text) => !text.endsWith("."), "A release title has no full stop at the end."),
        date: z.coerce.date(),
        version: z
          .string()
          .regex(/^\d+\.\d+\.\d+$/, `Use the ${name} version current once the change is live, e.g. ${versionExample}.`),
        area: z.enum(areas),
        summary: copy.max(320),
        figures: z.array(z.object({ before: shot.optional(), after: shot })).default([]),
        footnote: copy.optional(),
      });
    },
  });
};

export const collections = { appChangelog: changelog("app"), transponderChangelog: changelog("transponder") };
