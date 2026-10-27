import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { formatDate, posts, readingMinutes } from '../content/blog';
import Breadcrumbs from '../components/Breadcrumbs';
import CTA from '../components/CTA';

export default function BlogIndex() {
  return (
    <>
      <section className="pt-32 pb-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs trail={[{ name: 'Blog', path: '/blog' }]} />
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#2BA898' }}>Blog</p>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight mb-6" style={{ color: '#1B2875' }}>
              Practical guides for running your church well
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(15,23,42,0.6)' }}>
              Clear, practical advice for pastors, administrators and church finance teams in Ghana, on giving,
              visitor follow up, attendance, communication and getting the most from church software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article key={p.slug} className="group rounded-3xl overflow-hidden border flex flex-col transition-all hover:shadow-lg"
                style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <Link to={`/blog/${p.slug}`} tabIndex={-1} aria-hidden="true" className="block overflow-hidden" style={{ background: '#E2E8F0' }}>
                  <img src={p.image} alt="" width={700} height={400} loading={i < 3 ? 'eager' : 'lazy'} decoding="async"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ aspectRatio: '16 / 9' }} />
                </Link>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-xs font-semibold mb-3" style={{ color: 'rgba(15,23,42,0.45)' }}>
                    <time dateTime={p.date}>{formatDate(p.date)}</time> · {readingMinutes(p)} min read
                  </p>
                  <h2 className="text-xl font-black leading-snug mb-3" style={{ color: '#0F172A' }}>
                    <Link to={`/blog/${p.slug}`} className="hover:text-[#1B2875]">{p.title}</Link>
                  </h2>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'rgba(15,23,42,0.6)' }}>{p.description}</p>
                  <Link to={`/blog/${p.slug}`} className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: '#1B2875' }}
                    aria-label={`Read ${p.title}`}>
                    Read the guide <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
