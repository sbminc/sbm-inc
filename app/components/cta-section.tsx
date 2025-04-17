import Link from "next/link"

export default function CTASection() {
  return (
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
  )
} 