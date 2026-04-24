import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/80'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-200 group-hover:shadow-violet-300 transition-shadow">
              <span className="text-white font-black text-sm tracking-tight">CC</span>
            </div>
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">
              Church<span className="text-violet-600">Care</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900 font-semibold transition-colors px-3 py-2">
              Sign in
            </a>
            <a href="#pricing"
              className="text-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md shadow-violet-200/60">
              Get started free
            </a>
          </div>

          <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg" onClick={() => setOpen(o => !o)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 px-6 pb-6"
            >
              <nav className="flex flex-col gap-1 pt-4">
                {links.map(l => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-all">
                    {l.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
                  <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
                    className="px-4 py-3 text-sm text-center text-gray-600 border border-gray-200 rounded-xl font-semibold">
                    Sign in
                  </a>
                  <a href="#pricing" onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold">
                    Get started — GHS 180/mo
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
