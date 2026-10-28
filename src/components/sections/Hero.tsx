'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GithubIcon, 
  LinkedinIcon, 
  DownloadIcon, 
  ArrowRightIcon, 
  SparklesIcon,
  MapPinIcon
} from '@/components/ui/Icons';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { profileData } from '@/data/profile';

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCheckingResume, setIsCheckingResume] = useState(false);
  const [imgError, setImgError] = useState(false);

  async function handleResumeClick() {
    setIsCheckingResume(true);
    try {
      const res = await fetch(profileData.resumeUrl, { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('a');
        link.href = profileData.resumeUrl;
        link.download = profileData.resumeFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setIsResumeModalOpen(true);
      }
    } catch {
      setIsResumeModalOpen(true);
    } finally {
      setIsCheckingResume(false);
    }
  }

  return (
    <section id="hero" className="relative scroll-mt-20 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white dark:bg-[#090a0f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs dark:bg-zinc-900/90 dark:border-zinc-800 dark:text-zinc-300">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-slate-400 dark:text-zinc-400">STATUS:</span>
              <span className="font-medium text-slate-900 dark:text-zinc-200">{profileData.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
                Hello, I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
                Hi, I&apos;m <span className="text-red-600 dark:text-red-500">{profileData.fullName || profileData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-zinc-400">
                {profileData.designation}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              {profileData.heroBio}
            </p>

            {/* Location & Institution Tag */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400 pt-1">
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
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <span>Explore Projects</span>
                <ArrowRightIcon size={16} />
              </Link>

              <button
                type="button"
                onClick={handleResumeClick}
                disabled={isCheckingResume}
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-xs dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-70"
              >
                <DownloadIcon size={16} className="text-red-600 dark:text-red-400" />
                <span>{isCheckingResume ? 'Checking File...' : 'Download Resume'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-zinc-500">Profiles:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-red-600 hover:border-slate-300 shadow-xs dark:bg-zinc-900/80 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:text-red-400 dark:hover:border-zinc-700 transition-colors"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-red-600 hover:border-slate-300 shadow-xs dark:bg-zinc-900/80 dark:border-zinc-800/80 dark:text-zinc-300 dark:hover:text-red-400 dark:hover:border-zinc-700 transition-colors"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Profile Photo / Circular Avatar Slot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group flex items-center justify-center cursor-pointer">
              {/* Soft Ambient Red Glow */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-6 rounded-full bg-red-500/10 blur-3xl transition-all duration-700 ease-in-out group-hover:bg-red-500/30 group-hover:blur-3xl group-hover:scale-110 pointer-events-none" 
              />
              
              {/* Subtle Red Accent Ring */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 rounded-full border-2 border-red-500/30 transition-all duration-700 ease-in-out group-hover:border-red-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]" 
              />

              {/* Main Circular Image Frame */}
              <div className="relative aspect-square w-64 sm:w-72 md:w-80 rounded-full border-2 border-slate-200 bg-white p-2 shadow-xl transition-all duration-700 ease-in-out group-hover:border-red-400 group-hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                {/* Inner Circle Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200 dark:bg-zinc-900 dark:border-zinc-800/80">
                  {!imgError ? (
                    <Image
                      src={profileData.photoUrl}
                      alt={profileData.name}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                      sizes="(max-width: 640px) 256px, 320px"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-red-600 font-mono font-bold text-3xl shadow-inner dark:bg-zinc-900 dark:border-zinc-800 dark:text-red-400">
                        A
                      </div>
                      <span className="mt-2 text-xs font-mono text-slate-500 dark:text-zinc-400">Profile Photo Slot</span>
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
