import AdinkraSymbol from "./adinkra-symbol"

interface LoadingProps {
  text?: string
  size?: "sm" | "md" | "lg"
}

export default function Loading({ text = "Loading...", size = "md" }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin mb-4">
        <AdinkraSymbol name="nkyinkyim" size={size} color="#e9b949" />
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}
