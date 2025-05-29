import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import VisionSection from "@/components/vision-section"
import ProgramsSection from "@/components/programs-section"
import CommunitySection from "@/components/community-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"
// import HomeSlideshow from '@/components/home-slideshow'
import EventsSlideshow from '@/components/events-slideshow'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <SectionDivider symbol="sankofa" />
      <VisionSection />
      <SectionDivider symbol="nyansapo" />
      <ProgramsSection />
      <SectionDivider symbol="bi-nka-bi" />
      <CommunitySection />
      <SectionDivider symbol="akoma" />
      <TestimonialsSection />
      <SectionDivider symbol="aya" />
      {/* <HomeSlideshow /> */}
      <EventsSlideshow />
      <CTASection />
      <Footer />
    </main>
  )
}
