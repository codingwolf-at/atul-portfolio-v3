import { Card } from "@/components/ui/card"
import { highlights } from "@/lib/constants";

// TODO: replace highlight icons with 3D ones

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate frontend developer with a keen eye for detail and a love for creating digital experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-center">
              With <span className="text-primary font-semibold">3+ years</span> of experience in frontend development, 
              I specialize in building modern, responsive web applications using React, TypeScript, and cutting-edge CSS frameworks.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-center">
              I'm passionate about writing clean, efficient code and staying up-to-date with the latest web technologies. 
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
              or mentoring fellow developers.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="p-6 glass-card hover:bg-primary/5 transition-smooth hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}