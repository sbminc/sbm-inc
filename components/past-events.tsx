"use client"

import React, { useState } from "react"
import Image from "next/image"

const images = [
  "/Images/Nov 16th Msichana/IMG_0070.jpg",
  "/Images/Nov 16th Msichana/IMG_0071.jpg",
  "/Images/Nov 16th Msichana/IMG_0072.jpg",
  "/Images/Nov 16th Msichana/IMG_0073.jpg",
  "/Images/Nov 16th Msichana/IMG_0074.jpg",
  "/Images/Nov 16th Msichana/IMG_0075.jpg",
  "/Images/Nov 16th Msichana/75BAC66A-CAA9-451E-8647-9ACD8426B624.jpeg",
  "/Images/Nov 16th Msichana/6723BE3F-25DD-4E02-8D8A-40F9F4BBE294.jpeg",
  "/Images/Nov 16th Msichana/22EF8BE4-F3B5-40C6-80CF-DBDB77F63361.jpeg",
  "/Images/Nov 16th Msichana/C7011D7B-0A78-4169-A4BF-8B5A564EDC41.jpeg"
]

const videos = [
  "/Videos/IMG_2599.mp4",
  "/Videos/IMG_5341.mp4",
  "/Videos/IMG_2259.mp4",
  "/Videos/IMG_5343.mp4",
  "/Videos/IMG_0086.mp4",
  "/Videos/IMG_2257.mp4",
  "/Videos/IMG_2258.mp4",
  "/Videos/IMG_5340.mp4"
]

const presentations = [
  {
    title: "BIPOC Women's History Presentation",
    file: "/Powerpoints/BIPOC Womens History Presentation (1).pptx"
  },
  {
    title: "Msichana 2024 Presentation",
    file: "/Powerpoints/Msichana 2024 Presentation.pptx"
  }
];

export default function PastEvents() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  const [currentVideo, setCurrentVideo] = useState(0);
  const prevVideo = () => setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  const nextVideo = () => setCurrentVideo((currentVideo + 1) % videos.length);

  const [currentPresentation, setCurrentPresentation] = useState(0);
  const prevPresentation = () => setCurrentPresentation((currentPresentation - 1 + presentations.length) % presentations.length);
  const nextPresentation = () => setCurrentPresentation((currentPresentation + 1) % presentations.length);

  return (
    <section className="mb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-blue">Past Events</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Msichana Young Women's Summit – November 16, 2024</h3>
          <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-100 mb-12">
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Previous slide">
              &#8592;
            </button>
            <Image
              src={images[current]}
              alt={`Summit photo ${current + 1}`}
              width={800}
              height={500}
              className="w-full h-[400px] object-cover"
            />
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Next slide">
              &#8594;
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === current ? "bg-gold" : "bg-white/60"} border border-burgundy block`}
                />
              ))}
            </div>
          </div>

          {/* YouTube-style Video Gallery */}
          <div className="mt-12">
            <h4 className="text-xl font-bold mb-4 text-deep-blue">Summit Videos</h4>
            <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-black mb-8">
              <button onClick={prevVideo} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Previous video">
                &#8592;
              </button>
              <div className="w-full aspect-video flex items-center justify-center">
                <video
                  key={videos[currentVideo]}
                  controls
                  className="w-full h-full object-contain rounded-t-xl transition-opacity duration-200"
                >
                  <source src={videos[currentVideo]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <button onClick={nextVideo} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Next video">
                &#8594;
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {videos.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === currentVideo ? "bg-gold" : "bg-white/60"} border border-burgundy block`}
                  />
                ))}
              </div>
            </div>
            <span className="block text-white text-base font-medium px-2 text-center truncate w-full bg-[#181818] rounded-b-xl pb-4">Summit Video {currentVideo + 1}</span>
          </div>

          {/* Presentations Slideshow */}
          <div className="mt-16">
            <h4 className="text-xl font-bold mb-4 text-deep-blue">Presentations</h4>
            <div className="relative max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg bg-white mb-8">
              <button onClick={prevPresentation} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Previous presentation">
                &#8592;
              </button>
              <div className="flex flex-col items-center justify-center py-12 px-4">
                <div className="mb-6">
                  <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" fill="#e9b949" />
                    <rect x="6" y="8" width="12" height="2" fill="#fff" />
                    <rect x="6" y="12" width="8" height="2" fill="#fff" />
                  </svg>
                  <h5 className="text-lg font-semibold text-deep-blue">{presentations[currentPresentation].title}</h5>
                </div>
                <a
                  href={presentations[currentPresentation].file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold to-burgundy text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20 shine-effect"
                >
                  View Presentation
                </a>
              </div>
              <button onClick={nextPresentation} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Next presentation">
                &#8594;
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {presentations.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === currentPresentation ? "bg-gold" : "bg-gray-300"} border border-burgundy block`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 