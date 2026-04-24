import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 bg-gray-50/60">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl overflow-hidden text-center px-8 py-20"
        >
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

          <div className="relative">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Get started today
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Your church deserves<br />better tools
            </h2>
            <p className="text-violet-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join churches across Ghana using ChurchCare to grow their congregations,
              track their finances, and stay connected with their members.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="flex items-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-2xl font-bold text-base hover:bg-violet-50 transition-colors shadow-xl"
              >
                Start for GHS 180/mo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://chms-app.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white font-semibold text-sm transition-colors underline underline-offset-4"
              >
                Try the live demo first
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
