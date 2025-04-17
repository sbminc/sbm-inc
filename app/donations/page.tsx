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
      <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Donations</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
        Your support helps us continue our mission of empowering BIPOC girls in Volusia County through education, mentorship, and community engagement.
      </p>

      <div className="max-w-4xl mx-auto mb-12">
        <Link
          href="https://docs.google.com/document/d/1MV1aF_qLJSvZLlXbZKh8E5_-unYOtUNt_oey_DSCejA/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-card-dark p-8 rounded-lg text-center hover:bg-deep-blue/80 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">View Sponsor Levels</h2>
          <p className="text-lg text-white/80 mb-4">
            Learn about our different sponsorship tiers and how you can make an impact in our community.
          </p>
          <span className="inline-block bg-gradient-to-r from-gold to-orange text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-orange/20 transition-all">
            View Sponsorship Options
          </span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="glass-card-dark p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Monetary Donations</h2>
          <p className="text-white/80 mb-6">
            Your financial support helps us provide educational resources, organize events, and create meaningful programs for our participants.
          </p>
          <Link
            href="https://www.paypal.com/donate/?hosted_button_id=YOUR_PAYPAL_BUTTON_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-gold to-orange text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-orange/20 transition-all"
          >
            Make a Donation
          </Link>
        </div>

        <div className="glass-card-dark p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">In-Kind Donations</h2>
          <p className="text-white/80 mb-6">
            We welcome donations of supplies, materials, and services that support our mission and help us create impactful programs.
          </p>
          <Link
            href="mailto:contact@sbminc.org"
            className="inline-block bg-gradient-to-r from-gold to-orange text-white px-6 py-3 rounded-md hover:shadow-lg hover:shadow-orange/20 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          All donations are tax-deductible. For more information about our programs and how your donation can make a difference, please contact us.
        </p>
      </div>
    </div>
  )
}
