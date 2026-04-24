import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24" style={{ background: '#080c28' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-bold mb-4 text-white">
              Ready to transform your church?
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Join churches across Ghana using ChurchCare to manage their congregation,
              track giving, and stay connected — all in one platform for just GHS 180/month.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}
              >
                Get started — GHS 180/mo
              </a>
              <a
                href="https://chms-app.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-full font-bold text-sm border transition-colors hover:bg-white/10"
                style={{ color: '#9b5de5', borderColor: '#9b5de5' }}
              >
                View live demo
              </a>
            </div>
          </motion.div>

          {/* Right: info boxes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Setup time', value: '< 10 mins' },
              { label: 'Price per day', value: 'GHS 6' },
              { label: 'Contract', value: 'None' },
              { label: 'Members limit', value: 'Unlimited' },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-2xl p-6 border"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p className="text-2xl font-black text-white mb-1">{item.value}</p>
                <p className="text-xs text-gray-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
