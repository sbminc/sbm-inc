import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"
import AdinkraSymbol from "./adinkra-symbol"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-burgundy via-deep-blue to-midnight-blue text-white relative overflow-hidden">
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

        {/* Adinkra pattern background */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => {
            const symbols = ["sankofa", "adinkrahene", "akoma", "dwennimmen", "aya", "gye-nyame"] as const
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                <AdinkraSymbol name={randomSymbol} size="lg" color="white" />
              </div>
            )
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative h-14 w-14 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-orange opacity-20 rounded-full"></div>
                <Image src="/SBM-Logo-4.png" alt="SBM Inc. Logo" fill className="object-contain p-1" />
              </div>
              <span className="text-2xl font-bold group-hover:text-gold transition-colors">SBM Inc.</span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Sacrificing, Believing, and Manifesting for the future of BIPOC Youth in Volusia County.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576995671629"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-burgundy/20 transition-colors"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/sbmincorg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-burgundy/20 transition-colors"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCj_LR2uIn5mdwvT5UB9BsdA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-burgundy/20 transition-colors"
              >
                <Youtube size={18} className="text-white" />
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
                <Link href="/symbols" className="text-white/80 hover:text-gold transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                  Adinkra Symbols
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
                  <AdinkraSymbol name="mate-masie" size="sm" color="#e9b949" className="mr-2" withTooltip />
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/leadership"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <AdinkraSymbol name="adinkrahene" size="sm" color="#e9b949" className="mr-2" withTooltip />
                  Leadership Workshop
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/academic"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <AdinkraSymbol name="nea-onnim-no-sua-a-ohu" size="sm" color="#e9b949" className="mr-2" withTooltip />
                  Academic Support
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/community"
                  className="text-white/80 hover:text-gold transition-colors flex items-center"
                >
                  <AdinkraSymbol name="bi-nka-bi" size="sm" color="#e9b949" className="mr-2" withTooltip />
                  Community Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-burgundy/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <span className="text-white/80">Volusia County, Florida</span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-burgundy/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <span className="text-white/80">info@sbminc.org</span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-burgundy/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <span className="text-white/80">+1 (904) 717-3105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} SBM Inc. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-2">
            <AdinkraSymbol name="sankofa" size="sm" color="white" className="opacity-50" withTooltip />
            <AdinkraSymbol name="adinkrahene" size="sm" color="white" className="opacity-50" withTooltip />
            <AdinkraSymbol name="akoma" size="sm" color="white" className="opacity-50" withTooltip />
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="/privacy-policy" className="underline hover:text-gold">Privacy Policy</a>
            <span>|</span>
            <a href="/accessibility" className="underline hover:text-gold">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
