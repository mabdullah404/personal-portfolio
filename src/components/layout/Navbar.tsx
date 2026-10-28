'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, CloseIcon, GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { profileData } from '@/data/profile';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/#hero' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Education', href: '/#education' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        history.pushState(null, '', '/');
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu();
    if (pathname === '/') {
      if (href === '/#hero' || href === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          history.pushState(null, '', '/');
        }
        return;
      }

      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();

        // Calculate smooth scroll position accounting for sticky navbar height
        const navbarHeight = 70; // 56px navbar + comfort breathing space
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });

        history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5 dark:bg-[#090a0f]/95 dark:border-zinc-800 dark:shadow-xl dark:shadow-black/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Main Navigation">
        {/* Professional Wordmark */}
        <Link
          href="/#hero"
          className="group flex items-center focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg py-1 px-1.5"
          onClick={handleBrandClick}
        >
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
            {profileData.brandName || profileData.name}
            <span className="text-red-600 dark:text-red-500 transition-transform duration-300 inline-block group-hover:scale-125">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/90 border border-slate-200/80 px-4 py-1.5 dark:bg-zinc-900/90 dark:border-zinc-800/80 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold text-slate-600 hover:text-red-600 dark:text-zinc-300 dark:hover:text-red-400 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Icons & Quick Action (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg border border-transparent hover:border-slate-200 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:bg-zinc-900 dark:hover:border-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg border border-transparent hover:border-slate-200 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:bg-zinc-900 dark:hover:border-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          {profileData.socials.twitter && (
            <a
              href={profileData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg border border-transparent hover:border-slate-200 dark:text-zinc-400 dark:hover:text-red-400 dark:hover:bg-zinc-900 dark:hover:border-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Twitter Profile"
            >
              <span className="font-bold text-xs flex h-4.5 w-4.5 items-center justify-center">𝕏</span>
            </a>
          )}
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg border border-slate-200 bg-slate-100 dark:text-zinc-300 dark:hover:text-white dark:border-zinc-800 dark:bg-zinc-900/80 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Subtle backdrop overlay */}
          <div
            className="fixed inset-0 top-[60px] bg-black/50 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="md:hidden absolute top-full left-0 right-0 z-50 border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl dark:border-zinc-800 dark:bg-[#090a0f]/98 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-red-600 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-red-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-red-600 rounded-lg bg-slate-100 border border-slate-200 dark:text-zinc-400 dark:hover:text-red-400 dark:bg-zinc-900 dark:border-zinc-800"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-red-600 rounded-lg bg-slate-100 border border-slate-200 dark:text-zinc-400 dark:hover:text-red-400 dark:bg-zinc-900 dark:border-zinc-800"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                {profileData.socials.twitter && (
                  <a
                    href={profileData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-red-600 rounded-lg bg-slate-100 border border-slate-200 dark:text-zinc-400 dark:hover:text-red-400 dark:bg-zinc-900 dark:border-zinc-800"
                    aria-label="Twitter Profile"
                  >
                    <span className="font-bold text-xs flex h-4.5 w-4.5 items-center justify-center">𝕏</span>
                  </a>
                )}
              </div>

              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
