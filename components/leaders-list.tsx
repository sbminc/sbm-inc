import Image from "next/image"

export default function LeadersList() {
  // Founder info
  const founder = {
    name: "Dr. Sadie McConner",
    role: "Founder & Executive Director",
    image: "/ms sadie.jpg",
    bio: "Dr. Sadie McConner is the visionary founder of SBM Inc., inspired by the documentary 'PUSH OUT: Criminalization of Black Girls' written by Monique Morris. With a passion for empowering BIPOC girls, she leads our mission to create positive change in Volusia County."
  }

  // Leadership team (names only, omitting Danielle Griffin-Baker and Nicole Small)
  const leaders = [
    "Ariel Brown",
    "Carolyn Gillis",
    "Courtney Davison",
    "Dealie Luckett",
    "Dixie Morgese",
    "Godzetta Whittington",
    "Sharon Brown",
    "Waynetha Neal Ferguson",
    "Christine Robinson"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Founder Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-deep-blue via-burgundy to-midnight-blue rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 text-white shadow-lg">
            <div className="w-full md:w-1/3 flex justify-center">
              <Image src={founder.image} alt={founder.name} width={240} height={320} className="rounded-xl shadow-lg object-cover" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-2">{founder.name}</h2>
              <p className="text-gold font-medium mb-4">{founder.role}</p>
              <p className="text-white/90 leading-relaxed">{founder.bio}</p>
            </div>
          </div>
        </div>

        {/* Leadership Team List */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-deep-blue text-center">Leadership Team</h2>
          <ul className="space-y-4 text-center">
            {leaders.map((name, idx) => (
              <li key={idx} className="text-lg text-gray-700">
                <span className="font-semibold">{name}</span>
                <span className="ml-2 text-gold">Leadership Team Member</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
