import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Code, Palette, Wrench } from "lucide-react";
import { Badge } from "../ui/badge";

// TODO: move skills to constants and use loop to render

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

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center transition-all hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] hover:border-primary/20 animate-in slide-in-from-left-5 duration-700">
              <CardHeader>
                <img src="./code.png" alt="code" width={100} height={100} className="mx-auto" />
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    React
                  </Badge>
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    HTML5
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center transition-all hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] hover:border-primary/20 animate-in slide-in-from-right-5 duration-700">
              <CardHeader>
                <img src="./design.png" alt="design" width={100} height={100} className="mx-auto" />
                <CardTitle>Styling & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    CSS3
                  </Badge>
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="secondary" className="transition-all duration-200 hover:scale-105">
                    SASS/SCSS
                  </Badge>
                  <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                    Figma (Basic)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tools & Technologies */}
          <Card className="transition-all hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] hover:border-primary/20 animate-in slide-in-from-bottom-5 duration-700">
            <CardHeader>
              <img src="./tool.png" alt="tool" width={100} height={100} className="mx-auto" />
              <CardTitle className="text-center">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Git & GitHub
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Bitbucket
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Cursor
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  VS Code
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  npm/yarn
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Chrome DevTools
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Responsive Design
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  REST APIs
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Vercel
                </Badge>
                <Badge variant="outline" className="transition-all duration-200 hover:scale-105">
                  Netlify
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};