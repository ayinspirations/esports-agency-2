
import React from 'react';
import { motion } from 'framer-motion';

const BeautifulAppear = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollTextSection: React.FC = () => {
  return (
    <section className="py-48 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 flex justify-around opacity-[0.05] pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-px h-full bg-slate-900" />
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-40">
        <div>
          <div className="mb-12 flex flex-col items-center gap-4">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 40 }}
               className="h-1 bg-emerald-500 rounded-full"
             />
             <span className="text-emerald-600 text-xs font-black tracking-[0.4em] uppercase">Der Status Quo</span>
          </div>
          <BeautifulAppear>
            <h2 className="text-4xl md:text-7xl font-black text-center leading-[1.05] tracking-tighter text-slate-900">
              Reichweite reicht nicht mehr. <br />
              <span className="text-slate-400">Marketing erzeugt Sichtbarkeit – aber keine Interaktion.</span>
            </h2>
          </BeautifulAppear>
        </div>

        <div>
          <div className="mb-12 flex flex-col items-center gap-4">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 40 }}
               className="h-1 bg-emerald-500 rounded-full"
             />
             <span className="text-emerald-600 text-xs font-black tracking-[0.4em] uppercase">Unsere Vision</span>
          </div>
          <BeautifulAppear>
            <h2 className="text-4xl md:text-7xl font-black text-center leading-[1.05] tracking-tighter text-slate-900">
              Wir aktivieren Ihre Zielgruppe. <br />
              <span className="text-emerald-500">Communities aufbauen & messbare Ergebnisse liefern.</span>
            </h2>
          </BeautifulAppear>
        </div>
      </div>
    </section>
  );
};
