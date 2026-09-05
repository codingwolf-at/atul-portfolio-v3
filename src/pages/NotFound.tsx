import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Command } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(function handleNotFoundLog() {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">404 — lost in space</p>
        <h1 className="mt-4 text-6xl font-semibold tracking-tight">
          Nope<span className="gradient-text">.</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-sm mx-auto">
          <span className="font-mono text-sm">{location.pathname}</span> doesn’t exist. Let’s get you back.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
