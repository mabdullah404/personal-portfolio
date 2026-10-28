import { ProfileData, SkillCategory, EducationItem, ExperienceItem } from '@/types';

/**
 * Verified Profile Data for Abdullah
 * All information here is strictly aligned with Abdullah's verified profile.
 * Unprovided items (email, phone, custom resume file) are labeled with clear TODO placeholders.
 */
export const profileData: ProfileData = {
  name: "Abdullah Al Mamun",
  fullName: "Abdullah Al Mamun",
  brandName: "Abdullah",
  designation: "Web Developer (Learning and Building)",
  tagline: "CSE student passionate about building clean interfaces, practical web applications, and continuous learning.",
  location: "Dhaka, Bangladesh",
  availability: "Open for Junior Roles & Project Collaborations",
  photoUrl: "/images/profile/abdullah.jpg",
  resumeFileName: "Abdullah-Resume.pdf",
  resumeUrl: "/resume/Abdullah-Resume.pdf", // Place your real resume in public/resume/Abdullah-Resume.pdf
  socials: {
    github: "https://github.com/mabdullah404",
    linkedin: "https://linkedin.com/in/mabdullah77/",
    twitter: "https://x.com/mabdullah77d",
    email: "mabdullah539629@gmail.com",
    phone: "+880 1717-697404",
    whatsapp: "+880 1717-697404",
  },
  heroBio: "I am a Computer Science & Engineering undergraduate at BUBT dedicated to building clean, responsive, and user-centric web applications with Next.js, React, and TypeScript.",
  hobbies: ["Cricket & Football", "Traveling", "Photography", "Esports & Gaming"],
  hobbiesText: "Cricket, Football, Traveling, Photography, and Esports",
  aboutStory: {
    journey: "My programming journey began with a genuine curiosity about how web technologies power modern digital experiences. After completing my Diploma in Computer Science & Engineering from Tangail Polytechnic Institute with a solid technical base, I enrolled at Bangladesh University of Business and Technology (BUBT) for my B.Sc. in CSE to deepen my algorithmic understanding and software engineering craftsmanship.",
    focus: "I enjoy building intuitive user interfaces, component-driven layouts, and practical web applications. Whether crafting smooth responsive styling with Tailwind CSS or ensuring static type safety with TypeScript, I prioritize clarity, accessibility, and high performance in every project I ship.",
    learning: "Currently, I am expanding my full-stack capabilities with Next.js App Router, React 19, RESTful API integration, and backend data flows. I believe in learning through active building and shipping real projects that solve tangible problems.",
    philosophy: "Beyond the code editor, I stay energized by playing cricket and football, traveling to explore new places, capturing visual moments through photography, and competitive esports gaming. This balance of teamwork, creative perspective, and focus directly fuels my problem-solving mindset as a developer."
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "Core Stack",
    description: "Technologies I study and use daily to build responsive, accessible, and type-safe user interfaces.",
    skills: [
      { name: "HTML5", levelBadge: "Studied & Applied", description: "Semantic markup, modern accessibility standards (ARIA), SEO best practices.", category: "frontend", isStudied: true },
      { name: "CSS3", levelBadge: "Studied & Applied", description: "Flexbox, Grid, custom properties, animations, and fluid responsive design.", category: "frontend", isStudied: true },
      { name: "JavaScript (ES6+)", levelBadge: "Studied & Applied", description: "Modern syntax, asynchronous programming, Promises, DOM manipulation.", category: "frontend", isStudied: true },
      { name: "TypeScript", levelBadge: "Studied & Applied", description: "Static typing, interfaces, type safety, modular application development.", category: "frontend", isStudied: true },
      { name: "React", levelBadge: "Studied & Applied", description: "Component composition, state management, hooks, and clean lifecycle architecture.", category: "frontend", isStudied: true },
      { name: "Next.js", levelBadge: "Studied & Applied", description: "App Router, Server & Client Components, file-based routing, SSR/SSG.", category: "frontend", isStudied: true },
      { name: "Tailwind CSS", levelBadge: "Studied & Applied", description: "Utility-first design systems, custom color tokens, responsive layouts.", category: "frontend", isStudied: true }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    badge: "Development",
    description: "Essential developer tooling and environments I rely on for version control and productive workflows.",
    skills: [
      { name: "Git", levelBadge: "Used Regularly", description: "Source code versioning, commit discipline, branching, and repository management.", category: "tools", isStudied: true },
      { name: "GitHub", levelBadge: "Used Regularly", description: "Remote repository hosting, issue tracking, deployment triggers, collaboration.", category: "tools", isStudied: true },
      { name: "VS Code", levelBadge: "Primary Editor", description: "Configured developer environment, debugging, TypeScript intellisense, extensions.", category: "tools", isStudied: true }
    ]
  },
  {
    id: "learning",
    title: "Currently Exploring & Backend Foundations",
    badge: "Learning Path",
    description: "Full-stack topics and concepts I am actively studying and implementing in hands-on projects.",
    skills: [
      { name: "REST APIs & Fetching", levelBadge: "In Progress", description: "HTTP methods, asynchronous data fetching, error boundaries, request caching.", category: "learning", isStudied: false },
      { name: "Authentication Concepts", levelBadge: "In Progress", description: "JWT, session management, secure cookies, and route protection fundamentals.", category: "learning", isStudied: false },
      { name: "Backend & Database Basics", levelBadge: "In Progress", description: "Relational database concepts, schema design, and server-side logic.", category: "learning", isStudied: false }
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

/**
 * Optional Experience Section
 * Per requirement: Honest presentation. Since no formal corporate internship or job dates
 * were supplied, we highlight project-based and practical learning without fabricating job entries.
 */
export const experienceData = {
  hasFormalExperience: false,
  message: "I am actively building real-world projects and open-source software while pursuing my CSE degree. I dedicate my time to hands-on development, studying modern frontend architectures, and collaborating on web projects. As soon as verified internships or professional roles are added, they will be listed here.",
  items: [] as ExperienceItem[]
};
