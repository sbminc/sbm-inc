"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const programs = [
  {
    title: "Mental Wellness",
    description: "Our mental wellness program focuses on emotional well-being, stress management, and building resilience. Through workshops, group discussions, and one-on-one sessions, participants learn coping strategies and develop a strong foundation for mental health.",
    image: "/images/programs/mental-wellness.jpg",
    link: "/programs/mental-wellness",
    icon: "🧠"
  },
  {
    title: "Financial Literacy",
    description: "Empowering young women with financial knowledge and skills. Our financial literacy program covers budgeting, saving, investing, and understanding credit. Participants learn practical money management skills that will benefit them throughout their lives.",
    image: "/images/programs/financial-literacy.jpg",
    link: "/programs/financial-literacy",
    icon: "💰"
  },
  {
    title: "College Preparation",
    description: "Preparing for higher education is a key focus of our program. We provide guidance on college applications, scholarship opportunities, test preparation, and campus life. Our goal is to ensure every participant has the tools and confidence to pursue their educational dreams.",
    image: "/images/programs/college-prep.jpg",
    link: "/programs/college-prep",
    icon: "🎓"
  },
  {
    title: "Healthy Living",
    description: "Promoting physical health and well-being through nutrition education, fitness activities, and healthy lifestyle choices. Our healthy living program emphasizes the importance of balanced nutrition, regular exercise, and positive body image.",
    image: "/images/programs/healthy-living.jpg",
    link: "/programs/healthy-living",
    icon: "🥗"
  }
]

export default function ProgramsPage() {
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
              Our <span className="shimmer-text">Programs</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Comprehensive programs designed to empower BIPOC girls in Volusia County through education, mentorship, and personal development.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="glass-card-dark p-8 rounded-2xl hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{program.icon}</div>
                  <h2 className="text-2xl font-bold">{program.title}</h2>
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  {program.description}
                </p>
                <Link 
                  href={program.link}
                  className="inline-flex items-center text-gold hover:text-orange transition-colors duration-300 group"
                >
                  Learn More
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Join Our Programs</h2>
              <p className="text-lg text-white/80 mb-8">
                Ready to take the next step? Join our programs and become part of a supportive community dedicated to your growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/events"
                  className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    View Upcoming Events
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
                  href="/contact"
                  className="glass-card text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/40 group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Us
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
    </div>
  )
} 