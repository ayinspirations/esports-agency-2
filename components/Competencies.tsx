
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Monitor, Cpu, PlayCircle } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backText: string;
}

const FlipCard: React.FC<CardProps> = ({ title, description, icon, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full h-[320px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // FASTER FLIPPING
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass rounded-3xl p-8 flex flex-col items-center text-center justify-center border-black/5 hover:border-emerald-500/30 transition-colors shadow-sm bg-white/60">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
            <div className="text-emerald-600">{icon}</div>
          </div>
          <h3 className="text-xl font-black mb-3 text-slate-900">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">{description}</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-3xl p-8 flex flex-col items-center text-center justify-center border-emerald-500/20 bg-emerald-500 text-white rotateY-180 shadow-xl"
        >
          <div className="text-white/80 mb-4">
             <Trophy className="w-8 h-8" />
          </div>
          <p className="text-lg leading-snug font-bold">
            {backText}
          </p>
          <div className="mt-6 text-[10px] font-black uppercase tracking-widest text-white/70">
            Ergebnisse liefern
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Competencies: React.FC = () => {
  const data = [
    {
      title: "Gamification",
      description: "Interaktive Kampagnen für Recruiting & Marketing.",
      icon: <Gamepad2 className="w-8 h-8" />,
      backText: "Wir verwandeln Aufmerksamkeit in Engagement durch spielerische Mechaniken."
    },
    {
      title: "eSports Events",
      description: "Ligen und Community-Aktivierungen weltweit.",
      icon: <Trophy className="w-8 h-8" />,
      backText: "Vollumfängliche Organisation von der Idee bis zum 'GGWP'."
    },
    {
      title: "Eventtechnik",
      description: "LED-Wände, Rigging & Gaming-Setups.",
      icon: <Monitor className="w-8 h-8" />,
      backText: "Das technische Rückgrat für Ihre Vision mit modernstem Equipment."
    },
    {
      title: "Plattformen",
      description: "Individuelle Turnier- und Gamification-Systeme.",
      icon: <Cpu className="w-8 h-8" />,
      backText: "Eigene IP, DSGVO-konform und skalierbar für Ihre Brand."
    },
    {
      title: "Streaming",
      description: "High-End Livestreams & Content-Produktion.",
      icon: <PlayCircle className="w-8 h-8" />,
      backText: "Geschichten erzählen, die bleiben. Viralität mit System."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#f8fafc]" id="competencies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tighter">Kernkompetenzen</h2>
          <p className="text-slate-500 font-medium">Agenturdenken trifft auf absolute Umsetzungsstärke.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.map((item, i) => (
            <FlipCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
