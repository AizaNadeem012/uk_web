export const metadata = {
  title: "Mobile Locksmith Manchester | On-Site Locksmith Services | UK Lock",
  description: "Professional mobile locksmith services in Manchester by UK Lock. Our fully-equipped mobile locksmiths come to you for residential, commercial, and automotive lock services throughout Manchester.",
  openGraph: {
    title: "Mobile Locksmith Manchester | On-Site Locksmith Services",
    description: "Professional mobile locksmith services in Manchester. Our fully-equipped mobile locksmiths come to you for all your lock and key needs.",
    url: "https://www.uklock.co.uk/locations/manchester/mobile-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Locksmith Manchester | On-Site Locksmith Services",
    description: "Professional mobile locksmith services in Manchester. Our fully-equipped mobile locksmiths come to you for all your lock and key needs.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/mobile-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, Car, CheckCircle, Building, Home, Truck } from "lucide-react"

export default function MobileLocksmithManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Truck className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Mobile Locksmith in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need a locksmith but can't come to us? UK Lock brings professional locksmith services directly to your doorstep throughout Manchester. Our fully-equipped mobile locksmith vans provide complete on-site solutions for all your residential, commercial, and automotive lock and key needs.
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

      {/* Mobile Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mobile Locksmith Services in Manchester</h2>
          
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
                  Our mobile locksmiths come to your Manchester home for lock installations, repairs, replacements, key cutting, lockouts, and security upgrades. We service all types of residential doors and windows.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All door types</Badge>
                  <Badge variant="outline">Security upgrades</Badge>
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
                  Our mobile service provides on-site commercial locksmith solutions throughout Manchester, including master key systems, access control, high-security locks, and emergency business lockouts.
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
                  Our mobile auto locksmiths in Manchester provide on-site car key replacement, programming, extraction of broken keys, vehicle lockouts, and transponder key services for all makes and models.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All vehicle makes</Badge>
                  <Badge variant="outline">Key programming</Badge>
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
                  Our mobile emergency locksmith service in Manchester operates 24/7, providing rapid response for lockouts, broken keys, lock failures, and security emergencies at homes, businesses, and vehicles.
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
                  Our mobile workshops are equipped with advanced key cutting machines, allowing us to cut most key types on-site throughout Manchester, including cylinder keys, mortice keys, and specialized security keys.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Precision cutting</Badge>
                  <Badge variant="outline">Multiple copies</Badge>
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
                  Our mobile locksmiths in Manchester can repair or upgrade your locks on-site, including UPVC mechanisms, mortice locks, rim cylinders, smart locks, and high-security lock systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All lock types</Badge>
                  <Badge variant="outline">Security upgrades</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Benefits of Our Mobile Locksmith Service in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Our mobile locksmith service brings professional locksmith expertise directly to your location in Manchester, offering numerous advantages over traditional shop-based services.
              </p>
              <p className="text-lg mb-6">
                With fully-equipped mobile workshops, our Manchester locksmiths carry comprehensive inventories of locks, keys, parts, and specialized tools, enabling them to complete most jobs in a single visit without delays.
              </p>
              <p className="text-lg mb-6">
                Our mobile service eliminates the inconvenience of traveling to a locksmith shop, which is particularly valuable during lockouts, emergencies, or when dealing with security issues that require immediate attention.
              </p>
              <p className="text-lg">
                By bringing our services to you, our mobile locksmiths can assess your specific security needs in context, providing tailored recommendations based on your property's unique requirements and vulnerabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Key Advantages</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Convenience - we come to you anywhere in Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Time-saving - no need to visit a shop</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>On-site solutions - most jobs completed in one visit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Contextual security assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Flexible scheduling to suit your availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mobile Locksmith Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">
                Call or WhatsApp our Manchester team. Describe your locksmith needs and location so we can dispatch the right mobile locksmith.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Mobile Dispatch</h3>
              <p className="text-gray-700">
                We'll dispatch the nearest fully-equipped mobile locksmith to your Manchester location, providing you with an estimated arrival time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. On-Site Service</h3>
              <p className="text-gray-700">
                Our mobile locksmith will arrive at your location, assess the situation, and provide a clear quote before performing the required service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Complete Solution</h3>
              <p className="text-gray-700">
                We'll complete the job on-site, test everything thoroughly, and provide advice on maintaining your locks and improving security if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Fleet Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mobile Locksmith Fleet in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Mobile Workshops Include:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Advanced key cutting machines for on-site key duplication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Electronic key programming equipment for car keys and fobs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Comprehensive inventory of locks, cylinders, and security hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Specialized tools for non-destructive entry techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>UPVC door and window mechanism repair equipment</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                UK Lock maintains a fleet of fully-equipped mobile locksmith vans throughout Manchester, ensuring we can provide comprehensive locksmith services anywhere in the Greater Manchester area.
              </p>
              <p className="text-lg mb-6">
                Each of our mobile locksmith vehicles is essentially a complete locksmith workshop on wheels, equipped with state-of-the-art key cutting machines, programming devices, and a comprehensive inventory of locks, parts, and specialized tools.
              </p>
              <p className="text-lg mb-6">
                Our mobile units are strategically positioned throughout Manchester to minimize response times, allowing us to reach most locations within 20-30 minutes for emergency services.
              </p>
              <p className="text-lg">
                All our Manchester mobile locksmiths are fully trained, licensed, and insured professionals with extensive experience in residential, commercial, and automotive locksmith services, ensuring you receive expert assistance regardless of your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Mobile Locksmith Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Truck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully-Equipped Mobile Service</h3>
                <p className="text-gray-700">Our Manchester mobile locksmiths carry comprehensive inventories and specialized equipment to complete most jobs in a single visit, saving you time and inconvenience.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">With mobile units positioned throughout Manchester, we can typically reach you within 20-30 minutes for emergency services, minimizing wait times.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured Professionals</h3>
                <p className="text-gray-700">All our Manchester mobile locksmiths are fully licensed, insured, and DBS checked for your peace of mind and security.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for all our mobile locksmith services in Manchester, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Locksmith Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our mobile locksmith services cover all areas of Manchester and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Manchester City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Salford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stockport</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Prestwich</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rusholme</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Withington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Levenshulme</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stretford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Altrincham</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can your mobile locksmith reach me in Manchester?</h3>
              <p className="text-gray-700">Our mobile locksmiths can typically reach most locations in Manchester within 20-30 minutes for emergency services. For scheduled appointments, we offer flexible time slots to suit your convenience, including evenings and weekends.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What types of services can your mobile locksmiths perform on-site?</h3>
              <p className="text-gray-700">Our Manchester mobile locksmiths can perform virtually all locksmith services on-site, including lock installation, repair, and replacement; key cutting and duplication; lock rekeying; car key programming; lockout assistance; security upgrades; and emergency services. Our vans are equipped with comprehensive tools and inventory to complete most jobs in a single visit.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Do your mobile locksmiths charge extra for coming to my location?</h3>
              <p className="text-gray-700">Our mobile locksmith service in Manchester includes a standard callout fee that covers travel to your location. This fee varies based on your location and the time of service (standard hours vs. after-hours). However, we provide transparent pricing with a clear quote before beginning any work, so you'll know the total cost upfront with no hidden charges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can your mobile locksmiths cut all types of keys on-site?</h3>
              <p className="text-gray-700">Our mobile workshops are equipped with advanced key cutting machines that can cut most types of keys on-site, including standard cylinder keys, mortice keys, dimple keys, and many specialized security keys. For certain high-security or restricted key systems, additional verification or ordering may be required. Our locksmiths can advise you on the specific requirements for your key type during the service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need a Locksmith in Manchester?</h2>
          <p className="text-xl mb-8">
            We'll come to you! Contact our mobile locksmith team for fast, professional service throughout Manchester.
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