import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Homepage Image-1.jpg"
            alt="Group of young people at SBM Inc. event"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">SBM Inc.</h1>
          <p className="text-xl mb-8">Empowering BIPOC Girls in Volusia County</p>
          <Link
            href="/events"
            className="inline-block bg-rose-500 text-white px-8 py-4 rounded-md text-lg hover:bg-rose-600 transition-colors"
          >
            Join Our Next Event
          </Link>
        </div>
      </section>

      {/* Affirmation Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">AFFIRMATION</h2>
            <div className="text-lg space-y-4">
              <p>
                I am a black, mahogany, pecan tan, cocoa bean, chestnut brown, chocolate chip, caramel, milk chocolate girl with so many ordained gifts.
              </p>
              <p>I am innovative, intelligent, beautiful, and kind</p>
              <p>I am mentally well, financially literate, college and career-bound, nutritionally wise,</p>
              <p>a conflict resolver</p>
              <p>and a social advocate.</p>
              <p className="font-semibold">Now watch me, watch me work, watch me grow, watch me flourish.</p>
              <p className="text-right italic">- Dr. Sadie McConner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            This event started 2022 as the brain child of Dr. Sadie McConner, who was inspired by the documentary "PUSH OUT: Criminalization of Black Girls" written by Monique Morris.
          </p>
          <p className="text-xl font-semibold text-rose-600">
            Our future does not belong to us - Sacrifice, Believe, and Manifest for good.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
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
        </div>
      </section>
    </main>
  )
}
