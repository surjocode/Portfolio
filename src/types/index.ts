export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  bengaliTitle?: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  demoUrl: string;
  repoUrl: string;
  demoUrlPlaceholder?: string;
  repoUrlPlaceholder?: string;
  status: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    level: string;
  }[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  isPlaceholder: boolean;
}

export interface ResumeConfig {
  driveFileId: string;
  driveDirectUrl: string;
  driveViewUrl: string;
  localPdfPath: string;
}
