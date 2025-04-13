import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">SBM Inc.</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </Link>
            <Link href="/highlights" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Highlights
            </Link>
            <Link href="/donations" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Donations
            </Link>
            <Link href="/our-leaders" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Our Leaders
            </Link>
            <div className="relative">
              <button className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60">
                Events <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Group of young people"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] text-center px-4 py-24 text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              SACRIFICING, BELIEVING, MANIFESTING
            </h1>
            <div className="w-24 h-1 bg-rose-400 mt-8"></div>
          </div>
        </section>

        <section className="py-16 px-4 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-500 mb-12">THE VISION</h2>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              To educate, empower, and inspire BIPOC girls from the ages of 11-18 years old in Volusia County.
            </p>

            <div className="mt-16 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="BIPOC event setup with banner and decorative balloons"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-rose-100 py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Educate</h3>
                <p>Providing educational resources and opportunities for personal and academic growth.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Empower</h3>
                <p>
                  Building confidence and leadership skills in young BIPOC girls to help them reach their full
                  potential.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Inspire</h3>
                <p>Creating a supportive community that encourages creativity, ambition, and positive change.</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-rose-500 hover:bg-rose-600">Get Involved</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SBM Inc.</h3>
              <p className="text-gray-300">Sacrificing, Believing, Manifesting</p>
              <p className="text-gray-300 mt-2">Volusia County, FL</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/highlights" className="text-gray-300 hover:text-white">
                    Highlights
                  </Link>
                </li>
                <li>
                  <Link href="/donations" className="text-gray-300 hover:text-white">
                    Donations
                  </Link>
                </li>
                <li>
                  <Link href="/our-leaders" className="text-gray-300 hover:text-white">
                    Our Leaders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="text-gray-300 mb-4">Stay updated on our events and initiatives.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SBM Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
