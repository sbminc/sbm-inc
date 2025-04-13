import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function DonationsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Support Our Mission</h1>
        <p className="text-center text-lg mb-12">
          Your generous donations help us continue our work empowering BIPOC girls in Volusia County.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>
              Choose an amount or enter a custom donation. All donations are tax-deductible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup defaultValue="25" className="grid grid-cols-3 gap-4">
              <Label
                htmlFor="donation-25"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="25" id="donation-25" className="sr-only" />
                <span className="text-2xl font-bold">$25</span>
              </Label>
              <Label
                htmlFor="donation-50"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="50" id="donation-50" className="sr-only" />
                <span className="text-2xl font-bold">$50</span>
              </Label>
              <Label
                htmlFor="donation-100"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="100" id="donation-100" className="sr-only" />
                <span className="text-2xl font-bold">$100</span>
              </Label>
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <Input id="custom-amount" placeholder="Enter amount" type="number" min="1" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Enter your email address" type="email" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-rose-500 hover:bg-rose-600">Donate Now</Button>
          </CardFooter>
        </Card>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Support</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Volunteer your time and skills</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Sponsor an event or program</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Donate supplies or resources</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Become a mentor</span>
            </li>
          </ul>
          <p className="mt-4">
            For more information on these opportunities, please contact us at{" "}
            <a href="mailto:info@sbminc.org" className="text-rose-500 hover:text-rose-600">
              info@sbminc.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
