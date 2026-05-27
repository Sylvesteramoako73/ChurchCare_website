import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { LogoIcon } from './Logo';

const C = {
  bg: '#FFFFFF',
  card: '#F1F5F9',
  border: 'rgba(0,0,0,0.08)',
  navy: '#1B2875',
  teal: '#2BA898',
  purple: '#7B4FBE',
  text: '#0F172A',
  muted: 'rgba(15,23,42,0.5)',
};

function PlatformIllustration() {
  const nodes = [
    { label: 'Members', icon: '👥', x: 50, y: 12 },
    { label: 'Giving', icon: '💰', x: 87, y: 38 },
    { label: 'Events', icon: '📅', x: 78, y: 75 },
    { label: 'Messaging', icon: '💬', x: 35, y: 88 },
    { label: 'Reports', icon: '📊', x: 10, y: 58 },
    { label: 'Pastoral', icon: '🙏', x: 18, y: 22 },
  ];

  return (
    <div className="relative w-full select-none" style={{ height: 440 }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="165" stroke={C.border} strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="200" cy="200" r="105" stroke="rgba(43,168,152,0.15)" strokeWidth="1" />
        {nodes.map((n, i) => {
          const x2 = (n.x / 100) * 400;
          const y2 = (n.y / 100) * 400;
          return <line key={i} x1="200" y1="200" x2={x2} y2={y2}
            stroke="rgba(43,168,152,0.2)" strokeWidth="1.5" />;
        })}
      </svg>

      {/* Center hub */}
      <div className="absolute rounded-full flex items-center justify-center border"
        style={{
          width: 80, height: 80,
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#EFF6FF',
          borderColor: 'rgba(43,168,152,0.3)',
          boxShadow: '0 0 40px rgba(43,168,152,0.1)',
        }}>
        <LogoIcon size={46} />
      </div>

      {nodes.map((n, i) => (
        <motion.div key={n.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
          className="absolute flex flex-col items-center"
          style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%, -50%)' }}>
          <div className="w-13 h-13 rounded-2xl flex items-center justify-center text-xl mb-1.5 border"
            style={{ width: 52, height: 52, background: C.card, borderColor: C.border }}>
            {n.icon}
          </div>
          <span className="text-xs font-medium whitespace-nowrap" style={{ color: C.muted }}>
            {n.label}
          </span>
        </motion.div>
      ))}

      {/* Floating chips */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        className="absolute flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold"
        style={{ right: '4%', top: '8%', background: '#ffffff', borderColor: C.border, color: '#059669' }}>
        <span className="w-2 h-2 rounded-full bg-emerald-500" />1,247 members
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        className="absolute flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold"
        style={{ left: '2%', bottom: '14%', background: '#ffffff', borderColor: C.border, color: C.teal }}>
        GHS 52K this month
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8 border"
              style={{ background: 'rgba(43,168,152,0.08)', color: C.teal, borderColor: 'rgba(43,168,152,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.teal }} />
              Trusted by 120+ churches in Ghana
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[3.8rem] font-black leading-[1.06] tracking-tight mb-4"
              style={{ color: C.navy }}>
              The complete church
              <span className="block" style={{ color: C.teal }}>management platform.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: C.purple }}>
              Manage. Serve. Grow. Together.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: C.muted }}>
              Manage members, track giving, send WhatsApp broadcasts, and generate reports —
              all in one simple platform built for African churches.
              Starting at <span className="font-bold" style={{ color: C.navy }}>GHS 200/month</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="flex items-center gap-4 flex-wrap mb-14">
              <a href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-opacity hover:opacity-90"
                style={{ background: '#1B2875', boxShadow: '0 8px 24px rgba(27,40,117,0.25)' }}>
                Get started free <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 font-semibold text-base transition-colors"
                style={{ color: 'rgba(15,23,42,0.55)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1B2875')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(15,23,42,0.55)')}>
                <div className="w-11 h-11 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: 'rgba(0,0,0,0.12)', background: C.card }}>
                  <Play className="w-4 h-4 ml-0.5" style={{ fill: C.teal, color: C.teal }} />
                </div>
                Watch demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8 pt-8 border-t"
              style={{ borderColor: C.border }}>
              {[
                { val: '120+', label: 'Churches' },
                { val: '15K+', label: 'Members managed' },
                { val: '99.9%', label: 'Uptime' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-black" style={{ color: C.navy }}>{s.val}</p>
                  <p className="text-xs mt-0.5" style={{ color: C.muted }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block">
            <PlatformIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
