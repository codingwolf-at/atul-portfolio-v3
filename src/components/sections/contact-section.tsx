import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { contactInfo } from "@/lib/constants";

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
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:atameshwari9@gmail.com"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-[15px] font-medium text-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
              >
                atameshwari9@gmail.com
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/atul-tameshwari/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-background/25 px-7 text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/10 hover:border-background/40 active:translate-y-0 active:scale-[0.98]"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div className="relative mt-9 flex justify-center gap-3 flex-wrap">
              {contactInfo.map((c) => (
                <a
                  key={c.title}
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={c.title}
                  title={c.title}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-background/20 transition-all duration-300 hover:-translate-y-1 hover:bg-background/10 hover:border-background/40 hover:shadow-lg active:translate-y-0 active:scale-95"
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
