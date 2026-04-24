import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
  {
    label: 'Member Management',
    content: {
      title: 'Manage your congregation with ease',
      desc: 'Add members, update profiles, track attendance history, and monitor spiritual milestones — all from one clean dashboard. Search, filter, and export your directory anytime.',
      points: ['Full member profiles with photos', 'Import members in bulk', 'Department & campus assignment', 'Member status tracking'],
    },
  },
  {
    label: 'Record Giving',
    content: {
      title: 'Track every tithe and offering',
      desc: 'Log tithes, offerings, and pledges in seconds. Generate branded PDF receipts instantly and produce detailed monthly and annual giving reports for your leadership team.',
      points: ['Multiple offering types', 'Instant PDF receipts', 'Monthly giving summaries', 'Pledge tracking & reminders'],
    },
  },
  {
    label: 'Take Attendance',
    content: {
      title: 'Record attendance in minutes',
      desc: 'Mark attendance for any service or event quickly. Track trends over time to identify members who may need a follow-up from the pastoral team.',
      points: ['Per-service attendance logs', 'Attendance trend charts', 'Absentee detection', 'Multi-campus support'],
    },
  },
  {
    label: 'Send Messages',
    content: {
      title: 'Reach your congregation instantly',
      desc: 'Send bulk WhatsApp or SMS messages to all members, a specific department, or individual members. Automated birthday and anniversary greetings go out on their own.',
      points: ['Bulk WhatsApp & SMS', 'Auto birthday greetings', 'Department-targeted messages', 'Message history log'],
    },
  },
  {
    label: 'Visitor Follow-up',
    content: {
      title: 'Never lose a first-time visitor',
      desc: 'Log visitor details on the spot, assign follow-up tasks to your team, and track each visitor\'s journey from first visit to full membership.',
      points: ['Visitor intake form', 'Follow-up status tracking', 'Assign to pastoral team', 'Conversion to member'],
    },
  },
  {
    label: 'View Reports',
    content: {
      title: 'Data-driven church leadership',
      desc: 'Get a real-time dashboard showing total members, average attendance, monthly giving, and volunteer numbers. Export beautiful PDF reports with one click.',
      points: ['Real-time dashboard stats', 'Attendance trend charts', 'Giving growth reports', 'One-click PDF export'],
    },
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);

  return (
    <section id="usecases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-2xl font-bold mb-1" style={{ color: '#9b5de5' }}>Use Cases</p>
          <p className="text-sm font-medium" style={{ color: '#9b5de5' }}>Click to Explore</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Left: tab grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {cases.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActive(i)}
                className="rounded-xl p-5 text-sm font-semibold text-left transition-all duration-200 hover:opacity-90"
                style={{
                  background: active === i ? '#080c28' : '#f0f3f8',
                  color: active === i ? '#fff' : '#374151',
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                {/* Dark header */}
                <div className="p-8" style={{ background: '#080c28' }}>
                  <h3 className="text-xl font-bold text-white mb-3">{cases[active].content.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{cases[active].content.desc}</p>
                </div>

                {/* Light body */}
                <div className="p-6 bg-white">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cases[active].content.points.map(pt => (
                      <li key={pt} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: '#9b5de5' }}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-4">
                    <a href="#pricing"
                      className="inline-flex items-center px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}>
                      Get started
                    </a>
                    <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
                      className="text-sm font-medium hover:underline"
                      style={{ color: '#9b5de5' }}>
                      View live demo →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
