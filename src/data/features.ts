import type { Faq } from './faqs';

export type FeatureIcon = 'users' | 'banknote' | 'message' | 'calendar' | 'userPlus';

export interface FeaturePageData {
  slug: string;
  /** Short name used in menus and cards */
  name: string;
  icon: FeatureIcon;
  color: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  /** Opening paragraph that answers the main question directly */
  intro: string;
  image: { src: string; alt: string; width: number; height: number };
  benefitsHeading: string;
  benefits: { title: string; text: string }[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  planNote: string;
  faqs: Faq[];
  related: string[];
  relatedPost?: string;
}

export const featurePages: FeaturePageData[] = [
  {
    slug: 'member-management',
    name: 'Member management',
    icon: 'users',
    color: '#2563EB',
    title: 'Church Membership Software for Ghana | Faith ChurchCare',
    description:
      'Keep every member record in one place: profiles, departments, baptism and marital details, birthdays and pastoral history. Import your list from Excel.',
    eyebrow: 'Member management',
    h1: 'Church membership software that knows every member by name',
    intro:
      'Faith ChurchCare gives your church one shared, secure register of every member. Each profile holds contact details, department, baptism and marital status, birthdays, attendance, giving and pastoral notes, so your leaders stop searching through notebooks, old spreadsheets and WhatsApp chats to find out who someone is.',
    image: {
      src: '/images/church-family.webp',
      alt: 'A Ghanaian church family in matching anniversary print outfits, smiling together',
      width: 1200,
      height: 800,
    },
    benefitsHeading: 'Everything about a member, on one profile',
    benefits: [
      { title: 'Complete member profiles', text: 'Phone, address, date of birth, marital status, baptism and membership details, each member with their own membership number.' },
      { title: 'Departments and cell groups', text: 'Place members into departments, ministries and cell groups so leaders can see and reach their own people.' },
      { title: 'Import from Excel', text: 'Upload your existing register as a CSV file from Excel or Google Sheets instead of typing every name again. Export to CSV whenever you need it.' },
      { title: 'Pastoral history', text: 'Prayer requests, hospital and home visits, phone calls and counselling notes stay attached to the member, so care continues when leaders change.' },
      { title: 'Birthdays and milestones', text: 'See whose birthday or anniversary is coming up and greet them automatically on WhatsApp on the Growth plan.' },
      { title: 'Access for the right people', text: 'Administrators, pastors, department heads and data entry staff each see only what their role needs.' },
    ],
    stepsHeading: 'From paper register to live database in an afternoon',
    steps: [
      { title: 'Export your current list', text: 'Save your Excel or Google Sheets register as a CSV file. Names and phone numbers are enough to start.' },
      { title: 'Import and organise', text: 'Upload the file, then assign members to departments and cell groups. Add missing details over the following weeks.' },
      { title: 'Invite your team', text: 'Give secretaries, ushers and department heads their own logins with the right level of access.' },
    ],
    planNote: 'Member management is included on every plan. Starter covers up to 150 members, Growth up to 500 and Pro has no limit.',
    faqs: [
      { q: 'How many members can we store?', a: 'The Starter plan holds up to 150 members, Growth up to 500 and Pro is unlimited. You can move up a plan as your church grows without losing any records.' },
      { q: 'Can we import members from Excel?', a: 'Yes. Save your register as a CSV file from Excel or Google Sheets and import it. You can export your member list to CSV as well.' },
      { q: 'Who can see member information?', a: 'Only people you invite. Each user gets a role such as Administrator, Pastor, Department Head or Data Entry, and the role decides what they can see and change.' },
    ],
    related: ['attendance', 'visitor-follow-up', 'whatsapp-and-sms'],
    relatedPost: 'choosing-church-management-software-ghana',
  },
  {
    slug: 'tithes-and-giving',
    name: 'Tithes and giving',
    icon: 'banknote',
    color: '#059669',
    title: 'Tithe and Offering Tracking Software | Faith ChurchCare',
    description:
      'Record tithes, offerings, seed and project gifts paid by cash, Mobile Money or bank transfer. Issue PDF receipts and see giving reports in seconds.',
    eyebrow: 'Tithes and giving',
    h1: 'Track tithes and offerings without the end of month headache',
    intro:
      'Faith ChurchCare lets your finance team record every tithe, offering, seed and project gift against the right member, along with how it was paid: cash, Mobile Money or bank transfer. Monthly totals, giving by type and member giving statements are then ready in seconds instead of hours of counting and adding up columns.',
    image: {
      src: '/images/church-congregation.webp',
      alt: 'A congregation in colourful African print seated during a church service',
      width: 700,
      height: 367,
    },
    benefitsHeading: 'Clear, accountable church finances',
    benefits: [
      { title: 'Every type of giving', text: 'Record tithes, offerings, seed, project giving and other gifts, each linked to a member or recorded as general giving.' },
      { title: 'Cash, Mobile Money and bank', text: 'Note how each gift was paid so you can reconcile Mobile Money statements and bank deposits with what was recorded.' },
      { title: 'PDF receipts', text: 'Generate a receipt for any gift with one click. Members can also receive an SMS receipt when the option is switched on.' },
      { title: 'Pledges and fundraising', text: 'Track building fund and project pledges against what has actually been paid, on the Growth plan and above.' },
      { title: 'Giving reports', text: 'See this month against last month, tithes against offerings, and totals by payment method, then export to PDF for your finance committee.' },
      { title: 'Controlled access', text: 'Only the people you trust with finances can see giving records. Others in your team never see amounts.' },
    ],
    stepsHeading: 'How a Sunday collection gets recorded',
    steps: [
      { title: 'Count as usual', text: 'Your counting team works the way it always has. Tithe envelopes and Mobile Money transfers are noted by name.' },
      { title: 'Record each gift', text: 'Enter the member, the amount, the type (tithe, offering, seed or project) and how it was paid.' },
      { title: 'Report in seconds', text: 'Monthly and yearly totals update immediately, ready for your treasurer and pastors.' },
    ],
    planNote: 'Giving and tithe records are on every plan. PDF receipts and pledge tracking start on the Growth plan.',
    faqs: [
      { q: 'Does Faith ChurchCare record Mobile Money giving?', a: 'Yes. For every gift you choose the payment method: cash, Mobile Money or bank transfer. Reports show totals for each method, which makes reconciliation easier.' },
      { q: 'Can members get receipts for their tithes?', a: 'Yes. You can generate a PDF receipt for any recorded gift, and you can switch on automatic SMS receipts for members who have a phone number on their profile.' },
      { q: 'Can we track building fund pledges?', a: 'Yes. On the Growth and Pro plans you can record pledges and follow how much of each pledge has been redeemed.' },
    ],
    related: ['member-management', 'whatsapp-and-sms', 'attendance'],
    relatedPost: 'how-to-track-tithes-and-offerings',
  },
  {
    slug: 'whatsapp-and-sms',
    name: 'WhatsApp and SMS',
    icon: 'message',
    color: '#D97706',
    title: 'Church Bulk SMS and WhatsApp Messaging | Faith ChurchCare',
    description:
      'Send bulk SMS and WhatsApp messages to your whole church or one department, and greet members automatically on their birthdays and anniversaries.',
    eyebrow: 'WhatsApp and SMS',
    h1: 'Reach your whole congregation on WhatsApp and SMS',
    intro:
      'Faith ChurchCare lets you send one message to every member, or just to a department, by SMS or WhatsApp straight from your member list. You can also switch on automatic birthday and church anniversary greetings, so nobody is forgotten and your leaders no longer copy numbers into broadcast lists by hand.',
    image: {
      src: '/images/church-worship.webp',
      alt: 'Church members standing with hands raised in worship',
      width: 700,
      height: 443,
    },
    benefitsHeading: 'Communication that actually reaches people',
    benefits: [
      { title: 'Bulk SMS with your church name', text: 'SMS goes out through mNotify with your church name as the sender, so members know exactly who it is from.' },
      { title: 'WhatsApp broadcasts', text: 'Send announcements and reminders on the app most of your members already use every day.' },
      { title: 'Message the right group', text: 'Choose all members, active members or one department, so the youth hear about youth programmes and the choir hears about rehearsals.' },
      { title: 'Automatic birthday greetings', text: 'Set a warm birthday message once. Each member receives it on their day, with their name filled in.' },
      { title: 'Church anniversary greetings', text: 'Celebrate the years each member has been part of the church with an automatic anniversary message.' },
      { title: 'Reminder templates', text: 'Set up reusable messages for birthdays, anniversaries, events and meetings, with each member\u2019s name filled in.' },
    ],
    stepsHeading: 'Sending your first broadcast',
    steps: [
      { title: 'Connect your SMS account', text: 'Enter your mNotify API key and sender name in Settings. SMS credits are bought from mNotify.' },
      { title: 'Write your message', text: 'Type your announcement once. It goes to each member on your list.' },
      { title: 'Choose who receives it', text: 'Pick all members, active members or a department, then send.' },
    ],
    planNote: 'Bulk WhatsApp and SMS, plus automatic birthday and anniversary greetings, are included from the Growth plan.',
    faqs: [
      { q: 'How much does church bulk SMS cost?', a: 'Faith ChurchCare sends SMS through mNotify, a Ghanaian SMS provider. You buy SMS credits directly from mNotify at their rates, and Faith ChurchCare sends the messages from your member list.' },
      { q: 'Can the SMS show our church name?', a: 'Yes. You set a sender name of up to 11 characters, such as your church name, and members see it as the sender.' },
      { q: 'Can members get automatic birthday messages?', a: 'Yes. On the Growth plan and above you can switch on automatic WhatsApp birthday and church anniversary greetings with each member’s name filled in.' },
    ],
    related: ['member-management', 'visitor-follow-up', 'attendance'],
    relatedPost: 'how-to-follow-up-church-visitors',
  },
  {
    slug: 'attendance',
    name: 'Church attendance',
    icon: 'calendar',
    color: '#7C3AED',
    title: 'Church Attendance Tracking App | Faith ChurchCare',
    description:
      'Record attendance for every Sunday service, midweek and prayer meeting. Tick members present or enter a quick headcount, then watch the trends.',
    eyebrow: 'Church attendance',
    h1: 'Church attendance tracking that takes minutes, not a whole Monday',
    intro:
      'Faith ChurchCare records attendance for each service, whether that is first service, second service, midweek, prayer meeting or a special programme. You can tick individual members as present or simply enter a quick headcount plus the number of visitors, and the trends build themselves so you can see who has stopped coming before they drift away.',
    image: {
      src: '/images/church-service.webp',
      alt: 'A preacher speaking from the pulpit to a full church auditorium',
      width: 700,
      height: 400,
    },
    benefitsHeading: 'Know who is in church, and who is missing',
    benefits: [
      { title: 'Every type of service', text: 'Sunday first and second service, midweek, prayer meetings and special programmes are each tracked separately.' },
      { title: 'Member by member or quick count', text: 'Tick names for an accurate register, or enter a quick headcount when the hall is full and time is short.' },
      { title: 'Visitors counted too', text: 'Record how many visitors came, then add their details to visitor follow up.' },
      { title: 'Attendance trends', text: 'Charts show growth or decline across weeks and months, by service.' },
      { title: 'Spot absent members', text: 'Each member profile shows their attendance, so department heads can call people who have been away.' },
      { title: 'Works on any phone', text: 'Ushers can record attendance from their own phones. No special equipment is needed.' },
    ],
    stepsHeading: 'Recording a service',
    steps: [
      { title: 'Pick the service', text: 'Choose the date and the service, for example Sunday First Service.' },
      { title: 'Mark or count', text: 'Tick members present, or enter a quick total and the number of visitors.' },
      { title: 'Review the trend', text: 'Your attendance chart updates straight away for pastors to review.' },
    ],
    planNote: 'Attendance tracking is included on every plan.',
    faqs: [
      { q: 'Do we have to tick every member individually?', a: 'No. You can tick members present for a detailed register, or enter a quick headcount when you only need the total. Both count towards your attendance reports.' },
      { q: 'Can we track more than one service on Sunday?', a: 'Yes. First service, second service, midweek, prayer meetings and special programmes are recorded and reported separately.' },
      { q: 'Can we record visitors at a service?', a: 'Yes. Each attendance record includes the number of visitors, and you can add each visitor’s details to the visitor follow up list.' },
    ],
    related: ['visitor-follow-up', 'member-management', 'whatsapp-and-sms'],
    relatedPost: 'how-to-follow-up-church-visitors',
  },
  {
    slug: 'visitor-follow-up',
    name: 'Visitor follow up',
    icon: 'userPlus',
    color: '#DB2777',
    title: 'Church Visitor Follow Up System | Faith ChurchCare',
    description:
      'Capture every first time visitor and move them from welcome to member. Track who called, who visited and who stayed, so no visitor falls through.',
    eyebrow: 'Visitor follow up',
    h1: 'A visitor follow up system that turns first timers into members',
    intro:
      'Faith ChurchCare records each first time visitor with their contact details, the service they attended and how they heard about your church, then tracks their journey through four simple stages: pending, contacted, revisited and converted. Your follow up team always knows who still needs a call and which visitors have become part of the family.',
    image: {
      src: '/images/church-congregation.webp',
      alt: 'A congregation in colourful African print seated during a church service',
      width: 700,
      height: 367,
    },
    benefitsHeading: 'No visitor forgotten after Sunday',
    benefits: [
      { title: 'Capture details on the day', text: 'Name, phone number, the service attended and how they heard about the church, entered by ushers on the day.' },
      { title: 'Four clear stages', text: 'Every visitor moves from Pending to Contacted to Revisited to Converted, so progress is visible at a glance.' },
      { title: 'Follow up dates', text: 'Set a date for the next call or visit, so the right person reaches out at the right time.' },
      { title: 'Notes from every contact', text: 'Record what was said on each call, so the next person picks up the conversation naturally.' },
      { title: 'Linked to attendance', text: 'The number of visitors at each service is recorded with attendance, so you can compare visitors in with visitors followed up.' },
      { title: 'See what works', text: 'Counts of pending, contacted and converted visitors show how well your follow up is working.' },
    ],
    stepsHeading: 'How follow up works week to week',
    steps: [
      { title: 'Welcome and record', text: 'Ushers add each visitor on Sunday with their phone number and how they heard about you.' },
      { title: 'Call within the week', text: 'Your follow up team works through the Pending list and marks each visitor Contacted.' },
      { title: 'Celebrate return visits', text: 'When visitors come back, mark them Revisited, and Converted when they join.' },
    ],
    planNote: 'Visitor follow up is part of every Faith ChurchCare plan.',
    faqs: [
      { q: 'What details should we collect from a first time visitor?', a: 'At minimum a name and phone number. Faith ChurchCare also records the service they attended and how they heard about the church, which helps you see which outreach works.' },
      { q: 'How do we know if follow up is working?', a: 'Each visitor has a stage: Pending, Contacted, Revisited or Converted. The counts for each stage show how many visitors are being reached and how many go on to join.' },
      { q: 'Can several people share the follow up work?', a: 'Yes. Invite your follow up team as users. Notes and follow up dates are shared, so everyone sees what has already been done.' },
    ],
    related: ['attendance', 'whatsapp-and-sms', 'member-management'],
    relatedPost: 'how-to-follow-up-church-visitors',
  },
];

export const featureBySlug = (slug: string) => featurePages.find(f => f.slug === slug);
