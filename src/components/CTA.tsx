import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const perks = ['No credit card required', 'Setup in 10 minutes', 'Cancel anytime'];

export default function CTA() {
  return (
    <section className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-violet-900/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase border border-violet-500/30">
            Ready to get started?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-[1.08]">
            Your congregation deserves{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              better tools
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of churches across Ghana using ChurchCare to grow their
            congregations, strengthen their finances, and stay deeply connected with their members.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#pricing"
              className="group flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-base hover:opacity-90 transition-all shadow-2xl shadow-violet-900/50 hover:-translate-y-0.5">
              Start for GHS 180/month
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-2xl">
              View live demo
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {perks.map(p => (
              <div key={p} className="flex items-center gap-2 text-gray-500 text-sm">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                {p}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
