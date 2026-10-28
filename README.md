<div align="center">

# 🚀 Abdullah Al Mamun — Personal Portfolio

**A high-performance, accessible, and modern personal portfolio and software engineering showcase built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.**

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=for-the-badge)](LICENSE)

[🌐 View Live Portfolio](https://personal-portfolio-omega-seven-70.vercel.app/) • [📁 Explore Projects](#-featured-projects) • [📬 Get In Touch](#-contact--connect)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Design Philosophy](#-design-philosophy)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Featured Projects](#-featured-projects)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Customization Guide](#-customization-guide)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 📖 Overview

This repository houses the personal developer portfolio of **Abdullah Al Mamun**, an undergraduate Computer Science & Engineering (CSE) student at BUBT (Bangladesh University of Business and Technology) and aspiring Web Developer.

Engineered with cutting-edge web technologies, the application delivers lightning-fast page loads, fluid responsive layouts, type-safe data pipelines, and a distinct aesthetic combining clean white surfaces with vibrant crimson-red accents.

---

## 🎨 Design Philosophy

- **Crisp Minimalism:** Structured around pure white cards (`bg-white`) in light mode and deep obsidian cards (`bg-zinc-900/40`) in dark mode with subtle translucent borders.
- **Signature Accent:** Carefully tuned crimson red (`#dc2626` light / `#ef4444` dark) providing high-contrast visual hierarchy and focal points.
- **Buttery Micro-Interactions:** Smooth 700ms image transitions (`duration-700 ease-in-out`), scale-ups, and soft ambient glows that elevate the interactive feel without feeling jarring.
- **True Theme Support:** Zero-flicker light & dark theme toggle respecting system preferences and persistent across user sessions via `localStorage`.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **⚡ Next.js 16 App Router** | Hybrid Static Site Generation (SSG) and Server-Side Rendering (SSR) for blazing performance. |
| **🌓 Seamless Dark / Light Mode** | Persistent theme state with zero-FOUC (Flash of Unstyled Content) and synchronized UI tokens. |
| **🎯 Dynamic Project Details** | Dedicated deep-dive pages (`/projects/[slug]`) breaking down features, challenges, solutions, and roadmaps. |
| **🎓 Verified Education Details** | Structured academic background and CSE degree details at BUBT. |
| **🛠️ Honest Skills Matrix** | Categorized competencies (Frontend, Tools, Workflow) without arbitrary percentage bars. |
| **📬 Interactive Contact Hub** | Client-side validated message form with direct links for Email, Phone, WhatsApp, and Socials. |
| **📄 Smart Resume Trigger** | Modal dialog with verified education overview and step-by-step instructions for PDF download activation. |
| **🔍 Search Engine Optimization** | Dynamic metadata, OpenGraph tags, semantic HTML5, and accessible ARIA attributes. |

---

## 💻 Tech Stack

### Core Technologies
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server Components)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type-checking)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [daisyUI v5](https://daisyui.com/)
- **Icons:** Custom SVG icon system & [Lucide](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

---

## 📂 Featured Projects

| Project | Live Demo | Source Code | Highlights |
| :--- | :---: | :---: | :--- |
| **Bazar Dor** | [🔗 Live Demo](https://bazar-dor-project-omega.vercel.app/) | [💻 GitHub](https://github.com/mabdullah404/bazar-dor-project) | Daily grocery & commodity market price tracking app in Bangladesh. |
| **DevStack** | [🔗 Live Demo](https://development-stack-assignment-05.netlify.app/) | [💻 GitHub](https://github.com/mabdullah404/Assignment-05) | Interactive developer stack builder, tool comparison, and real-time toast feedback. |
| **DEVCONF 2026** | [🔗 Live Demo](https://mabdullah404.github.io/Assignment-01/) | [💻 GitHub](https://github.com/mabdullah404/Assignment-01) | Developer conference event landing page with speaker schedules and agendas. |
| **Frameora** | *In Development* | [💻 GitHub](https://github.com/mabdullah404) | Curated visual storytelling, photography showcase, and masonry galleries. |
| **News Bangla 24** | [🔗 Live Demo](https://news-bangla-24-o8cr.vercel.app/) | [💻 GitHub](https://github.com/mabdullah404/news-bangla-24) | Full-stack Bengali news portal with real-time ticker marquee and multi-category feeds. |

---

## 🏗️ Project Architecture

```plaintext
personal-portfolio/
├── public/                     # Static media and assets
│   ├── images/                 # Optimized SVG/raster project illustrations & avatars
│   └── resume/                 # Destination for your downloadable resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 directives, custom variant, color tokens
│   │   ├── layout.tsx          # Root layout, theme injection script, SEO metadata
│   │   ├── not-found.tsx       # Custom 404 page with navigation fallback
│   │   ├── page.tsx            # Home page aggregating all core sections
│   │   └── projects/[slug]/    # Dynamic routing for detailed project showcase
│   ├── components/
│   │   ├── layout/             # Global Navbar, Footer, and navigation elements
│   │   ├── projects/           # ProjectCard, ProjectDetails, and related widgets
│   │   ├── sections/           # Hero, About, Skills, Education, Experience, Contact
│   │   └── ui/                 # Badge, ThemeToggle, ScrollToTop, ResumeModal
│   ├── data/
│   │   ├── profile.ts          # Centralized bio, contact, and academic information
│   │   └── projects.ts         # In-depth project metadata and case studies
│   └── types/
│       └── index.ts            # TypeScript interfaces and shared type declarations
├── package.json                # Project dependencies and operational scripts
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Repository documentation
```

---

## 🚀 Getting Started

Follow these instructions to run a local copy of this portfolio on your development machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version `18.17.0` or higher recommended)
- `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mabdullah404/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🛠️ Available Scripts

In the project root, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot-reload at `localhost:3000`. |
| `npm run build` | Compiles and builds the production-ready static assets and server bundles. |
| `npm run start` | Boots the production server after a successful build. |
| `npm run lint` | Runs ESLint to check for code standards, formatting, and syntax issues. |

---

## ⚙️ Customization Guide

### 1. Update Personal & Bio Information
All personal details are decoupled into a single configuration file:
- Open [`src/data/profile.ts`](src/data/profile.ts)
- Modify `name`, `designation`, `aboutMe`, `academic`, `socials`, and `contactInfo`.

### 2. Add or Edit Projects
- Open [`src/data/projects.ts`](src/data/projects.ts)
- Add a new object following the `Project` type interface with `title`, `slug`, `liveUrl`, `githubUrl`, `keyFeatures`, and `technologies`.

### 3. Add Downloadable Resume
- Place your resume PDF in `public/resume/`
- Ensure the filename matches `resumeFileName` in [`src/data/profile.ts`](src/data/profile.ts) (default: `Abdullah-Al-Mamun-Resume.pdf`).

### 4. Color Palette & Styling
- Open [`src/app/globals.css`](src/app/globals.css)
- Customize `--accent-red` and background surface variables as desired.

---

## 📬 Contact & Connect

**Abdullah Al Mamun**  
*Web Developer & CSE Undergraduate Student at BUBT*  
📍 Dhaka, Bangladesh

- **Email:** [mabdullah539629@gmail.com](mailto:mabdullah539629@gmail.com)
- **Phone:** [+880 1717-697404](tel:+8801717697404)
- **WhatsApp:** [+880 1717-697404](https://wa.me/8801717697404)
- **GitHub:** [@mabdullah404](https://github.com/mabdullah404)
- **LinkedIn:** [muhammad-abdullah-al-mamun](https://linkedin.com/in/muhammad-abdullah-al-mamun)
- **Twitter / X:** [@mabdullah77d](https://twitter.com/mabdullah77d)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to customize and use it for your own portfolio.
