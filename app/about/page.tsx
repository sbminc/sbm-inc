import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">About SBM Inc.</h1>
      
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            SBM Inc. is dedicated to empowering BIPOC girls in Volusia County through education, mentorship, and community engagement. Our mission started in 2022 as the brain child of Dr. Sadie McConner, who was inspired by the documentary "PUSH OUT: Criminalization of Black Girls" written by Monique Morris.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg mb-6">
            "Our future does not belong to us - Sacrifice, Believe, and Manifest for good."
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">BIPOC Women's History Presentation</h2>
          <div className="bg-rose-50 p-6 rounded-lg">
            <p className="text-lg mb-4">
              Learn more about our mission and the history of BIPOC women's achievements through our detailed presentation.
            </p>
            <Link 
              href="https://docs.google.com/presentation/d/1lqnVmG84c09VgYn9FtwPheEoVrLSJa_4HQ2jwlF8lMc/edit?slide=id.p1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors"
            >
              View Presentation
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="text-lg mb-6">
            We welcome support from our community to help further our mission. Whether through donations, volunteering, or partnerships, your contribution makes a difference in the lives of BIPOC girls in Volusia County.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/donations"
              className="bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors"
            >
              Make a Donation
            </Link>
            <Link 
              href="/events"
              className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
            >
              Join Our Events
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 