import Image from "next/image"
import Link from "next/link"

export default function HighlightsPage() {
  const highlights = [
    {
      title: "2023 Msichana Conference",
      date: "November 18, 2023",
      description: "Our annual conference brought together BIPOC girls from across Volusia County for a day of empowerment, learning, and community building. The event featured workshops, guest speakers, and networking opportunities.",
      image: "/highlight-1.jpg"
    },
    {
      title: "Leadership Development Workshop",
      date: "September 2023",
      description: "A comprehensive workshop focused on building leadership skills, confidence, and communication abilities. Participants engaged in interactive sessions and practical exercises.",
      image: "/highlight-2.jpg"
    },
    {
      title: "College Preparation Session",
      date: "July 2023",
      description: "Specialized guidance for college-bound students, covering application processes, scholarship opportunities, and academic planning. Expert advisors provided personalized support.",
      image: "/highlight-3.jpg"
    },
    {
      title: "Community Service Day",
      date: "May 2023",
      description: "A day dedicated to giving back to the community through various service projects. Participants developed a sense of social responsibility and community engagement.",
      image: "/highlight-4.jpg"
    },
    {
      title: "Mentorship Program Launch",
      date: "March 2023",
      description: "The launch of our one-on-one mentorship program, connecting BIPOC girls with successful professionals for guidance and support in their personal and academic development.",
      image: "/highlight-5.jpg"
    },
    {
      title: "Youth Empowerment Summit",
      date: "January 2023",
      description: "A summit focused on empowering young women through education, self-advocacy, and community involvement. Featured workshops and panel discussions with industry leaders.",
      image: "/highlight-6.jpg"
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Highlights</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Explore our recent events and achievements in empowering BIPOC girls in Volusia County.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="glass-card-dark rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-48">
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-white/80 mb-4">{highlight.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold">{highlight.date}</span>
                <Link
                  href={`/events/${highlight.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gold hover:text-orange transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
