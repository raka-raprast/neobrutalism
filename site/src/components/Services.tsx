import { useGSAP } from "@gsap/react"
import { Browser, Camera, Package, PaintBucket, PlayCircle, TextAa } from "@phosphor-icons/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { services } from "@/data/content"
import { prefersReducedMotion } from "@/lib/motion"

const icons = {
  PaintBucket,
  Browser,
  PlayCircle,
  Camera,
  Package,
  TextAa,
}

const accentShadow = {
  electric: "hover:shadow-brutal-electric",
  acid: "hover:shadow-brutal-acid",
  pink: "hover:shadow-brutal-pink",
}

const accentChip = {
  electric: "bg-electric text-white",
  acid: "bg-acid text-ink",
  pink: "bg-pink text-ink",
}

const tilt = ["", "sm:rotate-[0.6deg]", "sm:-rotate-[0.5deg]", "sm:rotate-[0.4deg]", "sm:-rotate-[0.6deg]", "sm:rotate-[0.5deg]"]

export function Services() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = prefersReducedMotion()
      const cards = gsap.utils.toArray<HTMLElement>(".service-card")

      ScrollTrigger.batch(cards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: reduced ? 0 : 0.08,
            duration: reduced ? 0 : 0.6,
            ease: "power2.out",
          }),
      })
    },
    { scope: rootRef },
  )

  return (
    <section id="services" ref={rootRef} className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase sm:text-6xl">
          Six things this build actually does.
        </h2>

        <div className="mt-14 grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            const featured = i === 0

            return (
              <article
                key={service.title}
                className={`service-card invisible rounded-card border-[3px] border-line p-7 opacity-0 shadow-brutal-sm transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:rotate-0 ${tilt[i % tilt.length]} ${
                  featured
                    ? "flex flex-col justify-between bg-ink text-paper sm:col-span-2 lg:row-span-2 hover:shadow-brutal-acid"
                    : `bg-white ${accentShadow[service.accent]}`
                }`}
                style={{ transform: "translateY(24px)" }}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-[10px] border-[3px] border-line ${accentChip[service.accent]} ${featured ? "h-14 w-14" : ""}`}
                >
                  <Icon size={featured ? 28 : 24} weight="bold" aria-hidden="true" />
                </span>
                <div className={featured ? "mt-10" : "mt-6"}>
                  <h3 className={`font-display font-extrabold uppercase ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-3 ${featured ? "max-w-md text-base text-paper/80" : "text-[0.98rem] text-ink/75"}`}>
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
