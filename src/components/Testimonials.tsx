import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pastor Emmanuel Owusu',
    role: 'Senior Pastor, Grace Chapel — Accra',
    avatar: 'EO',
    text: 'ChurchCare has completely transformed how we manage our congregation. What used to take hours of paperwork now takes minutes. The WhatsApp messaging alone has improved our communication tenfold.',
  },
  {
    name: 'Deaconess Abena Kusi',
    role: 'Church Administrator, Living Word — Kumasi',
    avatar: 'AK',
    text: 'Our finance team now generates giving reports in seconds. I cannot imagine going back to spreadsheets. The PDF receipts for members have been a game-changer for our tithe drive.',
  },
  {
    name: 'Elder Kwabena Asante',
    role: 'Head of Administration, Cornerstone — Takoradi',
    avatar: 'KA',
    text: 'We were sceptical about moving from paper registers. ChurchCare made the transition seamless. The visitor follow-up feature has helped us retain so many first-time visitors as members.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-10"
          style={{ color: '#9b5de5' }}
        >
          What churches say
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow"
              style={{ background: '#f7f8fc' }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                  style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
