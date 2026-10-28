import React from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20 border-t border-slate-200 bg-slate-50/50 dark:border-zinc-900 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
              <span className="h-px w-6 bg-red-600 dark:bg-red-400" />
              <span>05 / Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
              Featured <span className="text-red-600 dark:text-red-500">Projects</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
              Real projects reflecting my frontend engineering, responsive design execution, and continuous full-stack learning journey.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-600 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-xs dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400">
            <span>SHOWING: </span>
            <span className="text-red-600 dark:text-red-400 font-bold">{projectsData.length} VERIFIED ENTRIES</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
