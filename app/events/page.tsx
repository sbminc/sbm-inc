import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Events</h1>

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
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Young Men's Conference */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Young Men's Conference</h3>
              <p className="text-gray-600 mb-4">
                A special conference dedicated to empowering young men in our community.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 italic">More details coming soon...</p>
              </div>
            </div>
          </div>

          {/* Young Women's Conference */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Young Women's Conference</h3>
              <p className="text-gray-600 mb-4">
                A dedicated conference focusing on empowering young women in our community.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 italic">More details coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Conference Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src="/Event Flyer-1.jpg"
              alt="Msichana Conference 2024 Banner"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">The Big Day: Msichana Conference 2024</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Event Details</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">Date:</span>
                    Saturday, November 16, 2024
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">Time:</span>
                    10 AM - 3 PM
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">Location:</span>
                    Yvonne Scarlet Golden Center
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold mr-2">Address:</span>
                    1000 Vine St, Daytona Beach, FL 32117
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Registration</h3>
                <p className="text-gray-600 mb-4">
                  Join us for this transformative event dedicated to empowering BIPOC girls in our community.
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfkeEsqEWdF8CiZvzmBH8va9mQjYyTLPPSRhTUDVNIi1sg-MA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto bg-rose-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About Our Conference</h2>
          <p className="text-lg mb-6">
            This event started in 2022 as the brain child of Dr. Sadie McConner, who was inspired by the documentary "PUSH OUT: Criminalization of Black Girls" written by Monique Morris.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Conference Materials</h3>
            <Link
              href="https://docs.google.com/presentation/d/1lqnVmG84c09VgYn9FtwPheEoVrLSJa_4HQ2jwlF8lMc/edit?slide=id.p1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-700 underline"
            >
              View Conference Presentation
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Past Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/highlight 1.jpg"
                alt="Past Msichana Conference 2023"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Msichana Conference 2023</h3>
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