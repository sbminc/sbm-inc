import Image from "next/image"

export default function OurLeadersPage() {
  const leaders = [
    { name: "Dr. Sadie McConner", role: "Founder", image: "/ms sadie.jpg" },
    { name: "Ariel Brown", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Carolyn Gillis", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Courtney Davison", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Danielle Griffin-Baker", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Dealie Luckett", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Dixie Morgese", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Godzetta Whittington", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Nicole Small", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Sharon Brown", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Waynetha Neal Ferguson", role: "Leadership Team Member", image: "/placeholder-user.jpg" },
    { name: "Christine Robinson", role: "Leadership Team Member", image: "/placeholder-user.jpg" }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Our Leaders</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Meet the dedicated team behind SBM Inc. who work tirelessly to empower BIPOC girls in our community.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80">
              <Image 
                src={leader.image}
                alt={`${leader.name} - ${leader.role}`}
                fill 
                className="object-cover" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
              <p className="text-rose-500 font-medium mb-4">{leader.role}</p>
              <p className="text-gray-600">
                Dedicated to empowering BIPOC girls in Volusia County through education, mentorship, and community engagement.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our leaders bring diverse experiences and expertise to SBM Inc., united in their commitment to making a positive impact in our community.
        </p>
      </div>
    </div>
  )
}
