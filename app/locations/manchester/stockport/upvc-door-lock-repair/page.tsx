export const metadata = {
  title: "UPVC Door Lock Repair Stockport | Fast Lock Fixes | UK Lock",
  description: "Expert UPVC door lock repair in Stockport by UK Lock. We fix jammed mechanisms, broken multipoint locks, misaligned doors, and handle problems. Same-day service available with 20-30 minute response times across Stockport. All repairs come with a 12-month guarantee.",
  openGraph: {
    title: "UPVC Door Lock Repair Stockport | Fast Lock Fixes",
    description: "Professional UPVC door lock repairs in Stockport. We fix all types of UPVC door lock problems with same-day service and a 12-month guarantee.",
    url: "https://www.uklock.co.uk/locations/manchester/stockport/upvc-door-lock-repair",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPVC Door Lock Repair Stockport | Fast Lock Fixes",
    description: "Professional UPVC door lock repairs in Stockport. We fix all types of UPVC door lock problems with same-day service and a 12-month guarantee.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/stockport/upvc-door-lock-repair",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench as Tool, Lock, Wrench, CheckCircle, Building, Home, Settings } from "lucide-react"

export default function UPVCDoorLockRepairStockportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">UPVC Door Lock Repair in Stockport</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Having trouble with your UPVC door lock in Stockport? UK Lock provides fast, reliable UPVC door lock repair services throughout Stockport. Our expert locksmiths can fix all types of UPVC door lock problems, from jammed mechanisms to broken multipoint locks.
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

      {/* Common UPVC Door Lock Problems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Common UPVC Door Lock Problems We Fix in Stockport</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Jammed Mechanisms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Is your UPVC door lock mechanism jammed or stiff? Our Stockport locksmiths can lubricate, repair, or replace the mechanism to restore smooth operation to your door.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Common issue</Badge>
                  <Badge variant="outline">Quick fix available</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Turning Issues</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Having trouble turning the key in your UPVC door lock in Stockport? We can diagnose and fix issues with the lock cylinder, whether it needs cleaning, lubrication, or replacement.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Cylinder problems</Badge>
                  <Badge variant="outline">Same-day service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Tool className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Multipoint Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dealing with a broken multipoint lock on your UPVC door in Stockport? Our specialists can repair or replace the entire multipoint locking system to restore security to your door.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Complex repair</Badge>
                  <Badge variant="outline">All brands covered</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Misaligned Doors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Is your UPVC door misaligned in Stockport, causing lock problems? Our technicians can adjust the door hinges and strikers to ensure proper alignment and smooth locking.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Adjustment service</Badge>
                  <Badge variant="outline">Prevents future issues</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Handle Failures</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experiencing issues with your UPVC door handle in Stockport? Whether it's loose, broken, or not engaging the lock properly, we can repair or replace it to restore functionality.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Handle replacement</Badge>
                  <Badge variant="outline">Various styles available</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Cylinder Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Need a UPVC door lock cylinder replacement in Stockport? We can upgrade your cylinder to a high-security anti-snap model for improved protection against break-ins.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Security upgrade</Badge>
                  <Badge variant="outline">Anti-snap options</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our UPVC Door Lock Repair Process */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our UPVC Door Lock Repair Process in Stockport</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Diagnosis Call</h3>
              <p className="text-gray-700">
                Contact our Stockport UPVC specialists and describe the issues you're experiencing with your door lock. We'll provide initial advice and arrange a visit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. On-Site Assessment</h3>
              <p className="text-gray-700">
                Our Stockport locksmith will examine your UPVC door lock, identify the root cause of the problem, and explain the repair options available to you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Professional Repair</h3>
              <p className="text-gray-700">
                With your approval, we'll carry out the necessary repairs or replacements using high-quality parts that match your existing UPVC door system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing & Guarantee</h3>
              <p className="text-gray-700">
                We'll thoroughly test the repaired lock to ensure smooth operation and provide a 12-month guarantee on all our UPVC door lock repairs in Stockport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Service Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Same-Day UPVC Door Lock Repair in Stockport</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                When your UPVC door lock isn't working properly, it can compromise your home's security and convenience. That's why UK Lock offers same-day UPVC door lock repair services throughout Stockport.
              </p>
              <p className="text-lg mb-6">
                Our mobile locksmith vans are fully equipped with a comprehensive range of UPVC door lock parts and specialized tools, allowing us to complete most repairs on the spot during our first visit.
              </p>
              <p className="text-lg mb-6">
                We understand that a malfunctioning door lock is more than just an inconvenience—it's a security concern. Our Stockport locksmiths prioritize rapid response times, typically reaching you within 20-30 minutes of your call in emergency situations.
              </p>
              <p className="text-lg">
                Whether you're struggling with a jammed mechanism, broken multipoint lock, or misaligned door, our experienced technicians can diagnose and fix the problem efficiently, restoring your door's security and functionality without unnecessary delays.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Same-Day Service Includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fast response times across Stockport (20-30 minutes for emergencies)</span>
                </li>
                <li className="flex items-start">
                  <Tool className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Comprehensive on-site repairs for all UPVC door lock types</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Mobile vans stocked with genuine UPVC door lock parts</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Security upgrades and anti-snap cylinder installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>12-month guarantee on all repairs and parts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UPVC Door Lock Brands Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Brands We Service in Stockport</h2>
          
          <p className="text-lg text-center mb-8">
            Our Stockport locksmiths are experienced in repairing and replacing UPVC door locks from all major manufacturers, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Yale</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">ERA</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Avocet</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">GU</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Maco</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Fullex</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Winkhaus</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">KFV</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Lockmaster</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Fuhr</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Roto</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Millenco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for UPVC Door Lock Repair in Stockport</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Tool className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">UPVC Specialists</h3>
                <p className="text-gray-700">Our Stockport locksmiths specialize in UPVC door lock repairs, with extensive training and experience in all types of UPVC door mechanisms.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-700">We offer same-day UPVC door lock repair services throughout Stockport, with emergency response times of 20-30 minutes in most cases.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                <p className="text-gray-700">We use only genuine or high-quality equivalent parts for all our UPVC door lock repairs in Stockport, ensuring durability and reliability.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">12-Month Guarantee</h3>
                <p className="text-gray-700">All our UPVC door lock repairs in Stockport come with a comprehensive 12-month guarantee on both parts and labor for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stockport Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Repair Coverage in Stockport</h2>
          
          <p className="text-lg text-center mb-8">
            Our UPVC door lock repair services cover all areas of Stockport and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stockport Town Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bramhall</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Cheadle</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Cheadle Hulme</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Hazel Grove</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Marple</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Reddish</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bredbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Romiley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Heaton Moor</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Heaton Chapel</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Offerton</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Repair FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does it cost to repair a UPVC door lock in Stockport?</h3>
              <p className="text-gray-700">The cost of repairing a UPVC door lock in Stockport varies depending on the specific issue and parts required. Minor repairs such as lubrication or adjustments typically start from £79, while complete multipoint lock replacements may cost between £120-£250 depending on the brand and complexity. We always provide a clear, no-obligation quote before beginning any work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you repair my UPVC door lock the same day in Stockport?</h3>
              <p className="text-gray-700">Yes, we offer same-day UPVC door lock repair services throughout Stockport. In most cases, our mobile locksmiths carry a comprehensive range of parts and can complete repairs on the spot during our first visit. For emergency situations, we aim to reach you within 20-30 minutes of your call to restore your door's security as quickly as possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need UPVC Door Lock Repair in Stockport?</h2>
          <p className="text-xl mb-8">
            Don't struggle with a faulty UPVC door lock. Our Stockport specialists are ready to help with same-day repairs and a 12-month guarantee.
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