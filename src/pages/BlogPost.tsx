import { Link, useNavigate, useParams } from 'react-router';
import { ArrowRight } from 'lucide-react';
import type { MouseEvent } from 'react';
import { formatDate, postBySlug, posts, readingMinutes } from '../content/blog';
import { featureBySlug } from '../data/features';
import Breadcrumbs from '../components/Breadcrumbs';
import FeatureIcon from '../components/FeatureIcon';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const post = postBySlug(slug);
  if (!post) return <NotFound />;

  const feature = post.feature ? featureBySlug(post.feature) : undefined;
  const others = posts.filter(p => p.slug !== post.slug).slice(0, 2);

  // Internal links inside the article body navigate without a full page load
  const onBodyClick = (e: MouseEvent<HTMLDivElement>) => {
    const a = (e.target as Element).closest('a');
    const href = a?.getAttribute('href');
    if (!a || !href || !href.startsWith('/') || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <>
      <article className="pt-32 pb-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs trail={[{ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight mb-6" style={{ color: '#1B2875' }}>
              {post.title}
            </h1>
            <p className="text-sm font-semibold" style={{ color: 'rgba(15,23,42,0.5)' }}>
              {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingMinutes(post)} min read
            </p>
          </header>
        </div>

        <div className="max-w-4xl mx-auto px-6 mb-12">
          <img src={post.image} alt={post.imageAlt} width={700} height={400} fetchPriority="high" decoding="async"
            className="w-full rounded-3xl object-cover" style={{ aspectRatio: '16 / 8', background: '#E2E8F0' }} />
        </div>

        <div className="max-w-3xl mx-auto px-6">
          {post.headings.length > 2 && (
            <nav aria-label="In this guide" className="mb-12 rounded-2xl p-6 border" style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: '#2BA898' }}>In this guide</p>
              <ol className="space-y-2 text-sm list-decimal pl-5" style={{ color: 'rgba(15,23,42,0.7)' }}>
                {post.headings.map(h => (
                  <li key={h.id}><a href={`#${h.id}`} className="hover:text-[#1B2875] hover:underline">{h.text}</a></li>
                ))}
              </ol>
            </nav>
          )}

          <div className="article-body" onClick={onBodyClick} dangerouslySetInnerHTML={{ __html: post.html }} />

          {feature && (
            <aside className="mt-14 rounded-3xl p-8 border flex flex-col sm:flex-row gap-6 items-start"
              style={{ background: '#EFF9F7', borderColor: 'rgba(43,168,152,0.2)' }}>
              <FeatureIcon name={feature.icon} color={feature.color} />
              <div>
                <p className="text-lg font-black mb-2" style={{ color: '#1B2875' }}>Try {feature.name.toLowerCase()} in Faith ChurchCare</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(15,23,42,0.6)' }}>{feature.description}</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <a href="https://app.churchcare.online" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm hover:opacity-90"
                    style={{ background: '#1B2875' }}>
                    Start 14 day free trial <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <Link to={`/features/${feature.slug}`} className="text-sm font-bold hover:underline" style={{ color: '#1B2875' }}>
                    See how it works
                  </Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </article>

      {others.length > 0 && (
        <section className="py-20" style={{ background: '#F8FAFC' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: '#0F172A' }}>More guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`}
                  className="group rounded-2xl p-7 border transition-all hover:shadow-md"
                  style={{ background: '#FFFFFF', borderColor: 'rgba(0,0,0,0.07)' }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'rgba(15,23,42,0.45)' }}>{readingMinutes(p)} min read</p>
                  <h3 className="text-lg font-black leading-snug mb-3" style={{ color: '#0F172A' }}>{p.title}</h3>
                  <span className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: '#1B2875' }}>
                    Read the guide <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
