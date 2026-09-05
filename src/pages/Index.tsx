import { useEffect } from "react";
import Lenis from "lenis";
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { Background } from "@/components/background"
import { ScrollProgress } from "@/components/scroll-progress"
import { CommandPalette } from "@/components/command-palette"

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    function onAnchorClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
    }
    document.addEventListener("click", onAnchorClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen relative">
        <ScrollProgress />
        <Background />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
        <CommandPalette />
      </div>
    </ThemeProvider>
  );
};

export default Index;
