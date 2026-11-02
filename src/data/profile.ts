import { ProfileData, SkillCategory, EducationItem, ExperienceItem } from '@/types';

export const profileData: ProfileData = {
  name: "Abdullah Al Mamun",
  fullName: "Abdullah Al Mamun",
  brandName: "Abdullah",
  designation: "Full Stack & Frontend Developer",
  tagline: "CSE undergraduate passionate about building responsive, modern web applications, clean user interfaces, and continuous full-stack learning.",
  location: "Dhaka, Bangladesh",
  availability: "Open for Opportunities & Collaborations",
  photoUrl: "/images/profile/abdullah.jpg",
  resumeFileName: "Abdullah-Resume.pdf",
  resumeUrl: "/resume/Abdullah-Resume.pdf",
  socials: {
    github: "https://github.com/mabdullah404",
    linkedin: "https://linkedin.com/in/mabdullah77/",
    twitter: "https://x.com/mabdullah77d",
    facebook: "https://facebook.com/mabdullah77",
    email: "mabdullah539629@gmail.com",
    phone: "+880 1717-697404",
    whatsapp: "+880 1717-697404",
  },
  heroBio: "Computer Science & Engineering student at BUBT dedicated to building high-performance, responsive web applications with Next.js, React, Tailwind CSS, and modern backend architectures.",
  hobbies: ["Cricket & Football", "Traveling & Exploring", "Photography", "Esports & Gaming"],
  hobbiesText: "Cricket, Football, Traveling, Photography, and Esports Gaming",
  aboutStory: {
    journey: "My programming journey began with a natural curiosity about how web applications transform everyday life. After completing my Diploma in Computer Science & Engineering from Tangail Polytechnic Institute with a solid foundation in core programming and web technologies, I enrolled at Bangladesh University of Business and Technology (BUBT) for my B.Sc. in CSE. Through active coding and building real-world projects, I turned that initial curiosity into a focused craft for shipping responsive, scalable web solutions.",
    focus: "I genuinely enjoy crafting clean, intuitive user interfaces and practical web applications. Whether it's architecting fluid responsive layouts with Tailwind CSS, ensuring static type safety with TypeScript, or engineering modular React components, I focus on delivering seamless user experiences with zero compromise on accessibility or performance.",
    learning: "Currently, I am expanding my full-stack capabilities with Next.js App Router, React 19, Node.js, Express, MongoDB Atlas, and mathematical data modeling. I believe the fastest way to grow as a developer is by solving tangible problems through hands-on development and shipping projects from scratch.",
    philosophy: "Beyond the code editor, I stay energized by playing cricket and football, traveling to explore new places, capturing visual moments through photography, and competitive gaming. This active lifestyle keeps my thinking clear, strengthens my collaborative mindset, and inspires fresh creativity in my development work."
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    badge: "Core Stack",
    description: "Technologies I use daily to build modern, fluid, and responsive user interfaces.",
    skills: [
      { name: "React", levelBadge: "Core Framework", description: "Component composition, hooks, state management, and modern React 19 patterns.", category: "frontend", isStudied: true },
      { name: "Next.js", levelBadge: "App Router", description: "Server & Client Components, dynamic routing, SSR/SSG, and image optimization.", category: "frontend", isStudied: true },
      { name: "JavaScript (ES6+)", levelBadge: "Core Language", description: "Async/await, Promises, closures, DOM manipulation, and modern modular ES syntax.", category: "frontend", isStudied: true },
      { name: "TypeScript", levelBadge: "Type Safety", description: "Interfaces, generics, type checking, and modular architecture.", category: "frontend", isStudied: true },
      { name: "Tailwind CSS", levelBadge: "Styling System", description: "Utility-first design tokens, responsive breakpoints, dark/light theme styling.", category: "frontend", isStudied: true },
      { name: "DaisyUI", levelBadge: "Component UI", description: "Semantic UI tokens, customizable theme variables, and accessible components.", category: "frontend", isStudied: true },
      { name: "HTML5 & Semantic Web", levelBadge: "Markup & SEO", description: "Semantic tags, ARIA accessibility standards, and SEO best practices.", category: "frontend", isStudied: true },
      { name: "CSS3 & Responsive Design", levelBadge: "Layouts", description: "Flexbox, CSS Grid, animations, fluid transitions, and cross-browser consistency.", category: "frontend", isStudied: true }
    ]
  },
  {
    id: "learning",
    title: "Backend & Databases",
    badge: "Server & Data",
    description: "Server-side logic, API development, databases, and authentication solutions.",
    skills: [
      { name: "Node.js", levelBadge: "Runtime", description: "Event-driven asynchronous server architecture and package management.", category: "learning", isStudied: true },
      { name: "Express.js", levelBadge: "REST APIs", description: "Building RESTful endpoints, middleware chains, CORS, and request routing.", category: "learning", isStudied: true },
      { name: "MongoDB & Mongoose", levelBadge: "NoSQL Database", description: "Schema modeling, CRUD operations, indexing, and MongoDB Atlas cloud clusters.", category: "learning", isStudied: true },
      { name: "Authentication (BetterAuth / JWT)", levelBadge: "Security", description: "JSON Web Tokens, session handling, protected routes, and OAuth flows.", category: "learning", isStudied: true },
      { name: "REST APIs & Data Services", levelBadge: "Integration", description: "Consuming external RESTful services, caching responses, and handling asynchronous streams.", category: "learning", isStudied: true }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    badge: "Developer Tools",
    description: "Essential developer tooling and environments I rely on for version control and deployment.",
    skills: [
      { name: "Git", levelBadge: "Version Control", description: "Branching workflows, structured commit hygiene, and collaborative version control.", category: "tools", isStudied: true },
      { name: "GitHub", levelBadge: "Collaboration", description: "Remote repository hosting, issues, pull requests, and automated workflows.", category: "tools", isStudied: true },
      { name: "Vercel & Netlify", levelBadge: "Deployment", description: "Continuous deployment, serverless functions, environment variables, and CDN caching.", category: "tools", isStudied: true },
      { name: "VS Code", levelBadge: "Primary IDE", description: "Customized debugging workspace, linters, Turbopack, and TypeScript tooling.", category: "tools", isStudied: true },
      { name: "Postman", levelBadge: "API Testing", description: "REST endpoint debugging, request payload testing, and environment variables.", category: "tools", isStudied: true }
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    id: "bubt-cse",
    institution: "Bangladesh University of Business and Technology (BUBT)",
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    status: "Current",
    datesPlaceholder: "Currently Enrolled (Undergraduate Program)",
    location: "Mirpur, Dhaka, Bangladesh",
    description: "Deepening theoretical foundations in computer science, software engineering methodologies, data structures, algorithms, and advanced engineering concepts while building practical software projects.",
    keyAreas: [
      "Software Engineering & Architecture",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks & Web Systems"
    ]
  },
  {
    id: "tangail-polytechnic",
    institution: "Tangail Polytechnic Institute",
    degree: "Diploma in Computer Science and Engineering",
    status: "Completed",
    datesPlaceholder: "Diploma Graduate",
    location: "Tangail, Bangladesh",
    description: "Built strong practical fundamentals in computer systems, programming logic, foundational computing mathematics, web development basics, and hands-on lab projects.",
    keyAreas: [
      "Foundational Programming",
      "Computer Hardware & OS",
      "Database Foundations",
      "Web Technologies Basics",
      "Engineering Mathematics"
    ]
  }
];

export const experienceData = {
  hasFormalExperience: false,
  message: "I am actively building real-world projects and full-stack web applications while pursuing my CSE degree at BUBT. I dedicate my time to hands-on development, studying modern frontend architectures, and collaborating on web projects. As soon as verified internships or professional roles are added, they will be listed here.",
  items: [] as ExperienceItem[]
};
