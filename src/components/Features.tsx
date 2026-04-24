import { motion } from 'framer-motion';
import { Users, CalendarCheck, Banknote, MessageSquare, BarChart3, Heart, UserPlus, Shield } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    label: 'Church Administration',
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50 border-violet-100',
    iconBg: 'bg-violet-600',
    points: [
      'Complete member directory with profiles & photos',
      'Department and campus management',
      'Role-based access for your entire team',
      'Visitor follow-up & conversion tracking',
    ],
  },
  {
    icon: MessageSquare,
    label: 'Communication & Outreach',
    color: 'from-indigo-500 to-indigo-700',
    bg: 'bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-600',
    points: [
      'Bulk WhatsApp & SMS messaging',
      'Automated birthday & anniversary greetings',
      'Prayer request management & follow-up',
      'Pastoral care notes and visit tracking',
    ],
  },
  {
    icon: Banknote,
    label: 'Finance & Reporting',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-600',
    points: [
      'Tithe, offering & pledge recording',
      'PDF receipts generated instantly',
      'Monthly & annual giving reports',
      'Attendance trends & growth analytics',
    ],
  },
];

const allFeatures = [
  { icon: Users, label: 'Member Profiles' },
  { icon: CalendarCheck, label: 'Attendance' },
  { icon: Banknote, label: 'Giving & Tithes' },
  { icon: MessageSquare, label: 'WhatsApp & SMS' },
  { icon: BarChart3, label: 'Reports & Analytics' },
  { icon: Heart, label: 'Pastoral Care' },
  { icon: UserPlus, label: 'Visitor Follow-up' },
  { icon: Shield, label: 'Role-based Access' },
];

export default function Features() {
  return (
    <>
      {/* Three pillars — inspired by Asoriba but much better */}
      <section id="features" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-violet-600 font-bold text-sm uppercase tracking-widest mb-3">
              Everything your church needs
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
              One platform. Three superpowers.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg max-w-xl mx-auto">
              ChurchCare covers every aspect of church management so you can focus on what matters — your people.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`rounded-3xl p-8 border-2 ${p.bg} hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-5">{p.label}</h3>
                <ul className="space-y-3">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark product showcase section */}
      <section className="py-28 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-900/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-violet-400 font-bold text-sm uppercase tracking-widest mb-3">
              Built for modern churches
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Every feature you need, nothing you don't
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {allFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 rounded-2xl p-6 text-center transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/30 to-indigo-600/30 border border-violet-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-violet-600/50 group-hover:to-indigo-600/50 transition-all">
                  <f.icon className="w-6 h-6 text-violet-300" />
                </div>
                <p className="text-sm font-bold text-gray-200">{f.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
