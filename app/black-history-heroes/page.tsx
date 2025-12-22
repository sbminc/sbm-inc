import { Metadata } from "next"
import BlackHistoryHeroes from "@/components/black-history-heroes"

export const metadata: Metadata = {
  title: "Black History Heroes | SBM Inc.",
  description: "Celebrating the legacy and contributions of Black history heroes who have shaped our world.",
  keywords: ["black history", "heroes", "legacy", "inspiration", "SBM Inc"],
}

export default function BlackHistoryHeroesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue via-midnight-blue to-burgundy">
      <BlackHistoryHeroes />
    </div>
  )
} 