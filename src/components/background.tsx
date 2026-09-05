export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
      <div className="absolute inset-0 grid-bg mask-fade-grid" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-30 dark:opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(190 95% 50% / 0.35), transparent), radial-gradient(closest-side at 70% 60%, hsl(275 70% 65% / 0.35), transparent)" }}
      />
      <div className="absolute bottom-[-180px] right-[-120px] h-[380px] w-[520px] rounded-full opacity-20 blur-3xl dark:opacity-15"
        style={{ background: "radial-gradient(closest-side, hsl(190 95% 45% / 0.5), transparent)" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </div>
  );
}
