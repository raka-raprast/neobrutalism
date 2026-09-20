import { useGSAP } from "@gsap/react"
import { ArrowUpRight } from "@phosphor-icons/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { Badge } from "@/components/ui/Badge"
import { frameStudies } from "@/data/content"
import { prefersReducedMotion } from "@/lib/motion"

const layouts = [
  { imagePos: "-top-10 -left-4 -rotate-6 sm:-top-12 sm:-left-8", badgePos: "-right-4 -top-4 rotate-6" },
  { imagePos: "-top-10 -right-4 rotate-6 sm:-top-12 sm:-right-8", badgePos: "-left-4 -top-4 -rotate-6" },
]

export function CardOverflow() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = prefersReducedMotion()
      const cards = gsap.utils.toArray<HTMLElement>(".overflow-card")

      ScrollTrigger.batch(cards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: reduced ? 0 : 0.12,
            duration: reduced ? 0 : 0.6,
            ease: "power2.out",
          }),
      })
    },
    { scope: rootRef },
  )

  return (
    <section id="craft" ref={rootRef} className="overflow-x-clip bg-paper py-24 sm:py-32 lg:overflow-visible">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase sm:text-6xl">
          Even the containers refuse to behave.
        </h2>
        <p className="mt-5 max-w-[60ch] text-lg text-ink/75">
          Gumroad breaks its own cards on purpose &mdash; screenshots and price tags spill past the rounded
          edge instead of sitting neatly inside it. Two studies testing the same idea against this
          system&rsquo;s sharper, harder-edged world.
        </p>

        <div className="mt-20 grid gap-20 sm:gap-16 lg:mt-24 lg:grid-cols-2 lg:gap-14">
          {frameStudies.map((item, index) => {
            const layout = layouts[index % layouts.length]
            return (
              <div key={item.title} className="overflow-card invisible relative opacity-0" style={{ transform: "translateY(28px)" }}>
                <div className="relative rounded-[28px] bg-ink p-8 pt-24 text-paper sm:p-10 sm:pt-36">
                  <h3 className="font-display text-2xl font-extrabold uppercase">{item.title}</h3>
                  <p className="mt-3 max-w-[38ch] text-[0.98rem] text-paper/75">{item.description}</p>
                </div>

                <img
                  src={item.image}
                  alt={`${item.title} mockup, escaping its card boundary`}
                  loading="lazy"
                  width="900"
                  height="675"
                  className={`absolute z-10 w-40 rounded-[18px] border-[3px] border-line shadow-brutal-lg sm:w-56 ${layout.imagePos}`}
                />

                <Badge accent={item.accent} rotate="" className={`absolute z-20 ${layout.badgePos}`}>
                  {item.badge}
                </Badge>
              </div>
            )
          })}
        </div>

        <a
          href="https://gumroad.com"
          target="_blank"
          rel="noreferrer"
          className="mt-16 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-ink/60 hover:text-ink"
        >
          See it on gumroad.com
          <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
