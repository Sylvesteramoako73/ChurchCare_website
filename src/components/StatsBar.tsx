import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 120, suffix: '+', label: 'Churches using ChurchCare' },
  { value: 15000, suffix: '+', label: 'Members managed' },
  { value: 500, prefix: 'GHS ', suffix: 'K+', label: 'Tithes recorded' },
  { value: 99.9, suffix: '%', label: 'Platform uptime' },
];

function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current * 10) / 10);
          }
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const display = Number.isInteger(value) ? Math.round(count) : count.toFixed(1);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="py-14 border-y" style={{ background: '#080c28', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-black text-white mb-1">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
