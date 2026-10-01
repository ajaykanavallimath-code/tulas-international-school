import React from 'react';
import { Building2, Utensils, Stethoscope, Library, ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';
import { campusFacilities } from '../../data/campus';

const iconMap = {
  Building2,
  Utensils,
  Stethoscope,
  Library,
};

export function Campus({ onOpenTour, onOpenEnquiry }) {
  return (
    <section id="campus" className="py-20 lg:py-28 bg-stone-100/70 dark:bg-[#070B14] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CAMPUS & BOARDING LIFE"
          badgeVariant="teal"
          title="A 22-Acre Residential Oasis in the"
          highlight="Himalayan Foothills"
          subtitle="Designed to provide a secure, enriching 'home away from home'. Our fully residential campus ensures complete peace of mind for parents with modern dorms, nutritious dining, and round-the-clock medical care."
        />

        {/* Featured Campus Banner with Immersive Photography */}
        <Reveal direction="zoom" delay={0.2} className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[16/9] md:aspect-[21/9] bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop"
              alt="Tulas International School 22-Acre Campus Grounds in Dehradun"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light border border-brand-gold/40 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Secure Residential Living
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Pastoral Care, Serenity & Unmatched Infrastructure
                </h3>
              </div>

              <Button
                variant="secondary"
                size="md"
                onClick={onOpenTour}
                className="shrink-0"
              >
                Tour the Campus
              </Button>
            </div>
          </div>
        </Reveal>

        {/* 4 Core Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusFacilities.map((facility, index) => {
            const IconComp = iconMap[facility.icon] || Building2;

            return (
              <Reveal key={facility.id} direction="up" delay={0.1 * index}>
                <Card className="h-full flex flex-col justify-between overflow-hidden group border-slate-200/80 dark:border-slate-800">
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/90 dark:bg-slate-900/90 text-brand-crimson dark:text-brand-gold flex items-center justify-center shadow">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider drop-shadow">
                        {facility.stats}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-crimson dark:group-hover:text-brand-gold-light transition-colors">
                        {facility.title}
                      </h4>
                      <p className="text-xs text-brand-crimson dark:text-brand-gold font-semibold mb-2">
                        {facility.tagline}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <Reveal direction="up" delay={0.4} className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-white/90 dark:bg-surface-dark-card/90 border border-slate-200 dark:border-slate-800 shadow-md">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Want to visit our campus in Dehradun in person?
            </span>
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRight}
              onClick={onOpenEnquiry}
            >
              Schedule Campus Visit
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
