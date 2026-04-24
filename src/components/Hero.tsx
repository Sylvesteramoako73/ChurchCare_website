import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#080c28' }}>
      {/* Particle network */}
      <ParticleCanvas />

      {/* Subtle radial glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 30%, rgba(100,80,200,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight mb-6"
            >
              Your all-in-one church management software
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-gray-300 text-lg leading-relaxed mb-12 max-w-lg"
            >
              A reliable church management software is essential for any growing church.
              ChurchCare gives you everything you need in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-6 flex-wrap"
            >
              {/* Primary CTA */}
              <a href="#pricing"
                className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}>
                Get started — GHS 180/mo
              </a>

              {/* Play CTA */}
              <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-white font-medium text-base hover:text-purple-300 transition-colors group">
                <div className="w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-[#9b5de5] transition-colors"
                  style={{ background: 'rgba(10,14,40,0.6)' }}>
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
                Let's take a walk
              </a>
            </motion.div>
          </div>

          {/* Right: Church steeple / cross */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex items-end justify-center h-full relative"
          >
            {/* Church silhouette built with CSS */}
            <div className="relative flex flex-col items-center" style={{ filter: 'drop-shadow(0 0 40px rgba(155,93,229,0.15))' }}>
              {/* Cross */}
              <div className="relative mb-0">
                <div className="w-3 h-24 rounded-sm mx-auto" style={{ background: 'rgba(200,205,230,0.85)' }} />
                <div className="absolute top-5 left-1/2 -translate-x-1/2 h-3 w-16 rounded-sm" style={{ background: 'rgba(200,205,230,0.85)' }} />
              </div>
              {/* Steeple */}
              <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[100px] border-l-transparent border-r-transparent"
                style={{ borderBottomColor: 'rgba(190,196,225,0.8)' }} />
              {/* Tower */}
              <div className="w-32 h-48 relative" style={{ background: 'rgba(170,178,215,0.75)' }}>
                {/* Window */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-10 rounded-t-full"
                  style={{ background: 'rgba(100,110,180,0.5)', border: '2px solid rgba(150,160,210,0.6)' }} />
              </div>
              {/* Steps */}
              <div className="w-48 h-6 rounded-sm" style={{ background: 'rgba(160,168,210,0.7)' }} />
              <div className="w-56 h-4 rounded-sm" style={{ background: 'rgba(150,158,205,0.6)' }} />
            </div>

            {/* Subtle glow behind church */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none -z-10"
              style={{ background: 'radial-gradient(circle, rgba(155,93,229,0.08) 0%, transparent 70%)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
