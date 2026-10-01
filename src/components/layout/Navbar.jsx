import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles, ChevronRight, Phone } from 'lucide-react';
import { navLinks, contactInfo } from '../../data/navigation';
import { Button } from '../ui/Button';

export function Navbar({ theme, toggleTheme, onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md shadow-md dark:shadow-slate-950/40 border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-white/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* TIS Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Tula's International School Homepage"
          >
            {/* Elegant Emblem Crest */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-crimson to-brand-crimson-dark flex items-center justify-center shadow-md text-brand-gold-light border border-brand-gold/40 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 14 L80 28 L80 62 C80 78 50 90 50 90 C50 90 20 78 20 62 L20 28 Z" stroke="#F5D77F" strokeWidth="6" fill="#7A0A1C" />
                <path d="M50 30 L50 72 M34 50 Q50 42 66 50" stroke="#F5D77F" strokeWidth="6" strokeLinecap="round" />
                <circle cx="50" cy="30" r="5" fill="#F5D77F" />
              </svg>
            </div>

            {/* School Typography */}
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-crimson dark:group-hover:text-brand-gold-light transition-colors leading-none">
                TULA'S
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-brand-crimson dark:text-brand-gold uppercase mt-0.5">
                International School
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-400 font-medium tracking-wider hidden sm:block">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-crimson dark:text-slate-300 dark:hover:text-brand-gold-light rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster: Theme Toggle + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-brand-gold" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Primary CTA: "Enquire Now" */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                icon={Sparkles}
                onClick={onOpenEnquiry}
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-crimson"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 top-[57px] bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden relative z-50 bg-white dark:bg-surface-dark-card border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                {/* Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-rose-50 dark:hover:bg-slate-800/80 hover:text-brand-crimson dark:hover:text-brand-gold-light transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </div>

                {/* Mobile Call-To-Action & Direct Helpline */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    icon={Sparkles}
                    onClick={() => {
                      closeMobileMenu();
                      onOpenEnquiry();
                    }}
                  >
                    Enquire Now / Admission Form
                  </Button>

                  <a
                    href={`tel:${contactInfo.phonePrimary}`}
                    className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-brand-crimson dark:text-brand-gold-light bg-rose-50 dark:bg-slate-800/80 rounded-xl"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct Helpline: {contactInfo.phonePrimary}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
