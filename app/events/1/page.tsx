"use client";

import Link from "next/link";
import YoungMensSummitForm from "@/components/young-mens-summit-form";
import Navbar from "@/components/navbar";

export default function YoungMensSummitDetails() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 pt-32">
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

          {/* Event Schedule Table */}
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full border border-gold/40 rounded-xl text-sm md:text-base">
              <thead>
                <tr className="bg-gold/20 text-burgundy">
                  <th className="px-3 py-2 border-b border-gold/40 font-bold">START TIME</th>
                  <th className="px-3 py-2 border-b border-gold/40 font-bold">FINISH TIME</th>
                  <th className="px-3 py-2 border-b border-gold/40 font-bold">TOPIC</th>
                  <th className="px-3 py-2 border-b border-gold/40 font-bold">PRESENTER/FACILITATOR(S)</th>
                </tr>
              </thead>
              <tbody className="text-deep-blue">
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">8:00 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">10:00 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">COMMITTEE ARRIVAL FOR SETUP</td>
                  <td className="px-3 py-2 border-b border-gold/20">ALL COMMITTEE MEMBERS</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">10:00</td>
                  <td className="px-3 py-2 border-b border-gold/20">10:20 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">ARRIVAL OF BOYS/YOUNG MEN PARTICIPNTS</td>
                  <td className="px-3 py-2 border-b border-gold/20">REGISTRATION & ENTERTAINMENT COMMITTEE</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">10:30</td>
                  <td className="px-3 py-2 border-b border-gold/20">10:35 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">WELCOME</td>
                  <td className="px-3 py-2 border-b border-gold/20">DR. SADDIE McCONNER</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">10:35 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">10:45 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">OPENING PRAYER</td>
                  <td className="px-3 py-2 border-b border-gold/20">REV. DR. KENNEDY JACOBS</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">10:45 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">11:00 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">BLACK HISTORY PIECE</td>
                  <td className="px-3 py-2 border-b border-gold/20">DR. HEADLEY WHITE</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">11:00 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">11:15 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">AFFIRMATIONS - YOUNG, BLACK, & GIFTED</td>
                  <td className="px-3 py-2 border-b border-gold/20">DR. JERMANIE MCKINNEY</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">11:15 AM</td>
                  <td className="px-3 py-2 border-b border-gold/20">12:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">POWER OF THE TIE</td>
                  <td className="px-3 py-2 border-b border-gold/20">DISTINGUISHED GENTLEMEN OF APA & OPP</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">12:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">1:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">LUNCH BREAK</td>
                  <td className="px-3 py-2 border-b border-gold/20">ORGANIZING COMMITTEE</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">1:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">5:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">WORKSHOPS/CLINICS (REFER TO ATTACHMENT FOR WORKSHOP ROTATION)</td>
                  <td className="px-3 py-2 border-b border-gold/20">WORKSHOP/CLINIC FACILITATORS</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">5:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">5:30 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">MEET & GREET</td>
                  <td className="px-3 py-2 border-b border-gold/20">ALL PARTICIPANTS/COMMUNITY PARTNERS/ ORGANIZING COMMITTEE</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 border-b border-gold/20">5:30 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">6:00 PM</td>
                  <td className="px-3 py-2 border-b border-gold/20">CLOSING & WORDS OF APPRECIATION TO OUR COMMUNITY PARTNERS/FINAL REMARKS</td>
                  <td className="px-3 py-2 border-b border-gold/20">DR. SADDIE McCONNER</td>
                </tr>
              </tbody>
            </table>
          </div>

          <YoungMensSummitForm />
          <div className="mt-6 text-center">
            <p className="mb-2 text-gray-600 font-medium">If you have trouble submitting the form above, you can use our backup registration form:</p>
            <Link
              href="https://docs.google.com/forms/d/1s6WKaR8v282X6FSRkITj-l2_f-_O1k3svdFVbj-Kq3k/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow hover:from-gray-600 hover:to-gray-400 transition-all duration-300"
            >
              Open Google Form (Backup)
            </Link>
          </div>
          <div className="mt-12 text-gray-500 text-sm">
            More details and schedule coming soon.
          </div>
        </div>
      </main>
    </>
  );
} 