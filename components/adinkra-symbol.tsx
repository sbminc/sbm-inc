import type { HTMLAttributes } from "react"

export type AdinkraSymbolName =
  | "sankofa"
  | "dwennimmen"
  | "adinkrahene"
  | "akoma"
  | "aya"
  | "gye-nyame"
  | "nea-onnim-no-sua-a-ohu"
  | "mate-masie"
  | "bi-nka-bi"
  | "nyansapo"
  | "nkyinkyim"
  | "funtunfunefu-denkyemfunefu"
  | "odo-nnyew-fie-kwan"
  | "bese-saka"

interface AdinkraSymbolProps extends HTMLAttributes<HTMLDivElement> {
  name: AdinkraSymbolName
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  color?: string
  opacity?: number
  withTooltip?: boolean
}

export default function AdinkraSymbol({
  name,
  size = "md",
  color = "currentColor",
  opacity = 1,
  withTooltip = false,
  className,
  ...props
}: AdinkraSymbolProps) {
  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  // Default symbol to use if the requested one isn't found
  const defaultSymbol = {
    viewBox: "0 0 100 100",
    path: "M50,10 C28,10 10,28 10,50 C10,72 28,90 50,90 C72,90 90,72 90,50 C90,28 72,10 50,10 Z M50,30 C39,30 30,39 30,50 C30,61 39,70 50,70 C61,70 70,61 70,50 C70,39 61,30 50,30 Z M50,40 C44.5,40 40,44.5 40,50 C40,55.5 44.5,60 50,60 C55.5,60 60,55.5 60,50 C60,44.5 55.5,40 50,40 Z",
    meaning: "Symbol",
  }

  // More accurate SVG paths for Adinkra symbols
  const symbolData = {
    sankofa: {
      // Bird looking backward symbol
      viewBox: "0 0 100 100",
      path: "M50,10 C30,10 15,25 15,45 C15,65 30,80 50,80 C70,80 85,65 85,45 C85,25 70,10 50,10 Z M50,70 C35,70 25,60 25,45 C25,30 35,20 50,20 C65,20 75,30 75,45 C75,60 65,70 50,70 Z M60,30 C55,30 50,35 50,40 C50,45 55,50 60,50 C65,50 70,45 70,40 C70,35 65,30 60,30 Z M40,40 C35,40 30,45 30,50 C30,55 35,60 40,60 C45,60 50,55 50,50 C50,45 45,40 40,40 Z",
      meaning: "Return and get it - Learn from the past",
    },
    dwennimmen: {
      // Ram's horns symbol
      viewBox: "0 0 100 100",
      path: "M20,50 C20,35 30,20 50,20 C70,20 80,35 80,50 C80,65 70,80 50,80 C30,80 20,65 20,50 Z M30,50 C30,60 35,70 50,70 C65,70 70,60 70,50 C70,40 65,30 50,30 C35,30 30,40 30,50 Z M40,40 C40,35 45,30 50,30 C55,30 60,35 60,40 C60,45 55,50 50,50 C45,50 40,45 40,40 Z M40,60 C40,55 45,50 50,50 C55,50 60,55 60,60 C60,65 55,70 50,70 C45,70 40,65 40,60 Z",
      meaning: "Ram's horns - Humility and strength",
    },
    adinkrahene: {
      // Concentric circles symbol
      viewBox: "0 0 100 100",
      path: "M50,10 C28,10 10,28 10,50 C10,72 28,90 50,90 C72,90 90,72 90,50 C90,28 72,10 50,10 Z M50,30 C39,30 30,39 30,50 C30,61 39,70 50,70 C61,70 70,61 70,50 C70,39 61,30 50,30 Z M50,40 C44.5,40 40,44.5 40,50 C40,55.5 44.5,60 50,60 C55.5,60 60,55.5 60,50 C60,44.5 55.5,40 50,40 Z",
      meaning: "Chief of Adinkra symbols - Leadership and greatness",
    },
    akoma: {
      // Heart symbol
      viewBox: "0 0 100 100",
      path: "M50,80 C50,80 15,55 15,35 C15,20 25,10 40,10 C45,10 50,15 50,20 C50,15 55,10 60,10 C75,10 85,20 85,35 C85,55 50,80 50,80 Z",
      meaning: "Heart - Patience and tolerance",
    },
    aya: {
      // Fern symbol
      viewBox: "0 0 100 100",
      path: "M50,10 L90,50 L50,90 L10,50 L50,10 Z M50,20 L80,50 L50,80 L20,50 L50,20 Z M50,30 L70,50 L50,70 L30,50 L50,30 Z M50,40 L60,50 L50,60 L40,50 L50,40 Z",
      meaning: "Fern - Endurance and resourcefulness",
    },
    "gye-nyame": {
      // Except God symbol
      viewBox: "0 0 100 100",
      path: "M20,20 C30,10 50,10 60,20 C70,30 70,50 60,60 L80,80 C90,90 80,90 70,80 L50,60 C40,70 20,70 10,60 C0,50 0,30 10,20 C20,10 40,10 50,20 L70,40 C75,45 75,55 70,60 C65,65 55,65 50,60 L30,40 C25,35 25,25 30,20 C35,15 45,15 50,20 L60,30 C60,30 60,30 60,30 C60,30 60,30 60,30 L50,20 C45,15 35,15 30,20 C25,25 25,35 30,40 L50,60 C55,65 65,65 70,60 C75,55 75,45 70,40 L50,20 C40,10 20,10 10,20 C0,30 0,50 10,60 C20,70 40,70 50,60 L70,80 C80,90 90,90 80,80 L60,60 C70,50 70,30 60,20 C50,10 30,10 20,20 Z",
      meaning: "Except God - Supremacy of God",
    },
    "nea-onnim-no-sua-a-ohu": {
      // Knowledge symbol
      viewBox: "0 0 100 100",
      path: "M50,10 C30,10 15,25 15,45 C15,65 30,80 50,80 C70,80 85,65 85,45 C85,25 70,10 50,10 Z M50,20 C65,20 75,30 75,45 C75,60 65,70 50,70 C35,70 25,60 25,45 C25,30 35,20 50,20 Z M40,35 L60,35 L60,40 L40,40 L40,35 Z M40,45 L60,45 L60,50 L40,50 L40,45 Z M40,55 L60,55 L60,60 L40,60 L40,55 Z",
      meaning: "He who does not know can know from learning - Knowledge and education",
    },
    "mate-masie": {
      // Wisdom symbol
      viewBox: "0 0 100 100",
      path: "M20,20 L80,20 L80,80 L20,80 L20,20 Z M30,30 L70,30 L70,70 L30,70 L30,30 Z M40,40 L60,40 L60,60 L40,60 L40,40 Z",
      meaning: "What I hear, I keep - Wisdom and knowledge",
    },
    "bi-nka-bi": {
      // Peace symbol
      viewBox: "0 0 100 100",
      path: "M30,30 C20,40 20,60 30,70 C40,80 60,80 70,70 C80,60 80,40 70,30 C60,20 40,20 30,30 Z M40,40 C35,45 35,55 40,60 C45,65 55,65 60,60 C65,55 65,45 60,40 C55,35 45,35 40,40 Z M25,50 L15,50 L15,40 L25,40 L25,50 Z M75,50 L85,50 L85,40 L75,40 L75,50 Z M50,25 L50,15 L40,15 L40,25 L50,25 Z M50,75 L50,85 L40,85 L40,75 L50,75 Z",
      meaning: "No one should bite the other - Peace and harmony",
    },
    nyansapo: {
      // Wisdom knot symbol
      viewBox: "0 0 100 100",
      path: "M50,10 C28,10 10,28 10,50 C10,72 28,90 50,90 C72,90 90,72 90,50 C90,28 72,10 50,10 Z M50,20 C67,20 80,33 80,50 C80,67 67,80 50,80 C33,80 20,67 20,50 C20,33 33,20 50,20 Z M30,30 L70,70 M30,70 L70,30 M20,50 L80,50 M50,20 L50,80",
      meaning: "Wisdom knot - Wisdom, intelligence, and ingenuity",
    },
    nkyinkyim: {
      // Twisting path symbol
      viewBox: "0 0 100 100",
      path: "M10,50 C10,30 30,30 30,50 C30,70 50,70 50,50 C50,30 70,30 70,50 C70,70 90,70 90,50 M10,30 C10,10 30,10 30,30 C30,50 50,50 50,30 C50,10 70,10 70,30 C70,50 90,50 90,30 M10,70 C10,50 30,50 30,70 C30,90 50,90 50,70 C50,50 70,50 70,70 C70,90 90,90 90,70",
      meaning: "Twisting path - Initiative, dynamism, and versatility",
    },
    "funtunfunefu-denkyemfunefu": {
      // Siamese crocodiles symbol
      viewBox: "0 0 100 100",
      path: "M10,50 C10,30 20,20 35,20 C50,20 50,40 50,50 C50,40 50,20 65,20 C80,20 90,30 90,50 C90,70 80,80 65,80 C50,80 50,60 50,50 C50,60 50,80 35,80 C20,80 10,70 10,50 Z M30,40 C25,40 25,45 30,45 C35,45 35,40 30,40 Z M70,40 C65,40 65,45 70,45 C75,45 75,40 70,40 Z",
      meaning: "Siamese crocodiles - Democracy and unity in diversity",
    },
    "odo-nnyew-fie-kwan": {
      // Love never loses its way home
      viewBox: "0 0 100 100",
      path: "M50,10 C30,10 15,25 15,45 C15,65 30,80 50,80 C70,80 85,65 85,45 C85,25 70,10 50,10 Z M50,20 C65,20 75,30 75,45 C75,60 65,70 50,70 C35,70 25,60 25,45 C25,30 35,20 50,20 Z M35,35 C30,40 30,50 35,55 C40,60 50,60 55,55 C60,50 60,40 55,35 C50,30 40,30 35,35 Z",
      meaning: "Love never loses its way home - Power of love",
    },
    "bese-saka": {
      // Bunch of cola nuts
      viewBox: "0 0 100 100",
      path: "M30,30 L70,30 L70,70 L30,70 L30,30 Z M40,40 L60,40 L60,60 L40,60 L40,40 Z M20,20 L40,20 L40,40 L20,40 L20,20 Z M60,20 L80,20 L80,40 L60,40 L60,20 Z M20,60 L40,60 L40,80 L20,80 L20,60 Z M60,60 L80,60 L80,80 L60,80 L60,60 Z",
      meaning: "Bunch of cola nuts - Affluence and abundance",
    },
  }

  // Get the symbol data or use the default if not found
  const symbol = symbolData[name] || defaultSymbol

  return (
    <div className={`${sizeClasses[size]} ${className} group relative`} style={{ opacity }} {...props}>
      <svg viewBox={symbol.viewBox} fill={color} className="w-full h-full">
        <path d={symbol.path} />
      </svg>

      {withTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-deep-blue/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
          <div className="font-bold capitalize">{name.replace(/-/g, " ")}</div>
          <div>{symbol.meaning}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-deep-blue/90"></div>
        </div>
      )}
    </div>
  )
}
