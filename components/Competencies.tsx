
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Gamepad2, Trophy, Monitor, Cpu, PlayCircle, ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  isAutoFlipped: boolean;
  onNavigate: (page: 'home' | 'services') => void;
}

const CompetencyCard: React.FC<CardProps> = ({ title, icon, description, image, isAutoFlipped, onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Flip-Logik für Desktop: Auto-Sequenz oder Hover
  const isFlipped = (isHovered || isAutoFlipped) && window.innerWidth >= 1024;

  const titleFontSize = "text-[clamp(18px,4.5vw,26px)] lg:text-[clamp(13px,1.1vw,18px)]";

  const handleInteraction = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      onNavigate('services');
    }
  };

  return (
    <div 
      className="relative w-full h-full perspective-1000 cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleInteraction}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden shadow-xl border border-black/5">
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/10 to-transparent" />
          
          <div className="absolute bottom-8 left-7 right-7 lg:bottom-10 lg:left-8 lg:right-8">
            <div className="flex items-center gap-3 mb-5 lg:mb-6">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
                {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-1/2 h-1/2' })}
              </div>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <div className="min-h-[2.5rem] flex items-end">
              <h3 className={`${titleFontSize} font-black text-white tracking-tight uppercase leading-[1.1] whitespace-normal break-words`}>
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* BACK SIDE (Desktop Only) */}
        <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-white p-8 lg:p-10 flex flex-col shadow-2xl border border-black/5 rotateY-180">
          <div className="w-10 h-10 lg:w-14 lg:h-14 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-6 lg:mb-8 shrink-0">
            {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-1/2 h-1/2' })}
          </div>
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="min-h-[2.5rem] mb-4 flex items-start">
              <h3 className={`${titleFontSize} font-black text-slate-900 tracking-[0.05em] uppercase leading-[1.1] whitespace-normal break-words`}>
                {title}
              </h3>
            </div>
            <p className="text-slate-500 text-[clamp(14px,1.2vw,16px)] lg:text-[clamp(11px,0.85vw,14px)] font-bold leading-relaxed tracking-tight">
              {description}
            </p>
          </div>

          <div className="mt-4 pt-4 lg:mt-6 lg:pt-6 border-t border-slate-100 flex items-center justify-between shrink-0">
            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] text-emerald-500">Mehr erfahren</span>
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface CompetenciesProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const Competencies: React.FC<CompetenciesProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollXProgress } = useScroll({
    container: scrollContainerRef
  });

  const data = [
    { title: "Gamification", icon: <Gamepad2 />, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800", description: "Interaktive Erlebnisse, die Beteiligung fördern und Marken emotional verankern." },
    { title: "Esports Events", icon: <Trophy />, image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", description: "Von Turnierformaten bis zu professionellen Wettbewerben – strukturiert geplant und umgesetzt." },
    { title: "Eventtechnik", icon: <Monitor />, image: "/images/competencies/eventtechnik.jpg", description: "Leistungsstarke Technik-Setups für Messen, Events und Großveranstaltungen." },
    { title: "Plattformen", icon: <Cpu />, image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200", description: "Skalierbare Software- und Turnierlösungen für Communities und Aktivierungen." },
    { title: "Streaming", icon: <PlayCircle />, image: "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=800", description: "Professionelle Live- und Broadcast-Produktionen für digitale Reichweite und Sichtbarkeit." }
  ];

  // Auto-Flip logic for desktop
  useEffect(() => {
    if (!isInView || window.innerWidth < 1024) return;

    const startDelay = setTimeout(() => {
      setActiveIndex(0);
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % data.length);
      }, 4500);
      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(startDelay);
  }, [isInView, data.length]);

  // Sync scroll position with indicator for mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || window.innerWidth >= 1024) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const width = container.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex items-center justify-center" ref={sectionRef} id="competencies">
      <section className="w-full py-24 md:py-32 lg:py-40 bg-transparent relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-14">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24 lg:mb-32">
            <div className="max-w-3xl">
              <div className="text-emerald-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8">
                Kernkompetenzen
              </div>
              <h2 className="text-[clamp(34px,6vw,84px)] font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
                Wir machen Erfolg <br /> erlebbar.
              </h2>
              <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto" />
            </div>
          </div>
          
          {/* MOBILE SLIDER: Native Snap Scrolling */}
          <div className="lg:hidden relative overflow-visible">
            <div 
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-2 -mx-2 touch-auto overscroll-x-contain"
              style={{ 
                scrollPaddingLeft: '8px', 
                scrollPaddingRight: '8px',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory'
              }}
            >
              {data.map((item, i) => (
                <div key={i} className="min-w-[85vw] aspect-[4/5.5] sm:aspect-[4/5] snap-center">
                  <CompetencyCard 
                    {...item} 
                    isAutoFlipped={false} 
                    onNavigate={onNavigate}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-3 mt-10">
              {data.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${activeIndex === i ? 'w-10 bg-emerald-500' : 'w-2 bg-slate-400/20'}`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8">
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[1/1.55] min-h-[460px]"
              >
                <CompetencyCard 
                  {...item} 
                  isAutoFlipped={activeIndex === i} 
                  onNavigate={onNavigate}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
