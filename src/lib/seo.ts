export const SITE_URL = 'https://www.churchcare.online';
export const SITE_NAME = 'Faith ChurchCare';
export const APP_URL = 'https://app.churchcare.online';
export const CONTACT_EMAIL = 'info@churchcare.online';
export const CONTACT_PHONE = '+233557001326';
export const DEFAULT_IMAGE = `${SITE_URL}/church-congregation.jpg`;

export type JsonLd = Record<string, unknown>;

export interface PageMeta {
  /** Path starting with "/" and no trailing slash (home is "/") */
  path: string;
  /** Full title tag, under 60 characters */
  title: string;
  /** Meta description, under 155 characters */
  description: string;
  image?: string;
  type?: 'website' | 'article';
  /** Extra structured data for this page (Organization and WebSite are always added) */
  jsonLd?: JsonLd[];
  /** Breadcrumb trail after Home, e.g. [{ name: 'Features', path: '/features' }] */
  breadcrumbs?: { name: string; path: string }[];
  noindex?: boolean;
  article?: { published: string; modified: string; author: string };
  /** Used for sitemap lastmod (YYYY-MM-DD) */
  lastmod?: string;
}

export const canonicalUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const organizationLd: JsonLd = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-mark.png`,
  areaServed: 'Ghana',
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    areaServed: 'GH',
    availableLanguage: ['English'],
  },
};

export const websiteLd: JsonLd = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'en-GH',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

function breadcrumbLd(meta: PageMeta): JsonLd | null {
  if (!meta.breadcrumbs?.length) return null;
  const trail = [{ name: 'Home', path: '/' }, ...meta.breadcrumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonicalUrl(c.path),
    })),
  };
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Safe JSON for embedding inside a script tag */
const jsonForScript = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

/** All head tags for a page, as an HTML string. Every tag carries data-seo so the client can swap them on navigation. */
export function headTags(meta: PageMeta): string {
  const url = canonicalUrl(meta.path);
  const image = meta.image ?? DEFAULT_IMAGE;
  const type = meta.type ?? 'website';
  const graph = [organizationLd, websiteLd, breadcrumbLd(meta), ...(meta.jsonLd ?? [])].filter(Boolean);

  const tags = [
    `<title data-seo>${esc(meta.title)}</title>`,
    `<meta data-seo name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? '' : `<link data-seo rel="canonical" href="${url}" />`,
    `<meta data-seo name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    `<meta data-seo property="og:type" content="${type}" />`,
    `<meta data-seo property="og:site_name" content="${SITE_NAME}" />`,
    `<meta data-seo property="og:title" content="${esc(meta.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(meta.description)}" />`,
    meta.noindex ? '' : `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:image" content="${image}" />`,
    `<meta data-seo property="og:locale" content="en_GH" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta data-seo name="twitter:image" content="${image}" />`,
  ];
  if (meta.article) {
    tags.push(
      `<meta data-seo property="article:published_time" content="${meta.article.published}" />`,
      `<meta data-seo property="article:modified_time" content="${meta.article.modified}" />`,
    );
  }
  tags.push(
    `<script data-seo type="application/ld+json">${jsonForScript({ '@context': 'https://schema.org', '@graph': graph })}</script>`,
  );
  return tags.filter(Boolean).join('\n    ');
}
