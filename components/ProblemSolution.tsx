import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface ProblemSolutionProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-14 pb-12 sm:pb-24 pt-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* 
            Das Grid nutzt items-stretch, sodass alle Spalten dieselbe Höhe haben.
            Die linke Spalte gibt durch Headline und CTA die vertikale Rahmung vor.
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          
          {/* Linke Spalte: Headline, Subtext & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col py-2"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <motion.h2 
                  className="text-[12vw] sm:text-[8vw] lg:text-[5vw] xl:text-[68px] font-bold text-[#0f172a] leading-[0.95] tracking-tighter mb-8 xl:mb-10"
                >
                  Reichweite <br />
                  reicht nicht <br />
                  mehr.
                </motion.h2>
                <motion.p 
                  className="text-slate-600/80 text-base sm:text-lg xl:text-xl font-medium tracking-tight max-w-[280px] xl:max-w-sm mb-10 xl:mb-12 leading-snug"
                >
                  Klassische Marketingmaßnahmen erzeugen Sichtbarkeit – aber keine echte Interaktion.
                </motion.p>
              </div>
              
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-fit inline-flex items-center justify-center gap-3 bg-[#10b981] hover:bg-[#0ea371] text-slate-900 px-6 xl:px-8 py-3.5 xl:py-4 rounded-full font-bold text-base xl:text-lg transition-all shadow-xl shadow-emerald-500/10 tracking-tighter"
              >
                <ArrowUpRight className="w-5 h-5" />
                Jetzt mehr erfahren
              </motion.a>
            </div>
          </motion.div>

          {/* Mittlere Spalte: Kachel 1 (Bild) */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full rounded-[2.5rem] xl:rounded-[3.5rem] overflow-hidden shadow-2xl group bg-black/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=1200" 
                alt="Gaming Interaction" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-6 right-6 bg-white p-4 xl:p-5 rounded-[1.5rem] xl:rounded-[2rem] shadow-2xl flex items-center gap-3 border border-white/40"
              >
                <div className="w-8 h-8 xl:w-10 xl:h-10 bg-[#0f172a] rounded-lg flex items-center justify-center text-white shrink-0">
                  <TrendingUp className="w-4 h-4 xl:w-5 xl:h-5" />
                </div>
                <div className="pr-2">
                  <div className="text-slate-400 text-[7px] xl:text-[8px] font-black uppercase tracking-widest leading-none mb-1">Aktivierung</div>
                  <div className="text-[#0f172a] text-sm xl:text-base font-bold tracking-tight leading-none">
                    Engagement
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Rechte Spalte: Kachel 2 (Text - Identisch in Form zu Kachel 1, einfarbiger Hintergrund) */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full bg-white rounded-[2.5rem] xl:rounded-[3.5rem] p-10 xl:p-14 border border-black/[0.03] shadow-xl flex flex-col justify-center relative overflow-hidden"
            >
              <div className="space-y-6 xl:space-y-10 relative z-10">
                <p className="text-xl xl:text-[32px] font-bold text-[#0f172a] leading-[1.2] tracking-tight">
                  Klassische Marketingmaßnahmen sorgen für <span className="text-emerald-500">Sichtbarkeit</span>, schaffen aber selten echte Interaktion.
                </p>
                <p className="text-lg xl:text-2xl font-bold text-slate-500/80 leading-[1.3] tracking-tight">
                  Wirkung entsteht dort, wo Menschen <span className="text-[#0f172a]">eingebunden</span> werden, sich aktiv mit einer Marke auseinandersetzen und <span className="text-emerald-600/80 italic font-medium">Erlebnisse im Gedächtnis</span> bleiben.
                </p>
              </div>
              
              {/* Kein EA Hintergrund-Logo mehr */}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
