'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-75 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-800 shadow-lg hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-zinc-900/90 dark:backdrop-blur-md dark:border-zinc-700/80 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600"
        aria-label="Scroll back to top"
      >
        <ArrowUpIcon
          size={20}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
}
