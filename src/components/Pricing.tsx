import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const features = [
  'Unlimited members',
  'Attendance tracking',
  'Giving & tithe records',
  'PDF receipts & reports',
  'WhatsApp bulk messaging',
  'SMS via mNotify',
  'Visitor follow-up tracker',
  'Prayer & pastoral care',
  'Volunteer management',
  'Pledge tracking',
  'Event management',
  'Role-based access control',
  'Multiple campuses',
  'Audit log',
  'Birthday & anniversary auto-greetings',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Simple pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            One plan. Everything included.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            No tiers, no feature gating. Every church gets the full platform at one honest price.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-white rounded-3xl border-2 border-violet-200 shadow-2xl shadow-violet-100 overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500" />

            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-1 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" /> Full access
              </span>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-2">Church Plan</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-extrabold text-gray-900 tracking-tight">GHS 180</span>
                <span className="text-gray-400 mb-2">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">Billed monthly. Cancel anytime.</p>

              {/* CTA */}
              <button
                onClick={() => alert('Payment integration coming soon! Contact us to get started.')}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-violet-200 mb-8"
              >
                Get started today
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-100" />
                <span className="text-xs text-gray-400 font-medium">What's included</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              {/* Features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-violet-600" strokeWidth={3} />
                    </div>
                    <span className="text-xs text-gray-600 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Questions? Contact us at{' '}
            <a href="mailto:info@beenhanced.co" className="text-violet-600 hover:underline">
              info@beenhanced.co
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
