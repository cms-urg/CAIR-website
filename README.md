# Conversational AI Research Lab — Website

Static site for the Conversational AI Research Lab (CAIR) at the University of Toronto Scarborough, built with [Astro](https://astro.build). All content lives in Markdown/YAML files — no CMS or database.

```bash
npm install
npm run dev       # http://localhost:4321/CAIR-website/  (drafts visible)
npm run build     # outputs to dist/  (drafts excluded)
npm run preview   # serve the production build locally
```

## Adding content

| What | Where | How |
| --- | --- | --- |
| **Article** | `src/content/articles/<slug>.md` | See [`how-to-write-an-article.md`](src/content/articles/how-to-write-an-article.md) (a draft example) |
| **Person** | `src/content/people/<first-last>.md` | Copy [`_template.md`](src/content/people/_template.md). Photos go in `public/img/people/` |
| **Publication** | `src/data/publications.yaml` | Add an entry; see the comment block at the top for fields |
| **Research areas, nav, contact email** | `src/data/site.ts` | Edit the `SITE`, `NAV`, and `THEMES` objects |

### Article frontmatter

```yaml
---
title: Why Conversational Agents Need Different Guardrails
date: 2026-11-02
authors: [brian-harrington]      # filenames from src/content/people/ (without .md)
summary: Shown on the index, in link previews, and in the RSS feed.
tags: [guardrails]
draft: false
---
```

Optional: `cover: ./images/cover.jpg` (relative to the article) adds an image to the article card; `coverAlt` describes it.

### Publication thumbnails & files

Each publication card shows a thumbnail, like a figure from the paper. Add `image: img/pubs/<name>.png` (file in `public/img/pubs/`); without one, a branded placeholder is shown. `pdf:` and `poster:` accept a full URL or a path under `public/` (e.g. `papers/2026-oral-exams.pdf`) and appear as icon links on the card.

Frontmatter is validated at build time (`src/content.config.ts`): a typo in an author id or a missing `summary` fails the build with a clear message instead of publishing a broken page.

### People groups

- `director` — faculty leads; shown large, linking to their on-site profile
- `member` — current researchers; photo + name + one-line status, linking to `link` (LinkedIn/personal site) if set
- `alumni` — same card, shown under "Alumni" (status line like "Software Engineer at Google" or "Class of '25")

## Deployment

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
(enable it once under **Settings → Pages → Source: GitHub Actions**). The site is served at
`https://cms-urg.github.io/CAIR-website/`.

For a custom domain, set repository variables `SITE=https://your.domain` and `BASE_PATH=/`, and add the domain in the Pages settings. Internal links go through `url()` in `src/lib/url.ts`, so they adapt automatically.

## Structure

```
src/
  content.config.ts        # collection schemas (people, articles, publications)
  content/people/          # one .md per person
  content/articles/        # one .md per article
  data/publications.yaml   # publication list
  data/site.ts             # site name, nav, research themes
  components/  layouts/  pages/  styles/
public/                    # static files served as-is (photos, favicon)
```
