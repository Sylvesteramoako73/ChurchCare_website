import { motion } from 'framer-motion';

export default function Community() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#2BA898' }}>
              Community
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color: '#0F172A' }}>
              Serving the faith
              <span className="block" style={{ color: '#2BA898' }}>communities of Ghana.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(15,23,42,0.55)' }}>
              From small fellowship groups to multi-campus churches with thousands of members,
              Faith ChurchCare scales with your congregation at every stage of growth.
            </p>

            <div className="space-y-3 mb-10">
              {[
                '"Faith ChurchCare gave us back hours every Sunday. What used to take all morning now takes minutes."',
                '"Our finance team generates giving reports in seconds. I can\'t imagine going back to spreadsheets."',
                '"The visitor follow-up feature has helped us retain so many first-time members."',
              ].map((q, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl border"
                  style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                  <span className="text-2xl font-black leading-none mt-0.5 shrink-0" style={{ color: 'rgba(43,168,152,0.4)' }}>"</span>
                  <p className="text-sm italic leading-relaxed" style={{ color: 'rgba(15,23,42,0.65)' }}>
                    {q.slice(1, -1)}
                  </p>
                </motion.blockquote>
              ))}
            </div>

            <div className="flex items-center gap-8">
              {[
                { val: '120+', label: 'Active churches' },
                { val: '15K+', label: 'Members managed' },
                { val: '5 ★', label: 'Average rating' },
              ].map((s, i) => (
                <div key={s.label}>
                  {i > 0 && <div className="w-px h-8 bg-slate-200 absolute" />}
                  <p className="text-3xl font-black" style={{ color: '#1B2875' }}>{s.val}</p>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(15,23,42,0.5)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden col-span-2" style={{ height: 240, background: '#E2E8F0' }}>
              <img
                src="/church-service.jpg"
                alt="Church congregation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ height: 180, background: '#E2E8F0' }}>
              <img
                src="/church-congregation.jpg"
                alt="Church community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl flex items-center justify-center p-6 border" style={{ height: 180, background: '#EFF9F7', borderColor: 'rgba(43,168,152,0.2)' }}>
              <div className="text-center">
                <p className="text-sm font-bold mb-1" style={{ color: 'rgba(15,23,42,0.5)' }}>Plans from</p>
                <p className="text-4xl font-black" style={{ color: '#1B2875' }}>GHS 200</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(15,23,42,0.5)' }}>per month</p>
                <p className="text-xs mt-1" style={{ color: '#2BA898' }}>No contracts · Cancel anytime</p>
                <a href="#pricing"
                  className="mt-4 inline-block px-5 py-2 rounded-full text-xs font-black transition-colors"
                  style={{ background: '#1B2875', color: '#fff' }}>
                  See plans →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
