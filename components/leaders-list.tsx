"use client"
import { useState } from "react"
import Image from "next/image"

export default function LeadersList() {
  // Founder info
  const founder = {
    name: "Dr. Sadie McConner",
    role: "Founder & Executive Director",
    image: "/ms sadie.jpg",
    bio: "Dr. Sadie McConner is the visionary founder of SBM Inc., inspired by the documentary 'PUSH OUT: Criminalization of Black Girls' written by Monique Morris. With a passion for empowering BIPOC youth, she leads our mission to create positive change in Volusia County."
  }

  // Leadership team with bios and images
  const leaders = [
    {
      name: "Godzetta Whittington",
      role: "Board Member",
      image: "/images/leaders/godzetta.jpg",
      bio: "Born and raised between Coney Island, New York, and North Carolina, Godzetta Whittington brings over 30 years of experience as a dedicated educator. Throughout her career, she has remained committed to the belief that all children can learn and thrive when given the right support and opportunities. As a proud board member of SBM, Godzetta supports the organization's mission to help young people connect with and celebrate their cultural heritage through transformative conferences and mentorship."
    },
    {
      name: "Dedrick L. Adell",
      role: "Board Member",
      image: "/images/leaders/dedrick.jpg",
      bio: "Dedrick L. Adell is the President/CEO of Holistiq Planning, LLC, which educates clients on their personal retirement strategies such as achieving tax advantaged and tax advantaged retirement. Dedrick is originally from Blytheville, Arkansas, and a graduate of Blytheville High School. Upon graduation, he enlisted in the United States Marines Corps. Following his military service, he attended Park University in Parkville, Missouri, where he attained a bachelor's degree in Management and Finance. As Dedrick grew in his call to ministry, he attended Andersonville Theological Seminary in Andersonville, Georgia, where he graduated Summa Cum Laude with a Bachelor of Divinity in Pastoral Leadership. However, he did not stop there. He went on to pursue and obtain a Master of Arts in Ministry and Master of Divinity degree from Luther Rice Theological Seminary in Lithonia, Georgia. Most recently, Dedrick graduated from the Texas A&M School of Law with the Master of Jurisprudence in Wealth and Tax Management. In addition to his formal education, Dedrick has numerous professional licenses and certifications including Chartered Financial Consultant (ChFC®), Chartered Retirement Planning Counselor (CRPC®), Certified Tax Specialist®, and Accredited Investment Fiduciary (AIF®), Accredited Estate Planner (AEP®) to name a few. His current business memberships include an active membership in the National Association of Insurance and Financial Advisors (NAIFA), a member of The Financial Planning Association of Dallas Ft Worth, and a qualifying member of The Kingdom Advisors of Dallas. Dedrick is involved in many community organizations including Urban League of Dallas/Ft. Worth, Texas. He currently serves as an Associate Minister at Friendship Baptist Church of The Colony, serves as a facilitator in the Grief Ministry and New Members Orientation."
    },
    {
      name: "Ariel Brown",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Carolyn Gillis",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Courtney Davison",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Dealie Luckett",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Dixie Morgese",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Sharon Brown",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Waynetha Neal Ferguson",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    },
    {
      name: "Christine Robinson",
      role: "Leadership Team Member",
      image: "/images/leaders/placeholderw.png",
      bio: ""
    }
  ]

  // State to track which bios are expanded
  const [expanded, setExpanded] = useState(Array(leaders.length).fill(false))

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => {
      const copy = [...prev]
      copy[idx] = !copy[idx]
      return copy
    })
  }

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

        {/* Leadership Team Gallery */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-deep-blue text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                <div className="relative h-80 w-full bg-white flex items-center justify-center">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-deep-blue">{leader.name}</h3>
                  <p className="text-gold font-medium mb-4">{leader.role}</p>
                  {leader.bio && (
                    <>
                      <p className={`text-gray-600 leading-relaxed ${expanded[idx] ? '' : 'line-clamp-4'}`}>{leader.bio}</p>
                      {leader.bio.length > 180 && (
                        <button
                          className="mt-2 text-burgundy hover:underline font-medium focus:outline-none"
                          onClick={() => toggleExpand(idx)}
                        >
                          {expanded[idx] ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
