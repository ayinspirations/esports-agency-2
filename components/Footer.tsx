
import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

// Define props for Footer component
interface FooterProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: 'home' | 'services') => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <div className="max-w-[1440px] mx-auto w-full px-6 md:px-14">
      <footer className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">
            <div className="col-span-2">
              <a 
                href="#home" 
                onClick={(e) => handleNav(e, 'home')}
                className="text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-3 mb-8 text-slate-900 group"
              >
                <div className="w-10 h-10 bg-emerald-500 rounded-xl rotate-12 flex items-center justify-center text-[10px] text-white font-black group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-emerald-500/20">EA</div>
                eSports Agentur
              </a>
              <p className="text-slate-600 max-w-sm leading-relaxed mb-10 text-lg font-medium tracking-tight">
                Wir schaffen Erlebnisse, die Marken aktivieren und Zielgruppen begeistern – durch Gamification, Technik und Software.
              </p>
              <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ scale: 1.1, backgroundColor: "#10b981", color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/40 border border-white/40 rounded-full flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Leistungen</h4>
              <ul className="space-y-4 text-slate-600 text-base font-bold tracking-tight">
                <li><a href="#/services" onClick={(e) => handleNav(e, 'services')} className="hover:text-emerald-700 transition-colors">Gamification</a></li>
                <li><a href="#/services" onClick={(e) => handleNav(e, 'services')} className="hover:text-emerald-700 transition-colors">eSports Events</a></li>
                <li><a href="#/services" onClick={(e) => handleNav(e, 'services')} className="hover:text-emerald-700 transition-colors">Eventtechnik</a></li>
                <li><a href="#/services" onClick={(e) => handleNav(e, 'services')} className="hover:text-emerald-700 transition-colors">Software & Plattformen</a></li>
                <li><a href="#/services" onClick={(e) => handleNav(e, 'services')} className="hover:text-emerald-700 transition-colors">Content & Streaming</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Über uns</h4>
              <ul className="space-y-4 text-slate-600 text-base font-bold tracking-tight">
                <li><a href="#home" onClick={(e) => handleNav(e, 'home')} className="hover:text-emerald-700 transition-colors">Unsere Story</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Karriere</a></li>
                <li><a href="#contact" className="hover:text-emerald-700 transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.3em]">Rechtliches</h4>
              <ul className="space-y-4 text-slate-600 text-base font-bold tracking-tight">
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-900/10 text-[10px] text-slate-500 font-black tracking-[0.2em] uppercase">
            <p>© 2024 eSports Agentur GmbH. Made with passion for gaming.</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-0 items-center">
              <span className="flex items-center gap-2 tracking-widest text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600" /> hello@esports-agency.de
              </span>
              <span className="tracking-widest">Germany • HQ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
