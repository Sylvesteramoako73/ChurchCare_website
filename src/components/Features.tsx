import { motion } from 'framer-motion';
import { GitBranch, Banknote, Users, CalendarCheck, MessageSquare, BarChart3, Heart, Shield } from 'lucide-react';

const features = [
  { icon: Users, title: 'Member Management', desc: 'Profiles, milestones, visitor follow-up, and pastoral history — every member accounted for.', color: '#2563EB', bg: 'rgba(37,99,235,0.08)' },
  { icon: Banknote, title: 'Giving & Tithes', desc: 'Record offerings and tithes, generate PDF receipts, and track pledges automatically.', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  { icon: CalendarCheck, title: 'Events', desc: 'Create events, track RSVPs, and mark attendance with a single tap — from any device.', color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
  { icon: MessageSquare, title: 'WhatsApp & SMS', desc: 'Send bulk broadcasts to your congregation and automate birthday and anniversary greetings.', color: '#D97706', bg: 'rgba(217,119,6,0.08)' },
  { icon: BarChart3, title: 'Reports & Analytics', desc: 'Beautiful giving reports, attendance trends, and membership growth charts — export to PDF instantly.', color: '#0284C7', bg: 'rgba(2,132,199,0.08)' },
  { icon: Heart, title: 'Pastoral Care', desc: 'Log prayer requests, track pastoral visits, and assign care notes to your team.', color: '#DB2777', bg: 'rgba(219,39,119,0.08)' },
  { icon: GitBranch, title: 'Branch & Departments', desc: 'Manage multiple campuses, departments, and groups from a single unified dashboard.', color: '#047857', bg: 'rgba(4,120,87,0.08)' },
  { icon: Shield, title: 'Role-based Access', desc: 'Admins, Pastors, Department Heads, and Data Entry staff each see only what they need.', color: '#4338CA', bg: 'rgba(67,56,202,0.08)' },
];

export default function Features() {
  return (
    <section id="features" className="py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: '#2BA898' }}>
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black leading-tight mb-5"
            style={{ color: '#0F172A' }}>
            Everything your church needs, in one place.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(15,23,42,0.55)' }}>
            No more juggling spreadsheets and WhatsApp groups. ChurchCare brings your entire
            operation under one roof — from first-time visitor to annual report.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl border transition-all duration-200 cursor-default group"
              style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,168,152,0.3)'; (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(43,168,152,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.07)'; (e.currentTarget as HTMLElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: f.bg }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#0F172A' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.55)' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
