import { useGSAP } from "@gsap/react"
import { ArrowUpRight, Quotes } from "@phosphor-icons/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { references } from "@/data/content"
import { prefersReducedMotion } from "@/lib/motion"

const rotations = ["-rotate-2", "rotate-1", "-rotate-1"]

const accentDot = {
  electric: "bg-electric",
  acid: "bg-acid",
  pink: "bg-pink",
}

export function References() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = prefersReducedMotion()
      const cards = gsap.utils.toArray<HTMLElement>(".reference-card")

      ScrollTrigger.batch(cards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: reduced ? 0 : 0.1,
            duration: reduced ? 0 : 0.6,
            ease: "back.out(1.4)",
          }),
      })
    },
    { scope: rootRef },
  )

  return (
    <section ref={rootRef} className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="max-w-xl font-display text-4xl font-extrabold uppercase sm:text-6xl">
          What the research actually shows.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {references.map((item, index) => (
            <figure
              key={item.source}
              className={`reference-card invisible rounded-card border-[3px] border-line bg-white p-7 opacity-0 shadow-brutal-sm ${rotations[index % rotations.length]}`}
              style={{ transform: "translateY(24px)" }}
            >
              <Quotes size={32} weight="fill" className="text-pink" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-xl font-bold leading-snug">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-ink/70 hover:text-ink"
                >
                  <span aria-hidden="true" className={`h-2.5 w-2.5 ${accentDot[item.accent]}`} />
                  {item.source}
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
