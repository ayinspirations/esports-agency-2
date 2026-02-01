
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProblemSolutionProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-14 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-start">
          
          {/* Linke Spalte: Headline & Subtext */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex flex-col justify-start">
              <motion.h2 
                className="text-[12vw] sm:text-[8vw] lg:text-[5.5vw] xl:text-[76px] font-bold text-[#0f172a] leading-[0.9] tracking-tighter mb-8"
              >
                Reichweite <br />
                reicht nicht <br />
                mehr.
              </motion.h2>
              <motion.p 
                className="text-slate-600/80 text-base sm:text-lg xl:text-xl font-medium tracking-tight max-w-[280px] xl:max-w-xs leading-snug"
              >
                Klassische Marketingmaßnahmen sorgen für Sichtbarkeit, erzeugen aber kaum echte Interaktion.
              </motion.p>
            </div>
          </motion.div>

          {/* Rechte Spalte: Kompakter, auf gleicher Höhe wie die Headline */}
          <div className="lg:col-span-7 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white rounded-[2.5rem] xl:rounded-[3.5rem] p-10 xl:p-14 border border-black/[0.03] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-6 xl:space-y-10 relative z-10">
                <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-8" />
                <p className="text-xl xl:text-[36px] font-bold text-[#0f172a] leading-[1.15] tracking-tight">
                  Klassische Werbung sorgt für <span className="text-emerald-500">Sichtbarkeit</span>, schafft aber selten echte Bindung.
                </p>
                <p className="text-base xl:text-xl font-bold text-slate-500/80 leading-[1.4] tracking-tight max-w-2xl">
                  Wirkung entsteht dort, wo Menschen <span className="text-[#0f172a]">aktiv teilnehmen</span>, sich mit einer Marke auseinandersetzen und <span className="text-emerald-600/80 italic font-medium">Erlebnisse</span> im Gedächtnis verankern.
                </p>
              </div>

              <div className="mt-12 xl:mt-14 flex justify-center w-full relative z-10">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.03, backgroundColor: "#0ea371" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-[#10b981] text-slate-900 px-10 xl:px-12 py-5 xl:py-5.5 rounded-full font-black text-lg xl:text-xl transition-all shadow-xl shadow-emerald-500/20 tracking-tighter"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  Mehr erfahren
                </motion.a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
