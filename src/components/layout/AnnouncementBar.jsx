import React from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { announcementData } from '../../data/navigation';

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-brand-crimson-dark via-brand-crimson to-[#830C1E] text-white text-xs font-medium py-2 px-4 border-b border-rose-950/40 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left item: Helpline */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${announcementData.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-gold-light transition-colors font-semibold tracking-wide"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold-light shrink-0" />
            <span>Admissions Helpline: {announcementData.phone}</span>
          </a>
          <span className="hidden md:inline text-rose-300/40">•</span>
          <span className="hidden md:inline text-rose-100">CBSE Affiliation No. 3530397</span>
        </div>

        {/* Center / Right: Admissions announcement */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-gold-light text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-brand-gold/30">
            <Sparkles className="w-3 h-3" />
            {announcementData.badge}
          </span>
          <span className="hidden lg:inline text-rose-100/90 text-xs">
            {announcementData.text}
          </span>
          <a
            href={announcementData.ctaHref}
            className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white underline underline-offset-2 transition-colors ml-1"
          >
            <span>{announcementData.ctaText}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
