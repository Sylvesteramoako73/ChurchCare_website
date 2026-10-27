import { Link } from 'react-router';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import { faqs } from '../data/faqs';

const pricingQuestions = faqs.filter(f =>
  ['How much does Faith ChurchCare cost?', "What's included in each plan?", 'Can I try it before paying?'].includes(f.q));

export default function PricingPage() {
  return (
    <>
      <Pricing asPage />

      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-10" style={{ color: '#0F172A' }}>
            Pricing questions
          </h2>
          <div className="space-y-4">
            {pricingQuestions.map(q => (
              <div key={q.q} className="rounded-2xl p-7 border" style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0F172A' }}>{q.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.6)' }}>{q.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm" style={{ color: 'rgba(15,23,42,0.6)' }}>
            Not sure which plan fits your church? <Link to="/contact" className="font-bold underline" style={{ color: '#1B2875' }}>Send us a message</Link> and
            we will help you choose, or <Link to="/features" className="font-bold underline" style={{ color: '#1B2875' }}>see every feature</Link>.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
