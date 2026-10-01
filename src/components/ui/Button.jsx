import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  className = '',
  disabled = false,
  fullWidth = false,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer tracking-wide';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-crimson to-brand-crimson-dark text-white hover:from-brand-crimson-light hover:to-brand-crimson shadow-md hover:shadow-brand-crimson/25 hover:shadow-xl focus-visible:ring-brand-crimson active:scale-[0.98]',
    secondary: 'bg-gradient-to-r from-brand-gold to-brand-gold-dark text-stone-950 font-bold hover:brightness-110 shadow-md hover:shadow-brand-gold/30 hover:shadow-xl focus-visible:ring-brand-gold active:scale-[0.98]',
    outline: 'border-2 border-brand-crimson text-brand-crimson dark:border-brand-gold-light dark:text-brand-gold-light hover:bg-brand-crimson hover:text-white dark:hover:bg-brand-gold-light dark:hover:text-stone-950 focus-visible:ring-brand-crimson',
    ghost: 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 focus-visible:ring-slate-400',
    white: 'bg-white text-brand-crimson-dark hover:bg-amber-50 shadow-lg hover:shadow-xl focus-visible:ring-white active:scale-[0.98]',
    teal: 'bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white hover:brightness-110 shadow-md hover:shadow-brand-teal/30 focus-visible:ring-brand-teal active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
}
