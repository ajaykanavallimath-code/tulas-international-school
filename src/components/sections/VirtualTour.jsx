import React from 'react';
import { Play, Eye, Compass, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';

export function VirtualTour({ onOpenTour, onOpenEnquiry }) {
  return (
    <section id="virtual-tour" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background panoramic image with darkening overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1600&auto=format&fit=crop"
          alt="Tulas International School Panoramic Campus View"
          className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <Reveal direction="down">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-gold/20 text-brand-gold-light border border-brand-gold/40 mb-6">
            <Compass className="w-3.5 h-3.5" />
            360° IMMERSIVE EXPERIENCE
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-black tracking-tight leading-tight mb-6">
            Explore the 22-Acre Tula's Campus in{' '}
            <span className="text-brand-gold-light font-serif italic">
              Dehradun
            </span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Take a guided digital walkthrough across our world-class smart classrooms, equestrian arena, semi-Olympic pool, robotics lab, and serene residential hostels set in the scenic foothills.
          </p>
        </Reveal>

        {/* Action button cluster */}
        <Reveal direction="zoom" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              icon={Play}
              iconPosition="left"
              onClick={onOpenTour}
              className="w-full sm:w-auto text-base shadow-2xl"
            >
              Take the Virtual Tour
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={ArrowRight}
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:text-white"
            >
              Book In-Person Campus Visit
            </Button>
          </div>
        </Reveal>

        {/* Feature summary pills */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Selaqui, Chakrata Road, Dehradun</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero-Pollution Green Environment</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-rose-400" />
              <span>Interactive 360° Panorama</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
