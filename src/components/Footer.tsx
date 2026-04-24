const links = {
  Product: ['Features', 'How it works', 'Pricing', 'Live demo'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-black text-xs">CC</span>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                Church<span className="text-violet-400">Care</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The complete church management platform built for African churches.
              Simple, powerful, and affordable.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-500">All systems operational</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{section}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ChurchCare. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Built with ❤️ for African churches · Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
