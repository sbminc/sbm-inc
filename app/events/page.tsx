"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
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
              Our <span className="shimmer-text">Events</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Join us for transformative events that empower BIPOC youth in Volusia County.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="glass-card-dark p-8 rounded-2xl text-center">
              <div className="relative h-48 mb-6">
                <Image
                  src="/IMG_3163.jpg"
                  alt="SBM Inc. Logo and Upcoming Events"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-white/80">
                Stay connected with our community through our upcoming events and conferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* MVULANA Young Men's Conference */}
            <div className="glass-card-dark rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-midnight-blue to-deep-blue"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">MVULANA Young Men's Conference</h3>
                <p className="text-white/80 mb-4">
                  A special conference dedicated to empowering young men in our community.
                </p>
                <div className="glass-card p-4 rounded-lg border border-white/10">
                  <p className="text-white/70 italic">More details coming soon...</p>
                </div>
              </div>
            </div>

            {/* MSICHANA Young Women's Conference */}
            <div className="glass-card-dark rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gold via-orange to-gold"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">MSICHANA Young Women's Conference</h3>
                <p className="text-white/80 mb-4">
                  Join us for our annual conference empowering young women in our community.
                </p>
                <div className="glass-card p-4 rounded-lg border border-white/10">
                  <p className="text-white/70 italic">More details coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Conference Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="glass-card-dark rounded-2xl overflow-hidden max-w-6xl mx-auto">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-orange to-deep-blue"></div>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6">The Big Day: Msichana Conference 2024</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Event Details</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <span className="font-semibold mr-2 text-gold">Date:</span>
                      Saturday, November 16, 2024
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold mr-2 text-gold">Time:</span>
                      10 AM - 3 PM
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold mr-2 text-gold">Location:</span>
                      Yvonne Scarlet Golden Center
                    </li>
                    <li className="flex items-center">
                      <span className="font-semibold mr-2 text-gold">Address:</span>
                      1000 Vine St, Daytona Beach, FL 32117
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gold">Registration</h3>
                  <p className="text-white/80 mb-6">
                    Join us for this transformative event dedicated to empowering BIPOC girls in our community.
                  </p>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkeEsqEWdF8CiZvzmBH8va9mQjYyTLPPSRhTUDVNIi1sg-MA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect inline-block group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Register Now
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
        </div>
      </section>

      {/* Event Information */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card-dark p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">About Our Conference</h2>
            <p className="text-white/80 mb-6">
              This event started in 2022 as the brain child of Dr. Sadie McConner, who was inspired by the documentary "PUSH OUT: Criminalization of Black Girls" written by Monique Morris.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gold">Conference Materials</h3>
              <div className="space-y-4">
                <p className="text-white/80">
                  All conference materials will be provided at the event. Participants should bring:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>Notebook and pen</li>
                  <li>Positive attitude</li>
                  <li>Questions for our speakers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* MSICHANA Young Women's Conference 2022 */}
            <div className="glass-card-dark rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/events/msichana-2022.jpg"
                  alt="MSICHANA Young Women's Conference 2022"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">MSICHANA Young Women's Conference 2022</h3>
                <p className="text-white/80 mb-4">
                  Our inaugural conference at the Yvonne Scarlett Golden Center, October 22, 2022.
                </p>
                <Link 
                  href="/about#msichana-presentation" 
                  className="inline-block bg-gradient-to-r from-gold to-orange text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20"
                >
                  View Presentation
                </Link>
              </div>
            </div>

            {/* Placeholder for future past events */}
            <div className="glass-card-dark rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-orange/10 transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-midnight-blue to-deep-blue"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">More Events Coming Soon</h3>
                <p className="text-white/80 mb-4">
                  Stay tuned for more exciting events and conferences.
                </p>
                <div className="glass-card p-4 rounded-lg border border-white/10">
                  <p className="text-white/70 italic">Check back regularly for updates...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}