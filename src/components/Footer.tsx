import { LogoIcon } from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoIcon size={36} />
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg">
                  <span style={{ color: '#ffffff' }}>Faith </span>
                  <span style={{ color: '#2BA898' }}>Church</span>
                  <span style={{ color: '#7B4FBE' }}>Care</span>
                </span>
                <span className="text-xs tracking-widest uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Manage. Serve. Grow. Together.
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              The complete cloud-based church management platform built for African churches.
              Simple, powerful, and affordable.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Ghana 🇬🇭 · Built for Africa
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Product
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faqs' },
                { label: 'Live Demo', href: 'https://chms-app.netlify.app' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Contact
            </p>
            <ul className="space-y-3">
              {[
                { label: 'info@beenhanced.co', href: 'mailto:info@beenhanced.co' },
                { label: 'Send a message', href: '#contact' },
                { label: 'FAQs', href: '#faqs' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Faith ChurchCare by nsano. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
            Secure · Reliable · Made for Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
