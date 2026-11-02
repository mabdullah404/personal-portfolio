'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon,
  FacebookIcon,
  DownloadIcon, 
  ArrowRightIcon, 
  SparklesIcon,
  MapPinIcon
} from '@/components/ui/Icons';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { profileData } from '@/data/profile';

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  function handleResumeClick() {
    try {
      const link = document.createElement('a');
      link.href = profileData.resumeUrl;
      link.download = profileData.resumeFileName;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      setIsResumeModalOpen(true);
    }
  }

  return (
    <section id="hero" className="relative scroll-mt-20 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white dark:bg-[#090a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-rose-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs dark:bg-zinc-900/90 dark:border-zinc-800 dark:text-zinc-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-slate-400 dark:text-zinc-400">STATUS:</span>
              <span className="font-medium text-slate-900 dark:text-zinc-200">{profileData.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
                Welcome to my portfolio
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 leading-tight">
                Hi, I&apos;m <span className="text-red-600 dark:text-red-500">{profileData.fullName || profileData.name}</span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-600 dark:text-zinc-300">
                {profileData.designation}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              {profileData.heroBio}
            </p>

            {/* Location & Institution Tag */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPinIcon size={14} className="text-red-600 dark:text-red-400" />
                <span>{profileData.location}</span>
              </div>
              <span className="text-slate-300 dark:text-zinc-600">•</span>
              <div className="flex items-center gap-1.5">
                <SparklesIcon size={14} className="text-red-600 dark:text-red-400" />
                <span>CSE Undergrad at BUBT</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <span>Explore Projects</span>
                <ArrowRightIcon size={16} />
              </Link>

              <button
                type="button"
                onClick={handleResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <DownloadIcon size={16} className="text-red-600 dark:text-red-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-3 sm:pt-4">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-zinc-500 block mb-2 sm:inline sm:mb-0 sm:mr-3">
                Social Profiles:
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-red-600 hover:border-slate-300 shadow-xs dark:bg-zinc-900/80 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:text-red-400 dark:hover:border-zinc-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-red-600 hover:border-slate-300 shadow-xs dark:bg-zinc-900/80 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:text-red-400 dark:hover:border-zinc-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
                {profileData.socials.twitter && (
                  <a
                    href={profileData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-red-600 hover:border-slate-300 shadow-xs dark:bg-zinc-900/80 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:text-red-400 dark:hover:border-zinc-700 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon size={15} />
                    <span>Twitter</span>
                  </a>
                )}
                {profileData.socials.facebook && (
                  <a
                    href={profileData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-red-600 hover:border-slate-300 shadow-xs dark:bg-zinc-900/80 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:text-red-400 dark:hover:border-zinc-700 transition-colors"
                    aria-label="Facebook Profile"
                  >
                    <FacebookIcon size={15} />
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Profile Photo / Circular Avatar Slot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div 
              className="relative group flex items-center justify-center cursor-pointer profile-avatar-float select-none"
              onClick={() => setIsTapped((prev) => !prev)}
              role="button"
              tabIndex={0}
              aria-label="Toggle profile avatar animation"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsTapped((prev) => !prev);
                }
              }}
            >
              {/* Soft Ambient Red Glow with continuous breathing on phone & desktop */}
              <div 
                aria-hidden="true" 
                className={`absolute -inset-6 rounded-full bg-red-500/20 blur-3xl transition-all duration-700 ease-in-out pointer-events-none profile-avatar-glow ${
                  isTapped ? 'scale-125 opacity-90 blur-3xl bg-red-500/40' : 'group-hover:bg-red-500/40 group-hover:scale-120 group-hover:blur-3xl'
                }`} 
              />
              
              {/* Subtle Red Accent Ring with continuous breathing glow */}
              <div 
                aria-hidden="true" 
                className={`absolute -inset-1.5 rounded-full border-2 transition-all duration-700 ease-in-out profile-avatar-ring ${
                  isTapped ? 'border-red-500 scale-105 shadow-[0_0_35px_rgba(239,68,68,0.6)]' : 'group-hover:border-red-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]'
                }`} 
              />

              {/* Main Circular Image Frame */}
              <div className={`relative aspect-square w-56 sm:w-72 md:w-80 rounded-full border-2 border-slate-200 bg-white p-2 shadow-xl transition-all duration-700 ease-in-out group-hover:border-red-400 group-hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 ${
                isTapped ? 'border-red-400 shadow-2xl scale-105' : ''
              }`}>
                {/* Inner Circle Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200 dark:bg-zinc-900 dark:border-zinc-800/80">
                  {!imgError ? (
                    <Image
                      src={profileData.photoUrl}
                      alt={profileData.name}
                      fill
                      priority
                      className={`object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110 ${
                        isTapped ? 'scale-110' : ''
                      }`}
                      sizes="(max-width: 640px) 224px, 320px"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-red-600 font-mono font-bold text-3xl shadow-inner dark:bg-zinc-900 dark:border-zinc-800 dark:text-red-400">
                        A
                      </div>
                      <span className="mt-2 text-xs font-mono text-slate-500 dark:text-zinc-400">Abdullah</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeFileName={profileData.resumeFileName}
      />
    </section>
  );
}
