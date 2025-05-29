"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function EventsSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const images = [
    { url: "/images/nov-16th-msichana/group-1.jpg", alt: "Group 1" },
    { url: "/images/nov-16th-msichana/group-2.jpg", alt: "Group 2" },
    { url: "/images/nov-16th-msichana/group-3.jpg", alt: "Group 3" },
    { url: "/images/nov-16th-msichana/group-4.jpg", alt: "Group 4" },
    { url: "/images/nov-16th-msichana/group-k-1.jpg", alt: "Group K 1" },
    { url: "/images/nov-16th-msichana/group-k-2.jpg", alt: "Group K 2" },
    { url: "/images/nov-16th-msichana/group-k-3.jpg", alt: "Group K 3" },
    { url: "/images/nov-16th-msichana/group-k-4.jpg", alt: "Group K 4" },
    { url: "/images/nov-16th-msichana/group-l-1.jpg", alt: "Group L 1" },
    { url: "/images/nov-16th-msichana/group-l-2.jpg", alt: "Group L 2" },
    { url: "/images/nov-16th-msichana/group-l-3.jpg", alt: "Group L 3" },
    { url: "/images/nov-16th-msichana/group-l-4.jpg", alt: "Group L 4" },
    { url: "/images/nov-16th-msichana/group-l-5.jpg", alt: "Group L 5" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000) // Change image every 10 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="flex justify-center items-center w-full h-[500px] overflow-hidden rounded-xl shadow-xl bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-16 h-16 border-4 border-burgundy border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover w-full h-full"
              onLoad={handleImageLoad}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-gold w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
} 