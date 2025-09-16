"use client"

import { useEffect, useMemo, useRef, useState } from "react"

type PdfSlideshowProps = {
  src: string
  totalPages: number
  intervalMs?: number
  heightPx?: number
  maxWidthPx?: number
}

export default function PdfSlideshow({ src, totalPages, intervalMs = 6000, heightPx = 560, maxWidthPx = 1200 }: PdfSlideshowProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Only advance when the iframe has loaded
  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        setCurrentPage((prev) => {
          const next = (prev % totalPages) + 1
          setIsLoaded(false) // Reset loaded state for new page
          return next
        })
      }, intervalMs)
    }

    if (isLoaded) {
      startTimer()
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isLoaded, totalPages, intervalMs])

  const viewerSrc = useMemo(() => {
    const params = new URLSearchParams()
    params.set("page", String(currentPage))
    // Scale down and align within frame
    params.set("zoom", "85")
    params.set("view", "Fit")
    params.set("toolbar", "0")
    params.set("navpanes", "0")
    params.set("scrollbar", "0")
    return `${src}#${params.toString()}`
  }, [src, currentPage])

  return (
    <div
      className="relative mt-8 rounded-xl overflow-hidden shadow-xl bg-white"
      style={{ height: heightPx, maxWidth: maxWidthPx, margin: '0 auto' }}
    >
      {/* Single iframe with load-based transitions */}
      <iframe
        key={`page-${currentPage}`}
        src={viewerSrc}
        title="PDF Slideshow"
        className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ border: 0, pointerEvents: 'none', transform: 'translate(8px, -8px)' }}
        aria-label={`Slide ${currentPage} of ${totalPages}`}
        scrolling="no"
        onLoad={() => setIsLoaded(true)}
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


