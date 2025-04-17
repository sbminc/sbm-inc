"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function MentalWellnessPage() {
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
              Mental <span className="shimmer-text">Wellness</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Building resilience and emotional well-being in our youth through comprehensive mental health support.
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
              Our mental wellness program focuses on emotional well-being, stress management, and building resilience. Through workshops, group discussions, and one-on-one sessions, participants learn coping strategies and develop a strong foundation for mental health.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Key Focus Areas</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Emotional Intelligence Development
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stress Management Techniques
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Building Self-confidence
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Healthy Relationship Building
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
                    Enhanced Emotional Awareness
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improved Coping Skills
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Better Communication Skills
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stronger Support Network
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
                <h3 className="text-xl font-semibold mb-4 text-gold">Group Sessions</h3>
                <p className="text-white/80">
                  Interactive group discussions and activities focused on shared experiences and peer support.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">Workshops</h3>
                <p className="text-white/80">
                  Skill-building workshops on topics like stress management, mindfulness, and emotional regulation.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">One-on-One Support</h3>
                <p className="text-white/80">
                  Individual guidance sessions with trained mentors for personalized support and development.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-gold">Creative Expression</h3>
                <p className="text-white/80">
                  Art therapy and creative activities that promote emotional expression and healing.
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
            <h2 className="text-2xl font-semibold mb-6">Join Our Program</h2>
            <p className="text-white/80 mb-8">
              Take the first step towards better mental wellness. Join our program and become part of a supportive community.
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