import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Unlimited members', 'Attendance tracking', 'Giving & tithe records',
  'Instant PDF receipts', 'Monthly & annual reports', 'Bulk WhatsApp messaging',
  'SMS via mNotify', 'Auto birthday greetings', 'Visitor follow-up tracker',
  'Prayer & pastoral care', 'Volunteer management', 'Pledge tracking',
  'Event management', 'Role-based access control', 'Multi-campus support', 'Audit log',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ background: '#f7f8fc' }}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-3"
          style={{ color: '#9b5de5' }}
        >
          Pricing
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-sm mb-12 max-w-lg"
        >
          One simple plan. Every feature included. No hidden fees.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {/* Top bar */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #9b5de5, #7c3aed, #4f46e5)' }} />

            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Church Plan</p>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black text-gray-900">GHS 180</span>
                    <span className="text-gray-400 mb-2">/month</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">No contracts · Cancel anytime</p>
                </div>
                <div className="text-right bg-purple-50 rounded-xl px-5 py-3 border border-purple-100">
                  <p className="text-2xl font-black" style={{ color: '#9b5de5' }}>GHS 6/day</p>
                  <p className="text-xs text-gray-400">Less than a cup of coffee</p>
                </div>
              </div>

              <button
                onClick={() => alert('Payment coming soon! We will notify you when Paystack is live.')}
                className="w-full py-4 rounded-full text-white font-bold text-base mb-8 transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}
              >
                Get started — GHS 180/mo
              </button>

              <p className="text-xs text-gray-400 text-center mb-8">
                🔒 Secure payments · Your data stays private
              </p>

              <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Everything included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                  {features.map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 shrink-0" style={{ color: '#9b5de5' }} strokeWidth={2.5} />
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
