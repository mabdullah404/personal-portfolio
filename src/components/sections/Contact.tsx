'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { 
  MailIcon, 
  PhoneIcon, 
  GithubIcon, 
  LinkedinIcon, 
  WhatsappIcon,
  CheckCircleIcon,
  ExternalLinkIcon
} from '@/components/ui/Icons';

export function Contact() {
  const { socials } = profileData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 700);
  }

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20 border-t border-slate-200 bg-white dark:border-zinc-900 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
            <span className="h-px w-6 bg-red-600 dark:bg-red-400" />
            <span>06 / Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Get In <span className="text-red-600 dark:text-red-500">Touch</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            Have a project idea, feedback, or a junior opportunity? Connect directly through my verified email, phone, WhatsApp, or socials.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Channels Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:shadow-xl dark:shadow-black/20">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-700 dark:text-zinc-300 font-semibold">
                Direct Contact Channels
              </h3>

              <div className="space-y-3">
                {/* Email with direct mailto */}
                <a
                  href={`mailto:${socials.email}`}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-400/50 hover:bg-slate-100 flex items-center justify-between group transition-all dark:bg-zinc-950 dark:border-zinc-800/80 dark:hover:border-red-500/40 dark:hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-rose-50 text-red-600 border border-rose-200 group-hover:bg-red-100 transition-colors dark:bg-zinc-900 dark:border-transparent dark:text-red-400">
                      <MailIcon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase font-mono block">Email Address</span>
                      <span className="text-sm text-slate-800 group-hover:text-red-600 font-medium dark:text-zinc-200 dark:group-hover:text-red-400">{socials.email}</span>
                    </div>
                  </div>
                  <span className="text-xs text-red-600 dark:text-red-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Mail ↗</span>
                </a>

                {/* Phone with direct tel link */}
                <a
                  href={`tel:${socials.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-400/50 hover:bg-slate-100 flex items-center justify-between group transition-all dark:bg-zinc-950 dark:border-zinc-800/80 dark:hover:border-red-500/40 dark:hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-rose-50 text-red-600 border border-rose-200 group-hover:bg-red-100 transition-colors dark:bg-zinc-900 dark:border-transparent dark:text-red-400">
                      <PhoneIcon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase font-mono block">Phone Number</span>
                      <span className="text-sm text-slate-800 group-hover:text-red-600 font-medium dark:text-zinc-200 dark:group-hover:text-red-400">{socials.phone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-red-600 dark:text-red-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Call ↗</span>
                </a>

                {/* WhatsApp with direct link */}
                <a
                  href={`https://wa.me/8801717697404`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400/50 hover:bg-slate-100 flex items-center justify-between group transition-all dark:bg-zinc-950 dark:border-zinc-800/80 dark:hover:border-emerald-500/40 dark:hover:bg-zinc-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 group-hover:bg-emerald-100 transition-colors dark:bg-zinc-900 dark:border-transparent dark:text-emerald-400">
                      <WhatsappIcon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase font-mono block">WhatsApp Chat</span>
                      <span className="text-sm text-slate-800 group-hover:text-emerald-600 font-medium dark:text-zinc-200 dark:group-hover:text-emerald-400">{socials.whatsapp}</span>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Chat ↗</span>
                </a>
              </div>
            </div>

            {/* Social Media Channels Box */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-700 dark:text-zinc-300 font-semibold">
                Verified Social Profiles
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 hover:text-red-600 transition-all text-slate-700 text-xs font-medium dark:bg-zinc-950 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:text-red-400"
                >
                  <GithubIcon size={16} className="text-red-600 dark:text-red-400 shrink-0" />
                  <span>GitHub</span>
                  <ExternalLinkIcon size={12} className="ml-auto text-slate-400 dark:text-zinc-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 hover:text-red-600 transition-all text-slate-700 text-xs font-medium dark:bg-zinc-950 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:text-red-400"
                >
                  <LinkedinIcon size={16} className="text-red-600 dark:text-red-400 shrink-0" />
                  <span>LinkedIn</span>
                  <ExternalLinkIcon size={12} className="ml-auto text-slate-400 dark:text-zinc-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                </a>

                {socials.twitter && (
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 hover:text-red-600 transition-all text-slate-700 text-xs font-medium sm:col-span-2 dark:bg-zinc-950 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:text-red-400"
                  >
                    <span className="flex h-4 w-4 items-center justify-center font-bold text-red-600 dark:text-red-400 text-xs shrink-0">𝕏</span>
                    <span>Twitter / X (@mabdullah77d)</span>
                    <ExternalLinkIcon size={12} className="ml-auto text-slate-400 dark:text-zinc-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Send a Direct Message</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Feel free to send inquiries, feedback, or collaboration requests.
                </p>
              </div>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-50 p-4 text-sm text-emerald-800 flex items-start gap-3 dark:bg-emerald-950/40 dark:text-emerald-300">
                  <CheckCircleIcon size={20} className="shrink-0 mt-0.5 text-emerald-600" />
                  <div className="space-y-1">
                    <p className="font-semibold text-emerald-900 dark:text-emerald-200">Message validated successfully!</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300/80">
                      Thank you for reaching out. In production, connect this form to your preferred email handler (e.g., Formspree or Resend).
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                      Your Name <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abdullah"
                      className={`w-full rounded-xl bg-slate-50 border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-white dark:focus:border-red-500 dark:focus:ring-red-500/20 ${
                        errors.name ? 'border-red-500' : 'border-slate-200 dark:border-zinc-800'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                      Your Email <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className={`w-full rounded-xl bg-slate-50 border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-white dark:focus:border-red-500 dark:focus:ring-red-500/20 ${
                        errors.email ? 'border-red-500' : 'border-slate-200 dark:border-zinc-800'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                    Subject <span className="text-red-600 dark:text-red-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry / Internship / Hello"
                    className={`w-full rounded-xl bg-slate-50 border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-white dark:focus:border-red-500 dark:focus:ring-red-500/20 ${
                      errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-zinc-800'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                    Message <span className="text-red-600 dark:text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, question, or proposal..."
                    className={`w-full rounded-xl bg-slate-50 border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-white dark:focus:border-red-500 dark:focus:ring-red-500/20 resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-200 dark:border-zinc-800'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm disabled:opacity-70"
                >
                  <span>{status === 'submitting' ? 'Validating...' : 'Send Direct Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
