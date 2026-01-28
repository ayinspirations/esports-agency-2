
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Trophy, Target, Lightbulb, Users, ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseDetailProps {
  onBack: () => void;
}

const images = [
  '/images/hagebau/slide-1.jpg',
  '/images/hagebau/slide-2.jpg',
  '/images/hagebau/slide-3.jpg',
  '/images/hagebau/slide-4.jpg',
  '/images/hagebau/slide-5.jpg',
  '/images/hagebau/slide-6.jpg',
];

export const CaseDetail: React.FC<CaseDetailProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;
    if (swipe) {
      if (offset.x > 0) prevSlide();
      else nextSlide();
    }
  };

  return (
    <div className="min-h-screen bg-[#d1dbd2] text-slate-900">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <img 
          src="/images/hagebau/hero-hagebau.jpg" 
          alt="Hagebau Bolay Project" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#d1dbd2]" />
        
        <div className="absolute bottom-12 left-6 right-6 md:left-14 md:right-14 z-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="flex flex-col">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1.5 bg-emerald-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white w-fit mb-6"
              >
                Recruiting
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[clamp(32px,8vw,120px)] font-black leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl"
              >
                Hagebau <br /> <span className="text-white/40 italic">Bolay.</span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button 
                onClick={() => onBack()}
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 rounded-full text-white text-xs md:text-base font-black uppercase tracking-[0.2em] transition-all group w-fit"
              >
                Boost Your Idea
              </button>
              <button 
                onClick={onBack}
                className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 rounded-full text-white text-xs md:text-base font-black uppercase tracking-[0.2em] transition-all group w-fit"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Zurück
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            <section>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8 italic text-slate-900/40">
                Über das Projekt
              </h2>
              <p className="text-lg md:text-2xl font-medium leading-relaxed text-slate-700">
                Für unseren Kunden haben wir mit dem Gaming Day 1.0 und Gaming Day 2.0 ein einzigartiges Eventformat geschaffen, das Gaming, Esport und interaktives Entertainment zu einem unvergesslichen Erlebnis verschmelzen ließ.
              </p>
              <p className="text-lg md:text-2xl font-medium leading-relaxed text-slate-700 mt-6">
                Ziel war es, eine Gaming-Welt zu erschaffen, in der Spaß, Teamgeist und Wettkampf sowohl für Neulinge als auch fortgeschrittene Spielende aufeinandertrafen.
              </p>
            </section>

            {/* Image Slider */}
            <div 
              className="relative group rounded-[2.5rem] overflow-hidden aspect-video bg-[#d1dbd2] shadow-2xl touch-pan-y"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-[#d1dbd2]">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                  />
                </AnimatePresence>
              </div>

              {/* Preload next and previous images */}
              <div className="hidden">
                <img src={images[(currentIndex + 1) % images.length]} alt="" />
                <img src={images[(currentIndex - 1 + images.length) % images.length]} alt="" />
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-30 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-30 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {images.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <section className="space-y-8">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Hochwertige Gaming-Setups, riesige Leinwände für Zuschauende und eine Atmosphäre voller Spannung – unser Team von der eSport Manufaktur setzte das Event mit höchster Präzision und Leidenschaft um. Wir konzipierten packende Turniere, installierten interaktive Gaming-Stationen und schufen eine professionelle Bühne für mitreißende Matches und unvergessliche Erlebnisse.
              </p>
            </section>

            <div className="pt-12 flex justify-center">
              <a 
                href="https://www.hagebau-bolay.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform"
              >
                <img 
                  src="/hagebau-logo.png" 
                  alt="Hagebau Bolay Logo" 
                  className="h-16 md:h-24 w-auto opacity-100 transition-opacity"
                />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                { title: 'Challenge', icon: <Target className="w-6 h-6" />, text: 'hagebau bolay suchte nach einer innovativen Lösung, um potenzielle Auszubildende und Young Professionals für sich als attraktiven Arbeitgeber zu gewinnen.' },
                { title: 'Solution', icon: <Lightbulb className="w-6 h-6" />, text: 'Ein Gaming-Event, das hagebau bolay in ein neues Licht rückte: Hochwertige Gaming-Stationen, aufregende Turniere und eine Atmosphäre, die zum Mitfiebern einlud.' },
              ].map((item, i) => (
                <div key={i} className="bg-white/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-900/5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-32">
              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  Kernleistungen
                </h3>
                <ul className="space-y-8">
                  {[
                    { title: 'Konzeptentwicklung', desc: 'Strategische Zielgruppenausrichtung.' },
                    { title: 'Infrastruktur', desc: 'Modernste Gaming-Technik.' },
                    { title: 'Management', desc: 'Professionelles Turniersystem.' },
                    { title: 'Kommunikation', desc: 'Live-Interaktion & Vernetzung.' }
                  ].map((item, i) => (
                    <li key={i} className="group">
                      <h4 className="font-black uppercase tracking-widest text-xs text-emerald-400 mb-1">{item.title}</h4>
                      <p className="text-white/70 font-bold">{item.desc}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-slate-900">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Ergebnis</div>
                      <div className="text-2xl font-black text-white">+450 Spieler</div>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">
                    31 ausgewählte Gäste erlebten einen Tag voller Action und bekamen spannende Einblicke in die Arbeitswelt von hagebau bolay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
