import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProgramsHero from "@/components/programs-hero"
import ProgramsList from "@/components/programs-list"
import ProgramsImpact from "@/components/programs-impact"
import CTASection from "@/components/cta-section"
import SectionDivider from "@/components/section-divider"

export default function ProgramsPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <ProgramsHero />
      <SectionDivider symbol="sankofa" />
      <ProgramsList />
      <SectionDivider symbol="adinkrahene" />
      <ProgramsImpact />
      <SectionDivider symbol="akoma" />
      <CTASection />
      <Footer />
    </main>
  )
}
