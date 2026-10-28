import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { 
  ArrowLeftIcon, 
  ExternalLinkIcon, 
  GithubIcon, 
  CheckCircleIcon,
  SparklesIcon,
  LayersIcon,
  InfoIcon
} from '@/components/ui/Icons';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const isCompleted = project.status === 'Completed';

  return (
    <article className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back Navigation Bar */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors group"
        >
          <ArrowLeftIcon size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        <Badge variant={isCompleted ? 'red' : 'amber'}>
          {project.status}
        </Badge>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 mb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
          {project.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>

        {/* Action Links Bar */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          {project.liveUrl && project.liveUrl.startsWith('http') ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-red-500/20"
            >
              <span>Visit Live Website</span>
              <ExternalLinkIcon size={14} />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-200 px-4 py-2 text-xs text-slate-500 font-mono dark:bg-zinc-900 dark:border-zinc-800">
              <span>Live deployment pending release</span>
            </div>
          )}

          {project.githubUrl && project.githubUrl.startsWith('http') ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-red-600 hover:border-slate-300 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 dark:hover:text-red-400 dark:hover:border-zinc-700"
            >
              <GithubIcon size={16} />
              <span>Source Repository</span>
              <ExternalLinkIcon size={12} className="text-slate-400 dark:text-zinc-500" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-200 px-4 py-2 text-xs text-slate-500 font-mono dark:bg-zinc-900 dark:border-zinc-800">
              <span>Repository: Private / Staging</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Image Showcase */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl mb-12 dark:bg-zinc-950 dark:border-zinc-800/90 dark:shadow-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Column (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Detailed Overview */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-red-600 dark:bg-red-500" />
              <span>Project Overview</span>
            </h2>
            <div className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
              <p>{project.detailedOverview}</p>
              <p>{project.shortDescription}</p>
            </div>
          </section>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                <CheckCircleIcon size={18} className="text-red-600 dark:text-red-400" />
                <span>Implemented Features &amp; Capabilities</span>
              </h2>
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/30">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-zinc-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-red-600 text-xs font-mono font-bold border border-rose-200 dark:bg-red-950/60 dark:text-red-400 dark:border-red-800/40">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Development Challenges & Engineering Solutions */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <LayersIcon size={18} className="text-red-600 dark:text-red-400" />
              <span>Challenges Faced &amp; Solutions Implemented</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Challenges */}
              <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 space-y-3 dark:border-red-950/40 dark:bg-zinc-950">
                <h3 className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold">
                  Technical Challenges
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {project.challenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-mono font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 space-y-3 dark:border-emerald-950/40 dark:bg-zinc-950">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                  Architectural Solutions
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {project.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-mono font-bold">✓</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Potential Improvements & Future Plans */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              <SparklesIcon size={18} className="text-red-600 dark:text-red-400" />
              <span>Improvements &amp; Future Roadmap</span>
            </h2>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 space-y-4 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40">
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Immediate Planned Improvements
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                  {project.improvements.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400">→</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Long-Term Evolution
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                  {project.futurePlans.map((plan, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-600 dark:text-sky-400">✦</span>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Column (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Tech Stack Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 space-y-4 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-zinc-300 font-semibold">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-slate-100 border border-slate-200 px-3 py-1.5 text-xs font-mono text-slate-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 space-y-3 text-xs text-slate-600 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:text-zinc-400">
            <div className="flex items-center gap-2 text-slate-800 dark:text-zinc-300 font-semibold">
              <InfoIcon size={16} className="text-red-600 dark:text-red-400" />
              <span>Project Metadata</span>
            </div>
            <div className="space-y-2 pt-2 border-t border-slate-100 font-mono text-[11px] dark:border-zinc-800/60">
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-zinc-500">Slug:</span>
                <span className="text-slate-700 dark:text-zinc-300">/projects/{project.slug}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-zinc-500">Status:</span>
                <span className="text-red-600 dark:text-red-400 font-semibold">{project.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 dark:text-zinc-500">Developer:</span>
                <span className="text-slate-700 dark:text-zinc-300">Abdullah</span>
              </div>
            </div>
          </div>

          {/* Back Action Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 text-center space-y-3 shadow-xs dark:border-zinc-800/60 dark:bg-zinc-950">
            <p className="text-xs text-slate-500 dark:text-zinc-400">Want to see more of my work or connect?</p>
            <Link
              href="/#projects"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-xs"
            >
              <ArrowLeftIcon size={14} />
              <span>All Projects</span>
            </Link>
          </div>

        </aside>

      </div>

    </article>
  );
}
