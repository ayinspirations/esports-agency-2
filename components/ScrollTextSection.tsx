
import React from 'react';
import { motion } from 'framer-motion';

const BeautifulAppear = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollTextSection: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-2 md:p-3 lg:p-4">
      <section className="w-full bg-white rounded-[2.5rem] md:rounded-[3.2rem] border border-[#d1dbd2] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative p-8 md:p-16 lg:p-24">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row mb-24 lg:mb-36">
          <div className="w-full lg:w-1/2 flex items-start justify-start pb-10 lg:pb-0">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center rotate-12 shadow-xl shadow-emerald-500/20">
                  <span className="text-white text-[14px] font-black italic">!</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-emerald-600 text-[10px] font-black tracking-[0.4em] uppercase">Status Quo</span>
                  <div className="h-0.5 w-8 bg-emerald-500/20 mt-1" />
                </div>
             </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <BeautifulAppear>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-12">
                eSports Agency – <span className="text-slate-400">ist die Agentur für mutige</span> Markenaktivierung.
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-500 font-medium leading-tight tracking-tight max-w-2xl">
                Wir schaffen Erlebnisse, die Marken aktivieren, Zielgruppen begeistern und datenbasierte Ergebnisse liefern – durch die Kombination aus Gamification, Technik und Software.
              </p>
            </BeautifulAppear>
          </div>
        </div>

        {/* Staggered Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[550px] lg:h-[700px] bg-slate-950 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5"
          >
            <div className="px-4 py-2 w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur text-[10px] font-black uppercase tracking-widest text-white/60">Strategie</div>
            <div className="relative z-10">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mb-6 animate-pulse" />
              <h3 className="text-white text-3xl lg:text-4xl font-black tracking-tighter mb-4 leading-none">Strategien für Marken-Identität.</h3>
              <p className="text-white/40 text-sm lg:text-base font-medium">Konzepte, die einzigartige Marken stärken und ihre Präsenz definieren.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[450px] lg:h-[550px] bg-slate-900 rounded-[2.5rem] relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-75 grayscale-[0.2]"
              alt="Growth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
            <div className="absolute top-8 left-8">
               <div className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur text-[10px] font-black uppercase tracking-widest text-white/90">Growth</div>
            </div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mb-4" />
              <h3 className="text-white text-3xl font-black tracking-tighter mb-2 leading-none">Messbares <br /> Wachstum.</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[600px] lg:h-[750px] bg-slate-100 rounded-[2.5rem] relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              alt="Creative"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute top-8 left-8">
               <div className="px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur text-[10px] font-black uppercase tracking-widest text-white/90">Creative</div>
            </div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mb-6" />
              <h3 className="text-white text-4xl font-black tracking-tighter mb-4 leading-none">Kreative <br /> Prozesse.</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[480px] lg:h-[580px] bg-[#f2f6f3] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group border border-slate-300/30 shadow-sm"
          >
            <div className="px-4 py-2 w-fit rounded-full border border-slate-400/20 bg-white/50 backdrop-blur text-[10px] font-black uppercase tracking-widest text-slate-500">Powerfull</div>
            <div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full mb-4" />
              <h3 className="text-slate-900 text-3xl font-black tracking-tighter mb-4 leading-none">A dedicated team <br /> behind success.</h3>
              <p className="text-slate-500 text-sm lg:text-base font-medium mb-8">Wir sprechen die Sprache der Gamer und verstehen ihre Kultur.</p>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#f2f6f3] overflow-hidden shadow-lg transition-transform hover:scale-110 hover:z-20">
                    <img src={`https://i.pravatar.cc/150?u=target${i}`} alt="Target" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#f2f6f3] bg-emerald-500 flex items-center justify-center text-white text-[10px] font-black shadow-lg">
                  +1k
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
