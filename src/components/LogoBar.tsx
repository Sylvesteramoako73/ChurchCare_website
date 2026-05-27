import { motion } from 'framer-motion';

const churches = [
  'Grace Chapel', 'Living Word Church', 'Cornerstone Ministry',
  'Victory Bible Church', 'Fountain of Life', 'New Life Assembly',
  'Power House Chapel', 'Resurrection Church',
];

export default function LogoBar() {
  return (
    <section className="py-10 overflow-hidden" style={{ background: '#F8FAFC', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 mb-7">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-widest"
          style={{ color: 'rgba(15,23,42,0.4)' }}>
          Trusted by churches across Ghana
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />

        <div className="flex gap-10 whitespace-nowrap w-max" style={{ animation: 'ticker 22s linear infinite' }}>
          {[...churches, ...churches].map((name, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-black"
                style={{ background: '#1B2875' }}>
                {name[0]}
              </div>
              <span className="text-sm font-semibold" style={{ color: 'rgba(15,23,42,0.55)' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
