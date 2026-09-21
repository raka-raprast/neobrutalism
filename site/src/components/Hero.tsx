import { useGSAP } from "@gsap/react"
import { ArrowDown } from "@phosphor-icons/react"
import gsap from "gsap"
import { useRef } from "react"
import heroEvidenceImage from "@/assets/hero/hero-evidence.webp"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

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

          tl.from(".hero-line", { yPercent: 110, stagger: 0.07 })
            .from(".hero-sub", { autoAlpha: 0, y: 16 }, "-=0.35")
            .from(
              ".hero-badge",
              { autoAlpha: 0, scale: 0.6, rotate: -24, duration: 0.45, ease: "back.out(1.8)" },
              "-=0.25",
            )
            .from(
              ".hero-stamp",
              { autoAlpha: 0, scale: 0.55, rotate: 12, duration: 0.65, ease: "back.out(1.5)" },
              "-=0.3",
            )

          return () => tl.kill()
        },
      )

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative overflow-x-clip overflow-y-hidden bg-paper pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="pattern-dots pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-[0.12] sm:h-72 sm:w-72"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 bottom-6 h-24 w-24 rotate-12 border-[3px] border-line bg-acid/90 sm:h-32 sm:w-32"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <h1 className="font-display text-[13vw] font-extrabold uppercase leading-[0.92] sm:text-7xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <span className="hero-line block">A system</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block bg-acid px-1">that refuses</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">to blend in.</span>
            </span>
          </h1>

          <p className="hero-sub mt-8 max-w-[42ch] text-lg text-ink/80 sm:text-xl">
            SLAB is a proof-of-concept exploring neobrutalist design &mdash; grounded in real reference
            research, shipped as a working build, honest about what&rsquo;s generated and what isn&rsquo;t.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-5">
            <Button as="a" href="#work" variant="acid">
              See the gallery
            </Button>
            <a
              href="#process"
              className="inline-flex items-center gap-2 font-display text-base font-bold uppercase decoration-[3px] underline-offset-4 hover:underline"
            >
              Read the process
              <ArrowDown size={18} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-[440px] lg:h-[420px] lg:max-w-[480px]">
          <img
            src={heroEvidenceImage}
            alt="A rubber stamp mid-press over a halftone ink bloom, a torn color-swatch contact strip, a binder-clipped card, and a drafting compass — a scattered evidence board standing in for the study's reference research."
            loading="eager"
            width="1100"
            height="1100"
            className="hero-stamp absolute inset-0 h-full w-full rotate-2 object-contain"
          />
          <Badge accent="pink" rotate="rotate-6" className="hero-badge absolute -top-4 right-0 z-20 sm:right-4">
            &#9733; Proof of Concept &mdash; 2026
          </Badge>
        </div>
      </div>
    </section>
  )
}
