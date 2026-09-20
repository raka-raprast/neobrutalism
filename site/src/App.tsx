import { CardOverflow } from "@/components/CardOverflow"
import { Colophon } from "@/components/Colophon"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Materials } from "@/components/Materials"
import { Nav } from "@/components/Nav"
import { Process } from "@/components/Process"
import { References } from "@/components/References"
import { Services } from "@/components/Services"
import { StudioStats } from "@/components/StudioStats"
import { SectionDivider } from "@/components/ui/SectionDivider"
import { Work } from "@/components/Work"

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-[8px] border-[3px] border-line bg-acid px-4 py-2 font-mono text-sm font-bold focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[100]"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <SectionDivider />
        <Materials />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <StudioStats />
        <SectionDivider />
        <Work />
        <SectionDivider />
        <CardOverflow />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <References />
        <SectionDivider />
        <Colophon />
        <SectionDivider />
      </main>

      <Footer />
    </>
  )
}
