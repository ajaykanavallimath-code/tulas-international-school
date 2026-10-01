import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';
import { sportsData, sportsCategories } from '../../data/sports';

export function Sports({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All Sports');
  const [activeSport, setActiveSport] = useState(sportsData[0]);

  const filteredSports =
    selectedCategory === 'All Sports'
      ? sportsData
      : sportsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="sports" className="py-20 lg:py-28 bg-white dark:bg-[#090F1C] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-crimson/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SPORTS & ATHLETICS"
          badgeVariant="crimson"
          title="It's Not Just a Facility. At Tula's, It's the"
          highlight="Foundation."
          subtitle="With 16+ structured sports disciplines, certified national coaches, and Olympic-standard infrastructure, sports instill leadership, grit, and lifelong fitness in every student."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {sportsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-crimson text-white shadow-md shadow-brand-crimson/25 scale-105'
                  : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Sport Spotlight + Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Active Sport Spotlight (Hero Card) */}
          <div className="lg:col-span-5">
            <Reveal key={activeSport.id} direction="left" duration={0.4}>
              <Card className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-xl bg-slate-900 text-white sticky top-24">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={activeSport.image}
                    alt={activeSport.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-gold text-slate-950 uppercase tracking-wider shadow">
                      {activeSport.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs uppercase font-bold tracking-widest text-brand-gold-light">
                      {activeSport.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      {activeSport.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-4">
                  <p className="text-xs font-semibold text-brand-gold-light">
                    {activeSport.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {activeSport.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Infrastructure & Coaching Features
                    </p>
                    {activeSport.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth
                      icon={ArrowRight}
                      onClick={onOpenEnquiry}
                    >
                      Enquire for Sports Admissions
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Right Column: Grid of Sports Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSports.map((sport, index) => {
                const isSelected = sport.id === activeSport.id;

                return (
                  <Reveal key={sport.id} direction="up" delay={0.05 * index}>
                    <button
                      type="button"
                      onClick={() => setActiveSport(sport)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer group ${
                        isSelected
                          ? 'bg-rose-50/80 dark:bg-rose-950/20 border-brand-crimson dark:border-rose-500 shadow-md scale-[1.02]'
                          : 'bg-stone-50/80 dark:bg-surface-dark-card/70 border-slate-200/80 dark:border-slate-800/80 hover:border-brand-gold/50'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-200 dark:border-slate-700">
                        <img
                          src={sport.image}
                          alt={sport.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-crimson dark:text-brand-gold">
                            {sport.category}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                            {sport.badge}
                          </span>
                        </div>

                        <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-brand-crimson dark:group-hover:text-brand-gold-light">
                          {sport.name}
                        </h4>

                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                          {sport.tagline}
                        </p>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
