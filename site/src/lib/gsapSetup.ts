import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Registered once, at app entry, per the official GSAP + React integration guide.
gsap.registerPlugin(ScrollTrigger, Flip, useGSAP)

gsap.defaults({ duration: 0.6, ease: "power2.out" })
