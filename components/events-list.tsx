"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function EventsList() {
  const [filter, setFilter] = useState("all")

  const conferences = [
    {
      id: 1,
      name: "Msichana Conference",
      date: "November 16, 2024",
      location: "Daytona Beach, FL",
      description: "Join us for an empowering day of workshops, networking, and inspiration.",
      image: "/images/nov-16th-msichana/IMG_0070.jpg",
      link: "/events/msichana-conference"
    },
    {
      id: 2,
      name: "Msichana Conference",
      date: "November 16, 2024",
      location: "Daytona Beach, FL",
      description: "Join us for an empowering day of workshops, networking, and inspiration.",
      image: "/images/nov-16th-msichana/IMG_0071.jpg",
      link: "/events/msichana-conference"
    },
    {
      id: 3,
      name: "Msichana Conference",
      date: "November 16, 2024",
      location: "Daytona Beach, FL",
      description: "Join us for an empowering day of workshops, networking, and inspiration.",
      image: "/images/nov-16th-msichana/IMG_0072.jpg",
      link: "/events/msichana-conference"
    },
    {
      id: 4,
      name: "Msichana Conference",
      date: "November 16, 2024",
      location: "Daytona Beach, FL",
      description: "Join us for an empowering day of workshops, networking, and inspiration.",
      image: "/images/nov-16th-msichana/IMG_0073.jpg",
      link: "/events/msichana-conference"
    },
    {
      id: 5,
      name: "Msichana Conference",
      date: "November 16, 2024",
      location: "Daytona Beach, FL",
      description: "Join us for an empowering day of workshops, networking, and inspiration.",
      image: "/images/nov-16th-msichana/IMG_0074.jpg",
      link: "/events/msichana-conference"
    },
    {
      id: 6,
      name: "Msichana Conference",
      date: "November 16, 2024",
      location: "Daytona Beach, FL",
      description: "Join us for an empowering day of workshops, networking, and inspiration.",
      image: "/images/nov-16th-msichana/IMG_0075.jpg",
      link: "/events/msichana-conference"
    }
  ]

  const events = [
    {
      id: 1,
      title: "MVULANA Young Men's Summit",
      date: "July 21, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Bethune–Cookman University | Civic Engagement Center, Daytona Beach",
      description:
        "A series of interactive workshops focused on developing leadership skills, confidence, communication abilities, and mental health awareness.",
      category: "workshop",
      image: "/Logos/mvulana-logo-1.png",
    },
    {
      id: 2,
      title: "MSICHANA Young Women's Summit",
      date: "November 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Yvonne Scarlett Golden Center, Daytona Beach",
      description:
        "Join us for an evening of celebration, inspiration, and fundraising to support our programs for the coming year.",
      category: "fundraiser",
      image: "/Msichana-Logo-2.png",
    },
    {
      id: 3,
      title: "Community Service Day",
      date: "TBD",
      time: "TBD",
      location: "TBD",
      description:
        "A day dedicated to giving back to our community through various service projects throughout Volusia County.",
      category: "community",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "College Preparation Workshop",
      date: "TBD",
      time: "TBD",
      location: "TBD",
      description:
        "Learn about college applications, scholarships, financial aid, and how to prepare for higher education.",
      category: "workshop",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const filteredEvents = filter === "all" ? events : events.filter((event) => event.category === filter)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-gold/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-burgundy/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-gold to-burgundy text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter("workshop")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "workshop"
                  ? "bg-gradient-to-r from-gold to-burgundy text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setFilter("fundraiser")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "fundraiser"
                  ? "bg-gradient-to-r from-gold to-burgundy text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Fundraisers
            </button>
            <button
              onClick={() => setFilter("community")}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "community"
                  ? "bg-gradient-to-r from-gold to-burgundy text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Community Events
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <div
                className="relative h-60 w-full"
                style={{ backgroundColor: event.id === 1 ? '#f5e7d6' : event.id === 2 ? '#f3e3d3' : '#fff' }}
              >
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-contain p-6" />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 bg-burgundy text-white text-sm font-medium rounded-full capitalize">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-deep-blue">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2 text-burgundy" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-2 text-burgundy" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2 text-burgundy" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                {event.id === 1 || event.id === 2 ? (
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-burgundy hover:text-burgundy-light font-medium group"
                  >
                    Event Details
                    <svg
                      className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                ) : (
                  <span className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed select-none">
                    Details Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No events found in this category. Please check back later.</p>
          </div>
        )}
      </div>
    </section>
  )
}
