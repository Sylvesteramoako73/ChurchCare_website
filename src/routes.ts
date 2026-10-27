import { faqPageLd, faqs } from './data/faqs';
import { featurePages } from './data/features';
import { softwareApplicationLd } from './data/plans';
import { posts } from './content/blog';
import { SITE_NAME, SITE_URL, canonicalUrl, type PageMeta } from './lib/seo';

/** Date the static pages were last meaningfully updated, used for sitemap lastmod */
const PAGES_UPDATED = '2026-10-27';

const staticMeta: PageMeta[] = [
  {
    path: '/',
    title: 'Church Management Software in Ghana | Faith ChurchCare',
    description:
      'Church management software for African churches. Track members, attendance, tithes and giving, and send bulk WhatsApp and SMS. Free 14 day trial, plans from GHS 200 a month.',
    jsonLd: [softwareApplicationLd],
  },
  {
    path: '/features',
    title: 'Church Management Software Features | Faith ChurchCare',
    description:
      'Members, attendance, tithes and giving, WhatsApp and SMS, visitor follow up, pastoral care and reports. See everything Faith ChurchCare does for your church.',
    breadcrumbs: [{ name: 'Features', path: '/features' }],
  },
  {
    path: '/pricing',
    title: 'Pricing and Plans from GHS 200 a Month | Faith ChurchCare',
    description:
      'Simple church software pricing in cedis: Starter GHS 200, Growth GHS 350 and Pro GHS 500 a month. Pay every 3, 6 or 12 months. Start with a 14 day free trial.',
    breadcrumbs: [{ name: 'Pricing', path: '/pricing' }],
    jsonLd: [softwareApplicationLd],
  },
  {
    path: '/faq',
    title: 'Church Software FAQs | Faith ChurchCare',
    description:
      'Answers about Faith ChurchCare: pricing, plans, Mobile Money giving, WhatsApp messaging, importing members from Excel, data security and the free trial.',
    breadcrumbs: [{ name: 'FAQs', path: '/faq' }],
    jsonLd: [faqPageLd(faqs)],
  },
  {
    path: '/contact',
    title: 'Contact Us | Faith ChurchCare Church Software, Ghana',
    description:
      'Questions about Faith ChurchCare or want a walkthrough for your leadership team? Send us a message and we respond within 24 hours.',
    breadcrumbs: [{ name: 'Contact', path: '/contact' }],
  },
  {
    path: '/blog',
    title: 'Church Administration Blog | Faith ChurchCare',
    description:
      'Practical guides for pastors and church administrators in Ghana on giving, visitor follow up, attendance, communication and choosing church software.',
    breadcrumbs: [{ name: 'Blog', path: '/blog' }],
    jsonLd: [
      {
        '@type': 'Blog',
        name: `${SITE_NAME} Blog`,
        url: `${SITE_URL}/blog`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: posts.map(p => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE_URL}/blog/${p.slug}`, datePublished: p.date })),
      },
    ],
  },
];

const featureMeta: PageMeta[] = featurePages.map(f => ({
  path: `/features/${f.slug}`,
  title: f.title,
  description: f.description,
  image: `${SITE_URL}${f.image.src}`,
  breadcrumbs: [
    { name: 'Features', path: '/features' },
    { name: f.name, path: `/features/${f.slug}` },
  ],
  jsonLd: [faqPageLd(f.faqs)],
}));

const postMeta: PageMeta[] = posts.map(p => {
  const url = canonicalUrl(`/blog/${p.slug}`);
  const modified = p.updated ?? p.date;
  return {
    path: `/blog/${p.slug}`,
    title: `${p.title} | Faith ChurchCare`.length <= 70 ? `${p.title} | Faith ChurchCare` : p.title,
    description: p.description,
    image: `${SITE_URL}${p.image}`,
    type: 'article',
    article: { published: p.date, modified, author: p.author },
    lastmod: modified,
    breadcrumbs: [
      { name: 'Blog', path: '/blog' },
      { name: p.title, path: `/blog/${p.slug}` },
    ],
    jsonLd: [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: p.title,
        description: p.description,
        image: `${SITE_URL}${p.image}`,
        datePublished: p.date,
        dateModified: modified,
        wordCount: p.words,
        inLanguage: 'en-GH',
        author: { '@type': 'Organization', name: p.author, url: `${SITE_URL}/` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
      },
    ],
  };
});

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: 'Page not found | Faith ChurchCare',
  description: 'The page you were looking for could not be found.',
  noindex: true,
};

/** Every indexable page on the site, in sitemap order */
export const allPages: PageMeta[] = [...staticMeta, ...featureMeta, ...postMeta].map(m => ({
  ...m,
  lastmod: m.lastmod ?? PAGES_UPDATED,
}));

export const metaForPath = (path: string): PageMeta => {
  const clean = path !== '/' ? path.replace(/\/+$/, '') : path;
  return allPages.find(m => m.path === clean) ?? notFoundMeta;
};
