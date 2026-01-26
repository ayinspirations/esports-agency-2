import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services') => void;
  activePage: 'home' | 'services';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes the mobile menu and executes navigation for app-controlled pages
  const closeMenuAndNavigate = (e: React.MouseEvent, page: 'home' | 'services') => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page);
  };

  // Closes the mobile menu for standard anchor links (Insights, Contact)
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Automatically close menu if viewport is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-14 py-6 md:py-8 pointer-events-none">
      <div 
        className={`max-w-[1440px] mx-auto glass rounded-full px-5 md:px-10 py-3 md:py-4 flex items-center justify-between pointer-events-auto transition-all duration-700 ease-in-out backdrop-blur-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] border border-white/10 ${
          scrolled 
          ? 'bg-black/60 border-white/20 scale-[0.98]' 
          : 'bg-black/40 border-white/10'
        }`}
      >
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#home" 
            onClick={(e) => closeMenuAndNavigate(e, 'home')}
            className="text-lg md:text-2xl font-black tracking-tighter flex items-center gap-2.5 text-white group"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-emerald-500 rounded-lg rotate-12 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-[9px] md:text-[10px] text-white font-black italic">EA</span>
            </div>
            <span className="tracking-tighter font-bold">eSports Agentur</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14 px-8">
          <a 
            href="#home" 
            onClick={(e) => closeMenuAndNavigate(e, 'home')}
            className={`text-sm font-bold tracking-tighter transition-all duration-300 ${activePage === 'home' ? 'text-emerald-400' : 'text-white/90 hover:text-emerald-400'}`}
          >
            Startseite
          </a>
          <a 
            href="#services" 
            onClick={(e) => closeMenuAndNavigate(e, 'services')}
            className={`text-sm font-bold tracking-tighter transition-all duration-300 ${activePage === 'services' ? 'text-emerald-400' : 'text-white/90 hover:text-emerald-400'}`}
          >
            Leistungen
          </a>
          <a href="#blog" className="text-sm font-bold tracking-tighter text-white/90 hover:text-emerald-400 transition-all duration-300">Insights</a>
        </div>

        <div className="hidden md:flex items-center shrink-0">
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-9 py-3 rounded-full text-base font-bold tracking-tighter transition-all hover:scale-110 active:scale-95 shadow-xl shadow-emerald-500/20">
            Kontakt
          </a>
        </div>

        <button 
          className="md:hidden text-white p-1.5 rounded-full hover:bg-white/10 transition-colors pointer-events-auto" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to catch clicks outside the menu content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="md:hidden fixed inset-0 z-[-1] bg-black/40 backdrop-blur-sm pointer-events-auto"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-24 left-4 right-4 glass rounded-[2rem] p-8 border-white/20 shadow-2xl bg-slate-950/95 backdrop-blur-3xl pointer-events-auto"
            >
              <div className="flex flex-col gap-8 text-lg font-bold text-white text-center">
                <a 
                  href="#home" 
                  onClick={(e) => closeMenuAndNavigate(e, 'home')} 
                  className={`transition-all tracking-tighter ${activePage === 'home' ? 'text-emerald-400' : 'hover:text-emerald-400'}`}
                >
                  Startseite
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => closeMenuAndNavigate(e, 'services')} 
                  className={`transition-all tracking-tighter ${activePage === 'services' ? 'text-emerald-400' : 'hover:text-emerald-400'}`}
                >
                  Leistungen
                </a>
                <a 
                  href="#blog" 
                  onClick={closeMenu} 
                  className="hover:text-emerald-400 transition-all tracking-tighter"
                >
                  Insights
                </a>
                <div className="h-px bg-white/10 w-1/3 mx-auto" />
                <a 
                  href="#contact" 
                  onClick={closeMenu} 
                  className="bg-emerald-400 text-slate-900 px-8 py-4 rounded-xl text-center font-bold tracking-tighter shadow-lg shadow-emerald-400/20"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};