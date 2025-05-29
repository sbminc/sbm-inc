"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import './star-twinkle.css';

export default function LeadersHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: string; duration: string; delay: string }>>([])

  useEffect(() => {
    // Generate random stars with fixed random duration and delay
    const newStars = Array.from({ length: 150 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 5 + 3}s`,
      delay: `${Math.random()}s`,
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
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: Math.random() * 0.8 + 0.2,
            animationDuration: star.duration,
            animationDelay: star.delay,
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
            transform: `rotate(${Math.random() * 45 + 20}deg)`,
          }}
        />
      ))}

      {/* Animated gradient orbs (replaced with star glow) */}
      <div className="absolute top-1/2 left-1/2 w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(255,215,0,0.3) 40%, rgba(255,215,0,0) 80%)",
          boxShadow: "0 0 120px 60px rgba(255,215,0,0.6), 0 0 240px 120px rgba(255,215,0,0.3)"
        }}
      />

      {/* Logo in background */}
      {/*
      <div
        className="absolute opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{ transform: "translate(calc(-50% + var(--move-x, 0px)), calc(-50% + var(--move-y, 0px)))" }}
      >
        <Image src="/SBM-Logo-4.png" alt="SBM Inc. Logo Background" fill className="object-contain" />
      </div>
      */}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            <span className="block mb-2">Our</span>
            <span className="block text-gold">Leaders</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
            Meet the dedicated team guiding our mission and vision.
          </p>
        </div>
      </div>
    </div>
  )
}
