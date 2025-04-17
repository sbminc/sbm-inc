"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

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
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-orange/30 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-tr from-deep-blue/20 to-midnight-blue/20 rounded-full"></div>
              <div
                ref={logoRef}
                className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
              >
                <div className="relative w-4/5 h-4/5 glow">
                  <Image src="/logo.png" alt="SBM Inc. Logo" fill className="object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-gold/20 to-orange/20 rounded-full blur-xl"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
                OUR <span className="shimmer-text">VISION</span>
              </h2>
            </div>

            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              To educate, empower, and inspire BIPOC girls from the ages of 11-18 years old in Volusia County through mentorship, education, and community engagement.
            </p>

            <div className="space-y-6">
              <div className="glass-card-dark p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-orange flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Education</h3>
                    <p className="text-white/80">
                      Providing academic support, college preparation, and career guidance to help girls achieve their educational goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-orange flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Empowerment</h3>
                    <p className="text-white/80">
                      Building confidence, leadership skills, and self-esteem through mentorship and positive role models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card-dark p-6 rounded-xl text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold to-orange flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Community</h3>
                    <p className="text-white/80">
                      Creating a supportive network that fosters growth, achievement, and lasting connections within our community.
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