import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import TeamSection from "@/components/team-section"
import CTASection from "@/components/cta-section"
import SectionDivider from "@/components/section-divider"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <AboutHero />
      <SectionDivider symbol="sankofa" />
      <AboutContent />
      <SectionDivider symbol="adinkrahene" />
      <SectionDivider symbol="akoma" />
      <CTASection />
      <Footer />
    </main>
  )
}
