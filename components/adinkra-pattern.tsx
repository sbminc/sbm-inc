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

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
        const randomSize = ["xs", "sm", "md"][Math.floor(Math.random() * 3)] as "xs" | "sm" | "md"
        const randomOpacity = baseOpacity * (Math.random() * 0.5 + 0.5) // Vary opacity slightly

        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <AdinkraSymbol name={randomSymbol} size={randomSize} color={color} opacity={randomOpacity} />
          </div>
        )
      })}
    </div>
  )
}
