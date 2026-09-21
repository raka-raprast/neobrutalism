import { useGSAP } from "@gsap/react"
import { ArrowDown } from "@phosphor-icons/react"
import gsap from "gsap"
import { useRef } from "react"
import { Button } from "@/components/ui/Button"

const palette = [
  { name: "Ink", hex: "#111110", swatch: "bg-ink" },
  { name: "Electric", hex: "#2F4DFF", swatch: "bg-electric" },
  { name: "Acid", hex: "#D6FF3F", swatch: "bg-acid" },
  { name: "Pink", hex: "#FF4FA3", swatch: "bg-pink" },
]

const tilt = ["sm:-rotate-2", "sm:rotate-1", "sm:-rotate-1", "sm:rotate-2"]

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
            .from(".hero-sub", { autoAlpha: 0, y: 16 }, "-=0.25")
            .from(".hero-cta > *", { autoAlpha: 0, y: 14, stagger: 0.06 }, "-=0.3")
            .from(".hero-swatch", { autoAlpha: 0, y: 18, stagger: 0.06, duration: 0.4 }, "-=0.25")

          return () => tl.kill()
        },
      )

      return () => mm.revert()
    },
    { scope: rootRef },
  )

  return (
    <section id="top" ref={rootRef} className="relative bg-paper pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h1 className="font-display text-[13vw] font-extrabold uppercase leading-[0.94] sm:text-7xl lg:text-[6rem]">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line block">
              <span className="inline-block -rotate-1 rounded-[6px] border-[3px] border-line bg-ink px-4 py-1 text-paper shadow-brutal-lg">
                A system
              </span>
            </span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line block">
              <span className="inline-block rotate-1 rounded-[6px] border-[3px] border-line bg-acid px-4 py-1 text-ink shadow-brutal-lg">
                that refuses
              </span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">to blend in.</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="hero-sub max-w-[42ch] text-lg text-ink/80 sm:text-xl">
              SLAB is a proof-of-concept exploring neobrutalist design &mdash; grounded in real reference
              research, shipped as a working build, honest about what&rsquo;s generated and what isn&rsquo;t.
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-6">
              <Button as="a" href="#work" variant="electric">
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

          <div className="flex items-end gap-3">
            {palette.map((color, index) => (
              <div key={color.name} className={`hero-swatch flex flex-col items-center gap-2 ${tilt[index]}`}>
                <div
                  aria-hidden="true"
                  className={`h-12 w-12 rounded-[6px] border-[3px] border-line shadow-brutal-sm sm:h-16 sm:w-16 ${color.swatch}`}
                />
                <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wide text-ink/60">
                  {color.hex}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
