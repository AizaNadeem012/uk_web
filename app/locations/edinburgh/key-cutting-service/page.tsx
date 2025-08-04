export const metadata = {
  title: "Professional Key Cutting Service Edinburgh | UK Lock",
  description: "Need keys cut in Edinburgh? UK Lock provides professional key cutting services for all types of keys including house keys, car keys, security keys, and more. Our mobile locksmiths use precision equipment for accurate key cutting throughout Edinburgh.",
  openGraph: {
    title: "Professional Key Cutting Service Edinburgh | UK Lock",
    description: "Expert key cutting services in Edinburgh for all key types. Mobile service with precision equipment for accurate results.",
    url: "https://www.uklock.co.uk/locations/edinburgh/key-cutting-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Key Cutting Service Edinburgh | UK Lock",
    description: "Expert key cutting services in Edinburgh by UK Lock. Mobile service with precision equipment.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/edinburgh/key-cutting-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Home, Building, Car, Lock, CheckCircle } from "lucide-react"

export default function KeyCuttingServiceEdinburghPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Professional Key Cutting Service in Edinburgh</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need keys cut in Edinburgh? UK Lock provides fast, accurate key cutting services for all types of keys. Our mobile locksmiths use precision equipment to ensure perfect duplicates every time.
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

      {/* Key Cutting Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Services in Edinburgh</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Residential Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We cut all types of residential keys in Edinburgh, including Yale keys, mortice keys, rim cylinder keys, and UPVC door keys for your home.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Precision cutting</Badge>
                  <Badge variant="outline">All door types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our Edinburgh key cutting service includes commercial keys for offices, shops, and industrial premises, including master key systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Master keys</Badge>
                  <Badge variant="outline">Restricted keys</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Car Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We cut and program car keys in Edinburgh for all makes and models, including standard keys, remote keys, and transponder keys.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All vehicle makes</Badge>
                  <Badge variant="outline">Programming included</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>High-Security Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our Edinburgh locksmiths can cut high-security keys with complex profiles, including patented and restricted key systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Advanced security</Badge>
                  <Badge variant="outline">Authorized service</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Padlock Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost your padlock key in Edinburgh? We can cut replacement keys for most types of padlocks, including high-security models.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All padlock types</Badge>
                  <Badge variant="outline">Accurate duplicates</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Cutting from Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No original key? Our Edinburgh locksmiths can create new keys directly from your lock without needing an original key for reference.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">No original needed</Badge>
                  <Badge variant="outline">Advanced technique</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Key Cutting Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Process in Edinburgh</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Key Identification</h3>
              <p className="text-gray-700">
                We identify your key type and determine the best approach for cutting an accurate duplicate in Edinburgh.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Precision Cutting</h3>
              <p className="text-gray-700">
                Using state-of-the-art key cutting machines, we create an exact duplicate of your key with precise measurements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Quality Check</h3>
              <p className="text-gray-700">
                We carefully inspect and test each key to ensure it meets our high standards for accuracy and functionality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Final Testing</h3>
              <p className="text-gray-700">
                Before handover, we test your new key in the lock (when possible) to ensure smooth operation and perfect fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Key Cutting Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Precision Key Cutting in Edinburgh</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we pride ourselves on providing the most accurate key cutting service in Edinburgh. Our locksmiths use advanced computerized key cutting machines that ensure precision down to fractions of a millimeter.
              </p>
              <p className="text-lg mb-6">
                Unlike standard key cutting services that you might find in hardware stores or shoe repair shops, our professional locksmiths understand the importance of exact measurements and proper technique when cutting keys.
              </p>
              <p className="text-lg mb-6">
                This precision is especially important for high-security keys, car keys, and restricted key systems where even minor variations can cause the key to work poorly or not at all.
              </p>
              <p className="text-lg">
                Our mobile key cutting service brings this professional-grade precision directly to your location in Edinburgh, saving you time and ensuring you receive the highest quality duplicate keys.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Professional Key Cutting</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Superior accuracy compared to standard key cutting services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Keys that work smoothly without sticking or jamming</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Longer-lasting keys that won't wear down your locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Ability to cut complex and high-security key profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Expert advice on key and lock maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Key Cutting in Edinburgh</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">We use state-of-the-art key cutting machines that provide superior accuracy compared to standard key cutting services in Edinburgh.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Certified Locksmiths</h3>
                <p className="text-gray-700">Our Edinburgh key cutting specialists are fully certified locksmiths with extensive training and experience in all types of key systems.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile Service</h3>
                <p className="text-gray-700">Our mobile key cutting service comes to your location in Edinburgh, saving you time and providing convenience when you need keys cut.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Service</h3>
                <p className="text-gray-700">Most key cutting jobs in Edinburgh can be completed within minutes, getting you back to your day with minimal disruption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edinburgh Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting Service Coverage in Edinburgh</h2>
          
          <p className="text-lg text-center mb-8">
            Our key cutting services cover all areas of Edinburgh and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Edinburgh City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Leith</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Portobello</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Morningside</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stockbridge</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Corstorphine</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Newington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bruntsfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Cramond</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Duddingston</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Murrayfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Dalkeith</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does key cutting cost in Edinburgh?</h3>
              <p className="text-gray-700">Key cutting costs in Edinburgh vary depending on the type of key. Standard house keys typically range from £3-£8, while more complex keys such as high-security or car keys can cost between £10-£80. For car keys with transponders or remote functions, prices typically start at £50. We always provide a clear quote before beginning any work on your key cutting service in Edinburgh.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you cut a key if I don't have the original?</h3>
              <p className="text-gray-700">Yes, our professional Edinburgh key cutting service can create keys without having the original. We can cut keys directly from the lock using specialized techniques and tools. This service is available for most residential and commercial locks, though some high-security or restricted key systems may require additional verification of ownership. Our mobile locksmiths in Edinburgh have the expertise to help even when you've lost all copies of your keys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Professional Key Cutting in Edinburgh?</h2>
          <p className="text-xl mb-8">
            Contact UK Lock for fast, accurate key cutting service at your location.
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