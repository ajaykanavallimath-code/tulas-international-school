import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';
import { contactInfo } from '../../data/navigation';

export function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    state: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.grade) newErrors.grade = 'Please select a class';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      state: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-[#090F1C] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          badgeVariant="crimson"
          title="Connect With Our Admissions"
          highlight="Office"
          subtitle="Our dedicated admissions counselors are here to answer your queries regarding admissions, boarding routines, scholarships, and campus visits."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact & Campus Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left" delay={0.2}>
              <Card className="p-8 border-slate-200/80 dark:border-slate-800 bg-stone-50/70 dark:bg-surface-dark-card/90 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-crimson dark:text-brand-gold">
                    CAMPUS HEADQUARTERS
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    Tula's International School
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Affiliated to CBSE, New Delhi (Affiliation No. 3530397)
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-crimson/10 dark:bg-brand-crimson/20 flex items-center justify-center text-brand-crimson shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        Campus Address
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone Helpline */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 dark:bg-brand-gold/20 flex items-center justify-center text-brand-gold-dark dark:text-brand-gold-light shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        Admissions Helplines
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-brand-crimson dark:text-brand-gold-light mt-0.5">
                        <a href={`tel:${contactInfo.phonePrimary}`} className="hover:underline">
                          {contactInfo.phonePrimary}
                        </a>{' '}
                        /{' '}
                        <a href={`tel:${contactInfo.phoneSecondary}`} className="hover:underline">
                          {contactInfo.phoneSecondary}
                        </a>
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Landline: {contactInfo.landline1}, {contactInfo.landline2}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        Official Inquiries
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        <a href={`mailto:${contactInfo.email}`} className="text-brand-crimson dark:text-brand-gold-light hover:underline font-medium">
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        Office Visiting Hours
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={contactInfo.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-crimson dark:text-brand-gold-light hover:underline"
                  >
                    <span>View Location on Google Maps</span>
                    <MapPin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Right Column: Interactive Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.3}>
              <Card className="p-8 sm:p-10 border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark-card shadow-xl">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="max-w-md mx-auto">
                      <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                        Enquiry Received Successfully!
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        Thank you for your interest in Tula's International School. Our admissions officer will get in touch with you at <span className="font-semibold text-brand-crimson dark:text-brand-gold-light">{formData.phone}</span> shortly.
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleReset}>
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-brand-crimson dark:text-brand-gold uppercase tracking-wider mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Admissions 2025–26 Fast Track</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                        Admission & Campus Enquiry Form
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Parent / Guardian Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold transition-colors ${
                            errors.parentName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                          }`}
                        />
                        {errors.parentName && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.parentName}
                          </p>
                        )}
                      </div>

                      {/* Contact Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98379 83791"
                          className={`w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email (Optional) */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold transition-colors ${
                            errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Class applying for */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                          Grade / Class Applying For *
                        </label>
                        <select
                          required
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-slate-800/80 border text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold transition-colors ${
                            errors.grade ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <option value="">Select Class (IV to XII)</option>
                          <option value="Class IV">Class IV (Middle School)</option>
                          <option value="Class V">Class V</option>
                          <option value="Class VI">Class VI</option>
                          <option value="Class VII">Class VII</option>
                          <option value="Class VIII">Class VIII</option>
                          <option value="Class IX">Class IX (Secondary)</option>
                          <option value="Class X">Class X</option>
                          <option value="Class XI - Science">Class XI - Science Stream</option>
                          <option value="Class XI - Commerce">Class XI - Commerce Stream</option>
                          <option value="Class XI - Humanities">Class XI - Humanities Stream</option>
                          <option value="Class XII">Class XII</option>
                        </select>
                        {errors.grade && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.grade}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* State / City */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Current City / State / Country
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. New Delhi, Dubai, Mumbai"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold transition-colors"
                      />
                    </div>

                    {/* Message / Questions */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Questions or Specific Interests (Sports / Boarding / Fee)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please tell us about your child's interests or any specific queries..."
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-crimson dark:focus:ring-brand-gold transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      icon={Send}
                      className="shadow-xl"
                    >
                      {isSubmitting ? 'Submitting Enquiry...' : 'Submit Admission Enquiry'}
                    </Button>

                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                      🔒 Your contact information is confidential and will only be used by TIS Admissions Counselors.
                    </p>
                  </form>
                )}

              </Card>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
