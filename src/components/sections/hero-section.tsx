import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container-custom text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Atul Tameshwari</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            <p className="mb-2">Frontend Developer</p>
            <p className="text-lg">
              Crafting beautiful, responsive web experiences with{" "}
              <span className="text-primary font-medium">3+ years</span> of expertise
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-spring shadow-glow"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:bg-primary/10 transition-smooth"
            >
              View My Work
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth">
              <span className="text-sm mb-2">Scroll down</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}