"use client"
import AdinkraSymbol from "./adinkra-symbol"

interface NkyinkyimSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
}

export default function NkyinkyimSpinner({ size = "md", color = "#e9b949", className = "" }: NkyinkyimSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`animate-spin`}>
        <AdinkraSymbol name="nkyinkyim" size={size} color={color} />
      </div>
    </div>
  )
}
