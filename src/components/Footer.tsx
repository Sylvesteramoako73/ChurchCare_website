export default function Footer() {
  return (
    <footer style={{ background: '#080c28', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-1">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9b5de5' }}>
                Church Management
              </span>
            </div>
            <p className="text-white font-black text-2xl mb-3">ChurchCare</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The complete cloud-based church management platform built for African churches.
              Simple, powerful, and affordable.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Product</p>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Use Cases', href: '#usecases' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Live Demo', href: 'https://chms-app.netlify.app' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="text-sm text-gray-500">Ghana 🇬🇭</li>
              <li>
                <a href="mailto:info@beenhanced.co" className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                  info@beenhanced.co
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ChurchCare. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built for African churches · Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
