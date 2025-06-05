import AdinkraSymbol from "./adinkra-symbol"

interface LoadingProps {
  text?: string
  size?: "sm" | "md" | "lg"
}

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-deep-blue/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-burgundy border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </div>
  )
}
