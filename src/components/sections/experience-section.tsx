import { Reveal, SectionHeading } from "@/components/motion/reveal";
import { experience } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 scroll-mt-20 border-t">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Experience"
            title={<>Where I’ve shipped.</>}
            copy="Fast-moving SaaS, real users, real incidents. Owned UI end-to-end."
          />
          <Reveal delay={0.1}>
            <a href="https://www.linkedin.com/in/atul-tameshwari/" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors">
              LinkedIn →
            </a>
          </Reveal>
        </div>

        <div className="mt-10 relative">
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-4">
            {experience.map((job, i) => (
              <Reveal key={job.title + job.company + i} delay={i * 0.08}>
                <article className="relative ml-8 rounded-2xl border bg-card p-6 sm:p-7 card-hover">
                  <span aria-hidden className="absolute -left-8 top-7 h-[15px] w-[15px] rounded-full border-2 border-background bg-foreground ring-2 ring-border" />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold tracking-tight text-lg">{job.title}</h3>
                      <p className="text-sm font-medium gradient-text">
                        {job.company}
                        {"employment" in job && (job as { employment?: string }).employment
                          ? ` · ${(job as { employment?: string }).employment}`
                          : null}
                      </p>
                      {"location" in job && (job as { location?: string }).location ? (
                        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                          {(job as { location?: string }).location}
                        </p>
                      ) : null}
                    </div>
                    <span className="rounded-full border bg-accent/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  {"bullets" in job && Array.isArray((job as { bullets?: string[] }).bullets) ? (
                    <ul className="mt-4 space-y-2.5">
                      {(job as { bullets: string[] }).bullets.map((b) => (
                        <li key={b.slice(0, 32)} className="flex gap-2.5 text-[15px] leading-relaxed text-muted-foreground">
                          <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{job.description}</p>
                  )}
                  {"tags" in job && Array.isArray((job as { tags?: string[] }).tags) ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(job as { tags: string[] }).tags.map((t) => (
                        <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
