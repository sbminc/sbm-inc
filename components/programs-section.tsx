"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import AdinkraSymbol from "./adinkra-symbol"

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
      title: "Academic Support",
      description: "Tutoring and educational resources to help BIPOC Youth excel in their studies.",
      symbol: "nea-onnim-no-sua-a-ohu" as const,
      slug: "academic",
    },
    {
      title: "Mentorship Program",
      description: "One-on-one guidance from successful professionals who provide support and advice.",
      symbol: "mate-masie" as const,
      slug: "mentorship",
    },
    {
      title: "Community Service",
      description: "Opportunities to give back to the community and develop a sense of social responsibility.",
      symbol: "bi-nka-bi" as const,
      slug: "community",
    },
    {
      title: "Leadership Workshop",
      description: "Interactive sessions focused on developing essential leadership and communication skills.",
      symbol: "adinkrahene" as const,
      slug: "leadership",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-burgundy/5 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">
            Our <span className="text-gold">Programs</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We offer various programs designed to support the growth and development of BIPOC Youth in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card-dark p-8 rounded-xl text-white shadow-xl opacity-0 transform translate-y-10 transition-all duration-700 relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 opacity-5 transform -rotate-12 translate-x-4 -translate-y-4">
                <AdinkraSymbol name={program.symbol} size="xl" color="white" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <AdinkraSymbol name={program.symbol} size="sm" color="#e9b949" className="mr-3" withTooltip />
                  <h3 className="text-2xl font-semibold">{program.title}</h3>
                </div>
                <p className="text-white/80 mb-6">{program.description}</p>
                <Link
                  href={`/programs/${program.slug}`}
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
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/programs"
            className="bg-gradient-to-r from-burgundy to-burgundy-light text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect inline-block"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
