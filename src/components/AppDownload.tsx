import { motion } from 'framer-motion';
import { Smartphone, Monitor, Check } from 'lucide-react';

const appFeatures = [
  'Take attendance on the go',
  'Record offerings from your phone',
  'Send WhatsApp messages instantly',
  'View reports from anywhere',
  'Manage members on mobile',
  'Works offline, syncs later',
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 240 }}>
      {/* Phone frame */}
      <div className="rounded-[40px] overflow-hidden border-4 border-slate-800 shadow-2xl"
        style={{ background: '#0F0F1A', height: 480 }}>
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-2" style={{ background: '#0F0F1A' }}>
          <div className="w-20 h-5 rounded-full bg-slate-800" />
        </div>

        {/* Screen */}
        <div className="px-3 pb-4">
          {/* App header */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div>
              <p className="text-white text-xs font-bold">ChurchCare</p>
              <p className="text-slate-500 text-[9px]">Grace Chapel</p>
            </div>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}>
              E
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { val: '1,247', label: 'Members', color: '#7C3AED' },
              { val: '89%', label: 'Attendance', color: '#10B981' },
            ].map(s => (
              <div key={s.label} className="rounded-xl p-2.5"
                style={{ background: `${s.color}22` }}>
                <p className="text-sm font-black" style={{ color: s.color }}>{s.val}</p>
                <p className="text-[9px] text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Today's service card */}
          <div className="rounded-xl p-3 mb-3"
            style={{ background: 'linear-gradient(135deg, #7C3AED22, #4F46E522)' }}>
            <p className="text-[9px] text-violet-400 font-bold mb-1">TODAY · SUNDAY SERVICE</p>
            <p className="text-xs text-white font-semibold">9:00 AM — Main Sanctuary</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 bg-slate-700 rounded-full h-1.5">
                <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '73%' }} />
              </div>
              <span className="text-[9px] text-slate-400">847 / 1,100</span>
            </div>
          </div>

          {/* Quick actions */}
          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-2">Quick Actions</p>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { emoji: '✅', label: 'Attendance' },
              { emoji: '💰', label: 'Offering' },
              { emoji: '📢', label: 'Broadcast' },
            ].map(a => (
              <div key={a.label} className="rounded-xl p-2 text-center"
                style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="text-lg mb-1">{a.emoji}</div>
                <p className="text-[8px] text-slate-400">{a.label}</p>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-2">Recent</p>
          <div className="space-y-1.5">
            {[
              { text: 'Ama Asante marked present', time: '2m ago', dot: '#10B981' },
              { text: 'GHS 500 tithe recorded', time: '5m ago', dot: '#F59E0B' },
              { text: 'Birthday SMS sent to Kofi', time: '8m ago', dot: '#0EA5E9' },
            ].map(r => (
              <div key={r.text} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.dot }} />
                <p className="text-[9px] text-slate-400 flex-1 truncate">{r.text}</p>
                <span className="text-[8px] text-slate-600">{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }} />
    </div>
  );
}

export default function AppDownload() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: '#0A0A14' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8"
              style={{ background: 'rgba(124,58,237,0.2)', color: '#A78BFA' }}>
              <Smartphone className="w-3.5 h-3.5" />
              Works on all devices
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Manage your church
              <span className="block" style={{ color: '#A78BFA' }}>from your pocket.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              ChurchCare works seamlessly on any device — phone, tablet, or laptop.
              Take attendance on Sunday from your phone. Check reports from your iPad.
              Everything stays in sync, everywhere.
            </p>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {appFeatures.map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(124,58,237,0.3)' }}>
                    <Check className="w-3 h-3 text-violet-400" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-slate-300">{f}</span>
                </div>
              ))}
            </div>

            {/* Device badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Smartphone className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Available on</p>
                  <p className="text-sm font-bold text-white">iOS & Android</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Monitor className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Also on</p>
                  <p className="text-sm font-bold text-white">Web browser</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
