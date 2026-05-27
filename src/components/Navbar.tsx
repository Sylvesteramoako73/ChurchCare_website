import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoIcon } from './Logo';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <LogoIcon size={34} />
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg tracking-tight" style={{ color: '#1B2875' }}>
              Faith <span style={{ color: '#2BA898' }}>Church</span><span style={{ color: '#7B4FBE' }}>Care</span>
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'rgba(15,23,42,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1B2875')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(15,23,42,0.6)')}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://chms-app.netlify.app" target="_blank" rel="noreferrer"
            className="text-sm font-semibold transition-colors"
            style={{ color: 'rgba(15,23,42,0.55)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#1B2875')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(15,23,42,0.55)')}>
            Sign in
          </a>
          <a href="#pricing"
            className="px-5 py-2.5 rounded-full text-white text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: '#1B2875' }}>
            Get started
          </a>
        </div>

        <button className="md:hidden p-2" style={{ color: '#1B2875' }} onClick={() => setOpen(o => !o)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.08)' }}
            className="md:hidden px-6 pb-6">
            <nav className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="text-sm font-medium py-1" style={{ color: 'rgba(15,23,42,0.7)' }}>
                  {l.label}
                </a>
              ))}
              <a href="#pricing"
                className="text-center px-6 py-3 rounded-full text-white text-sm font-bold mt-2"
                style={{ background: '#1B2875' }}>
                Get started — from GHS 200/mo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
