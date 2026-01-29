import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';

export const CookiePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookies-accepted', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[400px] z-[9999]"
        >
          <div className="relative overflow-hidden bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#00ff00]/10 blur-[60px] rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/20">
                  <Cookie className="w-6 h-6 text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-wider text-sm">Cookie Einstellungen</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Privatsphäre & Sicherheit</p>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Wir nutzen Cookies, um dein Erlebnis zu optimieren und unsere Services zu verbessern. Mit einem Klick auf "Akzeptieren" stimmst du der Nutzung zu.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAccept}
                  className="w-full py-4 bg-[#00ff00] hover:bg-[#00dd00] text-black text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all flex items-center justify-center gap-2 group"
                >
                  <Check className="w-4 h-4" />
                  Alle Akzeptieren
                </button>
                <button
                  onClick={handleDecline}
                  className="w-full py-4 bg-white/5 hover:bg-white/10 text-white/70 text-xs font-black uppercase tracking-[0.2em] rounded-full transition-all border border-white/10"
                >
                  Ablehnen
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
