"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CollegePreparationPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current) return
      const sections = pageRef.current.querySelectorAll('.scroll-fade-in')
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75
        
        if (isVisible) {
          section.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-deep-blue to-midnight-blue text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gold/10 to-orange/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              College <span className="shimmer-text">Preparation</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Guiding young women through the college admissions process and preparing them for academic success.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card-dark p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-6">Program Overview</h2>
            <p className="text-white/80 mb-6">
              Our college preparation program provides comprehensive support and guidance to help students navigate the college admissions process, develop strong academic skills, and prepare for the transition to higher education.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Key Focus Areas</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    College Application Process
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SAT/ACT Test Preparation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Essay Writing Skills
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Scholarship Research
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Program Benefits</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized Guidance
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Test-Taking Strategies
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Application Support
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Financial Aid Assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Program Activities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">College Workshops</h3>
                <p className="text-white/80">
                  Interactive sessions on college selection, application strategies, and financial aid opportunities.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">Test Prep Sessions</h3>
                <p className="text-white/80">
                  Structured SAT/ACT preparation including practice tests, review sessions, and study strategies.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">Essay Writing</h3>
                <p className="text-white/80">
                  Guidance on crafting compelling personal statements and supplemental essays for college applications.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">College Tours</h3>
                <p className="text-white/80">
                  Virtual and in-person campus visits to help students make informed college choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card-dark p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-semibold mb-6">Begin Your College Journey</h2>
            <p className="text-white/80 mb-8">
              Get the support you need to navigate the college admissions process and prepare for academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-block"
              >
                Contact Us
              </Link>
              <Link
                href="/events"
                className="glass-card text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/40 inline-block"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 