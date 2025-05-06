"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import AdinkraPattern from "./adinkra-pattern"
import AdinkraSymbol from "./adinkra-symbol"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Being part of SBM Inc. has completely changed my perspective on what I can achieve. The mentorship I've received has been invaluable.",
      name: "Jasmine T.",
      role: "Program Participant",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The leadership workshops helped my daughter gain confidence and develop skills that have made a real difference in her academic performance.",
      name: "Michelle K.",
      role: "Parent",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Volunteering with SBM Inc. has been one of the most rewarding experiences. Seeing the growth in these young women is truly inspiring.",
      name: "Tanya R.",
      role: "Volunteer Mentor",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section
      className="py-20 md:py-32 starry-bg text-white overflow-hidden relative"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          />
        ))}

        {/* Adinkra Pattern Background */}
        <AdinkraPattern color="white" baseOpacity={0.03} density="low" />

        {/* Shooting stars */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 30}%`,
              animationDelay: `${Math.random() * 15 + 5}s`,
              transform: `rotate(${Math.random() * 45 + 20}deg)`,
            }}
          />
        ))}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-burgundy/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Voices of <span className="text-gold">Impact</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from our community about the difference SBM Inc. is making in their lives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`glass-card p-8 md:p-10 rounded-2xl transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 absolute top-0 left-0 right-0 transform translate-y-8"
                }`}
              >
                <div className="mb-6">
                  <AdinkraSymbol name="akoma" size="lg" color="#e9b949" />
                </div>
                <p className="text-white text-xl md:text-2xl mb-8 italic leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-gold/50">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-gold w-8" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
