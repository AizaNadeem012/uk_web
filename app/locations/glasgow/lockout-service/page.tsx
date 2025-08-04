export const metadata = {
  title: "Lockout Service in Glasgow | 24/7 Emergency Assistance | UK Lock",
  description: "Locked out in Glasgow? UK Lock provides fast, professional lockout services for homes, businesses, and vehicles throughout Glasgow. Our 24/7 emergency locksmiths can help you regain access quickly without damage. Call now for immediate assistance.",
  openGraph: {
    title: "Lockout Service in Glasgow | 24/7 Emergency Assistance",
    description: "UK Lock offers professional lockout services in Glasgow. Available 24/7 for homes, businesses, and vehicles.",
    url: "https://www.uklock.co.uk/locations/glasgow/lockout-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lockout Service in Glasgow | 24/7 Emergency Assistance",
    description: "Professional lockout services in Glasgow by UK Lock. 24/7 emergency assistance for homes, businesses, and vehicles.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/glasgow/lockout-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Home, Building, Car, Lock, AlertTriangle } from "lucide-react"

export default function LockoutServiceGlasgowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Lockout Service in Glasgow</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out of your home, business, or vehicle in Glasgow? UK Lock provides fast, professional lockout services 24 hours a day, 7 days a week throughout Glasgow and surrounding areas.
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

      {/* Emergency Lockout Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lockout Services in Glasgow</h2>
          
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
                  Locked out of your home in Glasgow? Our locksmiths can quickly gain access to your property without causing damage to your doors or locks.
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
                  Can't access your business premises in Glasgow? We provide fast lockout services for offices, shops, and other commercial properties.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Minimal disruption</Badge>
                  <Badge variant="outline">High-security locks</Badge>
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
                  Locked your keys in your car in Glasgow? Our auto locksmiths can safely open your vehicle without causing damage to the locks or bodywork.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All makes & models</Badge>
                  <Badge variant="outline">Specialized tools</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experiencing an urgent lockout situation in Glasgow? Our 24/7 emergency lockout service ensures you'll never be left stranded for long.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">24/7 availability</Badge>
                  <Badge variant="outline">Fast response</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Digital Lock Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Forgotten the code to your digital lock in Glasgow? We can help you regain access and reset your electronic or smart lock systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Smart lock specialists</Badge>
                  <Badge variant="outline">Code recovery</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Safe Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Unable to open your safe in Glasgow? Our locksmiths are trained in safe opening techniques to help you regain access to your valuables.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Combination recovery</Badge>
                  <Badge variant="outline">All safe types</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Lockout Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lockout Service Process in Glasgow</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">
                Call or message our Glasgow lockout service with details about your situation. We'll provide an estimated arrival time and price quote.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Quick Arrival</h3>
              <p className="text-gray-700">
                Our mobile locksmith will arrive at your Glasgow location, typically within 30 minutes, with all the necessary tools and equipment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Assessment</h3>
              <p className="text-gray-700">
                We'll assess your lockout situation in Glasgow and determine the most efficient and least damaging method to regain access.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Safe Entry</h3>
              <p className="text-gray-700">
                Using specialized tools and techniques, we'll safely open your door or vehicle in Glasgow, typically within minutes of arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Lockout Service in Glasgow</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, our Glasgow lockout service specialists are trained in non-destructive entry techniques. This means we can help you regain access to your property or vehicle without causing damage to your locks, doors, or windows.
              </p>
              <p className="text-lg mb-6">
                Using specialized tools and techniques, our locksmiths can open most locks without drilling or breaking them. This saves you the additional expense of replacing damaged locks or doors after a lockout situation.
              </p>
              <p className="text-lg mb-6">
                Our non-destructive lockout service in Glasgow is available for all types of properties and vehicles, including homes with high-security locks, commercial premises, and modern vehicles with sophisticated locking systems.
              </p>
              <p className="text-lg">
                In the rare cases where non-destructive entry is not possible, we'll always discuss your options with you before proceeding with any work that might require lock replacement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Our Non-Destructive Entry</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Preserves the integrity of your existing locks and doors</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Saves you money on replacement locks and repairs</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Faster resolution to your lockout situation</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Suitable for high-security and specialized locks</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintains the security level of your property</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Lockout Service in Glasgow</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Response</h3>
                <p className="text-gray-700">Our Glasgow lockout service is available 24 hours a day, 7 days a week, including holidays, ensuring help is always just a phone call away.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">Our mobile locksmiths can typically reach any location in Glasgow within 30 minutes, minimizing your wait time during a stressful lockout situation.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Certified Locksmiths</h3>
                <p className="text-gray-700">All our Glasgow locksmiths are fully certified, insured, and background-checked, giving you peace of mind during your lockout emergency.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Specialized Equipment</h3>
                <p className="text-gray-700">We use the latest locksmith tools and techniques to provide efficient, non-destructive lockout service throughout Glasgow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glasgow Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lockout Service Coverage in Glasgow</h2>
          
          <p className="text-lg text-center mb-8">
            Our lockout services cover all areas of Glasgow and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Glasgow City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">West End</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Southside</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">East End</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">North Glasgow</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Merchant City</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Finnieston</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Partick</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Govan</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Pollokshields</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Shawlands</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bearsden</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lockout Service FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can you respond to a lockout in Glasgow?</h3>
              <p className="text-gray-700">Our Glasgow lockout service typically responds within 20-30 minutes of your call. We maintain multiple mobile units throughout the city to ensure fast response times, even during peak hours. In emergency situations, we prioritize calls to minimize your wait time and get you back into your property or vehicle as quickly as possible.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Will you damage my locks when providing lockout service?</h3>
              <p className="text-gray-700">At UK Lock, we specialize in non-destructive entry techniques for our Glasgow lockout service. In most cases, we can open your door or vehicle without causing any damage to the locks or surrounding areas. Our locksmiths are trained to use specialized tools and techniques that preserve your existing security hardware, saving you the cost of replacement locks or repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Locked Out in Glasgow?</h2>
          <p className="text-xl mb-8">
            Don't panic! Our professional locksmiths can help you regain access quickly and safely.
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