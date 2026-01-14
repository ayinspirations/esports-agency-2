
import React from 'react';
import { motion } from 'framer-motion';

export const SocialProof: React.FC = () => {
  const brands = [
    "Industrie", "Handel", "Sport", "Technologie", "Verbände", "Marken"
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-[0.2em] mb-12">
          Vertrauen von führenden Partnern
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-bold text-white/40 hover:text-emerald-500/60 transition-colors cursor-default"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
