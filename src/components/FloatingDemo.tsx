import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingDemo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://chms-app.netlify.app"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-white font-bold text-sm shadow-lg hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          View live demo
        </motion.a>
      )}
    </AnimatePresence>
  );
}
