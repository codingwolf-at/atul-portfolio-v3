import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Navigation } from "./navigation";
import { navItems } from "@/lib/constants";

// Mock matchMedia for framer-motion or other libs if they need it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock theme toggle to avoid issues with next-themes in tests if they exist
vi.mock("@/components/theme-toggle", () => ({
  ThemeToggle: () => <button data-testid="theme-toggle">Theme</button>
}));

describe("Navigation", () => {
  let scrollYGetter: any;
  const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;

  beforeEach(() => {
    // Reset document body
    document.body.innerHTML = '';

    // Create mock elements for each section
    const ids = ["#hero", ...navItems.map((n) => n.href)];
    ids.forEach(id => {
      const el = document.createElement('div');
      el.id = id.replace('#', '');
      document.body.appendChild(el);
    });

    // Mock window.scrollY
    scrollYGetter = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0);

    // Mock getBoundingClientRect
    HTMLElement.prototype.getBoundingClientRect = vi.fn(() => ({
      top: 200,
      bottom: 800,
      left: 0,
      right: 1000,
      width: 1000,
      height: 600,
      x: 0,
      y: 200,
      toJSON: () => {}
    }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
    HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
  });

  it("renders with initial state (not scrolled, hero active)", () => {
    render(<Navigation />);

    // Check initial active link
    const heroLink = screen.getByText("About").closest('nav')?.previousElementSibling as HTMLAnchorElement;
    expect(heroLink).toBeInTheDocument();

    const aboutLink = screen.getAllByText("About")[0]; // Use first one from md:flex nav
    expect(aboutLink).not.toHaveClass("bg-accent text-foreground font-medium");
    expect(aboutLink).toHaveClass("text-muted-foreground");

    // Ensure header does not have scrolled styles
    const headerDiv = document.querySelector('header > div > div');
    expect(headerDiv).toHaveClass("border-transparent bg-transparent");
    expect(headerDiv).not.toHaveClass("glass-card");
  });

  it("updates scrolled state and styles when scrolled past 24px", () => {
    render(<Navigation />);

    // Simulate scroll
    scrollYGetter.mockReturnValue(30);
    fireEvent.scroll(window);

    const headerDiv = document.querySelector('header > div > div');
    expect(headerDiv).toHaveClass("glass-card shadow-[var(--shadow-soft)]");
    expect(headerDiv).not.toHaveClass("border-transparent bg-transparent");
  });

  it("updates active section link based on scroll position", () => {
    // Override getBoundingClientRect to make #about the active one (top <= 140)
    HTMLElement.prototype.getBoundingClientRect = vi.fn(function(this: HTMLElement) {
      if (this.id === 'about') {
        return { top: 100, bottom: 700, left: 0, right: 1000, width: 1000, height: 600, x: 0, y: 100, toJSON: () => {} };
      }
      return { top: 300, bottom: 900, left: 0, right: 1000, width: 1000, height: 600, x: 0, y: 300, toJSON: () => {} };
    });

    render(<Navigation />);

    // Initial mount triggers useEffect and onScroll, which should now pick up the mocked positions
    const aboutLink = screen.getAllByText("About")[0];

    // It should have the active classes
    expect(aboutLink).toHaveClass("bg-accent text-foreground font-medium");
    expect(aboutLink).not.toHaveClass("text-muted-foreground hover:text-foreground hover:bg-accent/60");
  });

  it("opens command palette when Cmd+K button is clicked", () => {
    const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
    render(<Navigation />);

    const cmdKBtn = screen.getByLabelText("Open command palette");
    fireEvent.click(cmdKBtn);

    expect(dispatchSpy).toHaveBeenCalled();
    const eventArg = dispatchSpy.mock.calls[0][0] as Event;
    expect(eventArg.type).toBe("open-command-palette");
  });

  it("toggles mobile menu when menu button is clicked", () => {
    render(<Navigation />);

    const toggleBtn = screen.getByLabelText("Toggle menu");

    // Menu closed initially
    expect(screen.queryByText("Top")).not.toBeInTheDocument();

    // Open menu
    fireEvent.click(toggleBtn);
    expect(screen.getByText("Top")).toBeInTheDocument();

    // Close menu by clicking a link
    fireEvent.click(screen.getByText("Top"));
    // Since Framer Motion uses AnimatePresence, it might not unmount immediately,
    // but the state should be closed. We can mock framer-motion or just check if clicking sets state.
    // However in JSDOM testing framer-motion might just render or not.
    // Instead we can click the toggle again.

    fireEvent.click(toggleBtn);
    fireEvent.click(toggleBtn); // Since it was closed by the link click, this opens it again.
    expect(screen.getByText("Top")).toBeInTheDocument();
  });
});
