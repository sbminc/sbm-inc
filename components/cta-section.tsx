import Link from "next/link"
import AdinkraPattern from "./adinkra-pattern"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-gold/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-deep-blue/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-gradient-to-r from-deep-blue via-burgundy to-midnight-blue rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Shiny overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange/10 opacity-50"></div>

          {/* Adinkra Pattern Background */}
          <AdinkraPattern color="white" baseOpacity={0.03} density="low" />

          {/* Animated orbs */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-40 h-40 bg-burgundy/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Us in Making a <span className="shimmer-text">Difference</span>
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're interested in volunteering, donating, or participating in our programs, there are many ways
              to support our mission of empowering BIPOC Youth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/volunteer"
                className="bg-gradient-to-r from-gold to-orange text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange/20 shine-effect group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Become a Volunteer
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
                href="/donate"
                className="glass-card text-white border border-burgundy/30 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:border-burgundy/60 group"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
