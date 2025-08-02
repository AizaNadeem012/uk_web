import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Phone, Clock, Shield, MapPin, Car, Key, Settings } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fair, competitive pricing for all our locksmith services. No hidden fees, 
            no surprises. Get quality service at reasonable rates across Manchester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Phone className="mr-2 h-5 w-5" />
              Get Quote: +44 7309 903243
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="mr-2 h-5 w-5" />
              Get Quote: +44 7936 755530
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Services Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Services Pricing</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200 hover:border-green-400 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Car className="h-8 w-8 text-green-600" />
                    <CardTitle>Car Unlocking</CardTitle>
                  </div>
                  <Badge variant="destructive">Emergency</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-4">£35 - £65</div>
                <CardDescription className="text-base mb-4">
                  Emergency car unlocking service. Price varies based on vehicle type and complexity.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Non-destructive methods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">20-30 minute response</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">All vehicle types</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Key className="h-8 w-8 text-green-600" />
                    <CardTitle>Key Replacement</CardTitle>
                  </div>
                  <Badge variant="destructive">Emergency</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-4">£45 - £120</div>
                <CardDescription className="text-base mb-4">
                  Lost key replacement including cutting and programming. Price depends on key type.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Basic keys: £45-£65</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Transponder keys: £75-£95</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Smart keys: £95-£120</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Settings className="h-8 w-8 text-green-600" />
                    <CardTitle>Ignition Repair</CardTitle>
                  </div>
                  <Badge variant="destructive">Emergency</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-4">£80 - £200</div>
                <CardDescription className="text-base mb-4">
                  Ignition repair and replacement services. Price varies by vehicle make and model.
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">On-site repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Parts included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Warranty included</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regular Services Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Regular Services Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Cutting Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic key cutting</span>
                    <span className="font-bold">£15-£25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transponder key cutting</span>
                    <span className="font-bold">£25-£35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remote key fob cutting</span>
                    <span className="font-bold">£30-£45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart key cutting</span>
                    <span className="font-bold">£40-£60</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Programming Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Transponder programming</span>
                    <span className="font-bold">£30-£50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remote fob programming</span>
                    <span className="font-bold">£25-£40</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart key programming</span>
                    <span className="font-bold">£50-£80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ECU programming</span>
                    <span className="font-bold">£80-£150</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Repair Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Remote fob repair</span>
                    <span className="font-bold">£20-£35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Broken key extraction</span>
                    <span className="font-bold">£25-£45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lock repair</span>
                    <span className="font-bold">£40-£80</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Immobiliser reset</span>
                    <span className="font-bold">£60-£100</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Additional Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Mobile service fee</span>
                    <span className="font-bold">£15-£25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency call-out</span>
                    <span className="font-bold">£20-£30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>After hours service</span>
                    <span className="font-bold">£30-£50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend service</span>
                    <span className="font-bold">£25-£40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Factors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Affects Our Pricing?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Vehicle Type</h3>
              <p className="text-gray-600 text-sm">
                Luxury and high-security vehicles may require specialized equipment and expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Key className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Key Complexity</h3>
              <p className="text-gray-600 text-sm">
                Smart keys and advanced transponder systems cost more than basic keys.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                Distance from our base location may affect mobile service fees.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Time of Day</h3>
              <p className="text-gray-600 text-sm">
                Emergency and after-hours services may have additional charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get a Free Quote Today</h2>
          <p className="text-xl mb-8">
            Contact us for a detailed quote based on your specific needs. 
            We offer competitive pricing and transparent costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Get Quote: +44 7309 903243
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Get Quote: +44 7936 755530
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 