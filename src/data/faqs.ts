export interface Faq {
  q: string;
  a: string;
}

/** Site FAQs. Shown on the home page (first few) and in full on /faq, where they also feed FAQPage structured data. */
export const faqs: Faq[] = [
  { q: 'What is Faith ChurchCare?', a: 'Faith ChurchCare is a complete cloud based church management software designed for African churches. It handles members, attendance, giving, WhatsApp and SMS communication, visitor follow up, pastoral care, reports and more, all in one platform.' },
  { q: 'How much does Faith ChurchCare cost?', a: 'Faith ChurchCare offers three plans: Starter at GHS 200 a month (up to 150 members), Growth at GHS 350 a month (up to 500 members), and Pro at GHS 500 a month (unlimited members). Plans are paid every 3 months, 6 months or once a year. For example, Starter is GHS 600 for 3 months. Pay for 6 months and save 5%, or pay yearly and get 2 months free. No hidden fees.' },
  { q: "What's included in each plan?", a: 'The Starter plan covers member management, attendance, giving records, basic reports and 2 admins. Growth adds bulk WhatsApp and SMS, events, visitor follow up, PDF receipts and 10 admins. Pro adds multi campus support, role based access, advanced analytics and unlimited admins.' },
  { q: 'Do I need technical knowledge to use it?', a: 'Not at all. Faith ChurchCare is designed to be intuitive. If you can use WhatsApp or a smartphone, you can use Faith ChurchCare. Setup takes less than 10 minutes and we provide onboarding guidance.' },
  { q: 'Can multiple staff members use it?', a: 'Yes. You can invite your entire team and assign role based access. Administrators, Pastors, Department Heads and Data Entry staff each get the right level of access.' },
  { q: 'How does the WhatsApp messaging work?', a: 'Faith ChurchCare connects to a WhatsApp gateway that lets you send bulk messages directly to your congregation. You can also set up automated birthday and church anniversary greetings.' },
  { q: "Is my church's data safe?", a: "Yes. All data is stored securely in Supabase, backed by AWS, and encrypted at rest and in transit. Only your authorised team members can access your church's data." },
  { q: 'Can I try it before paying?', a: 'Yes. Every church gets a 14 day free trial with full access. Sign up at app.churchcare.online, no payment needed to start. When the trial ends, choose a plan to keep using it and your data stays safe. You can also explore the live demo first.' },
  { q: 'Can I import my existing member list?', a: 'Yes. You can import members from a CSV file exported from Excel or Google Sheets, so you do not have to type your register in again. You can also export your member list to CSV.' },
  { q: 'Does it record Mobile Money giving?', a: 'Yes. When you record a tithe, offering, seed or project gift you choose how it was paid: cash, Mobile Money or bank transfer. Giving reports then show totals by type and by payment method.' },
];

export const faqPageLd = (items: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
