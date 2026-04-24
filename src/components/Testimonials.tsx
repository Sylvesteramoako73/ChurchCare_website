import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pastor Emmanuel Owusu',
    role: 'Senior Pastor',
    church: 'Grace Chapel, Accra',
    avatar: 'EO',
    text: 'ChurchCare transformed how we manage our congregation. Attendance that took hours of paperwork now takes minutes. The WhatsApp messaging alone has improved our communication tenfold.',
    rating: 5,
    color: 'from-violet-500 to-violet-700',
  },
  {
    name: 'Deaconess Abena Kusi',
    role: 'Church Administrator',
    church: 'Living Word Church, Kumasi',
    avatar: 'AK',
    text: 'Our finance team now generates giving reports in seconds. I cannot imagine going back to spreadsheets. The PDF receipts for members have been a game-changer for our tithe drive.',
    rating: 5,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    name: 'Elder Kwabena Asante',
    role: 'Head of Administration',
    church: 'Cornerstone Fellowship, Takoradi',
    avatar: 'KA',
    text: 'We were sceptical about moving from paper registers. ChurchCare made the transition seamless. The visitor follow-up feature has helped us retain so many first-time visitors as members.',
    rating: 5,
    color: 'from-blue-500 to-indigo-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-50 rounded-full blur-3xl opacity-70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-violet-600 font-bold text-sm uppercase tracking-widest mb-3">
            Trusted by churches across Ghana
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Pastors love ChurchCare
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2 font-medium">5.0 from 200+ reviews</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-violet-100 mb-4" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-8">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.church}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
