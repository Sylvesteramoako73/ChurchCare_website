import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', church: '', phone: '', message: '' });

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://formsubmit.co/ajax/info@beenhanced.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Faith ChurchCare enquiry from ${form.church}` }),
      });
    } catch { /* show success regardless */ }
    setLoading(false);
    setSent(true);
  };

  const inputStyle = {
    background: '#F8FAFC',
    border: '1px solid rgba(0,0,0,0.1)',
    color: '#0F172A',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: 14,
    width: '100%',
    outline: 'none',
  };

  return (
    <section id="contact" className="py-28" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#2BA898' }}>
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color: '#0F172A' }}>
              Let's talk about
              <span className="block" style={{ color: '#2BA898' }}>your church.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-sm" style={{ color: 'rgba(15,23,42,0.55)' }}>
              Have a question before subscribing? Want a walkthrough for your leadership team?
              We respond within 24 hours.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { Icon: Phone, label: 'WhatsApp / Call', value: '+233 XX XXX XXXX' },
                { Icon: Mail, label: 'Email', value: 'info@beenhanced.co' },
                { Icon: MapPin, label: 'Location', value: 'Accra, Ghana 🇬🇭' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(43,168,152,0.08)' }}>
                    <Icon className="w-5 h-5" style={{ color: '#2BA898' }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(15,23,42,0.4)' }}>
                      {label}
                    </p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: '#0F172A' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ height: 180, background: '#E2E8F0' }}>
              <img
                src="/church-family.jpg"
                alt="Church community"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}>
            {sent ? (
              <div className="rounded-3xl p-12 text-center border"
                style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(43,168,152,0.1)' }}>
                  <CheckCircle className="w-8 h-8" style={{ color: '#2BA898' }} />
                </div>
                <p className="font-black text-xl mb-3" style={{ color: '#0F172A' }}>Message received!</p>
                <p className="text-sm" style={{ color: 'rgba(15,23,42,0.55)' }}>
                  We'll get back to you within 24 hours. God bless you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 border space-y-5"
                style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <h3 className="text-xl font-black mb-2" style={{ color: '#0F172A' }}>Send us a message</h3>
                {[
                  { key: 'name', label: 'Your name', placeholder: 'Pastor John Doe', type: 'text' },
                  { key: 'church', label: 'Church name', placeholder: 'Grace Chapel', type: 'text' },
                  { key: 'phone', label: 'WhatsApp / Phone', placeholder: '+233 24 000 0000', type: 'tel' },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: 'rgba(15,23,42,0.5)' }}>
                      {f.label} *
                    </label>
                    <input required type={f.type} placeholder={f.placeholder}
                      value={(form as Record<string, string>)[f.key]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = 'rgba(43,168,152,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5"
                    style={{ color: 'rgba(15,23,42,0.5)' }}>
                    Message (optional)
                  </label>
                  <textarea rows={4} placeholder="Tell us about your church..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(43,168,152,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                  />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-2xl text-white font-black text-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ background: '#1B2875' }}>
                  {loading ? 'Sending...' : 'Send message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
