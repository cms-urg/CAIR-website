import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" (e.g. _template.md) are ignored by every collection.
const people = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    // "director" = faculty leads, "member" = current researchers, "alumni" = past members
    group: z.enum(['director', 'member', 'alumni']),
    // One-line status shown under the name, e.g. "PhD Student, Psychology" or "Software Engineer at Google"
    status: z.string(),
    // Path under /public, e.g. "img/people/jane-doe.jpg". Omit for a placeholder.
    photo: z.string().optional(),
    // Where the photo/name links (LinkedIn, personal site). Omit to link to the profile page.
    link: z.url().optional(),
    email: z.email().optional(),
    affiliation: z.string().optional(),
    // Year joined / graduated, used for sorting and cohort labels
    year: z.number().int().optional(),
    // Lower numbers sort first within a group
    order: z.number().default(100),
    links: z
      .object({
        website: z.url(),
        scholar: z.url(),
        orcid: z.url(),
        github: z.url(),
        linkedin: z.url(),
      })
      .partial()
      .optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // One or more people ids (the filename without .md in src/content/people)
    authors: z.array(reference('people')).min(1),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    // Drafts render in `npm run dev` but are excluded from production builds
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: file('./src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number().int(),
    // "core" = produced by the lab; "related" = members' adjacent work
    tier: z.enum(['core', 'related']).default('core'),
    type: z.enum(['conference', 'journal', 'chapter', 'preprint', 'other']).default('conference'),
    url: z.url().optional(),
    pdf: z.url().optional(),
    theme: z.enum(['guardrails', 'cognition', 'applications']).optional(),
  }),
});

export const collections = { people, articles, publications };
