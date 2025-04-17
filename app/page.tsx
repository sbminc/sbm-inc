import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import VisionSection from "@/components/vision-section"
import ProgramsSection from "@/components/programs-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
