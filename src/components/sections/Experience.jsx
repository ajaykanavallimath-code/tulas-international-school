import React from 'react';
import { Sparkles, Trophy, GraduationCap, Home, Palette, Globe } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { experiencePillars } from '../../data/experience';

const iconMap = {
  Sparkles,
  Trophy,
  GraduationCap,
  Home,
  Palette,
  Globe,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-stone-50 dark:bg-[#070B14] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE TULAS EXPERIENCE"
          badgeVariant="gold"
          title="Six Essential Pillars of"
          highlight="Holistic Excellence"
          subtitle="At Tula's International School, education extends far beyond textbooks. We nurture intellect, physical agility, aesthetic sensibility, and emotional resilience through a balanced residential routine."
        />

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiencePillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;

            return (
              <Reveal key={pillar.title} direction="up" delay={0.1 * index}>
                <Card className="p-8 h-full flex flex-col justify-between group border-slate-200/80 dark:border-slate-800 hover:border-brand-gold/50 dark:hover:border-brand-gold/40">
                  {/* Top Bar: Number + Category Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl font-black text-slate-300 dark:text-slate-700 group-hover:text-brand-crimson dark:group-hover:text-brand-gold transition-colors">
                        {pillar.number}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-gold/15 group-hover:text-brand-gold-dark dark:group-hover:text-brand-gold-light transition-colors">
                        {pillar.category}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 group-hover:from-brand-crimson/15 group-hover:to-brand-gold/15 flex items-center justify-center text-brand-crimson dark:text-brand-gold mb-5 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-crimson dark:group-hover:text-brand-gold-light transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Footer Stat Pill */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span>Key Feature</span>
                    <span className="text-brand-crimson dark:text-brand-gold-light font-bold">
                      {pillar.stat}
                    </span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
