export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container-custom py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Atul logo" width={28} height={28} className="h-7 w-7 rounded-full object-cover ring-1 ring-border" />
            <span className="text-sm font-semibold tracking-tight">atul.dev</span>
            <span className="font-mono text-[11px] text-muted-foreground">© {year}</span>
          </a>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] text-muted-foreground">Built with React · Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
