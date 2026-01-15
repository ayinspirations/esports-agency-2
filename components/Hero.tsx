
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
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 2,
    type: 'Live Scouting',
    title: 'E-Talent Hub',
    progress: 75,
    icon: <Target className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />,
    img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: 3,
    type: 'Event Match',
    title: 'Masters Series',
    progress: 95,
    icon: <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5 text-black" />,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  }
];

interface HeroProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  const springConfig = {
    type: "spring" as const,
    stiffness: 50,
    damping: 22,
    mass: 1.2
  };

  const visibleCards = [
    notifications[index],
    notifications[(index + 1) % notifications.length],
    notifications[(index + 2) % notifications.length],
  ];

  return (
    <section className="relative w-full flex items-center justify-center p-2 md:p-3 lg:p-4">
      <div className="relative w-full min-h-[85vh] md:min-h-[90vh] lg:h-[96vh] rounded-[2rem] md:rounded-[3.2rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] bg-slate-900 border border-black/5 flex flex-col">
        
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-gaming-competition-at-an-arena-41484-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[85%] h-full bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-slate-900/80" />
        </div>

        <div className="relative z-10 flex-1 w-full px-5 sm:px-10 md:px-24 py-12 md:py-32 flex flex-col justify-between overflow-hidden">
          
          <div className="h-20 md:h-12" />

          <div className="max-w-6xl mb-12 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] sm:text-5xl md:text-7xl lg:text-[100px] font-bold text-white leading-[0.9] sm:leading-[0.95] md:leading-[1] tracking-tighter"
            >
              Eventtechnik trifft <br className="hidden sm:block" />
              Gamification – <br className="hidden sm:block" />
              <span className="text-white/60">Erlebnisse mit System.</span>
            </motion.h1>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center lg:items-end w-full">
            
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] h-40 sm:h-48 md:h-56 flex items-end order-2 lg:order-1">
              <div className="relative w-full h-28 sm:h-32 md:h-40">
                <AnimatePresence initial={false}>
                  {visibleCards.map((notif, i) => (
                    <motion.div
                      key={notif.id}
                      initial={{ opacity: 0, y: -20, scale: 0.85, x: 20, filter: "blur(10px)" }}
                      animate={{
                        zIndex: 10 - i,
                        scale: 1 - i * 0.06,
                        y: -i * (window.innerWidth < 640 ? 12 : 28),
                        x: i * (window.innerWidth < 640 ? 8 : 16),
                        opacity: i === 0 ? 1 : i === 1 ? 0.4 : 0.1,
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
                      className="absolute bottom-0 left-0 w-full glass bg-white/10 border-white/20 p-3 sm:p-5 md:p-7 rounded-[1.5rem] sm:rounded-[2.8rem] shadow-2xl backdrop-blur-3xl"
                    >
                      <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0 shadow-lg relative">
                          <img src={notif.img} alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 sm:mb-2">
                            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 rounded-md flex items-center justify-center shadow-sm">
                              {notif.icon}
                            </div>
                            <span className="text-[8px] sm:text-[11px] font-black text-white uppercase tracking-[0.2em] opacity-80">{notif.type}</span>
                          </div>
                          <div className="text-white text-sm sm:text-base md:text-lg font-bold tracking-tight leading-tight">
                            Event: <span className="text-emerald-400">{notif.title}</span>
                          </div>
                          <div className="flex items-center gap-2 md:gap-3 mt-1.5 sm:mt-3 md:mt-4">
                            <div className="flex-1 h-1 sm:h-1.5 md:h-2 bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                initial={false} 
                                animate={{ width: `${notif.progress}%` }} 
                                transition={{ duration: 2, ease: "circOut" }} 
                                className="h-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" 
                              />
                            </div>
                            <span className="text-emerald-400 font-black text-[9px] sm:text-xs">{notif.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-5 sm:space-y-6 md:space-y-8 w-full order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-white text-base sm:text-lg md:text-2xl font-bold max-w-xl leading-snug sm:leading-relaxed tracking-tight"
              >
                Wir schaffen Erlebnisse, die Marken aktivieren, Zielgruppen begeistern und datenbasierte Ergebnisse liefern.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto"
              >
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-slate-900 px-6 py-3.5 sm:px-10 sm:py-5 rounded-full font-black text-lg sm:text-xl lg:text-2xl transition-all shadow-[0_0_50px_rgba(52,211,153,0.3)] hover:scale-105 active:scale-95 tracking-tighter text-center"
                >
                  Termin vereinbaren
                </a>

                <a 
                  href="#services" 
                  onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
                  className="group inline-flex items-center gap-2 text-white/90 hover:text-white font-bold text-base sm:text-xl transition-all hover:translate-x-1 tracking-tighter"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
