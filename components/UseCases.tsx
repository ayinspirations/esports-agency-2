
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Globe, GraduationCap, Building2, Users2, ShoppingBag, Radio, Trophy } from 'lucide-react';

const cases = [
  { name: "Recruiting", icon: Search },
  { name: "Employer Branding", icon: Rocket },
  { name: "Messe & Event", icon: Globe },
  { name: "Sponsoring", icon: Trophy },
  { name: "Community Building", icon: Users2 },
  { name: "POS-Aktivierung", icon: ShoppingBag },
  { name: "Education", icon: GraduationCap },
  { name: "Verbände", icon: Building2 },
  { name: "Sport", icon: Radio },
];

export const UseCases: React.FC = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900 leading-none">Branchen & <br />Use Cases</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Wir aktivieren Zielgruppen überall dort, wo echte Interaktion den Unterschied macht.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -8, backgroundColor: "#fff", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center text-center gap-4 border-black/5 transition-all cursor-default group"
            >
              <item.icon className="w-7 h-7 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#services" className="inline-flex items-center gap-3 text-emerald-600 font-black text-lg hover:underline group">
            Alle Leistungen entdecken
            <motion.span animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              →
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
};
