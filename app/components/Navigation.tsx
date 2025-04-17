'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./Logo"
import { useState } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path ? "text-sbm-gold" : "text-white hover:text-sbm-orange"
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/our-leaders", label: "Our Leaders" },
  ]

  return (
    <nav className="fixed w-full z-50 bg-sbm-navy">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`${isActive(link.href)} text-sm font-medium`}>
                {link.label}
              </Link>
            ))}
            <Link 
              href="/donations" 
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-sbm-orange hover:bg-sbm-gold transition-colors duration-200"
            >
              Donate
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-sbm-orange"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sbm-navy hover:text-sbm-orange"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donations"
                className="block px-3 py-2 text-white bg-sbm-orange hover:bg-sbm-gold rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
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