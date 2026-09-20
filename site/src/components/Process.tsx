import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { process } from "@/data/content"
import { prefersReducedMotion } from "@/lib/motion"

export function Process() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = prefersReducedMotion()
      const steps = gsap.utils.toArray<HTMLElement>(".process-step")

      steps.forEach((step) => {
        gsap.from(step, {
          autoAlpha: 0,
          y: 24,
          duration: reduced ? 0 : 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: step, start: "top 82%", toggleActions: "play none none reverse" },
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <section id="process" ref={rootRef} className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="max-w-xl font-display text-4xl font-extrabold uppercase sm:text-6xl">
          Four steps. All of them real.
        </h2>

        <ol className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          {process.map((step) => (
            <li key={step.index} className="process-step relative pl-16 lg:pl-0">
              <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-[10px] border-[3px] border-line bg-white font-mono text-lg font-bold shadow-brutal-sm lg:static lg:mb-6">
                {step.index}
              </span>
              <h3 className="font-display text-xl font-extrabold uppercase">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
