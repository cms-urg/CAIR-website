// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves project sites at /<repo>/. Override SITE / BASE_PATH
// (e.g. BASE_PATH=/ for a custom domain) without touching this file.
const site = process.env.SITE || 'https://cms-urg.github.io';
const base = process.env.BASE_PATH || '/CAIR-website';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
