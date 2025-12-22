import AdinkraSymbol from "./adinkra-symbol"
import type { AdinkraSymbolName } from "./adinkra-symbol"

interface SectionDividerProps {
  symbol?: AdinkraSymbolName
  color?: string
  className?: string
  withTooltip?: boolean
}

export default function SectionDivider({
  symbol = "aya",
  color = "#e9b949",
  className = "",
  withTooltip = true,
}: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-24 md:w-40"></div>
      <AdinkraSymbol name={symbol} size="md" color={color} className="mx-4" withTooltip={withTooltip} />
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-24 md:w-40"></div>
    </div>
  )
}
