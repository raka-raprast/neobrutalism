import { useGSAP } from "@gsap/react"
import { ArrowDown } from "@phosphor-icons/react"
import gsap from "gsap"
import { useRef } from "react"
import { Button } from "@/components/ui/Button"

/** Scalloped stamp-badge outline: a coin/seal edge, not a plain circle. */
function scallopedPath(cx: number, cy: number, r: number, bumps: number, depth: number) {
  const points: string[] = []
  const steps = bumps * 2
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2
    const radius = i % 2 === 0 ? r : r - depth
    const x = cx + radius * Math.cos(angle)
    const y = cy + radius * Math.sin(angle)
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
  }
  return `${points.join(" ")}Z`
}

const stampPath = scallopedPath(70, 70, 62, 20, 6)

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        { reduce: "(prefers-reduced-motion: reduce)", full: "(prefers-reduced-motion: no-preference)" },
        (context) => {
          const { reduce } = context.conditions as { reduce: boolean }
          if (reduce) return

          const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.55 } })

          tl.from(".hero-line", { yPercent: 110, stagger: 0.1 })
            .from(".hero-doodle", { autoAlpha: 0, scale: 0.5, duration: 0.4, ease: "back.out(1.9)" }, "-=0.5")
            .from(".hero-stamp", { autoAlpha: 0, scale: 0.4, rotate: -30, duration: 0.55, ease: "back.out(1.7)" }, "-=0.35")
            .from(".hero-cloud", { autoAlpha: 0, scale: 0.7, stagger: 0.1, duration: 0.6 }, "-=0.5")
            .from(".hero-sub", { autoAlpha: 0, y: 16 }, "-=0.3")
            .from(".hero-cta > *", { autoAlpha: 0, y: 14, stagger: 0.06 }, "-=0.3")

          return () => tl.kill()
        },
      )

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section id="top" ref={rootRef} className="relative overflow-hidden bg-acid pt-32 pb-24 text-ink sm:pt-40 sm:pb-32">
      {/* Paper-grain texture, matching the grunge full-bleed panels in the reference set */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] mix-blend-multiply" aria-hidden="true">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Cloud-cluster accents, bleeding off two corners like GT Maru's scattered clouds */}
      <svg className="hero-cloud pointer-events-none absolute -left-10 -top-8 h-24 w-32 sm:-left-16 sm:-top-10 sm:h-40 sm:w-52 lg:h-52 lg:w-64" viewBox="0 0 200 140" aria-hidden="true">
        <g fill="white" stroke="#111110" strokeWidth="4">
          <circle cx="60" cy="80" r="42" />
          <circle cx="110" cy="60" r="34" />
          <circle cx="145" cy="85" r="30" />
          <circle cx="80" cy="100" r="30" />
        </g>
      </svg>
      <svg className="hero-cloud pointer-events-none absolute -bottom-10 -right-8 h-24 w-32 sm:-bottom-16 sm:-right-10 sm:h-40 sm:w-52 lg:h-52 lg:w-64" viewBox="0 0 200 140" aria-hidden="true">
        <g fill="var(--color-pink)" stroke="#111110" strokeWidth="4">
          <circle cx="60" cy="80" r="42" />
          <circle cx="110" cy="60" r="34" />
          <circle cx="145" cy="85" r="30" />
          <circle cx="80" cy="100" r="30" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex items-start gap-4 sm:gap-6">
          {/* Hand-drawn double smiley, echoing the scribble faces beside oversized wordmarks */}
          <svg
            className="hero-doodle mt-1 h-11 w-16 shrink-0 sm:mt-2 sm:h-20 sm:w-28"
            viewBox="0 0 140 100"
            aria-hidden="true"
          >
            <g transform="rotate(-4 52 52)">
              <circle cx="52" cy="52" r="38" fill="var(--color-paper)" stroke="#111110" strokeWidth="4" />
              <circle cx="27" cy="61" r="6" fill="var(--color-pink)" stroke="#111110" strokeWidth="2.5" />
              <circle cx="76" cy="58" r="6" fill="var(--color-pink)" stroke="#111110" strokeWidth="2.5" />
              <circle cx="30" cy="42" r="4" fill="#111110" />
              <circle cx="70" cy="40" r="4" fill="#111110" />
              <path d="M32 66c8 8 30 8 38 -2" fill="none" stroke="#111110" strokeWidth="4" strokeLinecap="round" />
            </g>
            <g transform="rotate(6 98 34)">
              <circle cx="98" cy="34" r="30" fill="var(--color-paper)" stroke="#111110" strokeWidth="4" />
              <circle cx="87" cy="41" r="5" fill="var(--color-pink)" stroke="#111110" strokeWidth="2.5" />
              <circle cx="112" cy="39" r="5" fill="var(--color-pink)" stroke="#111110" strokeWidth="2.5" />
              <circle cx="88" cy="26" r="3.5" fill="#111110" />
              <circle cx="110" cy="26" r="3.5" fill="#111110" />
              <path d="M90 44c6 -4 18 -4 22 0" fill="none" stroke="#111110" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>

          <h1 className="font-display text-[clamp(3.5rem,9.5vw,9.75rem)] font-extrabold uppercase leading-[0.9]">
            <span className="block overflow-hidden pb-1">
              <span className="hero-line block">
                <span className="inline-block rotate-1 rounded-[6px] border-[3px] border-line bg-electric px-4 py-1 text-white shadow-brutal-lg">
                  A system
                </span>
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line block">
                <span className="inline-block -rotate-1 rounded-[6px] border-[3px] border-line bg-ink px-4 py-1 text-acid shadow-brutal-lg">
                  that refuses
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">to blend in.</span>
            </span>
          </h1>
        </div>

        <div className="relative mt-10 flex flex-wrap items-end justify-between gap-10">
          <div>
            <p className="hero-sub max-w-[42ch] text-lg text-ink/80 sm:text-xl">
              SLAB is a proof-of-concept exploring neobrutalist design &mdash; grounded in real reference
              research, shipped as a working build, honest about what&rsquo;s generated and what isn&rsquo;t.
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-6">
              <Button as="a" href="#work" variant="pink">
                See the gallery
              </Button>
              <a
                href="#process"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-ink/70 underline decoration-2 underline-offset-4 hover:text-ink"
              >
                Read the process
                <ArrowDown size={14} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Scalloped stamp badge, echoing the torn-edge seal used for event/date info */}
          <svg className="hero-stamp h-24 w-24 shrink-0 -rotate-6 sm:h-36 sm:w-36" viewBox="0 0 140 140" aria-hidden="true">
            <path d={stampPath} fill="var(--color-pink)" stroke="#111110" strokeWidth="4" strokeLinejoin="round" />
            <text
              x="70"
              y="58"
              textAnchor="middle"
              className="font-mono"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.5"
              fill="#111110"
            >
              PROOF OF
            </text>
            <text
              x="70"
              y="72"
              textAnchor="middle"
              className="font-mono"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.5"
              fill="#111110"
            >
              CONCEPT
            </text>
            <text x="70" y="94" textAnchor="middle" className="font-display" fontSize="18" fontWeight="800" fill="#111110">
              2026
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
