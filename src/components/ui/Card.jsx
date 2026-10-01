import React from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  ...props
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`rounded-2xl border transition-all duration-300 bg-white/95 dark:bg-surface-dark-card/90 border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl dark:hover:shadow-2xl backdrop-blur-sm relative overflow-hidden ${
        glow ? 'hover:border-brand-gold/50 dark:hover:border-brand-gold/40' : 'hover:border-brand-crimson/30 dark:hover:border-brand-crimson/40'
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
