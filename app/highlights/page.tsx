import Image from "next/image"
import Link from "next/link"

export default function HighlightsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Highlights</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Event 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-60">
            <Image src="/placeholder.svg?height=300&width=500" alt="Event highlight" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Annual Leadership Conference</h3>
            <p className="text-gray-600 mb-4">
              Our annual leadership conference brought together inspiring speakers and mentors to connect with our
              community.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">March 15, 2023</span>
              <Link href="#" className="text-rose-500 hover:text-rose-600 font-medium">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-60">
            <Image src="/placeholder.svg?height=300&width=500" alt="Event highlight" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Summer Empowerment Workshop</h3>
            <p className="text-gray-600 mb-4">
              Our summer workshop series focused on building confidence and developing essential life skills.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">July 8, 2023</span>
              <Link href="#" className="text-rose-500 hover:text-rose-600 font-medium">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Event 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-60">
            <Image src="/placeholder.svg?height=300&width=500" alt="Event highlight" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Community Outreach Day</h3>
            <p className="text-gray-600 mb-4">
              Our participants engaged with the local community through service projects and educational activities.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">October 22, 2023</span>
              <Link href="#" className="text-rose-500 hover:text-rose-600 font-medium">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
