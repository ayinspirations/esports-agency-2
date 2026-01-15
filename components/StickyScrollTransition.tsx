
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WhyUs } from './WhyUs';
import { UseCases } from './UseCases';

// Define props for StickyScrollTransition component
interface StickyScrollTransitionProps {
  onNavigate?: (page: 'home' | 'services') => void;
}

export const StickyScrollTransition: React.FC<StickyScrollTransitionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Compressed the scroll timeline significantly to remove the "dead space" gap.
  // The container height is reduced to 100vh so the transition happens quickly.
  
  // WhyUs (First Section)
  const whyUsOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const whyUsY = useTransform(scrollYProgress, [0.4, 0.5], [0, -40]);
  const whyUsScale = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.98]);

  // UseCases (Second Section)
  // Reaches full visibility and final position at 0.85, 
  // ensuring it's "set" right before the sticky container finishes at 1.0.
  const useCasesOpacity = useTransform(scrollYProgress, [0.5, 0.65, 0.9, 1], [0, 1, 1, 0.8]);
  const useCasesY = useTransform(scrollYProgress, [0.45, 0.65], [40, 0]);

  return (
    <div ref={containerRef} className="relative h-[100vh]">
      {/* 
          Sticky container is centered and takes up a fixed viewport area.
          The 'top' value and 'h-auto' ensure it doesn't force extra page length.
      */}
      <div className="sticky top-20 md:top-24 h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        
        {/* WhyUs Section */}
        <motion.div 
          style={{ opacity: whyUsOpacity, y: whyUsY, scale: whyUsScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full">
            <WhyUs />
          </div>
        </motion.div>

        {/* UseCases Section */}
        <motion.div 
          style={{ opacity: useCasesOpacity, y: useCasesY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full">
            <UseCases />
          </div>
        </motion.div>

      </div>
    </div>
  );
};
