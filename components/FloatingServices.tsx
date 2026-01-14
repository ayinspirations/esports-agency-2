
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap, Target, Users } from 'lucide-react';

const ServiceCard = ({ title, content, icon: Icon, delay }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay } }}
      className="glass rounded-[2.5rem] p-10 border-black/5 hover:border-emerald-500/30 transition-colors flex flex-col justify-between h-[480px] relative group cursor-pointer bg-white/70 shadow-lg"
    >
      <div style={{ transform: "translateZ(50px)" }} className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-36 h-36 text-emerald-500" />
      </div>
      
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-emerald-500/20">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-black mb-6 tracking-tighter text-slate-900">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-lg font-medium">
          {content}
        </p>
      </div>

      <div style={{ transform: "translateZ(40px)" }}>
        <a href="#contact" className="flex items-center justify-between text-emerald-600 font-black group/btn tracking-tight">
          <span className="group-hover/btn:translate-x-1 transition-transform">Anfrage senden</span>
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-all">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export const FloatingServices: React.FC = () => {
  return (
    <section className="py-32 bg-[#f1f5f9] relative overflow-hidden" id="services">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-emerald-600 font-black tracking-[0.4em] uppercase text-xs mb-4">Exzellenz in Serie</div>
            <h2 className="text-4xl md:text-7xl font-black mb-6 leading-none tracking-tighter text-slate-900">Services für <br /> Ihr Business.</h2>
            <p className="text-slate-500 text-xl max-w-xl font-medium">
              Wir nutzen spielerische Mechaniken für messbare Interaktion.
            </p>
          </div>
          <a href="#contact" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shrink-0">
            Alle Leistungen entdecken
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard title="Recruiting & Branding" content="Wir entwickeln interaktive Formate, die Talente dort abholen, wo sie sind – spielerisch und authentisch." icon={Target} delay={0} />
          <ServiceCard title="Community Building" content="Bauen Sie echte Beziehungen zu Ihrer Zielgruppe auf. Wir schaffen Plattformen für maximale Loyalität." icon={Users} delay={0.2} />
          <ServiceCard title="Event Activation" content="Vom Stand-Highlight bis zur Messehalle: Wir machen Marken erlebbar und generieren messbare Leads." icon={Zap} delay={0.4} />
        </div>
      </div>
    </section>
  );
};
