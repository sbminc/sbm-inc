import type { HTMLAttributes, ReactNode } from "react"
import AdinkraPattern from "../adinkra-pattern"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: "light" | "dark"
  withPattern?: boolean
  patternColor?: string
  patternDensity?: "low" | "medium" | "high"
  patternSymbol?: "dwennimmen" | "aya" | "adinkrahene"
}

export default function GlassCard({
  children,
  className = "",
  variant = "light",
  withPattern = false,
  patternColor = "currentColor",
  patternDensity = "low",
  patternSymbol = "dwennimmen",
  ...props
}: GlassCardProps) {
  const baseClasses =
    variant === "light"
      ? "bg-white/10 backdrop-blur-md border border-white/20"
      : "bg-deep-blue/70 backdrop-blur-md border border-white/10"

  return (
    <div className={`rounded-xl relative overflow-hidden ${baseClasses} ${className}`} {...props}>
      {withPattern && (
        <AdinkraPattern
          color={patternColor}
          baseOpacity={variant === "light" ? 0.05 : 0.08}
          density={patternDensity}
          symbols={[patternSymbol]}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
