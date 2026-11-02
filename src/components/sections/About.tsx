import React from 'react';
import { profileData } from '@/data/profile';
import { CodeIcon, LayersIcon, SparklesIcon, CheckCircleIcon, MapPinIcon, GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { projectsData } from '@/data/projects';

export function About() {
  const { aboutStory, socials, hobbies } = profileData;

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20 border-t border-slate-200 bg-slate-50/50 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
            <span className="h-px w-6 bg-red-600 dark:bg-red-400" />
            <span>01 / Background &amp; Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            About <span className="text-red-600 dark:text-red-500">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            My programming journey, engineering philosophy, and personal interests that drive my daily craft.
          </p>
        </div>

        {/* Narrative & Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Narrative Story & Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-zinc-300 leading-relaxed">
            
            {/* 1. Programming Journey */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-600 dark:bg-red-500" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                  My Programming Journey
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {aboutStory.journey}
              </p>
            </div>

            {/* 2. The Type of Work I Enjoy */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                  The Type of Work I Enjoy
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {aboutStory.focus}
              </p>
            </div>

            {/* 3. Continuous Learning & Modern Stack */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                  Continuous Learning &amp; Full-Stack Growth
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {aboutStory.learning}
              </p>
            </div>

            {/* 4. Personality & Life Beyond Coding */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                  Personality &amp; Beyond Code
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {aboutStory.philosophy}
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 text-center shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <span className="block text-2xl sm:text-3xl font-extrabold text-red-600 dark:text-red-400 font-mono">
                  {projectsData.length}+
                </span>
                <span className="mt-1 block text-xs font-semibold text-slate-500 dark:text-zinc-400">
                  Featured Projects
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 text-center shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <span className="block text-2xl sm:text-3xl font-extrabold text-red-600 dark:text-red-400 font-mono">
                  BUBT
                </span>
                <span className="mt-1 block text-xs font-semibold text-slate-500 dark:text-zinc-400">
                  CSE Undergrad
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-slate-200/90 bg-white p-4 text-center shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <span className="block text-2xl sm:text-3xl font-extrabold text-red-600 dark:text-red-400 font-mono">
                  100%
                </span>
                <span className="mt-1 block text-xs font-semibold text-slate-500 dark:text-zinc-400">
                  Practical Focus
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Personal Information Card & Hobbies (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Structured Credentials Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/50 space-y-4">
              <div className="border-b border-slate-100 dark:border-zinc-800/80 pb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">Personal Information</h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Academic credentials &amp; background</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900/80 transition-colors">
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400 shrink-0">
                    <CheckCircleIcon size={14} />
                  </div>
                  <div>
                    <span className="block text-slate-400 dark:text-zinc-500 font-mono text-[11px]">Full Name</span>
                    <span className="font-semibold text-slate-900 dark:text-zinc-200 text-sm">{profileData.name}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900/80 transition-colors">
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400 shrink-0">
                    <CodeIcon size={14} />
                  </div>
                  <div>
                    <span className="block text-slate-400 dark:text-zinc-500 font-mono text-[11px]">Degree &amp; Major</span>
                    <span className="font-semibold text-slate-900 dark:text-zinc-200 text-sm">B.Sc. in CSE (Currently Enrolled)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900/80 transition-colors">
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400 shrink-0">
                    <LayersIcon size={14} />
                  </div>
                  <div>
                    <span className="block text-slate-400 dark:text-zinc-500 font-mono text-[11px]">University</span>
                    <span className="font-semibold text-slate-900 dark:text-zinc-200 text-sm">BUBT (Bangladesh University of Business &amp; Technology)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900/80 transition-colors">
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400 shrink-0">
                    <MapPinIcon size={14} />
                  </div>
                  <div>
                    <span className="block text-slate-400 dark:text-zinc-500 font-mono text-[11px]">Location</span>
                    <span className="font-semibold text-slate-900 dark:text-zinc-200 text-sm">Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Hobbies & Interests Outside Programming */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900/80 transition-colors border-t border-slate-100 dark:border-zinc-800/60 pt-3">
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400 shrink-0">
                    <SparklesIcon size={14} />
                  </div>
                  <div>
                    <span className="block text-slate-400 dark:text-zinc-500 font-mono text-[11px]">Hobbies &amp; Interests Outside Coding</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {hobbies.map((hobby) => (
                        <span
                          key={hobby}
                          className="rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-[11px] text-slate-700 font-medium dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-300"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-900/80 transition-colors border-t border-slate-100 dark:border-zinc-800/60 pt-3">
                  <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400 shrink-0">
                    <GithubIcon size={14} />
                  </div>
                  <div className="w-full">
                    <span className="block text-slate-400 dark:text-zinc-500 font-mono text-[11px]">Connect With Me</span>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-red-600 hover:text-red-700 dark:text-red-400 inline-flex items-center gap-1 text-xs"
                      >
                        <span>GitHub</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                      <span className="text-slate-300 dark:text-zinc-700">•</span>
                      <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-red-600 hover:text-red-700 dark:text-red-400 inline-flex items-center gap-1 text-xs"
                      >
                        <span>LinkedIn</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                      <span className="text-slate-300 dark:text-zinc-700">•</span>
                      <a
                        href={`mailto:${socials.email}`}
                        className="font-semibold text-red-600 hover:text-red-700 dark:text-red-400 inline-flex items-center gap-1 text-xs"
                      >
                        <span>Email</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
