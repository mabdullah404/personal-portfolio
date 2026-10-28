'use client';

import React, { useEffect, useState } from 'react';

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
    applyTheme(initialDark);
  }, []);

  function applyTheme(dark: boolean) {
    const html = document.documentElement;
    if (dark) {
      html.setAttribute('data-theme', 'dark');
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.setAttribute('data-theme', 'light');
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    applyTheme(next);
  }

  if (!mounted) {
    return <div className="w-[52px] h-[28px] rounded-full bg-zinc-800 border border-zinc-700" aria-hidden="true" />;
  }

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex items-center w-[52px] h-[28px] rounded-full border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 ${isDark ? 'bg-zinc-800 border-zinc-700 hover:border-zinc-600' : 'bg-amber-50 border-amber-200 hover:border-amber-300'}`}
    >
      <span className={`absolute left-[5px] text-amber-400 transition-all duration-300 ${isDark ? 'opacity-40 scale-75' : 'opacity-100 scale-100'}`}>
        <SunIcon />
      </span>
      <span className={`absolute right-[5px] text-slate-400 transition-all duration-300 ${isDark ? 'opacity-100 scale-100' : 'opacity-40 scale-75'}`}>
        <MoonIcon />
      </span>
      <span className={`absolute top-[3px] w-[22px] h-[22px] rounded-full shadow-md transition-all duration-300 ease-in-out ${isDark ? 'translate-x-[25px] bg-zinc-200' : 'translate-x-[3px] bg-amber-400'}`} />
    </button>
  );
}
