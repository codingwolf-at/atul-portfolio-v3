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
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://demo-dashboard.vercel.app",
    githubUrl: "https://github.com/alexrod/ecommerce-dashboard",
    featured: true
  },
  {
    title: "Weather Forecast App",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather insights.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["React", "OpenWeather API", "Mapbox", "SCSS"],
    liveUrl: "https://weather-forecast-app.vercel.app",
    githubUrl: "https://github.com/alexrod/weather-app",
    featured: true
  },
  {
    title: "Task Management Tool",
    description: "A collaborative project management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Framer Motion"],
    liveUrl: "https://task-manager-pro.vercel.app",
    githubUrl: "https://github.com/alexrod/task-manager",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing modern design principles with smooth animations and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-alex.vercel.app",
    githubUrl: "https://github.com/alexrod/portfolio",
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