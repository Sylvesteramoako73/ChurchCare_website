import { motion } from 'framer-motion';
import { Users, CalendarCheck, Banknote, MessageSquare, BarChart3, Heart, UserPlus, Shield } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    desc: 'Maintain a complete directory of your congregation with profiles, photos, contact details, and spiritual milestones.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: CalendarCheck,
    title: 'Attendance Tracking',
    desc: 'Record and monitor attendance for every service and event. Spot trends and follow up with absent members effortlessly.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Banknote,
    title: 'Giving & Tithes',
    desc: 'Log tithes, offerings, and pledges. Generate PDF receipts for members and monthly giving reports for leadership.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & SMS',
    desc: 'Send bulk WhatsApp messages and SMS to your congregation directly from the app. Birthday and anniversary greetings automated.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    desc: 'Beautiful reports on membership growth, attendance trends, and giving patterns — export to PDF with one click.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Heart,
    title: 'Pastoral Care',
    desc: 'Track prayer requests, pastoral visits, and care notes for members going through difficult seasons.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: UserPlus,
    title: 'Visitor Follow-up',
    desc: 'Never lose a first-time visitor. Log their details, assign follow-up tasks, and track their journey to membership.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Shield,
    title: 'Role-based Access',
    desc: 'Control who sees what. Administrators, Pastors, Department Heads, and Data Entry clerks each get the right level of access.',
    color: 'bg-gray-50 text-gray-600',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-28 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Everything you need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            One platform. Every ministry.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-lg max-w-xl mx-auto"
          >
            ChurchCare covers every aspect of church administration so your team can focus on ministry.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(f => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
