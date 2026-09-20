import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroSection } from './hero-section';
import React from 'react';

// Mock framer-motion to avoid animation issues in jsdom
vi.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef(({ children, ...props }: any, ref: any) => <div ref={ref} {...props}>{children}</div>),
      span: React.forwardRef(({ children, ...props }: any, ref: any) => <span ref={ref} {...props}>{children}</span>),
    },
    useReducedMotion: () => false,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => ({ get: () => 0 }),
  };
});

// Mock ResizeObserver which is needed by lucide-react or framer-motion potentially
window.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('HeroSection', () => {
  const originalClipboard = navigator.clipboard;
  const originalLocation = window.location;

  beforeEach(() => {
    // Reset location mock
    // @ts-ignore
    delete window.location;
    window.location = { ...originalLocation, href: '' };

    // Reset clipboard mock
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(),
      },
    });
  });

  afterEach(() => {
    window.location = originalLocation;
    Object.assign(navigator, { clipboard: originalClipboard });
  });

  it('renders correctly', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Building interfaces/i)).toBeInTheDocument();
  });

  it('copies email to clipboard on success', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValueOnce(undefined);
    render(<HeroSection />);

    const copyButton = screen.getByText('atameshwari9@gmail.com');
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('atameshwari9@gmail.com');

    // Wait for the text to change to 'copied!'
    expect(await screen.findByText('copied!')).toBeInTheDocument();
  });

  it('falls back to mailto on clipboard failure', async () => {
    (navigator.clipboard.writeText as any).mockRejectedValueOnce(new Error('Clipboard error'));
    render(<HeroSection />);

    const copyButton = screen.getByText('atameshwari9@gmail.com');
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('atameshwari9@gmail.com');

    // Wait for the rejection to be handled
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(window.location.href).toBe('mailto:atameshwari9@gmail.com');
  });
});
