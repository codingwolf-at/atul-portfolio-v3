export function Background() {

  // A collection of frontend/developer symbols to act as particles
  const codeSymbols = [
    "</>", "{ }", "=>", "()", "[]", ";", "&&", "||", "===",
    "React", "TS", "CSS", "/**/", "const", "let", "return", "git",
    "var", "NextJS", "console.log()"
  ];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none transition-colors duration-500">
      {/* Very faint pure grid underneath everything */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_30%,transparent_100%)] z-0"
      />

      {/* Floating Code Particles - High Accessibility/Low Distraction */}
      <div
        className="absolute inset-0 z-0 overflow-visible font-mono font-bold select-none text-muted-foreground"
        aria-hidden="true" // Ensure screen readers don't read out random background text
      >
        {[...Array(35)].map((_, i) => {
          // Semi-randomize deterministic properties based on index
          const symbol = codeSymbols[(i * 3) % codeSymbols.length];
          const sizeInfo = i % 3;
          let fontSize = "1rem";

          // Significantly lowered opacities to ensure foreground content remains perfectly readable
          let opacity = 0.04;

          if (sizeInfo === 0) {
            fontSize = "1.5rem";
            opacity = 0.02;
          } else if (sizeInfo === 1) {
            fontSize = "2.5rem";
            opacity = 0.01;
          } else {
            fontSize = "0.875rem";
            opacity = 0.05;
          }

          const left = (i * 17) % 100;
          // Very slow durations so they drift like dust without pulling the eye (30s to 60s)
          const duration = 30 + ((i * 5) % 30);
          const delay = (i * 2) % 30;

          // Accent some of the symbols randomly with the primary brand colors
          let colorClass = "text-muted-foreground";
          if (i % 7 === 0) colorClass = "text-[#06b3c5]";
          if (i % 11 === 0) colorClass = "text-[#9256bb]";

          return (
            <div
              key={i}
              className={`absolute animate-code-float will-change-transform ${colorClass}`}
              style={{
                left: `${left}%`,
                bottom: '-10%',
                fontSize,
                opacity,
                animationDuration: `${duration}s`,
                animationDelay: `-${delay}s`,
                whiteSpace: "nowrap"
              }}
            >
              {symbol}
            </div>
          );
        })}
      </div>

      {/* Accessibility Contrast Matte Layer */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] z-20 pointer-events-none" />
    </div>
  );
}
