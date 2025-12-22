"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import YoungWomensSummitForm from "@/components/young-womens-summit-form";

export default function YoungWomensSummitDetails() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Logos - Fixed Wallpaper Style */}
        <div className="fixed inset-0 bg-gradient-to-br from-deep-blue via-burgundy to-midnight-blue">
          {/* SBM Logo Background - Left Side */}
          <div className="absolute left-0 top-0 w-1/2 h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Logos/SBM-Logo-4.png"
                alt="SBM Logo Background"
                fill
                className="object-contain opacity-40"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>

          {/* Msichana Logo Background - Right Side */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Msichana-Logo-2.png"
                alt="Msichana Logo Background"
                fill
                className="object-contain opacity-40"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>

          {/* Subtle Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/40 via-transparent to-burgundy/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 py-12 pt-32">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            {/* Event Title and Intro */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-gold via-orange to-burgundy bg-clip-text text-transparent drop-shadow-lg">
                MSICHANA Young Women's Summit
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-white/95 text-lg leading-relaxed drop-shadow-md">
                  A two-day experience designed to empower young women through leadership, confidence,
                  wellness, and community connection.
                </p>
              </div>
            </div>

            {/* Two-Day Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                <div className="text-gold text-2xl mb-2">📅 Day 1</div>
                <div className="text-white font-semibold text-lg">Saturday, Nov. 15</div>
                <div className="text-white/90 mt-2">Time: 10:00 AM - 3:00 PM</div>
                <div className="text-white/90 mt-2">Location: Yvonne Scarlett Golden Center</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                <div className="text-gold text-2xl mb-2">📅 Day 2</div>
                <div className="text-white font-semibold text-lg">Sunday, Nov. 16</div>
                <div className="text-white/90 mt-2">Time: 1:00 PM - 4:00 PM</div>
                <div className="text-white/90 mt-2">Location: Bethune–Cookman University | Civic Engagement Center</div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <YoungWomensSummitForm />
            </div>

            <div className="mt-12 text-center text-white/60 text-sm drop-shadow-md">
              We look forward to seeing you there!
        </div>
        </div>
      </div>
    </main>
    </>
  );
} 