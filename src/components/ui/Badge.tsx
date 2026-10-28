import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'slate' | 'amber' | 'blue' | 'outline' | 'red';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'slate',
  size = 'sm',
  className = ''
}: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  const variantClasses = {
    red: 'bg-rose-50 text-red-600 border border-rose-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800/40',
    lime: 'bg-rose-50 text-red-600 border border-rose-200 dark:bg-red-950/50 dark:text-red-400 dark:border-red-800/40',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700/60',
    amber: 'bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-800/40',
    blue: 'bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-950/50 dark:text-sky-400 dark:border-sky-800/40',
    outline: 'bg-transparent text-slate-600 border border-slate-300 dark:text-zinc-400 dark:border-zinc-700'
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide transition-colors ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
