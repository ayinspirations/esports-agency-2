
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    "Keine Konzepte ohne Umsetzung",
    "Technik, Software und Content aus einer Hand",
    "Tiefe Gaming- & Zielgruppenexpertise",
    "Skalierbar von klein bis groß",
    "Messbar statt Bauchgefühl"
  ];

  return (
    <section className="py-32 relative z-10 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="text-emerald-600 font-black tracking-[0.4em] uppercase text-xs mb-6">Unser Versprechen</div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900 leading-none">Agenturdenken trifft <br /> Umsetzungsstärke.</h2>
            <div className="space-y-6 mb-12">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                  </div>
                  <span className="text-lg text-slate-700 font-bold">{point}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-3 text-slate-900 font-black hover:text-emerald-600 transition-colors group">
              Unsere Geschichte lesen <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 glass rounded-[2rem] overflow-hidden border-black/5">
                <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Esports Gaming" />
              </div>
              <div className="h-48 glass rounded-[2rem] overflow-hidden border-black/5 bg-emerald-500 flex items-center justify-center p-8 text-center text-white">
                <span className="text-3xl font-black tracking-tighter">100% PRAXISNAH.</span>
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="h-48 glass rounded-[2rem] overflow-hidden border-black/5 bg-slate-100 flex items-center justify-center p-8 text-center text-slate-900">
                <span className="text-3xl font-black tracking-tighter">SCALABLE.</span>
              </div>
              <div className="h-64 glass rounded-[2rem] overflow-hidden border-black/5">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Esports Arena" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
