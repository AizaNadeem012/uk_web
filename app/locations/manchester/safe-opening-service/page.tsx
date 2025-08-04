export const metadata = {
  title: "Safe Opening Service Manchester | Professional & Secure | UK Lock",
  description: "Professional safe opening services in Manchester by UK Lock. We can open all types of safes including home safes, commercial safes, digital safes, and antique safes with non-destructive methods throughout Manchester.",
  openGraph: {
    title: "Safe Opening Service Manchester | Professional & Secure",
    description: "Professional safe opening in Manchester for all safe types. Home, commercial, digital, and antique safes with non-destructive methods.",
    url: "https://www.uklock.co.uk/locations/manchester/safe-opening-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Opening Service Manchester | Professional & Secure",
    description: "Professional safe opening in Manchester for all safe types. Home, commercial, digital, and antique safes with non-destructive methods.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/safe-opening-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench as Tool, Lock, CheckCircle, Wrench } from "lucide-react"

export default function SafeOpeningManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Safe Opening Service in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out of your safe? Forgotten combination? UK Lock provides professional safe opening services throughout Manchester for all types of safes. Our expert locksmiths can open home safes, commercial safes, digital safes, and antique safes using non-destructive methods whenever possible.
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

      {/* Safe Opening Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Safe Opening Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Home Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional opening of home safes in Manchester, including wall safes, floor safes, and freestanding safes. We can help if you've forgotten the combination, lost the key, or if the safe mechanism has failed.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Wall safes</Badge>
                  <Badge variant="outline">Floor safes</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert opening of commercial safes in Manchester, including office safes, deposit safes, data safes, and high-security safes. Our locksmiths understand the complex mechanisms of commercial-grade safes.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Office safes</Badge>
                  <Badge variant="outline">Deposit safes</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Digital Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Specialized opening of digital and electronic safes in Manchester. We can help with forgotten codes, electronic failures, dead batteries, and malfunctioning keypads to regain access to your valuables.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Electronic safes</Badge>
                  <Badge variant="outline">Keypad failures</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Antique Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Careful opening of antique and vintage safes in Manchester. Our locksmiths have experience with historical safe mechanisms and use techniques that preserve the integrity and value of these collectible items.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Vintage safes</Badge>
                  <Badge variant="outline">Historical mechanisms</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Gun Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Secure opening of gun safes in Manchester. We understand the importance of maintaining the security features of these specialized safes while providing access when legitimate owners are locked out.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Firearm safes</Badge>
                  <Badge variant="outline">Security verification</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Tool className="h-8 w-8 text-blue-600" />
                  <CardTitle>Safe Repair & Maintenance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  After opening your safe in Manchester, we can provide repair and maintenance services to ensure it functions properly. We can replace damaged components, service mechanisms, and reset combinations.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Mechanism repair</Badge>
                  <Badge variant="outline">Combination reset</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safe Opening Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Safe Opening Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Initial Consultation</h3>
              <p className="text-gray-700">
                We gather information about your safe (make, model, type) and the nature of the problem to determine the best approach for opening it.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Ownership Verification</h3>
              <p className="text-gray-700">
                We verify your ownership of the safe through documentation and ID to ensure we're providing service to the legitimate owner.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Non-Destructive Methods</h3>
              <p className="text-gray-700">
                We attempt to open your safe using specialized tools and techniques that don't damage the safe whenever possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Repair & Reset</h3>
              <p className="text-gray-700">
                After opening, we repair any components if needed and reset the combination or provide new keys to restore full functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Methods Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Safe Opening in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we prioritize non-destructive methods when opening safes in Manchester. Our locksmiths are trained in advanced techniques that allow us to open most safes without drilling or causing damage.
              </p>
              <p className="text-lg mb-6">
                Using specialized tools and equipment, we can manipulate the mechanical components of combination locks, bypass electronic systems, or decode the combination to gain access without compromising the safe's integrity.
              </p>
              <p className="text-lg mb-6">
                For digital safes, we can often use electronic bypass methods or manufacturer override codes to regain access when the normal opening procedure fails due to forgotten codes or electronic malfunctions.
              </p>
              <p className="text-lg">
                In cases where non-destructive methods aren't possible (such as with some high-security safes or severely damaged mechanisms), we'll discuss all options with you before proceeding with any drilling or other invasive techniques.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Non-Destructive Opening</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Preserves the integrity and value of your safe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintains existing security features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Often faster than destructive methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Typically more cost-effective</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Immediate use after opening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Safe Opening in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Emergency Service Includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>24/7 availability throughout Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Rapid response times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Mobile service at your location</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Specialized tools and equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg mb-6">
                We understand that being locked out of your safe can be an emergency, especially when you need immediate access to important documents, medications, or valuables stored inside.
              </p>
              <p className="text-lg mb-6">
                Our emergency safe opening service in Manchester is available 24 hours a day, 7 days a week, to help you regain access to your safe as quickly as possible.
              </p>
              <p className="text-lg mb-6">
                Our mobile locksmiths will come to your location in Manchester with all the necessary tools and equipment to open your safe on-site, minimizing disruption and inconvenience.
              </p>
              <p className="text-lg">
                We prioritize emergency calls and strive to provide the fastest possible response times throughout the Manchester area, typically arriving within 30-60 minutes of your call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Safe Opening in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Safe Opening Specialists</h3>
                <p className="text-gray-700">Our Manchester team includes locksmiths who specialize in safe opening, with extensive training and experience in various safe types and mechanisms.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Tool className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Non-Destructive Techniques</h3>
                <p className="text-gray-700">We prioritize non-destructive opening methods whenever possible, preserving the integrity and value of your safe while providing access.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-700">Our safe opening service in Manchester is available around the clock, ensuring you can get help whenever you need it, day or night.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Complete Safe Services</h3>
                <p className="text-gray-700">Beyond opening, we offer safe repair, maintenance, combination changes, and security upgrades to ensure your safe functions properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Safe Opening Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our safe opening services cover all areas of Manchester and surrounding regions, including:
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Safe Opening FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does safe opening cost in Manchester?</h3>
              <p className="text-gray-700">The cost of safe opening in Manchester varies depending on the type of safe, the opening method required, and the complexity of the job. Basic home safes typically range from £150-£300, while commercial or high-security safes may cost £300-£600 or more. Non-destructive methods are generally less expensive than drilling. We always provide a clear quote before beginning any work, and our emergency service has transparent pricing with no hidden fees.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does it take to open a safe?</h3>
              <p className="text-gray-700">The time required to open a safe in Manchester depends on the type of safe, the nature of the problem, and the method used. Simple home safes might be opened in 30-60 minutes using non-destructive methods. More complex safes, especially high-security models, might take 1-3 hours. Digital safes with electronic failures can sometimes be opened quickly with override codes, while antique safes might require more time due to their unique mechanisms. We'll provide a time estimate based on your specific situation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What documentation do I need to prove ownership?</h3>
              <p className="text-gray-700">To verify ownership of a safe in Manchester, we typically require: 1) A valid photo ID (passport, driver's license), 2) Proof of purchase or warranty documents for the safe, 3) Property ownership or rental agreement showing your name and the address where the safe is located, and 4) For business safes, company documentation showing your authority to authorize the opening. These requirements help us ensure we're providing service to legitimate owners only.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you open any type of safe?</h3>
              <p className="text-gray-700">Our Manchester locksmiths can open most types of safes, including home safes, commercial safes, digital safes, antique safes, gun safes, floor safes, wall safes, and deposit safes. We have experience with major brands including Chubb, Yale, Sentry, Phoenix, Burton, Dudley, and many others. While some extremely high-security or specialized safes might present unique challenges, we have the tools, techniques, and expertise to handle most safe opening situations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need a Safe Opened in Manchester?</h2>
          <p className="text-xl mb-8">
            Contact our locksmith team for fast, professional safe opening at your location.
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