import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is Faith ChurchCare?', a: 'Faith ChurchCare is a complete cloud-based church management software designed for African churches. It handles members, attendance, giving, WhatsApp/SMS communication, visitor follow-up, pastoral care, reports, and more — all in one platform.' },
  { q: 'How much does Faith ChurchCare cost?', a: 'Faith ChurchCare offers three plans: Starter at GHS 200/month (up to 150 members), Growth at GHS 350/month (up to 500 members), and Pro at GHS 500/month (unlimited members). No hidden fees, no long-term contracts — cancel anytime.' },
  { q: "What's included in each plan?", a: 'The Starter plan covers member management, attendance, giving records, basic reports, and 2 admins. Growth adds bulk WhatsApp & SMS, events, visitor follow-up, PDF receipts, and 10 admins. Pro adds multi-campus support, role-based access, advanced analytics, and unlimited admins.' },
  { q: 'Do I need technical knowledge to use it?', a: 'Not at all. Faith ChurchCare is designed to be intuitive. If you can use WhatsApp or a smartphone, you can use Faith ChurchCare. Setup takes less than 10 minutes and we provide onboarding guidance.' },
  { q: 'Can multiple staff members use it?', a: 'Yes. You can invite your entire team and assign role-based access — Administrators, Pastors, Department Heads, and Data Entry staff each get the right level of access.' },
  { q: 'How does the WhatsApp messaging work?', a: 'Faith ChurchCare connects to a WhatsApp gateway that lets you send bulk messages directly to your congregation. You can also set up automated birthday and church anniversary greetings.' },
  { q: "Is my church's data safe?", a: "Yes. All data is stored securely in Supabase (backed by AWS), encrypted at rest and in transit. Only your authorised team members can access your church's data." },
  { q: 'Can I try it before paying?', a: 'Yes — you can view a full live demo of the app at chms-app.netlify.app before subscribing. All features are visible in the demo.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: '#2BA898' }}>
              FAQs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black leading-tight mb-5"
              style={{ color: '#0F172A' }}>
              Common questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgba(15,23,42,0.55)' }}>
              Can't find the answer you're looking for? Reach out to our team directly.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border transition-all"
              style={{ color: '#2BA898', borderColor: 'rgba(43,168,152,0.35)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(43,168,152,0.07)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
              Contact us →
            </motion.a>
          </div>

          <div className="lg:col-span-2">
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                  <button
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
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden">
                        <p className="pb-5 text-sm leading-relaxed pr-12" style={{ color: 'rgba(15,23,42,0.6)' }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
