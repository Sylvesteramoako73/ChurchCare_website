import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="pt-40 pb-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#2BA898' }}>Page not found</p>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color: '#1B2875' }}>
          We could not find that page
        </h1>
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(15,23,42,0.6)' }}>
          The link may be old or mistyped. These pages might help instead.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/features', label: 'Features' },
            { to: '/pricing', label: 'Pricing' },
            { to: '/blog', label: 'Blog' },
            { to: '/contact', label: 'Contact' },
          ].map(l => (
            <Link key={l.to} to={l.to} className="px-5 py-2.5 rounded-full text-sm font-bold border transition-colors hover:bg-slate-50"
              style={{ color: '#1B2875', borderColor: 'rgba(27,40,117,0.2)' }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
