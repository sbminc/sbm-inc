import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import AdinkraSymbol from "@/components/adinkra-symbol"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue via-midnight-blue to-burgundy py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/black-history-heroes"
            className="inline-flex items-center text-gold hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Yearbook
          </Link>
        </div>

        {/* Error Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="flex justify-center mb-6">
            <AdinkraSymbol name="sankofa" size="lg" color="#e9b949" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Hero Not Found
          </h1>
          
          <p className="text-xl text-white/80 mb-8">
            The hero you're looking for doesn't exist in our yearbook.
          </p>
          
          <Link
            href="/black-history-heroes"
            className="inline-flex items-center bg-gold text-burgundy px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
          >
            Return to Yearbook
          </Link>
        </div>
      </div>
    </div>
  )
} 