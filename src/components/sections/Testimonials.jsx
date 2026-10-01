import React from 'react';
import { Quote, Star, HeartHandshake, ShieldCheck, GraduationCap, Salad } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { testimonialsData, parentValues } from '../../data/testimonials';

const iconMap = {
  HeartHandshake,
  ShieldCheck,
  GraduationCap,
  Salad,
};

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#090F1C] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="VOICES OF OUR COMMUNITY"
          badgeVariant="crimson"
          title="What Families & Scholars Value at"
          highlight="Tula's"
          subtitle="Real reflections from parents, alumni, and students who have experienced the warmth, pastoral care, and academic transformation of our Dehradun campus."
        />

        {/* Testimonials Grid (4 Rich Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonialsData.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={0.1 * index}>
              <Card className="p-8 h-full flex flex-col justify-between border-slate-200/80 dark:border-slate-800 bg-stone-50/60 dark:bg-surface-dark-card/80 group">
                <div>
                  {/* Top Bar: Highlight Badge + Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold-light border border-brand-gold/30">
                      {item.highlight}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon & Body */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-brand-crimson/20 dark:text-brand-gold/20 mb-2" />
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-serif italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-gold/50 shadow"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs text-brand-crimson dark:text-brand-gold-light font-medium">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Value Pillars: "Why Families Choose TIS" */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white">
              Why Parents Trust the Modern Gurukul System
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentValues.map((val, idx) => {
              const IconComp = iconMap[val.icon] || HeartHandshake;

              return (
                <Reveal key={val.title} direction="up" delay={0.1 * idx}>
                  <div className="p-6 rounded-2xl bg-stone-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-center h-full flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-brand-crimson/10 dark:bg-brand-gold/15 flex items-center justify-center text-brand-crimson dark:text-brand-gold mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
