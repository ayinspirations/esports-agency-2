
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseProps {
  title: string;
  client: string;
  video: string;
  size: 'large' | 'medium' | 'small';
  category: string;
  delay: number;
}

const CaseCard: React.FC<CaseProps> = ({ title, client, video, size, category, delay }) => {
  const sizeClasses = {
    large: "lg:col-span-8 lg:row-span-2 aspect-[16/9] lg:aspect-auto",
    medium: "lg:col-span-4 lg:row-span-2 aspect-[4/5] lg:aspect-auto",
    small: "lg:col-span-4 lg:row-span-1 aspect-[16/9] lg:aspect-auto"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-[2.5rem] bg-slate-900 cursor-pointer ${sizeClasses[size]}`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      >
        <source src={video} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <motion.div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            {category}
          </motion.div>
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>

        <div>
          <div className="text-emerald-400 font-black text-[12px] md:text-[14px] uppercase tracking-[0.3em] mb-2 drop-shadow-lg">
            {client}
          </div>
          <h3 className="text-white text-[clamp(24px,4vw,48px)] font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
            <span>Case Study ansehen</span>
            <div className="h-[2px] w-8 bg-emerald-500 rounded-full" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const BestCases: React.FC = () => {
  const cases: CaseProps[] = [
    {
      client: "AMD",
      title: "Gaming Arena @Gamescom",
      video: "/videos/cases/case-1.mp4",
      size: "large",
      category: "Event Production",
      delay: 0.1
    },
    {
      client: "Logitech G",
      title: "Masters of Speed Night",
      video: "/videos/cases/case-2.mp4",
      size: "medium",
      category: "Activation",
      delay: 0.2
    },
    {
      client: "Intel",
      title: "Extreme Masters Booth",
      video: "/videos/cases/case-3.mp4",
      size: "small",
      category: "Tech Setup",
      delay: 0.3
    },
    {
      client: "Razer",
      title: "Live Broadcast Studio",
      video: "/videos/cases/case-4.mp4",
      size: "small",
      category: "Live Content",
      delay: 0.4
    }
  ];

  return (
    <section className="w-full py-24 md:py-40 bg-[#d1dbd2] px-6 md:px-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-emerald-700 font-black tracking-[0.4em] uppercase text-[clamp(10px,1vw,12px)] mb-6">
              Portfolio
            </div>
            <h2 className="text-[clamp(40px,7vw,100px)] font-black text-slate-900 leading-[0.85] tracking-tighter">
              Best <br /> <span className="text-slate-900/40 italic">Cases.</span>
            </h2>
          </div>
          <div className="lg:mb-4">
            <p className="text-slate-600 font-bold text-lg md:text-xl max-w-sm leading-tight tracking-tight text-right lg:text-left">
              Bewegtbilder für bewegende Momente. Unsere Highlight-Projekte in voller Action erleben.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-3 gap-6 md:gap-8 h-auto lg:min-h-[120vh]">
          {cases.map((c, i) => (
             <CaseCard key={i} {...c} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-slate-950 text-white rounded-full font-black text-xl tracking-tighter shadow-2xl hover:bg-black transition-all flex items-center gap-4 group"
          >
            Alle Projekte ansehen
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
