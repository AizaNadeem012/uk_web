export const metadata = {
  title: "Lockout Service Chorlton | 24/7 Emergency Access | UK Lock",
  description: "Professional lockout services in Chorlton by UK Lock. We provide fast, non-destructive entry for residential, commercial, and vehicle lockouts. 24/7 emergency service with 20-30 minute response times throughout Chorlton and surrounding areas.",
  openGraph: {
    title: "Lockout Service Chorlton | 24/7 Emergency Access",
    description: "Fast, professional lockout services in Chorlton for homes, businesses, and vehicles. 24/7 availability with 20-30 minute response times.",
    url: "https://www.uklock.co.uk/locations/manchester/chorlton/lockout-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lockout Service Chorlton | 24/7 Emergency Access",
    description: "Fast, professional lockout services in Chorlton for homes, businesses, and vehicles. 24/7 availability with 20-30 minute response times.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/chorlton/lockout-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, Car, CheckCircle, Building, Home, Smartphone } from "lucide-react"

export default function LockoutServiceChorltonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Lockout Service in Chorlton</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out in Chorlton? UK Lock provides fast, professional lockout services for homes, businesses, and vehicles throughout Chorlton. Our mobile locksmiths can reach you within 20-30 minutes and use non-destructive entry techniques to get you back inside quickly.
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

      {/* Lockout Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lockout Services in Chorlton</h2>
          
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
                  Locked out of your home in Chorlton? Our locksmiths can quickly gain entry to houses, flats, and apartments using non-destructive techniques that protect your locks and doors.
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
                  Can't access your business premises in Chorlton? Our commercial lockout specialists can help you regain entry to offices, shops, and other commercial properties quickly and securely.
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
                  Locked your keys in your car in Chorlton? Our auto locksmiths can open your vehicle without damage and provide replacement keys if needed for all makes and models.
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
                  <Clock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experiencing an urgent lockout situation in Chorlton? Our 24/7 emergency lockout service ensures you can get back inside quickly, any time of day or night.
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
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <CardTitle>Digital Lock Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Having trouble with a digital or smart lock in Chorlton? Our technicians are trained to handle electronic lock lockouts, including forgotten codes and malfunctioning systems.
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
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Safe Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked out of your safe in Chorlton? Our safe opening specialists can help you regain access to home and business safes when you've lost the combination or key.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Safe specialists</Badge>
                  <Badge variant="outline">Non-destructive methods</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lockout Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lockout Process in Chorlton</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Emergency Call</h3>
              <p className="text-gray-700">
                Contact our Chorlton lockout team via phone or WhatsApp. Describe your situation and provide your location for the fastest response.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Rapid Arrival</h3>
              <p className="text-gray-700">
                Our mobile locksmith will arrive at your Chorlton location, typically within 20-30 minutes, fully equipped to handle your specific lockout situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Non-Destructive Entry</h3>
              <p className="text-gray-700">
                Using specialized tools and techniques, we'll gain access to your property or vehicle without causing damage to your locks or doors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Security Check</h3>
              <p className="text-gray-700">
                Once you're back inside, we'll check your locks for any issues and offer advice or repairs to prevent future lockouts and enhance security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Lockout Solutions in Chorlton</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, our Chorlton locksmiths specialize in non-destructive entry techniques. This means we can get you back inside your home, business, or vehicle without damaging your locks or doors in most situations.
              </p>
              <p className="text-lg mb-6">
                Using specialized tools and techniques such as lock picking, bump keys, and bypass methods, our skilled locksmiths can open most standard locks without drilling or breaking them.
              </p>
              <p className="text-lg mb-6">
                Non-destructive entry is particularly important in lockout situations, as it allows you to continue using your existing locks after regaining access, saving you the additional cost and time of lock replacement.
              </p>
              <p className="text-lg">
                Even in cases where more advanced high-security locks are involved, our Chorlton locksmiths are trained to use the least destructive method possible to gain entry, minimizing damage and costs.
              </p>
            </div>
            
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
                  <span>Faster resolution of your lockout emergency</span>
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
          </div>
        </div>
      </section>

      {/* 24/7 Service Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">24/7 Lockout Service in Chorlton</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our 24/7 Service Includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Round-the-clock availability, 365 days a year</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fast response times across Chorlton (20-30 minutes)</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile locksmith vans</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Licensed and insured emergency locksmiths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                Lockouts don't follow a 9-to-5 schedule, which is why UK Lock provides 24/7 lockout services throughout Chorlton. Whether you're locked out at 2 PM or 2 AM, our emergency locksmiths are ready to help.
              </p>
              <p className="text-lg mb-6">
                Our Chorlton lockout team is available around the clock, including nights, weekends, and bank holidays. We understand that being locked out is stressful, especially during unsociable hours or in adverse weather conditions.
              </p>
              <p className="text-lg mb-6">
                With strategically positioned mobile locksmiths throughout Chorlton and the Greater Manchester area, we can typically reach you within 20-30 minutes of your call, regardless of the time or day.
              </p>
              <p className="text-lg">
                Our 24/7 service ensures that you never have to wait long to regain access to your home, business, or vehicle, providing peace of mind that help is always available when you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Lockout Services in Chorlton</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">Our Chorlton locksmiths can typically reach you within 20-30 minutes of your call, minimizing the time you spend locked out.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Non-Destructive Specialists</h3>
                <p className="text-gray-700">Our Chorlton locksmiths are trained in advanced non-destructive entry techniques, preserving your locks and doors whenever possible.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-700">All our Chorlton locksmiths are fully licensed, insured, and DBS checked for your peace of mind and security.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for all our lockout services in Chorlton, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chorlton Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lockout Service Coverage in Chorlton</h2>
          
          <p className="text-lg text-center mb-8">
            Our lockout services cover all areas of Chorlton and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton-cum-Hardy</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton Green</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Beech Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Barlow Moor</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorltonville</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Whalley Range</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Firswood</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Old Trafford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stretford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Withington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lockout Service FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can you respond to a lockout in Chorlton?</h3>
              <p className="text-gray-700">Our locksmiths can typically reach most locations in Chorlton within 20-30 minutes of your call. We have mobile locksmith units strategically positioned throughout Chorlton and the Greater Manchester area to ensure the fastest possible response times in lockout situations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does a lockout service cost in Chorlton?</h3>
              <p className="text-gray-700">The cost of lockout services in Chorlton varies depending on the specific situation, time of day, and complexity of the lock. Our residential lockout services typically start from £79, with commercial and vehicle lockouts varying based on the specific requirements. We always provide a clear quote before beginning any work, so you know exactly what to expect with no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Locked Out in Chorlton?</h2>
          <p className="text-xl mb-8">
            Don't panic! Our Chorlton locksmiths are ready to help 24/7 with fast, professional lockout services.
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