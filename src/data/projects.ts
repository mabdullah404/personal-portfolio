import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: "civicpulse",
    slug: "civicpulse",
    title: "CivicPulse",
    tagline: "Grassroots Social Development & Community Events Platform",
    shortDescription: "A high-impact community-driven event management platform where citizens unite to create, join, and track verified grassroots humanitarian initiatives in their local neighborhoods.",
    detailedOverview: "CivicPulse is a full-stack social development platform built to empower local communities. It allows citizens and volunteer organizers to discover verified humanitarian initiatives, host community drives with future-date validation, manage volunteer sign-ups, and track collective community impact. The platform features strict authentication, an interactive organizer console, cause-based filtering, and persistent theme support.",
    image: "/images/projects/civicpulse.svg",
    imageAlt: "CivicPulse grassroots community event platform interface preview",
    technologies: ["Next.js 16", "React", "JavaScript", "Tailwind CSS", "DaisyUI", "BetterAuth", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Vercel"],
    status: "Completed",
    featured: true,
    liveUrl: "https://social-development-platform.vercel.app",
    githubUrl: "https://github.com/mabdullah404/social_devlopment_platform",
    keyFeatures: [
      "Grassroots initiative discovery with cause-based filtering (Cleanup, Tree Plantation, Blanket Relief, Healthcare, Food Share)",
      "Verified community event hosting with built-in future-date validation preventing expired scheduling",
      "Organizer console for managing hosted initiatives with live modal editing and secure SweetAlert2 deletion",
      "Volunteer event enrollment tracking sorted chronologically with capacity progress bars",
      "Multi-provider authentication using BetterAuth (Email/Password with live validation & Google OAuth)",
      "Dual-theme support (Dark/Light mode) with persistent localStorage sync"
    ],
    challenges: [
      "Implementing strict future-date validation and preventing expired event registrations across different time zones.",
      "Integrating BetterAuth with MongoDB replicaSet while keeping session persistence reliable across page reloads without premature logout.",
      "Structuring normalized database relationships between organizers, hosted events, and volunteer attendees."
    ],
    solutions: [
      "Engineered client and server timestamp validation middleware ensuring events can only be scheduled for future dates.",
      "Configured centralized JWT authorization tokens with custom loading skeletons to maintain seamless authenticated states.",
      "Developed modular RESTful API endpoints on Express.js with indexed MongoDB queries for rapid filtering and volunteer aggregation."
    ],
    improvements: [
      "Add automated email reminders and push notifications for volunteers 24 hours prior to registered events.",
      "Incorporate geolocation mapping with interactive neighborhood radius search."
    ],
    futurePlans: [
      "Launch a community donation escrow system for transparent fund tracking on relief drives.",
      "Introduce volunteer digital achievement badges and downloadable participation certificates."
    ]
  },
  {
    id: "matchiq",
    slug: "matchiq",
    title: "MatchIQ — Football Analytics & Prediction Platform",
    tagline: "Full-Stack Football Match Intelligence & Poisson Prediction Engine",
    shortDescription: "A comprehensive football analytics platform combining pure mathematical Dixon-Coles Poisson models, tactical reports, live player intelligence, and interactive pitch formations.",
    detailedOverview: "MatchIQ is a modern full-stack sports intelligence platform engineered for deep match analysis and probabilistic outcome forecasting. Built with Next.js App Router, Tailwind CSS, API-Football V3, and MongoDB, it calculates multi-market probabilities (1X2, Over/Under, BTTS), estimates expected goals (xG), simulates scorelines with Poisson distribution, and presents visual tactical lineup pitches.",
    image: "/images/projects/matchiq.svg",
    imageAlt: "MatchIQ football analytics and Poisson prediction platform preview",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB", "Mongoose", "API-Football V3", "Poisson Model", "Vercel"],
    status: "Completed",
    featured: true,
    liveUrl: "https://football-prediction-platform-neon.vercel.app",
    githubUrl: "https://github.com/mabdullah404/football_prediction-platform",
    keyFeatures: [
      "Dixon-Coles Poisson distribution mathematical prediction engine for 1X2 win probabilities, Over/Under, and BTTS",
      "Tactical match intelligence engine providing in-depth reports on attack vs. defense potency and key matchups",
      "Interactive tactical football pitch displaying official confirmed starting XI and formations (4-3-3, 4-2-3-1)",
      "Player Intelligence system with opponent H2H comparisons, season ratings, and form trends",
      "Coverage across top European leagues (Premier League, La Liga, Champions League, Serie A, Bundesliga, Ligue 1)",
      "Automated daily fixture and data synchronization using Vercel cron jobs"
    ],
    challenges: [
      "Computing multi-market probability matrices using Poisson equations without degrading server response times.",
      "Managing third-party sports API rate limits while serving high-frequency live match updates.",
      "Designing responsive tactical pitch lineups that scale smoothly across mobile and desktop screens."
    ],
    solutions: [
      "Implemented pure mathematical calculation algorithms on the backend with optimized statistical loops.",
      "Built multi-layer database caching in MongoDB and in-memory deduplication with fallback seed data.",
      "Engineered responsive SVG pitch nodes and CSS Grid views ensuring 100% responsiveness on any viewport."
    ],
    improvements: [
      "Add live push notifications for in-game momentum shifts and unexpected lineup changes.",
      "Expand mathematical models to incorporate expected threat (xT) and progressive pass tracking."
    ],
    futurePlans: [
      "Implement historical model backtesting dashboard comparing predicted probabilities with final results.",
      "Introduce personalized user watchlists and automated fantasy football transfer recommendations."
    ]
  },
  {
    id: "news-bangla-24",
    slug: "news-bangla-24",
    title: "News Bangla 24",
    tagline: "Dynamic Full-Stack Bengali News Portal with Live Marquee & Multi-Category Feeds",
    shortDescription: "A full-featured bilingual news portal featuring dynamic category filtering, animated breaking news marquee, user authentication, and responsive editorial layout.",
    detailedOverview: "News Bangla 24 is a comprehensive web publication and news portal engineered to deliver real-time news across politics, world affairs, economy, sports, and technology. Built with Next.js App Router, Tailwind CSS, and custom authentication handlers, it delivers high-performance article rendering, infinite breaking news scrolling, and responsive reading layouts for desktop and mobile readers.",
    image: "/images/projects/news-bangla-24.svg",
    imageAlt: "News Bangla 24 online newspaper interface preview",
    technologies: ["Next.js (App Router)", "React", "Tailwind CSS", "Authentication", "Dynamic Routing", "Vercel"],
    status: "Completed",
    featured: true,
    liveUrl: "https://news-bangla-24-o8cr.vercel.app/",
    githubUrl: "https://github.com/mabdullah404/news-bangla-24",
    keyFeatures: [
      "Multi-category article distribution (Politics, World, Economy, Health, Sports, Tech)",
      "Continuous animated breaking news marquee highlighting urgent reports",
      "Dynamic article detail pages with related coverage sidebars",
      "Responsive editorial typography using Noto Serif Bengali and clean layout grids",
      "Integrated authentication routing with Sign In and Sign Up flows"
    ],
    challenges: [
      "Structuring dynamic article feeds with server components to avoid layout shift while loading remote imagery.",
      "Implementing fluid marquee animation for Bengali text without causing high CPU usage on mobile devices.",
      "Managing category-specific state and article routing efficiently within Next.js App Router."
    ],
    solutions: [
      "Leveraged Next.js Image component with blurred placeholders and responsive aspect ratios.",
      "Designed GPU-accelerated CSS marquee animations using transform3d to guarantee 60fps scrolling.",
      "Utilized dynamic routing (/article/[id] and /category/[category]) with clean client-side caching."
    ],
    improvements: [
      "Add article bookmarking and offline reading support using Service Workers.",
      "Integrate a full-text Bengali search engine with fuzzy matching for quick topic lookups."
    ],
    futurePlans: [
      "Implement a dedicated admin CMS dashboard for editors to publish and draft articles directly.",
      "Incorporate push notifications for breaking news alerts across mobile and desktop browsers."
    ]
  },
  {
    id: "bazar-dor",
    slug: "bazar-dor",
    title: "Bazar Dor",
    tagline: "Daily Commodity & Market Price Tracking Web Application",
    shortDescription: "A focused web application helping users track daily market commodity prices, monitor grocery fluctuations, and plan household purchasing efficiently.",
    detailedOverview: "Bazar Dor is a practical web application designed to address everyday shopping needs in Bangladesh. It provides a clean, user-friendly interface for browsing daily bazaar prices, comparing essential commodity rates, and categorizing market goods so users can make informed purchasing decisions without manual calculation.",
    image: "/images/projects/bazar-dor.svg",
    imageAlt: "Bazar Dor application screenshot and dashboard interface preview",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Responsive Design", "Vercel"],
    status: "Completed",
    featured: true,
    liveUrl: "https://bazar-dor-project-omega.vercel.app/",
    githubUrl: "https://github.com/mabdullah404/bazar-dor-project",
    keyFeatures: [
      "Dynamic categorization of daily commodities (vegetables, fish, groceries, spices)",
      "Price tracking table and card views with high readability",
      "Fast responsive search and category filtering for quick lookups",
      "Mobile-optimized layout for on-the-go price checks in the market",
      "Clean UI visual tokens tailored for effortless scanning"
    ],
    challenges: [
      "Structuring price data so it can be updated easily and displayed with zero layout shift on mobile screens.",
      "Ensuring that fast search and filtering remain smooth without unnecessary re-renders.",
      "Designing an intuitive mobile-first experience accessible for users with varying digital familiarity."
    ],
    solutions: [
      "Implemented modular React component architecture separating the search filter controls from the presentation cards.",
      "Leveraged responsive CSS Grid and Flexbox with Tailwind CSS to ensure fluid table and card transformation across screen sizes.",
      "Optimized state updates with clean client-side hooks to keep searching instantaneous."
    ],
    improvements: [
      "Integrate local price fluctuation charts showing 7-day and 30-day historical trends.",
      "Add user shopping-list calculation where items can be checked off with total budget computation."
    ],
    futurePlans: [
      "Connect with automated or crowdsourced daily market price APIs.",
      "Support bilingual locale toggle (Bengali and English) for broader community accessibility."
    ]
  },
  {
    id: "frameora",
    slug: "frameora",
    title: "Frameora",
    tagline: "Curated Visual Storytelling & Photography Platform (In Development)",
    shortDescription: "A visual portfolio and photography showcase platform currently under active development, emphasizing immersive dark aesthetics, high-res images, and seamless masonry layouts.",
    detailedOverview: "Frameora is an ongoing creative web project engineered to celebrate visual art, photography collections, and digital media portfolios. Designed with an editorial aesthetic, Frameora offers a distraction-free environment where image details, aspect ratios, and visual narratives take center stage.",
    image: "/images/projects/frameora.svg",
    imageAlt: "Frameora photography showcase layout preview",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS Grid", "Image Optimization"],
    status: "In Development",
    featured: true,
    liveUrl: "", 
    githubUrl: "https://github.com/mabdullah404",
    keyFeatures: [
      "Dynamic masonry and editorial grid layouts accommodating varying aspect ratios",
      "Smooth modal lightbox with keyboard shortcuts for intuitive image viewing",
      "Category tags for landscape, portrait, street, and architectural photography",
      "Adaptive loading states and low-quality image placeholders (LQIP) to avoid layout shifts",
      "Modern dark aesthetic that highlights image colors and contrast"
    ],
    challenges: [
      "Handling heterogeneous image dimensions without breaking grid alignment or cropping focal points unintentionally.",
      "Optimizing load performance for high-resolution photographs on slower network connections.",
      "Maintaining smooth transitions when expanding images into full-screen view."
    ],
    solutions: [
      "Designed responsive CSS Grid masonry patterns paired with aspect-ratio utilities.",
      "Used Next.js Image component with modern WebP formatting, responsive srcset, and blurred placeholder states.",
      "Kept UI elements lightweight and minimal to ensure that the browser engine prioritizes media decoding."
    ],
    improvements: [
      "Add EXIF data display overlay (camera model, shutter speed, ISO, aperture) for photography enthusiasts.",
      "Implement client-side collection bookmarking using browser LocalStorage."
    ],
    futurePlans: [
      "Build a creator upload dashboard with cloud asset integration (e.g., Cloudinary or Supabase Storage).",
      "Add social sharing cards with dynamic OpenGraph image generation for featured shots."
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
