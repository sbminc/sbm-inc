import Image from "next/image"

export default function OurLeadersPage() {
  const leaders = [
    {
      name: "Dr. Sadie McConner",
      role: "Founder & Executive Director",
      image: "/ms-sadie.jpg",
      bio: "Dr. Sadie McConner is the visionary founder of SBM Inc., inspired by the documentary 'PUSH OUT: Criminalization of Black Girls' written by Monique Morris. With a passion for empowering BIPOC girls, she leads our mission to create positive change in Volusia County."
    },
    {
      name: "Ariel Brown",
      role: "Leadership Team Member",
      image: "/ariel-brown.jpg",
      bio: "Dedicated to youth development and community engagement."
    },
    {
      name: "Carolyn Gillis",
      role: "Leadership Team Member",
      image: "/carolyn-gillis.jpg",
      bio: "Bringing expertise in education and mentorship programs."
    },
    {
      name: "Courtney Davison",
      role: "Leadership Team Member",
      image: "/courtney-davison.jpg",
      bio: "Focused on program development and community outreach."
    },
    {
      name: "Danielle Griffin-Baker",
      role: "Leadership Team Member",
      image: "/danielle-griffin.jpg",
      bio: "Specializing in youth empowerment and leadership training."
    },
    {
      name: "Dealie Luckett",
      role: "Leadership Team Member",
      image: "/dealie-luckett.jpg",
      bio: "Committed to creating positive change in our community."
    },
    {
      name: "Dixie Morgese",
      role: "Leadership Team Member",
      image: "/dixie-morgese.jpg",
      bio: "Bringing experience in community service and youth development."
    },
    {
      name: "Godzetta Whittington",
      role: "Leadership Team Member",
      image: "/godzetta-whittington.jpg",
      bio: "Dedicated to empowering young women through education."
    },
    {
      name: "Nicole Small",
      role: "Leadership Team Member",
      image: "/nicole-small.jpg",
      bio: "Focused on mentorship and personal development."
    },
    {
      name: "Sharon Brown",
      role: "Leadership Team Member",
      image: "/sharon-brown.jpg",
      bio: "Committed to community building and youth advocacy."
    },
    {
      name: "Waynetha Neal Ferguson",
      role: "Leadership Team Member",
      image: "/waynetha-ferguson.jpg",
      bio: "Bringing expertise in leadership development and community engagement."
    },
    {
      name: "Christine Robinson",
      role: "Leadership Team Member",
      image: "/christine-robinson.jpg",
      bio: "Dedicated to creating opportunities for youth success."
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Our Leaders</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Meet the dedicated team behind SBM Inc. who work tirelessly to empower BIPOC girls in Volusia County.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div key={index} className="glass-card-dark rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-80">
              <Image 
                src={leader.image}
                alt={`${leader.name} - ${leader.role}`}
                fill 
                className="object-cover" 
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
              <p className="text-gold font-medium mb-4">{leader.role}</p>
              <p className="text-white/80">
                {leader.bio}
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
