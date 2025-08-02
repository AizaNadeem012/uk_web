import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, MapPin, Shield, Zap, Car } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Zap className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">24/7 Emergency Auto Locksmith Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out of your car? Lost your keys? Need immediate assistance? 
            UK Lock provides instant emergency locksmith services across Manchester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +44 7309 903243
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +44 7936 755530
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Services We Provide</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-red-200 hover:border-red-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-red-600" />
                  <CardTitle>Car Lockout Emergency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked out of your vehicle? Our expert locksmiths can unlock any car, truck, or van within 20-30 minutes. 
                  We use non-destructive methods to ensure your vehicle remains undamaged.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="destructive" className="mr-2">24/7 Available</Badge>
                  <Badge variant="secondary">20-30 min response</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-red-600" />
                  <CardTitle>Lost Key Replacement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost your car keys? We can cut and program new keys on-site for most vehicle makes and models. 
                  From basic keys to advanced transponder and smart keys, we handle it all.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="destructive" className="mr-2">On-site service</Badge>
                  <Badge variant="secondary">All vehicle types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-red-600" />
                  <CardTitle>Broken Key Extraction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Key broken in ignition or door lock? Our specialists can safely extract broken keys 
                  without causing damage to your vehicle's locking mechanism.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="destructive" className="mr-2">Safe extraction</Badge>
                  <Badge variant="secondary">No damage guarantee</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-red-600" />
                  <CardTitle>Ignition Repair</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Car won't start? Ignition problems can be fixed on-site. We repair and replace 
                  ignition cylinders, tumblers, and related components for all vehicle types.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="destructive" className="mr-2">On-site repair</Badge>
                  <Badge variant="secondary">All makes & models</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-red-600" />
                  <CardTitle>Mobile Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We come to you anywhere in Manchester. Our fully equipped mobile vans carry 
                  all necessary tools and parts to handle any automotive locksmith emergency.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="destructive" className="mr-2">Mobile service</Badge>
                  <Badge variant="secondary">Fully equipped</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 hover:border-red-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Phone className="h-8 w-8 text-red-600" />
                  <CardTitle>Remote Key Programming</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Remote key fob not working? We can reprogram, repair, or replace remote keys 
                  for all vehicle brands. Including keyless entry and proximity keys.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="destructive" className="mr-2">All brands</Badge>
                  <Badge variant="secondary">Keyless entry</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Response Times</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">20-30 Minutes</h3>
              <p className="text-gray-600">Average response time across Manchester</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">24/7 Service</h3>
              <p className="text-gray-600">Available anytime, day or night</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">100% Coverage</h3>
              <p className="text-gray-600">All areas of Greater Manchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Areas We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Manchester City Centre", "Salford", "Stockport", "Oldham",
              "Rochdale", "Bury", "Bolton", "Wigan", "Trafford", "Tameside",
              "Didsbury", "Chorlton", "Withington", "Fallowfield", "Moss Side",
              "Cheetham Hill", "Hulme", "Ancoats", "Northern Quarter"
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-800">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Emergency Help?</h2>
          <p className="text-xl mb-8">
            Don't wait! Call us immediately for fast, reliable emergency locksmith services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Emergency: +44 7309 903243
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg">
              <Phone className="mr-2 h-6 w-6" />
              Emergency: +44 7936 755530
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 