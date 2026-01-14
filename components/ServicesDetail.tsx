
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Monitor, Cpu, Camera, CheckCircle2 } from 'lucide-react';

const ServiceSection = ({ icon: Icon, title, description, items }: any) => {
  return (
    <div className="mb-32">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
          <Icon className="w-7 h-7 text-emerald-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-3 p-4 glass rounded-xl border-white/5 hover:border-emerald-500/20 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ServicesDetail: React.FC = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Leistungen mit <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">System.</span></h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Wir entwickeln Konzepte, setzen sie technisch um und begleiten Projekte operativ – von der Idee bis zur Auswertung.
          </p>
        </motion.div>

        <ServiceSection 
          icon={Gamepad2}
          title="1. Gamification & Marketing"
          description="Wir nutzen spielerische Mechaniken, um Aufmerksamkeit in echte Interaktion zu verwandeln. Gamification wird dabei gezielt als Marketing-, Recruiting- oder Aktivierungsinstrument eingesetzt."
          items={[
            "Gamification-Strategie",
            "Interaktive Kampagnen",
            "Recruiting Formate",
            "Branded Games",
            "Sponsorship Activation",
            "Lead Mechaniken"
          ]}
        />

        <ServiceSection 
          icon={Trophy}
          title="2. Gaming & eSports Events"
          description="Von Community-Turnieren bis zu professionellen Wettbewerben – wir planen, organisieren und betreiben Gaming- und eSports-Events online und offline."
          items={[
            "Online-Turniere & Ligen",
            "Offline-Events & Arenen",
            "Scouting-Wettkämpfe",
            "Creator-Events",
            "Community-Formate",
            "Eventbetrieb & Admin"
          ]}
        />

        <ServiceSection 
          icon={Monitor}
          title="3. Eventtechnik & Messeaktivierung"
          description="Wir sind kein klassischer Messebauer. Wir liefern die Technik und Aktivierung, die Markenauftritte erlebbar macht."
          items={[
            "LED-Wände & Würfel",
            "Rigging & Traversen",
            "Licht & Sound",
            "Streaming & Broadcast",
            "Gaming-Setups",
            "Technische Planung"
          ]}
        />

        <ServiceSection 
          icon={Cpu}
          title="4. Software & Plattformen"
          description="Digitale Systeme bilden das Rückgrat moderner Aktivierungen. Wir entwickeln und betreiben skalierbare Plattformlösungen."
          items={[
            "Turnier- & Ligensysteme",
            "Gamification-Module",
            "Community-Plattformen",
            "White-Label-Lösungen",
            "DSGVO-konform",
            "Lead- & Voting-Tools"
          ]}
        />

        <ServiceSection 
          icon={Camera}
          title="5. Content Creation & Streaming"
          description="Content ist Verstärker – vor, während und nach dem Event. Wir fangen Emotionen ein und machen sie teilbar."
          items={[
            "Social-Media-Videos",
            "Event-Highlights",
            "Livestream-Produktion",
            "Recruiting Content",
            "Creator-Formate",
            "Aftermovies"
          ]}
        />

        <div className="glass rounded-[3rem] p-12 md:p-20 text-center border-emerald-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Bereit für Ihr nächstes Event?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Lassen Sie uns gemeinsam ein Setup entwickeln, das Ihre Zielgruppe wirklich bewegt.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-emerald-500 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-emerald-500/20">
            Termin vereinbaren
          </a>
        </div>
      </div>
    </div>
  );
};
