"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface SlideProps {
  slideNumber: number;
  images: string[];
  title?: string;
  content?: string;
  layout?: "full" | "split" | "grid";
}

export function PresentationSlide({ slideNumber, images, title, content, layout = "full" }: SlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 }
    );

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRef.current) {
        observer.unobserve(slideRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={slideRef}
      className="min-h-screen w-full bg-gradient-to-b from-purple-900/20 to-blue-900/20 p-8 opacity-0 translate-y-4 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto">
        {/* Slide Number */}
        <div className="absolute top-4 right-4 text-purple-300/50 text-sm">
          Slide {slideNumber}
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              {title}
            </h2>
          )}

          {/* Image Grid */}
          <div className={`grid gap-8 ${
            layout === "full" ? "grid-cols-1" :
            layout === "split" ? "grid-cols-2" :
            "grid-cols-3"
          }`}>
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Slide ${slideNumber} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          {content && (
            <div className="mt-8 text-lg text-purple-100/90 leading-relaxed">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 