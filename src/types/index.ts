export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface ProfileData {
  name: string;
  fullName?: string;
  brandName?: string;
  designation: string;
  tagline: string;
  location: string;
  availability: string;
  photoUrl: string;
  resumeFileName: string;
  resumeUrl: string;
  socials: SocialLinks;
  heroBio: string;
  hobbies: string[];
  hobbiesText: string;
  aboutStory: {
    journey: string;
    focus: string;
    learning: string;
    philosophy: string;
  };
}

export interface SkillItem {
  name: string;
  levelBadge?: string;
  description: string;
  category: 'frontend' | 'tools' | 'learning';
  isStudied: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  status: 'Current' | 'Completed';
  datesPlaceholder?: string;
  location: string;
  description: string;
  keyAreas: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  isVerified: boolean;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedOverview: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  status: 'Completed' | 'In Development' | 'Learning Project';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  challenges: string[];
  solutions: string[];
  improvements: string[];
  futurePlans: string[];
}

export interface ContactFormField {
  name: string;
  email: string;
  subject: string;
  message: string;
}
