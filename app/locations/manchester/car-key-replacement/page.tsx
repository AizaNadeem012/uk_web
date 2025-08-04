export const metadata = {
  title: "Car Key Replacement Manchester | All Makes & Models | UK Lock",
  description: "Professional car key replacement services in Manchester by UK Lock. We provide replacement keys for all makes and models, including transponder keys, remote fobs, and smart keys with mobile service throughout Manchester.",
  openGraph: {
    title: "Car Key Replacement Manchester | All Makes & Models",
    description: "Professional car key replacement in Manchester for all vehicle makes and models. Transponder keys, remote fobs, and smart keys with mobile service.",
    url: "https://www.uklock.co.uk/locations/manchester/car-key-replacement",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Key Replacement Manchester | All Makes & Models",
    description: "Professional car key replacement in Manchester for all vehicle makes and models. Transponder keys, remote fobs, and smart keys with mobile service.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/car-key-replacement",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, Car, CheckCircle, Truck, Key } from "lucide-react"

export default function CarKeyReplacementManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Car Key Replacement in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Lost your car keys? Need a spare? UK Lock provides professional car key replacement services throughout Manchester for all makes and models. Our mobile auto locksmiths can cut, program, and replace standard keys, transponder keys, remote fobs, and smart keys on-site at your location.
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

      {/* Car Key Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Standard Car Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Replacement of basic mechanical car keys for older vehicles in Manchester. Our locksmiths can cut new keys on-site using advanced key cutting equipment for precise duplication.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">On-site cutting</Badge>
                  <Badge variant="outline">Older vehicles</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Transponder Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Replacement and programming of transponder keys (chip keys) for vehicles in Manchester. Our specialists can cut and program the embedded security chip to communicate with your car's immobilizer system.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Chip programming</Badge>
                  <Badge variant="outline">Immobilizer compatible</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Remote Key Fobs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Replacement and programming of remote key fobs for vehicles in Manchester. We can supply and program new remote fobs to control central locking, alarm systems, and other remote functions.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Remote programming</Badge>
                  <Badge variant="outline">Central locking</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Replacement and programming of advanced smart keys and proximity keys for modern vehicles in Manchester. Our specialists can program these sophisticated keyless entry systems on-site.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Keyless entry</Badge>
                  <Badge variant="outline">Proximity systems</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Spare Car Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Creation of spare car keys for all vehicle types in Manchester. Having a spare key provides peace of mind and can save time and money if your primary key is lost or damaged.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Preventative measure</Badge>
                  <Badge variant="outline">Cost-effective</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Car Key Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Repair of damaged car keys and remotes in Manchester. We can fix broken key shells, replace worn buttons, repair internal circuits, and resolve programming issues to restore functionality.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Shell replacement</Badge>
                  <Badge variant="outline">Circuit repair</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Brands We Support in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our Manchester auto locksmiths can replace and program keys for virtually all car makes and models, including:
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Ford</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Vauxhall</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">BMW</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Mercedes</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Audi</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Volkswagen</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Toyota</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Nissan</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Honda</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Peugeot</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Renault</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Citroen</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Hyundai</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Kia</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Land Rover</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Jaguar</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Volvo</h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Mazda</h3>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            And many more! If you don't see your vehicle brand listed, please contact us - we can still help.
          </p>
        </div>
      </section>

      {/* Key Replacement Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Car Key Replacement Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact & Consultation</h3>
              <p className="text-gray-700">
                Call our Manchester team with your vehicle details (make, model, year). We'll explain the replacement options and provide a quote.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Mobile Service</h3>
              <p className="text-gray-700">
                Our auto locksmith will come to your location in Manchester with all the necessary equipment to cut and program your new car key.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Key Creation</h3>
              <p className="text-gray-700">
                We'll cut a new key to match your vehicle's specifications and prepare it for programming using specialized equipment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Programming & Testing</h3>
              <p className="text-gray-700">
                We'll program the key to communicate with your vehicle's systems and thoroughly test it to ensure it works perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Service Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Car Key Replacement in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                Our mobile car key replacement service brings professional auto locksmith expertise directly to your location in Manchester, saving you the hassle and expense of towing your vehicle to a dealership.
              </p>
              <p className="text-lg mb-6">
                Each of our mobile auto locksmiths in Manchester carries advanced key cutting machines, programming equipment, and a comprehensive inventory of key blanks and transponders for virtually all vehicle makes and models.
              </p>
              <p className="text-lg mb-6">
                Whether you're at home, work, or stranded in a parking lot in Manchester, our mobile service can reach you quickly to cut and program a new car key on-site, getting you back on the road with minimal disruption.
              </p>
              <p className="text-lg">
                Our mobile service is typically 30-50% less expensive than dealership replacements, while offering the convenience of coming to your location anywhere in the Greater Manchester area.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Our Mobile Service</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>We come to you anywhere in Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No towing costs or dealership appointments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Same-day service in most cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Advanced on-site key cutting and programming</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Significantly lower cost than dealerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Car Key Replacement in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Car className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Auto Locksmith Specialists</h3>
                <p className="text-gray-700">Our Manchester team specializes in automotive locksmith services, with extensive training and experience in car key replacement and programming for all vehicle types.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Truck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Mobile Service Throughout Manchester</h3>
                <p className="text-gray-700">We come to your location anywhere in Manchester, providing convenient on-site car key replacement without the need for towing or dealership visits.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">We use state-of-the-art key cutting machines and programming equipment to ensure precise, reliable car key replacements for all makes and models.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Cost-Effective Solutions</h3>
                <p className="text-gray-700">Our car key replacement services in Manchester typically cost 30-50% less than dealership prices, while offering greater convenience and faster service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our mobile car key replacement services cover all areas of Manchester and surrounding regions, including:
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does car key replacement cost in Manchester?</h3>
              <p className="text-gray-700">The cost of car key replacement in Manchester varies depending on your vehicle make, model, and key type. Standard mechanical keys typically range from £80-£120, transponder keys from £120-£180, remote key fobs from £150-£250, and smart keys from £200-£350. These prices are typically 30-50% less than dealership prices. We always provide a clear quote based on your specific vehicle before beginning any work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does it take to replace a car key in Manchester?</h3>
              <p className="text-gray-700">Most car key replacements in Manchester can be completed within 30-60 minutes once our mobile locksmith arrives at your location. Simple mechanical keys may take just 15-20 minutes, while complex smart keys or those requiring extensive programming might take up to 90 minutes. We aim to get you back on the road as quickly as possible with a fully functional replacement key.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you replace my car key if I've lost all keys?</h3>
              <p className="text-gray-700">Yes, we can replace car keys in Manchester even if you've lost all original keys. This process may take slightly longer and require additional verification of ownership (such as your vehicle registration document, photo ID, and proof of address). Our auto locksmiths have the specialized equipment to create new keys from scratch and program them to your vehicle's immobilizer system without original keys.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What information do I need to provide for car key replacement?</h3>
              <p className="text-gray-700">To replace your car key in Manchester, we'll need: 1) Your vehicle make, model, and year of manufacture, 2) Your vehicle registration number, 3) Proof of ownership (V5C registration document), 4) Photo ID, and 5) Your current location in Manchester. This information helps us prepare the correct key blank and programming equipment before arriving at your location, ensuring a fast and efficient replacement process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need a Car Key Replacement in Manchester?</h2>
          <p className="text-xl mb-8">
            Contact our auto locksmith team for fast, professional car key replacement at your location.
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