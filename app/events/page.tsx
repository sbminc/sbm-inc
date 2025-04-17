import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/Button"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4 text-sbm-navy">Events</h1>

      {/* Logo Section */}
      <section className="mb-16 text-center">
        <div className="relative h-48 max-w-md mx-auto">
          <Image
            src="/IMG_3163.jpg"
            alt="SBM Inc. Logo and Upcoming Events"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-sbm-navy">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Young Men's Conference */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-sbm-navy">
            <div className="relative h-48 bg-gradient-to-br from-sbm-navy to-sbm-orange/20">
              <Image
                src="/young-man-silhouette.jpg"
                alt="Young Men's Conference"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-sbm-navy">Young Men's Conference</h3>
              <p className="text-gray-600 mb-4">
                A special conference dedicated to empowering young men in our community.
              </p>
              <div className="bg-gradient-to-r from-sbm-navy/5 to-sbm-gold/5 p-4 rounded-lg border border-sbm-navy/10">
                <p className="text-sbm-navy/70 italic">More details coming soon...</p>
              </div>
            </div>
          </div>

          {/* Young Women's Conference */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-sbm-orange">
            <div className="relative h-48 bg-gradient-to-br from-sbm-orange to-sbm-gold/20">
              <Image
                src="/young-woman-silhouette.jpg"
                alt="Young Women's Conference"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-sbm-orange">Young Women's Conference</h3>
              <p className="text-gray-600 mb-4">
                A dedicated conference focusing on empowering young women in our community.
              </p>
              <div className="bg-gradient-to-r from-sbm-orange/5 to-sbm-gold/5 p-4 rounded-lg border border-sbm-orange/10">
                <p className="text-sbm-orange/70 italic">More details coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Conference Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-sbm-gold">
          <div className="relative h-96 bg-gradient-to-br from-sbm-navy via-sbm-orange to-sbm-gold">
            <Image
              src="/placeholder.jpg"
              alt="Msichana Conference 2024 Banner"
              fill
              className="object-cover mix-blend-overlay opacity-50"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-sbm-navy">The Big Day: Msichana Conference 2024</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sbm-orange">Event Details</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="font-semibold mr-2 text-sbm-navy">Date:</span>
                    Saturday, November 16, 2024
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2 text-sbm-navy">Time:</span>
                    10 AM - 3 PM
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2 text-sbm-navy">Location:</span>
                    Yvonne Scarlet Golden Center
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2 text-sbm-navy">Address:</span>
                    1000 Vine St, Daytona Beach, FL 32117
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sbm-orange">Registration</h3>
                <p className="text-gray-600 mb-4">
                  Join us for this transformative event dedicated to empowering BIPOC girls in our community.
                </p>
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfkeEsqEWdF8CiZvzmBH8va9mQjYyTLPPSRhTUDVNIi1sg-MA/viewform"
                  external
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-sbm-navy/5 to-sbm-gold/5 p-8 rounded-lg border border-sbm-navy/10">
          <h2 className="text-2xl font-semibold mb-4 text-sbm-navy">About Our Conference</h2>
          <p className="text-gray-600 mb-6">
            This event started in 2022 as the brain child of Dr. Sadie McConner, who was inspired by the documentary "PUSH OUT: Criminalization of Black Girls" written by Monique Morris.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-sbm-orange">Conference Materials</h3>
            <Button
              href="https://docs.google.com/presentation/d/1lqnVmG84c09VgYn9FtwPheEoVrLSJa_4HQ2jwlF8lMc/edit?slide=id.p1"
              variant="outline"
              external
            >
              View Conference Presentation
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-sbm-navy">Past Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-sbm-navy/10">
            <div className="relative h-64">
              <Image
                src="/highlight 1.jpg"
                alt="Past Msichana Conference 2023"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-sbm-navy">Msichana Conference 2023</h3>
              <p className="text-gray-600">
                A successful gathering that brought together our community to inspire and empower BIPOC girls.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}