import { NavLink, ProjectItem, SkillCategory, SocialLink, ResumeConfig } from "../types";

export const siteConfig = {
  name: "Piel Mitra",
  title: "Full Stack Web Developer",
  roleSubtitle: "Aspiring Full Stack Web Developer",
  shortBio:
    "Passionate about building responsive, user-friendly, and accessible web applications. Dedicated to mastering modern full-stack development with a clean code mindset.",
  location: "Bangladesh",
  openToWork: "Available for Remote Internships & Opportunities",
};

export const resumeConfig: ResumeConfig = {
  driveFileId: "1jFyAwQMy3EgRKHH2SB_Ljbcz6o-BEtOl",
  driveDirectUrl: "https://drive.google.com/uc?export=download&id=1jFyAwQMy3EgRKHH2SB_Ljbcz6o-BEtOl",
  driveViewUrl: "https://drive.google.com/file/d/1jFyAwQMy3EgRKHH2SB_Ljbcz6o-BEtOl/view?usp=sharing",
  localPdfPath: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/surjocode",
    label: "github.com/surjocode",
    isPlaceholder: false,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/piel-mitra-1743322ba/",
    label: "linkedin.com/in/piel-mitra-1743322ba",
    isPlaceholder: false,
  },
  {
    name: "Email",
    url: "mailto:surjomitra72@gmail.com",
    label: "surjomitra72@gmail.com",
    isPlaceholder: false,
  },
];

// Listed strictly according to requirements:
// HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Git, GitHub
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces.",
    skills: [
      {
        name: "HTML",
        description: "Semantic document structure, accessibility standards, and SEO basics.",
        level: "Core Foundation",
      },
      {
        name: "CSS",
        description: "Modern layouts, Flexbox, CSS Grid, media queries, and responsive design.",
        level: "Core Styling",
      },
      {
        name: "JavaScript",
        description: "ES6+ syntax, asynchronous programming, DOM manipulation, and modular code.",
        level: "Core Language",
      },
      {
        name: "TypeScript",
        description: "Type safety, interfaces, generics, and robust scalable codebases.",
        level: "Modern Development",
      },
      {
        name: "React.js",
        description: "Component architecture, hooks, state management, and reusable UI systems.",
        level: "Frontend Framework",
      },
      {
        name: "Next.js",
        description: "App Router, server components, client-side routing, and static rendering.",
        level: "Full Stack Framework",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first responsive styling, custom theme configurations, and dark mode.",
        level: "Styling Framework",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating RESTful services, server logic, and structured database management.",
    skills: [
      {
        name: "Node.js",
        description: "Event-driven runtime for scalable backend services and asynchronous APIs.",
        level: "Runtime Environment",
      },
      {
        name: "Express.js",
        description: "RESTful API routing, middleware integration, error handling, and request validation.",
        level: "Backend Framework",
      },
      {
        name: "MongoDB",
        description: "NoSQL document database, schema modeling with Mongoose, and CRUD operations.",
        level: "Database",
      },
    ],
  },
  {
    title: "Version Control & Collaboration",
    description: "Managing codebases and collaborating effectively on software projects.",
    skills: [
      {
        name: "Git",
        description: "Branching workflows, version tracking, staging, commits, and merge management.",
        level: "Version Control",
      },
      {
        name: "GitHub",
        description: "Remote repositories, code reviews, pull requests, issue tracking, and collaboration.",
        level: "Code Collaboration",
      },
    ],
  },
];

export const allSkillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
];

