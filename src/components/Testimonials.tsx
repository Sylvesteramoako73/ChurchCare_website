import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Pastor Emmanuel Owusu', role: 'Senior Pastor', church: 'Grace Chapel, Accra', initials: 'EO', color: '#2BA898', text: 'Faith ChurchCare has completely transformed how we manage our congregation. What used to take hours now takes minutes. The WhatsApp messaging alone has improved our communication tenfold.' },
  { name: 'Deaconess Abena Kusi', role: 'Church Administrator', church: 'Living Word, Kumasi', initials: 'AK', color: '#1B2875', text: 'Our finance team generates giving reports in seconds. I cannot imagine going back to spreadsheets. The PDF receipts for members have been a game-changer for our tithe drive.' },
  { name: 'Elder Kwabena Asante', role: 'Head of Administration', church: 'Cornerstone, Takoradi', initials: 'KA', color: '#7B4FBE', text: 'We were sceptical about moving from paper registers. Faith ChurchCare made the transition seamless. The visitor follow-up feature has helped us retain so many first-time visitors.' },
];

export default function Testimonials() {
  return (
    <section className="py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: '#2BA898' }}>
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black leading-tight"
              style={{ color: '#0F172A' }}>
              Churches love Faith ChurchCare.
            </motion.h2>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm ml-1" style={{ color: 'rgba(15,23,42,0.5)' }}>5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl p-7 border flex flex-col transition-all"
              style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,168,152,0.25)'; (e.currentTarget as HTMLElement).style.background = '#FFFFFF'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(43,168,152,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.07)'; (e.currentTarget as HTMLElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(15,23,42,0.7)' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                  style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: '#0F172A' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(15,23,42,0.45)' }}>{t.role} · {t.church}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
