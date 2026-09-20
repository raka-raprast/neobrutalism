import mockupAnalyticsImage from "@/assets/frame/mockup-analytics.webp"
import mockupMusicImage from "@/assets/frame/mockup-music.webp"
import courierImage from "@/assets/work/courier.webp"
import fermentCoImage from "@/assets/work/ferment-co.webp"
import gritGymImage from "@/assets/work/grit-gym.webp"
import heatwaveFestivalImage from "@/assets/work/heatwave-festival.webp"
import numb3rsImage from "@/assets/work/numb3rs.webp"
import rewindRecordsImage from "@/assets/work/rewind-records.webp"

export const nav = [
  { label: "Gallery", href: "#work" },
  { label: "Craft", href: "#craft" },
  { label: "Research", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
]

export type Accent = "electric" | "acid" | "pink"

export interface Service {
  title: string
  description: string
  icon: "PaintBucket" | "Browser" | "PlayCircle" | "Camera" | "Package" | "TextAa"
  accent: Accent
}

export const services: Service[] = [
  {
    title: "Identity System",
    description:
      "Two neutrals, three accents, one shadow logic \u2014 locked as tokens before a single component was built.",
    icon: "PaintBucket",
    accent: "electric",
  },
  {
    title: "Production Build",
    description: "Shipped as real React and Tailwind, not a Figma comp with a fake domain attached.",
    icon: "Browser",
    accent: "pink",
  },
  {
    title: "Motion With Reason",
    description:
      "GSAP-driven and reduced-motion aware. A scroll-drawn connector line got cut mid-build when it didn\u2019t earn its keep.",
    icon: "PlayCircle",
    accent: "acid",
  },
  {
    title: "Generated Art Direction",
    description:
      "Every product shot below was generated and art-directed to one visual language, not pulled from stock.",
    icon: "Camera",
    accent: "pink",
  },
  {
    title: "Print-Native Texture",
    description: "Halftone dots and hard offset shadows borrowed from print, used with restraint.",
    icon: "Package",
    accent: "electric",
  },
  {
    title: "A Real Display Face",
    description: "Bricolage Grotesque, chosen for the quirk in its terminals \u2014 not the nearest installed font.",
    icon: "TextAa",
    accent: "acid",
  },
]

export const stats = [
  { value: "7", label: "Images generated" },
  { value: "40", label: "Anti-patterns caught & fixed" },
  { value: "4", label: "Reference sites studied" },
  { value: "0", label: "Stock photos used" },
]

export type WorkCategory = "Brand" | "Web" | "Motion" | "Packaging"

export interface WorkItem {
  name: string
  medium: string
  categories: WorkCategory[]
  description: string
  image: string
}

export const workCategories: WorkCategory[] = ["Brand", "Web", "Motion", "Packaging"]

export const work: WorkItem[] = [
  {
    name: "Beverage Can",
    medium: "Product & packaging study",
    categories: ["Packaging", "Brand"],
    description: "Testing the hard-shadow, thick-outline system on a curved, reflective surface.",
    image: fermentCoImage,
  },
  {
    name: "Delivery App",
    medium: "Product UI study",
    categories: ["Web", "Motion"],
    description: "Same palette and shadow logic, applied to a mobile interface instead of a page.",
    image: courierImage,
  },
  {
    name: "Festival Wristband",
    medium: "Event & merch study",
    categories: ["Brand", "Motion"],
    description: "How far the sticker-collage language stretches at wristband scale.",
    image: heatwaveFestivalImage,
  },
  {
    name: "Invoice Dashboard",
    medium: "Product UI study",
    categories: ["Web", "Brand"],
    description: "A dashboard that still reads as neobrutalist instead of collapsing into enterprise beige.",
    image: numb3rsImage,
  },
  {
    name: "Kettlebell",
    medium: "Product study",
    categories: ["Packaging", "Brand"],
    description: "One glossy object, tested against the same flat-color, halftone-shadow treatment.",
    image: gritGymImage,
  },
  {
    name: "Vinyl Sleeve",
    medium: "Packaging study",
    categories: ["Brand", "Web"],
    description: "Halftone print texture applied to an object that\u2019s already meant to look printed.",
    image: rewindRecordsImage,
  },
]

export interface FrameStudy {
  title: string
  description: string
  image: string
  badge: string
  accent: Accent
}

export const frameStudies: FrameStudy[] = [
  {
    title: "Music Player",
    description:
      "A UI mockup breaking its own window chrome \u2014 tilted and shadowed to feel dropped onto the card, not embedded in it.",
    image: mockupMusicImage,
    badge: "\u2605 New Study",
    accent: "acid",
  },
  {
    title: "Analytics Card",
    description:
      "Dense data, still tilted and spilling past the card edge \u2014 testing whether the technique survives real content, not just a screenshot.",
    image: mockupAnalyticsImage,
    badge: "\u2605 Data Density",
    accent: "pink",
  },
]

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Research",
    description:
      "Read four live neobrutalist sites, pulled their color, type and shadow rules, and checked the result against a UX pattern library before writing any copy.",
  },
  {
    index: "02",
    title: "System",
    description:
      "Locked a two-neutral, three-accent palette and a display / body / mono type trio as CSS tokens before building a single section.",
  },
  {
    index: "03",
    title: "Build",
    description: "Shipped as production React 19, Tailwind CSS v4 and GSAP \u2014 ScrollTrigger and Flip included.",
  },
  {
    index: "04",
    title: "Verify",
    description:
      "Ran an automated anti-pattern detector, fixed every finding, and generated real imagery instead of leaving placeholder blocks.",
  },
]

export interface Reference {
  quote: string
  source: string
  url: string
  accent: Accent
}

export const references: Reference[] = [
  {
    quote:
      "Pairs playful, chunky type with real product photography \u2014 proof neobrutalism can carry a mass consumer brand, not just an indie flex.",
    source: "Feastables",
    url: "https://feastables.com",
    accent: "acid",
  },
  {
    quote:
      "Uses restraint: two accent colors, generous whitespace, one mascot. Proof the style doesn\u2019t need noise to read as bold.",
    source: "Gumroad",
    url: "https://gumroad.com",
    accent: "electric",
  },
  {
    quote:
      "Shows the style flexing into an editorial, type-foundry context \u2014 rounded, warm, still unmistakably neobrutalist.",
    source: "GT Maru",
    url: "https://gt-maru.com",
    accent: "pink",
  },
]

export const marqueeItems = [
  "Hard Shadows",
  "Halftone Print",
  "Flat Color Blocking",
  "Variable Type",
  "Scroll Choreography",
  "Sticker Collage",
]

export const footerLinks = {
  sitemap: nav,
  references: [
    { label: "Feastables", href: "https://feastables.com" },
    { label: "Gumroad", href: "https://gumroad.com" },
    { label: "GT Maru", href: "https://gt-maru.com" },
    { label: "Design Thinkers", href: "https://www.designthinkers.com/van" },
  ],
}
