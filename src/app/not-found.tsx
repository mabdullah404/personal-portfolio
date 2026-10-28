import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/ui/Icons';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-white dark:bg-[#090a0f]">
      <div className="max-w-md w-full text-center space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 border border-rose-200 text-red-600 font-mono font-bold text-2xl dark:bg-zinc-950 dark:border-zinc-800 dark:text-red-400">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            The page or project slug you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-xs"
          >
            <ArrowLeftIcon size={14} />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
