
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, ChevronDown, Search } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: "Technologie",
    title: "Die Zukunft der Arena: Wie VR und AR eSports Events revolutionieren.",
    date: "12. Okt 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1200",
    size: "large"
  },
  {
    id: 2,
    category: "Marketing",
    title: "Smarte Lead-Generierung am Messestand.",
    date: "28. Sep 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=600",
    size: "small"
  },
  {
    id: 3,
    category: "Events",
    title: "Hybrid-Events: Die Brücke zwischen Online & Offline.",
    date: "15. Sep 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
    size: "small"
  },
  {
    id: 4,
    category: "Recruiting",
    title: "Gamification im Employer Branding.",
    date: "05. Sep 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    size: "small"
  }
];

const FilterChip = ({ label, active = false }: { label: string; active?: boolean }) => (
  <button className={`px-5 py-2 rounded-full text-xs font-bold tracking-tighter border transition-all flex items-center gap-2 ${
    active 
    ? 'bg-white/10 border-white/20 text-white shadow-lg' 
    : 'border-white/5 text-white/40 hover:text-white hover:border-white/10 bg-white/5'
  }`}>
    {label}
    {label === "Solutions" || label === "Company" ? <ChevronDown className="w-3 h-3" /> : null}
  </button>
);

// Define props for BlogSection component
interface BlogSectionProps {
  onNavigate?: (page: 'home' | 'services') => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex items-center justify-center p-2 md:p-3 lg:p-4">
      {/* Dark Ocher Background (#1a1810 is a very deep ocher/brown) */}
      <section className="w-full bg-[#1a1810] rounded-[2.5rem] md:rounded-[3.2rem] border border-white/5 shadow-2xl overflow-hidden relative p-8 md:p-16 lg:p-24" id="blog">
        
        {/* Header with Filters & Search inspired by the tablet UI */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">Blog</h2>
            <p className="text-white/40 text-base md:text-lg font-medium tracking-tight max-w-md leading-snug">
              Latest insights, updates, and stories from eSports Agency.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="hidden md:flex items-center gap-3 mr-4">
              <FilterChip label="Solutions" />
              <FilterChip label="Case studies" active />
              <FilterChip label="Company" />
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-400/20">
                Request a quote
              </button>
            </div>
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Feature Post (Left side, dark aesthetic) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col group cursor-pointer"
          >
            <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl">
              <img 
                src={posts[0].image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" 
                alt={posts[0].title} 
              />
              <div className="absolute top-8 left-8 px-5 py-2 rounded-full bg-emerald-400/90 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                {posts[0].category}
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-white text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight group-hover:text-emerald-400 transition-colors">
                {posts[0].title}
              </h3>
              <div className="flex items-center gap-8 text-white/30 text-[11px] font-black uppercase tracking-[0.2em] mb-10">
                <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-emerald-400" /> {posts[0].date}</span>
                <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-emerald-400" /> {posts[0].readTime}</span>
              </div>
              <button className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-[0.3em] text-[11px] group-hover:gap-5 transition-all">
                Read article <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Smaller White Post Tiles (Right side) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col lg:flex-row items-stretch gap-0 rounded-[2.5rem] bg-white overflow-hidden shadow-2xl group cursor-pointer"
              >
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={post.title} 
                  />
                </div>
                <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-400 text-[9px] font-black uppercase tracking-widest mb-4">
                      {post.category}
                    </span>
                    <h4 className="text-slate-900 text-xl font-black tracking-tighter leading-tight mb-6 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-[10px]">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Branding Decor */}
        <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
          <div className="text-[20rem] font-black leading-none tracking-tighter text-white">EA</div>
        </div>
      </section>
    </div>
  );
};
