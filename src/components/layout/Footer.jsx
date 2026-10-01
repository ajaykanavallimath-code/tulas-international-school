import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';
import { navLinks, quickLinks, contactInfo } from '../../data/navigation';


const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">

      {/* Decorative backdrop glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-crimson/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: School Branding & Summary */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-crimson-dark flex items-center justify-center shadow-lg text-brand-gold-light border border-brand-gold/40">
                <svg className="w-7 h-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 14 L80 28 L80 62 C80 78 50 90 50 90 C50 90 20 78 20 62 L20 28 Z" stroke="#F5D77F" strokeWidth="6" fill="#7A0A1C" />
                  <path d="M50 30 L50 72 M34 50 Q50 42 66 50" stroke="#F5D77F" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="50" cy="30" r="5" fill="#F5D77F" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-black text-xl text-white tracking-tight leading-none">
                  TULA'S INTERNATIONAL SCHOOL
                </h3>
                <p className="text-xs font-semibold text-brand-gold-light tracking-[0.2em] uppercase mt-1">
                  The Modern Gurukul • Dehradun
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Established in 2012 under the aegis of Rishabh Educational Trust, Tula’s International School merges the timeless wisdom and ethical grounding of the traditional Gurukul system with modern 21st-century international education, STEM innovation, and 16+ sports disciplines.
            </p>

            {/* Accreditations badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-brand-gold" />
                <span>CBSE Affiliated (3530397)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Forbes Great Indian School</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-slate-800 pb-2 inline-block">
              Explore Campus
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-gold-light transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson group-hover:scale-125 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-slate-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-gold-light transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:scale-125 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white tracking-wide border-b border-slate-800 pb-2 inline-block">
              Campus Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-crimson-light shrink-0" />
                <a href={`tel:${contactInfo.phonePrimary}`} className="hover:text-white transition-colors">
                  {contactInfo.phonePrimary} / {contactInfo.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {CURRENT_YEAR} Tula’s International School, Dehradun. All rights reserved.</p>
          <div className="flex items-center gap-6">

            <span className="text-slate-600 hidden sm:inline">Co-Educational CBSE Residential Boarding School (Classes IV – XII)</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brand-gold-light transition-colors px-3 py-1 rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
