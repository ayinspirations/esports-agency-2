
import React from 'react';
import { HubSpotForm } from './HubSpotForm';

export const ContactForm: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-14 scroll-mt-32" id="contact">
      <section className="w-full max-w-5xl mx-auto py-12 md:py-20 relative">
        <div className="relative z-10">
          {/* Headline and Subtext stay on the light canvas */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-slate-900 uppercase">
              Lass uns sprechen.
            </h2>
            <p className="text-slate-600 text-lg md:text-2xl font-bold max-w-2xl mx-auto tracking-tight leading-tight">
              Wir helfen Ihnen, Zielgruppen zu aktivieren und Ihre Marke erlebbar zu machen.
            </p>
          </div>
          
          {/* The Contact Form Container with Hero Background */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-[#020617] border border-white/10 min-h-[600px]">
            {/* Hero Background Elements inside the Form Box */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[#020617]" />
              
              {/* Color Blobs */}
              <div 
                className="absolute -top-[10%] -left-[5%] w-[80%] h-[80%] opacity-40"
                style={{
                  background: 'radial-gradient(circle at 20% 20%, #00818d 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
              
              {/* Grid/Line Pattern */}
              <div 
                className="absolute top-0 right-0 w-full h-full opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(115deg, transparent, transparent 38px, rgba(20, 184, 166, 0.4) 38px, rgba(20, 184, 166, 0.4) 39.5px)`,
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%), linear-gradient(to left, black 0%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%), linear-gradient(to left, black 0%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
              />

              {/* Video Background Layer */}
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-overlay">
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Form Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-20">
              <HubSpotForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
