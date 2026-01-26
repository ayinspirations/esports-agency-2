
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { ScrollTextSection } from './components/ScrollTextSection';
import { Competencies } from './components/Competencies';
import { BestCases } from './components/BestCases';
import { StickyScrollTransition } from './components/StickyScrollTransition';
import { ContactForm } from './components/ContactForm';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ServicesDetail } from './components/ServicesDetail';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services'>('home');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Initial sync
    const hash = window.location.hash;
    if (hash === '#services') {
      setActivePage('services');
    } else {
      setActivePage('home');
      if (hash !== '#home' && hash !== '') {
        window.history.replaceState(null, '', '#home');
      }
    }

    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === '#services') {
        setActivePage('services');
        window.scrollTo(0, 0);
      } else {
        setActivePage('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'services') => {
    if (activePage === page) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActivePage(page);
      window.scrollTo(0, 0);
      const newHash = page === 'home' ? '#home' : '#services';
      window.history.pushState(null, '', newHash);
    }
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-[#d1dbd2]" />;
  }

  return (
    <div className="relative min-h-screen selection:bg-emerald-500 selection:text-white bg-[#d1dbd2]">
      <div className="noise fixed inset-0 z-50 pointer-events-none" />
      
      <Navbar onNavigate={navigateTo} activePage={activePage} />
      
      <main className="relative z-10 flex flex-col gap-0 pb-10">
        {activePage === 'home' ? (
          <div className="flex flex-col">
            <div className="mb-32 md:mb-44 lg:mb-56">
              <Hero onNavigate={navigateTo} />
            </div>
            
            <div className="mb-32 md:mb-44 lg:mb-56">
              <SocialProof />
            </div>

            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
              <ProblemSolution onNavigate={navigateTo} />
              <Competencies onNavigate={navigateTo} />
              <StickyScrollTransition onNavigate={navigateTo} />
              <ScrollTextSection />
              <BestCases />
              <BlogSection onNavigate={navigateTo} />
              <ContactForm />
            </div>
          </div>
        ) : (
          <ServicesDetail onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
