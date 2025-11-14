import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Heart, Award, Target, Quote } from "lucide-react"
import { getParticipantById } from "@/lib/msichana-participants-data"
import Navbar from "@/components/navbar"

interface PageProps {
  params: {
    id: string
  }
}

export default function FeaturedWomanPage({ params }: PageProps) {
  const featuredWoman = getParticipantById(parseInt(params.id))

  if (!featuredWoman) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-deep-blue via-midnight-blue to-burgundy py-20 px-4">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto mb-8">
          <Link 
            href="/msichana-presentation"
            className="inline-flex items-center text-gold hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Yearbook
          </Link>
        </div>

        {/* Featured Woman Detail Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Image Section */}
              <div className="relative">
                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <Image
                    src={featuredWoman.image}
                    alt={featuredWoman.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-burgundy/90 text-white px-4 py-2 rounded-lg">
                      <p className="text-sm opacity-80">
                        Featured Leader & Trailblazer
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4">
                  <Star className="text-gold" size={32} />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <Heart className="text-burgundy" size={28} />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {featuredWoman.name}
                  </h1>
                  <p className="text-gold text-xl mb-1">Featured Leader & Trailblazer</p>
                </div>

                {/* Bio */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-gold mb-3 flex items-center">
                    <Award className="mr-2" size={20} />
                    About {featuredWoman.name.split(' ')[0]}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {featuredWoman.bio}
                  </p>
                </div>

                {/* Achievements */}
                {featuredWoman.achievements && featuredWoman.achievements.length > 0 && (
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-gold mb-3 flex items-center">
                      <Star className="mr-2" size={20} />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {featuredWoman.achievements.map((achievement, index) => (
                        <li key={index} className="text-white/90 flex items-start">
                          <span className="text-gold mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Goals */}
                {featuredWoman.goals && featuredWoman.goals.length > 0 && (
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-gold mb-3 flex items-center">
                      <Target className="mr-2" size={20} />
                      Impact & Legacy
                    </h3>
                    <ul className="space-y-2">
                      {featuredWoman.goals.map((goal, index) => (
                        <li key={index} className="text-white/90 flex items-start">
                          <span className="text-gold mr-2">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Favorite Quote */}
                {featuredWoman.favoriteQuote && (
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-gold mb-3 flex items-center">
                      <Quote className="mr-2" size={20} />
                      Inspiring Quote
                    </h3>
                    <blockquote className="text-white/90 italic text-lg">
                      "{featuredWoman.favoriteQuote}"
                    </blockquote>
                  </div>
                )}

                {/* Interests */}
                {featuredWoman.interests && featuredWoman.interests.length > 0 && (
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-gold mb-3">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredWoman.interests.map((interest, index) => (
                        <span 
                          key={index}
                          className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
