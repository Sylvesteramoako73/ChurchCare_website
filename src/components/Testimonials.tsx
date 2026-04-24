import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pastor Emmanuel Owusu',
    role: 'Senior Pastor, Grace Chapel Accra',
    avatar: 'EO',
    text: 'ChurchCare has completely transformed how we manage our congregation. What used to take hours of paperwork now takes minutes. The WhatsApp messaging alone has improved our communication tenfold.',
    rating: 5,
  },
  {
    name: 'Deaconess Abena Kusi',
    role: 'Church Administrator, Living Word Church',
    avatar: 'AK',
    text: 'The attendance tracking and giving records are incredibly easy to use. Our finance team can now generate reports in seconds instead of spending weekends on spreadsheets.',
    rating: 5,
  },
  {
    name: 'Elder Kwabena Asante',
    role: 'Head of Administration, Cornerstone Fellowship',
    avatar: 'KA',
    text: 'We were sceptical about moving from paper registers, but ChurchCare made the transition seamless. The visitor follow-up feature has helped us retain so many first-time visitors.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Trusted by churches
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            What pastors are saying
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
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
