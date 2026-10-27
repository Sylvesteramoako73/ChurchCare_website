import Hero from '../components/Hero';
import LogoBar from '../components/LogoBar';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Community from '../components/Community';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <Community />
      <Pricing />
      <Testimonials />
      <FAQ limit={6} />
      <Contact />
      <CTA />
    </>
  );
}
