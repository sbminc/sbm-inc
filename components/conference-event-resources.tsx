import Image from "next/image"
import { Download, ExternalLink } from "lucide-react"
import ConferenceEvaluationForm from "@/components/conference-evaluation-form"

const documents = [
  {
    title: "Final Run of Show",
    description: "The complete conference-day timeline, from opening prayer through recognition and closing remarks.",
    href: "/events/2026-conference/SBM_Final_Decorated_Run_of_Show.pdf",
  },
  {
    title: "Workshop Rotation Breakdown",
    description: "Workshop groups, presenters, STEM blocks, lunch, wellness, and rotation times.",
    href: "/events/2026-conference/SBM_Workshop_Rotation_FINAL.pdf",
  },
] as const

export default function ConferenceEventResources({ audience }: { audience: string }) {
  return (
    <section className="mb-12 space-y-10" aria-labelledby="event-materials-heading">
      <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm md:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[792/1024] w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-xl">
            <Image
              src="/events/2026-conference/run-of-show-preview.png"
              alt="2026 Msichana Girls and Mvulana Boys Conference run of show"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-gold">Event-day information</p>
            <h2 id="event-materials-heading" className="mt-2 text-3xl font-bold text-white md:text-4xl">Schedule & Workshop Rotations</h2>
            <p className="mt-3 text-white/80">Official show-run materials for {audience}. View them online or download a copy for event day.</p>

            <div className="mt-7 grid gap-4">
              {documents.map((document) => (
                <article key={document.href} className="rounded-xl border border-white/15 bg-deep-blue/60 p-5">
                  <h3 className="text-xl font-bold text-white">{document.title}</h3>
                  <p className="mt-2 text-white/75">{document.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <a href={document.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-gold hover:underline">
                      View PDF <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <a href={document.href} download className="inline-flex items-center gap-2 font-semibold text-gold hover:underline">
                      Download <Download size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-5 text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-gold">For attendees after the event</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Share Your Feedback</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">Complete the evaluation online, or download the printable version below.</p>
          <a
            href="/events/2026-conference/2026_Msichana_Mvulana_Conference_Evaluation_Revised.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-gold hover:underline"
          >
            Printable evaluation <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
        <ConferenceEvaluationForm />
      </div>
    </section>
  )
}
