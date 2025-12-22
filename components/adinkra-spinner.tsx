"use client"

import { useState, useEffect } from "react"
import AdinkraSymbol from "./adinkra-symbol"

interface AdinkraSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
}

export default function AdinkraSpinner({ size = "md", color = "#e9b949", className = "" }: AdinkraSpinnerProps) {
  const [currentSymbolIndex, setCurrentSymbolIndex] = useState(0)
  const symbols = ["sankofa", "adinkrahene", "akoma", "dwennimmen", "aya", "gye-nyame"] as const

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSymbolIndex((prev) => (prev + 1) % symbols.length)
    }, 600)

    return () => clearInterval(interval)
  }, [])

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-pulse`}>
        <AdinkraSymbol name={symbols[currentSymbolIndex]} size={size} color={color} />
      </div>
    </div>
  )
}
