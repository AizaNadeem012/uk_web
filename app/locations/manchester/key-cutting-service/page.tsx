export const metadata = {
  title: "Key Cutting Service Manchester | Professional & Precise | UK Lock",
  description: "Professional key cutting service in Manchester by UK Lock. We cut all types of keys including residential, commercial, car, high-security, and padlock keys with mobile service throughout Manchester.",
  openGraph: {
    title: "Key Cutting Service Manchester | Professional & Precise",
    description: "Professional key cutting in Manchester for all key types. Residential, commercial, car, high-security, and padlock keys with mobile service.",
    url: "https://www.uklock.co.uk/locations/manchester/key-cutting-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Key Cutting Service Manchester | Professional & Precise",
    description: "Professional key cutting in Manchester for all key types. Residential, commercial, car, high-security, and padlock keys with mobile service.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/key-cutting-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, Car, CheckCircle, Truck, Key } from "lucide-react"

export default function KeyCuttingManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Key Cutting Service in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Need a new key or spare? UK Lock provides professional key cutting services throughout Manchester for all types of keys. Our mobile locksmiths can cut residential, commercial, car, and high-security keys on-site at your location with precision and accuracy.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Residential Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Precision cutting of all types of residential keys in Manchester, including Yale, Chubb, mortice, rim cylinder, and night latch keys. We can cut keys for front doors, back doors, internal doors, garages, and more.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Yale</Badge>
                  <Badge variant="outline">Mortice</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional cutting of commercial keys in Manchester for offices, shops, warehouses, and other business premises. We can cut master keys, sub-master keys, and restricted key systems with proper authorization.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Master systems</Badge>
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
                  Cutting of standard car keys in Manchester. Our mobile locksmiths can cut basic mechanical car keys on-site. For transponder keys and remote fobs, we also offer programming services to ensure they work with your vehicle.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Standard keys</Badge>
                  <Badge variant="outline">On-site cutting</Badge>
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
                  Precision cutting of high-security keys in Manchester, including Mul-T-Lock, EVVA, Abloy, Medeco, and other restricted key systems. These keys offer enhanced security with complex cutting patterns and sidebars.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Mul-T-Lock</Badge>
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
                  Cutting of various padlock keys in Manchester for all types of padlocks, including standard, weatherproof, and high-security models. We can cut replacements for lost padlock keys or create duplicates.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Standard padlocks</Badge>
                  <Badge variant="outline">Security padlocks</Badge>
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
                  If you've lost all your keys, we can cut new keys directly from your locks in Manchester. Our locksmiths can extract the key code from your lock and cut new keys without having to replace the entire lock.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Code extraction</Badge>
                  <Badge variant="outline">Lost key solution</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Cutting Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Key Identification</h3>
              <p className="text-gray-700">
                We identify your key type and profile, ensuring we have the correct blank for precise duplication or creation from a lock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Precision Cutting</h3>
              <p className="text-gray-700">
                Using state-of-the-art key cutting machines, we cut your new key with exact precision to match the original or lock specifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Finishing</h3>
              <p className="text-gray-700">
                We carefully deburr and polish the newly cut key to ensure smooth operation and prevent lock damage or key breakage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing</h3>
              <p className="text-gray-700">
                We thoroughly test each key to ensure it works smoothly in your lock before handing it over, guaranteeing perfect functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Key Cutting Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Precision Key Cutting in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we understand that accurate key cutting is essential for proper lock function and security. Our Manchester locksmiths use advanced computerized and manual key cutting machines to ensure precise duplication every time.
              </p>
              <p className="text-lg mb-6">
                Even minor inaccuracies in key cutting can lead to keys that stick, are difficult to turn, or fail to work entirely. Our precision equipment and experienced technicians ensure that every cut is made to exact specifications.
              </p>
              <p className="text-lg mb-6">
                For high-security and restricted keys, precision is even more critical due to the complex cutting patterns and sidebars. Our specialized equipment can accurately reproduce these sophisticated security features.
              </p>
              <p className="text-lg">
                Each key we cut in Manchester undergoes quality control checks and testing to ensure smooth operation before we consider the job complete, giving you confidence in your new keys.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Precision Cutting Ensures:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Smooth operation in your locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Reduced risk of key breakage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Extended lock lifespan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Proper security function</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>First-time success rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Key Cutting Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Key Cutting in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Our Mobile Service</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>We come to your location in Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No need to leave your home or business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>On-site testing ensures keys work perfectly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Competitive pricing with no travel surcharges</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg mb-6">
                Our mobile key cutting service brings professional locksmith expertise directly to your location in Manchester, saving you time and hassle.
              </p>
              <p className="text-lg mb-6">
                Each of our mobile locksmiths in Manchester carries advanced key cutting machines and a comprehensive inventory of key blanks for virtually all types of keys.
              </p>
              <p className="text-lg mb-6">
                Whether you need keys cut at your home, business, or even roadside in Manchester, our mobile service can reach you quickly to cut new keys on-site.
              </p>
              <p className="text-lg">
                Our mobile key cutting service is particularly valuable for businesses that need multiple keys cut without having to close shop or send someone out during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Key Cutting in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">We use state-of-the-art computerized and manual key cutting machines to ensure precise, accurate key cutting for all types of keys in Manchester.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Truck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile Service Throughout Manchester</h3>
                <p className="text-gray-700">We come to your location anywhere in Manchester, providing convenient on-site key cutting without the need to visit a shop.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Key className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Key Range</h3>
                <p className="text-gray-700">We stock a vast range of key blanks for residential, commercial, automotive, and high-security applications, ensuring we can cut virtually any key in Manchester.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-gray-700">We stand behind our key cutting service with a satisfaction guarantee. If your key doesn't work perfectly, we'll recut it free of charge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our mobile key cutting services cover all areas of Manchester and surrounding regions, including:
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does key cutting cost in Manchester?</h3>
              <p className="text-gray-700">The cost of key cutting in Manchester varies depending on the type of key. Standard residential keys typically range from £5-£15, commercial keys from £10-£25, car keys from £20-£50 (basic mechanical keys), and high-security keys from £15-£40. We always provide a clear quote before beginning any work, and our mobile service doesn't add travel surcharges within Manchester.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does key cutting take?</h3>
              <p className="text-gray-700">Most standard key cutting in Manchester can be completed within 5-10 minutes per key once our mobile locksmith arrives at your location. More complex keys, such as high-security or restricted keys, might take 10-15 minutes. If we need to extract a code from a lock to create a key, this process might take 20-30 minutes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you cut a key if I don't have the original?</h3>
              <p className="text-gray-700">Yes, we can cut keys in Manchester even without an original. We can extract the key code directly from your lock and cut a new key based on those specifications. This service is available for most residential and commercial locks. For vehicle keys without an original, we may need additional verification and specialized equipment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you cut restricted or high-security keys?</h3>
              <p className="text-gray-700">Yes, we can cut many restricted and high-security keys in Manchester, but proper authorization is required. For restricted key systems, you'll need to provide proof of ownership and authorization to have keys cut. We work with major high-security brands including Mul-T-Lock, EVVA, Abloy, and Medeco. Some proprietary systems may require ordering from the manufacturer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Keys Cut in Manchester?</h2>
          <p className="text-xl mb-8">
            Contact our locksmith team for fast, professional key cutting at your location.
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