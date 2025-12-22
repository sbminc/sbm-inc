"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Award, ArrowLeft } from "lucide-react"
import AdinkraSymbol from "./adinkra-symbol"
import { heroes } from "@/lib/heroes-data"

export default function BlackHistoryHeroes() {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-6">
          <AdinkraSymbol name="sankofa" size="lg" color="#e9b949" className="mr-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-gold mb-4">
            Black History Heroes
          </h1>
          <AdinkraSymbol name="sankofa" size="lg" color="#e9b949" className="ml-4" />
        </div>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Celebrating the legacy and contributions of extraordinary individuals who have shaped our world
        </p>
        <div className="flex justify-center mt-6">
          <AdinkraSymbol name="adinkrahene" size="md" color="#e9b949" className="mr-2" />
          <AdinkraSymbol name="akoma" size="md" color="#e9b949" className="mr-2" />
          <AdinkraSymbol name="dwennimmen" size="md" color="#e9b949" />
        </div>
      </div>

      {/* Yearbook Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Yearbook Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gold mb-2">Legacy & Achievement</h2>
            <p className="text-white/70">Celebrating Black History Heroes</p>
            <div className="w-32 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {heroes.map((hero) => (
              <Link
                key={hero.id}
                href={`/black-history-heroes/${hero.id}`}
                className="group"
              >
                <div className="relative bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 h-80">
                  {/* Hero Photo */}
                  <div className="relative mb-3">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-burgundy/20 to-deep-blue/20 mx-auto">
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2">
                      <Star className="text-gold" size={16} />
                    </div>
                    <div className="absolute -bottom-2 -left-2">
                      <Heart className="text-burgundy" size={14} />
                    </div>
                  </div>

                  {/* Hero Info */}
                  <div className="text-center">
                    <h3 className="font-semibold text-gold text-sm mb-1 group-hover:text-white transition-colors">
                      {hero.name}
                    </h3>
                    <p className="text-white/60 text-xs mb-2">
                      {hero.title}
                    </p>
                    <div className="text-white/40 text-xs">
                      {hero.birthYear} - {hero.deathYear || "Present"}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Yearbook Footer */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm">
              "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly."
            </p>
            <p className="text-white/40 text-xs mt-1">- Langston Hughes</p>
          </div>
        </div>
      </div>
    </div>
  )
} 