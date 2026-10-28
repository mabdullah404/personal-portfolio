import React from 'react';
import { educationList } from '@/data/profile';
import { GraduationCapIcon, MapPinIcon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 border-t border-slate-200 bg-slate-50/50 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
            <span className="h-px w-6 bg-red-600 dark:bg-red-400" />
            <span>03 / Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Verified <span className="text-red-600 dark:text-red-500">Education</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            My formal engineering degrees and academic grounding in computer science and software development.
          </p>
        </div>

        {/* Side-by-Side Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700/90 dark:hover:bg-zinc-900/60 dark:shadow-xl dark:shadow-black/20"
            >
              <div>
                {/* Top Bar with Icon & Status Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 border border-rose-200 text-red-600 group-hover:border-red-400 transition-colors dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400">
                    <GraduationCapIcon size={20} />
                  </div>
                  <Badge variant={edu.status === 'Current' ? 'red' : 'slate'}>
                    {edu.status === 'Current' ? 'Currently Enrolled' : 'Completed'}
                  </Badge>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                    {edu.institution}
                  </p>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-zinc-400 mb-5 pb-4 border-b border-slate-100 dark:border-zinc-800/70">
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon size={14} className="text-slate-400 dark:text-zinc-500" />
                    <span>{edu.location}</span>
                  </div>
                  <span className="text-slate-300 dark:text-zinc-600">•</span>
                  <div className="text-slate-700 dark:text-zinc-300">
                    {edu.datesPlaceholder}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                <span>Computer Science &amp; Engineering</span>
                <span className="text-red-600 dark:text-red-400/80">Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
