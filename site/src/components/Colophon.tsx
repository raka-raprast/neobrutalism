import { useGSAP } from "@gsap/react"
import { ArrowUp } from "@phosphor-icons/react"
import gsap from "gsap"
import { useRef } from "react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Mascot } from "@/components/ui/Mascot"
import { prefersReducedMotion } from "@/lib/motion"

export function Colophon() {
  const rootRef = useRef<HTMLDivElement>(null)
  const armRef = useRef<SVGGElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !armRef.current) return

      gsap.to(armRef.current, {
        rotate: 18,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "150px 96px",
      })
    },
    { scope: rootRef },
  )

  return (
    <section id="about" ref={rootRef} className="bg-ink py-24 text-paper sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <Badge accent="acid" rotate="-rotate-2">
            &#9733; Proof of Concept
          </Badge>
          <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
            This is research, not a pitch.
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg text-paper/80">
            SLAB tests whether neobrutalism holds up as a real, working system &mdash; grounded in the
            reference research above, built end-to-end in React, Tailwind and GSAP, with generated imagery
            standing in for photography this project doesn&rsquo;t have.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Button as="a" href="#work" variant="acid">
              Back to the gallery
              <ArrowUp size={18} weight="bold" className="-rotate-45" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <Mascot ref={armRef} accent="pink" outline="var(--color-paper)" className="mx-auto hidden w-56 sm:block" />
      </div>
    </section>
  )
}
