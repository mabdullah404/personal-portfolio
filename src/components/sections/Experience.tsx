import React from 'react';
import { experienceData } from '@/data/profile';
import { BriefcaseIcon, SparklesIcon, ArrowRightIcon, ExternalLinkIcon, CheckCircleIcon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
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
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            My industry internship and hands-on web engineering background delivering responsive, modern user interfaces.
          </p>
        </div>

        {/* Experience Content */}
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
                      Hands-On Full-Stack &amp; Project Track
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600 border border-slate-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700">
                      Active Development
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
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-red-600/20 hover:shadow-red-600/30 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <SparklesIcon size={14} className="text-white" />
                  <span>Inspect Built Projects</span>
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {experienceData.items.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-700/90 dark:hover:bg-zinc-900/60 dark:shadow-xl dark:shadow-black/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-zinc-800/70">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 border border-rose-200 text-red-600 group-hover:border-red-400 transition-colors dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400">
                      <BriefcaseIcon size={22} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 transition-colors">
                          {item.title}
                        </h3>
                        <Badge variant="red">Internship</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <a
                          href="https://hrsoftbd.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-red-600 hover:text-red-700 dark:text-red-400 inline-flex items-center gap-1.5"
                        >
                          <span>{item.organization}</span>
                          <ExternalLinkIcon size={14} />
                        </a>
                        <span className="text-slate-300 dark:text-zinc-600">•</span>
                        <span className="text-slate-500 dark:text-zinc-400 font-mono text-xs">
                          Dhaka, Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-mono text-slate-700 border border-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-zinc-500 font-semibold block">
                    Key Responsibilities &amp; Learnings:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300 bg-slate-50 dark:bg-zinc-950/60 p-2.5 rounded-xl border border-slate-100 dark:border-zinc-800/60"
                      >
                        <CheckCircleIcon size={16} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 dark:text-zinc-500 mr-1">
                      Technologies:
                    </span>
                    {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-red-600/20 hover:shadow-red-600/30"
                  >
                    <SparklesIcon size={14} className="text-white" />
                    <span>Inspect Built Projects</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
