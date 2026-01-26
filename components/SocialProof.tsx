
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'AMD', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg' },
  { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
  { name: 'Steam', url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg' },
  { name: 'NVIDIA', url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'ASUS', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg' },
  { name: 'Razer', url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Razer_snake_logo.svg' },
  { name: 'Twitch', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_logo.svg' },
  { name: 'Corsair', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Corsair_Logo.svg' },
  { name: 'Logitech', url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Logitech_logo.svg' },
  { name: 'MSI', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/MSI_Logo.svg' }
];

export const SocialProof: React.FC = () => {
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden select-none">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 50s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Apple-inspired Headline Section - Centered */}
      <div className="pb-16 md:pb-24 px-6 md:px-14">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[clamp(44px,7.5vw,110px)] font-black leading-[0.85] tracking-tighter uppercase flex flex-col items-center">
              <span className="text-slate-950">Brands we</span>
              <span className="text-slate-400/90">leveling up.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Infinite Logo Band */}
      <div className="relative flex overflow-hidden group py-0">
        <div className="animate-marquee-scroll flex items-center gap-16 md:gap-32 lg:gap-40 whitespace-nowrap min-w-max px-20 py-4">
          {marqueeLogos.map((logo, i) => (
            <div 
              key={`${logo.name}-${i}`} 
              className="flex items-center justify-center grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-6 md:h-10 lg:h-12 w-auto object-contain max-w-[100px] md:max-w-[180px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Linear-inspired Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-[200px] lg:w-[400px] bg-gradient-to-r from-[#d1dbd2] via-[#d1dbd2]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-[200px] lg:w-[400px] bg-gradient-to-l from-[#d1dbd2] via-[#d1dbd2]/80 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};
