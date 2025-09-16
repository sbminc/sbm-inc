"use client"

import { useEffect, useRef, useState } from "react"

type PdfJsSlideshowProps = {
  src: string
  intervalMs?: number
  heightPx?: number
  maxWidthPx?: number
}

// Lightweight PDF.js renderer for single-page-at-a-time slideshow
export default function PdfJsSlideshow({ src, intervalMs = 6000, heightPx = 560, maxWidthPx = 1200 }: PdfJsSlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [numPages, setNumPages] = useState<number>(0)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const currentPageRef = useRef<number>(1)
  const pdfDocRef = useRef<any>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize PDF.js and load document
  useEffect(() => {
    let cancelled = false

    const loadPdfJs = () => new Promise<any>((resolve, reject) => {
      const existing = document.getElementById('pdfjs-script') as HTMLScriptElement | null
      if (existing && (window as any).pdfjsLib) {
        resolve((window as any).pdfjsLib)
        return
      }
      const script = existing || document.createElement('script')
      script.id = 'pdfjs-script'
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.min.js'
      script.async = true
      script.onload = () => resolve((window as any).pdfjsLib)
      script.onerror = reject
      if (!existing) document.body.appendChild(script)
    })

    ;(async () => {
      try {
        setLoading(true)
        setError("")
        console.log("Loading PDF.js...")
        const pdfjsLib: any = await loadPdfJs()
        if (!pdfjsLib) {
          setError("Failed to load PDF.js library")
          return
        }
        console.log("PDF.js loaded, setting worker...")
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.worker.min.js'

        console.log("Loading PDF document:", src)
        const loadingTask = pdfjsLib.getDocument(src)
        const pdf = await loadingTask.promise
        if (cancelled) return
        console.log("PDF loaded, pages:", pdf.numPages)
        pdfDocRef.current = pdf
        setNumPages(pdf.numPages)
        currentPageRef.current = 1
        await renderPage(currentPageRef.current)
        startTimer()
        setLoading(false)
      } catch (err) {
        console.error("PDF loading error:", err)
        setError(err instanceof Error ? err.message : "Failed to load PDF")
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
      if (timerRef.current) clearInterval(timerRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src])

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(async () => {
      if (!pdfDocRef.current) return
      const next = currentPageRef.current % (numPages || 1) + 1
      currentPageRef.current = next
      await renderPage(next)
    }, intervalMs)
  }

  const renderPage = async (pageNumber: number) => {
    const pdf = pdfDocRef.current
    if (!pdf) return
    const page = await pdf.getPage(pageNumber)
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const viewport = page.getViewport({ scale: 1 })
    // Fit to container height while respecting max width
    const targetHeight = heightPx - 16 // account for inner border
    const scale = targetHeight / viewport.height
    const scaled = page.getViewport({ scale })

    canvas.width = Math.min(Math.floor(scaled.width), (maxWidthPx || 1200))
    canvas.height = Math.floor(scaled.height)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear before render to avoid ghosting
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const renderContext = {
      canvasContext: ctx,
      viewport: scaled
    }
    await page.render(renderContext).promise
  }

  if (loading) {
    return (
      <div
        className="relative mt-8 rounded-xl overflow-hidden shadow-xl bg-white flex items-center justify-center"
        style={{ height: heightPx, maxWidth: maxWidthPx, margin: '0 auto' }}
      >
        <div className="text-gray-600">Loading PDF...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className="relative mt-8 rounded-xl overflow-hidden shadow-xl bg-white flex items-center justify-center"
        style={{ height: heightPx, maxWidth: maxWidthPx, margin: '0 auto' }}
      >
        <div className="text-red-600 text-center p-4">
          <div>Error: {error}</div>
          <div className="text-sm mt-2">Check console for details</div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative mt-8 rounded-xl overflow-hidden shadow-xl bg-white"
      style={{ height: heightPx, maxWidth: maxWidthPx, margin: '0 auto' }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', margin: '0 auto', transform: 'translateY(-8px)' }} />
      <div className="pointer-events-none absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 0 8px #ffffff' }} />
      <div className="flex justify-center gap-2 py-2 bg-white/80">
        <span className="text-sm text-gray-600">Page {currentPageRef.current} of {numPages || "…"}</span>
      </div>
    </div>
  )
}


