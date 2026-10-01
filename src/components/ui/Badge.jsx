import React from 'react';

export function Badge({
  children,
  variant = 'gold',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const variantStyles = {
    gold: 'bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold-light border-brand-gold/30',
    crimson: 'bg-brand-crimson/10 text-brand-crimson dark:text-rose-400 border-brand-crimson/20',
    teal: 'bg-brand-teal/10 text-brand-teal-dark dark:text-teal-300 border-brand-teal/30',
    dark: 'bg-slate-800 text-slate-200 border-slate-700',
    white: 'bg-white/90 text-slate-900 border-white/40 shadow-sm',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1 text-xs sm:text-sm font-semibold',
    lg: 'px-4 py-1.5 text-sm font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-sm tracking-wider uppercase font-medium ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
