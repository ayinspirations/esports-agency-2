
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
  className?: string;
}

const CaseCard: React.FC<CaseProps> = ({ title, client, video, image, size, category, delay, isCTA, onScroll, className }) => {
  const sizeClasses = {
    large: "col-span-1 lg:col-span-8 lg:row-span-2 aspect-[16/9] lg:aspect-auto min-h-[350px] w-full",
    medium: "col-span-1 lg:col-span-4 lg:row-span-2 aspect-[4/5] lg:aspect-auto min-h-[350px] w-full",
    small: "col-span-1 lg:col-span-4 lg:row-span-1 aspect-[16/9] lg:aspect-auto min-h-[350px] w-full"
  };

  if (isCTA) {
    return (
      <motion.button
        onClick={() => onScroll?.('contact')}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`relative group overflow-hidden rounded-[2.5rem] bg-emerald-500 cursor-pointer flex flex-col justify-between p-8 md:p-12 shadow-2xl shadow-emerald-500/20 text-left ${sizeClasses[size]} ${className || ''}`}
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
      className={`relative group overflow-hidden rounded-[2.5rem] bg-slate-900 cursor-pointer ${sizeClasses[size]} ${className || ''}`}
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
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(40px,7vw,100px)] font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
              Best <br /> <span className="text-slate-900/40 italic">Cases.</span>
            </h2>
            <p className="text-slate-600 font-bold text-base md:text-lg mt-6 max-w-xl leading-tight tracking-tight">
              Bewegtbilder für echte Erlebnisse. Ausgewählte Projekte in voller Dynamik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Row 1 - Gaming Arena (Full Width) */}
          <div className="col-span-1 lg:col-span-12">
            <CaseCard 
              title="GAMING IN BAYERN"
              video="/videos/copy_C23D97A5-2B74-44A6-A5E0-66CEB8290725.mov"
              size="large"
              category="Event Production"
              delay={0.1}
              className="aspect-video lg:aspect-[21/9] min-h-0 md:min-h-[600px] w-full rounded-[2.5rem]"
            />
          </div>
          
          {/* Row 2 - Small Cards */}
          <div className="col-span-1 lg:col-span-4 h-[400px] lg:h-[500px]">
            <motion.div 
              onClick={() => onNavigate?.('bayern-zockt')}
              className="h-full w-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 h-full w-full">
                <img 
                  src="/images/bayern-zockt/hero.jpg" 
                  alt="Bayern Zockt"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      eSport Projekt
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white text-[clamp(24px,3.2vw,38px)] font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
                      Bayern Zockt
                    </h3>
                    <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                      <span>Case Study ansehen</span>
                      <div className="h-[2px] w-8 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-4 h-[400px] lg:h-[500px]">
            <motion.div 
              onClick={() => onNavigate?.('tsystems')}
              className="h-full w-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 h-full w-full">
                <img 
                  src="/images/t-systems/hero.jpg" 
                  alt="T-Systems"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Employer Branding
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white text-[clamp(24px,3.2vw,38px)] font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
                      T-Systems
                    </h3>
                    <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                      <span>Case Study ansehen</span>
                      <div className="h-[2px] w-8 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-1 lg:col-span-4 h-[400px] lg:h-[500px]">
            <motion.div 
              onClick={() => onNavigate?.('hagebau')}
              className="h-full w-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 h-full w-full">
                <img 
                  src="/images/hagebau/hero-hagebau.jpg" 
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
          </div>

          {/* Row 3 */}
          <div className="col-span-1 lg:col-span-6 h-[400px]">
            <CaseCard 
              client="RBLZ"
              title="RBLZ GAMING"
              image="/images/cases/rblz.jpg"
              size="small"
              category="Esports Team"
              delay={0.4}
              className="h-full w-full"
            />
          </div>

          <div className="col-span-1 lg:col-span-6 h-[400px]">
            <CaseCard 
              client="REWE"
              title="REWE x 1. FC Köln"
              image="/images/cases/rewe-koeln.jpg"
              size="small"
              category="Brand Activation"
              delay={0.5}
              className="h-full w-full"
            />
          </div>

          {/* Row 4 */}
          <div className="col-span-1 lg:col-span-4 h-[400px]">
            <CaseCard 
              client="Heilbronn"
              title="Techday HHN"
              image="/images/cases/techday.jpg"
              size="small"
              category="University Event"
              delay={0.6}
              className="h-full w-full"
            />
          </div>

          <div className="col-span-1 lg:col-span-4 h-[400px]">
            <CaseCard 
              client="Heilbronn"
              title="MeetIT Heilbronn"
              image="/images/cases/meetit.jpg"
              size="small"
              category="IT Career Fair"
              delay={0.7}
              className="h-full w-full"
            />
          </div>

          <div className="col-span-1 lg:col-span-4 h-[400px] lg:h-[500px]">
            <motion.div 
              onClick={() => onNavigate?.('showdown-0711')}
              className="h-full w-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 h-full w-full">
                <img 
                  src="/images/cases/0711.jpg" 
                  alt="0711 SHOWDOWN"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Esports Tournament
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <div className="text-emerald-400 font-black text-[12px] md:text-[14px] uppercase tracking-[0.3em] mb-2 drop-shadow-lg">
                      Stuttgart
                    </div>
                    <h3 className="text-white text-[clamp(24px,3.2vw,38px)] font-black leading-[0.9] tracking-tighter uppercase mb-4 drop-shadow-2xl">
                      0711 SHOWDOWN
                    </h3>
                    <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                      <span>Case Study ansehen</span>
                      <div className="h-[2px] w-8 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 5 */}
          <div className="col-span-1 lg:col-span-6 h-[400px]">
            <CaseCard 
              client="BFV"
              title="BFV eFOOTBALL"
              image="/images/cases/bfv.jpg"
              size="small"
              category="Association"
              delay={0.9}
              className="h-full w-full"
            />
          </div>

          <div className="col-span-1 lg:col-span-6 h-[400px]">
            <CaseCard 
              client="Akademie"
              title="Developer Akademie"
              image="/images/cases/dev-akademie.jpg"
              size="small"
              category="Education"
              delay={1.0}
              className="h-full w-full"
            />
          </div>

          {/* Row 6 */}
          <div className="col-span-1 lg:col-span-4 h-[400px]">
            <CaseCard 
              client="NASPA"
              title="SVWW eSport Cup"
              image="/images/cases/svww.jpg"
              size="small"
              category="Esports Cup"
              delay={1.1}
              className="h-full w-full"
            />
          </div>

          <div className="col-span-1 lg:col-span-4 h-[400px]">
            <CaseCard 
              client="München"
              title="Stadt München"
              image="/images/cases/muenchen.jpg"
              size="small"
              category="Public Sector"
              delay={1.2}
              className="h-full w-full"
            />
          </div>

          <div className="col-span-1 lg:col-span-4 h-[400px]">
            <motion.button
              onClick={() => onScroll?.('contact')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-[2.5rem] bg-emerald-500 cursor-pointer flex flex-col justify-between p-8 md:p-12 shadow-2xl shadow-emerald-500/20 text-left h-full w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ 
                    y: [-100, 100],
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white font-black text-8xl italic"
                >
                  LEVEL UP
                </motion.div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,185,129,0.4)_100%)]" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex-1 relative">
                  <motion.div 
                    initial={{ 
                      right: '2rem',
                      bottom: '2rem',
                      y: '100%',
                      opacity: 0 
                    }}
                    whileInView={{ 
                      right: '2rem',
                      bottom: 'auto',
                      top: '2rem',
                      y: '0%',
                      opacity: 1 
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.5, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.8
                    }}
                    className="absolute w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl"
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-slate-950 text-[clamp(24px,2.2vw,32px)] font-black leading-[0.9] tracking-tighter uppercase max-w-[240px] drop-shadow-sm mb-6">
                    Euer Event auf das <br /> 
                    <span className="text-white italic">nächste Level</span> <br /> 
                    bringen
                  </h3>

                  <div className="flex items-center gap-3 text-slate-900/60 text-[10px] font-black uppercase tracking-[0.2em]">
                    <span>Jetzt anfragen</span>
                    <motion.div 
                      animate={{ width: [32, 64, 32] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-[2px] bg-slate-900/40 rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
