import { Reveal, SectionHeading } from "@/components/motion/reveal";
import { skillGroups } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 scroll-mt-20 border-t">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Stack"
          title={<>Tools I reach for.</>}
          copy="Opinionated, boring where it counts, modern where it matters."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border bg-card p-6 sm:p-7 card-hover">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  0{i + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="cursor-default rounded-full border px-2.5 py-1 text-xs font-medium transition-colors hover:bg-foreground hover:text-background hover:border-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
