
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const WhyUs: React.FC = () => {
  const points = [
    "Keine Konzepte ohne Umsetzung", 
    "Technik, Software und Content aus einer Hand", 
    "Tiefe Gaming- & Zielgruppenexpertise", 
    "Skalierbar von klein bis groß", 
    "Messbar statt Bauchgefühl"
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="w-full py-4 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-left"
          >
            <motion.div variants={itemVariants} className="text-emerald-700 font-black tracking-[0.4em] uppercase text-[10px] mb-4">
              Unser Versprechen
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-[54px] font-black mb-8 tracking-tighter text-slate-900 leading-[1.05]">
              Agenturdenken trifft auf <br className="hidden lg:block" /> Umsetzungsstärke.
            </motion.h2>
            
            <div className="space-y-4 mb-10">
              {points.map((point, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300">
                    <Check className="w-3 h-3 text-emerald-800 group-hover:text-white" />
                  </div>
                  <span className="text-base md:text-lg text-slate-800 font-bold tracking-tight">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              variants={itemVariants}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-slate-900 font-black hover:text-emerald-700 transition-colors group tracking-tighter text-sm uppercase"
            >
              Unsere Geschichte lesen 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            <div className="space-y-4 lg:space-y-6">
              <div className="h-56 md:h-64 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                  alt="Esports Gaming" 
                />
              </div>
              <div className="h-32 rounded-[2rem] overflow-hidden bg-emerald-500 flex items-center justify-center p-6 text-center text-white shadow-2xl">
                <span className="text-lg md:text-xl font-black tracking-tighter leading-none uppercase">
                  100% <br /> Praxisnah.
                </span>
              </div>
            </div>
            
            <div className="pt-8 space-y-4 lg:space-y-6">
              <div className="h-32 rounded-[2rem] overflow-hidden bg-slate-900 flex items-center justify-center p-6 text-center text-white shadow-2xl">
                <span className="text-lg md:text-xl font-black tracking-tighter leading-none uppercase">
                  Scalable.
                </span>
              </div>
              <div className="h-56 md:h-64 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
                  alt="Esports Arena" 
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
