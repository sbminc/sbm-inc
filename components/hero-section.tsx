"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import AdinkraPattern from "./adinkra-pattern"

function getRandomShootingStar() {
  return {
    id: Math.random().toString(36).substr(2, 9),
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 90}%`,
    animationDelay: '0s',
    animationDuration: `${Math.random() * 5 + 3}s`,
    transform: `rotate(${Math.random() * 45 + 20}deg)`
  }
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: string; duration: string; delay: string; color: string; opacity: number }>>([])
  const [shootingStars, setShootingStars] = useState<any[]>([])
  const shootingStarCount = useRef(0)

  useEffect(() => {
    setMounted(true)
    // Only generate random stars on the client
    const starColors = ["#fff", "#bcdfff", "#ffe9b3"];
    const newStars = Array.from({ length: 140 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.5 + 0.7}px`,
      duration: `${Math.random() * 5 + 3}s`,
      delay: `${Math.random()}s`,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      opacity: Math.random() * 0.7 + 0.3,
    }))
    setStars(newStars)
  }, [])

  useEffect(() => {
    if (!mounted) return;
    let interval: NodeJS.Timeout
    function addShootingStar() {
      if (shootingStarCount.current >= 8) return
      setShootingStars((prev) => {
        if (prev.length >= 4) return prev
        shootingStarCount.current += 1
        return [...prev, getRandomShootingStar()]
      })
    }
    interval = setInterval(() => {
      addShootingStar()
    }, Math.random() * 1500 + 1200)
    return () => clearInterval(interval)
  }, [mounted])

  function handleShootingStarEnd(id: string) {
    setShootingStars((prev) => prev.filter((star) => star.id !== id))
  }

  useEffect(() => {
    if (!mounted) return;
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
  }, [mounted])

  if (!mounted) {
    // Static fallback for SSR: no random stars or shooting stars
    return (
      <div
        ref={heroRef}
        className="relative starry-bg min-h-screen flex items-center justify-center py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="block mb-2" style={{ color: '#C8102E' }}>SACRIFICING,</span>
              <span className="block mb-2" style={{ color: '#C8102E' }}>BELIEVING,</span>
              <span className="block" style={{ color: '#C8102E' }}>MANIFESTING</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Empowering BIPOC Youth to reach their full potential through education, mentorship, and community support.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={heroRef}
      className="relative starry-bg min-h-screen flex items-center justify-center py-32 md:py-40 overflow-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: star.color,
            opacity: star.opacity,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
            transform: star.transform,
          }}
          onAnimationEnd={() => handleShootingStarEnd(star.id)}
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block mb-2 text-gold">SACRIFICING,</span>
            <span className="block mb-2 text-gold">BELIEVING,</span>
            <span className="block text-gold">MANIFESTING</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Empowering BIPOC Youth to reach their full potential through education, mentorship, and community support.
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
              className="glass-card text-white border border-burgundy/30 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-burgundy/60 group"
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
