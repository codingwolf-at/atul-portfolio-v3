import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
    ]
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Styled Components", level: 80 },
      { name: "SASS/SCSS", level: 85 },
      { name: "Responsive Design", level: 95 },
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vite/Webpack", level: 75 },
      { name: "Testing (Jest/Vitest)", level: 70 },
      { name: "Figma", level: 80 },
    ]
  }
]

const technologies = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express", 
  "MongoDB", "PostgreSQL", "Git", "Docker", "AWS", "Vercel", "Figma", "Jest"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="p-6 glass-card hover:bg-primary/5 transition-smooth"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{ 
                        animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s` 
                      }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium hover:bg-primary/10 transition-smooth hover-lift cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}