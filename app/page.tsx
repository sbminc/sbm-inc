import { Button } from "./components/Button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Placeholder image with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sbm-navy/90 to-sbm-navy/70" />
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Empowering BIPOC Girls in Volusia County
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
              Through mentorship, education, and community engagement, we're building the next generation of leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/about" variant="primary">
                Learn More
              </Button>
              <Button href="/donate" variant="outline" className="text-white border-white/30 hover:border-white/50 hover:bg-white/10">
                Support Our Mission
              </Button>
            </div>
          </div>
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
            <Button
              href="/donations"
              variant="primary"
            >
              Make a Donation
            </Button>
            <Button
              href="/events"
              variant="secondary"
            >
              Join Our Events
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
