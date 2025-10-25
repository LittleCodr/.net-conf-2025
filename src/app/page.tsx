import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Agenda from '@/components/Agenda';
import Speakers from '@/components/Speakers';
import HowToJoin from '@/components/HowToJoin';
import Resources from '@/components/Resources';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '.NET Conf 2025 — MSA GLA Chapter',
  description: 'Join us for .NET Conf 2025 watch party with local demos and Q&A with Microsoft Student Ambassadors. January 11, 2026 · 18:00–21:00 IST',
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Agenda />
        <Speakers />
        <HowToJoin />
        <Resources />
        <FAQ />
      </main>
      
      <Footer />
    </>
  );
}
