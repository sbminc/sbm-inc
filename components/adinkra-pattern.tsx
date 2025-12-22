"use client"

import { useEffect, useState } from "react";
import AdinkraSymbol from "./adinkra-symbol"
import type { AdinkraSymbolName } from "./adinkra-symbol"

interface AdinkraPatternProps {
  className?: string
  color?: string
  baseOpacity?: number
  density?: "low" | "medium" | "high"
  symbols?: AdinkraSymbolName[]
}

export default function AdinkraPattern({
  className = "",
  color = "currentColor",
  baseOpacity = 0.05,
  density = "medium",
  symbols = ["sankofa", "adinkrahene", "akoma", "dwennimmen", "aya", "gye-nyame"],
}: AdinkraPatternProps) {
  const counts = {
    low: 8,
    medium: 15,
    high: 25,
  }
  const count = counts[density]

  const [mounted, setMounted] = useState(false)
  const [randomPattern, setRandomPattern] = useState<{
    symbol: AdinkraSymbolName
    size: "xs" | "sm" | "md"
    opacity: number
    top: number
    left: number
    rotate: number
  }[] | null>(null)

  useEffect(() => {
    setMounted(true)
    // Only generate random Adinkra symbols on the client
    const adinkraSymbols = [
      "fawohodie", "gye-nyame", "sankofa", "duafe", "aya", "akoma", "dwennimmen", "nyame-nti", "nkyinkyim", "osram-ne-nsoromma"
    ]
    const sizes = ["xs", "sm", "md"] as const
    const newSymbols = Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      symbol: adinkraSymbols[Math.floor(Math.random() * adinkraSymbols.length)] as AdinkraSymbolName,
      opacity: Math.random() * 0.3 + 0.2,
      rotate: Math.random() * 360,
    }))
    setRandomPattern(newSymbols)
  }, [count])

  if (!mounted) {
    // Static fallback for SSR: no random Adinkra symbols
    return null
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {randomPattern?.map((item, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            transform: `rotate(${item.rotate}deg)`
          }}
        >
          <AdinkraSymbol name={item.symbol} size={item.size} color={color} opacity={item.opacity} />
        </div>
      ))}
    </div>
  )
}
