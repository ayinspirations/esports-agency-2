
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 bg-[#f1f5f9]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-gaming-competition-at-an-arena-41484-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f1f5f9] via-transparent to-white/10" />
      </div>

      {/* Animated floating orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-bold text-emerald-600 mb-8 border-black/5 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Professionelle Event-Aktivierung
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1] text-slate-900"
        >
          Eventtechnik trifft <br />
          <span className="text-emerald-500">Gamification.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Wir schaffen Erlebnisse, die Marken aktivieren, Zielgruppen begeistern und datenbasierte Ergebnisse liefern – durch die Kombination aus Gamification, Technik und Software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 group shadow-2xl shadow-emerald-500/20">
            Termin vereinbaren
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-10 py-5 glass hover:bg-black/5 text-slate-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
            Mehr erfahren
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="flex gap-12 md:gap-24 text-sm font-bold tracking-widest uppercase text-slate-400">
          <div className="text-center">
            <div className="text-xl md:text-2xl text-slate-900 font-black mb-1">500+</div>
            <div className="text-[10px]">Events</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl text-slate-900 font-black mb-1">10M+</div>
            <div className="text-[10px]">Impressions</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl text-slate-900 font-black mb-1">100%</div>
            <div className="text-[10px]">Passion</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
