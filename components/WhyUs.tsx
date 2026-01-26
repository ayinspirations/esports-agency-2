
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start w-full">
          {/* Label */}
          <div className="text-emerald-600 font-black tracking-[0.4em] uppercase text-[clamp(10px,1vw,12px)] mb-8 md:mb-12">
            Unser Versprechen
          </div>
          
          {/* Main Headline */}
          <h2 className="text-[clamp(36px,6vw,90px)] font-black text-slate-950 tracking-tighter leading-[0.9] mb-12 md:mb-20 max-w-5xl">
            Strategisches Agenturdenken trifft operative Umsetzung.
          </h2>
          
          {/* Content Layout */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start w-full">
            {/* Lead Intro */}
            <div className="md:col-span-5">
              <p className="text-[clamp(20px,2.2vw,34px)] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Wir entwickeln keine Konzepte, die in Präsentationen enden, sondern realisiert werden. Strategie, Technik, Software und Content greifen nahtlos ineinander.
              </p>
            </div>

            {/* Detailed Body Text */}
            <div className="md:col-span-7 flex flex-col gap-8 md:gap-10">
              <p className="text-[clamp(16px,1.1vw,20px)] text-slate-600 font-medium leading-[1.5] tracking-tight">
                Unsere Erfahrung reicht von Marken- und Unternehmenskommunikation über Events und Aktivierungen bis hin zu digitalen Formaten. Tiefes Zielgruppenverständnis stellt sicher, dass Maßnahmen relevant sind.
              </p>
              <p className="text-[clamp(16px,1.1vw,20px)] text-slate-600 font-medium leading-[1.5] tracking-tight">
                Die Umsetzung ist skalierbar, vom kompakten Format bis zur groß angelegten Aktivierung. Entscheidungen basieren auf messbaren Ergebnissen, nicht auf Bauchgefühl.
              </p>
              
              {/* CTA */}
              <div className="pt-8 md:pt-12 border-t border-slate-900/10 mt-4">
                <motion.button 
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-emerald-600 font-black tracking-tighter text-xl uppercase group transition-colors"
                >
                  <span>Unsere Geschichte lesen</span>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-6 h-6" />
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
