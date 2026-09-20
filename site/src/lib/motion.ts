import { useEffect, useState } from "react"

/**
 * Reads `prefers-reduced-motion` synchronously. Used inside GSAP setup code
 * (matchMedia branches, ScrollTrigger.batch configs) to shorten or skip
 * entrance animations for users who asked the OS to reduce motion. The
 * global CSS reset in index.css separately neutralizes pure-CSS
 * transitions/animations (e.g. the marquee), which GSAP's inline-style
 * tweens bypass.
 */
export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/** React-reactive version for components that branch render output on it. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(prefersReducedMotion)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener("change", listener)
    return () => query.removeEventListener("change", listener)
  }, [])

  return reduced
}
