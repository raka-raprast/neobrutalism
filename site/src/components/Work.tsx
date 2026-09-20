import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { useRef, useState } from "react"
import { work, workCategories, type WorkCategory } from "@/data/content"
import { prefersReducedMotion } from "@/lib/motion"

type Filter = "All" | WorkCategory

export function Work() {
  const rootRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const flipState = useRef<Flip.FlipState | null>(null)
  const [active, setActive] = useState<Filter>("All")

  const filters: Filter[] = ["All", ...workCategories]
  const visible = active === "All" ? work : work.filter((item) => item.categories.includes(active))

  function selectFilter(filter: Filter) {
    if (filter === active) return
    const grid = gridRef.current
    // Lock the grid at its current (pre-filter) height before the DOM swaps cards.
    // Flip's `absolute: true` pulls every card out of flow for the animation, which
    // otherwise collapses this container to 0 and yanks everything below it up, then
    // back down when the cards return to flow \u2014 the flash the filter click showed.
    if (grid) gsap.set(grid, { height: grid.getBoundingClientRect().height })
    flipState.current = Flip.getState(".work-card")
    setActive(filter)
  }

  useGSAP(
    () => {
      if (!flipState.current) return
      const reduced = prefersReducedMotion()
      const grid = gridRef.current

      Flip.from(flipState.current, {
        duration: reduced ? 0 : 0.55,
        ease: "power3.inOut",
        stagger: reduced ? 0 : 0.04,
        absolute: true,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { autoAlpha: 0, scale: 0.85 },
            { autoAlpha: 1, scale: 1, duration: reduced ? 0 : 0.4, stagger: reduced ? 0 : 0.04 },
          ),
        onLeave: (elements) => gsap.to(elements, { autoAlpha: 0, scale: 0.85, duration: reduced ? 0 : 0.3 }),
        onComplete: () => {
          if (!grid) return
          const lockedHeight = grid.getBoundingClientRect().height
          gsap.set(grid, { height: "auto" })
          const naturalHeight = grid.getBoundingClientRect().height
          gsap.fromTo(
            grid,
            { height: lockedHeight },
            {
              height: naturalHeight,
              duration: reduced ? 0 : 0.4,
              ease: "power2.inOut",
              onComplete: () => gsap.set(grid, { height: "auto" }),
            },
          )
        },
      })

      flipState.current = null
    },
    { dependencies: [active], scope: rootRef },
  )

  return (
    <section id="work" ref={rootRef} className="bg-paper-dim py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="max-w-xl font-display text-4xl font-extrabold uppercase sm:text-6xl">
              Six quick studies. Zero beige.
            </h2>
          </div>

          <div role="group" aria-label="Filter work by category" className="flex flex-wrap gap-2.5">
            {filters.map((filter) => {
              const isActive = filter === active
              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectFilter(filter)}
                  className={`inline-flex min-h-11 cursor-pointer items-center rounded-pill border-[3px] border-line px-4 font-mono text-xs font-bold uppercase tracking-wide transition-colors duration-150 ${
                    isActive ? "bg-ink text-paper" : "bg-white text-ink hover:bg-paper-dim"
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>

        <div ref={gridRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.name}
              data-flip-id={item.name}
              className="work-card overflow-hidden rounded-card border-[3px] border-line bg-white shadow-brutal-sm"
            >
              <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-line">
                <img
                  src={item.image}
                  alt={`${item.name} \u2014 ${item.medium}`}
                  loading="lazy"
                  width="1200"
                  height="900"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold uppercase">{item.name}</h3>
                <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wide text-ink/50">
                  {item.medium}
                </p>
                <p className="mt-4 text-[0.95rem] text-ink/75">{item.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.categories.map((category) => (
                    <li
                      key={category}
                      className="rounded-pill border-2 border-line px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wide"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
