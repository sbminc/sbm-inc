'use client'

import { useState, useEffect } from 'react'

interface Slide {
  title: string
  content: string
  image?: string
  video?: {
    url: string
    thumbnail?: string
  }
}

interface SlideshowProps {
  slides: Slide[]
  autoPlayInterval?: number // in milliseconds
}

export default function Slideshow({ slides, autoPlayInterval = 5000 }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length, autoPlayInterval])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const openVideo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slide Content */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        {slides[currentSlide].video ? (
          <div className="relative w-full h-full">
            <img
              src={slides[currentSlide].video.thumbnail}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <button
              onClick={() => openVideo(slides[currentSlide].video!.url)}
              className="absolute inset-0 w-full h-full flex items-center justify-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 shimmer-text">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-lg md:text-xl text-white/80">
                  {slides[currentSlide].content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gold' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  )
} 