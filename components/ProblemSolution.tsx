
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

// Define props for ProblemSolution component
interface ProblemSolutionProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-14 py-12 sm:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Headline, Subtext, CTA & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between py-2"
          >
            <div className="mb-10 lg:mb-0">
              <motion.h2 
                className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[0.95] tracking-tighter mb-6 sm:mb-8"
              >
                Reichweite <br />
                reicht nicht <br className="hidden sm:block" />
                mehr.
              </motion.h2>
              <motion.p 
                className="text-slate-500 text-base sm:text-xl font-medium tracking-tight max-w-sm mb-8 sm:mb-10"
              >
                Klassische Marketingmaßnahmen erzeugen Sichtbarkeit – aber keine echte Interaktion.
              </motion.p>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-400 text-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-xl transition-all shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 tracking-tighter"
              >
                <ArrowUpRight className="w-5 h-5" />
                Termin vereinbaren
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-12">
              <div>
                <span className="text-slate-400 text-[9px] sm:text-xs font-black uppercase tracking-[0.2em] block mb-2 sm:mb-3">Interaktion</span>
                <span className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tighter">98%</span>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] sm:text-xs font-black uppercase tracking-[0.2em] block mb-2 sm:mb-3">Erfolge</span>
                <span className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tighter">1M+</span>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Image Card */}
          <div className="lg:col-span-4 h-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto h-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group bg-black"
            >
              <img 
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1200" 
                alt="Gaming Interaction" 
                className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
              />
              
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-auto glass bg-white p-3 sm:p-5 md:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-white/40 flex items-center gap-3 sm:gap-4"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="pr-2 sm:pr-4">
                  <div className="text-slate-400 text-[8px] sm:text-[9px] font-black uppercase tracking-widest leading-none mb-1">Aktivierung</div>
                  <div className="text-slate-900 text-sm sm:text-lg font-bold tracking-tight leading-none">
                    Engagement
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Clean Content Card */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-slate-50/50 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 border border-[#d1dbd2] shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-8 sm:mb-12">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-sm">
                    A
                  </div>
                  <span className="text-base sm:text-xl font-bold tracking-tight text-slate-900">Expertise</span>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 leading-[1.2] tracking-tight">
                    „Echte Interaktion übertrifft reine Sichtbarkeit.“
                  </p>
                  <p className="text-lg sm:text-2xl font-bold text-slate-900/60 leading-[1.2] tracking-tight">
                    Aktivierende Formate binden Zielgruppen ein und liefern messbare Ergebnisse.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 sm:mt-12">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://i.pravatar.cc/150?u=markus-schmidt" alt="Markus Schmidt" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold tracking-tight text-base sm:text-lg leading-none mb-1">Markus Schmidt</div>
                    <div className="text-slate-400 text-[8px] sm:text-[10px] font-black uppercase tracking-widest">Creative Director</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
