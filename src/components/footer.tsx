import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t glass-card">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Atul Tameshwari</h3>
            <p className="text-muted-foreground">
              Frontend Developer crafting digital experiences
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-primary/10 transition-smooth hover-lift rounded-full"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-primary/10 transition-smooth hover-lift rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 glass-card hover:bg-primary/10 transition-smooth hover-lift rounded-full"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Alex
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}