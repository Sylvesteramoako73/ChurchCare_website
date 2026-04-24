import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-violet-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-100 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8"
        >
          <Star className="w-3.5 h-3.5 fill-violet-500 text-violet-500" />
          Built for African churches
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6"
        >
          Manage your church{' '}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            with confidence
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 leading-relaxed mb-10"
        >
          ChurchCare gives your church a complete management platform — members, attendance,
          giving, WhatsApp messaging and more. All in one place, starting at just{' '}
          <span className="text-gray-800 font-semibold">GHS 180/month</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-violet-200"
          >
            Start for GHS 180/mo <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://chms-app.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-600 border border-gray-200 bg-white px-7 py-3.5 rounded-xl font-semibold text-base hover:border-gray-300 hover:text-gray-900 transition-all"
          >
            View live demo
          </a>
        </motion.div>

        {/* App screenshot mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/80 border border-gray-200/60 bg-gray-50">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 text-left">
                chms-app.netlify.app
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-[#0b1120] p-6 min-h-[420px]">
              <div className="flex gap-4 h-full">
                {/* Sidebar */}
                <div className="w-48 shrink-0 space-y-1">
                  {['Dashboard','Members','Attendance','Giving','Communication','Reports'].map((item, i) => (
                    <div key={item} className={`px-3 py-2 rounded-lg text-xs font-medium ${i === 0 ? 'bg-yellow-500/10 text-yellow-400' : 'text-gray-500'}`}>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main */}
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: 'Total Members', value: '1,248' },
                      { label: 'Avg. Attendance', value: '87%' },
                      { label: 'Monthly Giving', value: 'GHS 42,800' },
                      { label: 'Active Volunteers', value: '64' },
                    ].map(card => (
                      <div key={card.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <p className="text-[10px] text-gray-500 mb-1">{card.label}</p>
                        <p className="text-base font-bold text-white">{card.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 h-40">
                      <p className="text-xs text-gray-500 mb-3">Attendance Trend</p>
                      <div className="flex items-end gap-1.5 h-24">
                        {[60, 80, 65, 90, 75, 85, 95].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-sm opacity-80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 h-40">
                      <p className="text-xs text-gray-500 mb-3">Recent Members</p>
                      <div className="space-y-2">
                        {['Abena Mensah', 'Kwame Asante', 'Akosua Boateng'].map(name => (
                          <div key={name} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-violet-600/40 flex items-center justify-center text-[9px] text-violet-300 font-bold shrink-0">
                              {name[0]}
                            </div>
                            <span className="text-xs text-gray-400">{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat badges */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -left-6 top-1/3 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 text-left"
          >
            <p className="text-xs text-gray-400 font-medium">New member</p>
            <p className="text-sm font-bold text-gray-900">Akosua Boateng</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -right-6 top-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 text-left"
          >
            <p className="text-xs text-gray-400 font-medium">WhatsApp sent</p>
            <p className="text-sm font-bold text-gray-900">248 messages</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
