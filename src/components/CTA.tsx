import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1B2875 0%, #1E3A8A 55%, #2BA898 100%)', border: '1px solid rgba(43,168,152,0.3)' }}>
          {/* Photo bg */}
          <div className="absolute inset-0">
            <img
              src="/church-worship.jpg"
              alt="Church community"
              className="w-full h-full object-cover opacity-[0.07]"
            />
          </div>
          {/* Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(43,168,152,0.2) 0%, transparent 70%)' }} />

          <div className="relative z-10 p-12 sm:p-20 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(167,243,208,0.9)' }}>
              Ready to get started?
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Transform how your<br />church operates.
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Join 120+ churches across Ghana. Setup takes under 10 minutes.
              Cancel anytime. No contracts. Plans from GHS 200 per month.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-sm transition-opacity hover:opacity-90 shadow-lg"
                style={{ background: '#ffffff', color: '#1B2875' }}>
                See pricing plans <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-sm border transition-all"
                style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                View live demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
