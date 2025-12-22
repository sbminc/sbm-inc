import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EventsHero from "@/components/events-hero"
import EventsList from "@/components/events-list"
import EventsCalendar from "@/components/events-calendar"
import CTASection from "@/components/cta-section"
import SectionDivider from "@/components/section-divider"
import PastEvents from '@/components/past-events'

export default function EventsPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <EventsHero />
      <SectionDivider symbol="sankofa" />
      <EventsList />
      <SectionDivider symbol="adinkrahene" />
      <EventsCalendar />
      <PastEvents />
      <SectionDivider symbol="akoma" />
      <CTASection />
      <Footer />
    </main>
  )
}
