"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import './star-twinkle.css';

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

export default function ProgramsHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<Array<{ top: string; left: string; size: string; duration: string; delay: string }>>([])
  const [shootingStars, setShootingStars] = useState<any[]>([])
  const shootingStarCount = useRef(0)

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 5 + 3}s`,
      delay: `${Math.random()}s`,
    }))
    setStars(newStars)
  }, [])

  useEffect(() => {
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
  }, [])

  function handleShootingStarEnd(id: string) {
    setShootingStars((prev) => prev.filter((star) => star.id !== id))
  }

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
      {/* Logo in background */}
      <div
        className="absolute opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{ transform: "translate(calc(-50% + var(--move-x, 0px)), calc(-50% + var(--move-y, 0px)))" }}
      >
        <Image src="/SBM-Logo-4.png" alt="SBM Inc. Logo Background" fill className="object-contain" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            <span className="block mb-2">Our</span>
            <span className="block text-gold">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
            Empowering the next generation through education, mentorship, and community.
          </p>
        </div>
      </div>
    </div>
  )
}
