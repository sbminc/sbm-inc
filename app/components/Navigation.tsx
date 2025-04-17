'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./Logo"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-sbm-gold" : "text-sbm-navy hover:text-sbm-orange"
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex space-x-8">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/highlights" className={isActive("/highlights")}>
              Highlights
            </Link>
            <Link href="/donations" className={isActive("/donations")}>
              Donations
            </Link>
            <Link href="/our-leaders" className={isActive("/our-leaders")}>
              Our Leaders
            </Link>
            <Link href="/events" className={isActive("/events")}>
              Events
            </Link>
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button - we can add this later if needed */}
            <button className="text-sbm-navy hover:text-sbm-orange">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 