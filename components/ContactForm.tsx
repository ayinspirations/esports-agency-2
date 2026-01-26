
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="w-full flex items-center justify-center p-2 md:p-3 lg:p-4" id="contact">
      <section className="w-full py-16 md:py-24 glass rounded-[2.5rem] md:rounded-[3.2rem] border border-[#d1dbd2] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden bg-white/90 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900">Lass uns sprechen.</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto tracking-tight">Wir helfen Ihnen, Zielgruppen zu aktivieren und Ihre Marke erlebbar zu machen.</p>
          </div>
          <div className="glass rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 border-black/5 shadow-inner bg-slate-50/50">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/30">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-3 text-slate-900 tracking-tighter">Anfrage gesendet!</h3>
                <p className="text-slate-500 font-medium text-lg">Wir melden uns innerhalb von 24 Stunden.</p>
                <button onClick={() => setSent(false)} className="mt-10 text-emerald-600 font-black hover:underline text-lg tracking-tighter">Nachricht senden</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <input required placeholder="Name" className="w-full bg-white border border-black/5 rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-emerald-500/30 transition-all font-medium tracking-tight" />
                  <input required placeholder="Unternehmen" className="w-full bg-white border border-black/5 rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-emerald-500/30 transition-all font-medium tracking-tight" />
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <input required type="email" placeholder="E-Mail" className="w-full bg-white border border-black/5 rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-emerald-500/30 transition-all font-medium tracking-tight" />
                  <input placeholder="Telefon" className="w-full bg-white border border-black/5 rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-emerald-500/30 transition-all font-medium tracking-tight" />
                </div>
                <textarea required rows={5} placeholder="Wie können wir helfen?" className="w-full bg-white border border-black/5 rounded-2xl px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:border-emerald-500/30 transition-all font-medium resize-none tracking-tight" />
                <button disabled={loading} type="submit" className="w-full bg-slate-900 hover:bg-black disabled:bg-slate-700 text-white font-black py-5 md:py-6 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl tracking-tighter text-lg md:text-xl">
                  {loading ? <Loader2 className="w-7 h-7 animate-spin" /> : <>Anfrage senden <Send className="w-6 h-6" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
