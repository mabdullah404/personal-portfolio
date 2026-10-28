import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from '@/components/ui/Icons';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isCompleted = project.status === 'Completed';

  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 shadow-sm dark:border-zinc-800/90 dark:bg-zinc-900/40 dark:hover:border-zinc-700/80 dark:hover:bg-zinc-900/70 dark:shadow-xl dark:shadow-black/20">
      <div>
        {/* Project Visual / Screenshot */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 mb-5 dark:bg-zinc-950 dark:border-zinc-800/80">
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
            fill
            className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Status Badge overlay */}
          <div className="absolute top-3 right-3">
            <Badge variant={isCompleted ? 'red' : 'amber'}>
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Header & Tagline */}
        <div className="space-y-2 mb-3">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-md bg-slate-200/60 border border-slate-300/60 px-1.5 py-0.5 text-[10px] font-mono text-slate-600 dark:bg-zinc-950/60 dark:border-zinc-800/60 dark:text-zinc-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/70 flex items-center justify-between gap-3">
        {/* Primary View Details Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
        >
          <span>View Details</span>
          <ArrowRightIcon size={14} />
        </Link>

        {/* External Quick Links (When Available) */}
        <div className="flex items-center gap-2">
          {project.liveUrl && project.liveUrl.startsWith('http') && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-red-600 hover:border-slate-300 transition-colors dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:border-zinc-700"
              title="Open Live Website"
              aria-label={`Visit live website for ${project.title}`}
            >
              <ExternalLinkIcon size={16} />
            </a>
          )}

          {project.githubUrl && project.githubUrl.startsWith('http') && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-red-600 hover:border-slate-300 transition-colors dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:border-zinc-700"
              title="Inspect GitHub Repository"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
