import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { contactInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-20 border-t">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border bg-foreground text-background px-6 py-14 sm:p-16 text-center noise">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(closest-side, hsl(190 95% 55%), transparent), radial-gradient(closest-side at 65%, hsl(275 80% 70%), transparent)" }}
            />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">
              Got a project? Say hi
            </p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[0.95] text-balance">
              Let’s build something <span className="display-serif italic font-normal">worth using.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed opacity-70">
              Open to frontend roles, freelance, and collaborations. Fast replies — usually within a day.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Button size="lg" variant="secondary" className="rounded-full px-7 h-12" asChild>
                  <a href="mailto:atameshwari9@gmail.com">
                    atameshwari9@gmail.com
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline" className="rounded-full px-7 h-12 bg-transparent text-background border-background/25 hover:bg-background/10 hover:text-background" asChild>
                  <a href="https://www.linkedin.com/in/atul-tameshwari/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </Magnetic>
            </div>
            <div className="relative mt-8 flex justify-center gap-2.5 flex-wrap">
              {contactInfo.map((c) => (
                <a
                  key={c.title}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={c.title}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/20 hover:bg-background/10 transition-colors"
                >
                  {c.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
