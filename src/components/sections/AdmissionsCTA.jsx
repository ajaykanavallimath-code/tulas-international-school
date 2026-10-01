import React from 'react';
import { Sparkles, FileText, CheckCircle2, ArrowRight, UserCheck, School } from 'lucide-react';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';


export function AdmissionsCTA({ onOpenEnquiry }) {
  const admissionSteps = [
    {
      step: '01',
      title: 'Online Enquiry & Registration',
      description: 'Fill the quick admission enquiry form or connect directly with our admissions counselor.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Campus Tour & Interactive Session',
      description: 'Visit our 22-acre Dehradun campus or join a digital interactive session to understand our ethos.',
      icon: School,
    },
    {
      step: '03',
      title: 'Aptitude & Holistic Assessment',
      description: 'Age-appropriate interaction designed to understand the child’s learning readiness and interests.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'Provisional Offer & Welcome',
      description: 'Completion of documentation, house allotment, and induction into the Modern Gurukul family.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-stone-50 dark:bg-[#070B14] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-crimson/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card with Gradient Border */}
        <Reveal direction="zoom">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-brand-crimson via-brand-crimson-dark to-slate-950 text-white shadow-2xl overflow-hidden border border-rose-500/30 mb-16">
            
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-gold text-slate-950 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                ADMISSIONS OPEN FOR 2025–2026
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight">
                Discover the Tula's Experience. <br />
                <span className="text-brand-gold-light font-serif italic">
                  Shape Tomorrow's Leaders Today.
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-rose-100/90 leading-relaxed font-normal">
                Admissions are open for boys and girls from Class IV to XII. Give your child the gift of world-class academics, 16+ sports disciplines, and timeless moral values in the Himalayan serenity of Dehradun.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto text-base shadow-2xl"
                >
                  Apply / Enquire for Admissions
                </Button>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto"
                >
                  Contact Admissions Office
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Steps Admission Roadmap */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-crimson dark:text-brand-gold">
              TRANSPARENT & SIMPLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mt-1">
              Your 4-Step Admission Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, idx) => {
              const StepIcon = step.icon;

              return (
                <Reveal key={step.step} direction="up" delay={0.1 * idx}>
                  <Card className="p-6 h-full flex flex-col justify-between border-slate-200/80 dark:border-slate-800 bg-white dark:bg-surface-dark-card group hover:border-brand-crimson/40">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-brand-crimson dark:group-hover:text-brand-gold transition-colors">
                          {step.step}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-brand-crimson/10 dark:bg-brand-gold/15 flex items-center justify-center text-brand-crimson dark:text-brand-gold">
                          <StepIcon className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {step.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
