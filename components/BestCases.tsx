
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CaseProps {
  title: string;
  client?: string;
  video?: string;
  image?: string;
  size: 'large' | 'medium' | 'small';
  category?: string;
  delay: number;
  isCTA?: boolean;
  onScroll?: (id: string) => void;
}

const CaseCard: React.FC<CaseProps> = ({ title, client, video, image, size, category, delay, isCTA, onScroll }) => {
  const sizeClasses = {
    large: "lg:col-span-8 lg:row-span-2 aspect-[16/9] lg:aspect-auto",
    medium: "lg:col-span-4 lg:row-span-2 aspect-[4/5] lg:aspect-auto",
    small: "lg:col-span-4 lg:row-span-1 min-h-[300px] lg:min-h-0 aspect-[16/9] lg:aspect-auto"
  };

  if (isCTA) {
    return (
      <motion.button
        onClick={() => onScroll?.('contact')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`relative group overflow-hidden rounded-[2.5rem] bg-emerald-500 cursor-pointer flex flex-col justify-between p-8 md:p-12 shadow-2xl shadow-emerald-500/20 text-left ${sizeClasses[size]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
          <Sparkles className="w-32 h-32 text-white" />
        </div>
        
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white mb-6">
            <ArrowUpRight className="w-6 h-6" />
          </div>
          <h3 className="text-slate-950 text-[clamp(20px,1.8vw,28px)] font-black leading-[1] tracking-tighter uppercase max-w-[220px]">
            {title}
          </h3>
        </div>

        <div className="relative z-10 flex items-center gap-3 text-slate-900/60 text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Projekt anfragen</span>
          <div className="h-[2px] w-8 bg-slate-900/40 rounded-full" />
        </div>
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden rounded-[2.5rem] bg-slate-900 cursor-pointer ${sizeClasses[size]}`}
    >
      {video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
      
      {image && (
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      )}
      
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
          {client && (
            <div className="text-emerald-400 font-black text-[12px] md:text-[14px] uppercase tracking-[0.3em] mb-2 drop-shadow-lg">
              {client}
            </div>
          )}
          <h3 className="text-white text-[clamp(24px,3.2vw,38px)] font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
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

export const BestCases: React.FC<{ onScroll?: (id: string) => void; onNavigate?: (page: any) => void }> = ({ onScroll, onNavigate }) => {
  return (
    <section id="best-cases" className="w-full bg-[#d1dbd2] px-6 md:px-14 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(40px,7vw,100px)] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
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
          {/* Row 1 & 2 - Left: AMD (Large) */}
          <CaseCard 
            client="AMD"
            title="Gaming Arena @Gamescom"
            video="/videos/cases/case-1.mp4"
            size="large"
            category="Event Production"
            delay={0.1}
          />
          
          {/* Row 1 - Right: Logitech (Small) */}
          <CaseCard 
            title="T-Systems"
            image="/images/hagebau/slide-1.jpg"
            size="small"
            category="Recruiting"
            delay={0.2}
          />

          {/* Row 2 - Right: Intel (Small) - Tech Setup */}
          <motion.div 
            onClick={() => onNavigate?.('hagebau')}
            className="lg:col-span-4 lg:row-span-1 min-h-[300px] lg:min-h-0 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 h-full w-full">
              <img 
                src="/images/hagebau/slide-1.jpg" 
                alt="Hagebau Bolay"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    Recruiting
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-[clamp(24px,3.2vw,38px)] font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
                    Hagebau Bolay
                  </h3>
                  <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                    <span>Case Study ansehen</span>
                    <div className="h-[2px] w-8 bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 3 - Left: Razer (Small) - Live Content */}
          <CaseCard 
            client="Razer"
            title="Live Broadcast Studio"
            video="/videos/cases/case-4.mp4"
            size="small"
            category="Live Content"
            delay={0.4}
          />

          {/* Row 3 - Middle: New Case (Small) */}
          <CaseCard 
            client="Red Bull"
            title="Gaming Hub Activation"
            video="/videos/cases/case-5.mp4"
            size="small"
            category="Pop-up Event"
            delay={0.5}
          />

          {/* Row 3 - Right: CTA (Small) - Directly under Tech Setup */}
          <CaseCard 
            title="Euer Event auf das nächste Level heben"
            size="small"
            delay={0.6}
            isCTA={true}
            onScroll={onScroll}
          />
        </div>
      </div>
    </section>
  );
};
