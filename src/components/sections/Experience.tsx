import React from 'react';
import { experienceData } from '@/data/profile';
import { BriefcaseIcon, SparklesIcon, ArrowRightIcon } from '@/components/ui/Icons';
import Link from 'next/link';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 border-t border-slate-200 bg-white dark:border-zinc-900 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
            <span className="h-px w-6 bg-red-600 dark:bg-red-400" />
            <span>04 / Experience Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Professional <span className="text-red-600 dark:text-red-500">Experience</span>
          </h2>
        </div>

        {/* Honest Presentation Box */}
        {!experienceData.hasFormalExperience ? (
          <div className="rounded-3xl border border-slate-200/90 bg-white shadow-sm p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/30">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-200 text-red-600 dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400">
                  <BriefcaseIcon size={22} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900 dark:text-zinc-200">
                      Project-Based &amp; Hands-On Development
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600 border border-slate-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700">
                      Transparent Status
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {experienceData.message}
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href="/#projects"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-300 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-slate-950 hover:bg-slate-200 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-white dark:hover:border-red-500/40 dark:hover:bg-zinc-850"
                >
                  <SparklesIcon size={14} className="text-red-600 dark:text-red-400" />
                  <span>Inspect Built Projects</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {experienceData.items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
                <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">{item.title}</h3>
                <p className="text-sm text-red-600 dark:text-red-400">{item.organization} • {item.period}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
