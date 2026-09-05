import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/reveal";
import { projects } from "@/lib/constants";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20 border-t">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Proof, not promises.</>}
            copy="Production-grade builds. Real deploys, real users, real code you can read."
          />
          <Reveal delay={0.1}>
            <a href="https://github.com/codingwolf-at" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors">
              All repos <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border bg-card card-hover flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full grid-bg" />
                  )}
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full glass-card px-3 py-1 font-mono text-[11px] font-medium">
                      {"status" in p ? (p as { status?: string }).status ?? "Featured" : "Featured"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:underline decoration-2 underline-offset-4">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span key={t} className="rounded-full border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2.5">
                    <a href={p.liveUrl} target="_blank" rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                      Live <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-medium hover:bg-accent transition-colors">
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group rounded-2xl border bg-card p-6 sm:p-7 card-hover h-full">
                <h3 className="font-semibold tracking-tight text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-1 font-mono text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm font-medium">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline underline-offset-4">
                    Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                    Code <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
