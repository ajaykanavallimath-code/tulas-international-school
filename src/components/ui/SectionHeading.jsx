import React from 'react';
import { Badge } from './Badge';

export function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant = 'crimson',
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`mb-4 flex ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant} icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-4">
          {title}{' '}
          {highlight && (
            <span className="text-crimson-gradient dark:text-gold-gradient font-serif italic">
              {highlight}
            </span>
          )}
        </h2>
      )}

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
