import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

import { Trees, Trophy, Users, Home, Globe, ShieldCheck } from 'lucide-react';
import { statisticsData } from '../../data/statistics';
import { Reveal } from '../animation/Reveal';

const iconMap = {
  Trees,
  Trophy,
  Users,
  Home,
  Globe,
  ShieldCheck,
};

function StatCounter({ targetValue, suffix, duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const end = targetValue;

    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const current = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, targetValue, duration]);

  return (
    <span ref={ref} className="font-serif font-black tracking-tight">
      {count}
      <span className="text-brand-gold-light ml-0.5">{suffix}</span>
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-brand-crimson-dark via-brand-crimson to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Philosophy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="down">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-gold/20 text-brand-gold-light border border-brand-gold/40 mb-4">
              TULAS AT A GLANCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Numbers That Define Our Commitment to{' '}
              <span className="text-brand-gold-light font-serif italic">
                Excellence
              </span>
            </h2>
            <p className="text-sm sm:text-base text-rose-100/80 mt-4 leading-relaxed font-normal">
              Every metric reflects our unwavering dedication to student mentorship, physical wellness, safety, and academic distinction in Dehradun.
            </p>
          </Reveal>
        </div>

        {/* 6 Metric Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {statisticsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || Trophy;

            return (
              <Reveal key={stat.id} direction="up" delay={0.1 * index}>
                <div className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-white/15 dark:border-slate-800/80 hover:border-brand-gold/50 transition-all duration-300 group hover:-translate-y-1">
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold-light group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
                    <StatCounter targetValue={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-200 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-rose-100/75 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
