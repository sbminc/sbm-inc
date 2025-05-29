import Image from "next/image"
import Link from "next/link"

export default function ProgramsList() {
  const programs = [
    {
      id: "mentorship",
      title: "Mentorship Program",
      description:
        "Our flagship program pairs BIPOC Youth with successful professionals who provide guidance, support, and advice. Mentors meet with their mentees regularly to help them navigate academic challenges, career exploration, and personal development.",
      features: [
        "One-on-one mentoring sessions",
        "Career exploration opportunities",
        "Academic guidance and support",
        "Personal development activities",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "leadership",
      title: "Leadership Workshop Series",
      description:
        "This series of interactive workshops focuses on developing essential leadership skills, including communication, public speaking, conflict resolution, and team building. Participants engage in hands-on activities and real-world scenarios.",
      features: [
        "Public speaking training",
        "Team-building exercises",
        "Conflict resolution strategies",
        "Community leadership projects",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "academic",
      title: "Academic Support Program",
      description:
        "We provide tutoring, study skills workshops, and educational resources to help BIPOC Youth excel in their studies. Our academic support program includes homework help, test preparation, and guidance on course selection and college applications.",
      features: [
        "After-school tutoring sessions",
        "Study skills workshops",
        "College application assistance",
        "Scholarship information and guidance",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "community",
      title: "Community Service Initiative",
      description:
        "Through our community service program, participants develop a sense of social responsibility while giving back to their community. Projects include environmental clean-ups, food drives, senior center visits, and other volunteer opportunities.",
      features: [
        "Monthly volunteer projects",
        "Community needs assessment",
        "Leadership roles in service projects",
        "Reflection and growth discussions",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-xl text-gray-700">
            Our programs are designed to provide comprehensive support for BIPOC Youth aged 11-18, addressing their
            educational, social, and personal development needs. Each program offers unique opportunities for growth and
            learning in a supportive environment.
          </p>
        </div>

        <div className="space-y-24">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-burgundy/20 to-gold/20 mix-blend-overlay"></div>
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-blue">{program.title}</h2>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-burgundy/10 flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-burgundy"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/programs/${program.id}`}
                  className="inline-flex items-center bg-gradient-to-r from-gold to-burgundy text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
