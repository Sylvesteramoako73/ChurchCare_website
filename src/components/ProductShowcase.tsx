import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Banknote, MessageSquare, BarChart3, CalendarCheck, Heart } from 'lucide-react';

const tabs = [
  {
    id: 'members',
    icon: Users,
    label: 'Members',
    headline: 'Know every member of your congregation',
    desc: 'Manage profiles, track spiritual milestones, log pastoral visits, and follow up with visitors — all from one place. Never lose track of a soul again.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    stats: [
      { val: '1,247', label: 'Members tracked' },
      { val: '98%', label: 'Data complete' },
      { val: '3 min', label: 'Avg onboarding' },
    ],
    mockup: (
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-slate-300">Members</p>
          <div className="px-2 py-1 rounded-full text-xs font-bold text-violet-400" style={{ background: 'rgba(124,58,237,0.2)' }}>
            + Add Member
          </div>
        </div>
        {[
          { name: 'Ama Asante', role: 'Member', status: 'Active', color: '#7C3AED', joined: 'Jan 2024' },
          { name: 'Kofi Mensah', role: 'Deacon', status: 'Active', color: '#10B981', joined: 'Mar 2022' },
          { name: 'Abena Boateng', role: 'Elder', status: 'Active', color: '#F59E0B', joined: 'Jun 2019' },
          { name: 'Samuel Adjei', role: 'Member', status: 'Visitor', color: '#0EA5E9', joined: 'This week' },
          { name: 'Grace Owusu', role: 'Member', status: 'Active', color: '#EC4899', joined: 'Dec 2023' },
        ].map(m => (
          <div key={m.name} className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: m.color }}>
                {m.name[0]}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">{m.name}</p>
                <p className="text-[10px] text-slate-500">{m.role}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: m.status === 'Active' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)',
                  color: m.status === 'Active' ? '#10B981' : '#F59E0B',
                }}>
                {m.status}
              </span>
              <p className="text-[9px] text-slate-600 mt-0.5">{m.joined}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'giving',
    icon: Banknote,
    label: 'Giving',
    headline: 'Every cedis accounted for, instantly',
    desc: 'Record tithes, offerings, and pledges with one click. Generate PDF receipts on the spot. Get monthly and annual giving reports automatically.',
    color: '#10B981',
    bg: '#F0FDF4',
    stats: [
      { val: 'GHS 52K', label: 'This month' },
      { val: '247', label: 'Transactions' },
      { val: '12%', label: 'Growth' },
    ],
    mockup: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-slate-300">Giving Records</p>
          <span className="text-[10px] text-emerald-400 font-bold">+12.4% this month</span>
        </div>
        <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(16,185,129,0.1)' }}>
          <p className="text-xl font-black text-emerald-400">GHS 52,480</p>
          <p className="text-xs text-slate-500">Total received · November 2024</p>
          <div className="flex items-end gap-1 mt-3" style={{ height: 40 }}>
            {[55, 70, 45, 88, 62, 90, 73, 85, 60, 92, 78, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: 'rgba(16,185,129,0.5)' }} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {[
            { name: 'Ama Asante', type: 'Tithe', amount: 'GHS 500', time: '9:15 AM' },
            { name: 'Kofi Mensah', type: 'Offering', amount: 'GHS 200', time: '9:32 AM' },
            { name: 'Grace Owusu', type: 'Pledge', amount: 'GHS 1,000', time: '10:05 AM' },
          ].map(t => (
            <div key={t.name} className="flex items-center justify-between rounded-lg px-3 py-2"
              style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div>
                <p className="text-xs font-semibold text-slate-200">{t.name}</p>
                <p className="text-[10px] text-slate-500">{t.type} · {t.time}</p>
              </div>
              <span className="text-xs font-black text-emerald-400">{t.amount}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'messages',
    icon: MessageSquare,
    label: 'Messaging',
    headline: 'Reach your entire congregation instantly',
    desc: 'Send bulk WhatsApp messages and SMS to your congregation in seconds. Schedule automated birthday and anniversary greetings. No technical skills needed.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    stats: [
      { val: '98%', label: 'Delivery rate' },
      { val: '< 30s', label: 'Send time' },
      { val: '5K+', label: 'Messages/month' },
    ],
    mockup: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-slate-300">Broadcast Messages</p>
          <div className="px-2 py-1 rounded-full text-xs font-bold text-amber-400"
            style={{ background: 'rgba(245,158,11,0.2)' }}>
            New Broadcast
          </div>
        </div>
        <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(245,158,11,0.1)' }}>
          <p className="text-xs text-amber-400 font-bold mb-1">📢 Sunday Service Reminder</p>
          <p className="text-xs text-slate-400 leading-relaxed">"Dear family, join us this Sunday at 9AM for our special thanksgiving service..."</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[10px] text-slate-500">To: All Members (1,247)</span>
            <span className="text-[10px] font-bold text-emerald-400">✓ Delivered 1,219</span>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { msg: '🎂 Happy Birthday, Ama!', type: 'Auto · Birthday', time: 'Today 8:00 AM' },
            { msg: '📅 Cell group meeting tonight', type: 'Broadcast', time: 'Yesterday' },
            { msg: '🙏 Prayer request from Kofi', type: 'Pastoral', time: '2 days ago' },
          ].map(m => (
            <div key={m.msg} className="rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <p className="text-xs text-slate-200">{m.msg}</p>
              <div className="flex justify-between mt-0.5">
                <span className="text-[9px] text-slate-500">{m.type}</span>
                <span className="text-[9px] text-slate-600">{m.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'reports',
    icon: BarChart3,
    label: 'Reports',
    headline: 'Beautiful reports that tell your church\'s story',
    desc: 'Get instant insights on membership growth, giving patterns, and attendance trends. Export to PDF in one click and share with your board.',
    color: '#4F46E5',
    bg: '#EEF2FF',
    stats: [
      { val: 'Instant', label: 'Report generation' },
      { val: 'PDF', label: 'Export format' },
      { val: '12+', label: 'Report types' },
    ],
    mockup: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold text-slate-300">Analytics Overview</p>
          <span className="text-[10px] text-indigo-400 font-bold">Export PDF</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: 'Total Members', val: '1,247', change: '+24 this month', color: '#7C3AED' },
            { label: 'Avg Attendance', val: '89%', change: '+3% vs last month', color: '#10B981' },
          ].map(s => (
            <div key={s.label} className="rounded-xl p-3" style={{ background: 'rgba(79,70,229,0.15)' }}>
              <p className="text-lg font-black" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[10px] text-slate-500">{s.label}</p>
              <p className="text-[9px] text-emerald-400 mt-0.5">{s.change}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-3" style={{ background: 'rgba(79,70,229,0.1)' }}>
          <p className="text-[10px] text-slate-400 font-semibold mb-2">Membership Growth</p>
          <div className="flex items-end gap-1" style={{ height: 50 }}>
            {[600, 720, 810, 890, 950, 1020, 1100, 1180, 1200, 1220, 1235, 1247].map((v, i) => (
              <div key={i} className="flex-1 rounded-sm"
                style={{ height: `${(v / 1247) * 100}%`, background: 'rgba(79,70,229,0.6)' }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'events',
    icon: CalendarCheck,
    label: 'Events',
    headline: 'Plan every service, event, and programme',
    desc: 'Create events, publish them to members, track RSVPs and attendance. Everything from Sunday service to annual conventions managed in one dashboard.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    stats: [
      { val: '12', label: 'Active events' },
      { val: '94%', label: 'RSVP rate' },
      { val: '1 click', label: 'Attendance mark' },
    ],
    mockup: (
      <div className="p-4">
        <p className="text-xs font-bold text-slate-300 mb-3">Upcoming Events</p>
        <div className="space-y-2">
          {[
            { name: 'Sunday Service', date: 'Sun, 3 Nov · 9:00 AM', attendees: 847, color: '#7C3AED' },
            { name: 'Mid-week Prayer', date: 'Wed, 6 Nov · 6:30 PM', attendees: 234, color: '#0EA5E9' },
            { name: 'Youth Conference', date: 'Sat, 9 Nov · All day', attendees: 412, color: '#10B981' },
            { name: 'Leadership Retreat', date: 'Nov 15–17', attendees: 48, color: '#F59E0B' },
          ].map(e => (
            <div key={e.name} className="flex items-center gap-3 rounded-xl px-3 py-2.5"
              style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="w-1.5 h-10 rounded-full shrink-0" style={{ background: e.color }} />
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-200">{e.name}</p>
                <p className="text-[10px] text-slate-500">{e.date}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold" style={{ color: e.color }}>{e.attendees}</p>
                <p className="text-[9px] text-slate-600">attending</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'pastoral',
    icon: Heart,
    label: 'Pastoral Care',
    headline: 'Care for every person in your flock',
    desc: 'Track prayer requests, log pastoral visits, and record care notes. Never miss a follow-up with a member who needs support.',
    color: '#EC4899',
    bg: '#FDF2F8',
    stats: [
      { val: '100%', label: 'Private & secure' },
      { val: 'Real-time', label: 'Updates' },
      { val: 'Team', label: 'Collaboration' },
    ],
    mockup: (
      <div className="p-4">
        <p className="text-xs font-bold text-slate-300 mb-3">Pastoral Care Log</p>
        <div className="space-y-2">
          {[
            { name: 'Samuel Adjei', note: 'Hospitalized · visited Tue', status: 'Follow up needed', color: '#EC4899' },
            { name: 'Ama Boateng', note: 'Bereavement — husband passed', status: 'Active care', color: '#F59E0B' },
            { name: 'Yaw Darko', note: 'Requested marriage counselling', status: 'Scheduled', color: '#10B981' },
            { name: 'Akua Frimpong', note: 'New mother — home visit done', status: 'Complete', color: '#7C3AED' },
          ].map(c => (
            <div key={c.name} className="rounded-xl px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-200">{c.name}</p>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: `${c.color}22`, color: c.color }}>
                  {c.status}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState('members');
  const tab = tabs.find(t => t.id === active)!;

  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: '#7C3AED' }}
          >
            Everything in one platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-4"
          >
            Built for how churches actually work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Every feature your church needs — from first-time visitor to annual report — in one simple platform.
          </motion.p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === t.id ? 'text-white shadow-md' : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
              }`}
              style={active === t.id ? { background: `linear-gradient(135deg, ${t.color}, ${t.color}CC)` } : {}}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left: copy */}
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: tab.bg }}>
                <tab.icon className="w-6 h-6" style={{ color: tab.color }} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                {tab.headline}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">{tab.desc}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {tab.stats.map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: tab.bg }}>
                    <p className="text-xl font-black" style={{ color: tab.color }}>{s.val}</p>
                    <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${tab.color}, ${tab.color}BB)` }}
              >
                Get access — GHS 180/mo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: product mockup */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
                style={{ background: '#0F0F1A' }}>
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5"
                  style={{ background: '#1A1A2E' }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
                  <div className="flex-1 ml-3 rounded px-3 py-1 text-[10px] text-slate-600"
                    style={{ background: '#0F0F1A' }}>
                    app.churchcare.io/{tab.id}
                  </div>
                </div>
                {tab.mockup}
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 -z-10 rounded-3xl opacity-15 blur-2xl"
                style={{ background: `radial-gradient(circle, ${tab.color} 0%, transparent 70%)` }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

// Missing import fix
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
