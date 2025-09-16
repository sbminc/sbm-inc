"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Slide = { url: string; alt: string }

export default function PresentationSlideshow() {
  const slides: Slide[] = [
    { url: "/images/speakers/Mvulana-Logo-1.PNG", alt: "Mvulana Logo" },
    { url: "/SBM-Logo-4.png", alt: "SBM Logo" },
    { url: "/images/speakers/bethune-cookman.png", alt: "Bethune-Cookman University" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8 bg-white/5">
      {slides.map((slide, index) => (
        <div
          key={slide.url}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={slide.url} alt={slide.alt} fill className="object-contain p-6" priority={index === 0} />
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-gold" : "bg-white/40"}`}></span>
        ))}
      </div>
    </div>
  )
}