export const projectsData: ProjectItem[] = [
  {
    id: "bangla-news-24",
    number: "01 / 05",
    category: "Web Development",
    title: "Bangla News 24",
    tagline: "Bangla-Language Digital News & Media Web Application",
    description:
      "A Bangla-language news website that presents news content in a clean, accessible interface.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB"],
    features: [
      "Category-based news browsing across politics, world, economy, and sports",
      "Real-time breaking news ticker with automated headline transitions",
      "Secure user authentication powered by Better Auth and MongoDB",
      "Clean, responsive editorial reader layout with Next.js App Router",
    ],
    demoUrl: "https://bangla-news-24-ten.vercel.app/",
    repoUrl: "https://github.com/surjocode/bangla-news-24",
    demoUrlPlaceholder: "https://bangla-news-24-ten.vercel.app/",
    repoUrlPlaceholder: "https://github.com/surjocode/bangla-news-24",
    status: "Featured Project",
  },
  {
    id: "bazardor",
    number: "02 / 05",
    category: "Web Application",
    title: "BazarDor",
    bengaliTitle: "বাজার দর",
    tagline: "Bangladesh-Focused Daily Market Price & Essential Commodity Tracker",
    description:
      "A Bangladesh-focused market price website for exploring essential products and their prices.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "Better Auth", "MongoDB"],
    features: [
      "Daily commodity price tracking with percentage trend indicators",
      "Category-based browsing of essential products (চাল, ডাল, তেল, সবজি, মাছ)",
      "Price sorting (lowest to highest) and detailed product comparisons",
      "User authentication with Better Auth and MongoDB database integration",
    ],
    demoUrl: "https://7th-assignment-steel.vercel.app/",
    repoUrl: "https://github.com/surjocode/7th-assignment",
    demoUrlPlaceholder: "https://7th-assignment-steel.vercel.app/",
    repoUrlPlaceholder: "https://github.com/surjocode/7th-assignment",
    status: "Featured Project",
  },
  {
    id: "fitlog",
    number: "03 / 05",
    category: "Fitness Application",
    title: "FitLog",
    tagline: "Workout Library & Daily Fitness Routine Planning Web App",
    description:
      "A fitness web application for exploring workout plans and tracking workout progress.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "LocalStorage"],
    features: [
      "Curated exercise library covering all major muscle groups",
      "Today's Plan builder with live workout statistics (exercises, minutes, calories)",
      "Save for Later workout bookmarks with LocalStorage persistence",
      "Detailed exercise specifications including sets, reps, equipment, and difficulty",
    ],
    demoUrl: "https://6th-assignment-mu.vercel.app/",
    repoUrl: "https://github.com/surjocode/6th-assignment",
    demoUrlPlaceholder: "https://6th-assignment-mu.vercel.app/",
    repoUrlPlaceholder: "https://github.com/surjocode/6th-assignment",
    status: "Featured Project",
  },
  {
    id: "movieexplorer",
    number: "04 / 05",
    category: "Movie Discovery",
    title: "MovieExplorer",
    tagline: "Interactive Movie Discovery & Media Exploration Platform",
    description:
      "A movie exploration website for discovering and browsing movie content.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API", "Vite", "Netlify"],
    features: [
      "Real-time search and filter across trending, top-rated, and popular films",
      "Rich movie detail modals with synopsis, ratings, genre tags, and cast",
      "Responsive grid and cinematic layout optimized for mobile and desktop",
      "Fast client-side routing and instant search query handling",
    ],
    demoUrl: "https://movieexplorer10.netlify.app/",
    repoUrl: "https://github.com/surjocode/ass2nt",
    demoUrlPlaceholder: "https://movieexplorer10.netlify.app/",
    repoUrlPlaceholder: "https://github.com/surjocode/ass2nt",
    status: "Featured Project",
  },
  {
    id: "devstack",
    number: "05 / 05",
    category: "Web Development",
    title: "DevStack",
    tagline: "Interactive Technology Exploration & Personalized Stack Builder",
    description:
      "A developer-focused web application that allows engineers to explore popular technologies, view difficulty levels and ratings, and curate a customized personal tech stack.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "React-Toastify", "Vite"],
    features: [
      "Technology directory with categories, difficulty ratings, and badges",
      "Custom interactive stack builder with real-time stack tracking",
      "Stack management with duplicate prevention and one-click clear",
      "Responsive layout with React-Toastify notifications and local state management",
    ],
    demoUrl: "https://devstack10.netlify.app/",
    repoUrl: "https://github.com/surjocode/5th-assignment",
    demoUrlPlaceholder: "https://devstack10.netlify.app/",
    repoUrlPlaceholder: "https://github.com/surjocode/5th-assignment",
    status: "Featured Project",
  },
];

