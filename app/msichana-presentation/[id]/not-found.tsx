import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue via-midnight-blue to-burgundy flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Featured Woman Not Found
        </h2>
        <p className="text-white/70 mb-8 max-w-md">
          The featured woman you're looking for doesn't exist or may have been removed.
        </p>
        <Link 
          href="/msichana-presentation"
          className="inline-flex items-center bg-gradient-to-r from-gold to-burgundy text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-burgundy/20"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Yearbook
        </Link>
      </div>
    </div>
  )
}
