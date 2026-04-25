import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Sign up & choose your plan',
    desc: 'Create your ChurchCare account and subscribe for GHS 180/month. No contracts, no hidden fees — cancel anytime.',
  },
  {
    number: '02',
    title: 'Set up your church profile',
    desc: 'Add your church name, logo, departments, and campus information. Import your existing member list in bulk with a simple CSV upload.',
  },
  {
    number: '03',
    title: 'Invite your team & go live',
    desc: 'Invite administrators, pastors, and staff with the right access levels. You\'ll be fully live in under 10 minutes.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ background: '#f7f8fc' }}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-2xl font-bold mb-1" style={{ color: '#9b5de5' }}>How it works</p>
          <p className="text-sm text-gray-500">Up and running in 3 simple steps.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px"
            style={{ background: 'linear-gradient(90deg, #d8b4fe, #9b5de5, #d8b4fe)' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 font-black text-2xl text-white relative z-10"
                style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}>
                {step.number}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a href="#pricing"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}>
            Get started today
          </a>
          <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
            className="inline-flex items-center px-8 py-3.5 rounded-full font-bold text-sm border border-gray-300 text-gray-600 hover:border-purple-400 hover:text-purple-600 transition-colors">
            See the app first →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
