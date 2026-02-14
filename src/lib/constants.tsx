import { Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from "lucide-react";

// ABOUT 
export const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and modern standards."
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive interfaces that provide exceptional user experiences."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and cross-browser compatibility."
  }
]

// PROJECTS
export const projects = [
  {
    title: "HireTrack - Job Application Tracking Dashboard (In Progress)",
    description: "Building a production-style tracking platform with Next.js, TypeScript, and Supabase focused on scalable architecture, server-driven rendering, and real-world dashboard UX patterns.",
    image: "/hiretrack.png",
    technologies: ["NextJS", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://hiretrack-ruddy.vercel.app",
    githubUrl: "https://github.com/codingwolf-at/hiretrack",
    featured: true
  },
  {
    title: "ReviewUI — AI Powered UI Reviewer",
    description: "Built a production-style web app using Next.js that analyzes UI code and screenshots with AI and returns structured UX, accessibility, and code-quality feedback.",
    image: "/review-ui.png",
    technologies: ["NextJS", "TypeScript", "OpenRouter AI", "GPT-4o Mini", "Tailwind CSS"],
    liveUrl: "https://ai-ui-reviewer.vercel.app/",
    githubUrl: "https://github.com/codingwolf-at/ai-ui-reviewer",
    featured: true
  },
  {
    title: "Notes Keep",
    description: "Notes Keep is a React-based note-taking web app that lets users create, categorize, and manage notes with features like trash handling, timestamps, and dark/light theme support. It persists notes and UI preferences in local storage and focuses on a simple, responsive interface for everyday note organization.",
    // image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["ReactJS", "HTML", "CSS"],
    liveUrl: "https://notes-keep.vercel.app/",
    githubUrl: "https://github.com/codingwolf-at/notes-keep",
    featured: false
  },
  {
    title: "CRESCENT UI",
    description: "Crescent UI is a lightweight, customizable CSS component library built to speed up web development with reusable UI primitives like buttons, cards, inputs, avatars, and navigation elements. It’s distributed via CDN and designed around vanilla CSS utilities and components, making it easy to integrate into projects without framework lock-in.",
    // image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://crescent-ui.netlify.app/",
    githubUrl: "https://github.com/codingwolf-at/crescent-ui",
    featured: false
  }
]

// CONTACT
export const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      link: "mailto:atameshwari9@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "Github",
      link: "https://github.com/codingwolf-at"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/atul-tameshwari/"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      title: "X (formerly Twitter)",
      link: "https://x.com/atulT09"
    }
];

export const experience = [
  {
    title: "Software Developer - Frontend",
    company: "inFeedo.ai",
    period: "June 2022 - March 2025",
    description:
      "Helped build and scale a shared design system, migrating the majority of UI components to improve consistency and development speed. Delivered high-impact AI-driven features for an enterprise HR SaaS platform used by hundreds of CHRO stakeholders, supporting insights from tens of millions of employee responses. Also led dashboard architecture improvements and handled production issues end to end in a fast-moving environment.",
  },
  {
    title: "Frontend Intern",
    company: "inFeedo.ai",
    period: "March 2022 - May 2022",
    description:
      "Improved and modernized internal and production-facing React applications by delivering UX refinements, accessibility upgrades aligned with ARIA and WCAG standards, and migrating legacy class components to hooks during a React 19 upgrade. Strengthened platform stability by proactively resolving open-source vulnerabilities and validating fixes before release.",
  },
];