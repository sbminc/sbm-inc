import Image from "next/image"

export default function OurLeadersPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Our Leaders</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Meet the dedicated team behind SBM Inc. who work tirelessly to empower BIPOC girls in our community.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Leader 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-80">
            <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
            <p className="text-rose-500 font-medium mb-4">Founder & Executive Director</p>
            <p className="text-gray-600">
              Jane has over 15 years of experience in youth development and community organizing. She founded SBM Inc.
              with a vision to create opportunities for young BIPOC girls.
            </p>
          </div>
        </div>

        {/* Leader 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-80">
            <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">John Smith</h3>
            <p className="text-rose-500 font-medium mb-4">Program Director</p>
            <p className="text-gray-600">
              John brings his background in education and curriculum development to create impactful programs that
              address the unique needs of our participants.
            </p>
          </div>
        </div>

        {/* Leader 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-80">
            <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-rose-500 font-medium mb-4">Community Outreach Coordinator</p>
            <p className="text-gray-600">
              Sarah works to build partnerships with local organizations and businesses to expand our reach and impact
              in Volusia County.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Board of Directors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold">Lisa Williams</h3>
            <p className="text-gray-600">Board Chair</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold">Michael Chen</h3>
            <p className="text-gray-600">Treasurer</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold">Tanya Rodriguez</h3>
            <p className="text-gray-600">Secretary</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold">David Thompson</h3>
            <p className="text-gray-600">Member</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold">Aisha Jackson</h3>
            <p className="text-gray-600">Member</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h3 className="font-semibold">Robert Kim</h3>
            <p className="text-gray-600">Member</p>
          </div>
        </div>
      </div>
    </div>
  )
}
