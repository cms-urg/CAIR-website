import { getCollection, type CollectionEntry } from 'astro:content';

export type Person = CollectionEntry<'people'>;
export type Article = CollectionEntry<'articles'>;

/** Published articles, newest first. Drafts are visible only in `npm run dev`. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Order people within one group (directors, members, or alumni) for the People page.
 *
 * TODO(you): decide how each group should be ordered. The default below sorts by
 * `order`, then name — which works, but treats every group the same.
 */
export function sortPeople(people: Person[], group: Person['data']['group']): Person[] {
  return [...people].sort(
    (a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name),
  );
}

export async function getPeopleByGroup() {
  const all = await getCollection('people');
  const pick = (g: Person['data']['group']) =>
    sortPeople(all.filter((p) => p.data.group === g), g);
  return { director: pick('director'), member: pick('member'), alumni: pick('alumni') };
}
