import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Copy, Check } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { marqueeSkills, stats } from "@/lib/constants";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("atameshwari9@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = "mailto:atameshwari9@gmail.com";
    }
  }

  return (
    <section id="hero" ref={ref} className="relative overflow-clip pt-36 sm:pt-44 pb-10">
      <motion.div style={{ y: yBg, opacity }} className="container-custom relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [...ease] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Frontend Engineer · Plane · India
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] text-balance">
            Building interfaces
            <br />
            that feel <span className="display-serif italic font-normal gradient-text">inevitable.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I’m <span className="text-foreground font-medium">Atul Tameshwari</span> — 3+ years crafting design systems,
            dashboards, and AI-driven UX with React, TypeScript, and Next.js. Fast, accessible, delightful.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full px-6 h-12 text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]" asChild>
              <a href="#projects">
                View work
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-12 text-[15px] glass-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "copied!" : "atameshwari9@gmail.com"}
            </button>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-8 max-w-2xl">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease: [...ease] }}
              >
                <dt className="order-2 mt-1 text-xs text-muted-foreground">{s.label}</dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight">{s.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </motion.div>

      <div className="mt-14 border-y bg-card/40 backdrop-blur">
        <div className="overflow-hidden mask-fade-x py-3.5">
          <div className="flex w-max gap-8 animate-marquee pr-8">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s}
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom mt-8 flex justify-center sm:justify-start">
        <a href="#about" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
          Scroll
          <motion.span animate={reduce ? {} : { y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </a>
      </div>
    </section>
  );
}
