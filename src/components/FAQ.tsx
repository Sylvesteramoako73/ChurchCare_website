import { useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { faqs as allFaqs } from '../data/faqs';



const MotionLink = motion.create(Link);

export default function FAQ({ limit, asPage = false }: { limit?: number; asPage?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = limit ? allFaqs.slice(0, limit) : allFaqs;
  const Heading = asPage ? motion.h1 : motion.h2;

  return (
    <section id="faqs" className={asPage ? 'pt-28 pb-28' : 'py-28'} style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        {asPage && <Breadcrumbs trail={[{ name: 'FAQs', path: '/faq' }]} />}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <motion.p
              initial={asPage ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: '#2BA898' }}>
              FAQs
            </motion.p>
            <Heading
              initial={asPage ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black leading-tight mb-5"
              style={{ color: '#0F172A' }}>
              {asPage ? 'Frequently asked questions' : 'Common questions'}
            </Heading>
            <motion.p
              initial={asPage ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgba(15,23,42,0.55)' }}>
              Can't find the answer you're looking for? Reach out to our team directly.
            </motion.p>
            <MotionLink
              initial={asPage ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26 }}
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border transition-all"
              style={{ color: '#2BA898', borderColor: 'rgba(43,168,152,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(43,168,152,0.07)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
              Contact us →
            </MotionLink>
            {limit && (
              <Link to="/faq" className="block mt-6 text-sm font-semibold hover:underline" style={{ color: '#1B2875' }}>
                See all {allFaqs.length} questions
              </Link>
            )}
          </div>

          <div className="lg:col-span-2">
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={asPage ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="m-0">
                  <button
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}>
                    <span className="font-semibold text-sm" style={{ color: open === i ? '#0F172A' : 'rgba(15,23,42,0.7)' }}>
                      {faq.q}
                    </span>
                    <div className="shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all"
                      style={{
                        background: open === i ? '#1B2875' : 'transparent',
                        borderColor: open === i ? '#1B2875' : 'rgba(0,0,0,0.15)',
                      }}>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open === i ? 'rotate-180' : ''}`}
                        style={{ color: open === i ? '#fff' : 'rgba(15,23,42,0.45)' }} />
                    </div>
                  </button>
                  </h3>
                  <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: open === i ? '1fr' : '0fr', opacity: open === i ? 1 : 0 }}>
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed pr-12" style={{ color: 'rgba(15,23,42,0.6)' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
