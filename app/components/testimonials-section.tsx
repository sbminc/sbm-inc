"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

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
    <section className="py-24 bg-deep-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Voices of <span className="shimmer-text">Impact</span>
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
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20 absolute inset-0"
                }`}
              >
                <div className="glass-card-dark p-8 md:p-12 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <blockquote className="text-xl md:text-2xl text-white mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-gold">{testimonial.name}</div>
                        <div className="text-white/60">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-gold" : "bg-white/20"
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