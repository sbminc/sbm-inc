import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LeadersHero from "@/components/leaders-hero"
import LeadersList from "@/components/leaders-list"
import CTASection from "@/components/cta-section"
import SectionDivider from "@/components/section-divider"

export default function LeadersPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <LeadersHero />
      <SectionDivider symbol="adinkrahene" />
      <LeadersList />
      <SectionDivider symbol="akoma" />
      <CTASection />
      <Footer />
    </main>
  )
}
