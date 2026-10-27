/* ── Billing periods (paid upfront for the whole period) ─────────── */
export const periods = [
  { key: '3m', label: '3 months', months: 3, discount: 0, badge: '' },
  { key: '6m', label: '6 months', months: 6, discount: 5, badge: 'Save 5%' },
  { key: '1y', label: '1 year', months: 12, discount: 100 / 6, badge: '2 months free' }, // pay for 10 of 12 months
] as const;

export type Period = (typeof periods)[number];

/** Total charged for a plan over a billing period, in GHS */
export const periodPrice = (monthly: number, period: Period) =>
  Math.round(monthly * period.months * (1 - period.discount / 100));

/* ── Plan definitions ─────────────────────────────────────────────── */
export const plans = [
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

export type Plan = (typeof plans)[number];

/** SoftwareApplication structured data with one Offer per plan (monthly price) */
export const softwareApplicationLd = {
  '@type': 'SoftwareApplication',
  name: 'Faith ChurchCare',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Church management software',
  operatingSystem: 'Web, Android, iOS',
  url: 'https://www.churchcare.online/',
  description:
    'Cloud church management software for African churches. Manage members, attendance, tithes and giving, bulk WhatsApp and SMS, visitor follow up, pastoral care and reports in one platform.',
  publisher: { '@id': 'https://www.churchcare.online/#organization' },
  offers: plans.map(p => ({
    '@type': 'Offer',
    name: p.name,
    description: p.desc,
    url: 'https://www.churchcare.online/pricing',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(p.monthly),
      priceCurrency: 'GHS',
      unitText: 'MONTH',
    },
  })),
};
