
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Trophy, ArrowRight } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'Live Performance',
    title: 'Final Arena 2024',
    progress: 88,
    icon: <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />,
    img: '/images/avatars/user-1.jpg' 
  },
  {
    id: 2,
    type: 'Live Scouting',
    title: 'E-Talent Hub',
    progress: 75,
    icon: <Target className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />,
    img: '/images/avatars/user-2.jpg'
  },
  {
    id: 3,
    type: 'Event Match',
    title: 'Masters Series',
    progress: 95,
    icon: <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />,
    img: '/images/avatars/user-3.jpg'
  }
];

interface HeroProps {
  onNavigate: (page: 'home' | 'services') => void;
  scrollToSection?: (id: string) => void;
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, scrollToSection, onOpenBooking }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!notifications || notifications.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  if (!notifications || notifications.length === 0) {
    return null;
  }

  const springConfig = {
    type: "spring" as const,
    stiffness: 50,
    damping: 22,
    mass: 1.2
  };

  const visibleCards = [
    notifications[index % notifications.length],
    notifications[(index + 1) % notifications.length],
    notifications[(index + 2) % notifications.length],
  ].filter(Boolean);

  return (
    <section className="relative w-full flex items-center justify-center p-3 md:p-5 lg:p-6 pb-0">
      <div className="relative w-full min-h-[85vh] md:min-h-[90vh] lg:h-[94vh] rounded-[2.5rem] md:rounded-[4.5rem] overflow-hidden shadow-[0_50px_120px_-30px_rgba(0,0,0,0.6)] bg-[#020617] border border-black/10 flex flex-col">
        
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[#020617]" />
          <div 
            className="absolute -top-[10%] -left-[5%] w-[60%] h-[70%] opacity-60"
            style={{
              background: 'radial-gradient(circle at 20% 20%, #00818d 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#061226]/40 to-[#020617]" />
          
          <div 
            className="absolute top-0 right-0 w-[75%] h-full opacity-40"
            style={{
              backgroundImage: `repeating-linear-gradient(115deg, transparent, transparent 38px, rgba(20, 184, 166, 0.5) 38px, rgba(20, 184, 166, 0.5) 39.5px)`,
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%), linear-gradient(to left, black 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%), linear-gradient(to left, black 0%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          />

          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay">
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 flex-1 w-full px-6 sm:px-10 md:px-20 lg:px-28 py-16 lg:py-24 flex flex-col justify-between overflow-hidden">
          <div className="h-12 md:h-16" />
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] sm:text-[7vw] md:text-[6vw] lg:text-[84px] xl:text-[96px] font-bold text-white leading-[0.95] tracking-tighter max-w-5xl text-left"
            >
              Events und <br />
              Aktivierungen, <br />
              <span className="bg-gradient-to-r from-[#2dd4bf] to-[#84cc16] bg-clip-text text-transparent font-bold">
                <span className="whitespace-nowrap">die in Erinnerung</span> <br /> 
                bleiben.
              </span>
            </motion.h1>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-0 items-end w-full">
            <div className="relative w-full max-w-[340px] md:max-w-[420px] h-32 md:h-48 flex items-end">
              {/* Notifications removed */}
            </div>

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-8 md:space-y-10 w-full">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-white text-xl sm:text-2xl md:text-2xl xl:text-[28px] font-bold max-w-lg leading-[1.2] tracking-tight"
              >
                Wir schaffen Erlebnisse, die Marken aktivieren, Zielgruppen begeistern und datenbasierte Ergebnisse liefern.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center lg:justify-end gap-6 sm:gap-8 w-full"
              >
                <button 
                  onClick={() => onOpenBooking?.()}
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-black text-base sm:text-xl transition-all shadow-[0_0_50px_rgba(52,211,153,0.3)] hover:scale-105 active:scale-95 tracking-tighter"
                >
                  Termin vereinbaren
                </button>
                <button 
                  onClick={() => scrollToSection?.('competencies')}
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white font-bold text-sm sm:text-lg transition-all hover:translate-x-1 tracking-tighter"
                >
                  Mehr erfahren
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
