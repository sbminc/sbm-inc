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

  const [randomPattern, setRandomPattern] = useState<{
    symbol: AdinkraSymbolName
    size: "xs" | "sm" | "md"
    opacity: number
    top: number
    left: number
    rotate: number
  }[] | null>(null)

  useEffect(() => {
    const arr = Array.from({ length: count }).map(() => ({
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: ["xs", "sm", "md"][Math.floor(Math.random() * 3)] as "xs" | "sm" | "md",
      opacity: baseOpacity * (Math.random() * 0.5 + 0.5),
      top: Math.random() * 100,
      left: Math.random() * 100,
      rotate: Math.random() * 360,
    }))
    setRandomPattern(arr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, baseOpacity, symbols.join(",")])

  if (!randomPattern) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {randomPattern.map((item, i) => (
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
