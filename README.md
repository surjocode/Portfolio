# Piel Mitra - Developer Portfolio

A modern, responsive, and performance-optimized developer portfolio website built for **Piel Mitra**, an Aspiring Full Stack Web Developer.

Designed with a premium dark theme, emerald-green accents, clean typography, and a structure tailored for recruiters and international remote internship applications.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict typing, no `any`)
- **Styling:** Tailwind CSS (Custom dark theme with emerald-green accents)
- **Icons:** Lucide React
- **Architecture:** Modular, reusable React components

---

## 📑 Portfolio Sections

1. **Navbar:** Sticky header with "Piel Mitra" branding, smooth-scrolling navigation links (Home, About, Skills, Projects, Contact), and a responsive mobile navigation drawer.
2. **Hero:** Featuring the headline *"Aspiring Full Stack Web Developer"*, introduction, remote readiness badge, and working CTA buttons (*Explore Projects* & *Contact Me*).
3. **About Me:** Honest, recruiter-focused narrative emphasizing core web development fundamentals, clean code practices, and eagerness to contribute to remote teams.
4. **Skills:** Exclusively listing the 12 core technologies:
   - **Frontend:** HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS
   - **Backend:** Node.js, Express.js, MongoDB
   - **Tools & Collaboration:** Git, GitHub
5. **Projects:** Featuring **BazarDor** and **FitLog** with architecture highlights, tech stack badges, interface preview cards, and clearly designated placeholder links for live demos and GitHub repositories.
6. **Contact:** Interactive contact form (with client-side state and success simulation), copyable email button, and direct links to GitHub and LinkedIn profiles (with clear placeholder indicators).
7. **Footer:** Brand summary, navigation anchors, social links, and copyright metadata.

---

## 📁 Project Structure

```text
c:\projects\piel-mitra-portfolio\
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind base styles, custom scrollbars, and emerald glows
│   │   ├── layout.tsx          # Root layout with SEO metadata and ambient lighting
│   │   └── page.tsx            # Main landing page combining all sections
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navigation bar with mobile drawer
│   │   ├── Hero.tsx            # Hero section with headline and CTAs
│   │   ├── About.tsx           # About Me section with strengths and values
│   │   ├── Skills.tsx          # 12 authorized technologies cleanly categorized
│   │   ├── Projects.tsx        # BazarDor and FitLog project showcase
│   │   ├── Contact.tsx         # Contact channels and interactive contact form
│   │   └── Footer.tsx          # Professional footer with links and back-to-top
│   ├── data/
│   │   └── portfolio.ts        # Centralized data store for skills, projects, and bio
│   └── types/
│       └── index.ts            # Strict TypeScript interfaces
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.17 or higher) installed on your computer.

### 1. Navigate to the project directory

```bash
cd c:\projects\piel-mitra-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for production

To test the production build and verify performance:

```bash
npm run build
npm start
```

---

## ✏️ Customizing Your Links & Placeholders

All personal information, links, and placeholders are centralized in [`src/data/portfolio.ts`](file:///c:/projects/piel-mitra-portfolio/src/data/portfolio.ts):

1. **Email & Socials:**
   Update the `socialLinks` array with your actual GitHub username, LinkedIn profile URL, and email address.
2. **Projects:**
   Update `demoUrlPlaceholder` and `repoUrlPlaceholder` in `projectsData` for both **BazarDor** and **FitLog** when your live deployments or public repositories are ready.
