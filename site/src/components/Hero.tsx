import { useGSAP } from "@gsap/react"
import { ArrowDown } from "@phosphor-icons/react"
import gsap from "gsap"
import { useRef } from "react"
import { Button } from "@/components/ui/Button"
import { Mascot } from "@/components/ui/Mascot"

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const armRef = useRef<SVGGElement>(null)

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
            .from(".hero-ribbon", { autoAlpha: 0, scale: 0.5, rotate: 10, duration: 0.5, ease: "back.out(1.8)" }, "-=0.5")
            .from(".hero-sub", { autoAlpha: 0, y: 16 }, "-=0.25")
            .from(".hero-cta > *", { autoAlpha: 0, y: 14, stagger: 0.06 }, "-=0.3")
            .from(
              ".hero-mascot",
              { autoAlpha: 0, scale: 0.6, rotate: 14, duration: 0.6, ease: "back.out(1.6)" },
              "-=0.35",
            )

          if (armRef.current) {
            tl.to(armRef.current, { rotate: 18, duration: 0.35, ease: "sine.inOut", yoyo: true, repeat: 3 }, "-=0.1")
          }

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
      className="relative overflow-hidden bg-pink pb-32 pt-32 text-ink sm:pb-40 sm:pt-40"
    >
      <div
        aria-hidden="true"
        className="pattern-dots pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-[0.18] sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-[13vw] font-extrabold uppercase leading-[0.92] sm:text-7xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <span className="hero-line block">A system</span>
            </span>
            <span className="hero-ribbon my-2 inline-block -rotate-2 rounded-[6px] border-[3px] border-line bg-acid px-4 py-1 text-ink shadow-brutal-lg sm:my-3">
              that refuses
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">to blend in.</span>
            </span>
          </h1>

          <p className="hero-sub mt-8 max-w-[42ch] text-lg text-ink/80 sm:text-xl">
            SLAB is a proof-of-concept exploring neobrutalist design &mdash; grounded in real reference
            research, shipped as a working build, honest about what&rsquo;s generated and what isn&rsquo;t.
          </p>

          <div className="hero-cta mt-10 flex flex-col items-start gap-4">
            <Button as="a" href="#work" variant="ink">
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
      </div>

      <Mascot
        ref={armRef}
        accent="electric"
        outline="var(--color-ink)"
        className="hero-mascot pointer-events-none absolute -bottom-8 right-2 w-36 sm:-bottom-10 sm:right-10 sm:w-52 lg:-right-6 lg:bottom-auto lg:top-1/2 lg:w-[400px] lg:-translate-y-[42%] xl:-right-10 xl:w-[460px]"
      />
    </section>
  )
}
