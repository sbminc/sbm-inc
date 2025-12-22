import AdinkraSymbol from "./adinkra-symbol"
import Image from "next/image"

export default function CommunitySection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4">
          <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="xl" color="#800020" />
        </div>
        <div className="absolute top-3/4 left-3/4">
          <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="xl" color="#800020" />
        </div>
        <div className="absolute top-1/2 left-1/2">
          <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="xl" color="#800020" />
        </div>
        <div className="absolute top-1/4 right-1/4">
          <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="xl" color="#800020" />
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="xl" color="#800020" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="lg" color="#e9b949" className="mr-4" withTooltip />
            <h2 className="text-4xl md:text-5xl font-bold text-deep-blue">Our Community</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Together we are stronger. Our community brings together diverse voices and experiences to create a
            supportive environment for growth and empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-gold transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <AdinkraSymbol name="bi-nka-bi" size="sm" color="#e9b949" className="mr-2" withTooltip />
              <h3 className="text-xl font-bold text-deep-blue">Unity in Diversity</h3>
            </div>
            <p className="text-gray-700">
              We celebrate the unique backgrounds, experiences, and perspectives that each member brings to our
              community.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-burgundy transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <AdinkraSymbol name="funtunfunefu-denkyemfunefu" size="sm" color="#e9b949" className="mr-2" withTooltip />
              <h3 className="text-xl font-bold text-deep-blue">Shared Purpose</h3>
            </div>
            <p className="text-gray-700">
              Though we may have different roles, we share a common goal of empowering BIPOC youth to reach their full
              potential.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-gold transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <AdinkraSymbol name="odo-nnyew-fie-kwan" size="sm" color="#e9b949" className="mr-2" withTooltip />
              <h3 className="text-xl font-bold text-deep-blue">Mutual Support</h3>
            </div>
            <p className="text-gray-700">
              We lift each other up, providing encouragement, resources, and assistance to help everyone succeed.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          {/* Removed placeholder image and Adinkra symbol here */}
        </div>
      </div>
    </section>
  )
}
