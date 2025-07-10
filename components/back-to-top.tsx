"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      // If the button is still unclickable in production, check for parent elements with overflow:hidden or high z-index.
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-burgundy text-white shadow-lg transition-all duration-300 hover:bg-burgundy/90 focus:outline-none focus:ring-2 focus:ring-burgundy focus:ring-offset-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  )
} 