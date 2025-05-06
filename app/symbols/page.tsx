import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdinkraSymbol from "@/components/adinkra-symbol"
import SectionDivider from "@/components/section-divider"

export default function SymbolsPage() {
  const symbols = [
    {
      name: "sankofa" as const,
      description:
        "Return and get it - Learn from the past. This symbol represents the importance of learning from history.",
    },
    {
      name: "adinkrahene" as const,
      description: "The chief of Adinkra symbols, representing leadership, greatness, and charisma.",
    },
    {
      name: "akoma" as const,
      description: "The heart symbol, representing patience, goodwill, and tolerance.",
    },
    {
      name: "dwennimmen" as const,
      description: "The ram's horns, symbolizing humility together with strength, wisdom, and learning.",
    },
    {
      name: "aya" as const,
      description: "The fern, representing endurance, resourcefulness, and defiance against difficulties.",
    },
    {
      name: "gye-nyame" as const,
      description: "Except for God, symbolizing the supremacy of God and the deep faith of the Akan people.",
    },
    {
      name: "nea-onnim-no-sua-a-ohu" as const,
      description:
        "He who does not know can know from learning - symbolizing knowledge, education, and lifelong learning.",
    },
    {
      name: "mate-masie" as const,
      description: "What I hear, I keep - symbolizing wisdom, knowledge, and prudence.",
    },
    {
      name: "bi-nka-bi" as const,
      description: "No one should bite the other - symbolizing peace, harmony, and avoiding conflict.",
    },
    {
      name: "nyansapo" as const,
      description: "Wisdom knot - symbolizing wisdom, intelligence, ingenuity, and patience.",
    },
    {
      name: "nkyinkyim" as const,
      description: "Twisting path - symbolizing initiative, dynamism, versatility, and adaptability to life's journey.",
    },
    {
      name: "funtunfunefu-denkyemfunefu" as const,
      description: "Siamese crocodiles - symbolizing democracy, unity in diversity, and the importance of cooperation.",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">
              Adinkra <span className="text-gold">Symbols</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Adinkra symbols are visual representations of concepts and aphorisms developed by the Akan people of
              Ghana. Each symbol has a unique meaning and is used to convey traditional wisdom, aspects of life, or
              human behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {symbols.map((symbol) => (
              <div
                key={symbol.name}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  <AdinkraSymbol name={symbol.name} size="xl" color="#e9b949" className="mb-6" />
                  <h3 className="text-xl font-bold mb-2 text-deep-blue capitalize">{symbol.name.replace(/-/g, " ")}</h3>
                  <p className="text-gray-700 text-center">{symbol.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto">
              These symbols are integrated throughout our website to represent our values and mission. Hover over any
              symbol to learn more about its meaning and significance.
            </p>
          </div>
        </div>
      </div>

      <SectionDivider />
      <Footer />
    </main>
  )
}
