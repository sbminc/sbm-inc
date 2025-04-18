"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Slideshow from "../components/Slideshow"
import { Presentation } from "../components/Presentation"

// Presentation slides with actual content from MSICHANA Conference presentation
const presentationSlides = [
  {
    title: "MSICHANA Conference",
    content: "October 22, 2022 - Yvonne Scarlett Golden Center",
    image: "/images/slides/slide1.jpg"  // The coral/pink logo slide
  },
  {
    title: "The Vision",
    content: "To educate, empower and inspire BIPOC girls from the ages of 11-18 years old in Volusia.",
    image: "/images/slides/slide2.jpg"  // The eye icon slide
  },
  {
    title: "The Influence behind The Vision",
    content: "Inspired by the documentary 'PUSH OUT: Criminalization of Black Girls'",
    video: {
      url: "https://youtu.be/nWPayvrHkEM",
      thumbnail: "/images/slides/slide3.jpg"  // The classroom image
    }
  },
  {
    title: "Black is",
    content: "A member of a dark-skinned people, especially one of African or Australian Aboriginal ancestry.",
    image: "/images/slides/slide4.jpg"  // The black background with white text
  },
  {
    title: "Sarah Breedlove",
    content: "She was a multi-millionaire oil baron at just 12 years old. And as a black woman especially, the story of Sarah Rector is almost completely unbelievable.",
    image: "/images/slides/slide5.jpg"  // Historical photos and text
  },
  {
    title: "Civil Rights Leaders",
    content: "'If I fall, I'll fall five feet four inches forward in the fight for freedom. I'm not backing off.' - Fannie Lou Hamer | Ruby Bridges was the first African American child to attend an all-white public elementary school in the American South in 1960.",
    image: "/images/slides/slide6.jpg"  // Fannie Lou Hamer and Ruby Bridges
  },
  {
    title: "Indigenous is",
    content: "People who belong to the country in which they are found, rather than coming there or being brought there from another country.",
    image: "/images/slides/slide7.jpg"  // Gray background with definition
  },
  {
    title: "Indigenous Leaders",
    content: "Susan La Flesche: First female Native American to earn a medical degree (1889). Wilma Mankiller: First female principal chief of the Cherokee Nation (1985).",
    image: "/images/slides/slide8.jpg"  // Photos of Susan and Wilma
  },
  {
    title: "BIPOC Leaders in STEM and Politics",
    content: "Mary Golda Ross: Aerospace Engineer, Educator, and Advocate | Autumn Peltier: Chief Water Commissioner for the Aniiishnabek Nation at age 15.",
    image: "/images/slides/slide9.jpg"  // Photos of Mary and Autumn
  },
  {
    title: "POC (People of Color)",
    content: "Is any person not considered 'white'.",
    image: "/images/slides/slide10.jpg"  // Yellow background with definition
  },
  {
    title: "Global BIPOC Leaders",
    content: "Malala Yousafzai: Nobel Peace Prize laureate | Kamala Harris: First female, first African American, and first Asian American vice president.",
    image: "/images/slides/slide11.jpg"  // Photos of Malala and Kamala
  },
  {
    title: "Pioneering Leaders",
    content: "Indra Nooyi: First Asian Pacific American female CEO of PepsiCo | Clara Campoamor: Spanish women's rights advocate and suffrage champion.",
    image: "/images/slides/slide12.jpg"  // Photos of Indra and Clara
  },
  {
    title: "Female youth BIPOC leaders",
    content: "Are capable and eager to serve.",
    image: "/images/slides/slide13.jpg"  // Red background with text
  },
  {
    title: "Young Activists",
    content: "Deja Foxx: Healthcare advocate | Mari Copeny: Fighting the Flint Water Crisis",
    image: "/images/slides/slide14.jpg"  // Photos of young activists
  },
  {
    title: "Youth Making Change",
    content: "Emma Gonzalez: Gun violence prevention | Marley Dias: #1000BlackGirlBooks founder",
    image: "/images/slides/slide15.jpg"  // Photos of Emma and Marley
  },
  {
    title: "Young Changemakers",
    content: "Khloe Thompson: Founder of Khloe Kares | Aija Mayrock: Author of 'The Survival Guide to Bullying'",
    image: "/images/slides/slide16.jpg"  // Photos of Khloe and Aija
  },
  {
    title: "Will you be the next BIPOC Leader?",
    content: "",
    image: "/images/slides/slide17.jpg"  // Gold frame with question mark
  },
  {
    title: "Affirmation",
    content: "I am a black, mahogany, pecan tan, cocoa bean, chestnut brown, chocolate chip, caramel, milk chocolate girl with so many ordained gifts. I am innovative, intelligent, beautiful, and kind. I am mentally well, financially literate, college and career bound, nutritionally wise, a conflict resolver and a social advocate. Now watch me, watch me work, watch me grow, watch me flourish - by Dr. Sadie B. McConner",
    image: "/images/slides/slide18.jpg"  // Pink background with affirmation
  }
]

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade-in')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight * 0.8
        if (isVisible) {
          element.classList.add('opacity-100', 'translate-y-0')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={aboutRef} className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stars.png"
            alt="Stars background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 shimmer-text">
            About Sisters Building Minds
          </h1>
          <p className="text-xl md:text-2xl text-purple-100/90">
            Empowering BIPOC girls in Volusia County through education and mentorship
          </p>
        </div>
      </section>

      {/* Organization Overview Presentation */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 shimmer-text">
            Organization Overview
          </h2>
          <div className="rounded-2xl overflow-hidden glass-card">
            <Presentation />
          </div>
        </div>
      </section>

      {/* MSICHANA Conference Presentation */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 shimmer-text">
            MSICHANA Young Women's Conference
          </h2>
          <p className="text-xl text-purple-100/80 text-center mb-8">
            Our presentation from the Young Women's Conference, showcasing our mission and vision for empowering BIPOC girls.
          </p>
          <Slideshow slides={presentationSlides} />
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

      {/* Presentation Section */}
      <section className="py-16 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">BIPOC Women's History Presentation</h2>
              <p className="text-lg text-white/80 mb-8 text-center">
                Explore our comprehensive presentation on BIPOC women's history and achievements. Learn about the remarkable stories that inspire our mission.
              </p>
              <div className="mb-8">
                <Slideshow slides={presentationSlides} autoPlayInterval={6000} />
              </div>
              <div className="text-center mt-12">
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