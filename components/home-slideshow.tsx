"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/Images/Nov 16th Msichana/group-1.jpg',
  '/Images/Nov 16th Msichana/group-2.jpg',
  '/Images/Nov 16th Msichana/group-3.jpg',
  '/Images/Nov 16th Msichana/group-4.jpg',
  '/Images/Nov 16th Msichana/group-k-1.jpg',
  '/Images/Nov 16th Msichana/group-k-2.jpg',
  '/Images/Nov 16th Msichana/group-k-3.jpg',
  '/Images/Nov 16th Msichana/group-k-4.jpg',
  '/Images/Nov 16th Msichana/group-l-1.jpg',
  '/Images/Nov 16th Msichana/group-l-2.jpg',
  '/Images/Nov 16th Msichana/group-l-3.jpg',
  '/Images/Nov 16th Msichana/group-l-4.jpg',
  '/Images/Nov 16th Msichana/group-l-5.jpg',
  '/Images/Nov 16th Msichana/drsadie-2.jpg',
];

export default function HomeSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
} 