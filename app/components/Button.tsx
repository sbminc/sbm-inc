import { ButtonHTMLAttributes } from "react"
import Link from "next/link"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  href?: string
  external?: boolean
}

export function Button({
  children,
  className = "",
  variant = "primary",
  href,
  external,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-block px-6 py-3 rounded-sm font-light tracking-wide transition-all duration-200"
  
  const variants = {
    primary: "bg-sbm-gold/90 text-sbm-navy hover:bg-sbm-gold",
    secondary: "bg-sbm-navy/90 text-white hover:bg-sbm-navy",
    outline: "border border-sbm-navy/20 text-sbm-navy hover:border-sbm-navy/40 hover:bg-sbm-navy/5"
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
} 