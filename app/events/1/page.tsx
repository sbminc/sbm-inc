"use client";

import Link from "next/link";
import Image from "next/image";
import YoungMensSummitForm from "@/components/young-mens-summit-form";
import Navbar from "@/components/navbar";
import PdfSlideshow from "@/components/pdf-slideshow";

export default function YoungMensSummitDetails() {
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
          
          {/* Mvulana Logo Background - Right Side */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Logos/mvulana-logo-1.png"
                alt="Mvulana Logo Background"
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
            {/* PDF Slideshow moved below download buttons */}
            {/* Event Title and Details */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-gold via-orange to-burgundy bg-clip-text text-transparent drop-shadow-lg">
                MVULANA Young Men's Summit
              </h1>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="text-gold text-2xl mb-2">📅</div>
                  <div className="text-white font-semibold text-lg">Date</div>
                  <div className="text-white/90">July 21, 2025</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="text-gold text-2xl mb-2">⏰</div>
                  <div className="text-white font-semibold text-lg">Time</div>
                  <div className="text-white/90">10:00 AM - 4:00 PM</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                  <div className="text-gold text-2xl mb-2">📍</div>
                  <div className="text-white font-semibold text-lg">Location</div>
                  <div className="text-white/90">Center for Civic Engagement<br/>on the campus of Bethune-Cookman University<br/>Daytona Beach</div>
                </div>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-white/95 text-lg leading-relaxed drop-shadow-md">
                  A series of interactive workshops focused on developing leadership skills, confidence, 
                  communication abilities, and mental health awareness. Join us for a transformative 
                  experience designed to empower young men and build strong community connections.
                </p>
              </div>
            </div>

            {/* Event Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 bg-gradient-to-r from-gold to-orange bg-clip-text text-transparent drop-shadow-lg">
                Event Schedule
              </h2>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-gold/20 text-burgundy">
                        <th className="px-4 py-3 border-b border-gold/40 font-bold text-left">START TIME</th>
                        <th className="px-4 py-3 border-b border-gold/40 font-bold text-left">FINISH TIME</th>
                        <th className="px-4 py-3 border-b border-gold/40 font-bold text-left">TOPIC</th>
                        <th className="px-4 py-3 border-b border-gold/40 font-bold text-left">PRESENTER/FACILITATOR(S)</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">10:00</td>
                        <td className="px-4 py-3 border-b border-white/10">10:15 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">WELCOME/ PRAYER</td>
                        <td className="px-4 py-3 border-b border-white/10">DR. McCONNER & MR. MCKINNEY/ BISHOP TRIPLETT</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">10:15</td>
                        <td className="px-4 py-3 border-b border-white/10">10:30 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">ICE BREAKER</td>
                        <td className="px-4 py-3 border-b border-white/10">MR. JERMAINE MCKINNEY</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">10:30 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">11:10 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">BREAK OUT GROUPS (1&2) ROTATION</td>
                        <td className="px-4 py-3 border-b border-white/10">GROUP FACILITATORS</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">11:10 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">11:20 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">PARTICIPANTS BREAK</td>
                        <td className="px-4 py-3 border-b border-white/10">GROUP PARTICIPANTS</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">11:30 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">12:00 AM</td>
                        <td className="px-4 py-3 border-b border-white/10">MAYOR HENRY PRESENTATION</td>
                        <td className="px-4 py-3 border-b border-white/10">MAYOR OF DAYTONA BEACH FLORIDA THE HONORABLE DERRICK L. HENRY</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">12:00 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">12:30 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">LUNCH BREAK</td>
                        <td className="px-4 py-3 border-b border-white/10">COMMITTEE MEMBERS/ OMEGA PSI PHI</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">12:00 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">12:30 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">MEET KOFI ZULU OF ADUKICKS</td>
                        <td className="px-4 py-3 border-b border-white/10">KOFI ZULU</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">12:30 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">1:10 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">BREAK OUT GROUPS (3 & 4) ROTATION</td>
                        <td className="px-4 py-3 border-b border-white/10">GROUP FACILITATORS</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">12:30 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">1:10 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">GABRIEL HANNANS - PARENTS SEMINAR: GENTLE PARENTING</td>
                        <td className="px-4 py-3 border-b border-white/10">GABRIEL HANNANS</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">1:10 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">1:40 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">POWER OF THE TIE PRESENTATION</td>
                        <td className="px-4 py-3 border-b border-white/10">MR. MAYNER & MR. JERMAINE MCKINNEY</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">1:40 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">2:20 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">BLACK HISTORY PRESENTATION</td>
                        <td className="px-4 py-3 border-b border-white/10">DR. HEADLEY WHITE</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">1:40 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">2:20 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">BREAK OUT GROUPS (5 & 6) ROTATION</td>
                        <td className="px-4 py-3 border-b border-white/10">GROUP FACILITATORS</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3 border-b border-white/10">2:20 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">2:50 PM</td>
                        <td className="px-4 py-3 border-b border-white/10">PARTICIPANTS FEEDBACK/ PRESENTATION OF CERTIFICATES & CLOSING CEREMONY</td>
                        <td className="px-4 py-3 border-b border-white/10">GROUP PARTICIPANTS/ DR. McCONNER & MR. MCKINNEY</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Registration Form - More Transparent */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <YoungMensSummitForm />
            </div>
            
            {/* Backup Registration Link */}
            <div className="mt-8 text-center">
              <p className="mb-4 text-white/80 font-medium drop-shadow-md">
                If you have trouble submitting the form above, you can use our backup registration form:
              </p>
              <Link
                href="https://docs.google.com/forms/d/1s6WKaR8v282X6FSRkITj-l2_f-_O1k3svdFVbj-Kq3k/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gold to-orange text-deep-blue px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:from-orange hover:to-gold transition-all duration-300 transform hover:scale-105"
              >
                Open Google Form (Backup)
              </Link>
            </div>
            
            {/* Presentation Download */
            }
            <div className="mt-10 text-center">
              <a
                href="/powerpoints/mvulana-summit.pptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gold to-orange text-deep-blue px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:from-orange hover:to-gold transition-all duration-300 transform hover:scale-105"
              >
                View/Download Presentation (PPTX)
              </a>
              <div className="mt-4">
                <a
                  href="/powerpoints/mvulana-summit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-white/20 transition"
                >
                  View/Download PDF Version
                </a>
              </div>
              <p className="mt-3 text-white/70 text-sm">Use the PPTX for editing; PDF is best for viewing.</p>
            </div>

            {/* PDF slideshow moved to Past Events section */}

            <div className="mt-12 text-center text-white/60 text-sm drop-shadow-md">
              Join us for this transformative experience!
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 