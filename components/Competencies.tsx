
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Monitor, Cpu, PlayCircle, ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  backText: string;
  image: string;
  index: number;
  isAutoFlipped: boolean;
}

const FlipCard: React.FC<CardProps> = ({ title, icon, backText, image, isAutoFlipped }) => {
  const [isHovered, setIsHovered] = useState(false);
  const flipped = isHovered || isAutoFlipped;

  return (
    <div 
      className="perspective-1000 w-full max-w-[400px] h-[380px] sm:h-[420px] md:h-[450px] cursor-pointer mx-auto" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <motion.div 
        className="relative w-full h-full preserve-3d" 
        animate={{ rotateY: flipped ? 180 : 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/20 shadow-xl group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-8 sm:bottom-10 left-6 sm:left-8 right-6 sm:right-8">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
              </div>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tighter leading-tight uppercase">
              {title}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 flex flex-col items-start justify-between border border-emerald-500/30 bg-white rotateY-180 shadow-2xl">
          <div className="w-full">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 mb-6 sm:mb-8">
               {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-5 h-5 sm:w-6 sm:h-6' })}
            </div>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tighter mb-2 sm:mb-4 uppercase">
              {title}
            </h4>
            <p className="text-slate-600 text-base sm:text-lg leading-snug font-bold tracking-tight">
              {backText}
            </p>
          </div>
          
          <div className="w-full pt-4 sm:pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                Details ansehen
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Define props for Competencies component
interface CompetenciesProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const Competencies: React.FC<CompetenciesProps> = ({ onNavigate }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  
  const data = [
    { 
      title: "Gamification", 
      icon: <Gamepad2 />, 
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
      backText: "Wir nutzen spielerische Mechaniken, um Aufmerksamkeit in echte Interaktion zu verwandeln."
    },
    { 
      title: "eSports Events", 
      icon: <Trophy />, 
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      backText: "Von Community-Turnieren bis zu professionellen Wettbewerben – wir planen Gaming-Events."
    },
    { 
      title: "Eventtechnik", 
      icon: <Monitor />, 
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      backText: "LED-Wände und Rigging – wir liefern die Technik, die Markenauftritte erlebbar macht."
    },
    { 
      title: "Plattformen", 
      icon: <Cpu />, 
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
      backText: "Individuelle Gamification-Systeme als skalierbare White-Label-Lösungen."
    },
    { 
      title: "Streaming", 
      icon: <PlayCircle />, 
      image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=800",
      backText: "High-End Livestream-Produktion für maximale Reichweite und Content-Aktivierung."
    }
  ];

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setActiveIdx(null);
      return;
    }
    let isMounted = true;
    const runSequence = async () => {
      let current = 0;
      while (isMounted) {
        setActiveIdx(current);
        await new Promise(r => setTimeout(r, 4000));
        setActiveIdx(null);
        await new Promise(r => setTimeout(r, 1000));
        current = (current + 1) % data.length;
      }
    };
    runSequence();
    return () => {
      isMounted = false;
    };
  }, [data.length]);

  return (
    <div className="w-full flex items-center justify-center p-2 md:p-3 lg:p-4">
      <section className="w-full py-12 md:py-24 glass rounded-[2rem] md:rounded-[3.2rem] border border-[#d1dbd2] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden bg-slate-50/50 relative" id="competencies">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 md:px-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-emerald-600 font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-3">
                Unsere Kernkompetenzen
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-[1] mb-5 sm:mb-6">
                Kernkompetenzen <br className="hidden sm:block" /> mit System.
              </h2>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl font-medium tracking-tight">
                Agenturdenken trifft auf absolute Umsetzungsstärke. Wir liefern alles aus einer Hand.
              </p>
            </div>
            
            <motion.a
              href="#/services"
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-[1.5rem] sm:rounded-[2rem] flex items-center gap-4 transition-all shadow-xl sm:shadow-2xl shadow-slate-900/20 w-fit"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="relative z-10 flex flex-col">
                <span className="text-emerald-400 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] mb-0.5">Portfolio</span>
                <span className="text-white text-base sm:text-lg font-bold tracking-tighter">Leistungen</span>
              </div>
              <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-slate-900 group-hover:bg-white transition-colors duration-300">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 justify-center justify-items-center">
            {data.map((item, i) => (
              <FlipCard 
                key={i} 
                {...item} 
                index={i} 
                isAutoFlipped={activeIdx === i} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
