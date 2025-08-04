export const metadata = {
  title: "Emergency Locksmith Manchester | 24/7 Service | UK Lock",
  description: "24/7 emergency locksmith services in Manchester by UK Lock. Fast response for lockouts, broken keys, lock repairs, and security emergencies. Professional locksmiths available throughout Manchester with 20-30 minute response times.",
  openGraph: {
    title: "Emergency Locksmith Manchester | 24/7 Service",
    description: "24/7 emergency locksmith services in Manchester with 20-30 minute response times. Fast help for lockouts, broken keys, and security emergencies.",
    url: "https://www.uklock.co.uk/locations/manchester/emergency-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith Manchester | 24/7 Service",
    description: "24/7 emergency locksmith services in Manchester with 20-30 minute response times. Fast help for lockouts, broken keys, and security emergencies.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/emergency-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, Car, CheckCircle, Building, Home } from "lucide-react"

export default function EmergencyLocksmithManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Clock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Emergency Locksmith in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out? Broken key? Security emergency? UK Lock provides 24/7 emergency locksmith services throughout Manchester. Our mobile locksmiths can reach you within 20-30 minutes to resolve your lock and key emergencies quickly and professionally.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Services in Manchester</h2>
          
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
                  Locked out of your home in Manchester? Our emergency locksmiths can quickly gain entry to houses, flats, and apartments using non-destructive techniques.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Non-destructive entry</Badge>
                  <Badge variant="outline">All door types</Badge>
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
                  Can't access your business premises in Manchester? Our commercial lockout specialists can help you regain entry to offices, shops, and other commercial properties.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business priority</Badge>
                  <Badge variant="outline">Minimal disruption</Badge>
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
                  Locked your keys in your car in Manchester? Our auto locksmiths can open your vehicle without damage and provide replacement keys if needed.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All vehicle types</Badge>
                  <Badge variant="outline">No damage entry</Badge>
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
                  Key broken in the lock? Our Manchester locksmiths can extract broken keys from any lock without causing damage, and cut new replacement keys on the spot.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Specialized tools</Badge>
                  <Badge variant="outline">On-site key cutting</Badge>
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
                  Dealing with a malfunctioning or damaged lock in Manchester? Our emergency locksmiths can repair or replace locks on all types of doors, windows, and gates.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All lock types</Badge>
                  <Badge variant="outline">Fast repairs</Badge>
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
                  After a break-in or security breach in Manchester? We provide emergency lock changes and security upgrades to restore your property's security immediately.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Rapid response</Badge>
                  <Badge variant="outline">Enhanced security</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fast Response Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Fast Response Emergency Locksmith in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                When you're facing a lock emergency in Manchester, every minute counts. That's why UK Lock provides one of the fastest emergency locksmith response times in the Greater Manchester area.
              </p>
              <p className="text-lg mb-6">
                Our network of mobile emergency locksmiths is strategically positioned throughout Manchester, allowing us to reach most locations within 20-30 minutes of your call, 24 hours a day, 7 days a week.
              </p>
              <p className="text-lg mb-6">
                Each of our emergency locksmith vans is fully equipped with advanced tools and a comprehensive inventory of locks and parts, enabling us to resolve most emergencies on the first visit without delays.
              </p>
              <p className="text-lg">
                We understand that lock emergencies can be stressful, which is why we prioritize not just speed, but also clear communication. We'll keep you updated on our arrival time and provide transparent information about the solutions and costs involved.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Response Time Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>20-30 minute average response time in Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>24/7 availability, 365 days a year</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Coverage throughout Greater Manchester</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile workshops</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Immediate telephone assistance while en route</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Emergency Call</h3>
              <p className="text-gray-700">
                Contact our Manchester emergency team via phone or WhatsApp. Describe your situation and location for the fastest response.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Rapid Dispatch</h3>
              <p className="text-gray-700">
                We immediately dispatch the nearest Manchester locksmith to your location, typically arriving within 20-30 minutes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Problem Resolution</h3>
              <p className="text-gray-700">
                Our experienced locksmith will assess the situation and use specialized tools to resolve your emergency quickly and effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Security Check</h3>
              <p className="text-gray-700">
                After resolving the immediate issue, we'll check your overall security and recommend any necessary additional measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Entry Specialists in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Non-Destructive Techniques</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Advanced lock picking for most standard locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Specialized tools for euro cylinders and mortice locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Auto lockout tools for vehicle entry without damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Decoding techniques for creating new keys</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>UPVC door mechanism manipulation</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                At UK Lock, our Manchester emergency locksmiths specialize in non-destructive entry techniques. This means we can resolve most lockouts and lock emergencies without drilling or damaging your locks.
              </p>
              <p className="text-lg mb-6">
                Non-destructive entry is not only more cost-effective (as it eliminates the need for complete lock replacement), but it also provides faster resolution to your emergency, getting you back inside quickly with your existing locks intact.
              </p>
              <p className="text-lg mb-6">
                Our Manchester locksmiths are trained in the latest non-destructive entry methods for all types of locks, including high-security cylinders, mortice locks, UPVC door mechanisms, and vehicle locks.
              </p>
              <p className="text-lg">
                While we always prioritize non-destructive methods, in rare cases where a lock is severely damaged or of an extremely high-security nature, drilling may be necessary. In such situations, we'll always explain your options before proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Service Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">24/7 Emergency Locksmith Service in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Lock emergencies don't follow a 9-to-5 schedule, which is why UK Lock provides genuine 24/7 emergency locksmith services throughout Manchester. Whether you're locked out at 2 PM or 2 AM, our emergency locksmiths are ready to help.
              </p>
              <p className="text-lg mb-6">
                Our Manchester emergency locksmith team is available around the clock, including nights, weekends, and bank holidays. We understand that being locked out is stressful, especially during unsociable hours or in adverse weather conditions.
              </p>
              <p className="text-lg mb-6">
                With strategically positioned mobile locksmiths throughout Manchester and the Greater Manchester area, we can typically reach you within 20-30 minutes of your call, regardless of the time or day.
              </p>
              <p className="text-lg">
                Our 24/7 service ensures that you never have to wait long to resolve lock emergencies, providing peace of mind that professional help is always available when you need it most.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">When You Might Need Our 24/7 Service</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Late-night lockouts when returning home</span>
                </li>
                <li className="flex items-start">
                  <Building className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Early morning business access issues</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Post-break-in emergency security repairs</span>
                </li>
                <li className="flex items-start">
                  <Car className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Vehicle lockouts in isolated locations</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Sudden lock failures preventing access or secure closure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Emergency Locksmith Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">Our Manchester locksmiths can typically reach you within 20-30 minutes of your call, minimizing the time you spend waiting during an emergency.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Non-Destructive Specialists</h3>
                <p className="text-gray-700">Our Manchester locksmiths are trained in advanced non-destructive entry techniques, preserving your locks and doors whenever possible.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-700">All our Manchester locksmiths are fully licensed, insured, and DBS checked for your peace of mind and security.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for all our emergency services in Manchester, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our emergency locksmith services cover all areas of Manchester and surrounding regions, including:
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
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can you respond to an emergency in Manchester?</h3>
              <p className="text-gray-700">Our locksmiths can typically reach most locations in Manchester within 20-30 minutes of your call. We have mobile locksmith units strategically positioned throughout Manchester and the Greater Manchester area to ensure the fastest possible response times in emergency situations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does an emergency locksmith service cost in Manchester?</h3>
              <p className="text-gray-700">The cost of emergency locksmith services in Manchester varies depending on the specific situation, time of day, and complexity of the lock. Our emergency callout fees typically start from £79, with additional charges based on the specific service required. We always provide a clear quote before beginning any work, so you know exactly what to expect with no hidden charges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you open any type of lock in an emergency?</h3>
              <p className="text-gray-700">Our Manchester locksmiths are trained to open virtually all types of residential, commercial, and automotive locks. This includes standard cylinder locks, mortice locks, UPVC door mechanisms, high-security locks, car locks, and padlocks. In most cases, we can open these locks using non-destructive methods, preserving your existing hardware.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What information should I provide when calling for emergency locksmith service?</h3>
              <p className="text-gray-700">When calling our emergency locksmith service in Manchester, it's helpful to provide: 1) Your exact location, 2) The nature of your emergency (lockout, broken key, etc.), 3) The type of property (home, business, vehicle), 4) Any details about the lock type if known, and 5) Any special circumstances we should be aware of. This information helps us dispatch the right locksmith with the appropriate tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Locked Out in Manchester?</h2>
          <p className="text-xl mb-8">
            Don't panic! Our Manchester emergency locksmiths are ready to help 24/7 with fast, professional service.
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