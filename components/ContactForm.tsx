
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section className="py-32 relative z-10 bg-slate-50" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900">Lass uns sprechen.</h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
            Wir helfen Ihnen, Zielgruppen zu aktivieren, Talente zu gewinnen oder Ihre Marke erlebbar zu machen.
          </p>
        </div>

        <div className="glass rounded-[3rem] p-10 md:p-16 border-black/5 shadow-2xl bg-white/80">
          {sent ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/30">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-3 text-slate-900">Anfrage gesendet!</h3>
              <p className="text-slate-500 font-medium text-lg">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              <button onClick={() => setSent(false)} className="mt-10 text-emerald-600 font-black hover:underline text-lg">
                Weitere Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Name</label>
                  <input required type="text" placeholder="Dein Name" className="w-full bg-slate-100 border border-transparent rounded-2xl px-8 py-5 focus:outline-none focus:bg-white focus:border-emerald-500/30 transition-all font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Unternehmen</label>
                  <input required type="text" placeholder="Deine Firma" className="w-full bg-slate-100 border border-transparent rounded-2xl px-8 py-5 focus:outline-none focus:bg-white focus:border-emerald-500/30 transition-all font-medium" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">E-Mail</label>
                  <input required type="email" placeholder="email@beispiel.de" className="w-full bg-slate-100 border border-transparent rounded-2xl px-8 py-5 focus:outline-none focus:bg-white focus:border-emerald-500/30 transition-all font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Telefon</label>
                  <input type="tel" placeholder="+49 123 456789" className="w-full bg-slate-100 border border-transparent rounded-2xl px-8 py-5 focus:outline-none focus:bg-white focus:border-emerald-500/30 transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Nachricht</label>
                <textarea required rows={5} placeholder="Wie können wir helfen?" className="w-full bg-slate-100 border border-transparent rounded-2xl px-8 py-5 focus:outline-none focus:bg-white focus:border-emerald-500/30 transition-all font-medium resize-none" />
              </div>

              <button disabled={loading} type="submit" className="w-full bg-slate-900 hover:bg-black disabled:bg-slate-700 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl">
                {loading ? <Loader2 className="w-7 h-7 animate-spin" /> : <>Anfrage senden <Send className="w-6 h-6" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
