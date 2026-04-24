import { motion } from 'framer-motion';
import { CreditCard, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: CreditCard,
    step: '01',
    title: 'Choose your plan',
    desc: 'Subscribe to ChurchCare for just GHS 180/month. Cancel anytime — no contracts, no hidden fees.',
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Set up your church',
    desc: 'Add your church name, campuses, departments, and invite your team. Takes less than 10 minutes.',
    color: 'from-indigo-500 to-indigo-700',
    bg: 'bg-indigo-50',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Start managing',
    desc: 'Import your members, record attendance, track giving, and send messages. Everything works out of the box.',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Simple onboarding
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Up and running in minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            No IT department needed. If you can use WhatsApp, you can use ChurchCare.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-violet-200 via-indigo-200 to-blue-200" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-3 text-xs font-black text-gray-300">{s.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
