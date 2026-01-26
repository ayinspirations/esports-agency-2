
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface BeautifulAppearProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const BeautifulAppear: React.FC<BeautifulAppearProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span style={{ opacity }} className="text-slate-900">
        {children}
      </motion.span>
    </span>
  );
};

export const ScrollTextSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const { scrollXProgress } = useScroll({
    container: scrollContainerRef
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headline = "Wir entwickeln Markenaktivierungen für Unternehmen, die mehr wollen als Aufmerksamkeit.";
  const words = headline.split(" ");

  return (
    <div className="w-full flex items-center justify-center p-0 md:p-4">
      <section 
        ref={sectionRef}
        className="w-full h-screen bg-white rounded-none md:rounded-[3.2rem] border-y md:border border-[#d1dbd2] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden relative flex flex-col justify-between py-12 md:py-16 lg:py-20 px-0 md:px-16 lg:px-24"
      >
        
        {/* Top Content: Centered on mobile, Right-aligned on Desktop */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-full shrink-0 px-6 md:px-0">
          <BeautifulAppear className="flex flex-col items-center md:items-end">
            <div className="flex flex-col md:flex-row-reverse items-center gap-4 mb-6 md:mb-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#10b981] rounded-2xl flex items-center justify-center rotate-12 shadow-2xl shadow-emerald-500/20 shrink-0">
                <span className="text-white text-lg md:text-lg font-black italic">!</span>
              </div>
              <div className="flex flex-col items-center md:items-end mt-2 md:mt-0">
                <span className="text-emerald-600 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase">Status Quo</span>
                <div className="h-0.5 w-10 md:w-12 bg-emerald-500/20 mt-1.5" />
              </div>
            </div>
          </BeautifulAppear>
          
          <div className="max-w-4xl">
            <h2 className="text-[clamp(28px,4.8vh,72px)] font-black leading-[0.95] tracking-tighter mb-6 md:mb-10 flex flex-wrap justify-center md:justify-end">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                return (
                  <Word key={i} progress={smoothProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </h2>
            
            <BeautifulAppear delay={0.4}>
              <p className="text-[clamp(15px,1.8vh,24px)] text-slate-500 font-medium leading-tight tracking-tight max-w-xl mx-auto md:ml-auto">
                Marken aktivieren, Zielgruppen begeistern und datenbasierte Ergebnisse liefern – durch Gamification, Technik und Software.
              </p>
            </BeautifulAppear>
          </div>
        </div>

        {/* Bottom Cards: Horizontal Snap Carousel */}
        <div className="relative mt-auto">
          <div 
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-8 items-end overflow-x-auto lg:overflow-visible pb-12 md:pb-0 no-scrollbar h-auto max-h-[48vh] snap-x snap-mandatory px-6 md:px-0"
          >
            {[
              { color: 'bg-slate-950', text: 'white', title: 'Strategie.', sub: 'Design', height: 'h-[36vh] lg:h-[48vh]', content: 'Markenidentität im Fokus.' },
              { color: 'bg-slate-900', text: 'white', title: 'Wachstum.', sub: 'Growth', height: 'h-[30vh] lg:h-[38vh]', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200' },
              { color: 'bg-slate-100', text: 'white', title: 'Event.', sub: 'Live', height: 'h-[39vh] lg:h-[52vh]', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200' },
              { color: 'bg-[#f2f6f3]', text: 'slate-900', title: 'Team.', sub: 'Expertise', height: 'h-[33vh] lg:h-[42vh]', content: 'Wir sprechen Gaming.', team: true }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex-shrink-0 w-[82vw] md:w-[300px] lg:w-full ${card.height} ${card.color} rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border border-black/5 shadow-2xl group snap-center`}
              >
                {card.img && <img src={card.img} className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-1000 group-hover:scale-105" />}
                {card.img && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />}
                
                <div className="relative z-10">
                  <div className={`px-3 py-1.5 w-fit rounded-full border border-black/5 bg-white/10 backdrop-blur-md text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-${card.text}/70`}>{card.sub}</div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mb-4 shadow-lg shadow-emerald-500/50" />
                  <h3 className={`text-${card.text} text-[clamp(22px,2.8vh,32px)] font-black tracking-tighter mb-2 md:mb-4 leading-[1]`}>{card.title}</h3>
                  {card.content && <p className={`text-${card.text}/50 text-[10px] md:text-sm font-medium tracking-tight line-clamp-2`}>{card.content}</p>}
                  {card.team && (
                    <div className="flex -space-x-3 mt-4">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-[#f2f6f3] overflow-hidden shadow-xl"><img src={`https://i.pravatar.cc/150?u=${j+10}`} className="w-full h-full object-cover" /></div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Horizontal Scroll Indicator for Mobile */}
          <div className="lg:hidden absolute bottom-4 left-0 right-0 flex justify-center px-10">
            <div className="h-[2px] w-32 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500 w-1/4"
                style={{ scaleX: useTransform(scrollXProgress, [0, 1], [1, 4]), transformOrigin: "0% 50%" }}
              />
            </div>
          </div>
        </div>
      </section>
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};
