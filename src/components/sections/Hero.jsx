import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Play, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Reveal } from '../animation/Reveal';

export function Hero({ onOpenEnquiry, onOpenTour }) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 dark:from-[#060A12] dark:via-[#0B1120] dark:to-[#070B14] py-12 lg:py-20">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-brand-crimson/10 dark:bg-brand-crimson/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-brand-gold/15 dark:bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle geometric grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Tagline, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill: Modern Gurukul & Location */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <Badge variant="crimson" icon={Sparkles} size="md">
                  The Modern Gurukul
                </Badge>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-brand-crimson dark:text-brand-gold" />
                  <span>Dehradun, Foothills of Himalayas</span>
                </div>
              </div>
            </Reveal>

            {/* Main Editorial Display Title */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-black text-slate-950 dark:text-white tracking-tight leading-[1.08]">
                Where Curiosity <br className="hidden sm:inline" />
                Becomes{' '}
                <span className="relative inline-block text-crimson-gradient dark:text-gold-gradient font-serif italic">
                  Capability.
                  {/* Underline decorative flourish */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold opacity-80" viewBox="0 0 268 14" fill="none">
                    <path d="M4 10C50 4 120 4 160 5C200 6 240 10 264 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            {/* Factual Subtitle */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tula’s International School seamlessly integrates traditional Indian values of discipline and character with contemporary international CBSE academics, 16+ sports disciplines, and state-of-the-art 22-acre residential living.
              </p>
            </Reveal>

            {/* Primary & Secondary Call to Actions */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto shadow-xl"
                >
                  Enquire for Admissions 2025–26
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  icon={Play}
                  iconPosition="left"
                  onClick={onOpenTour}
                  className="w-full sm:w-auto"
                >
                  Explore Virtual Tour
                </Button>
              </div>
            </Reveal>

            {/* Trust Badges */}
            <Reveal direction="up" delay={0.5}>
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-crimson dark:text-brand-gold" />
                  <span>CBSE Affiliation (Co-Ed IV–XII)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Forbes "Great Indian School"</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="zoom" delay={0.3}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Main Hero Visual Card */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/60 dark:border-slate-700/80 shadow-2xl shadow-slate-900/15 dark:shadow-slate-950/60 aspect-[4/5] sm:aspect-[4/4.5] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop"
                    alt="Tulas International School Campus in Dehradun"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Bottom overlay text */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-brand-gold-light font-bold mb-1">
                      Lush Green Sanctuary
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                      22+ Acres of Holistic Learning in Dehradun
                    </h3>
                  </div>
                </div>

                {/* Floating Stat Card 1: Sports & Equestrian */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 dark:bg-surface-dark-card/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 shadow-xl max-w-[210px] hidden sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-crimson/10 dark:bg-brand-crimson/20 flex items-center justify-center text-brand-crimson dark:text-rose-400 font-bold">
                      16+
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                        Sports Disciplines
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Horse Riding, Archery & More
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stat Card 2: Student-Teacher Mentorship */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 dark:bg-surface-dark-card/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80 shadow-xl max-w-[190px] hidden sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 dark:bg-brand-gold/20 flex items-center justify-center text-brand-gold-dark dark:text-brand-gold-light font-bold">
                      8:1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                        Student-Teacher Ratio
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Individual Mentorship
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
