import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeToggle } from './theme-toggle'
import { ThemeProvider } from './theme-provider'
import { vi } from 'vitest'

describe('ThemeToggle', () => {
  let originalStartViewTransition: any;
  let originalAnimate: any;

  beforeEach(() => {
    // Clear localStorage and document classes
    localStorage.clear()
    document.documentElement.className = ''

    originalStartViewTransition = document.startViewTransition
    originalAnimate = document.documentElement.animate
  })

  afterEach(() => {
    vi.restoreAllMocks()
    document.startViewTransition = originalStartViewTransition
    document.documentElement.animate = originalAnimate
  })

  it('toggles theme without view transition if not supported', async () => {
    // Ensure startViewTransition is undefined
    delete (document as any).startViewTransition

    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /toggle theme/i })

    // Initial state is light
    expect(document.documentElement.classList.contains('light')).toBe(true)

    // Click toggle
    fireEvent.click(button)

    // Should immediately change to dark
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })
  })

  it('toggles theme with view transition if supported', async () => {
    // Mock view transition
    let transitionCallback: () => void = () => {};
    const mockReady = Promise.resolve();
    const mockFinished = Promise.resolve();

    const mockStartViewTransition = vi.fn((cb) => {
      transitionCallback = cb;
      cb(); // immediately execute callback to trigger theme change
      return {
        ready: mockReady,
        finished: mockFinished
      };
    });

    document.startViewTransition = mockStartViewTransition as any;

    // Mock animate
    const mockAnimate = vi.fn();
    document.documentElement.animate = mockAnimate as any;

    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: /toggle theme/i })

    // Initial state is dark
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    // Click toggle
    fireEvent.click(button)

    expect(mockStartViewTransition).toHaveBeenCalled()
    expect(document.documentElement.classList.contains('theme-transition')).toBe(true)

    // Theme should be light now (changed by callback)
    await waitFor(() => {
      expect(document.documentElement.classList.contains('light')).toBe(true)
    })

    // Animate should be called when ready resolves
    await mockReady;
    expect(mockAnimate).toHaveBeenCalledWith(
      expect.objectContaining({ clipPath: expect.any(Array) }),
      expect.objectContaining({ duration: 500 })
    );

    // Class should be removed when finished resolves
    await mockFinished;
    // We need to wait for finally block to execute
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(document.documentElement.classList.contains('theme-transition')).toBe(false)
  })
})
