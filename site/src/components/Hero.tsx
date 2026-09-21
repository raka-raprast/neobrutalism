import { useGSAP } from "@gsap/react"
import { ArrowDown } from "@phosphor-icons/react"
import gsap from "gsap"
import { useRef } from "react"
import heroStampImage from "@/assets/hero/hero-stamp.webp"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

const previewCards = [
  { label: "Brand", tone: "Identity", rotate: "-rotate-6", accent: "bg-electric text-white", position: "left-2 top-6 sm:left-6" },
  { label: "Web", tone: "Build", rotate: "rotate-3", accent: "bg-pink text-ink", position: "right-0 top-0 sm:right-4" },
  { label: "Motion", tone: "Interaction", rotate: "rotate-8", accent: "bg-acid text-ink", position: "left-10 bottom-0 sm:left-20" },
  { label: "Packaging", tone: "Physical", rotate: "-rotate-2", accent: "bg-white text-ink", position: "right-6 bottom-10 sm:right-12" },
]

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


          const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: reduce ? 0 : 0.55 } })

          tl.from(".hero-line", { yPercent: 110, stagger: reduce ? 0 : 0.07 })
            .from(".hero-sub", { autoAlpha: 0, y: 16 }, "-=0.35")
            .from(
              ".hero-badge",
              { autoAlpha: 0, scale: 0.6, rotate: -24, duration: reduce ? 0 : 0.45, ease: "back.out(1.8)" },
              "-=0.25",
            )
            .from(
              ".hero-stamp",
              { autoAlpha: 0, scale: 0.5, rotate: -60, duration: reduce ? 0 : 0.6, ease: "back.out(1.6)" },
              "-=0.3",
            )
            .from(
              ".hero-card",
              { autoAlpha: 0, y: 24, stagger: reduce ? 0 : 0.05, duration: reduce ? 0 : 0.4 },
              "<",
            )

          if (!reduce) {
            gsap.to(".hero-card", {
              yPercent: -14,
              ease: "none",
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            })
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

        <div className="relative mx-auto h-[320px] w-full max-w-[420px] lg:h-[380px]">
          <img
            src={heroStampImage}
            alt=""
            aria-hidden="true"
            className="hero-stamp pointer-events-none absolute -left-32 top-0 hidden w-40 -rotate-12 lg:block xl:-left-36 xl:w-48"
          />
          <Badge accent="pink" rotate="rotate-6" className="hero-badge absolute -top-6 right-2 z-20 sm:right-8">
            &#9733; Proof of Concept &mdash; 2026
          </Badge>

          {previewCards.map((card) => (
            <div
              key={card.label}
              className={`hero-card absolute ${card.position} ${card.rotate} w-36 rounded-card border-[3px] border-line p-4 shadow-brutal sm:w-40 ${card.accent}`}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-wide">{card.tone}</p>
              <p className="mt-3 font-display text-xl font-extrabold uppercase">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
