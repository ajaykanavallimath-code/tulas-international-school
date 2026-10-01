import React from 'react';
import { Award, Trophy, Medal, Flame, Star, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { achievementsData } from '../../data/achievements';

const iconMap = {
  Award,
  Trophy,
  Medal,
  Flame,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-stone-50 dark:bg-[#070B14] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="AWARDS & RECOGNITIONS"
          badgeVariant="gold"
          title="National Benchmarks in"
          highlight="Educational Quality"
          subtitle="Honored by premier educational bodies, national ranking surveys, and sporting federations for our excellence in residential co-educational schooling."
        />

        {/* 4 Core Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {achievementsData.map((award, index) => {
            const IconComponent = iconMap[award.icon] || Award;

            return (
              <Reveal key={award.id} direction="up" delay={0.1 * index}>
                <Card className="p-8 h-full flex flex-col justify-between border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-surface-dark-card/90 group hover:border-brand-gold/50">
                  <div>
                    {/* Top Header: Badge + Year */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold-light border border-brand-gold/30">
                        {award.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {award.year}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-crimson to-brand-crimson-dark flex items-center justify-center text-brand-gold-light shadow-md shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-brand-crimson dark:text-rose-400 uppercase tracking-wide">
                          {award.organization}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                          {award.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {award.description}
                    </p>
                  </div>

                  {/* Bottom validation tag */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Academic & Residential Accreditation</span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Highlight quote banner */}
        <Reveal direction="zoom" delay={0.3}>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-crimson/10 via-brand-gold/10 to-transparent border border-brand-crimson/20 dark:border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                "Ranked #1 for Holistic Development & Sports Infrastructure"
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Committed to shaping well-rounded, ethical, and intellectually empowered global citizens.
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-500 shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
