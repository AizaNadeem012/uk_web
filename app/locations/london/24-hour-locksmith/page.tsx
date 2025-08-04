export const metadata = {
  title: "24 Hour Locksmith London | Round-the-Clock Emergency Service | UK Lock",
  description: "Need a 24 hour locksmith in London? UK Lock provides round-the-clock emergency locksmith services throughout London with rapid response times. Our professional locksmiths are available day and night for all lock emergencies, including lockouts, break-ins, and lock repairs.",
  openGraph: {
    title: "24 Hour Locksmith London | Round-the-Clock Emergency Service",
    description: "UK Lock offers 24/7 locksmith services in London. Available day and night for home, business, and vehicle lockouts.",
    url: "https://www.uklock.co.uk/locations/london/24-hour-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Hour Locksmith London | Round-the-Clock Emergency Service",
    description: "24/7 locksmith services in London by UK Lock. Available day and night for all lock emergencies.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/london/24-hour-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Home, Building, Car, Moon, Sun } from "lucide-react"

export default function HourLocksmithLondonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">24 Hour Locksmith London</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out? Need urgent lock repairs? UK Lock provides professional 24 hour locksmith services throughout London, available day and night, 365 days a year.
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

      {/* 24 Hour Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our 24 Hour Locksmith Services in London</h2>
          
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
                  Locked out of your home in London? Our 24 hour locksmiths can get you back inside quickly and safely at any time of day or night, without damaging your locks or doors.
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
                  24 hour locksmith services for London businesses. We handle office lockouts, security breaches, and urgent lock repairs or replacements any time, day or night.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business security</Badge>
                  <Badge variant="outline">Round-the-clock</Badge>
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
                  Locked your keys in your car in London? Our 24 hour auto locksmiths can unlock your vehicle quickly without causing any damage, no matter what time it is.
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
                  <CardTitle>Emergency Lock Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Broken or damaged locks in London? Our 24 hour locksmiths can repair or replace any type of lock at any time to secure your property immediately.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All lock types</Badge>
                  <Badge variant="outline">Immediate repairs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Cutting & Replacement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost or broken keys? Our 24 hour London locksmiths can cut and program new keys on the spot, any time of day or night, for all types of locks.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">On-site key cutting</Badge>
                  <Badge variant="outline">All key types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Lock Installations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Need new locks installed urgently in London? Our 24 hour locksmiths can install high-security locks at any time to ensure your property is protected.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">High-security options</Badge>
                  <Badge variant="outline">Rapid installation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Day & Night Service Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">True 24 Hour Locksmith Service in London</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Sun className="h-10 w-10 text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold">Daytime Service</h3>
              </div>
              <p className="text-gray-700 mb-4">
                During regular business hours, our 24 hour locksmith team in London provides prompt service for all your lock and key needs. Whether it's a scheduled lock replacement or an unexpected lockout, we're ready to help.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span>Fast response times across London</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span>Full range of locksmith services</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span>Expert security consultations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Moon className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold">Overnight Service</h3>
              </div>
              <p className="text-gray-700 mb-4">
                When most locksmiths are closed, our 24 hour London locksmith service continues operating at full capacity. We understand that lock emergencies don't follow a 9-to-5 schedule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span>Same response times, day or night</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span>No extra charges for night calls</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                  <span>Fully equipped mobile service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for 24 Hour Locksmith Services in London</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Truly 24/7/365 Service</h3>
                <p className="text-gray-700">Our London locksmith service operates 24 hours a day, 7 days a week, 365 days a year. We're available on weekends, bank holidays, and even Christmas Day for your security emergencies.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">30-Minute Response Time</h3>
                <p className="text-gray-700">We aim to reach any location in London within 30 minutes. Our 24 hour locksmiths are strategically positioned throughout the city for quick emergency response at any time.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Licensed & Insured</h3>
                <p className="text-gray-700">All our 24 hour London locksmiths are fully licensed, insured, and DBS checked. We follow industry best practices and adhere to all security regulations.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">Our 24 hour locksmith vans are fully equipped with the latest tools and technology to solve any lock problem quickly and efficiently, at any time of day or night.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* London Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">24 Hour Locksmith Coverage in London</h2>
          
          <p className="text-lg text-center mb-8">
            Our 24 hour locksmith services cover all areas of London, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Central London</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">North London</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">East London</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">South London</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">West London</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Westminster</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Kensington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chelsea</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Camden</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Islington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Hackney</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Tower Hamlets</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">24 Hour Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do you really provide locksmith services 24 hours a day in London?</h3>
              <p className="text-gray-700">Yes, UK Lock provides genuine 24 hour locksmith services throughout London. We operate at full capacity day and night, with no reduction in service quality or response times outside of business hours. Our locksmiths are available at 3 AM just as they are at 3 PM.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Are there extra charges for using your locksmith services at night in London?</h3>
              <p className="text-gray-700">At UK Lock, we maintain transparent pricing for our 24 hour locksmith services in London. While there may be a small additional call-out fee for services between midnight and 6 AM, our core service rates remain the same regardless of the time. We always provide a clear quote before beginning any work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need a 24 Hour Locksmith in London?</h2>
          <p className="text-xl mb-8">
            Don't wait when security is at risk. Our professional 24 hour locksmiths in London are just a phone call away, any time of day or night.
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