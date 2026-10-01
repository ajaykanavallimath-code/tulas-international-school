import React, { useState } from 'react';
import { BookOpen, Cpu, Compass, Mic2, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';
import { academicPillars, academicStages } from '../../data/academics';

const iconMap = {
  BookOpen,
  Cpu,
  Compass,
  Mic2,
};

export function Academics({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState(academicPillars[0].id);
  const currentPillar = academicPillars.find((p) => p.id === activeTab) || academicPillars[0];
  const IconComponent = iconMap[currentPillar.icon] || BookOpen;

  return (
    <section id="academics" className="py-20 lg:py-28 bg-white dark:bg-[#090F1C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ACADEMIC PEDAGOGY"
          badgeVariant="crimson"
          title="Intellectual Rigor with"
          highlight="Experiential Discovery"
          subtitle="Affiliated with CBSE, New Delhi (Classes IV–XII), our curriculum balances deep conceptual mastery with hands-on STEM experimentation and individual university counseling."
        />

        {/* Academic Stages Overview (Pills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {academicStages.map((stage, idx) => (
            <Reveal key={stage.stage} direction="up" delay={0.1 * idx}>
              <div className="p-6 rounded-2xl bg-stone-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-crimson dark:text-brand-gold">
                    {stage.focus}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white mt-1 mb-2">
                    {stage.stage}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Academic Streams & Programs Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 px-2">
              Academic Disciplines & Centers
            </h3>
            {academicPillars.map((pillar) => {
              const TabIcon = iconMap[pillar.icon] || BookOpen;
              const isActive = pillar.id === activeTab;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-crimson to-brand-crimson-dark text-white border-transparent shadow-lg shadow-brand-crimson/20 scale-[1.02]'
                      : 'bg-stone-50/80 dark:bg-surface-dark-card/60 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-800/80 hover:bg-stone-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/80 dark:bg-slate-800 text-brand-crimson dark:text-brand-gold'
                    }`}
                  >
                    <TabIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-tight">
                      {pillar.title}
                    </h4>
                    <p
                      className={`text-xs mt-0.5 ${
                        isActive ? 'text-rose-100' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {pillar.classes}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Tab Content Detail Card */}
          <div className="lg:col-span-8">
            <Reveal key={currentPillar.id} direction="fade" duration={0.35}>
              <Card className="p-8 sm:p-10 h-full border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-stone-50 dark:from-surface-dark-card dark:to-slate-900/90 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-crimson/10 dark:bg-brand-gold/15 flex items-center justify-center text-brand-crimson dark:text-brand-gold">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark dark:text-brand-gold-light">
                          {currentPillar.classes}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 dark:text-white">
                          {currentPillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">
                    {currentPillar.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    {currentPillar.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Curricular Highlights & Infrastructure
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentPillar.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-teal dark:text-brand-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Comprehensive CBSE syllabus with continuous mentor tracking.
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={ArrowRight}
                    onClick={onOpenEnquiry}
                  >
                    Enquire for Academic Admissions
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
