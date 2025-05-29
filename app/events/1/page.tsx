"use client";

import Link from "next/link";

export default function YoungMensSummitDetails() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-deep-blue mb-4">MVULANA Young Men's Summit</h1>
        <div className="mb-6 text-lg text-gray-700">
          <div className="mb-2"><span className="font-semibold">Date:</span> July 21, 2025</div>
          <div className="mb-2"><span className="font-semibold">Time:</span> 10:00 AM - 6:00 PM</div>
          <div className="mb-2"><span className="font-semibold">Location:</span> Bethune–Cookman University | Civic Engagement Center, Daytona Beach</div>
        </div>
        <p className="mb-8 text-gray-700">
          A series of interactive workshops focused on developing leadership skills, confidence, communication abilities, and mental health awareness.
        </p>
        <Link
          href="https://docs.google.com/forms/d/1s6WKaR8v282X6FSRkITj-l2_f-_O1k3svdFVbj-Kq3k/preview"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-gold to-burgundy text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-burgundy hover:to-gold"
        >
          Register Now
        </Link>
        <div className="mt-12 text-gray-500 text-sm">
          More details and schedule coming soon.
        </div>
      </div>
    </main>
  );
} 