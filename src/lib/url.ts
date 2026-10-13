// Prefix a site-relative path with the configured base (e.g. "/CAIR-website/").
// Always use this for internal links and /public assets so the site works both
// at a GitHub Pages sub-path and on a custom domain.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
