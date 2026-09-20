import { marqueeItems } from "@/data/content"

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <div className="overflow-hidden bg-ink py-5">
      <p className="sr-only">Capabilities: {marqueeItems.join(", ")}.</p>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-6 pr-6">
            <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
              {item}
            </span>
            <span className="h-2.5 w-2.5 rotate-45 bg-acid" />
          </span>
        ))}
      </div>
    </div>
  )
}
