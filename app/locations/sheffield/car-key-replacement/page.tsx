export const metadata = {
  title: "Car Key Replacement Sheffield | Fast Mobile Service | UK Lock",
  description: "Need car key replacement in Sheffield? UK Lock provides fast, professional car key replacement services throughout Sheffield. Our mobile auto locksmiths can cut and program new keys for all makes and models, including lost keys, broken keys, and spare keys.",
  openGraph: {
    title: "Car Key Replacement Sheffield | Fast Mobile Service",
    description: "UK Lock offers professional car key replacement services in Sheffield. Mobile service for all vehicle makes and models.",
    url: "https://www.uklock.co.uk/locations/sheffield/car-key-replacement",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Key Replacement Sheffield | Fast Mobile Service",
    description: "Professional car key replacement services in Sheffield by UK Lock. Mobile service for all vehicles.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/sheffield/car-key-replacement",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Key, Car, Settings, Smartphone } from "lucide-react"

export default function CarKeyReplacementSheffieldPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Car Key Replacement Sheffield</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Lost your car keys in Sheffield? Broken key? Need a spare? UK Lock provides fast, professional car key replacement services for all makes and models throughout Sheffield and surrounding areas.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement Services in Sheffield</h2>
          
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
                  Need a replacement for a standard car key in Sheffield? We can cut new keys for older vehicles that don't have electronic components or chips.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Precision cutting</Badge>
                  <Badge variant="outline">Older vehicles</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-8 w-8 text-blue-600" />
                  <CardTitle>Transponder Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost or damaged transponder key in Sheffield? We can cut and program new transponder keys for vehicles with immobilizer systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Chip programming</Badge>
                  <Badge variant="outline">All makes & models</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <CardTitle>Remote Key Fobs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Need a replacement remote key fob in Sheffield? We can supply and program new remote fobs for vehicles with central locking systems.
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
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Keys & Proximity Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost your smart key or proximity key in Sheffield? We can replace and program sophisticated keyless entry systems for modern vehicles.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Keyless entry</Badge>
                  <Badge variant="outline">Advanced programming</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Spare Car Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Want a spare car key in Sheffield for peace of mind? We can create additional keys for your vehicle to prevent future lockout situations.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Preventative measure</Badge>
                  <Badge variant="outline">All key types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Broken or damaged car key in Sheffield? In some cases, we can repair existing keys, saving you the cost of a complete replacement.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Cost-effective</Badge>
                  <Badge variant="outline">Quick solution</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement for All Makes & Models in Sheffield</h2>
          
          <p className="text-lg text-center mb-8">
            Our Sheffield car key replacement service covers all major vehicle brands, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Ford</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Vauxhall</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Volkswagen</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">BMW</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Audi</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Mercedes</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Toyota</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Nissan</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Honda</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Hyundai</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Kia</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Peugeot</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Renault</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Citroen</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">Fiat</div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center font-medium">And many more...</div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Car Key Replacement Process in Sheffield</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">
                Call or message us with details about your vehicle and key requirements in Sheffield. We'll provide an initial quote and arrange service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Mobile Service</h3>
              <p className="text-gray-700">
                Our mobile locksmith will come to your location in Sheffield with all the necessary equipment to create your new car key on-site.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Key Cutting</h3>
              <p className="text-gray-700">
                We'll cut a new key for your vehicle using state-of-the-art equipment, ensuring a perfect match to your car's lock system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Programming</h3>
              <p className="text-gray-700">
                For electronic keys, we'll program the transponder chip or remote to communicate properly with your vehicle's systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Car Key Replacement in Sheffield</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Mobile Service</h3>
                <p className="text-gray-700">Our mobile auto locksmiths can reach you anywhere in Sheffield, typically within 30-60 minutes, to replace your car key on the spot.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">We use the latest key cutting and programming technology to create perfect replacement keys for all vehicle makes and models in Sheffield.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Certified</h3>
                <p className="text-gray-700">Our Sheffield auto locksmiths are fully certified, insured, and experienced in all aspects of car key replacement and programming.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Smartphone className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-700">We offer transparent, competitive pricing for car key replacement in Sheffield, often 40-60% less than main dealer prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sheffield Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement Coverage in Sheffield</h2>
          
          <p className="text-lg text-center mb-8">
            Our car key replacement services cover all areas of Sheffield and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Sheffield City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ecclesall</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Hillsborough</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Crookes</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Dore</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Totley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Meadowhead</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chapeltown</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Woodseats</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Darnall</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Gleadless</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rotherham</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Key Replacement FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does car key replacement cost in Sheffield?</h3>
              <p className="text-gray-700">Car key replacement costs in Sheffield typically range from £80 to £250, depending on your vehicle make, model, and key type. Standard keys are at the lower end of the range, while smart keys and proximity keys for luxury vehicles may cost more. We always provide a clear quote before beginning any work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you replace my car key if I've lost all keys?</h3>
              <p className="text-gray-700">Yes, we can replace car keys in Sheffield even if you've lost all your original keys. Our auto locksmiths can create new keys from scratch by accessing your vehicle's ECU and programming new keys to match your car's immobilizer system. This service is available for most vehicle makes and models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Car Key Replacement in Sheffield?</h2>
          <p className="text-xl mb-8">
            Don't wait at the dealership. Our mobile auto locksmiths in Sheffield can create your new car key on the spot.
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