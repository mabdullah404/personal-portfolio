'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, ArrowUpIcon } from '@/components/ui/Icons';
import { profileData } from '@/data/profile';

export function Footer() {
  const [currentYear] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return new Date().getFullYear();
    }
    return 2026;
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 py-12 px-4 sm:px-6 lg:px-8 dark:border-zinc-900 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link
              href="/#hero"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="group inline-flex items-center"
            >
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {profileData.name}
                <span className="text-red-600 dark:text-red-500 transition-transform duration-300 inline-block group-hover:scale-125">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              {profileData.designation}. Computer Science &amp; Engineering student at BUBT building practical web software.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-red-600 hover:border-slate-300 transition-colors dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:border-zinc-700"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-red-600 hover:border-slate-300 transition-colors dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:border-zinc-700"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              {profileData.socials.twitter && (
                <a
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-red-600 hover:border-slate-300 transition-colors dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:border-zinc-700"
                  aria-label="Twitter Profile"
                >
                  <span className="font-bold text-xs flex h-4.5 w-4.5 items-center justify-center">𝕏</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-200">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#hero" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Technical Stack
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Verified Education
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-200">Contact Channels</h4>
            <ul className="space-y-2 text-sm font-mono text-xs">
              <li>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors block truncate"
                >
                  {profileData.socials.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.socials.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors block"
                >
                  {profileData.socials.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-400 dark:text-zinc-500 block">
                  Location: {profileData.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-zinc-500">
          <div>
            &copy; {currentYear} {profileData.fullName || profileData.name}. All verified rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-red-600 dark:hover:text-red-400 transition-colors focus:outline-none"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUpIcon size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
