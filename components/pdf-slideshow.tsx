"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type PdfSlideshowProps = {
  src: string
  totalPages: number
  intervalMs?: number
  heightPx?: number
  maxWidthPx?: number
}

export default function PdfSlideshow({ src, totalPages, intervalMs = 6000, heightPx = 560, maxWidthPx = 1200 }: PdfSlideshowProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Simple, reliable timer-based advancement
  useEffect(() => {
    const id = setInterval(() => {
      setIsTransitioning(true)
      // Brief transition state to prevent jarring changes
      setTimeout(() => {
        setCurrentPage((prev) => (prev % totalPages) + 1)
        setIsTransitioning(false)
      }, 150)
    }, intervalMs)
    return () => clearInterval(id)
  }, [totalPages, intervalMs])

  // Use Google Docs viewer for more reliable PDF rendering
  const viewerSrc = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(window.location.origin + src)}&page=${currentPage}`

  return (
    <div
      className="relative mt-8 rounded-xl overflow-hidden shadow-xl bg-white"
      style={{ height: heightPx, maxWidth: maxWidthPx, margin: '0 auto' }}
    >
      {/* Google Docs viewer for reliable PDF rendering */}
      <iframe
        key={`page-${currentPage}`}
        src={viewerSrc}
        title="PDF Slideshow"
        className={`w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
        style={{ border: 0, pointerEvents: 'none', transform: 'translate(8px, -8px)' }}
        aria-label={`Slide ${currentPage} of ${totalPages}`}
        scrolling="no"
      />
      {/* Even inner frame using box-shadow to create uniform border */}
      <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 0 8px #ffffff' }} />
      {/* Right-side mask to cover any browser overlay scrollbar */}
      <div className="pointer-events-none absolute top-0 right-0 h-full" style={{ width: 12, background: '#ffffff' }} />
      <div className="flex justify-center gap-2 py-2 bg-white/80">
        <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
      </div>
    </div>
  )
}


