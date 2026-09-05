import { Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from "lucide-react";

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Stack", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "20M+", label: "Survey responses powered" },
  { value: "100%", label: "Design-system migrated" },
  { value: "∞", label: "Curiosity" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "React · TypeScript · Next.js",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "React Hooks"],
  },
  {
    title: "Styling",
    description: "Systems that scale",
    skills: ["Tailwind CSS", "CSS3", "SASS/SCSS", "Design Systems", "Figma"],
  },
  {
    title: "Toolbox",
    description: "Ship fast, stay stable",
    skills: ["Git & GitHub", "Vercel", "Netlify", "REST APIs", "Chrome DevTools", "Cursor", "VS Code", "Responsive Design"],
  },
];

export const marqueeSkills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Design Systems", "Supabase", "Framer Motion", "Node.js", "Accessibility", "Vercel", "Git", "REST APIs",
];

// ABOUT
export const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Maintainable, scalable TypeScript. Hooks over classes, composition over inheritance, tests where it counts."
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Design-system thinking. Tokens, a11y, WCAG contrast, intuitive flows that feel inevitable."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Core Web Vitals obsessed. Code-split, memoize, lazy-load — fast on 3G, smooth at 120hz."
  }
]

// PROJECTS
export const projects = [
  {
    title: "HireTrack — Job Application Tracker",
    description: "Production-style tracking platform with Next.js, TypeScript, and Supabase. Server-driven rendering, scalable architecture, real dashboard UX patterns.",
    image: "/hiretrack.png",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://hiretrack-ruddy.vercel.app",
    githubUrl: "https://github.com/codingwolf-at/hiretrack",
    featured: true,
    status: "In progress",
  },
  {
    title: "ReviewUI — AI UI Reviewer",
    description: "Analyzes UI code and screenshots with AI. Returns structured UX, accessibility, and code-quality feedback in seconds.",
    image: "/review-ui.png",
    technologies: ["Next.js", "TypeScript", "OpenRouter AI", "Tailwind"],
    liveUrl: "https://ai-ui-reviewer.vercel.app/",
    githubUrl: "https://github.com/codingwolf-at/ai-ui-reviewer",
    featured: true,
    status: "Live",
  },
  {
    title: "Notes Keep",
    description: "React note-taking app with categories, trash, timestamps, theme persistence. Local-first, responsive, zero friction.",
    technologies: ["React", "HTML", "CSS"],
    liveUrl: "https://notes-keep.vercel.app/",
    githubUrl: "https://github.com/codingwolf-at/notes-keep",
    featured: false
  },
  {
    title: "CRESCENT UI",
    description: "Lightweight CSS component library via CDN. Buttons, cards, inputs, avatars — no framework lock-in.",
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
    title: "Software Development Engineer — Frontend",
    company: "Plane",
    period: "May 2026 — Present",
    location: "Hyderabad, India · On-site",
    employment: "Full-time",
    bullets: [
      "Rebuilt Propel, Plane's internal design system — redesigned 30+ React/TypeScript components (Button, Dialog, Combobox, Select, Table, Toast, Tooltip, and more) against a new Figma spec, hardening for WCAG target sizes, RTL support, accessible group semantics.",
      "Architected shared-component layer (@plane/blocks) unifying Plane's public “Space” surface with main Web app, eliminating recurring visual drift.",
      "Consolidated duplicated component and store code between Plane's community and core editions into a single shared tree.",
    ],
    tags: ["React", "TypeScript", "Design Systems", "Accessibility (WCAG)", "Storybook", "Frontend Architecture", "Vite"],
    description:
      "Rebuilding Propel design system and unifying Plane's Web + Space surfaces via shared architecture.",
  },
  {
    title: "Software Developer — Frontend",
    company: "inFeedo.ai",
    period: "Jun 2022 — Mar 2025",
    description:
      "Helped build and scale a shared design system, migrating the majority of UI components to improve consistency and dev speed. Shipped AI-driven features for enterprise HR SaaS used by hundreds of CHROs, insights from tens of millions of responses. Led dashboard architecture improvements, owned prod issues end-to-end.",
    tags: ["Design System", "React", "AI Features", "Dashboards"],
  },
  {
    title: "Frontend Intern",
    company: "inFeedo.ai",
    period: "Mar 2022 — May 2022",
    description:
      "Modernized React apps with UX refinements, ARIA/WCAG accessibility upgrades, class → hooks migration during React 19 upgrade. Resolved OSS vulnerabilities, validated fixes pre-release.",
    tags: ["Accessibility", "React 19", "Migration"],
  },
];
