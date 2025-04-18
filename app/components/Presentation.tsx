"use client";

import { useState, useEffect } from "react";
import { PresentationSlide } from "./PresentationSlide";
import { slides } from "../data/slides";

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTouchStart(null);
    }
  };

  return (
    <div 
      className="relative min-h-screen bg-gradient-to-b from-purple-900 to-blue-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-4 bg-white/10 text-white px-4 py-2 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Current Slide */}
      <PresentationSlide {...slides[currentSlide]} />
    </div>
  );
} 