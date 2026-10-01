import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';

export function About({ onOpenEnquiry }) {
  const pillars = [
    {
      title: 'The Modern Gurukul Philosophy',
      desc: 'Infusing time-honored Indian traditions of respect, integrity, and discipline with 21st-century global inquiry-based learning.',
    },
    {
      title: 'Pollution-Free 22-Acre Residential Campus',
      desc: 'Situated amidst the tranquil pine-scented foothills of Dehradun, providing an idyllic sanctuary for focused academic and physical growth.',
    },
    {
      title: 'Comprehensive Co-Educational Boarding (Grades 4–12)',
      desc: 'Nurturing independent, empathetic, and culturally conscious leaders through personalized residential pastoral care.',
    },
    {
      title: 'Holistic 360° Student Development',
      desc: 'Equally prioritizing CBSE academic rigor, 16+ sports disciplines, fine arts, music, leadership summits, and community service.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-[#090F1C] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Multiple Angles */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 dark:border-slate-800 aspect-[4/3] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop"
                    alt="Students collaborating at Tula's International School"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Secondary Inset Image */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3] hidden sm:block bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop"
                    alt="Classroom and faculty mentorship at TIS"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Founder Badge */}
                <div className="absolute -top-6 -left-4 sm:-left-6 bg-brand-crimson text-white rounded-2xl p-4 shadow-xl max-w-[200px] border border-rose-400/30">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold-light">
                    Est. 2012
                  </p>
                  <p className="text-xs font-semibold leading-snug mt-0.5">
                    Under the Aegis of Rishabh Educational Trust
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Copy & Core Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <SectionHeading
              align="left"
              badge="ABOUT TIS"
              badgeVariant="crimson"
              title="Redefining Residential Education Through the"
              highlight="Modern Gurukul."
              subtitle="Tula's International School was established with a singular vision: to create an educational ecosystem where academic rigor coexists in perfect harmony with character, discipline, and compassionate human values."
              className="!mb-6"
            />

            {/* Core Pillars List */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, index) => (
                <Reveal key={item.title} direction="up" delay={0.15 * index}>
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-brand-gold/30 transition-colors">
                    <div className="w-7 h-7 rounded-xl bg-brand-crimson/10 dark:bg-brand-gold/15 flex items-center justify-center text-brand-crimson dark:text-brand-gold shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Action CTA */}
            <Reveal direction="up" delay={0.4}>
              <div className="pt-2 flex items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={onOpenEnquiry}
                >
                  Discover the TIS Journey
                </Button>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
