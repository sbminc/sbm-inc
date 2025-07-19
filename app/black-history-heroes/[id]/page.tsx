import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Star, Heart, Award } from "lucide-react"
import AdinkraSymbol from "@/components/adinkra-symbol"
import { heroes } from "@/lib/heroes-data"

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return heroes.map((hero) => ({
    id: hero.id.toString(),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const hero = heroes.find(h => h.id.toString() === params.id)
  
  if (!hero) {
    return {
      title: "Hero Not Found | SBM Inc.",
    }
  }

  return {
    title: `${hero.name} | Black History Heroes | SBM Inc.`,
    description: hero.bio,
    keywords: [hero.name, "black history", "heroes", "legacy", "SBM Inc"],
  }
}

export default function HeroPage({ params }: PageProps) {
  const hero = heroes.find(h => h.id.toString() === params.id)

  if (!hero) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue via-midnight-blue to-burgundy py-20 px-4">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link 
          href="/black-history-heroes"
          className="inline-flex items-center text-gold hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Yearbook
        </Link>
      </div>

      {/* Hero Detail Card */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src={hero.image}
                  alt={hero.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-burgundy/90 text-white px-4 py-2 rounded-lg">
                    <p className="text-sm opacity-80">
                      {hero.birthYear} - {hero.deathYear || "Present"}
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
                <h1 className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {hero.name}
                </h1>
                <p className="text-xl text-white/80 italic">
                  {hero.title}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 max-h-48 overflow-y-auto">
                <p className="text-white/90 leading-relaxed text-lg">
                  {hero.bio}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center">
                  <Award className="mr-2" size={24} />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {hero.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <AdinkraSymbol 
                        name="akoma" 
                        size="sm" 
                        color="#e9b949" 
                        className="mr-3 mt-1 flex-shrink-0" 
                      />
                      <span className="text-white/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to other heroes */}
        <div className="mt-8 text-center">
          <p className="text-white/60 mb-4">Explore other heroes:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {heroes.slice(0, 6).map((otherHero) => (
              <Link
                key={otherHero.id}
                href={`/black-history-heroes/${otherHero.id}`}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  otherHero.id === hero.id
                    ? 'bg-gold text-burgundy'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {otherHero.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 