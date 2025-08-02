import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Key, Car, Smartphone, Settings, Shield, Clock, MapPin, Phone } from "lucide-react"

export default function CarKeysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Professional Car Key Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From basic keys to advanced smart keys, UK Lock provides comprehensive car key services 
            including cutting, programming, and replacement for all vehicle makes and models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +44 7309 903243
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +44 7936 755530
            </Button>
          </div>
        </div>
      </section>

      {/* Key Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Types of Car Keys We Handle</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-8 w-8 text-blue-600" />
                  <CardTitle>Basic Car Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Traditional metal keys for older vehicles. We can cut and duplicate these keys 
                  on-site using precision cutting equipment for perfect fit and function.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Older vehicles</Badge>
                  <Badge variant="outline">Precision cutting</Badge>
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
                  Keys with embedded microchips that communicate with your vehicle's immobilizer. 
                  We can cut, program, and clone these keys for most vehicle brands.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Chip programming</Badge>
                  <Badge variant="outline">All brands</Badge>
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
                  Remote control keys with buttons for locking, unlocking, and trunk release. 
                  We can repair, reprogram, or replace these fobs for all vehicle types.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Remote programming</Badge>
                  <Badge variant="outline">Button repair</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced proximity keys that allow keyless entry and push-button start. 
                  We can program and replace these sophisticated keys for modern vehicles.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Proximity keys</Badge>
                  <Badge variant="outline">Keyless entry</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-600" />
                  <CardTitle>Switchblade Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Folding keys that flip out from a remote fob. Popular in many modern vehicles. 
                  We can cut, program, and replace these complex key systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Folding design</Badge>
                  <Badge variant="outline">Complex systems</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Valet Keys</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Limited function keys for valet parking or temporary use. 
                  We can create these restricted keys for security purposes.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Limited access</Badge>
                  <Badge variant="outline">Security feature</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Car Key Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Key className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Key Cutting & Duplication</h3>
                  <p className="text-gray-600">
                    Precision cutting of new keys and duplication of existing keys using advanced 
                    computerized cutting machines for perfect fit and function.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Settings className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Key Programming</h3>
                  <p className="text-gray-600">
                    Programming of transponder chips, remote fobs, and smart keys to work with 
                    your vehicle's security system. On-site programming available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Key Replacement</h3>
                  <p className="text-gray-600">
                    Complete replacement of lost, stolen, or damaged keys including cutting, 
                    programming, and testing to ensure proper functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Remote Fob Repair</h3>
                  <p className="text-gray-600">
                    Repair of non-working remote key fobs including button replacement, 
                    battery replacement, and circuit board repair when possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Car className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Broken Key Extraction</h3>
                  <p className="text-gray-600">
                    Safe extraction of broken keys from ignition cylinders, door locks, 
                    and trunk locks without causing damage to the vehicle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mobile Service</h3>
                  <p className="text-gray-600">
                    All car key services available at your location. Our mobile vans are 
                    fully equipped with cutting machines and programming equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Brands */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Vehicle Brands We Support</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Audi", "BMW", "Mercedes-Benz", "Volkswagen", "Ford", "Vauxhall", 
              "Peugeot", "Renault", "Citroën", "Fiat", "Toyota", "Honda", 
              "Nissan", "Mazda", "Hyundai", "Kia", "Skoda", "Seat", "Volvo", "Jaguar"
            ].map((brand) => (
              <div key={brand} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <p className="font-medium text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Car Key Services?</h2>
          <p className="text-xl mb-8">
            Contact us today for professional car key cutting, programming, and replacement services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Call: +44 7309 903243
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Call: +44 7936 755530
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 