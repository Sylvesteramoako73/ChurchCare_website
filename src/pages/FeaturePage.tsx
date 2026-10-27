import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { featureBySlug, featurePages } from '../data/features';
import { postBySlug } from '../content/blog';
import Breadcrumbs from '../components/Breadcrumbs';
import FeatureIcon from '../components/FeatureIcon';
import CTA from '../components/CTA';
import NotFound from './NotFound';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function FeaturePage() {
  const { slug = '' } = useParams();
  const f = featureBySlug(slug);
  if (!f) return <NotFound />;

  const related = f.related.map(s => featurePages.find(p => p.slug === s)!).filter(Boolean);
  const post = f.relatedPost ? postBySlug(f.relatedPost) : undefined;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs trail={[{ name: 'Features', path: '/features' }, { name: f.name, path: `/features/${f.slug}` }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FeatureIcon name={f.icon} color={f.color} size="sm" />
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#2BA898' }}>{f.eyebrow}</p>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight mb-6" style={{ color: '#1B2875' }}>
                {f.h1}
              </h1>
              <p className="text-lg leading-relaxed mb-9" style={{ color: 'rgba(15,23,42,0.6)' }}>{f.intro}</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://app.churchcare.online" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#1B2875', boxShadow: '0 8px 24px rgba(27,40,117,0.22)' }}>
                  Start 14 day free trial <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link to="/pricing" className="text-sm font-bold hover:underline" style={{ color: '#1B2875' }}>
                  See plans and pricing
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(0,0,0,0.06)', background: '#E2E8F0' }}>
              <img src={f.image.src} alt={f.image.alt} width={f.image.width} height={f.image.height}
                fetchPriority="high" decoding="async" className="w-full h-full object-cover" style={{ aspectRatio: '16 / 10' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black leading-tight mb-12 max-w-2xl" style={{ color: '#0F172A' }}>
            {f.benefitsHeading}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {f.benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{ delay: i * 0.05 }}
                className="p-7 rounded-2xl border" style={{ background: '#FFFFFF', borderColor: 'rgba(0,0,0,0.07)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4" style={{ background: `${f.color}14` }}>
                  <Check className="w-4 h-4" style={{ color: f.color }} strokeWidth={3} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0F172A' }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.6)' }}>{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-black leading-tight mb-12 max-w-2xl" style={{ color: '#0F172A' }}>
            {f.stepsHeading}
          </motion.h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {f.steps.map((s, i) => (
              <motion.li key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 border" style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#2BA898' }}>Step {i + 1}</span>
                <h3 className="text-lg font-black mt-2 mb-3" style={{ color: '#0F172A' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.6)' }}>{s.text}</p>
              </motion.li>
            ))}
          </ol>
          <p className="mt-10 rounded-2xl px-6 py-5 text-sm font-semibold border"
            style={{ background: '#EFF9F7', borderColor: 'rgba(43,168,152,0.2)', color: '#1B2875' }}>
            {f.planNote} <Link to="/pricing" className="underline">Compare plans</Link>
          </p>
        </div>
      </section>

      {/* FAQs, shown open so every answer is readable without clicking */}
      <section className="py-24" style={{ background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-10" style={{ color: '#0F172A' }}>
            Questions about {f.name.toLowerCase()}
          </h2>
          <div className="space-y-4">
            {f.faqs.map(q => (
              <div key={q.q} className="rounded-2xl p-7 border" style={{ background: '#FFFFFF', borderColor: 'rgba(0,0,0,0.07)' }}>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0F172A' }}>{q.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.6)' }}>{q.a}</p>
              </div>
            ))}
          </div>
          <Link to="/faq" className="inline-block mt-8 text-sm font-bold hover:underline" style={{ color: '#1B2875' }}>
            More questions and answers
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-10" style={{ color: '#0F172A' }}>
            Works well with
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map(r => (
              <Link key={r.slug} to={`/features/${r.slug}`}
                className="group p-7 rounded-2xl border transition-all hover:shadow-md"
                style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <FeatureIcon name={r.icon} color={r.color} size="sm" />
                <h3 className="font-bold text-base mt-5 mb-2" style={{ color: '#0F172A' }}>{r.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(15,23,42,0.6)' }}>{r.description}</p>
                <span className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: '#1B2875' }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          {post && (
            <Link to={`/blog/${post.slug}`}
              className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl p-7 border transition-all hover:shadow-md"
              style={{ background: '#EFF6FF', borderColor: 'rgba(27,40,117,0.12)' }}>
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: '#2BA898' }}>From the blog</p>
                <p className="text-lg font-black" style={{ color: '#1B2875' }}>{post.title}</p>
              </div>
              <span className="text-sm font-bold inline-flex items-center gap-1.5 shrink-0" style={{ color: '#1B2875' }}>
                Read the guide <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
