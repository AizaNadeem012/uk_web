export const metadata = {
  title: "UPVC Door Lock Repair Leeds | Fast & Reliable Service | UK Lock",
  description: "Need UPVC door lock repair in Leeds? UK Lock provides fast, professional UPVC door lock repair services throughout Leeds. Our expert locksmiths can fix jammed, broken, or faulty UPVC door locks with same-day service and competitive pricing.",
  openGraph: {
    title: "UPVC Door Lock Repair Leeds | Fast & Reliable Service",
    description: "UK Lock offers professional UPVC door lock repair services in Leeds. Expert technicians, same-day service, and competitive pricing.",
    url: "https://www.uklock.co.uk/locations/leeds/upvc-door-lock-repair",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPVC Door Lock Repair Leeds | Fast & Reliable Service",
    description: "Professional UPVC door lock repair services in Leeds by UK Lock. Fast response guaranteed.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/leeds/upvc-door-lock-repair",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Home, Building, Lock } from "lucide-react"

export default function UPVCDoorLockRepairLeedsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">UPVC Door Lock Repair Leeds</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Having issues with your UPVC door lock in Leeds? UK Lock provides fast, professional repair services for all types of UPVC door lock problems throughout Leeds and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
              <a href="https://wa.me/447309903243" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +44 7309 903243
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://wa.me/447936755530" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +44 7936 755530
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* UPVC Door Lock Problems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Common UPVC Door Lock Problems We Fix in Leeds</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Jammed UPVC Door Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Is your UPVC door lock in Leeds jammed or stiff? Our locksmiths can diagnose and fix jammed mechanisms, ensuring smooth operation without needing a full replacement.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Non-destructive repair</Badge>
                  <Badge variant="outline">Same-day service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Turning Issues</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Having trouble turning the key in your UPVC door lock in Leeds? We can fix difficult key turning problems, often caused by misalignment or internal wear.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Mechanism adjustment</Badge>
                  <Badge variant="outline">Key extraction</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Multipoint Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Multipoint locking system failed on your UPVC door in Leeds? Our specialists can repair or replace faulty multipoint mechanisms to restore security.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All brands</Badge>
                  <Badge variant="outline">Expert repair</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Misaligned UPVC Doors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Is your UPVC door in Leeds misaligned, causing lock problems? We can adjust the door and frame alignment to ensure proper locking and prevent future issues.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Door adjustment</Badge>
                  <Badge variant="outline">Preventative care</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Handle Mechanism Failures</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  UPVC door handle loose or broken in Leeds? We can repair or replace faulty handle mechanisms to restore proper function to your door.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Handle repair</Badge>
                  <Badge variant="outline">Mechanism replacement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Lock Cylinder Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Issues with the lock cylinder in your UPVC door in Leeds? We can repair or replace faulty cylinders with high-security options for better protection.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Anti-snap cylinders</Badge>
                  <Badge variant="outline">Security upgrade</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our UPVC Door Lock Repair Process */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our UPVC Door Lock Repair Process in Leeds</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">
                Call or message us about your UPVC door lock problem in Leeds. We'll ask a few questions to understand the issue and provide an initial assessment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. On-Site Inspection</h3>
              <p className="text-gray-700">
                Our Leeds UPVC door lock specialist will arrive at your property, examine the door and lock mechanism, and identify the exact cause of the problem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                {/* Tool icon replaced with Wrench to fix missing import */}
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Repair Solution</h3>
              <p className="text-gray-700">
                We'll explain the issue and recommend the most cost-effective repair solution for your UPVC door lock in Leeds, providing a clear quote before proceeding.
                <br />
                ہم مسئلہ کی وضاحت کریں گے اور آپ کے یو پی وی سی دروازے کے لاک کے لیے سب سے مؤثر مرمت کا حل تجویز کریں گے، اور کام شروع کرنے سے پہلے واضح قیمت فراہم کریں گے۔
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Professional Repair</h3>
              <p className="text-gray-700">
                Our technician will complete the UPVC door lock repair efficiently, test the mechanism thoroughly, and ensure everything works perfectly before leaving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for UPVC Door Lock Repair in Leeds</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">We understand that UPVC door lock problems in Leeds can leave your property vulnerable. That's why we aim to reach you within 30-60 minutes of your call for urgent repairs.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">UPVC Door Specialists</h3>
                <p className="text-gray-700">Our Leeds locksmiths are specifically trained in UPVC door mechanisms and locks, with extensive experience repairing all brands and models of UPVC door hardware.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-700">All our UPVC door lock repairs in Leeds come with a 12-month guarantee. If any issues arise with our workmanship or parts, we'll fix it free of charge.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Equipped Vans</h3>
                <p className="text-gray-700">Our mobile workshops carry a comprehensive range of UPVC door parts and specialized tools, allowing us to complete most repairs in Leeds on the first visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Repair Coverage in Leeds</h2>
          
          <p className="text-lg text-center mb-8">
            Our UPVC door lock repair services cover all areas of Leeds and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Leeds City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Headingley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Roundhay</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chapel Allerton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Moortown</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Horsforth</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Pudsey</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Morley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Armley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Beeston</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bramley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rothwell</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Repair FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does it cost to repair a UPVC door lock in Leeds?</h3>
              <p className="text-gray-700">The cost of UPVC door lock repair in Leeds typically ranges from £80 to £150, depending on the specific issue, parts required, and complexity of the repair. Minor adjustments and simple repairs are at the lower end of the scale, while complete multipoint lock replacements may cost more. We always provide a clear, no-obligation quote before beginning any work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you repair my UPVC door lock in Leeds today?</h3>
              <p className="text-gray-700">Yes, in most cases we can provide same-day UPVC door lock repair service in Leeds. We prioritize security issues and aim to reach you quickly, typically within 30-60 minutes for urgent cases. Our vans carry a comprehensive range of UPVC door parts, allowing us to complete most repairs on the first visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need UPVC Door Lock Repair in Leeds?</h2>
          <p className="text-xl mb-8">
            Don't struggle with a faulty UPVC door lock. Our professional locksmiths in Leeds are just a phone call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
              <a href="https://wa.me/447309903243" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +44 7309 903243
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://wa.me/447936755530" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +44 7936 755530
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}