import { motion } from 'framer-motion';
import { GitBranch, Banknote, Users, CalendarCheck, MessageSquare, BarChart3, Heart, Shield } from 'lucide-react';

const cards = [
  {
    icon: GitBranch,
    title: 'Branch Management',
    desc: 'A dashboard that shows organizational hierarchy, branches, departments etc.',
  },
  {
    icon: Banknote,
    title: 'Giving & Tithes',
    desc: 'Record offerings, tithes and pledges. Generate instant PDF receipts for members.',
  },
  {
    icon: Users,
    title: 'User/Membership Management',
    desc: 'Manage and track member activities, profiles, and spiritual milestones.',
  },
  {
    icon: CalendarCheck,
    title: 'Events',
    desc: 'Create and publish upcoming events effortlessly. Track attendance per event.',
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    desc: 'Bulk WhatsApp & SMS broadcasts, announcements, automated birthday greetings.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Beautiful reports on membership growth, giving patterns, and attendance trends.',
  },
  {
    icon: Heart,
    title: 'Pastoral Care',
    desc: 'Track prayer requests, pastoral visits, and care notes for members in need.',
  },
  {
    icon: Shield,
    title: 'Role-based Access',
    desc: 'Control who sees what — Administrators, Pastors, Department Heads and Data Entry.',
  },
];

// Simple SVG illustration (abstract connected people / platform)
function Illustration() {
  return (
    <div className="relative w-full h-72 flex items-center justify-center select-none">
      {/* Background blob */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #c4b5fd 0%, #a5b4fc 60%, transparent 100%)' }} />
      </div>

      {/* Center circle */}
      <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: '#1e1b4b' }}>
        <span className="text-white font-bold text-sm text-center leading-tight">Church<br/>Care</span>
      </div>

      {/* Orbiting icons */}
      {[
        { icon: '👤', x: -110, y: -60, label: 'Members' },
        { icon: '💬', x: 110, y: -80, label: 'Messages' },
        { icon: '📊', x: 130, y: 40, label: 'Reports' },
        { icon: '⚙️', x: 80, y: -130, label: 'Settings' },
        { icon: '💰', x: -120, y: 50, label: 'Giving' },
        { icon: '📅', x: -40, y: 120, label: 'Events' },
      ].map((item, i) => (
        <div key={i} className="absolute z-10 flex flex-col items-center"
          style={{ transform: `translate(${item.x}px, ${item.y}px)` }}>
          {/* Connector line approximation via absolute position - skip for simplicity */}
          <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center text-2xl border border-gray-100">
            {item.icon}
          </div>
        </div>
      ))}

      {/* Connecting lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#a5b4fc" />
          </marker>
        </defs>
        {[
          [136, 100, 90, 120], [236, 80, 150, 110], [246, 210, 155, 125],
          [210, 230, 148, 130], [16, 220, 82, 125], [96, 252, 120, 148],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={`${x1}px`} y1={`${y1}px`} x2={`${x2}px`} y2={`${y2}px`}
            stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"
            markerEnd="url(#arrow)" />
        ))}
      </svg>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-12"
          style={{ color: '#9b5de5' }}
        >
          Features
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Illustration />
          </motion.div>

          {/* Right: cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#9b5de5' }}>A Unified Platform</h2>
              <p className="text-gray-500 text-sm">ChurchCare provides all the church tools you need on one platform.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-xl p-5 hover:shadow-md transition-shadow cursor-default"
                  style={{ background: '#f0f3f8' }}
                >
                  <div className="mb-3">
                    <card.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
