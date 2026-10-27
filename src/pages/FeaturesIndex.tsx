import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { featurePages } from '../data/features';
import Breadcrumbs from '../components/Breadcrumbs';
import FeatureIcon from '../components/FeatureIcon';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';

export default function FeaturesIndex() {
  return (
    <>
      <section className="pt-32 pb-20" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs trail={[{ name: 'Features', path: '/features' }]} />
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: '#2BA898' }}>Features</p>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight mb-6" style={{ color: '#1B2875' }}>
              Church management software features built for African churches
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(15,23,42,0.6)' }}>
              Faith ChurchCare brings your member register, attendance, tithes and giving, WhatsApp and SMS messaging,
              visitor follow up, pastoral care and reports into one platform your whole team can use from any phone or computer.
              Start with the area that takes your team the most time today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featurePages.map(f => (
              <Link key={f.slug} to={`/features/${f.slug}`}
                className="group p-7 rounded-2xl border transition-all hover:shadow-md hover:bg-white"
                style={{ background: '#F8FAFC', borderColor: 'rgba(0,0,0,0.07)' }}>
                <FeatureIcon name={f.icon} color={f.color} />
                <h2 className="font-black text-lg mt-5 mb-2" style={{ color: '#0F172A' }}>{f.name}</h2>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(15,23,42,0.6)' }}>{f.description}</p>
                <span className="text-sm font-bold inline-flex items-center gap-1.5" style={{ color: '#1B2875' }}>
                  Explore {f.name.toLowerCase()} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
            <Link to="/pricing"
              className="group p-7 rounded-2xl border flex flex-col justify-between transition-all hover:shadow-md"
              style={{ background: '#1B2875', borderColor: '#1B2875' }}>
              <div>
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: 'rgba(167,243,208,0.9)' }}>Plans from</p>
                <p className="text-4xl font-black text-white">GHS 200</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>a month, with a 14 day free trial</p>
              </div>
              <span className="text-sm font-bold inline-flex items-center gap-1.5 mt-6 text-white">
                Compare plans <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}
