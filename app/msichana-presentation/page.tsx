"use client";

import Image from "next/image";
import MsichanaYearbook from "@/components/msichana-yearbook";
import { participants } from "@/lib/msichana-participants-data";

export default function MsichanaPresentation() {
  // Check if we have actual participant data (more than just placeholder data)
  const hasRealData = participants.length > 2 || !participants[0]?.name.includes("Sample");

  if (hasRealData) {
  // Show the yearbook layout when we have real data
  return (
    <main className="min-h-screen bg-gradient-to-b from-deep-blue via-midnight-blue to-burgundy">
      <MsichanaYearbook />
    </main>
  );
  }

  // Show placeholder layout when we don't have real data yet
  return (
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
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-gold via-orange to-burgundy bg-clip-text text-transparent drop-shadow-lg">
                MSICHANA Young Women's Summit
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-md">
                Presentation
              </h2>
              <p className="text-white/95 text-lg leading-relaxed drop-shadow-md max-w-2xl mx-auto">
                Welcome to the Msichana Young Women's Summit presentation. 
                Content is being prepared and will be available soon.
              </p>
            </div>

            {/* Yearbook Preview Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl mb-8">
              <div className="text-center mb-8">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-gold to-orange rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Yearbook-Style Presentation
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We're creating a beautiful yearbook-style presentation featuring photos and bios 
                    of our Msichana Young Women's Summit participants, similar to our Black History Heroes section.
                  </p>
                </div>

                {/* Preview Grid - Placeholder Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 h-48">
                      {/* Placeholder Photo */}
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-burgundy/20 to-deep-blue/20 mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gold/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      
                      {/* Placeholder Info */}
                      <div className="text-center">
                        <div className="h-3 bg-gold/30 rounded mb-2 mx-2"></div>
                        <div className="h-2 bg-white/20 rounded mb-1 mx-1"></div>
                        <div className="h-2 bg-white/20 rounded mx-3"></div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="relative">
                        <div className="absolute -top-16 -right-2">
                          <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="text-gold text-3xl mb-3">📸</div>
                    <h4 className="text-white font-semibold text-lg mb-2">Photos & Bios</h4>
                    <p className="text-white/70 text-sm">
                      Individual participant photos with inspiring biographical information
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="text-gold text-3xl mb-3">📖</div>
                    <h4 className="text-white font-semibold text-lg mb-2">Yearbook Style</h4>
                    <p className="text-white/70 text-sm">
                      Beautiful grid layout celebrating each participant's journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <p className="text-white/70 text-sm mb-4">
                For questions about this presentation, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:info@sbm-inc.org" 
                  className="text-gold hover:text-orange transition-colors font-medium"
                >
                  info@sbm-inc.org
                </a>
                <span className="hidden sm:block text-white/40">•</span>
                <a 
                  href="tel:+1234567890" 
                  className="text-gold hover:text-orange transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
