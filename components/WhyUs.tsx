import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  return (
    <section className="w-full flex items-center justify-center py-10 md:py-0">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-start w-full">
          {/* Label */}
          <div className="text-emerald-600 font-black tracking-[0.4em] uppercase text-[clamp(10px,1vw,12px)] mb-6 md:mb-10">
            Unser Versprechen
          </div>
          
          {/* Main Headline - Noch massiver für Apple-Impact */}
          <h2 className="text-[clamp(36px,6vw,90px)] font-black text-slate-950 tracking-tighter leading-[0.9] mb-12 md:mb-16 max-w-5xl">
            Strategisches Agenturdenken trifft operative Umsetzung.
          </h2>
          
          {/* Content Layout */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start w-full">
            {/* Lead Intro */}
            <div className="md:col-span-5">
              <p className="text-[clamp(20px,2.2vw,34px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Wir entwickeln keine Konzepte, die in Präsentationen enden, sondern realisiert werden. Strategie, Technik, Software und Content greifen nahtlos ineinander.
              </p>
            </div>

            {/* Detailed Body Text */}
            <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
              <p className="text-[clamp(16px,1.1vw,20px)] text-slate-600 font-medium leading-[1.5] tracking-tight">
                Unsere Erfahrung reicht von Marken- und Unternehmenskommunikation über Events und Aktivierungen bis hin zu digitalen Formaten. Tiefes Zielgruppenverständnis stellt sicher, dass Maßnahmen relevant sind.
              </p>
              <p className="text-[clamp(16px,1.1vw,20px)] text-slate-600 font-medium leading-[1.5] tracking-tight">
                Die Umsetzung ist skalierbar, vom kompakten Format bis zur groß angelegten Aktivierung. Entscheidungen basieren auf messbaren Ergebnissen, nicht auf Bauchgefühl.
              </p>
              
              {/* CTA - Klar abgegrenzt und gut sichtbar */}
              <div className="pt-6 md:pt-10 border-t border-slate-900/10 mt-4">
                <motion.button 
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-emerald-600 font-black tracking-tighter text-xl uppercase group transition-colors"
                >
                  <span>Unsere Geschichte lesen</span>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
