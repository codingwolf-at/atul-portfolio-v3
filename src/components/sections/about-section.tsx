import { Reveal, SectionHeading } from "@/components/motion/reveal";
import { highlights } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <SectionHeading
            eyebrow="About"
            title={<>Engineer with a designer’s eye.</>}
            copy="3+ years turning ambiguous product ideas into shippable, measurable UI. I live in the details — spacing, states, empty states, error states."
          />
          <div className="space-y-5 text-[17px] leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                At <span className="font-medium text-foreground">inFeedo.ai</span> I helped scale a shared design
                system and shipped AI features used by hundreds of CHROs — insights mined from{" "}
                <span className="font-medium text-foreground">tens of millions</span> of employee responses.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-muted-foreground">
                Stack of choice: React, TypeScript, Next.js, Tailwind. I care about accessibility (ARIA/WCAG),
                Core Web Vitals, and code your future teammates will thank you for. Off-screen: design trends,
                mentoring, open source.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Design Systems", "Dashboards", "AI UX", "Accessibility", "Perf"].map((t) => (
                  <span key={t} className="rounded-full border bg-card px-3 py-1.5 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border bg-card p-6 card-hover">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-accent">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
