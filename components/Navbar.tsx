
import React from 'react';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between border-black/5 shadow-sm">
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-500 rounded-md rotate-12 flex items-center justify-center text-[10px] text-white font-black">EA</span>
            <span className="text-slate-900">esports <span className="text-emerald-600">Agency</span></span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
          <a href="#" className="hover:text-emerald-600 transition-colors">Startseite</a>
          <a href="#services" className="hover:text-emerald-600 transition-colors">Leistungen</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">Über uns</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Globe className="w-4 h-4 text-slate-400" />
          </button>
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
            Termin vereinbaren
          </a>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-3xl p-6 border-black/5 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6 text-lg font-bold text-slate-900">
            <a href="#" onClick={() => setIsOpen(false)} className="hover:text-emerald-600">Startseite</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-emerald-600">Leistungen</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Über uns</a>
            <hr className="border-black/5" />
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-center font-bold">
              Termin vereinbaren
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
