import Image from "next/image"
import Link from "next/link"

export default function HighlightsPage() {
  const highlights = [
    {
      title: "2023 Msichana Conference",
      date: "November 18, 2023",
      description: "Our annual conference brought together BIPOC girls from across Volusia County for a day of empowerment and learning.",
      image: "/highlight 1.jpg"
    },
    {
      title: "Community Engagement Workshop",
      date: "September 2023",
      description: "Engaging with our community through interactive workshops and meaningful discussions.",
      image: "/highlight 2.jpg"
    },
    {
      title: "Leadership Development Session",
      date: "July 2023",
      description: "Building leadership skills and confidence through mentorship and practical exercises.",
      image: "/highlight 3.jpg"
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Highlights</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600 mb-4">{highlight.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">{highlight.date}</span>
                <Link
                  href="#"
                  className="text-rose-500 hover:text-rose-600"
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
