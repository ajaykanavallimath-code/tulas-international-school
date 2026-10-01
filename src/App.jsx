import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { CustomCursor } from './components/animation/CustomCursor';
import { ScrollProgress } from './components/animation/ScrollProgress';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';

// Sections
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Academics } from './components/sections/Academics';
import { Campus } from './components/sections/Campus';
import { Sports } from './components/sections/Sports';
import { Statistics } from './components/sections/Statistics';
import { Achievements } from './components/sections/Achievements';
import { Testimonials } from './components/sections/Testimonials';
import { VirtualTour } from './components/sections/VirtualTour';
import { AdmissionsCTA } from './components/sections/AdmissionsCTA';
import { Contact } from './components/sections/Contact';

// Icons & Data
import { CheckCircle2, Send, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { contactInfo } from './data/navigation';



export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Modal dialog states
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  // Modal Enquiry Form State
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
  });
  const [modalErrors, setModalErrors] = useState({});
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!modalForm.name.trim()) errors.name = 'Please enter student or parent name';
    if (!modalForm.phone.trim()) errors.phone = 'Please enter mobile number';
    if (!modalForm.grade) errors.grade = 'Please select a grade';

    if (Object.keys(errors).length > 0) {
      setModalErrors(errors);
      return;
    }

    setModalSubmitted(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setTimeout(() => {
      setModalSubmitted(false);
      setModalForm({ name: '', phone: '', email: '', grade: '' });
      setModalErrors({});
    }, 300);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 selection:bg-brand-crimson selection:text-brand-gold-light transition-colors duration-300">
      
      {/* Standout Feature 4: Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Standout Feature 1: Smooth Spring Follower Custom Cursor */}
      <CustomCursor />

      {/* Header & Navigation */}
      <AnnouncementBar />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenTour={() => setIsTourOpen(true)}
        />
        
        <About onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        
        <Experience />
        
        <Academics onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        
        <Campus
          onOpenTour={() => setIsTourOpen(true)}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
        
        <Sports onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        
        <Statistics />
        
        <Achievements />
        
        <Testimonials />
        
        <VirtualTour
          onOpenTour={() => setIsTourOpen(true)}
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
        
        <AdmissionsCTA onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Interactive Modal: Admissions Enquiry Fast-Track */}
      <Modal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        title="Admissions Enquiry 2025–2026"
      >
        {modalSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
              Thank you for connecting with TIS!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
              Our Admissions Dean will reach out to you shortly at <span className="font-bold text-brand-crimson dark:text-brand-gold">{modalForm.phone}</span>.
            </p>
            <Button variant="primary" size="sm" onClick={handleCloseEnquiry}>
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleModalSubmit} className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-950/40 p-3.5 rounded-2xl border border-rose-200 dark:border-rose-900/50 flex items-center gap-3 text-xs text-brand-crimson dark:text-rose-300">
              <Sparkles className="w-4 h-4 shrink-0 text-brand-gold" />
              <span>Co-Ed Residential School • Classes IV to XII • CBSE Affiliated</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Parent / Student Name *
              </label>
              <input
                type="text"
                required
                value={modalForm.name}
                onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                placeholder="Enter Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold outline-none"
              />
              {modalErrors.name && (
                <p className="text-xs text-red-500 mt-1">{modalErrors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={modalForm.phone}
                  onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                  placeholder="+91 98379 83791"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold outline-none"
                />
                {modalErrors.phone && (
                  <p className="text-xs text-red-500 mt-1">{modalErrors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Grade / Class *
                </label>
                <select
                  required
                  value={modalForm.grade}
                  onChange={(e) => setModalForm({ ...modalForm, grade: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold outline-none"
                >
                  <option value="">Select Grade</option>
                  <option value="Class IV">Class IV</option>
                  <option value="Class V">Class V</option>
                  <option value="Class VI">Class VI</option>
                  <option value="Class VII">Class VII</option>
                  <option value="Class VIII">Class VIII</option>
                  <option value="Class IX">Class IX</option>
                  <option value="Class X">Class X</option>
                  <option value="Class XI">Class XI</option>
                  <option value="Class XII">Class XII</option>
                </select>
                {modalErrors.grade && (
                  <p className="text-xs text-red-500 mt-1">{modalErrors.grade}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={modalForm.email}
                onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold outline-none"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md" fullWidth icon={Send}>
                Submit Fast-Track Enquiry
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* Interactive Modal: Virtual Tour 360° Preview */}
      <Modal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        title="Tula's Campus 360° Walkthrough"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-4">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
              alt="Tulas International School Campus Aerial View"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 flex items-center justify-center p-6 text-center">
              <div className="max-w-lg space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-gold text-slate-950">
                  22-Acre Residential Campus
                </span>
                <h4 className="font-serif text-2xl font-bold text-white">
                  Dehradun Foothills Campus
                </h4>
                <p className="text-xs sm:text-sm text-slate-200">
                  Visit Dhoolkot, P.O. – Selaqui, Chakrata Road, Dehradun (Uttarakhand) or connect with admissions for an in-person guided walking tour.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-brand-crimson dark:text-brand-gold" />
              <span>Direct Helpline: {contactInfo.phonePrimary}</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={contactInfo.virtualTourUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-crimson dark:text-brand-gold-light hover:underline"
              >
                <span>Visit Official School Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setIsTourOpen(false);
                  setIsEnquiryOpen(true);
                }}
              >
                Schedule Guided Visit
              </Button>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  );
}
