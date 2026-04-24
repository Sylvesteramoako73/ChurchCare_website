import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Churches served' },
  { value: '120K+', label: 'Members managed' },
  { value: '99.9%', label: 'Uptime guaranteed' },
  { value: 'GHS 180', label: 'Per month, all-in' },
];

const dashboardCards = [
  { label: 'Total Members', value: '1,248', change: '+12%', up: true },
  { label: 'Avg. Attendance', value: '87%', change: '+5%', up: true },
  { label: 'Monthly Giving', value: 'GHS 42,800', change: '+18%', up: true },
  { label: 'Volunteers', value: '64', change: '+3', up: true },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-violet-100/80 via-indigo-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border border-violet-200 shadow-sm text-violet-700 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          The #1 Church Management App in Ghana
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-950 leading-[1.06] tracking-tight mb-6 max-w-4xl"
        >
          The smarter way to{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
              run your church
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-xl text-gray-500 leading-relaxed mb-10"
        >
          ChurchCare gives your leadership team one powerful platform to manage members,
          track attendance, record giving, and stay connected — all for{' '}
          <span className="text-gray-800 font-bold">GHS 180 per month</span>.
        </motion.p>

        {/* Dual CTAs like Asoriba but better */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <a href="#pricing"
            className="group flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all shadow-xl shadow-violet-200 hover:shadow-violet-300 hover:-translate-y-0.5">
            I am a Church Leader
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
            className="group flex items-center gap-2.5 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-base hover:border-violet-300 hover:text-violet-700 transition-all hover:-translate-y-0.5">
            <Play className="w-4 h-4 fill-current" />
            View live demo
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-gray-400 mb-16"
        >
          No credit card required · Cancel anytime · Setup in under 10 minutes
        </motion.p>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4 bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 border border-gray-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400/60 shrink-0" />
                chms-app.netlify.app
              </div>
            </div>

            {/* App content */}
            <div className="bg-[#080f1e] p-5">
              <div className="flex gap-4">
                {/* Sidebar */}
                <div className="w-44 shrink-0 space-y-0.5">
                  <div className="flex items-center gap-2 px-3 py-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                      <span className="text-white text-xs font-black">CC</span>
                    </div>
                    <span className="text-white text-sm font-bold">ChurchCare</span>
                  </div>
                  {[
                    { name: 'Dashboard', active: true },
                    { name: 'Members', active: false },
                    { name: 'Attendance', active: false },
                    { name: 'Giving', active: false },
                    { name: 'Communication', active: false },
                    { name: 'Reports', active: false },
                  ].map(item => (
                    <div key={item.name}
                      className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 ${
                        item.active
                          ? 'bg-violet-600/20 text-violet-300'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-violet-400' : 'bg-transparent'}`} />
                      {item.name}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 space-y-4 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <p className="text-white text-sm font-bold">Good morning, Pastor 👋</p>
                      <p className="text-gray-500 text-xs">Here's what's happening today</p>
                    </div>
                    <div className="bg-violet-600/20 text-violet-300 text-xs px-3 py-1 rounded-full font-medium border border-violet-600/30">
                      Sunday Service
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-4 gap-2.5">
                    {dashboardCards.map(c => (
                      <div key={c.label} className="bg-white/5 rounded-xl p-3 border border-white/8">
                        <p className="text-[10px] text-gray-500 mb-1.5">{c.label}</p>
                        <p className="text-sm font-black text-white leading-none mb-1">{c.value}</p>
                        <span className="text-[9px] font-semibold text-emerald-400">{c.change} ↑</span>
                      </div>
                    ))}
                  </div>

                  {/* Charts row */}
                  <div className="grid grid-cols-5 gap-2.5">
                    <div className="col-span-3 bg-white/5 rounded-xl p-4 border border-white/8">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-gray-300">Attendance Trend</p>
                        <span className="text-[10px] text-gray-500">Last 7 weeks</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-20">
                        {[55, 72, 61, 88, 70, 82, 94].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className="w-full rounded-t-sm"
                              style={{
                                height: `${h}%`,
                                background: i === 6
                                  ? 'linear-gradient(to top, #7c3aed, #6366f1)'
                                  : 'rgba(124,58,237,0.25)',
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/8">
                      <p className="text-xs font-semibold text-gray-300 mb-3">Recent Activity</p>
                      <div className="space-y-2.5">
                        {[
                          { name: 'Abena M.', action: 'Tithe recorded' },
                          { name: 'Kwame A.', action: 'New member' },
                          { name: 'Akosua B.', action: 'Attended service' },
                        ].map(a => (
                          <div key={a.name} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-[8px] text-white font-bold shrink-0">
                              {a.name[0]}
                            </div>
                            <div className="min-w-0">
                              <p className="text-[10px] text-gray-300 font-medium truncate">{a.name}</p>
                              <p className="text-[9px] text-gray-600 truncate">{a.action}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -left-8 top-1/3 bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 text-left max-w-[180px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">WhatsApp sent</p>
            </div>
            <p className="text-sm font-bold text-gray-900">248 birthday</p>
            <p className="text-sm font-bold text-gray-900">messages 🎂</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.7 }}
            className="absolute -right-8 top-1/2 bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">New member</p>
            </div>
            <p className="text-sm font-bold text-gray-900">Akosua Boateng</p>
            <p className="text-[10px] text-emerald-500 font-semibold">✓ Profile complete</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative w-full border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm mt-8"
      >
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i < 3 ? 'md:border-r border-gray-200' : ''}`}>
              <p className="text-2xl font-black text-gray-900 tracking-tight">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
