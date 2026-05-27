import { motion } from 'framer-motion';
import { UserPlus, Settings, Zap } from 'lucide-react';

const steps = [
  { step: '01', icon: UserPlus, title: 'Sign up in minutes', desc: 'Create your church account and subscribe. No technical knowledge needed — if you can use WhatsApp, you can use Faith ChurchCare.', color: '#2BA898', bg: 'rgba(43,168,152,0.08)' },
  { step: '02', icon: Settings, title: 'Set up your congregation', desc: 'Add your church details, import your member list from Excel, and invite your admin team with the right access levels.', color: '#1B2875', bg: 'rgba(27,40,117,0.08)' },
  { step: '03', icon: Zap, title: 'Go live — under 10 minutes', desc: 'Record attendance, track giving, send WhatsApp messages, and generate reports from day one. Your whole team, one platform.', color: '#7B4FBE', bg: 'rgba(123,79,190,0.08)' },
];

export default function HowItWorks() {
  return (
    <section className="py-28" id="how-it-works" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: '#2BA898' }}>
            Getting started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black leading-tight mb-5"
            style={{ color: '#0F172A' }}>
            Up and running in 3 steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-lg"
            style={{ color: 'rgba(15,23,42,0.55)' }}>
            No IT team needed. Our Ghana-based support team is on WhatsApp if you need help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-14">
          <div className="hidden md:block absolute top-14 left-[18%] right-[18%] h-px z-0"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(43,168,152,0.3), transparent)' }} />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 rounded-2xl p-8 border"
              style={{ background: '#FFFFFF', borderColor: 'rgba(0,0,0,0.08)' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: s.bg }}>
                <s.icon className="w-6 h-6" style={{ color: s.color }} strokeWidth={2} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: s.color }}>
                Step {s.step}
              </span>
              <h3 className="text-xl font-black mt-2 mb-3" style={{ color: '#0F172A' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.55)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-4">
          {[
            '/church-worship.jpg',
            '/church-service.jpg',
            '/church-congregation.jpg',
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ height: 200, background: '#E2E8F0' }}>
              <img src={src} alt="Church community" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
