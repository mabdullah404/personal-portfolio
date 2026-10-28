import { Project } from '@/types';

export const projectsData: Project[] = [
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
    id: "devstack",
    slug: "devstack",
    title: "DevStack — Tech Stack Builder",
    tagline: "Interactive Development Stack Assembler & Comparison Tool",
    shortDescription: "An interactive web application enabling developers to explore frontend, backend, database, and tooling options, assemble customized stacks, and view instant feedback.",
    detailedOverview: "DevStack (Assignment-05) is an interactive developer tool designed to eliminate technology selection fatigue. It lets engineers browse categorized modern technologies, compare trade-offs, add or remove tools from their personalized project stack in real-time with responsive toast feedback, and organize architectural choices efficiently.",
    image: "/images/projects/devstack.svg",
    imageAlt: "DevStack web application interactive builder screenshot",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "State Management", "Netlify"],
    status: "Completed",
    featured: true,
    liveUrl: "https://development-stack-assignment-05.netlify.app/",
    githubUrl: "https://github.com/mabdullah404/Assignment-05",
    keyFeatures: [
      "Interactive technology catalog covering Frontend, Backend, Databases, and Tools",
      "Dynamic stack accumulator enabling single-click addition and removal of technologies",
      "Real-time toast notifications on state changes and tool updates",
      "Responsive side-by-side comparison layout optimized across desktop and mobile screens",
      "One-click 'Clear All' capability to reset custom architecture stacks"
    ],
    challenges: [
      "Managing complex interactive state across technology cards and the active stack sidebar without prop drilling.",
      "Creating seamless visual feedback with toast notifications while preventing UI freezing during rapid click events.",
      "Designing an appealing modern gradient and dark-mode aesthetic consistent across viewports."
    ],
    solutions: [
      "Structured clean React useState state flows for seamless tool array modifications and deduplication checks.",
      "Integrated lightweight toast notification handlers with non-blocking timeouts.",
      "Crafted flexible utility-first classes using Tailwind CSS and CSS transitions for fluid hover and selection effects."
    ],
    improvements: [
      "Export assembled tech stack configurations directly as `package.json` starter templates.",
      "Add architectural compatibility warnings when incompatible tools are selected together."
    ],
    futurePlans: [
      "Incorporate GitHub repository template generators based on the assembled stack.",
      "Add community upvotes and stack sharing via short URLs."
    ]
  },
  {
    id: "devconf-2026",
    slug: "devconf-2026",
    title: "DEVCONF 2026",
    tagline: "Modern Developer Conference & Technology Summit Landing Platform",
    shortDescription: "A high-conversion developer conference platform featuring keynote speaker profiles, multi-track schedules, venue information, and registration flows.",
    detailedOverview: "DEVCONF 2026 (Assignment-01) is a specialized event landing page engineered to provide conference attendees with an engaging, information-rich digital itinerary. Featuring speaker lineups, event countdowns, multi-track agendas, and responsive call-to-actions, it demonstrates strong semantic HTML structure and CSS3 layouts.",
    image: "/images/projects/devconf.svg",
    imageAlt: "DEVCONF 2026 event landing page screenshot preview",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "GitHub Pages"],
    status: "Completed",
    featured: true,
    liveUrl: "https://mabdullah404.github.io/Assignment-01/",
    githubUrl: "https://github.com/mabdullah404/Assignment-01",
    keyFeatures: [
      "High-contrast hero section with event dates and registration triggers",
      "Interactive speaker roster with social links and topic descriptions",
      "Comprehensive session schedule organized by technical tracks",
      "Responsive navigation bar with mobile-friendly drawer",
      "Accessibility-tested typography using Google Fonts (Inter & Arimo)"
    ],
    challenges: [
      "Structuring intricate multi-column conference schedules that adapt fluidly to small smartphone screens.",
      "Achieving pixel-perfect alignment and typography hierarchy using pure CSS without relying on heavy frameworks.",
      "Ensuring fast initial load time with optimized local and CDN assets."
    ],
    solutions: [
      "Employed CSS Flexbox and responsive CSS Grid with custom media query breakpoints.",
      "Defined centralized CSS custom variables for typography scales, brand blues, and spacing tokens.",
      "Optimized vector iconography and minified styling rules for immediate first-paint rendering."
    ],
    improvements: [
      "Add an interactive Google Maps embed with directions to the physical venue.",
      "Integrate calendar sync buttons (Google Calendar, iCal, Outlook) for individual talks."
    ],
    futurePlans: [
      "Implement real-time seat reservation with ticket tier selections.",
      "Add live stream video player embed for remote attendees."
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
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
