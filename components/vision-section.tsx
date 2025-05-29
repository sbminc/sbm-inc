"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import AdinkraSymbol from "./adinkra-symbol"

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !logoRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the section is through the viewport
      const scrollProgress = 1 - top / (windowHeight - height / 2)

      // Apply rotation based on scroll position
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        logoRef.current.style.transform = `rotate(${scrollProgress * 10}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-burgundy/30 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-tr from-deep-blue/20 to-midnight-blue/20 rounded-full"></div>
              <div
                ref={logoRef}
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
              >
                <div className="relative w-4/5 h-4/5 glow">
                  <Image src="/SBM-Logo-4.png" alt="SBM Inc. Logo" fill className="object-contain drop-shadow-2xl" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <AdinkraSymbol name="sankofa" size="xl" color="#e9b949" opacity={0.7} withTooltip />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-gold/20 to-orange/20 rounded-full blur-xl"></div>
              <div className="flex items-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
                  THE <span className="text-gold">VISION</span>
                </h2>
                <AdinkraSymbol name="sankofa" size="md" color="#e9b949" className="ml-4 mb-8" withTooltip />
              </div>
            </div>

            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              To educate, empower, and inspire BIPOC Youth from the ages of 11-18 years old in Volusia County.
            </p>

            <div className="space-y-6">
              <div className="glass-card-dark p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-5 transform rotate-12 translate-x-4 -translate-y-4">
                  <AdinkraSymbol name="nyansapo" size="xl" color="white" />
                </div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-orange flex items-center justify-center flex-shrink-0 shadow-lg">
                    <AdinkraSymbol name="nea-onnim-no-sua-a-ohu" size="xs" color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Education</h3>
                    <p className="text-white/80">
                      Providing resources and opportunities for academic excellence and personal growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-5 transform rotate-12 translate-x-4 -translate-y-4">
                  <AdinkraSymbol name="nyansapo" size="xl" color="white" />
                </div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-burgundy to-burgundy-light flex items-center justify-center flex-shrink-0 shadow-lg">
                    <AdinkraSymbol name="adinkrahene" size="xs" color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Empowerment</h3>
                    <p className="text-white/80">
                      Building confidence and leadership skills through mentorship and guidance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-5 transform rotate-12 translate-x-4 -translate-y-4">
                  <AdinkraSymbol name="nyansapo" size="xl" color="white" />
                </div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-orange flex items-center justify-center flex-shrink-0 shadow-lg">
                    <AdinkraSymbol name="bi-nka-bi" size="xs" color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Inspiration</h3>
                    <p className="text-white/80">
                      Creating a supportive community that fosters growth, achievement, and self-belief.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
