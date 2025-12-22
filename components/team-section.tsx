import Image from "next/image"

export default function TeamSection() {
  const team = [
    {
      name: "Jane Smith",
      role: "Founder & Executive Director",
      bio: "Jane has over 15 years of experience in education and community organizing. She founded SBM Inc. with a vision to create opportunities for BIPOC Youth in Volusia County.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michelle Johnson",
      role: "Program Director",
      bio: "Michelle oversees all of our programs and ensures they align with our mission. She has a background in youth development and a passion for mentoring.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Tanya Williams",
      role: "Mentorship Coordinator",
      bio: "Tanya manages our mentorship program, matching mentors with participants and providing ongoing support to ensure meaningful relationships.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Chen",
      role: "Community Outreach",
      bio: "David builds partnerships with local organizations and businesses to expand our reach and impact in the community.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">
            Meet Our <span className="shimmer-text">Team</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our dedicated team brings diverse expertise and a shared passion for empowering BIPOC Youth in our
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gold">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-deep-blue">Join Our Team</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for passionate individuals to join our mission. Whether as staff, volunteers, or
              board members, there are many ways to contribute.
            </p>
            <a
              href="/volunteer"
              className="inline-block bg-gradient-to-r from-gold to-burgundy text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect"
            >
              Learn About Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
