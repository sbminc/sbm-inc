import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import Link from "next/link"

export default function DonationsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Donations</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        WE NEED YOUR HELP. Please consider becoming a sponsor to support our mission of empowering BIPOC girls in Volusia County.
      </p>

      <div className="max-w-4xl mx-auto mb-12">
        <Link
          href="https://docs.google.com/document/d/1MV1aF_qLJSvZLlXbZKh8E5_-unYOtUNt_oey_DSCejA/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-rose-50 p-8 rounded-lg text-center hover:bg-rose-100 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-4">View Sponsor Levels</h2>
          <p className="text-lg text-gray-600 mb-4">
            Learn about our different sponsorship tiers and how you can make an impact.
          </p>
          <span className="inline-block bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors">
            View Sponsorship Options
          </span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Monetary Donations</h2>
          <p className="text-gray-600 mb-6">
            Your financial support helps us provide educational resources, organize events, and create meaningful programs for our participants.
          </p>
          <Link
            href="#"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-md hover:bg-rose-600 transition-colors"
          >
            Make a Donation
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">In-Kind Donations</h2>
          <p className="text-gray-600 mb-6">
            We welcome donations of supplies, materials, and services that support our mission and help us create impactful programs.
          </p>
          <Link
            href="#"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
