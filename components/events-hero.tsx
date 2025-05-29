"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function EventsHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: string; delay: string }>>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
    }))
    setStars(newStars)
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative starry-bg py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite ${star.delay}`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 15 + 5}s`,
            animationDuration: `${Math.random() * 5 + 3}s`,
            transform: `rotate(${Math.random() * 45 + 20}deg)`,
          }}
        />
      ))}

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gold/10 to-burgundy/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-deep-blue/20 to-burgundy/20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Logo in background */}
      <div
        className="absolute opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{ transform: "translate(calc(-50% + var(--move-x, 0px)), calc(-50% + var(--move-y, 0px)))" }}
      >
        <Image src="/SBM-Logo-4.png" alt="SBM Inc. Logo Background" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            <span className="block mb-2">Upcoming</span>
            <span className="block text-gold">Events</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
            Join us for inspiring gatherings, workshops, and celebrations.
          </p>
        </div>
      </div>
    </div>
  )
}
