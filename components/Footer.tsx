
import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 relative z-10 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6 text-slate-900">
              <span className="w-8 h-8 bg-emerald-500 rounded-lg rotate-12 flex items-center justify-center text-xs text-white font-black">EA</span>
              esports <span className="text-emerald-500">Agency</span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-10 font-medium">
              Wir schaffen Erlebnisse, die Marken aktivieren, Zielgruppen begeistern und datenbasierte Ergebnisse liefern.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Leistungen</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#services" className="hover:text-emerald-600 transition-colors">Gamification</a></li>
              <li><a href="#services" className="hover:text-emerald-600 transition-colors">eSports Events</a></li>
              <li><a href="#services" className="hover:text-emerald-600 transition-colors">Eventtechnik</a></li>
              <li><a href="#services" className="hover:text-emerald-600 transition-colors">Content Creation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Über uns</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#about" className="hover:text-emerald-600 transition-colors">Unsere Story</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Partner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.2em]">Rechtliches</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-[10px] text-slate-400 font-black tracking-widest uppercase">
          <p>© 2024 esports Agency GmbH. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0 items-center">
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-emerald-500" /> hello@esports-agency.de
            </span>
            <span>Germany • HQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
