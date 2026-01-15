
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Users } from 'lucide-react';

const ServiceCard = ({ title, content, icon: Icon, delay }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  return (
    <motion.div
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay } }}
      className="glass rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border border-[#d1dbd2] hover:border-emerald-500/30 transition-colors flex flex-col justify-between h-[380px] sm:h-[450px] md:h-[480px] relative group cursor-pointer bg-white/95 shadow-lg"
    >
      <div style={{ transform: "translateZ(30px)" }} className="absolute top-0 right-0 p-8 sm:p-10 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-24 h-24 sm:w-36 sm:h-36 text-emerald-500" />
      </div>
      <div style={{ transform: "translateZ(20px)" }}>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 shadow-xl shadow-emerald-500/20">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tighter text-slate-900">{title}</h3>
        <p className="text-slate-500 leading-snug sm:leading-relaxed text-base sm:text-lg font-medium tracking-tight">{content}</p>
      </div>
      <div style={{ transform: "translateZ(25px)" }}>
        <a href="#contact" className="flex items-center justify-between text-emerald-600 font-bold group/btn tracking-tighter text-sm sm:text-base">
          <span className="group-hover/btn:translate-x-1 transition-transform">Anfrage senden</span>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-all">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

interface FloatingServicesProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const FloatingServices: React.FC<FloatingServicesProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex items-center justify-center p-2 md:p-3 lg:p-4">
      <section className="w-full py-16 sm:py-24 lg:py-40 glass rounded-[2rem] md:rounded-[3.2rem] border border-[#d1dbd2] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden bg-white/40 relative" id="services">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-emerald-500/[0.05] rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
            <div className="max-w-3xl">
              <div className="text-emerald-600 font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">Exzellenz in Serie</div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none tracking-tighter text-slate-900">Services für <br className="hidden sm:block" /> Ihr Business.</h2>
              <p className="text-slate-500 text-lg sm:text-xl max-w-xl font-medium tracking-tight">Messbare Interaktion durch Gamification.</p>
            </div>
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              className="w-fit px-8 py-4 sm:px-10 sm:py-5 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shrink-0 tracking-tighter text-sm sm:text-base"
            >
              Alle Leistungen
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            <ServiceCard title="Recruiting" content="Wir entwickeln interaktive Formate, die Talente dort abholen, wo sie sind – spielerisch und authentisch." icon={Target} delay={0} />
            <ServiceCard title="Community" content="Bauen Sie echte Beziehungen auf. Wir schaffen Plattformen für maximale Kundenloyalität." icon={Users} delay={0.2} />
            <ServiceCard title="Activation" content="Vom Stand-Highlight bis zur Messehalle: Wir machen Marken erlebbar und generieren messbare Leads." icon={Zap} delay={0.4} />
          </div>
        </div>
      </section>
    </div>
  );
};
