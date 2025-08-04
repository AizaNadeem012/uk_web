export const metadata = {
  title: "Emergency Locksmith in Birmingham | 24/7 Lockout Service | UK Lock",
  description: "Need an emergency locksmith in Birmingham? UK Lock provides 24/7 emergency locksmith services in Birmingham with fast response times. Our professional locksmiths can help with lockouts, break-ins, and all urgent lock problems. Call now for immediate assistance.",
  openGraph: {
    title: "Emergency Locksmith in Birmingham | 24/7 Lockout Service",
    description: "UK Lock offers 24/7 emergency locksmith services in Birmingham. Fast response for home, business, and vehicle lockouts.",
    url: "https://www.uklock.co.uk/locations/birmingham/emergency-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith in Birmingham | 24/7 Lockout Service",
    description: "24/7 emergency locksmith services in Birmingham by UK Lock. Fast response guaranteed.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/birmingham/emergency-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Home, Building, Car } from "lucide-react"

export default function EmergencyLocksmithBirminghamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Emergency Locksmith in Birmingham</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out? Break-in? Broken key? UK Lock provides fast, reliable 24/7 emergency locksmith services throughout Birmingham and surrounding areas.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Services in Birmingham</h2>
          
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
                  Locked out of your home in Birmingham? Our emergency locksmiths can get you back inside quickly and safely, without damaging your locks or doors.
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
                  <CardTitle>Commercial Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Emergency locksmith services for Birmingham businesses. We handle office lockouts, security breaches, and urgent lock repairs or replacements.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business security</Badge>
                  <Badge variant="outline">Rapid response</Badge>
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
                  Locked your keys in your car in Birmingham? Our emergency auto locksmiths can unlock your vehicle quickly without causing any damage.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All vehicle types</Badge>
                  <Badge variant="outline">Damage-free entry</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Break-In Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Been a victim of a break-in in Birmingham? Our emergency locksmiths can secure your property quickly with lock repairs or replacements.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Rapid security</Badge>
                  <Badge variant="outline">Lock upgrades</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Key Extraction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Key broken in the lock? Our Birmingham emergency locksmiths can extract broken keys and provide replacements on the spot.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Specialist tools</Badge>
                  <Badge variant="outline">On-site key cutting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Lock Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Damaged or malfunctioning locks in Birmingham? Our emergency locksmiths can repair or replace any type of lock to secure your property.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All lock types</Badge>
                  <Badge variant="outline">Fast repairs</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Emergency Locksmith Services in Birmingham</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Response</h3>
                <p className="text-gray-700">Our Birmingham emergency locksmiths are available 24 hours a day, 7 days a week, including holidays. We understand that lockouts and security issues don't follow a schedule.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">We aim to reach any location in Birmingham within 30 minutes. Our mobile locksmith vans are strategically positioned throughout the city for quick emergency response.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Licensed & Insured</h3>
                <p className="text-gray-700">All our Birmingham emergency locksmiths are fully licensed, insured, and DBS checked. We follow industry best practices and adhere to all security regulations.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">We use the latest locksmith tools and technology to solve your emergency lock problems quickly and efficiently, minimizing damage and costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Birmingham Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Coverage in Birmingham</h2>
          
          <p className="text-lg text-center mb-8">
            Our emergency locksmith services cover all areas of Birmingham and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Birmingham City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Edgbaston</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Selly Oak</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Harborne</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Moseley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Kings Heath</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Sutton Coldfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Solihull</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Perry Barr</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Erdington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Handsworth</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Aston</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can an emergency locksmith reach me in Birmingham?</h3>
              <p className="text-gray-700">At UK Lock, we aim to reach any location in Birmingham within 30 minutes of your call. Our emergency locksmiths are strategically positioned throughout the city to ensure the fastest possible response times.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you provide emergency locksmith services in Birmingham at night?</h3>
              <p className="text-gray-700">Yes, our emergency locksmith service in Birmingham operates 24 hours a day, 7 days a week. We understand that lockouts and security emergencies can happen at any time, so we're always available to help, even in the middle of the night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need an Emergency Locksmith in Birmingham?</h2>
          <p className="text-xl mb-8">
            Don't wait when security is at risk. Our professional emergency locksmiths in Birmingham are just a phone call away.
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