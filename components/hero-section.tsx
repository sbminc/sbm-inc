"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      const moveX = (x - 0.5) * 20
      const moveY = (y - 0.5) * 20

      heroRef.current.style.setProperty("--move-x", `${moveX}px`)
      heroRef.current.style.setProperty("--move-y", `${moveY}px`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={heroRef} className="relative bg-deep-blue py-32 md:py-40 overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gold/20 to-orange/20 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-deep-blue/30 to-midnight-blue/30 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Logo in background */}
      <div
        className="absolute opacity-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{ transform: "translate(calc(-50% + var(--move-x, 0px)), calc(-50% + var(--move-y, 0px)))" }}
      >
        <Image src="/logo.png" alt="SBM Inc. Logo Background" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            <span className="block mb-2 shimmer-text">SACRIFICING,</span>
            <span className="block mb-2 shimmer-text" style={{ animationDelay: "0.2s" }}>
              BELIEVING,
            </span>
            <span className="block shimmer-text" style={{ animationDelay: "0.4s" }}>
              MANIFESTING
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Empowering BIPOC girls to reach their full potential through education, mentorship, and community support.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/programs"
              className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Our Programs
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/donate"
              className="glass-card text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/40 group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Support Our Mission
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/70 text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}
