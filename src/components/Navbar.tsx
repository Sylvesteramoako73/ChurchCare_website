import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#usecases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className={`text-xs font-light tracking-widest ${scrolled ? 'text-gray-400' : 'text-gray-300'}`}>nsano</span>
          <span className={`text-xl font-bold tracking-wide ${scrolled ? 'text-[#080c28]' : 'text-white'}`}>ChurchCare</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#9b5de5] ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Sign In */}
        <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
          className={`hidden md:inline-flex items-center px-6 py-2 rounded-full border text-sm font-semibold transition-all hover:bg-[#9b5de5] hover:border-[#9b5de5] hover:text-white ${
            scrolled
              ? 'border-[#9b5de5] text-[#9b5de5]'
              : 'border-[#9b5de5] text-[#9b5de5]'
          }`}>
          Sign In
        </a>

        {/* Mobile */}
        <button className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setOpen(o => !o)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080c28] border-t border-white/10 px-8 pb-6"
          >
            <nav className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="text-white text-sm font-medium py-1">
                  {l.label}
                </a>
              ))}
              <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#9b5de5] text-[#9b5de5] text-sm font-semibold mt-2">
                Sign In
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
