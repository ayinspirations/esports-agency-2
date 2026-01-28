
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Trophy, Target, Lightbulb, Users } from 'lucide-react';

interface CaseDetailProps {
  onBack: () => void;
}

export const CaseDetail: React.FC<CaseDetailProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#d1dbd2] text-slate-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src="/t-systems-bg.jpg" 
          alt="Hagebau Bolay Project" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#d1dbd2]" />
        
        <div className="absolute bottom-12 left-6 right-6 md:left-14 md:right-14 z-20">
          <div className="flex items-end justify-between gap-8">
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
                className="text-[clamp(40px,8vw,120px)] font-black leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl"
              >
                Hagebau <br /> <span className="text-white/40 italic">Bolay.</span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <button 
                onClick={() => onBack()}
                className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 rounded-full text-white font-black uppercase tracking-[0.2em] transition-all group w-fit"
              >
                Boost Your Idea
              </button>
              <button 
                onClick={onBack}
                className="flex items-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 rounded-full text-white font-black uppercase tracking-[0.2em] transition-all group w-fit"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Zurück
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 italic text-slate-900/40">
                Über das Projekt
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-700">
                Für unseren Kunden haben wir mit dem Gaming Day 1.0 und Gaming Day 2.0 ein einzigartiges Eventformat geschaffen, das Gaming, Esport und interaktives Entertainment zu einem unvergesslichen Erlebnis verschmelzen ließ.
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-slate-700 mt-6">
                Ziel war es, eine Gaming-Welt zu erschaffen, in der Spaß, Teamgeist und Wettkampf sowohl für Neulinge als auch fortgeschrittene Spielende aufeinandertrafen.
              </p>
            </section>

            {/* Image Slider */}
            <div className="relative group rounded-[2.5rem] overflow-hidden aspect-video bg-slate-900 shadow-2xl">
              <div className="absolute inset-0 flex transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" id="slider-track">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="w-full h-full shrink-0">
                    <img 
                      src={`/images/hagebau/slide-${num}.jpg`} 
                      alt={`Gaming Day ${num}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                id="prev-slide"
                type="button"
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-30"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button 
                id="next-slide"
                type="button"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-30"
              >
                <ArrowLeft className="w-6 h-6 rotate-180" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <button 
                    key={i} 
                    type="button"
                    className="slider-dot w-2 h-2 rounded-full bg-white/20 transition-all" 
                    data-index={i} 
                  />
                ))}
              </div>

              <script dangerouslySetInnerHTML={{ __html: `
                (function() {
                  const setupSlider = () => {
                    let currentSlide = 0;
                    const totalSlides = 6;
                    const track = document.getElementById('slider-track');
                    const dots = document.querySelectorAll('.slider-dot');
                    const nextBtn = document.getElementById('next-slide');
                    const prevBtn = document.getElementById('prev-slide');
                    let interval;

                    if (!track || !nextBtn || !prevBtn) {
                      setTimeout(setupSlider, 100);
                      return;
                    }

                    function updateSlider() {
                      track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
                      dots.forEach((dot, i) => {
                        dot.style.backgroundColor = i === currentSlide ? 'white' : 'rgba(255,255,255,0.2)';
                        dot.style.width = i === currentSlide ? '24px' : '8px';
                      });
                    }

                    function next() {
                      currentSlide = (currentSlide + 1) % totalSlides;
                      updateSlider();
                    }

                    function prev() {
                      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                      updateSlider();
                    }

                    function startAuto() {
                      stopAuto();
                      interval = setInterval(next, 3000);
                    }

                    function stopAuto() {
                      if (interval) clearInterval(interval);
                    }

                    nextBtn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); next(); startAuto(); };
                    prevBtn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); prev(); startAuto(); };
                    
                    dots.forEach((dot, i) => {
                      dot.onclick = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        currentSlide = i;
                        updateSlider();
                        startAuto();
                      };
                    });

                    updateSlider();
                    startAuto();
                    
                    const container = track.parentElement;
                    container.onmouseenter = stopAuto;
                    container.onmouseleave = startAuto;
                  };

                  if (document.readyState === 'complete') {
                    setupSlider();
                  } else {
                    window.addEventListener('load', setupSlider);
                  }
                })();
              `}} />
            </div>

            <section className="space-y-8">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Hochwertige Gaming-Setups, riesige Leinwände für Zuschauende und eine Atmosphäre voller Spannung – unser Team von der eSport Manufaktur setzte das Event mit höchster Präzision und Leidenschaft um. Wir konzipierten packende Turniere, installierten interaktive Gaming-Stationen und schufen eine professionelle Bühne für mitreißende Matches und unvergessliche Erlebnisse.
              </p>
            </section>

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

            {/* Logo at the bottom of main content */}
            <div className="pt-24 flex justify-center">
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
