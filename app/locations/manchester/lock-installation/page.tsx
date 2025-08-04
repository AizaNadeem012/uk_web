export const metadata = {
  title: "Lock Installation Manchester | Professional & Secure | UK Lock",
  description: "Professional lock installation services in Manchester by UK Lock. We install all types of locks including mortice, Yale, euro cylinders, smart locks, and high-security locks with same-day service throughout Manchester.",
  openGraph: {
    title: "Lock Installation Manchester | Professional & Secure",
    description: "Professional lock installation in Manchester for all lock types. Mortice, Yale, euro cylinders, smart locks, and high-security locks with same-day service.",
    url: "https://www.uklock.co.uk/locations/manchester/lock-installation",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock Installation Manchester | Professional & Secure",
    description: "Professional lock installation in Manchester for all lock types. Mortice, Yale, euro cylinders, smart locks, and high-security locks with same-day service.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/lock-installation",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench as Tool, Lock, CheckCircle, Wrench } from "lucide-react"

export default function LockInstallationManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Lock Installation in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Enhance your security with professional lock installation services throughout Manchester. UK Lock provides expert installation of all types of locks for residential and commercial properties, including mortice locks, Yale locks, euro cylinders, smart locks, and high-security locks.
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

      {/* Lock Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Installation Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Mortice Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of mortice locks in Manchester for wooden doors. We install sashlock, deadlock, and bathroom mortice locks with precision cutting and fitting for optimal security and function.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">BS3621 Approved</Badge>
                  <Badge variant="outline">Insurance Compliant</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Yale Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert installation of Yale locks (night latches) in Manchester. We install standard and high-security Yale locks with proper alignment and secure fixing to ensure reliable operation and security.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Night Latches</Badge>
                  <Badge variant="outline">Auto-Locking</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Euro Cylinder Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of euro cylinder locks in Manchester for UPVC and composite doors. We install standard, anti-snap, and high-security euro cylinders with proper measurement and fitting.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Anti-Snap</Badge>
                  <Badge variant="outline">3-Star Rated</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert installation of smart locks in Manchester, including keypad, fingerprint, and app-controlled locks. We ensure proper fitting, connection to your home network, and full setup of all smart features.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Keyless Entry</Badge>
                  <Badge variant="outline">App Integration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>High-Security Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Installation of high-security locks in Manchester, including Mul-T-Lock, Banham, Ingersoll, and other premium brands. We provide expert fitting of these sophisticated locking systems for maximum security.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Anti-Pick</Badge>
                  <Badge variant="outline">Drill Resistant</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Multipoint Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of multipoint locking systems in Manchester for UPVC, composite, and aluminum doors. We ensure proper alignment and smooth operation of these complex locking mechanisms.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Multiple Locking Points</Badge>
                  <Badge variant="outline">Enhanced Security</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lock Installation Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Security Assessment</h3>
              <p className="text-gray-700">
                We assess your security needs and recommend the most suitable lock types for your doors and property in Manchester.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Lock Selection</h3>
              <p className="text-gray-700">
                We help you select quality locks that meet your security requirements and budget, explaining the features and benefits of each option.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Precision Installation</h3>
              <p className="text-gray-700">
                Our Manchester locksmiths carefully install your new locks with precision cutting, proper alignment, and secure fixing for optimal performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing & Verification</h3>
              <p className="text-gray-700">
                We thoroughly test each installed lock to ensure smooth operation, proper locking, and complete security before considering the job complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Locks Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Quality Lock Brands We Install in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we only install quality, reliable locks from trusted manufacturers. Our Manchester locksmiths work with leading brands that offer superior security, durability, and performance.
              </p>
              <p className="text-lg mb-6">
                We install locks from premium brands including Yale, Chubb, ERA, Union, Banham, Mul-T-Lock, ABUS, Ingersoll, and many others. These manufacturers are known for their high standards and innovative security features.
              </p>
              <p className="text-lg mb-6">
                Many of the locks we install meet or exceed British Standards (BS3621) and are insurance-approved, helping you comply with home insurance requirements while providing excellent security.
              </p>
              <p className="text-lg">
                For smart locks, we work with leading brands like Yale Conexis, Samsung, Schlage, and August to provide reliable, feature-rich electronic security solutions for your Manchester property.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Lock Features We Recommend</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Anti-snap protection for euro cylinders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Anti-pick and anti-bump technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Drill-resistant materials and design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>British Standard certification (BS3621)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Insurance-approved security ratings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Service Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Same-Day Lock Installation in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Same-Day Service Includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Quick response throughout Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Comprehensive stock of quality locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Professional installation tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No extra charge for same-day service</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg mb-6">
                When you need new locks installed quickly in Manchester, our same-day service ensures you don't have to wait to improve your security.
              </p>
              <p className="text-lg mb-6">
                Our Manchester locksmiths carry a comprehensive range of quality locks in their vans, allowing them to complete most installations on the first visit without delays ordering parts.
              </p>
              <p className="text-lg mb-6">
                Whether you've just moved into a new property, experienced a security breach, or simply want to upgrade your locks promptly, our same-day installation service provides peace of mind without the wait.
              </p>
              <p className="text-lg">
                We prioritize urgent installations while maintaining our high standards of workmanship, ensuring your new locks are fitted correctly and function perfectly from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Lock Installation in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Security Expertise</h3>
                <p className="text-gray-700">Our Manchester locksmiths have extensive knowledge of different lock types and security standards, helping you choose the most appropriate locks for your property.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Tool className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Precision Installation</h3>
                <p className="text-gray-700">We take pride in our meticulous installation process, ensuring your new locks are perfectly fitted for optimal security and smooth operation.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Lock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                <p className="text-gray-700">We only install reliable, durable locks from trusted manufacturers, providing you with security solutions that stand the test of time.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
                <p className="text-gray-700">From initial security assessment to final testing, we provide a complete lock installation service with attention to every detail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Installation Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our lock installation services cover all areas of Manchester and surrounding regions, including:
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Installation FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does lock installation cost in Manchester?</h3>
              <p className="text-gray-700">The cost of lock installation in Manchester varies depending on the type of lock and door. Basic Yale lock installation typically ranges from £80-£120, mortice lock installation from £100-£180, euro cylinder installation from £70-£150, and smart lock installation from £150-£300. These prices usually include both the lock and labor. We always provide a clear quote before beginning any work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does lock installation take?</h3>
              <p className="text-gray-700">Most standard lock installations in Manchester can be completed within 30-60 minutes per lock. Yale locks and euro cylinders typically take 20-30 minutes, while mortice locks might take 45-60 minutes as they require more precise cutting. Smart lock installations can take 60-90 minutes including setup and configuration. Complex installations or situations requiring door modifications might take longer.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What types of locks are best for home security?</h3>
              <p className="text-gray-700">For optimal home security in Manchester, we recommend: 1) BS3621-rated 5-lever mortice locks for wooden doors, 2) Anti-snap 3-star euro cylinders for UPVC and composite doors, 3) High-security night latches (Yale locks) with deadlocking function as secondary locks, and 4) Multipoint locking systems for external doors. The best choice depends on your specific door type, security requirements, and budget. Our locksmiths can provide personalized recommendations during assessment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you install locks on all door types?</h3>
              <p className="text-gray-700">Yes, our Manchester locksmiths can install locks on virtually all door types, including wooden doors, UPVC doors, composite doors, aluminum doors, glass doors, and fire doors. Each door type requires specific lock types and installation techniques. For example, wooden doors typically use mortice and Yale locks, while UPVC doors use euro cylinders and multipoint locking systems. We'll assess your door and recommend the most suitable lock options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Locks Installed in Manchester?</h2>
          <p className="text-xl mb-8">
            Contact our locksmith team for fast, professional lock installation at your location.
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