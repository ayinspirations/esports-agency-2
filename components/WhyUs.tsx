
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  return (
    <section className="w-full flex items-center justify-center py-24 md:py-32 lg:py-40">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14">
        <div className="flex flex-col items-center text-center w-full">
          {/* Label */}
          <div className="text-emerald-500 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-12">
            Unser Versprechen
          </div>
          
          {/* Main Headline */}
          <h2 className="text-[clamp(36px,6vw,90px)] font-black text-slate-950 tracking-tighter leading-[0.95] mb-20 md:mb-32 max-w-5xl">
            Strategisches Agenturdenken trifft konsequente Umsetzung.
          </h2>
          
          {/* Content Layout - Apple Style Column Grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 text-left w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                Wir entwickeln keine Konzepte für Präsentationen, sondern realisieren Erlebnisse. Strategie, Technik, Software und Content greifen nahtlos ineinander.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed tracking-tight">
                Unsere Erfahrung reicht von Marken- und Unternehmenskommunikation über Events und Aktivierungen bis hin zu digitalen Formaten. Ein tiefes Zielgruppenverständnis sorgt für Relevanz.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed tracking-tight">
                Unsere Lösungen sind skalierbar – vom kompakten Aktivierungsformat bis zur groß angelegten Inszenierung. Entscheidungen basieren auf Daten, nicht auf Bauchgefühl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
