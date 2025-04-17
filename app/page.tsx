import HeroSection from "./components/hero-section"
import VisionSection from "./components/vision-section"
import ProgramsSection from "./components/programs-section"
import Link from "next/link"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <VisionSection />
      
      {/* Affirmation Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-dark p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">AFFIRMATION</h2>
            <div className="text-lg space-y-4 text-white/90">
              <p>
                I am a black, mahogany, pecan tan, cocoa bean, chestnut brown, chocolate chip, caramel, milk chocolate girl with so many ordained gifts.
              </p>
              <p>I am innovative, intelligent, beautiful, and kind</p>
              <p>I am mentally well, financially literate, college and career-bound, nutritionally wise,</p>
              <p>a conflict resolver</p>
              <p>and a social advocate.</p>
              <p className="font-semibold">Now watch me, watch me work, watch me grow, watch me flourish.</p>
              <p className="text-right italic">- Dr. Sadie McConner</p>
            </div>
          </div>
        </div>
      </section>

      <ProgramsSection />

      {/* Mission Section */}
      <section className="py-16 px-4 bg-deep-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
          <p className="text-lg mb-6">
            This event started 2022 as the brain child of Dr. Sadie McConner, who was inspired by the documentary "PUSH OUT: Criminalization of Black Girls" written by Monique Morris.
          </p>
          <p className="text-xl font-semibold gradient-text">
            Our future does not belong to us - Sacrifice, Believe, and Manifest for good.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-hero-pattern bg-cover bg-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Get Involved</h2>
          <div className="flex gap-4 justify-center">
            <Link
              href="/donations"
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
              className="glass-card text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-white/40 group"
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
      </section>
    </main>
  )
}
