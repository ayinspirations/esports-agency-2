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

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isVisible]);

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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 flex items-center justify-center z-[9999] px-6"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          />

          <div className="relative overflow-hidden bg-white/90 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] p-10 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] max-w-[500px] w-full">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-[#00ff00]/10 blur-[80px] rounded-full" />
            
            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/20 mb-6">
                  <Cookie className="w-8 h-8 text-[#00ff00]" />
                </div>
                <h3 className="text-slate-900 font-black uppercase tracking-wider text-xl mb-2">Cookie-Einstellungen</h3>
                <p className="text-slate-500 text-[11px] uppercase tracking-[0.3em] font-bold">Privatsphäre & Sicherheit</p>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
                Wir nutzen Cookies, um dein Erlebnis zu optimieren und unsere Services zu verbessern. Mit einem Klick auf "Akzeptieren" stimmst du der Nutzung zu.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleAccept}
                  className="w-full py-5 bg-[#00ff00] hover:bg-[#00dd00] text-black text-[13px] font-black uppercase tracking-[0.25em] rounded-full transition-all flex items-center justify-center gap-3 group shadow-lg shadow-[#00ff00]/20"
                >
                  <Check className="w-5 h-5" />
                  Alle Akzeptieren
                </button>
                <button
                  onClick={handleDecline}
                  className="w-full py-5 bg-slate-900/5 hover:bg-slate-900/10 text-slate-700 text-[13px] font-black uppercase tracking-[0.25em] rounded-full transition-all border border-slate-900/10"
                >
                  Ablehnen
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
