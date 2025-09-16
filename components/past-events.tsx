"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/0E5FEECC-BCBD-4558-BE95-5FD2AF618638.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/1DB1BAF3-77B0-45DA-BC25-6C2E768B80CA.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/2CE3C3C0-EB33-4890-A98B-0AB2271E4B6D.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/2FE12CB6-61B2-437F-BE3D-143B23163D51.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/3DB13117-49C2-4085-91E7-1FEE06388DB9(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/3DD80648-4221-4E54-A276-DD195D6ACE3B.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/8F262001-77BD-4B64-BCA4-DDB418BE1A58.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/22EF8BE4-F3B5-40C6-80CF-DBDB77F63361.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/62C1A70E-CF33-4DCF-9462-EB7B09BA9C30(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/75BAC66A-CAA9-451E-8647-9ACD8426B624.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/90C8C786-B0DF-4FFB-B40C-0145D8415261(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/814BB3FB-AC33-42CD-BBD1-8680FF1C30FB.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/6723BE3F-25DD-4E02-8D8A-40F9F4BBE294.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/454977B2-E835-418D-8C93-13E9810C519C.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/A8BF2346-33BC-4736-B6B9-B7CB2B5009C2.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/BBC60DD2-33A3-4737-AE02-888C2690D6B7.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/C8FF1B11-C4F8-4DE1-B6E9-BFB583DD646A.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/C19AD39F-E695-4C20-B46C-99160BFD1816.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/C24FA224-BFD8-45D0-961F-46CDA4ECA54F.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/C7011D7B-0A78-4169-A4BF-8B5A564EDC41.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/C3075638-0179-405F-8130-CE96B222A213.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/drsadie-2.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/ECE7E490-6B96-448D-BE33-8931C8A2EF97.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-1.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-2.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-3.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-4.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-k-1.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-k-2.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-k-3.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-k-4.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-l-1.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-l-2.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-l-3.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-l-4.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/group-l-5.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/imagejpeg_0.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/imagejpeg_0(1).jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/imagejpeg_0(2).jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/imagejpeg_0(3).jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0070.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0071.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0072.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0073.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0074.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0075.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0084.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0085(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0087.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0088.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0089(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0090.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0091.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0092.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0093(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0094.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0095.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0096.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0097.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0098.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0099.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0100.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0101.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0102.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0103.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0104.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0105.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0106.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0107.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0108.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0109.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0110.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0111.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_0191.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1056.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1057.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1058.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1063.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1081.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1082.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1091.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_1128.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_6177.heic.jpeg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_9416.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_9433.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_9434.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/IMG_9435.jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/RenderedImage(1).jpg",
  "https://sbminc.blob.core.windows.net/sbm-container/nov-16th-msichana/Resized_20241116_103036_1731771145496.jpeg"
];

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
    file: "/powerpoints/BIPOC Womens History Presentation (1).pptx"
  },
  {
    title: "Msichana Sponsor Levels",
    file: "/powerpoints/Msichana Sponsor Levels.docx"
  },
  {
    title: "Mvulana Young Men's Summit Presentation",
    file: "/powerpoints/mvulana-summit.pdf"
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

  const [currentMvulanaSlide, setCurrentMvulanaSlide] = useState(0);
  const [baseUrl, setBaseUrl] = useState('https://sbm-inc.vercel.app');
  const prevMvulanaSlide = () => setCurrentMvulanaSlide((currentMvulanaSlide - 1 + 48) % 48);
  const nextMvulanaSlide = () => setCurrentMvulanaSlide((currentMvulanaSlide + 1) % 48);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin);
    }
  }, []);

  return (
    <section className="mb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-blue">Past Events</h2>
        
        {/* Mvulana Young Men's Summit Presentation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Mvulana Young Men's Summit – July 21, 2025</h3>
          <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-white mb-8">
            <button onClick={prevMvulanaSlide} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Previous slide">
              &#8592;
            </button>
            <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
              <iframe
                src={`${baseUrl}/powerpoints/mvulana-summit.pdf#page=${currentMvulanaSlide + 1}&view=FitH&toolbar=0&navpanes=0&scrollbar=0&zoom=85`}
                className="w-full h-full border-0"
                title="Mvulana Summit Presentation"
                key={currentMvulanaSlide}
              />
            </div>
            <button onClick={nextMvulanaSlide} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Next slide">
              &#8594;
            </button>
          </div>
          <div className="text-center">
            <span className="text-gray-600 font-medium">Slide {currentMvulanaSlide + 1} of 48</span>
          </div>
        </div>

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
              className="w-full h-[400px] object-contain bg-black"
            />
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-gold text-burgundy rounded-full p-2 shadow transition-colors" aria-label="Next slide">
              &#8594;
            </button>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 