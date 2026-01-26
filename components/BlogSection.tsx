
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, ArrowUpRight } from 'lucide-react';

const posts = [
  { 
    id: 1, 
    category: "Technologie", 
    title: "Die Zukunft der Arena: Wie VR und AR eSports revolutionieren.", 
    date: "12. Okt 2025", 
    readTime: "8 min", 
    image: "/images/blog/blog-1.jpg",
    excerpt: "Virtuelle Welten verschmelzen mit der physischen Realität. Wir blicken hinter die Kulissen der nächsten Event-Generation."
  },
  { 
    id: 2, 
    category: "Marketing", 
    title: "Smarte Lead-Generierung am Messestand.", 
    date: "28. Sep 2025", 
    readTime: "5 min", 
    image: "/images/blog/blog-2.jpg" 
  },
  { 
    id: 3, 
    category: "Events", 
    title: "Hybrid-Events: Die Brücke zwischen Online & Offline.", 
    date: "15. Sep 2025", 
    readTime: "6 min", 
    image: "/images/blog/blog-3.jpg" 
  },
  { 
    id: 4, 
    category: "Gaming", 
    title: "Warum Mobile Gaming die Event-Branche dominiert.", 
    date: "02. Sep 2025", 
    readTime: "4 min", 
    image: "/images/blog/blog-4.jpg" 
  }
];

interface BlogSectionProps {
  onNavigate: (page: 'home' | 'services') => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  if (!posts || posts.length === 0) {
    return (
      <section className="w-full h-screen bg-white flex items-center justify-center p-10">
        <p className="text-slate-400 font-bold uppercase tracking-widest">Keine aktuellen Beiträge verfügbar.</p>
      </section>
    );
  }

  const featuredPost = posts[0];
  const galleryPosts = posts.slice(1);

  return (
    <div className="w-full flex items-center justify-center p-0 md:p-4">
      <section className="w-full h-screen bg-white rounded-none md:rounded-[3.2rem] border-y md:border border-[#d1dbd2] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden relative flex flex-col py-8 md:py-12 lg:py-16 px-6 md:px-14 lg:px-20" id="blog">
        
        <div className="flex flex-row items-end justify-between mb-8 md:mb-12 gap-8 shrink-0">
          <div className="max-w-2xl">
            <div className="text-emerald-600 font-black tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-3 md:mb-4">
              Insights & Know-How
            </div>
            <h2 className="text-[clamp(36px,6vh,96px)] font-black tracking-tighter text-slate-900 leading-[0.85]">
              Blog.
            </h2>
          </div>
          <div className="flex items-center gap-6 mb-1">
            <p className="text-slate-400 font-bold text-sm max-w-[180px] leading-tight tracking-tight hidden lg:block">
              Exklusive Einblicke in die eSports-Welt.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('services')}
              className="bg-slate-950 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl flex items-center gap-2.5 group"
            >
              Alle Artikel
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 flex-1 overflow-hidden">
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-[50vh] lg:h-full flex flex-col group cursor-pointer"
            >
              <div className="relative flex-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-5 md:mb-8 shadow-2xl bg-slate-100">
                <img 
                  src={featuredPost.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={featuredPost.title} 
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Blog+Image'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute top-5 left-5 md:top-8 md:left-8 flex gap-2">
                  <div className="px-4 py-1.5 rounded-full bg-emerald-400 text-[9px] font-black uppercase text-slate-900 shadow-lg">
                    Top Beitrag
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                   <div className="flex items-center gap-3 text-white/70 text-[9px] font-black uppercase tracking-widest mb-3">
                     <span>{featuredPost.date}</span>
                     <span className="w-1 h-1 bg-white/20 rounded-full" />
                     <span>{featuredPost.readTime}</span>
                   </div>
                   <h3 className="text-white text-[clamp(22px,3vh,48px)] font-black tracking-tighter leading-[0.95] group-hover:text-emerald-300 transition-colors">
                     {featuredPost.title}
                   </h3>
                </div>
              </div>
              <p className="hidden lg:block text-slate-500 text-lg font-medium leading-relaxed mb-8 max-w-xl line-clamp-2">
                {featuredPost.excerpt}
              </p>
            </motion.div>
          )}

          <div className="lg:col-span-5 flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 shrink-0">
              <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-900">Aktuelle News</h4>
              <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hidden md:block">Scrollen</span>
            </div>

            <div className="flex-1 overflow-x-auto lg:overflow-y-auto no-scrollbar flex lg:flex-col gap-5 pb-6 lg:pb-0 snap-x snap-mandatory px-2 -mx-2 lg:px-0 lg:mx-0">
              {galleryPosts.map((post, i) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="min-w-[80vw] lg:min-w-0 flex flex-row items-center gap-5 p-4 rounded-[2rem] bg-slate-50 lg:bg-transparent lg:hover:bg-slate-50 transition-all border border-slate-100 lg:border-transparent lg:hover:border-slate-100 group cursor-pointer snap-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg bg-slate-200">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={post.title} 
                      onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x300?text=News'; }}
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{post.category}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                    </div>
                    <h4 className="text-slate-900 text-sm md:text-base font-black tracking-tight leading-tight group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-20 hidden lg:block" />
          </div>
        </div>
      </section>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; } 
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (min-width: 1024px) {
          .flex-1.overflow-y-auto::-webkit-scrollbar { width: 3px; }
          .flex-1.overflow-y-auto::-webkit-scrollbar-thumb { background: #f1f5f9; border-radius: 10px; }
        }
      `}</style>
    </div>
  );
};
