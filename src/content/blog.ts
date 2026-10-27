export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  image: string;
  imageAlt: string;
  /** Slug of the feature page this post links to most closely */
  feature?: string;
  html: string;
  headings: { id: string; text: string }[];
  words: number;
}

type RawPost = Omit<BlogPost, 'slug'>;

const modules = import.meta.glob<{ default: RawPost }>('./blog/*.md', { eager: true });

/** All posts, newest first. Slug comes from the file name. */
export const posts: BlogPost[] = Object.entries(modules)
  .map(([path, mod]) => ({ ...mod.default, slug: path.split('/').pop()!.replace(/\.md$/, '') }))
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

export const postBySlug = (slug: string) => posts.find(p => p.slug === slug);

export const readingMinutes = (p: BlogPost) => Math.max(1, Math.round(p.words / 220));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
