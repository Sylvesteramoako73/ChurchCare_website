import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const screens = [
  {
    label: 'Dashboard',
    content: (
      <div className="h-full flex flex-col" style={{ background: '#f7f8fc' }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
          <span className="font-bold text-gray-900 text-sm">Dashboard</span>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: 'linear-gradient(135deg,#9b5de5,#7c3aed)' }}>GC</div>
            <span className="text-xs text-gray-500">Grace Chapel</span>
          </div>
        </div>
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-3 p-4">
          {[
            { label: 'Total Members', value: '248', color: '#9b5de5' },
            { label: 'Attendance', value: '182', color: '#7c3aed' },
            { label: 'Monthly Giving', value: 'GHS 12,450', color: '#4f46e5' },
            { label: 'Upcoming Events', value: '3', color: '#2563eb' },
          ].map(c => (
            <div key={c.label} className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="w-6 h-1 rounded mb-2" style={{ background: c.color }} />
              <p className="font-black text-gray-900 text-base">{c.value}</p>
              <p className="text-gray-400 text-xs">{c.label}</p>
            </div>
          ))}
        </div>
        {/* Mini chart */}
        <div className="mx-4 bg-white rounded-xl border border-gray-100 p-4 flex-1">
          <p className="text-xs font-bold text-gray-500 mb-3">Attendance — Last 6 Sundays</p>
          <div className="flex items-end gap-2 h-20">
            {[60, 75, 55, 90, 70, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, background: i === 5 ? '#9b5de5' : '#e9d5ff' }} />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map(m => (
              <span key={m} className="text-gray-300 text-xs">{m}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Members',
    content: (
      <div className="h-full flex flex-col" style={{ background: '#f7f8fc' }}>
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
          <span className="font-bold text-gray-900 text-sm">Members</span>
          <button className="text-xs text-white px-3 py-1.5 rounded-full font-semibold"
            style={{ background: 'linear-gradient(135deg,#9b5de5,#7c3aed)' }}>+ Add Member</button>
        </div>
        <div className="p-4 flex-1">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-4 px-4 py-2 border-b border-gray-50">
              {['Name', 'Department', 'Status', 'Phone'].map(h => (
                <span key={h} className="text-xs font-bold text-gray-400 uppercase">{h}</span>
              ))}
            </div>
            {[
              { name: 'Emmanuel Owusu', dept: 'Choir', status: 'Active', phone: '024 xxx xxxx' },
              { name: 'Abena Mensah', dept: 'Ushering', status: 'Active', phone: '055 xxx xxxx' },
              { name: 'Kwabena Asante', dept: 'Elders', status: 'Active', phone: '020 xxx xxxx' },
              { name: 'Akosua Boateng', dept: 'Youth', status: 'Active', phone: '026 xxx xxxx' },
              { name: 'Kofi Amponsah', dept: 'Media', status: 'Inactive', phone: '050 xxx xxxx' },
            ].map((m, i) => (
              <div key={i} className="grid grid-cols-4 px-4 py-2.5 border-b border-gray-50 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: 'linear-gradient(135deg,#9b5de5,#7c3aed)' }}>
                    {m.name[0]}
                  </div>
                  <span className="text-xs font-medium text-gray-700 truncate">{m.name}</span>
                </div>
                <span className="text-xs text-gray-500 self-center">{m.dept}</span>
                <span className={`text-xs self-center font-semibold ${m.status === 'Active' ? 'text-green-500' : 'text-gray-400'}`}>{m.status}</span>
                <span className="text-xs text-gray-400 self-center">{m.phone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Giving',
    content: (
      <div className="h-full flex flex-col" style={{ background: '#f7f8fc' }}>
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
          <span className="font-bold text-gray-900 text-sm">Giving & Tithes</span>
          <button className="text-xs text-white px-3 py-1.5 rounded-full font-semibold"
            style={{ background: 'linear-gradient(135deg,#9b5de5,#7c3aed)' }}>+ Record</button>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'This Month', value: 'GHS 12,450' },
              { label: 'This Year', value: 'GHS 87,300' },
              { label: 'Pledges', value: 'GHS 5,000' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl p-3 border border-gray-100">
                <p className="font-black text-gray-900 text-sm">{s.value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="px-4 py-2 border-b border-gray-50">
              <span className="text-xs font-bold text-gray-400 uppercase">Recent Transactions</span>
            </div>
            {[
              { name: 'Emmanuel Owusu', amount: 'GHS 500', type: 'Tithe', date: 'Today' },
              { name: 'Abena Mensah', amount: 'GHS 200', type: 'Offering', date: 'Today' },
              { name: 'Kwabena Asante', amount: 'GHS 1,000', type: 'Tithe', date: 'Yesterday' },
              { name: 'Akosua Boateng', amount: 'GHS 150', type: 'Pledge', date: 'Apr 20' },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 border-b border-gray-50">
                <div>
                  <p className="text-xs font-medium text-gray-700">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.type} · {t.date}</p>
                </div>
                <span className="text-xs font-bold" style={{ color: '#9b5de5' }}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Messages',
    content: (
      <div className="h-full flex flex-col" style={{ background: '#f7f8fc' }}>
        <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
          <span className="font-bold text-gray-900 text-sm">Send Message</span>
        </div>
        <div className="p-4 flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Channel</p>
            <div className="flex gap-2">
              <div className="flex-1 text-center py-2 rounded-lg text-xs font-bold text-white"
                style={{ background: '#25D366' }}>WhatsApp</div>
              <div className="flex-1 text-center py-2 rounded-lg text-xs font-bold text-gray-400 border border-gray-200">SMS</div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Recipients</p>
            <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2 border border-purple-100">
              <span className="text-xs font-semibold" style={{ color: '#9b5de5' }}>All Members</span>
              <span className="text-xs text-gray-400">(248 contacts)</span>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Message</p>
            <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 leading-relaxed">
              Dear {'{name}'}, Grace Chapel invites you to our Easter Sunday service this Sunday at 9:00 AM. Come and celebrate with us! God bless you.
            </div>
          </div>
          <button className="w-full py-3 rounded-full text-white text-xs font-bold"
            style={{ background: 'linear-gradient(135deg,#9b5de5,#7c3aed)' }}>
            Send to 248 members
          </button>
        </div>
      </div>
    ),
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-2xl font-bold mb-1" style={{ color: '#9b5de5' }}>See it in action</p>
          <p className="text-sm text-gray-500">A clean, powerful interface designed for church teams of any size.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {screens.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: active === i ? '#9b5de5' : '#f0f3f8',
                color: active === i ? '#fff' : '#374151',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200" style={{ background: '#f0f3f8' }}>
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 flex items-center gap-1 max-w-xs mx-auto">
                <span>🔒</span> chms-app.netlify.app
              </div>
            </div>
          </div>

          {/* App layout */}
          <div className="flex" style={{ height: '420px' }}>
            {/* Sidebar */}
            <div className="w-40 shrink-0 flex flex-col py-4" style={{ background: '#080c28' }}>
              <div className="px-4 mb-6">
                <p className="text-white font-black text-sm">ChurchCare</p>
                <p className="text-xs" style={{ color: '#9b5de5' }}>Grace Chapel</p>
              </div>
              {['Dashboard', 'Members', 'Giving', 'Attendance', 'Messages', 'Events', 'Reports'].map((item) => (
                <div key={item}
                  className="px-4 py-2 text-xs font-medium cursor-pointer transition-colors"
                  style={{
                    color: screens[active].label === item ? '#fff' : 'rgba(255,255,255,0.45)',
                    background: screens[active].label === item ? 'rgba(155,93,229,0.2)' : 'transparent',
                    borderLeft: screens[active].label === item ? '2px solid #9b5de5' : '2px solid transparent',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {screens[active].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-5"
        >
          Want to explore it yourself?{' '}
          <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
            className="font-semibold hover:underline" style={{ color: '#9b5de5' }}>
            View the full live demo →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
