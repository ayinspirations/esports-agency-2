
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ScrollTextSection } from './components/ScrollTextSection';
import { Competencies } from './components/Competencies';
import { FloatingServices } from './components/FloatingServices';
import { WhyUs } from './components/WhyUs';
import { UseCases } from './components/UseCases';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ServicesDetail } from './components/ServicesDetail';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services') {
        setActivePage('services');
        window.scrollTo(0, 0);
      } else {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="noise fixed inset-0 z-50" />
      <Navbar />
      
      <main className="relative z-10">
        {activePage === 'home' ? (
          <>
            <Hero />
            <SocialProof />
            <ScrollTextSection />
            <Competencies />
            <FloatingServices />
            <WhyUs />
            <UseCases />
            <ContactForm />
          </>
        ) : (
          <ServicesDetail />
        )}
      </main>

      <Footer />
    </div>
  );
}
