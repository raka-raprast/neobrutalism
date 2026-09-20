import { forwardRef } from "react"

const fills = {
  electric: "var(--color-electric)",
  acid: "var(--color-acid)",
  pink: "var(--color-pink)",
}

interface MascotProps {
  accent?: keyof typeof fills
  /** Outline + face color \u2014 pass a light color when placing on a dark section. */
  outline?: string
  className?: string
}

/**
 * SLAB's hand-drawn mark: a sentient concrete block, echoing the studio name.
 * Deliberately geometric (not a stock "friendly AI blob face") and built as
 * plain SVG paths so it stays crisp at any size and the arm group can be
 * targeted directly by GSAP for the CTA-section wave.
 */
export const Mascot = forwardRef<SVGGElement, MascotProps>(function Mascot(
  { accent = "acid", outline = "var(--color-ink)", className = "" },
  armRef,
) {
  return (
    <svg viewBox="0 0 200 220" className={className} role="img" aria-label="The SLAB mascot, a friendly concrete block">
      <rect x="14" y="12" width="16" height="52" rx="4" fill={fills[accent]} stroke={outline} strokeWidth="4" transform="rotate(-8 22 38)" />
      <rect x="170" y="18" width="16" height="52" rx="4" fill={fills[accent]} stroke={outline} strokeWidth="4" transform="rotate(10 178 44)" />

      <g ref={armRef} style={{ transformOrigin: "150px 96px" }}>
        <rect x="140" y="88" width="52" height="16" rx="6" fill={fills[accent]} stroke={outline} strokeWidth="4" transform="rotate(-18 150 96)" />
      </g>

      <rect x="34" y="60" width="132" height="118" rx="18" fill={fills[accent]} stroke={outline} strokeWidth="5" />

      <circle cx="76" cy="118" r="8" fill={outline} />
      <circle cx="124" cy="118" r="8" fill={outline} />
      <path d="M78 148c8 10 36 10 44 0" fill="none" stroke={outline} strokeWidth="5" strokeLinecap="round" />

      <rect x="58" y="172" width="20" height="30" rx="5" fill={outline} />
      <rect x="122" y="172" width="20" height="30" rx="5" fill={outline} />
    </svg>
  )
})
