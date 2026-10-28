import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { profileData } from '@/data/profile';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#090a0f' }, { media: '(prefers-color-scheme: light)', color: '#f8fafc' }],
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://abdullah-portfolio.vercel.app'),
  title: `${profileData.name} — Web Developer & CSE Student`,
  description: `${profileData.heroBio} Currently studying Computer Science and Engineering at BUBT.`,
  keywords: [
    'Abdullah',
    'Web Developer',
    'Frontend Developer',
    'Next.js Developer',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'BUBT',
    'Computer Science and Engineering',
    'Bangladesh',
    'Web Developer Portfolio'
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdullah-portfolio.vercel.app',
    title: `${profileData.name} — Web Developer`,
    description: profileData.heroBio,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: '/images/projects/portfolio.svg',
        width: 1200,
        height: 675,
        alt: `${profileData.name} Portfolio Showcase`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profileData.name} — Web Developer`,
    description: profileData.heroBio,
    images: ['/images/projects/portfolio.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >

      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-[#090a0f] dark:text-[#f4f4f5]">
        {/* Anti-flash: apply stored/preferred theme before React hydrates */}
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var h=document.documentElement;if(d){h.setAttribute('data-theme','dark');h.classList.add('dark');h.classList.remove('light');}else{h.setAttribute('data-theme','light');h.classList.add('light');h.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
