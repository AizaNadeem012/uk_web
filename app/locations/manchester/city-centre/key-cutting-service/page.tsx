export const metadata = {
  title: "Key Cutting Service Manchester City Centre | UK Lock",
  description: "Professional key cutting services in Manchester City Centre. We cut all types of keys including residential, commercial, car, high-security, and padlock keys with precision and accuracy. Mobile service available throughout Manchester City Centre.",
  openGraph: {
    title: "Key Cutting Service Manchester City Centre | UK Lock",
    description: "Professional key cutting for all key types in Manchester City Centre. Mobile service with state-of-the-art equipment for precise, accurate duplicates.",
    url: "https://www.uklock.co.uk/locations/manchester/city-centre/key-cutting-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Cutting Service Manchester City Centre | UK Lock",
    description: "Professional key cutting for all key types in Manchester City Centre. Mobile service with state-of-the-art equipment for precise, accurate duplicates.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/city-centre/key-cutting-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Car, CheckCircle, Building, Home, Lock } from "lucide-react"

export default function KeyCuttingServiceManchesterCityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Key Cutting Service in Manchester City Centre</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need a key cut in Manchester City Centre? UK Lock provides professional key cutting services for all types of keys. Our mobile locksmiths use state-of-the-art equipment to ensure precise, accurate duplicates every time.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Services in Manchester City Centre</h2>
          
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
                  We cut all types of residential keys in Manchester City Centre, including Yale keys, mortice keys, rim cylinder keys, and keys for internal doors, garages, and gates.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All home keys</Badge>
                  <Badge variant="outline">Precision cut</Badge>
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
                  Our Manchester City Centre key cutting service includes commercial keys for offices, shops, and industrial premises, including master key systems and restricted key profiles.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business solutions</Badge>
                  <Badge variant="outline">Master key systems</Badge>
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
                  We cut and program car keys for most makes and models in Manchester City Centre, including standard keys, transponder keys, and remote key fobs.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All vehicle types</Badge>
                  <Badge variant="outline">Programming available</Badge>
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
                  Our Manchester City Centre locksmiths can cut high-security keys, including those with complex profiles, dimple keys, and keys with special security features.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Advanced security</Badge>
                  <Badge variant="outline">Restricted profiles</Badge>
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
                  Lost the key to your padlock? We can cut replacement padlock keys in Manchester City Centre for most standard and security padlocks.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All padlock types</Badge>
                  <Badge variant="outline">Exact duplicates</Badge>
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
                  No original key? No problem. Our Manchester City Centre locksmiths can create new keys directly from your lock without needing an original key for reference.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">No original needed</Badge>
                  <Badge variant="outline">Lock decoding</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Cutting Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Process in Manchester City Centre</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Key Assessment</h3>
              <p className="text-gray-700">
                We examine your original key or lock to identify the key type, profile, and security features needed for an accurate duplicate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Precision Cutting</h3>
              <p className="text-gray-700">
                Using state-of-the-art key cutting machines, we precisely cut your new key to match the exact specifications of the original.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Quality Check</h3>
              <p className="text-gray-700">
                We thoroughly inspect the newly cut key, checking for burrs, smoothness, and proper dimensions to ensure perfect operation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing</h3>
              <p className="text-gray-700">
                Before handing over your new key, we test it in the lock to ensure smooth operation and proper functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Key Cutting Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Precision Key Cutting in Manchester City Centre</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we understand that accurate key cutting is essential for proper lock function and security. Our Manchester City Centre locksmiths use advanced key cutting technology to ensure precise, reliable duplicates every time.
              </p>
              <p className="text-lg mb-6">
                Unlike generic key cutting services that may use basic equipment, our professional locksmiths utilize specialized machines capable of cutting complex key profiles with micrometric precision.
              </p>
              <p className="text-lg mb-6">
                This precision is particularly important for high-security keys, car keys, and keys with complex profiles, where even minor deviations can prevent proper operation or cause damage to your locks over time.
              </p>
              <p className="text-lg">
                Our Manchester City Centre mobile locksmiths bring this precision technology directly to you, offering convenient on-site key cutting without compromising on quality or accuracy.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Professional Key Cutting</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Precise duplicates that work smoothly every time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Capability to cut complex and high-security key profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Proper key cutting that prevents lock damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Ability to create keys from locks when originals are lost</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Expert advice on key and lock security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Key Cutting Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Key Cutting in Manchester City Centre</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Mobile Service Includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Convenient on-site key cutting at your location</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Service throughout Manchester City Centre and surrounding areas</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile workshops with professional equipment</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Licensed and insured professional locksmiths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Same-day service with flexible scheduling</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                UK Lock brings professional key cutting services directly to you with our mobile locksmith service in Manchester City Centre. There's no need to travel to a shop or wait days for new keys.
              </p>
              <p className="text-lg mb-6">
                Our fully equipped mobile workshops contain the same advanced key cutting technology found in professional locksmith shops, allowing us to cut virtually any type of key at your location.
              </p>
              <p className="text-lg mb-6">
                Whether you need keys cut for your home, business, vehicle, or specialized locks, our Manchester City Centre mobile locksmiths can provide fast, convenient service without compromising on quality.
              </p>
              <p className="text-lg">
                This service is particularly valuable for businesses needing multiple keys cut, individuals with mobility issues, or anyone who values the convenience of professional key cutting at their doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Key Cutting in Manchester City Centre</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
                <p className="text-gray-700">We use state-of-the-art key cutting machines that provide superior accuracy compared to basic key cutting services.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Locksmiths</h3>
                <p className="text-gray-700">Our Manchester City Centre locksmiths are fully trained professionals with extensive experience in cutting all types of keys.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <MapPin className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile Service</h3>
                <p className="text-gray-700">We bring our professional key cutting service to your location in Manchester City Centre, saving you time and hassle.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-gray-700">We stand behind our key cutting with a satisfaction guarantee. If your key doesn't work perfectly, we'll fix it free of charge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester City Centre Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting Service Coverage in Manchester City Centre</h2>
          
          <p className="text-lg text-center mb-8">
            Our key cutting services cover all areas of Manchester City Centre and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Northern Quarter</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Deansgate</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Spinningfields</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Piccadilly</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ancoats</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Castlefield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Green Quarter</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">NOMA</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chinatown</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Gay Village</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Oxford Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Salford Quays</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does it take to cut a key in Manchester City Centre?</h3>
              <p className="text-gray-700">Most standard keys can be cut in just a few minutes. More complex keys, such as high-security or car keys, may take 10-20 minutes. Our mobile service can typically reach your Manchester City Centre location within 30-60 minutes of your call, depending on current demand and your specific location.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you cut any type of key in Manchester City Centre?</h3>
              <p className="text-gray-700">We can cut most types of keys, including standard house keys, high-security keys, car keys, padlock keys, and more. The only exceptions are some highly restricted key systems that require authorization from the manufacturer or system owner. If you're unsure whether we can cut your specific key, please contact us with details, and we'll be happy to advise.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does key cutting cost in Manchester City Centre?</h3>
              <p className="text-gray-700">The cost of key cutting varies depending on the type of key. Standard house keys typically start from £5-10, while more complex keys such as high-security or car keys range from £15-50+. We always provide a clear quote before beginning any work, so you know exactly what to expect with no hidden charges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you cut a key if I don't have the original?</h3>
              <p className="text-gray-700">Yes, our Manchester City Centre locksmiths can create keys without an original by working directly with your lock. We can decode the lock to determine the correct key cuts, allowing us to create a new key from scratch. This service is available for most standard locks, though some high-security systems may have additional requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Keys Cut in Manchester City Centre?</h2>
          <p className="text-xl mb-8">
            Contact UK Lock today for fast, professional key cutting services at your location.
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