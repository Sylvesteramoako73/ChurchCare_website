import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight } from 'lucide-react';

const features = [
  'Unlimited members & profiles',
  'Attendance tracking & history',
  'Tithe, offering & pledge records',
  'Instant PDF receipts',
  'Monthly & annual reports',
  'Bulk WhatsApp messaging',
  'SMS via mNotify',
  'Automated birthday greetings',
  'Anniversary auto-messages',
  'Visitor follow-up tracker',
  'Prayer & pastoral care',
  'Volunteer management',
  'Pledge tracking',
  'Event management',
  'Role-based access control',
  'Multi-campus support',
  'Audit log',
  'Priority support',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-violet-600 font-bold text-sm uppercase tracking-widest mb-3">
            Simple, honest pricing
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            One plan. Everything included.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-xl mx-auto">
            No feature gating, no surprise charges. Every church gets the full platform at one fair price.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-violet-100/60 border border-violet-100"
          >
            {/* Top gradient */}
            <div className="h-2 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500" />

            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    <Zap className="w-3 h-3 fill-white" /> Full access plan
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black text-gray-950 tracking-tight">GHS 180</span>
                    <span className="text-gray-400 text-lg mb-1.5">/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Billed monthly · Cancel anytime</p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-4 text-center sm:text-right shrink-0">
                  <p className="text-3xl font-black text-violet-600">GHS 6/day</p>
                  <p className="text-xs text-gray-500 mt-0.5">Less than a coffee</p>
                </div>
              </div>

              <a
                href="#"
                onClick={e => { e.preventDefault(); alert('Payment integration coming soon! We will notify you when it goes live.'); }}
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-black text-base hover:opacity-90 transition-all shadow-lg shadow-violet-200 mb-8 hover:-translate-y-0.5"
              >
                Get started today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Everything included</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-gray-400 mt-6"
          >
            🔒 Secure payments powered by Paystack · Your data is safe and private
          </motion.p>
        </div>
      </div>
    </section>
  );
}
