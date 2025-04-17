import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-deep-blue to-midnight-blue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-gold/10 to-orange/10 opacity-30"></div>
        <div className="stars-container absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative h-14 w-14 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-orange opacity-20 rounded-full"></div>
                <Image src="/logo.png" alt="SBM Inc. Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-2xl font-bold group-hover:text-gold transition-colors">SBM Inc.</span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Sacrificing, Believing, and Manifesting for the future of BIPOC girls in Volusia County.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <Twitter size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">Programs</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/programs/mentorship"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/leadership"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Leadership Workshop
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/academic"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Academic Support
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/community"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Community Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <span className="text-white/80">Volusia County, Florida</span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <span className="text-white/80">info@sbminc.org</span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <span className="text-white/80">(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} SBM Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
