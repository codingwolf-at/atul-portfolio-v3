import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

// TODO: After skills and projects you can add a certifications section

// TODO: Do sanity for mobile version also

// TODO: add a common loader with fixed delay

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
