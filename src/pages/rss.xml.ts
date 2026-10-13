import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../data/site';
import { getArticles } from '../lib/content';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  const articles = await getArticles();
  return rss({
    title: `${SITE.name} — Articles`,
    description: SITE.description,
    site: new URL(import.meta.env.BASE_URL, context.site).href,
    items: articles.map((a) => ({
      title: a.data.title,
      pubDate: a.data.date,
      description: a.data.summary,
      link: url(`articles/${a.id}`),
      categories: a.data.tags,
    })),
  });
}
