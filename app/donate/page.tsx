"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function DonatePage() {
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
              Support Our <span className="shimmer-text">Mission</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Your donation helps us empower BIPOC girls in Volusia County through education, mentorship, and community programs.
            </p>
            <Link
              href="#donate-now"
              className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-block group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Donate Now
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

      {/* Impact Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Your Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card-dark p-8 rounded-2xl text-center">
                <div className="text-4xl text-gold mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-white/80">
                  Support workshops, conferences, and educational programs that empower our youth.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl text-center">
                <div className="text-4xl text-gold mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-4">Mentorship</h3>
                <p className="text-white/80">
                  Help us connect young women with mentors who can guide them toward success.
                </p>
              </div>
              <div className="glass-card-dark p-8 rounded-2xl text-center">
                <div className="text-4xl text-gold mb-4">💪</div>
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-white/80">
                  Build stronger communities through leadership development and support programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Become a Sponsor</h2>
            <p className="text-xl text-white/80 mb-12 text-center">Your donation will make a significant impact</p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pre-teen Girls Level */}
              <div className="glass-card-dark p-8 rounded-2xl hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gold mb-2">Empower Pre-teen Girls</h3>
                  <div className="text-3xl font-bold text-gold">$50-$99</div>
                  <p className="text-white/60 text-sm mt-2">Growth Level</p>
                </div>
                <ul className="space-y-3 text-white/80 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Information Table with Tablecloth
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition on participant handouts
                  </li>
                </ul>
                <Link
                  href="#donate-now"
                  className="w-full glass-card text-white border border-white/20 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-white/40 inline-flex items-center justify-center"
                >
                  Sponsor Pre-teen Level
                </Link>
              </div>

              {/* Teen Girls Level */}
              <div className="glass-card-dark p-8 rounded-2xl hover:shadow-lg hover:shadow-orange/10 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold to-orange px-4 py-1 rounded-full text-sm font-medium">
                    Popular Choice
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gold mb-2">Support Teen Girls</h3>
                  <div className="text-3xl font-bold text-gold">$100-$199</div>
                  <p className="text-white/60 text-sm mt-2">Maturity Level</p>
                </div>
                <ul className="space-y-3 text-white/80 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Information Table with Tablecloth
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition on participant handouts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition on media for the event
                  </li>
                </ul>
                <Link
                  href="#donate-now"
                  className="w-full bg-gradient-to-r from-gold to-orange text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-flex items-center justify-center"
                >
                  Sponsor Teen Level
                </Link>
              </div>

              {/* Adolescent Girls Level */}
              <div className="glass-card-dark p-8 rounded-2xl hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gold mb-2">Empower Adolescent Girls</h3>
                  <div className="text-3xl font-bold text-gold">$200+</div>
                  <p className="text-white/60 text-sm mt-2">Leadership Level</p>
                </div>
                <ul className="space-y-3 text-white/80 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Information Table with Tablecloth
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition on participant handouts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition on media for the event
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-gold mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition on media during the event
                  </li>
                </ul>
                <Link
                  href="#donate-now"
                  className="w-full glass-card text-white border border-white/20 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-white/40 inline-flex items-center justify-center"
                >
                  Sponsor Adolescent Level
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="donate-now" className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Ways to Give</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Monetary Donations */}
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gold">Monetary Donations</h3>
                <p className="text-white/80 mb-6">
                  Your financial support helps us continue our mission of empowering BIPOC girls in Volusia County.
                </p>
                <div className="space-y-4">
                  <Link
                    href="https://www.paypal.com/donate/?hosted_button_id=PAYPAL-ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gold to-orange text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-flex items-center"
                  >
                    Donate via PayPal
                  </Link>
                  <div className="glass-card p-4 rounded-lg border border-white/10 mt-4">
                    <p className="text-white/80 text-sm">
                      For other payment methods or to set up recurring donations, please contact us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* In-Kind Donations */}
              <div className="glass-card-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gold">In-Kind Donations</h3>
                <p className="text-white/80 mb-6">
                  We welcome donations of supplies and resources that support our programs:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
                  <li>School supplies</li>
                  <li>Books and educational materials</li>
                  <li>Technology equipment</li>
                  <li>Event supplies</li>
                </ul>
                <Link
                  href="/contact"
                  className="glass-card text-white border border-white/20 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-white/40 inline-flex items-center"
                >
                  Contact Us About In-Kind Donations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card-dark p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Tax Information</h2>
            <p className="text-white/80 mb-6">
              SBM Inc. is a registered 501(c)(3) nonprofit organization. Your donations are tax-deductible to the extent allowed by law.
            </p>
            <div className="glass-card p-4 rounded-lg border border-white/10">
              <p className="text-white/80">
                A receipt for your tax records will be provided for all donations. For any questions about tax deductions, please consult with your tax advisor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 