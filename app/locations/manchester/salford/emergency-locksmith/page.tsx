export const metadata = {
  title: "Emergency Locksmith Salford | 24/7 Lockout Service | UK Lock",
  description: "Need an emergency locksmith in Salford? UK Lock provides 24/7 emergency locksmith services throughout Salford, Manchester. Our mobile locksmiths can reach you within 20-30 minutes for residential, commercial, and automotive lockouts. Fast, reliable, and affordable emergency locksmith service.",
  openGraph: {
    title: "Emergency Locksmith Salford | 24/7 Lockout Service",
    description: "24/7 emergency locksmith services in Salford with 20-30 minute response times. Residential, commercial & auto lockouts.",
    url: "https://www.uklock.co.uk/locations/manchester/salford/emergency-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith Salford | 24/7 Lockout Service",
    description: "24/7 emergency locksmith services in Salford with 20-30 minute response times. Residential, commercial & auto lockouts.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/salford/emergency-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, AlertTriangle, CheckCircle, Building, Home, Car } from "lucide-react"

export default function EmergencyLocksmithSalfordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Emergency Locksmith in Salford</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out in Salford? UK Lock provides 24/7 emergency locksmith services with fast response times. Our mobile locksmiths can reach you within 20-30 minutes anywhere in Salford.
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

      {/* Emergency Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Services in Salford</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Residential Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked out of your home in Salford? Our emergency locksmiths can quickly gain entry to your property using non-destructive techniques, minimizing damage to your locks and doors.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Non-destructive entry</Badge>
                  <Badge variant="outline">24/7 service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Can't access your business premises in Salford? Our emergency locksmiths can help you regain entry quickly, minimizing disruption to your business operations.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business priority</Badge>
                  <Badge variant="outline">Minimal downtime</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Vehicle Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked your keys in your car in Salford? Our emergency auto locksmiths can open your vehicle without damage and provide replacement keys if needed.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All vehicle types</Badge>
                  <Badge variant="outline">On-site service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Key Extraction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Broken key stuck in your lock in Salford? Our emergency locksmiths can extract the broken key and provide a replacement key on the spot.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Specialized tools</Badge>
                  <Badge variant="outline">Key replacement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>

                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Lock Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dealing with a malfunctioning lock in Salford? Our emergency locksmiths can repair or replace your damaged locks on the spot, restoring your security.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">On-site repairs</Badge>
                  <Badge variant="outline">All lock types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Security Upgrades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Been a victim of a break-in in Salford? Our emergency locksmiths can quickly upgrade your locks and security systems to prevent future incidents.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">High-security locks</Badge>
                  <Badge variant="outline">Immediate installation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fast Response Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Fast Emergency Response in Salford</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                When you're facing a lock emergency in Salford, every minute counts. That's why UK Lock prioritizes rapid response times for all emergency locksmith calls in the Salford area.
              </p>
              <p className="text-lg mb-6">
                Our emergency locksmiths are strategically positioned throughout Salford and the Greater Manchester area, allowing us to reach most locations within 20-30 minutes of your call.
              </p>
              <p className="text-lg mb-6">
                We understand that being locked out of your home, business, or vehicle is stressful, which is why we operate 24 hours a day, 7 days a week, including weekends and bank holidays. No matter when your emergency occurs, we're ready to help.
              </p>
              <p className="text-lg">
                Our mobile locksmith vans are fully equipped with all the tools and parts needed to handle any emergency locksmith situation on the spot, eliminating delays and ensuring your problem is solved as quickly as possible.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Emergency Response Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>20-30 minute average response time in Salford</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Available 24/7, 365 days a year</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile workshops</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Trained emergency locksmith specialists</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Complete coverage of all Salford areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Process in Salford</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Emergency Call</h3>
              <p className="text-gray-700">
                Contact our Salford emergency locksmith team via phone or WhatsApp. Describe your situation and provide your location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Rapid Dispatch</h3>
              <p className="text-gray-700">
                We'll dispatch the nearest emergency locksmith to your Salford location, typically arriving within 20-30 minutes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. On-Site Solution</h3>
              <p className="text-gray-700">
                Our emergency locksmith will assess the situation and use specialized tools to resolve your lock emergency on the spot.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Security Restored</h3>
              <p className="text-gray-700">
                Once your immediate emergency is resolved, we'll ensure your property is secure and offer advice to prevent future lockouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Emergency Entry in Salford</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Non-Destructive Entry</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Preserves your existing locks and doors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Saves money on replacement hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Faster resolution of your emergency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintains the security integrity of your property</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No unsightly damage to repair afterward</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                At UK Lock, our Salford emergency locksmiths specialize in non-destructive entry techniques. This means we can gain access to your property without causing damage to your locks, doors, or windows in most situations.
              </p>
              <p className="text-lg mb-6">
                Using specialized tools and techniques such as lock picking, bump keys, and bypass methods, our skilled emergency locksmiths can open most standard locks without drilling or breaking them.
              </p>
              <p className="text-lg mb-6">
                Non-destructive entry is particularly important in emergency situations, as it allows you to continue using your existing locks after regaining access, saving you the additional cost and time of lock replacement.
              </p>
              <p className="text-lg">
                Even in cases where more advanced high-security locks are involved, our Salford emergency locksmiths are trained to use the least destructive method possible to gain entry, minimizing damage and costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Emergency Locksmith Services in Salford</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-700">Our emergency locksmith service in Salford is available around the clock, including nights, weekends, and bank holidays.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">With locksmiths positioned throughout Salford, we can reach you within 20-30 minutes in most emergency situations.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Equipped Vans</h3>
                <p className="text-gray-700">Our emergency locksmith vans in Salford carry all the tools and parts needed to solve your lock emergency on the first visit.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-700">All our Salford emergency locksmiths are fully licensed, insured, and DBS checked for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salford Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Coverage in Salford</h2>
          
          <p className="text-lg text-center mb-8">
            Our emergency locksmith services cover all areas of Salford and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Salford City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Eccles</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Swinton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Pendlebury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Walkden</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Worsley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Irlam</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Cadishead</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Little Hulton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Boothstown</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ordsall</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Broughton</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can an emergency locksmith reach me in Salford?</h3>
              <p className="text-gray-700">Our emergency locksmiths can typically reach most locations in Salford within 20-30 minutes of your call. We have mobile locksmith units strategically positioned throughout Salford and the Greater Manchester area to ensure the fastest possible response times in emergency situations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does an emergency locksmith cost in Salford?</h3>
              <p className="text-gray-700">The cost of emergency locksmith services in Salford varies depending on the specific situation, time of day, and complexity of the job. Our emergency callout fees start from £79, with additional charges based on the work required. We always provide a clear quote before beginning any work, so you know exactly what to expect with no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need an Emergency Locksmith in Salford?</h2>
          <p className="text-xl mb-8">
            Don't wait when you're locked out. Our emergency locksmiths in Salford are ready to help 24/7.
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