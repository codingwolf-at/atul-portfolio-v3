import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
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

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden glass-card hover:bg-primary/5 transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary hover:scale-105 transition-spring"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="p-6 glass-card hover:bg-primary/5 transition-smooth hover-lift"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
