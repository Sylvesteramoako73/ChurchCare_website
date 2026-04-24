import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What is ChurchCare?', a: 'ChurchCare is a complete cloud-based church management software designed for African churches. It handles members, attendance, giving, WhatsApp/SMS communication, visitor follow-up, pastoral care, reports, and more — all in one platform.' },
  { q: 'How much does ChurchCare cost?', a: 'ChurchCare is GHS 180 per month — that\'s less than GHS 6 per day. There are no hidden fees, no per-feature charges, and no long-term contracts. Cancel anytime.' },
  { q: 'What\'s included in the plan?', a: 'Everything. Unlimited members, attendance tracking, giving records, PDF receipts, bulk WhatsApp & SMS, reports, visitor follow-up, pastoral care, volunteer management, multi-campus support, role-based access, and more.' },
  { q: 'Do I need technical knowledge to use it?', a: 'Not at all. ChurchCare is designed to be intuitive. If you can use WhatsApp or a smartphone, you can use ChurchCare. Setup takes less than 10 minutes and we provide onboarding guidance.' },
  { q: 'Can multiple staff members use it?', a: 'Yes. You can invite your entire team and assign role-based access — Administrators, Pastors, Department Heads, and Data Entry staff each get the right level of access.' },
  { q: 'How does the WhatsApp messaging work?', a: 'ChurchCare connects to a WhatsApp gateway that lets you send bulk messages directly to your congregation. You can also set up automated birthday and church anniversary greetings.' },
  { q: 'Is my church\'s data safe?', a: 'Yes. All data is stored securely in Supabase (backed by AWS), encrypted at rest and in transit. Only your authorized team members can access your church\'s data.' },
  { q: 'Can I try it before paying?', a: 'Yes — you can view a full live demo of the app at chms-app.netlify.app before subscribing. All features are visible in the demo.' },
  { q: 'How do I get started?', a: 'Click "Get started" on this page, complete payment, and you\'ll be guided through setting up your church profile, adding members, and inviting your team. The whole process takes under 10 minutes.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-10"
          style={{ color: '#9b5de5' }}
        >
          FAQs
        </motion.p>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm ${open === i ? 'text-gray-900' : 'text-gray-700'}`}>
                  {faq.q}
                </span>
                <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: open === i ? '#9b5de5' : '#f0f3f8' }}>
                  {open === i
                    ? <Minus className="w-3 h-3 text-white" />
                    : <Plus className="w-3 h-3 text-gray-500" />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-gray-500 leading-relaxed pr-10">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
