import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth physics spring for immediate and responsive tracking
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-crimson via-brand-gold to-brand-teal origin-left z-[999999] pointer-events-none shadow-[0_1px_6px_rgba(200,155,60,0.7)]"
      style={{
        scaleX,
        transformOrigin: '0% 50%',
      }}
    />
  );
}
