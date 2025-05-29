"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 nav-blur shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-6 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110"
              style={{ boxShadow: "0 0 16px 6px rgba(255,255,255,0.7), 0 0 32px 12px rgba(255,255,255,0.3)" }}
            >
              <Image src="/SBM-Logo-4.png" alt="SBM Inc. Logo" fill className="object-contain p-1" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 text-white group-hover:text-gold`}>
              SBM Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 text-white hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-300 text-white hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
            >
              About
            </Link>
            <Link
              href="/programs"
              className={`transition-colors duration-300 text-white hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
            >
              Programs
            </Link>
            <Link
              href="/events"
              className={`transition-colors duration-300 text-white hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
            >
              Events
            </Link>
            <Link
              href="/leaders"
              className={`transition-colors duration-300 text-white hover:text-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full`}
            >
              Our Leaders
            </Link>
            <Link
              href="/donate"
              className="bg-gradient-to-r from-gold to-burgundy text-white px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-card rounded-xl">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-white hover:text-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/programs"
                className="text-white hover:text-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/events"
                className="text-white hover:text-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/leaders"
                className="text-white hover:text-gold transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Leaders
              </Link>
              <Link
                href="/donate"
                className="bg-gradient-to-r from-gold to-burgundy text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
