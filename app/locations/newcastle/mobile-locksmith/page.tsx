export const metadata = {
  title: "Mobile Locksmith Newcastle | On-Site Locksmith Services | UK Lock",
  description: "UK Lock provides professional mobile locksmith services throughout Newcastle. Our fully-equipped vans bring the locksmith shop to your location for fast, on-site solutions to all your lock and key problems. Available 24/7 for residential, commercial, and automotive locksmith needs across Newcastle.",
  openGraph: {
    title: "Mobile Locksmith Newcastle | On-Site Locksmith Services",
    description: "Professional mobile locksmith services in Newcastle. Our fully-equipped vans bring the locksmith to you for fast, on-site solutions.",
    url: "https://www.uklock.co.uk/locations/newcastle/mobile-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Locksmith Newcastle | On-Site Locksmith Services",
    description: "Professional mobile locksmith services in Newcastle. Our fully-equipped vans bring the locksmith to you for fast, on-site solutions.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/newcastle/mobile-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, Car, CheckCircle, Building, Home } from "lucide-react"

export default function MobileLocksmithNewcastlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Car className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Mobile Locksmith in Newcastle</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            UK Lock brings professional locksmith services directly to your location throughout Newcastle. Our fully-equipped mobile locksmith vans provide fast, on-site solutions for all your residential, commercial, and automotive lock and key needs.
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

      {/* Mobile Locksmith Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mobile Locksmith Services in Newcastle</h2>
          
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
                  Our mobile locksmith service in Newcastle provides on-site solutions for all your home lock and key needs, including lock installations, repairs, and emergency lockouts.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Lock installation</Badge>
                  <Badge variant="outline">Home lockouts</Badge>
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
                  Our Newcastle mobile locksmiths provide on-site commercial security solutions, including master key systems, high-security locks, and access control systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Master key systems</Badge>
                  <Badge variant="outline">Access control</Badge>
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
                  Our mobile auto locksmith service in Newcastle provides on-site car key replacement, programming, and vehicle lockout solutions wherever you're stranded.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Car key replacement</Badge>
                  <Badge variant="outline">Vehicle lockouts</Badge>
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
                  Our 24/7 mobile emergency locksmith service in Newcastle ensures you're never left stranded, with rapid response times throughout the city and surrounding areas.
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
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>On-Site Key Cutting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our mobile locksmith vans in Newcastle are equipped with key-cutting machines, allowing us to cut most types of keys on-site for your convenience.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Duplicate keys</Badge>
                  <Badge variant="outline">Replacement keys</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Lock Repairs & Upgrades</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our mobile locksmiths in Newcastle can repair or upgrade your locks on-site, improving your security without the need to visit a shop.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Lock repairs</Badge>
                  <Badge variant="outline">Security upgrades</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of Mobile Locksmith Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Benefits of Our Mobile Locksmith Service in Newcastle</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Convenience</h3>
                <p className="text-gray-700">Our mobile locksmith service in Newcastle comes to your location, saving you time and hassle. No need to travel to a shop or transport damaged locks.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully-Equipped Vans</h3>
                <p className="text-gray-700">Our mobile locksmith vans in Newcastle are equipped with all the tools, parts, and key-cutting machines needed to solve your lock and key problems on the spot.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-700">With mobile locksmiths positioned throughout Newcastle, we can reach you quickly in emergencies, minimizing wait times when you're locked out.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">On-Site Solutions</h3>
                <p className="text-gray-700">Our Newcastle mobile locksmiths can assess your security needs in context, providing tailored solutions based on your specific property and requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mobile Locksmith Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mobile Locksmith Process in Newcastle</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">
                Call or WhatsApp our Newcastle mobile locksmith team with details about your lock or key issue and your location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Quick Dispatch</h3>
              <p className="text-gray-700">
                We'll dispatch the nearest mobile locksmith in Newcastle to your location, providing you with an estimated arrival time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. On-Site Service</h3>
              <p className="text-gray-700">
                Our mobile locksmith will arrive with a fully-equipped van and assess your situation before providing the appropriate solution on-site.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Problem Solved</h3>
              <p className="text-gray-700">
                We'll resolve your lock or key issue on the spot, provide any necessary advice, and ensure everything is working perfectly before we leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mobile Locksmith Fleet Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mobile Locksmith Fleet in Newcastle</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                UK Lock operates a fleet of fully-equipped mobile locksmith vans throughout Newcastle and the surrounding areas. Each van is essentially a complete locksmith shop on wheels, allowing our technicians to provide comprehensive services at your location.
              </p>
              <p className="text-lg mb-6">
                Our mobile locksmith vans in Newcastle are stocked with a wide range of locks, keys, parts, and specialized tools to handle any locksmith job on-site. This includes key-cutting machines, programming equipment for electronic car keys, lock picking tools, and security hardware.
              </p>
              <p className="text-lg mb-6">
                With our mobile locksmith service, there's no need to remove locks and take them to a shop, or to make multiple trips for parts. We bring everything needed to solve your lock and key problems in a single visit, saving you time and hassle.
              </p>
              <p className="text-lg">
                Our Newcastle mobile locksmiths are strategically positioned throughout the city to ensure rapid response times, particularly for emergency lockout situations when you need help quickly.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Mobile Vans Are Equipped With:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Key cutting machines for on-site key duplication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Car key programming equipment for all major brands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Wide selection of residential and commercial locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Non-destructive entry tools for lockouts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Security hardware for immediate installations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock Mobile Locksmith in Newcastle</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Technicians</h3>
                <p className="text-gray-700">Our Newcastle mobile locksmiths are fully trained, licensed, and experienced in all aspects of residential, commercial, and automotive locksmithing.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-700">Our mobile locksmith service in Newcastle is available 24 hours a day, 7 days a week, ensuring help is always available when you need it most.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Services</h3>
                <p className="text-gray-700">From simple key cutting to complex security system installations, our mobile locksmiths in Newcastle provide a complete range of services at your location.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for our mobile locksmith services in Newcastle, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newcastle Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Locksmith Coverage in Newcastle</h2>
          
          <p className="text-lg text-center mb-8">
            Our mobile locksmith services cover all areas of Newcastle and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Newcastle City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Jesmond</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Gosforth</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Heaton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Byker</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Walker</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fenham</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Benwell</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Kenton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Blakelaw</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Gateshead</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">North Shields</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can a mobile locksmith reach me in Newcastle?</h3>
              <p className="text-gray-700">Our mobile locksmith service in Newcastle typically reaches customers within 20-30 minutes in emergency situations, depending on your location and current traffic conditions. For non-emergency appointments, we offer specific time slots that work with your schedule. We maintain multiple mobile locksmith vans throughout Newcastle to ensure the fastest possible response times when you need assistance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What types of services can a mobile locksmith perform on-site?</h3>
              <p className="text-gray-700">Our Newcastle mobile locksmiths can perform virtually all locksmith services on-site, including emergency lockouts, lock repairs and replacements, key cutting and duplication, car key programming, lock rekeying, security upgrades, and installation of new locks. Our fully-equipped vans function as complete locksmith shops on wheels, with all the tools, parts, and equipment needed to handle residential, commercial, and automotive locksmith needs at your location without the need for a return visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need a Mobile Locksmith in Newcastle?</h2>
          <p className="text-xl mb-8">
            Contact UK Lock for fast, professional locksmith services at your location.
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