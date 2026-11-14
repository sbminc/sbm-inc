import Image from "next/image"
import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import ConferenceEvaluationForm from "@/components/conference-evaluation-form"

const schedule = [
  ["9:45 AM", "Welcome & Opening Prayer"],
  ["10:00-10:25 AM", "Documentary Montage"],
  ["10:25 AM-12:00 PM", "Boys Workshops / Girls STEM"],
  ["12:00-12:30 PM", "Lunch & Etiquette Session"],
  ["12:30-1:00 PM", "Spartan Dolls Performance"],
  ["1:00-2:30 PM", "Girls Workshops / Boys STEM"],
  ["2:30-3:00 PM", "Nutrition, Wellness & Evaluations"],
  ["3:00-3:05 PM", "Restroom Break / Transition"],
  ["3:05-4:00 PM", "Connecting the Lessons: Building Barriers and Shaping Our Futures"],
  ["4:00-4:15 PM", "Black History Moment"],
  ["4:15-4:30 PM", "Recognition, Rewards & Closing Remarks"],
] as const

const documents = [
  {
    title: "Final Run of Show",
    description: "The complete conference-day timeline from welcome through closing remarks.",
    href: "/events/2026-conference/SBM_Final_Decorated_Run_of_Show.pdf",
  },
  {
    title: "Workshop Rotation Breakdown",
    description: "Group assignments, workshop presenters, STEM blocks, and rotation times.",
    href: "/events/2026-conference/SBM_Workshop_Rotation_FINAL.pdf",
  },
  {
    title: "Printable Participant Evaluation",
    description: "A paper version of the attendee feedback form for on-site use.",
    href: "/events/2026-conference/2026_Msichana_Mvulana_Conference_Evaluation_Revised.pdf",
  },
] as const

export default function ConferenceDetailsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28">
        <section className="container mx-auto px-4 py-12 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-burgundy">Upcoming Event</p>
                <h1 className="text-4xl font-bold leading-tight text-deep-blue md:text-6xl">2026 Msichana Girls & Mvulana Boys Conference</h1>
                <p className="mt-5 text-xl text-gray-700">Saturday, November 14, 2026 · 9:45 AM-4:30 PM</p>
                <p className="mt-2 text-gray-600">Campbell Middle School · 625 S. Keech Street, Daytona Beach, FL 32114</p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                  A full day of STEM, financial literacy, civic involvement, mental health, conflict resolution, nutrition, wellness, performance, and reflection for young people and their families.
                </p>
                <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 font-medium text-deep-blue">Parents Café: 10:00 AM-4:00 PM · Food provided</p>
              </div>
              <div className="relative aspect-[792/1024] overflow-hidden rounded-2xl border border-gold/30 bg-white shadow-2xl">
                <Image src="/events/2026-conference/run-of-show-preview.png" alt="2026 conference final run of show" fill priority className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deep-blue py-16 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold md:text-4xl">Conference Schedule</h2>
              <div className="mt-8 divide-y divide-white/15 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                {schedule.map(([time, item]) => (
                  <div key={time} className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr] sm:gap-5">
                    <time className="font-bold text-gold">{time}</time>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-deep-blue md:text-4xl">Event Documents</h2>
            <p className="mt-3 text-gray-600">Open or download the official conference materials.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {documents.map((document) => (
                <article key={document.href} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                  <h3 className="text-xl font-bold text-deep-blue">{document.title}</h3>
                  <p className="mt-3 flex-1 text-gray-600">{document.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={document.href} target="_blank" className="inline-flex items-center gap-2 font-semibold text-burgundy hover:underline">
                      View <ExternalLink size={16} aria-hidden="true" />
                    </Link>
                    <a href={document.href} download className="inline-flex items-center gap-2 font-semibold text-burgundy hover:underline">
                      Download <Download size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="evaluation" className="bg-slate-100 py-16 scroll-mt-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <ConferenceEvaluationForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
