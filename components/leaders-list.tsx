"use client"
import { useState } from "react"
import Image from "next/image"

export default function LeadersList() {
  // Founder info
  const founder = {
    name: "Dr. Sadie McConner",
    role: "Founder & Executive Director",
    image: "/ms sadie-3.JPG",
    bio: "Dr. Sadie McConner is a dedicated community advocate who has made a significant impact in the Daytona Beach–Volusia County community since 2005. Born and raised in Brooklyn, New York. Dr. McConner brings a wealth of experience as a public health and education professional.\n\nShe holds a Master's in Public Health from Bethune-Cookman University, is a graduate of the Ohio College of Podiatric Medicine, and an alumna of Winston-Salem State University. She completed her residency in Podiatric Medicine at the VA Medical Center in Baltimore and Perry Point, Maryland.\n\nDr. McConner is the founder and CEO of Sacrificing, Believing, and Manifesting, a 501(c)(3) nonprofit organization, and the CEO of the McConner Training Institute. Her career spans public health, education, and community service, with teaching experience at institutions including Bethune-Cookman University, Palmer College of Chiropractic, Daytona State College, Life University, and others.\n\nHer dedication has earned her many honors, including serving as a Public Health Intensive Course Keynote Speaker, receiving the Jesse DuPont Public Health Scholarship, and being named a Juneteenth Hometown Hero. She has also received multiple service and leadership awards and has been recognized in Who's Who Among Executives and Professionals.\n\nDr. McConner is a certified CPR Instructor, CHAMPS Behavior Program Specialist, and holds a Diversity, Equity, and Inclusion Workplace Certificate. She remains active in professional organizations such as the American Public Health Association and the American Association of Clinical Anatomists. A published scholar and frequent conference presenter, she is also known for hosting the radio show Your Best Life on WAIG JOY 106.3 FM.\n\nHer passion for service extends deeply into her community. She serves on the Daytona State College Massage Therapy Advisory Board and the Healthy Start Coalition Fetal Infant Mortality Review Board and is the founder of the Community Action Group with Healthy Start Coalition. She is an engaged member of the National Council of Negro Women, the Pilot Club, the League of Women Voters, and the Daytona Beach Alumni Chapter of Delta Sigma Theta Sorority, Inc.\n\nAbove all, Dr. McConner is a proud mother to Shabak, mother-in-law to Tatiana, and loving grandmother to her beloved grandson, A Legend."
  }

  // Leadership team with bios and images
  const leaders = [
    {
      name: "Dedrick L. Adell",
      role: "Board Member",
      image: "/images/leaders/dedrick.jpg",
      bio: "Dedrick L. Adell is the President/CEO of Holistiq Planning, LLC, which educates clients on their personal retirement strategies such as achieving tax advantaged and tax advantaged retirement. Dedrick is originally from Blytheville, Arkansas, and a graduate of Blytheville High School. Upon graduation, he enlisted in the United States Marines Corps. Following his military service, he attended Park University in Parkville, Missouri, where he attained a bachelor's degree in Management and Finance. As Dedrick grew in his call to ministry, he attended Andersonville Theological Seminary in Andersonville, Georgia, where he graduated Summa Cum Laude with a Bachelor of Divinity in Pastoral Leadership. However, he did not stop there. He went on to pursue and obtain a Master of Arts in Ministry and Master of Divinity degree from Luther Rice Theological Seminary in Lithonia, Georgia. Most recently, Dedrick graduated from the Texas A&M School of Law with the Master of Jurisprudence in Wealth and Tax Management. In addition to his formal education, Dedrick has numerous professional licenses and certifications including Chartered Financial Consultant (ChFC®), Chartered Retirement Planning Counselor (CRPC®), Certified Tax Specialist®, and Accredited Investment Fiduciary (AIF®), Accredited Estate Planner (AEP®) to name a few. His current business memberships include an active membership in the National Association of Insurance and Financial Advisors (NAIFA), a member of The Financial Planning Association of Dallas Ft Worth, and a qualifying member of The Kingdom Advisors of Dallas. Dedrick is involved in many community organizations including Urban League of Dallas/Ft. Worth, Texas. He currently serves as an Associate Minister at Friendship Baptist Church of The Colony, serves as a facilitator in the Grief Ministry and New Members Orientation."
    },
    {
      name: "Godzetta Whittington",
      role: "Board Member",
      image: "/images/leaders/godzetta.jpg",
      bio: "Born and raised between Coney Island, New York, and North Carolina, Godzetta Whittington brings over 30 years of experience as a dedicated educator. Throughout her career, she has remained committed to the belief that all children can learn and thrive when given the right support and opportunities. As a proud board member of SBM, Godzetta supports the organization's mission to help young people connect with and celebrate their cultural heritage through transformative conferences and mentorship."
    },
    {
      name: "Christine Heusner Robinson, MSN, RN",
      role: "Clinical Leader | Nurse Educator | Patient Advocate",
      image: "/images/leaders/christine.JPG",
      bio: "Christine Heusner Robinson is a dedicated nursing professional with decades of experience in clinical practice, leadership, and education. Known for her compassionate, holistic approach, she has spent her career empowering healthcare teams and nurturing the next generation of nurses.\n\nAs Alternate Administrator and Case Manager at VIP Homecare Solutions in Port Orange, Florida, Christine oversees both clinical and administrative operations while continuing to provide hands-on patient care. Her leadership fosters a culture of excellence, safety, and community-focused service.\n\nChristine's nursing journey began in London, England, where she earned her Diploma in Nursing and certification in Midwifery and Psychiatric Nursing. She later advanced her education in the U.S., earning a BSN from Lehman College (CUNY) and an MSN in Adult Nursing Clinical Specialization from Pace University.\n\nHer impact extends beyond clinical care. Christine has served as a Clinical Adjunct at the University of North Florida and Clinical Coordinator at Bethune-Cookman University, where she mentored students, led global service-learning trips, and contributed to curriculum development. Her leadership experience also includes serving as Nurse Manager at Halifax Medical Center, overseeing complex inpatient units.\n\nChristine is actively involved in professional committees, including faculty assessment, curriculum planning, and nursing honor society mentorship. Her unwavering commitment to quality care, lifelong learning, and community service defines her as a trusted nurse leader and advocate for holistic, patient-centered healthcare."
    },
    {
      name: "Ju'Landa A. Zachary",
      role: "Board Member",
      image: "/images/leaders/julanda.jpg",
      bio: `Ju'Landa Zachary, widely known as Juju or Good Juju, Bad Juju, is a community educator, content creator, and advocate for social change dedicated to advancing scientific literacy and grassroots empowerment. A graduate of Florida State University, she holds a bachelor's degree in criminology with a special emphasis on juvenile justice. While at FSU, she served in the Juvenile Justice Role Model Program, mentoring at-risk youth and supporting early intervention through education and positive engagement.\n\nJu'Landa is also certified in Adverse Childhood Experiences (ACEs) through the Volusia County Department of Health, enabling her to apply trauma-informed approaches in her outreach and youth development work.\n\nAs a lead voice on the Pseudo Killas platform, she creates and facilitates educational content focused on African and African American history, feminism, astrophysics, and critical thinking. Her mission is to empower individuals—especially youth—with the tools to question, learn, and think logically.\n\nWhether she's leading discussions on men's mental health, organizing community events, or developing science-forward media for underserved audiences, Ju'Landa blends cultural insight, academic expertise, and heartfelt compassion. She is especially passionate about creating safe, intellectually rich environments where young people can heal, explore their potential, and see themselves reflected in science, history, and leadership.\nHer work is rooted in the belief that science and service, when made accessible and relevant, can transform communities from the inside out.\n\nHer work continues to inspire transformation rooted in knowledge, healing, and Good Juju.`
    }
  ]

  // Planning Committees
  const msichanaCommittee = [
    "Carolyn Gillis",
    "Dixie Morgese",
    "Courtney Davidson",
    "Sharon Brown",
    "Connie Luckett",
    "Dealie Luckett",
    "Waynetha Neal Ferguson",
    "Venitra Dukes"
  ];
  const mvulanaCommittee = [
    "Kenneth Barnes",
    "Headley White",
    "Jeremaine McKinney",
    "Leon Moody",
    "Rufus Johnson",
    "Kelvin Mayner"
  ];

  // State to track which bios are expanded (including founder)
  const [expanded, setExpanded] = useState(Array(leaders.length + 1).fill(false))

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
              <p className={`text-white/90 leading-relaxed ${expanded[0] ? '' : 'line-clamp-4'}`}>{founder.bio}</p>
              {founder.bio.length > 180 && (
                <button
                  className="mt-2 text-gold hover:underline font-medium focus:outline-none"
                  onClick={() => toggleExpand(0)}
                >
                  {expanded[0] ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Leadership Team Gallery */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-deep-blue text-center">Board of Directors & Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                      <p className={`text-gray-600 leading-relaxed ${expanded[idx + 1] ? '' : 'line-clamp-4'}`}>{leader.bio}</p>
                      {leader.bio.length > 180 && (
                        <button
                          className="mt-2 text-burgundy hover:underline font-medium focus:outline-none"
                          onClick={() => toggleExpand(idx + 1)}
                        >
                          {expanded[idx + 1] ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Planning Committees */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-deep-blue">Planning Committee for Msichana Conference</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  {msichanaCommittee.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-deep-blue">Planning Committee for Mvulana Summit</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  {mvulanaCommittee.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
