
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
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, scrollToSection }) => {
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
              <div className="relative w-full h-24 md:h-36">
                <AnimatePresence initial={false}>
                  {visibleCards.map((notif, i) => (
                    <motion.div
                      key={notif.id}
                      initial={{ opacity: 0, y: -20, scale: 0.85, x: 20, filter: "blur(10px)" }}
                      animate={{
                        zIndex: 10 - i,
                        scale: 1 - i * 0.06,
                        y: -i * 24,
                        x: i * 14,
                        opacity: i === 0 ? 1 : i === 1 ? 0.3 : 0.05,
                        filter: `blur(${i * 2}px)`,
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: 80, 
                        scale: 0.9,
                        filter: "blur(15px)",
                        transition: { duration: 1, ease: [0.32, 0, 0.67, 0] } 
                      }}
                      transition={springConfig}
                      className="absolute bottom-0 left-0 w-full glass bg-white/5 border-white/10 p-4 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl backdrop-blur-2xl"
                    >
                      <div className="flex items-center gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-emerald-400/50 shrink-0 shadow-lg relative bg-slate-800">
                          <img 
                            src={notif.img} 
                            alt="Avatar" 
                            className="w-full h-full object-cover" 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-emerald-500 rounded flex items-center justify-center">
                              {notif.icon}
                            </div>
                            <span className="text-[7px] md:text-[9px] font-black text-white uppercase tracking-[0.2em] opacity-60">{notif.type}</span>
                          </div>
                          <div className="text-white text-[11px] md:text-sm font-bold tracking-tight">
                            Event: <span className="text-emerald-400">{notif.title}</span>
                          </div>
                          <div className="flex items-center gap-3 mt-2 md:mt-3">
                            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                initial={false} 
                                animate={{ width: `${notif.progress}%` }} 
                                transition={{ duration: 2, ease: "circOut" }} 
                                className="h-full bg-emerald-400" 
                              />
                            </div>
                            <span className="text-emerald-400 font-black text-[8px] md:text-[10px]">{notif.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
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
                  onClick={() => scrollToSection?.('contact')}
                  className="bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-black text-base sm:text-xl transition-all shadow-[0_0_50px_rgba(52,211,153,0.3)] hover:scale-105 active:scale-95 tracking-tighter"
                >
                  Termin vereinbaren
                </button>
                <button 
                  onClick={() => onNavigate('services')}
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
