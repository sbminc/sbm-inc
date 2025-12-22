import AdinkraSymbol from "./adinkra-symbol"

export default function AdinkraSection() {
  const symbols = [
    {
      name: "sankofa" as const,
      description:
        "Learn from the past to build for the future. This symbol represents the importance of learning from history.",
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
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">
            Our <span className="text-gold">Cultural Symbols</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We incorporate Adinkra symbols from West African tradition to represent our values and principles. These
            symbols have been used for centuries to convey traditional wisdom, aspects of life, and human behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {symbols.map((symbol) => (
            <div
              key={symbol.name}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <AdinkraSymbol name={symbol.name} size="xl" color="#e9b949" className="mb-4" />
                <h3 className="text-xl font-bold mb-2 text-deep-blue capitalize">{symbol.name.replace(/-/g, " ")}</h3>
                <p className="text-gray-700 text-center">{symbol.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
