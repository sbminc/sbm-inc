import HeroSection from "./components/hero-section"
import VisionSection from "./components/vision-section"
import ProgramsSection from "./components/programs-section"
import TestimonialsSection from "./components/testimonials-section"
import CTASection from "./components/cta-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <VisionSection />
      <ProgramsSection />
      
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

      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
