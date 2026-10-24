import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

/* ── Paystack type shim ───────────────────────────────────────────── */
declare global {
  interface Window {
    PaystackPop: {
      setup(cfg: {
        key: string;
        email: string;
        amount: number;       // in pesewas (GHS × 100)
        currency: string;
        ref: string;
        metadata?: Record<string, unknown>;
        callback(res: { reference: string }): void;
        onClose(): void;
      }): { openIframe(): void };
    };
  }
}

const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string ?? '';

/* ── Billing periods (paid upfront for the whole period) ─────────── */
const periods = [
  { key: '3m', label: '3 months', months: 3, discount: 0, badge: '' },
  { key: '6m', label: '6 months', months: 6, discount: 5, badge: 'Save 5%' },
  { key: '1y', label: '1 year', months: 12, discount: 100 / 6, badge: '2 months free' }, // pay for 10 of 12 months
] as const;

type Period = (typeof periods)[number];

/** Total charged for a plan over a billing period, in GHS */
const periodPrice = (monthly: number, period: Period) =>
  Math.round(monthly * period.months * (1 - period.discount / 100));

/* ── Plan definitions ─────────────────────────────────────────────── */
const plans = [
  {
    name: 'Starter',
    monthly: 200,
    desc: 'Perfect for small churches getting organised.',
    color: '#2BA898',
    headerBg: '#FFFFFF',
    featureBg: '#F8FAFC',
    textLight: false,
    popular: false,
    features: [
      'Up to 150 members',
      'Member profiles & attendance',
      'Giving & tithe records',
      'Basic PDF reports',
      'Event management',
      'Visitor follow-up tracker',
      '2 admin accounts',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    monthly: 350,
    desc: 'For growing churches that need more reach.',
    color: '#ffffff',
    headerBg: '#1B2875',
    featureBg: '#EEF2FF',
    textLight: true,
    popular: true,
    features: [
      'Up to 500 members',
      'Everything in Starter',
      'Bulk WhatsApp & SMS messaging',
      'Auto birthday & anniversary greetings',
      'PDF receipts & certificates',
      'Pledge & fundraising tracking',
      'Prayer & pastoral care',
      '10 admin accounts',
      'WhatsApp support',
    ],
  },
  {
    name: 'Pro',
    monthly: 500,
    desc: 'Unlimited scale for large & multi-campus churches.',
    color: '#7B4FBE',
    headerBg: '#FFFFFF',
    featureBg: '#F8FAFC',
    textLight: false,
    popular: false,
    features: [
      'Unlimited members',
      'Everything in Growth',
      'Multi-campus / branch management',
      'Role-based access control',
      'Advanced analytics dashboard',
      'Volunteer management',
      'Audit log & data export',
      'Unlimited admin accounts',
      'Priority support',
    ],
  },
];

/* ── Email-capture modal ──────────────────────────────────────────── */
function PayModal({
  plan,
  period,
  onClose,
}: {
  plan: (typeof plans)[0];
  period: Period;
  onClose: () => void;
}) {
  const total = periodPrice(plan.monthly, period);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const pay = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return setError('Please enter your email address.');
    if (!PAYSTACK_KEY) return setError('Online payment is not set up yet. Please contact us to subscribe.');
    if (!window.PaystackPop) return setError('Payment service unavailable. Please refresh the page.');

    setLoading(true);
    setError('');

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: total * 100, // convert GHS → pesewas
      currency: 'GHS',
      ref: `FCC-${plan.name.toUpperCase()}-${period.key.toUpperCase()}-${Date.now()}`,
      metadata: { plan: plan.name, billing_period: period.label, months: period.months, church_name: name },
      callback(res) {
        console.log('Payment successful:', res.reference);
        setLoading(false);
        setPaid(true);
        // Redirect to the app after a short moment so the user sees the success screen
        setTimeout(() => {
          window.location.href = 'https://app.churchcare.online';
        }, 2500);
      },
      onClose() {
        setLoading(false);
      },
    });

    handler.openIframe();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        className="w-full max-w-md rounded-3xl overflow-hidden"
        style={{ background: '#ffffff', boxShadow: '0 32px 80px rgba(15,23,42,0.2)' }}>

        {/* Header */}
        <div className="px-8 pt-8 pb-6 flex items-start justify-between"
          style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#2BA898' }}>
              {plan.name} Plan · {period.label}
            </p>
            <p className="text-3xl font-black" style={{ color: '#1B2875' }}>GHS {total.toLocaleString()}<span className="text-base font-semibold text-slate-400"> / {period.label}</span></p>
            <p className="text-xs text-slate-400 mt-1">
              Works out to GHS {Math.round(total / period.months)}/month
              {period.badge && <span className="font-bold" style={{ color: '#2BA898' }}> · {period.badge}</span>}
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="px-8 py-6">
          {paid ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'rgba(43,168,152,0.1)' }}>
                <Check className="w-8 h-8" style={{ color: '#2BA898' }} strokeWidth={3} />
              </div>
              <p className="text-xl font-black mb-2" style={{ color: '#1B2875' }}>Payment Successful! 🎉</p>
              <p className="text-sm text-slate-500 mb-6">
                Welcome to Faith ChurchCare.<br />
                Taking you to the app now…
              </p>
              <a
                href="https://app.churchcare.online"
                className="w-full py-3 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: '#1B2875' }}>
                Go to app.churchcare.online →
              </a>
            </div>
          ) : (
            <form onSubmit={pay} className="space-y-4">
              <p className="text-sm text-slate-500 mb-2">Enter your details to proceed to secure payment.</p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-500">
                  Church name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Grace Chapel"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', color: '#0F172A' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(43,168,152,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-500">
                  Email address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="pastor@gracechapel.gh"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.1)', color: '#0F172A' }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(43,168,152,0.5)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(0,0,0,0.1)')}
                />
              </div>

              {error && (
                <p className="text-xs font-semibold text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl font-black text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-60 mt-2"
                style={{ background: '#1B2875' }}>
                {loading ? 'Opening payment…' : `Pay GHS ${total.toLocaleString()} with Paystack`}
              </button>

              <p className="text-center text-xs text-slate-400">
                🔒 Secured by Paystack · Cancel anytime
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────── */
export default function Pricing() {
  const [activePlan, setActivePlan] = useState<(typeof plans)[0] | null>(null);
  const [period, setPeriod] = useState<Period>(periods[0]);

  return (
    <section id="pricing" className="py-28" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: '#2BA898' }}>
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black leading-tight mb-5"
            style={{ color: '#0F172A' }}>
            Simple plans for every
            <span className="block" style={{ color: '#2BA898' }}>size of church.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-lg leading-relaxed"
            style={{ color: 'rgba(15,23,42,0.55)' }}>
            No hidden fees. Pay every 3 months, 6 months or once a year.
          </motion.p>

          {/* Billing period switch */}
          <div className="inline-flex mt-8 p-1 rounded-full border bg-white"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
            {periods.map(p => (
              <button
                key={p.key}
                onClick={() => setPeriod(p)}
                className="px-5 py-2 rounded-full text-sm font-bold transition-colors"
                style={period.key === p.key
                  ? { background: '#1B2875', color: '#ffffff' }
                  : { color: 'rgba(15,23,42,0.55)' }}>
                {p.label}
                {p.badge && (
                  <span className="ml-1.5 text-xs" style={{ color: period.key === p.key ? '#FCD34D' : '#2BA898' }}>
                    {p.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-3xl overflow-hidden border relative"
              style={{
                borderColor: plan.popular ? '#1B2875' : 'rgba(0,0,0,0.08)',
                boxShadow: plan.popular ? '0 20px 60px rgba(27,40,117,0.15)' : 'none',
                transform: plan.popular ? 'scale(1.04)' : 'scale(1)',
              }}>

              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1 text-xs font-black uppercase tracking-widest text-white rounded-b-xl"
                    style={{ background: '#2BA898' }}>
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card header */}
              <div className="p-8" style={{ background: plan.headerBg }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: plan.textLight ? 'rgba(147,197,253,0.9)' : plan.color }}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5 mb-2">
                  <span className="text-sm font-bold mb-1"
                    style={{ color: plan.textLight ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.45)' }}>GHS</span>
                  <span className="text-5xl font-black"
                    style={{ color: plan.textLight ? '#ffffff' : '#0F172A' }}>
                    {periodPrice(plan.monthly, period).toLocaleString()}
                  </span>
                  <span className="mb-2 text-sm"
                    style={{ color: plan.textLight ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.4)' }}>/ {period.label}</span>
                </div>
                <p className="text-xs mb-2"
                  style={{ color: plan.textLight ? 'rgba(255,255,255,0.5)' : 'rgba(15,23,42,0.4)' }}>
                  GHS {Math.round(periodPrice(plan.monthly, period) / period.months)}/month, billed {period.months === 12 ? 'yearly' : `every ${period.months} months`}
                  {period.discount > 0 && (
                    <> · <s>GHS {(plan.monthly * period.months).toLocaleString()}</s></>
                  )}
                </p>
                <p className="text-sm mb-6"
                  style={{ color: plan.textLight ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.5)' }}>
                  {plan.desc}
                </p>
                <button
                  onClick={() => setActivePlan(plan)}
                  className="w-full py-3.5 rounded-2xl font-black text-sm transition-opacity hover:opacity-90"
                  style={
                    plan.textLight
                      ? { background: '#ffffff', color: '#1B2875' }
                      : { background: plan.popular ? '#1B2875' : plan.color, color: '#ffffff' }
                  }>
                  Get started
                </button>
              </div>

              {/* Features list */}
              <div className="p-8" style={{ background: plan.featureBg }}>
                <p className="text-xs font-black uppercase tracking-widest mb-5"
                  style={{ color: 'rgba(15,23,42,0.4)' }}>
                  What's included
                </p>
                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: plan.popular ? 'rgba(27,40,117,0.1)' : `${plan.color}18` }}>
                        <Check className="w-3 h-3" strokeWidth={3}
                          style={{ color: plan.popular ? '#1B2875' : plan.color }} />
                      </div>
                      <span className="text-sm leading-snug" style={{ color: 'rgba(15,23,42,0.7)' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm mt-12"
          style={{ color: 'rgba(15,23,42,0.4)' }}>
          🔒 Payments secured by Paystack · Data encrypted at rest · Hosted on AWS · Cancel anytime
        </motion.p>
      </div>

      {/* Payment modal */}
      <AnimatePresence>
        {activePlan && (
          <PayModal plan={activePlan} period={period} onClose={() => setActivePlan(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
