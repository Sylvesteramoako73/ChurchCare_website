import { Link } from 'react-router';
import { LogoIcon } from './Logo';

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'All features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Live demo', href: 'https://app.churchcare.online' },
    ],
  },
  {
    title: 'Features',
    links: [
      { label: 'Member management', href: '/features/member-management' },
      { label: 'Tithes and giving', href: '/features/tithes-and-giving' },
      { label: 'WhatsApp and SMS', href: '/features/whatsapp-and-sms' },
      { label: 'Church attendance', href: '/features/attendance' },
      { label: 'Visitor follow up', href: '/features/visitor-follow-up' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Contact us', href: '/contact' },
      { label: 'info@churchcare.online', href: 'mailto:info@churchcare.online' },
      { label: '055 700 1326', href: 'tel:+233557001326' },
    ],
  },
];

const linkClass = 'text-sm transition-colors text-white/40 hover:text-white';

function FooterAnchor({ l }: { l: FooterLink }) {
  return l.href.startsWith('/')
    ? <Link to={l.href} className={linkClass}>{l.label}</Link>
    : <a href={l.href} className={linkClass}>{l.label}</a>;
}

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="rounded-lg p-1" style={{ background: '#ffffff' }}>
                <LogoIcon size={32} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-lg">
                  <span style={{ color: '#ffffff' }}>Faith </span>
                  <span style={{ color: '#ffffff' }}>Church</span>
                  <span style={{ color: '#D59D3B' }}>Care</span>
                </span>
                <span className="text-xs tracking-widest uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Manage. Serve. Grow. Together.
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
              The complete cloud based church management platform built for African churches.
              Simple, powerful, and affordable.
            </p>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Ghana 🇬🇭 · Built for Africa
            </p>
          </div>

          {columns.map(col => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.label}><FooterAnchor l={l} /></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }} suppressHydrationWarning>
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
