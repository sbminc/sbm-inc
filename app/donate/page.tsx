import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DonatePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">Support Our Mission</h1>
          <p className="text-xl text-gray-700 mb-12">
            Your donation helps us empower BIPOC Youth in Volusia County through education, mentorship, and community programs.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-deep-blue">Ways to Give</h2>
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Monetary Donations</h3>
              <p className="text-gray-700 mb-2">Your financial support helps us continue our mission of empowering BIPOC Youth in Volusia County.</p>
              <a
                href="https://www.zeffy.com/en-US/donation-form/51e9784d-b5e6-4ac0-9c70-33d3d1f9ece4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gold to-burgundy text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect mb-2"
              >
                Donate via Zeffy
              </a>
              <p className="text-gray-500 text-sm">For other payment methods or to set up recurring donations, please contact us directly.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">In-Kind Donations</h3>
              <p className="text-gray-700 mb-2">We welcome donations of supplies and resources that support our programs:</p>
              <ul className="text-left text-gray-700 text-sm list-disc list-inside mb-2">
                <li>School supplies</li>
                <li>Books and educational materials</li>
                <li>Technology equipment</li>
                <li>Event supplies</li>
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSffodY75YsLpcgdHEi5oIFHMUZcHyFTP8RssSdqC1Udv4WZ7w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glass-card text-burgundy border border-gold/30 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-gold/60"
              >
                Contact Us About In-Kind Donations
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-blue">Become a Sponsor for the Msichana Conference</h2>
            <p className="mb-6 text-gray-700">Your donation will make a significant impact</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border-t-4 border-gold flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Empower Pre-teen BIPOC Youth</h3>
                  <div className="text-gold font-bold mb-1">$100</div>
                  <ul className="text-left text-gray-700 text-sm list-disc list-inside mb-4">
                    <li>Gain visibility with an information table and recognition on participant handouts</li>
                  </ul>
                </div>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/51e9784d-b5e6-4ac0-9c70-33d3d1f9ece4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-gold to-burgundy text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect mt-2 text-center"
                >
                  Sponsor this Level
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-t-4 border-burgundy flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Empower Teen BIPOC Youth</h3>
                  <div className="text-burgundy font-bold mb-1">$150</div>
                  <ul className="text-left text-gray-700 text-sm list-disc list-inside mb-4">
                    <li>Elevate your brand with media recognition and exposure to our audience</li>
                    <li>Showcase your commitment with an information table and recognition on participant handouts</li>
                  </ul>
                </div>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/51e9784d-b5e6-4ac0-9c70-33d3d1f9ece4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-gold to-burgundy text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect mt-2 text-center"
                >
                  Sponsor this Level
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-t-4 border-gold flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Empower Adolescent BIPOC Youth</h3>
                  <div className="text-gold font-bold mb-1">$200+</div>
                  <ul className="text-left text-gray-700 text-sm list-disc list-inside mb-4">
                    <li>Maximize your impact and visibility with recognition on various media platforms during the event</li>
                    <li>Secure a prominent presence with an information table and recognition on participant handouts</li>
                  </ul>
                </div>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/51e9784d-b5e6-4ac0-9c70-33d3d1f9ece4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-gold to-burgundy text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect mt-2 text-center"
                >
                  Sponsor this Level
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4 text-deep-blue">Tax Information</h2>
            <p className="text-gray-700 mb-2">SBM Inc. is a registered 501(c)(3) nonprofit organization. Your donations are tax-deductible to the extent allowed by law.</p>
            <p className="text-gray-700 text-sm">A receipt for your tax records will be provided for all donations. For any questions about tax deductions, please consult with your tax advisor.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 