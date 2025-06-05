"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProgramImageCarouselProps {
  programId: string
  title: string
}

export default function ProgramImageCarousel({ programId, title }: ProgramImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Define image sets for each program
  const imageSets = {
    mentorship: [
      "/images/programs/mentorship/mentorship-1.png",
      "/images/programs/mentorship/mentorship-2.png",
      "/images/programs/mentorship/mentorship-3.png",
      "/images/programs/mentorship/mentorship-4.png",
    ],
    leadership: [
      "/images/programs/leadership/leadership-1.png",
      "/images/programs/leadership/leadership-2.png",
      "/images/programs/leadership/leadership-3.PNG",
      "/images/programs/leadership/leadership-4.png",
    ],
    academic: [
      "/images/programs/academic/academic-1.PNG",
      "/images/programs/academic/academic-2.PNG",
      "/images/programs/academic/academic-3.png",
      "/images/programs/academic/academic-4.png",
    ],
    community: [
      "/images/programs/community/community-1.png",
      "/images/programs/community/community-2.png",
      "/images/programs/community/community-3.PNG",
      "/images/programs/community/community-4.PNG",
    ],
  }

  const images = imageSets[programId as keyof typeof imageSets] || []

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/2]" style={{ backgroundColor: '#f6ecd2' }}>
      <div className="absolute inset-0 bg-gradient-to-tr from-burgundy/20 to-gold/20 mix-blend-overlay z-10"></div>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
} 