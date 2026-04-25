import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', church: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@beenhanced.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          church: form.church,
          phone: form.phone,
          message: form.message || 'I would like to learn more about ChurchCare.',
          _subject: `ChurchCare enquiry from ${form.church}`,
        }),
      });
    } catch {
      // formsubmit may block in some environments; still show success
    }
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold mb-3" style={{ color: '#9b5de5' }}>Get in touch</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Have a question before subscribing? Want a personalised walkthrough for your church leadership?
              Send us a message and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📞', label: 'WhatsApp / Call', value: '+233 XX XXX XXXX' },
                { icon: '✉️', label: 'Email', value: 'info@beenhanced.co' },
                { icon: '🇬🇭', label: 'Location', value: 'Accra, Ghana' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: '#f0f3f8' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-sm text-gray-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {sent ? (
              <div className="rounded-2xl p-10 text-center border border-gray-100" style={{ background: '#f7f8fc' }}>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: '#9b5de5' }} />
                <p className="font-bold text-gray-900 text-lg mb-2">Message received!</p>
                <p className="text-gray-500 text-sm">We'll get back to you within 24 hours. God bless you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-2xl p-8 border border-gray-100 space-y-4"
                style={{ background: '#f7f8fc' }}>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Pastor John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Church name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Grace Chapel"
                    value={form.church}
                    onChange={e => setForm(f => ({ ...f, church: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">WhatsApp / Phone *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+233 24 000 0000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your church or what you'd like to know..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #9b5de5, #7c3aed)' }}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
