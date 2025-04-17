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
  const baseStyles = "inline-block px-6 py-3 rounded-md font-semibold transition-colors"
  
  const variants = {
    primary: "bg-sbm-gold text-sbm-navy hover:bg-sbm-orange hover:text-white",
    secondary: "bg-sbm-navy text-white hover:bg-sbm-orange",
    outline: "border-2 border-sbm-navy text-sbm-navy hover:bg-sbm-navy hover:text-white"
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