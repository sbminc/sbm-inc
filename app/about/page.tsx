"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              About <span className="shimmer-text">SBM Inc.</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Empowering BIPOC girls in Volusia County through education, mentorship, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-dark p-8 rounded-2xl mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                SBM Inc. was founded in 2022 by Dr. Sadie McConner, inspired by the documentary "PUSH OUT: Criminalization of Black Girls" by Monique Morris. Our mission is to create a supportive environment where BIPOC girls can thrive, learn, and grow into confident leaders.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Through our comprehensive programs and community engagement, we aim to address the unique challenges faced by BIPOC girls and provide them with the tools, resources, and support they need to succeed.
              </p>
            </div>

            <div className="glass-card-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <blockquote className="text-2xl italic text-gold mb-6">
                "Our future does not belong to us - Sacrifice, Believe, and Manifest for good."
              </blockquote>
              <p className="text-lg text-white/80 leading-relaxed">
                We envision a future where every BIPOC girl in Volusia County has access to quality education, mentorship, and opportunities to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MSICHANA Conference Presentation */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">MSICHANA Young Women's Conference</h2>
              <p className="text-lg text-white/80 mb-8 text-center">
                Explore our presentation from the MSICHANA Young Women's Conference, showcasing BIPOC women's history and achievements. Learn about the remarkable stories that inspire our mission.
              </p>
              <div className="relative aspect-video mb-8">
                <Image
                  src="/presentation/present-index_Page_01_Image_0001.jpg"
                  alt="MSICHANA Conference Presentation Cover"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="text-center">
                <Link 
                  href="https://docs.google.com/presentation/d/1lqnVmG84c09VgYn9FtwPheEoVrLSJa_4HQ2jwlF8lMc/edit?slide=id.p1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-block group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View Full Presentation
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
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-white/80 mb-8">
              Join us in making a difference in the lives of BIPOC girls in Volusia County. Your support helps create lasting change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/donate"
                className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Make a Donation
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
                href="/events"
                className="glass-card text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/40 group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Join Our Events
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
      </section>
    </div>
  )
} 