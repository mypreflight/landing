import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { CHANGELOG } from "./constants";

const copy = z
  .string()
  .trim()
  .min(1)
  .refine((text) => !text.includes("\u2014"), "No em dashes in user-facing copy: use a colon, a comma or a full stop.");

const changelog = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./src/content/changelog" }),
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
        .regex(/^\d+\.\d+\.\d+$/, "Use the web app version current once the change is live, e.g. 2.124.0."),
      area: z.enum(CHANGELOG.areas),
      summary: copy.max(320),
      figures: z.array(z.object({ before: shot.optional(), after: shot })).default([]),
      footnote: copy.optional(),
    });
  },
});

export const collections = { changelog };
