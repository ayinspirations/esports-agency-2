
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Zap, Users, ShieldCheck } from 'lucide-react';

interface CaseDetailProps {
  onBack: () => void;
}

export const Showdown0711Detail: React.FC<CaseDetailProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-slate-900">
        <img 
          src="/images/cases/0711.jpg" 
          alt="0711 Showdown"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-14 pb-12">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.button
              onClick={onBack}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-slate-900 font-black uppercase tracking-widest text-xs mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Zurück
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Employer Branding x Gaming</span>
              <h1 className="text-[clamp(40px,8vw,120px)] font-black text-slate-950 leading-[0.85] tracking-tighter uppercase">
                0711 <br /> <span className="text-slate-400 italic">Showdown.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 px-6 md:px-14">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            {/* Left Side: Text Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-8 tracking-tighter uppercase">Über das Projekt</h2>
                <div className="space-y-6 text-slate-600 text-lg md:text-xl font-medium leading-relaxed tracking-tight">
                  <p>
                    Über 200 Bewerbungen, 64 Spieler:innen und 2.000 € Preisgeld für die besten Gamer. Wer junge Talente heute erreichen möchte, muss ihre Lebenswelt verstehen: Gaming, Gamification und persönliche Begegnung auf Augenhöhe.
                  </p>
                  <p>
                    Am 29. März 2025 haben wir mit dem 0711 Showdown in der CLUTCH23 eArena Fellbach gezeigt, wie innovatives Recruiting funktioniert: Über 100 Teilnehmende erwarteten ein professionell organisiertes EA FC25-Turnier, persönliche Gespräche mit Top-Arbeitgebern aus der Region und ein zielgerichtetes Gesundheitsangebot der Techniker Krankenkasse (TK).
                  </p>
                  <p>
                    Die Generation Z sucht nach Arbeitgeber:innen, die Haltung zeigen, flexibel agieren und mehr bieten als Floskeln und Flyer. Statt formeller Bewerbungsgespräche setzten wir auf echte Begegnung bei einem gemeinsamen Spiel oder im partnerschaftlichen Austausch am Spielfeldrand. Arbeitgeber präsentierten sich nahbar, glaubwürdig und einprägsam durch interaktive Formate, Challenges und authentische Markenkommunikation.
                  </p>
                  <p>
                    Durch ein umfassendes Eventpaket haben wir beim 0711 Showdown ermöglicht, potenzielle Talente auf eine moderne und interaktive Weise anzusprechen.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-24"
              >
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-12 tracking-tighter uppercase">Unsere Partner</h2>
                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
                  Als Partner waren mit dabei: ZÜBLIN, FI-TS, hagebau Bolay, Klingele Paper & Packaging sowie die Techniker Krankenkasse, die mit Vorträgen, Brainfood und konkreten Impulsen zur Leistungsfähigkeit und gesunder Ernährung beitrug.
                </p>
              </motion.div>
            </div>

            {/* Right Side: Key Services */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 sticky top-32"
              >
                <h3 className="text-2xl font-black text-slate-950 mb-8 tracking-tighter uppercase">Kernleistungen</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-2">Konzept und Umsetzung</h4>
                      <p className="text-slate-500 text-sm font-medium leading-normal">Entwicklung einer Gaming-Plattform, die speziell auf die Zielgruppe zugeschnitten ist.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-2">Qualifikationsturniere</h4>
                      <p className="text-slate-500 text-sm font-medium leading-normal">Organisation und Durchführung der digitalen Turniere zur Steigerung des Engagements und Reichweite.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-2">Finale vor Ort</h4>
                      <p className="text-slate-500 text-sm font-medium leading-normal">Spannendes Live-Finale mit aktiven Gaming-Stationen für Zuschauer und Community-Erlebnisse.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-2">Employer Branding</h4>
                      <p className="text-slate-500 text-sm font-medium leading-normal">Modernes und attraktives Eventformat, das T-Systems als innovative Arbeitgebermarke positioniert.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-200">
                  <button 
                    onClick={() => window.scrollTo({ top: document.getElementById('contact-section')?.offsetTop, behavior: 'smooth' })}
                    className="w-full py-6 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-colors duration-500 shadow-xl shadow-slate-950/20"
                  >
                    Projekt anfragen
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
