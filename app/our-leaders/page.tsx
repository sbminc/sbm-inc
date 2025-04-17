"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function OurLeadersPage() {
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

  const leaders = [
    {
      name: "Dr. Sadie McConner",
      role: "Founder & Executive Director",
      image: "/ms sadie.jpg",
      bio: "Dr. Sadie McConner is the visionary founder of SBM Inc., inspired by the documentary 'PUSH OUT: Criminalization of Black Girls' written by Monique Morris. With a passion for empowering BIPOC girls, she leads our mission to create positive change in Volusia County."
    },
    {
      name: "Ariel Brown",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Dedicated to youth development and community engagement."
    },
    {
      name: "Carolyn Gillis",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Bringing expertise in education and mentorship programs."
    },
    {
      name: "Courtney Davison",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Focused on program development and community outreach."
    },
    {
      name: "Danielle Griffin-Baker",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Specializing in youth empowerment and leadership training."
    },
    {
      name: "Dealie Luckett",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Committed to creating positive change in our community."
    },
    {
      name: "Dixie Morgese",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Bringing experience in community service and youth development."
    },
    {
      name: "Godzetta Whittington",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Dedicated to empowering young women through education."
    },
    {
      name: "Nicole Small",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Focused on mentorship and personal development."
    },
    {
      name: "Sharon Brown",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Committed to community building and youth advocacy."
    },
    {
      name: "Waynetha Neal Ferguson",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Bringing expertise in leadership development and community engagement."
    },
    {
      name: "Christine Robinson",
      role: "Leadership Team Member",
      image: "/placeholder-user.jpg",
      bio: "Dedicated to creating opportunities for youth success."
    }
  ];

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
              Our <span className="shimmer-text">Leaders</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Meet the dedicated team behind SBM Inc. who work tirelessly to empower BIPOC girls in Volusia County.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card-dark rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[400px]">
                <Image 
                  src={leaders[0].image}
                  alt={`${leaders[0].name} - ${leaders[0].role}`}
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">{leaders[0].name}</h2>
                <p className="text-gold font-medium mb-4">{leaders[0].role}</p>
                <p className="text-white/80 leading-relaxed">
                  {leaders[0].bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.slice(1).map((leader, index) => (
              <div 
                key={index} 
                className="glass-card-dark rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange/10"
              >
                <div className="relative h-64">
                  <Image 
                    src={leader.image}
                    alt={`${leader.name} - ${leader.role}`}
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-gold font-medium mb-4">{leader.role}</p>
                  <p className="text-white/80">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card-dark p-8 rounded-2xl">
              <p className="text-lg text-white/80">
                Our leaders bring diverse experiences and expertise to SBM Inc., united in their commitment to making a positive impact in our community through education, mentorship, and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
