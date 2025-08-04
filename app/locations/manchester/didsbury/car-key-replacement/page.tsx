export const metadata = {
  title: "Car Key Replacement Didsbury | Lost & Broken Keys | UK Lock",
  description: "Professional car key replacement in Didsbury by UK Lock. We provide replacement keys for all makes and models, including standard keys, transponder keys, remote fobs, and smart keys. Mobile service with fast response times throughout Didsbury and surrounding areas.",
  openGraph: {
    title: "Car Key Replacement Didsbury | Lost & Broken Keys",
    description: "Fast, professional car key replacement in Didsbury for all makes and models. Standard keys, transponder keys, remote fobs, and smart keys available.",
    url: "https://www.uklock.co.uk/locations/manchester/didsbury/car-key-replacement",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Key Replacement Didsbury | Lost & Broken Keys",
    description: "Fast, professional car key replacement in Didsbury for all makes and models. Standard keys, transponder keys, remote fobs, and smart keys available.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/didsbury/car-key-replacement",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Car, CheckCircle, Zap, Smartphone } from "lucide-react"

export default function CarKeyReplacementDidsburyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Car Key Replacement in Didsbury</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Lost or broken your car key in Didsbury? UK Lock provides fast, professional car key replacement services for all makes and models. Our mobile auto locksmiths can come to your location in Didsbury and cut, program, and replace your car keys on the spot.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement Services in Didsbury</h2>
          
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
                  Need a replacement for a basic car key in Didsbury? We can cut new standard keys for older vehicles that don't have electronic components, providing you with a reliable replacement quickly.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Fast service</Badge>
                  <Badge variant="outline">Affordable option</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-blue-600" />
                  <CardTitle>Transponder Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost your transponder key in Didsbury? Our specialists can cut and program new transponder keys for vehicles with immobilizer systems, ensuring they communicate correctly with your car's ECU.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Programming included</Badge>
                  <Badge variant="outline">All makes & models</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Remote Key Fobs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Having issues with your remote key fob in Didsbury? We can replace and program remote key fobs for most vehicle makes and models, restoring the convenience of keyless entry.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Remote programming</Badge>
                  <Badge variant="outline">Battery replacement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Keys & Proximity Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost your smart key or proximity key in Didsbury? Our auto locksmiths can replace and program sophisticated smart keys and proximity keys for modern vehicles with keyless start systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Advanced programming</Badge>
                  <Badge variant="outline">Keyless technology</Badge>
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
                  Want a spare car key in Didsbury for peace of mind? We can create duplicate keys for your vehicle, ensuring you always have a backup in case of loss or damage to your primary key.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Preventive measure</Badge>
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
                  Is your car key damaged or malfunctioning in Didsbury? Our technicians can repair broken key shells, replace worn buttons, fix internal electronics, and address other common key issues.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Cost-saving option</Badge>
                  <Badge variant="outline">Quick turnaround</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Brands We Cover in Didsbury</h2>
          
          <p className="text-lg text-center mb-8">
            Our Didsbury auto locksmiths can replace keys for virtually all car makes and models, including:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Ford</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Vauxhall</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Volkswagen</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">BMW</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Mercedes</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Audi</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Toyota</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Nissan</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Honda</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Hyundai</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Kia</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Peugeot</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Renault</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Citroen</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Fiat</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Volvo</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Land Rover</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <p className="font-medium text-blue-800">Jaguar</p>
            </div>
          </div>
          
          <p className="text-lg text-center mt-8">
            And many more! If you don't see your car brand listed, just ask—we likely cover it too.
          </p>
        </div>
      </section>

      {/* Car Key Replacement Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Car Key Replacement Process in Didsbury</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">
                Call or WhatsApp our Didsbury auto locksmith team. Provide your vehicle details (make, model, year) and describe your key issue (lost, broken, etc.).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Mobile Service</h3>
              <p className="text-gray-700">
                Our mobile auto locksmith will come to your location in Didsbury, whether you're at home, work, or stranded somewhere. No need to tow your vehicle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Key Creation</h3>
              <p className="text-gray-700">
                Using specialized equipment, we'll cut a new key for your vehicle on the spot. For electronic keys, we'll also program the transponder chip or remote functions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing & Handover</h3>
              <p className="text-gray-700">
                We'll thoroughly test your new key to ensure it works perfectly with your vehicle, then provide you with your new key along with any necessary guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Service Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mobile Car Key Replacement in Didsbury</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                When you've lost your car keys or they're damaged beyond repair, the last thing you want is the hassle of getting your vehicle to a dealership or workshop. That's why UK Lock offers a fully mobile car key replacement service throughout Didsbury.
              </p>
              <p className="text-lg mb-6">
                Our specialized auto locksmith vans are equipped with advanced key cutting machines, programming devices, and a comprehensive range of key blanks for virtually all makes and models of vehicles.
              </p>
              <p className="text-lg mb-6">
                This mobile capability means we can come directly to your location in Didsbury—whether you're at home, work, or stranded in a parking lot—and create a new key for your vehicle on the spot.
              </p>
              <p className="text-lg">
                Our Didsbury auto locksmiths can typically complete the entire car key replacement process in 30-60 minutes, depending on your vehicle type, getting you back on the road quickly without the need for towing or dealership visits.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Our Mobile Service:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>We come to your location anywhere in Didsbury</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fast response times (typically 20-30 minutes for emergencies)</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>On-site key cutting and programming capabilities</span>
                </li>
                <li className="flex items-start">
                  <Car className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No need to tow your vehicle to a dealership</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Typically 40-60% cheaper than dealership prices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Car Key Replacement in Didsbury</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Specialized Equipment</h3>
                <p className="text-gray-700">Our Didsbury auto locksmiths use advanced key cutting machines and programming devices to create perfect replacements for all types of car keys.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-700">We offer rapid response times throughout Didsbury, typically reaching you within 20-30 minutes in emergency situations.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
                <p className="text-gray-700">Our car key replacement services in Didsbury are typically 40-60% cheaper than dealership prices, saving you money without compromising quality.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Guaranteed Work</h3>
                <p className="text-gray-700">All our car key replacements in Didsbury come with a comprehensive guarantee, ensuring your new key works perfectly with your vehicle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Didsbury Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement Coverage in Didsbury</h2>
          
          <p className="text-lg text-center mb-8">
            Our car key replacement services cover all areas of Didsbury and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury Village</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">West Didsbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">East Didsbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fog Lane</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Barlow Moor</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Burton Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Wilmslow Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Old Lansdowne Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Palatine Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Parrs Wood</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Mersey Valley</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does car key replacement cost in Didsbury?</h3>
              <p className="text-gray-700">The cost of car key replacement in Didsbury varies depending on your vehicle make, model, and key type. Standard keys typically start from £90, transponder keys from £120, remote key fobs from £150, and smart keys from £180. We always provide a clear quote before beginning any work, and our prices are typically 40-60% lower than dealership rates.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you replace my car key if I've lost all keys?</h3>
              <p className="text-gray-700">Yes, we can replace your car key even if you've lost all your keys. Our Didsbury auto locksmiths can create a new key from scratch by accessing your vehicle's immobilizer system and programming a new key to match. This process may take slightly longer than a standard replacement but can be completed on-site without the need for dealership involvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Car Key Replacement in Didsbury?</h2>
          <p className="text-xl mb-8">
            Don't get stranded without your car key. Our Didsbury auto locksmiths can create a new key for you on the spot.
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