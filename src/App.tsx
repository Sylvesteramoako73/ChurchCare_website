import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingDemo from './components/FloatingDemo';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Screenshots />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingDemo />
    </div>
  );
}
