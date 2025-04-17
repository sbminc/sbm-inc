import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16"
  }

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        <Image
          src="/sbm-logo.jpg"
          alt="SBM Inc. Logo"
          fill
          className="object-cover rounded-full"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-sbm-navy font-bold text-xl">SBM Inc.</span>
          <span className="text-sbm-orange text-sm">Sacrifice. Believe. Manifest.</span>
        </div>
      )}
    </Link>
  )
} 