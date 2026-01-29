import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Trophy, Target, Lightbulb, Users } from 'lucide-react';

interface TSystemsDetailProps {
  onBack: () => void;
}

export const TSystemsDetail: React.FC<TSystemsDetailProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#d1dbd2] text-slate-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src="/images/t-systems/hero.jpg" 
          alt="T-Systems Gaming Platform" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#d1dbd2]" />
        
        <div className="absolute bottom-16 left-6 right-6 md:left-14 md:right-14 z-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10 md:gap-8">
            <div className="flex flex-col w-full md:w-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[clamp(36px,9vw,120px)] font-black leading-[0.85] tracking-tighter uppercase text-white drop-shadow-2xl"
              >
                T-Systems <br /> <span className="text-white/40 italic">Gaming.</span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-end gap-3 w-full md:w-auto"
            >
              <button 
                onClick={onBack}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-white text-[11px] md:text-base font-black uppercase tracking-[0.2em] transition-all group w-fit md:w-auto min-w-[150px] md:min-w-0"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
                Gaming-Plattform für T-Systems - Employer Branding für Tech-Talente
              </h2>
              <p className="text-lg md:text-2xl font-medium leading-relaxed text-slate-700">
                Für T-Systems haben wir eine maßgeschneiderte Gaming-Plattform entwickelt, um das Unternehmen als attraktiven Arbeitgeber im technischen Umfeld zu positionieren. Ziel war es, technikaffine Schüler anzusprechen und sie auf spielerische Weise für IT und technische Berufe zu begeistern.
              </p>
              <p className="text-lg md:text-2xl font-medium leading-relaxed text-slate-700 mt-6">
                Die Plattform bot digitale Qualifikationsturniere, spannende Inhalte und gezielte Interaktionen - perfekt zugeschnitten auf die junge Zielgruppe. Unser Team der e-Sport Manufaktur kümmerte sich um die gesamte Umsetzung: von der Konzeption und Gestaltung bis hin zur technischen Umsetzung und Betreuung.
              </p>
            </section>

            <section className="space-y-8">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Neben der digitalen Aktivierung organisierten wir am 10. Dezember 2024 ein großes Live-Finale, bei dem die Besucher nicht nur zuschauen, sondern an Spielstationen auch selbst aktiv werden und die Gaming-Welt hautnah erleben konnten. Mit hochwertigen Setups, großen Screens und interaktiven Elementen wurde ein echtes Erlebnis geschaffen, das Marke, Technologie und Community nachhaltig verbindet.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Durch ein umfassendes Eventpaket haben wir es T-Systems ermöglicht, potenzielle Talente auf eine moderne und interaktive Weise anzusprechen.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                { title: 'Konzept und Umsetzung', icon: <Target className="w-6 h-6" />, text: 'Entwicklung einer Gaming-Plattform, die speziell auf die Zielgruppe zugeschnitten ist.' },
                { title: 'Finale vor Ort', icon: <Users className="w-6 h-6" />, text: 'Spannendes Live-Finale mit aktiven Gaming-Stationen für Zuschauer und Community-Erlebnisse.' },
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
            
            <div className="pt-12 flex justify-center">
              <a href="https://www.t-systems.com/" target="_blank" rel="noopener noreferrer">
                <img src="/logos/T-Systems_Logo_2024.svg.png" alt="T-Systems Logo" className="h-16 md:h-24 w-auto opacity-100 hover:scale-105 transition-transform" />
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
                    { title: 'Qualifikationsturniere', desc: 'Digitale Turniere zur Steigerung des Engagements.' },
                    { title: 'Employer Branding', desc: 'Modernes Eventformat als innovative Arbeitgebermarke.' },
                    { title: 'Zielgruppe', desc: 'Speziell auf Tech-Talente zugeschnitten.' },
                    { title: 'Full Service', desc: 'Von Konzeption bis technischer Betreuung.' }
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
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Status</div>
                      <div className="text-2xl font-black text-white">Live-Event</div>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm font-medium leading-relaxed">
                    Ein echtes Erlebnis, das Marke, Technologie und Community nachhaltig verbindet.
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
