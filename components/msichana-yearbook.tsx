"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Award } from "lucide-react"
import { participants } from "@/lib/msichana-participants-data"

export default function MsichanaYearbook() {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Msichana Young Women's Summit
          </h1>
        </div>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Celebrating notable women leaders and trailblazers who inspire the next generation of young women
        </p>
      </div>

      {/* Yearbook Grid - Organized by Categories */}
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Financial Literacy & Empowerment */}
        <div>
          <h3 className="text-3xl font-bold text-gold mb-8 text-center">Financial Literacy & Empowerment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {participants.slice(0, 5).map((participant) => (
              <Link
                key={participant.id}
                href={`/msichana-presentation/${participant.id}`}
                className="group block"
              >
                <div className="relative bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 h-80">
                  {/* Participant Photo */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-burgundy/20 to-deep-blue/20 mx-auto">
                      <Image
                        src={participant.image}
                        alt={participant.name}
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

                  {/* Participant Info */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gold text-sm mb-1 group-hover:text-white transition-colors">
                      {participant.name}
                    </h4>
                    <p className="text-white/60 text-xs line-clamp-3">
                      {participant.bio.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mental Health & Wellness */}
        <div>
          <h3 className="text-3xl font-bold text-gold mb-8 text-center">Mental Health & Wellness</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {participants.slice(5, 12).map((participant) => (
              <Link
                key={participant.id}
                href={`/msichana-presentation/${participant.id}`}
                className="group block"
              >
                <div className="relative bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 h-80">
                  {/* Participant Photo */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-burgundy/20 to-deep-blue/20 mx-auto">
                      <Image
                        src={participant.image}
                        alt={participant.name}
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

                  {/* Participant Info */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gold text-sm mb-1 group-hover:text-white transition-colors">
                      {participant.name}
                    </h4>
                    <p className="text-white/60 text-xs line-clamp-3">
                      {participant.bio.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Politics & Leadership */}
        <div>
          <h3 className="text-3xl font-bold text-gold mb-8 text-center">Politics & Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {participants.slice(12, 17).map((participant) => (
              <Link
                key={participant.id}
                href={`/msichana-presentation/${participant.id}`}
                className="group block"
              >
                <div className="relative bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 h-80">
                  {/* Participant Photo */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-burgundy/20 to-deep-blue/20 mx-auto">
                      <Image
                        src={participant.image}
                        alt={participant.name}
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

                  {/* Participant Info */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gold text-sm mb-1 group-hover:text-white transition-colors">
                      {participant.name}
                    </h4>
                    <p className="text-white/60 text-xs line-clamp-3">
                      {participant.bio.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* STEM & Innovation */}
        <div>
          <h3 className="text-3xl font-bold text-gold mb-8 text-center">STEM & Innovation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {participants.slice(17, 25).map((participant) => (
              <Link
                key={participant.id}
                href={`/msichana-presentation/${participant.id}`}
                className="group block"
              >
                <div className="relative bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10 h-80">
                  {/* Participant Photo */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-burgundy/20 to-deep-blue/20 mx-auto">
                      <Image
                        src={participant.image}
                        alt={participant.name}
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

                  {/* Participant Info */}
                  <div className="text-center">
                    <h4 className="font-semibold text-gold text-sm mb-1 group-hover:text-white transition-colors">
                      {participant.name}
                    </h4>
                    <p className="text-white/60 text-xs line-clamp-3">
                      {participant.bio.substring(0, 80)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Yearbook Footer */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-lg mb-4">
            "Empowering the next generation of leaders"
          </p>
          <div className="flex justify-center space-x-4">
            <Award className="text-gold" size={24} />
            <Star className="text-gold" size={24} />
            <Heart className="text-burgundy" size={24} />
          </div>
          <p className="text-white/40 text-sm mt-4">
            Msichana Young Women's Summit • November 15-16, 2025
          </p>
        </div>
      </div>
    </div>
  )
}
