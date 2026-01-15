
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { ScrollTextSection } from './components/ScrollTextSection';
import { Competencies } from './components/Competencies';
import { FloatingServices } from './components/FloatingServices';
import { StickyScrollTransition } from './components/StickyScrollTransition';
import { ContactForm } from './components/ContactForm';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ServicesDetail } from './components/ServicesDetail';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services'>(() => {
    const hash = window.location.hash;
    return hash === '#services' ? 'services' : 'home';
  });

  const navigateTo = (page: 'home' | 'services') => {
    if (activePage === page) {
      // If already on the page, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If switching pages, jump to top instantly
      setActivePage(page);
      window.scrollTo(0, 0);
      // Update hash without triggering reload
      const newHash = page === 'home' ? '#home' : '#services';
      window.history.pushState(null, '', newHash);
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services' && activePage !== 'services') {
        setActivePage('services');
        window.scrollTo(0, 0);
      } else if ((hash === '#home' || !hash || hash === '#') && activePage !== 'home') {
        setActivePage('home');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Ensure we start at top on first load if no hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePage]);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500 selection:text-white bg-[#d1dbd2]">
      <div className="noise fixed inset-0 z-50 pointer-events-none" />
      
      <Navbar onNavigate={navigateTo} activePage={activePage} />
      
      <main className="relative z-10 flex flex-col gap-0 pb-10">
        {activePage === 'home' ? (
          <div className="flex flex-col gap-12 md:gap-24 lg:gap-32">
            <Hero onNavigate={navigateTo} />
            <SocialProof />
            <ProblemSolution onNavigate={navigateTo} />
            <Competencies onNavigate={navigateTo} />
            <StickyScrollTransition onNavigate={navigateTo} />
            <ScrollTextSection />
            <FloatingServices onNavigate={navigateTo} />
            <BlogSection onNavigate={navigateTo} />
            <ContactForm />
          </div>
        ) : (
          <ServicesDetail onNavigate={navigateTo} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
