export const metadata = {
  title: "Locksmith Near Me in Manchester | Fast Local Service | UK Lock",
  description: "Looking for a 'locksmith near me' in Manchester? UK Lock provides fast, reliable locksmith services throughout Manchester with quick response times. Our local locksmiths are just minutes away for all your residential, commercial, and automotive lock needs.",
  openGraph: {
    title: "Locksmith Near Me in Manchester | Fast Local Service",
    description: "UK Lock offers local locksmith services in Manchester. Fast response for home, business, and vehicle lock needs.",
    url: "https://www.uklock.co.uk/locations/manchester/locksmith-near-me",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locksmith Near Me in Manchester | Fast Local Service",
    description: "Local locksmith services in Manchester by UK Lock. Fast response guaranteed.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/locksmith-near-me",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Home, Building, Car } from "lucide-react"

export default function LocksmithNearMeManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Locksmith Near Me in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need a locksmith in Manchester? UK Lock provides fast, reliable locksmith services with local technicians just minutes away from your location.
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

      {/* Local Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Local Locksmith Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Residential Locksmith</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Looking for a locksmith near me in Manchester for your home? We handle all residential lock services including lockouts, lock repairs, replacements, and security upgrades.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Home security</Badge>
                  <Badge variant="outline">Local service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Locksmith</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Need a locksmith near me in Manchester for your business? Our local commercial locksmiths provide expert services for offices, shops, and all business premises.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business security</Badge>
                  <Badge variant="outline">Local experts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Auto Locksmith</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Searching for an auto locksmith near me in Manchester? Our mobile locksmiths come to your location for car lockouts, key replacement, and ignition repairs.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Mobile service</Badge>
                  <Badge variant="outline">All vehicle types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Locksmith</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Looking for an emergency locksmith near me in Manchester? We provide 24/7 emergency services with fast response times throughout the Manchester area.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">24/7 service</Badge>
                  <Badge variant="outline">Fast response</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Cutting & Duplication</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Need a locksmith near me in Manchester for key cutting? We provide professional key cutting and duplication services for all types of keys, including high-security options.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All key types</Badge>
                  <Badge variant="outline">Precision cutting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Security Upgrades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Searching for a locksmith near me in Manchester for security improvements? We offer expert advice and installation of high-security locks and systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Security consultation</Badge>
                  <Badge variant="outline">Local expertise</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose a Local Locksmith Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose a Local Locksmith in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Faster Response Times</h3>
                <p className="text-gray-700">When you search for a "locksmith near me" in Manchester, you want someone who can arrive quickly. Our local locksmiths can reach most Manchester locations within 20-30 minutes.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Local Knowledge</h3>
                <p className="text-gray-700">Our Manchester locksmiths know the area well, ensuring they can navigate efficiently to your location without delays, even during rush hour or in less familiar neighborhoods.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Community Trust</h3>
                <p className="text-gray-700">As a local Manchester locksmith service, we've built a reputation for reliability and quality within the community. Check our reviews from your neighbors who have used our services.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              {/* Replaced Tool icon with Wrench icon from lucide-react */}
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Equipped Vans</h3>
                <p className="text-gray-700">
                  Our local locksmith vans in Manchester are fully stocked with all the tools and parts needed to solve your lock problems on the first visit, without delays.
                  <br />
                  <span className="text-sm text-gray-500">
                    ہماری مقامی لاکسمتھ وینز مانچسٹر میں مکمل طور پر ساز و سامان سے لیس ہیں تاکہ آپ کے لاک کے مسائل پہلی ہی وزٹ پر بغیر کسی تاخیر کے حل کیے جا سکیں۔
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Locksmith Near Me Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            When you search for a "locksmith near me" in Manchester, UK Lock has you covered. We provide services throughout Manchester and surrounding areas, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Manchester City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Salford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stockport</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rusholme</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Prestwich</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Eccles</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stretford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Altrincham</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Sale</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Locksmith Near Me FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can a locksmith near me in Manchester arrive?</h3>
              <p className="text-gray-700">At UK Lock, we aim to reach any location in Manchester within 20-30 minutes of your call. Our local locksmiths are strategically positioned throughout the city to ensure the fastest possible response times when you search for a "locksmith near me."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I know if a locksmith near me in Manchester is reliable?</h3>
              <p className="text-gray-700">When searching for a "locksmith near me" in Manchester, look for established companies with good reviews, proper licensing, and transparent pricing. UK Lock is fully licensed and insured, with hundreds of positive reviews from Manchester residents and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need a Locksmith Near You in Manchester?</h2>
          <p className="text-xl mb-8">
            Don't wait when you need a local locksmith. Our professional Manchester locksmiths are just minutes away from your location.
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