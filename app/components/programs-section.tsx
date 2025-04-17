"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is in view
      if (top < windowHeight * 0.75) {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, index * 150)
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const programs = [
    {
      title: "Mental Wellness",
      description: "Building emotional resilience and self-awareness through counseling and group sessions.",
      icon: "🧠",
      image: "/mental-wellness.svg",
      link: "/programs#mental-wellness"
    },
    {
      title: "Financial Literacy",
      description: "Teaching essential money management skills and entrepreneurship principles.",
      icon: "💰",
      image: "/financial-literacy.svg",
      link: "/programs#financial-literacy"
    },
    {
      title: "College Preparation",
      description: "Guiding students through college applications and career planning.",
      icon: "🎓",
      image: "/college-prep.svg",
      link: "/programs#college-prep"
    },
    {
      title: "Healthy Living",
      description: "Promoting nutrition education and physical wellness activities.",
      icon: "🌱",
      image: "/healthy-living.svg",
      link: "/programs#healthy-living"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-light-gray to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">
            Our <span className="shimmer-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive programs designed to empower and support BIPOC girls in their journey to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card-dark p-8 rounded-xl text-white shadow-xl opacity-0 transform translate-y-10 transition-all duration-700 group hover:shadow-2xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-4xl bg-gradient-to-r from-gold to-orange rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  {program.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{program.title}</h3>
              <p className="text-white/80 mb-6">{program.description}</p>
              <Link
                href={program.link}
                className="inline-flex items-center text-gold hover:text-orange font-medium group"
              >
                Learn more
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/programs"
            className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-block group"
          >
            <span className="relative z-10 flex items-center justify-center">
              View All Programs
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
    </section>
  )
} 