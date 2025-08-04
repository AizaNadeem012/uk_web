export const metadata = {
  title: "Safe Opening Service Liverpool | Emergency Safe Locksmith | UK Lock",
  description: "Need a safe opened in Liverpool? UK Lock provides professional safe opening services for all types of safes. Our expert locksmiths can open safes with forgotten combinations, lost keys, or mechanical failures without damage. Available 24/7 for emergency safe opening throughout Liverpool.",
  openGraph: {
    title: "Safe Opening Service Liverpool | Emergency Safe Locksmith",
    description: "Professional safe opening services in Liverpool by UK Lock. Expert locksmiths for all safe types.",
    url: "https://www.uklock.co.uk/locations/liverpool/safe-opening-service",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Opening Service Liverpool | Emergency Safe Locksmith",
    description: "Professional safe opening services in Liverpool by UK Lock. Expert locksmiths for all safe types.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/liverpool/safe-opening-service",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Tool, Lock, AlertTriangle, CheckCircle, Building, Home } from "lucide-react"

export default function SafeOpeningServiceLiverpoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Safe Opening Service in Liverpool</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locked out of your safe in Liverpool? UK Lock provides professional safe opening services for all types of safes. Our expert locksmiths can open safes with forgotten combinations, lost keys, or mechanical failures.
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Safe Opening Services in Liverpool</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked out of your safe in Liverpool? Our emergency safe opening service is available 24/7 to help you regain access to your valuables quickly.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">24/7 service</Badge>
                  <Badge variant="outline">Fast response</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Combination Recovery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Forgotten your safe combination in Liverpool? Our locksmiths can recover or reset combinations for most types of combination safes.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Non-destructive</Badge>
                  <Badge variant="outline">All safe brands</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Tool className="h-8 w-8 text-blue-600" />
                  <CardTitle>Lost Key Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Lost or broken safe key in Liverpool? We can open your safe and provide replacement keys or convert to a new locking mechanism.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Key cutting</Badge>
                  <Badge variant="outline">Lock replacement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Home Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our Liverpool locksmiths can open all types of home safes, including wall safes, floor safes, and freestanding safes with minimal disruption.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Residential service</Badge>
                  <Badge variant="outline">Discreet assistance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Safe Opening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We provide professional safe opening services for Liverpool businesses, including high-security commercial safes and deposit safes.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Business solutions</Badge>
                  <Badge variant="outline">Minimal downtime</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Digital Safe Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experiencing issues with your electronic or digital safe in Liverpool? We can diagnose and repair electronic failures and reset digital locks.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Electronic expertise</Badge>
                  <Badge variant="outline">Battery replacement</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safe Types We Open Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Types of Safes We Open in Liverpool</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Combination Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Key Operated Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Digital Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Biometric Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Floor Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Wall Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Deposit Safes</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Lock className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold">Fire Safes</h3>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg max-w-3xl mx-auto">
              Our Liverpool safe opening specialists are trained to work with all major safe brands, including Chubb, Yale, Dudley, Phoenix, Burton, SentrySafe, and many more.
            </p>
          </div>
        </div>
      </section>

      {/* Our Safe Opening Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Safe Opening Process in Liverpool</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Initial Contact</h3>
              <p className="text-gray-700">
                Contact our Liverpool safe opening specialists with details about your safe and the issue you're experiencing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Assessment</h3>
              <p className="text-gray-700">
                Our locksmith will assess your safe to determine the most appropriate and least destructive method of opening.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Safe Opening</h3>
              <p className="text-gray-700">
                Using specialized tools and techniques, we'll open your safe with minimal or no damage to the safe or its contents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Restoration</h3>
              <p className="text-gray-700">
                After opening, we can repair, reset, or replace the locking mechanism to restore your safe to full functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Safe Opening Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Safe Opening in Liverpool</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, our Liverpool safe opening specialists prioritize non-destructive entry methods whenever possible. This approach preserves the integrity and value of your safe while still allowing you to regain access to your valuables.
              </p>
              <p className="text-lg mb-6">
                Using specialized tools and techniques, our locksmiths can open many safes without drilling or causing damage. These methods include manipulation of the combination lock, electronic diagnostics for digital safes, and advanced key analysis for key-operated safes.
              </p>
              <p className="text-lg mb-6">
                Non-destructive safe opening is particularly important for high-value safes, antique safes, or situations where maintaining the safe's security features is essential.
              </p>
              <p className="text-lg">
                In cases where non-destructive methods aren't possible due to the safe's design or condition, we'll always discuss your options before proceeding with any drilling or other invasive techniques.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Non-Destructive Opening</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Preserves the value and integrity of your safe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Avoids costly replacement of the entire safe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintains the safe's security features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Often faster than destructive methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Immediate restoration of safe functionality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Safe Opening in Liverpool</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Specialized Expertise</h3>
                <p className="text-gray-700">Our Liverpool safe technicians are specifically trained in safe opening techniques, with experience working on all types and brands of safes.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Tool className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-700">We use specialized safe opening tools and diagnostic equipment that aren't available to general locksmiths or the public.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-700">Our Liverpool safe opening service is available around the clock for emergency situations when you need immediate access to your safe.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
                <p className="text-gray-700">All our safe opening work in Liverpool is fully insured, giving you peace of mind that your valuable safe and its contents are protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liverpool Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Safe Opening Service Coverage in Liverpool</h2>
          
          <p className="text-lg text-center mb-8">
            Our safe opening services cover all areas of Liverpool and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Liverpool City Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Anfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Everton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Toxteth</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Wavertree</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Allerton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Woolton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Childwall</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Aigburth</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Crosby</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bootle</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Birkenhead</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Safe Opening FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does it cost to open a safe in Liverpool?</h3>
              <p className="text-gray-700">The cost of safe opening in Liverpool varies depending on the type of safe, the method required to open it, and whether it's an emergency service. Basic safe opening services typically start from £150, while more complex safes or those requiring specialized techniques may cost more. We always provide a clear quote before beginning any work on your safe opening service in Liverpool.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Will my safe be damaged during the opening process?</h3>
              <p className="text-gray-700">At UK Lock, our Liverpool safe opening specialists prioritize non-destructive entry methods whenever possible. In many cases, we can open safes without causing any damage. However, some safes, particularly high-security models or those with malfunctioning locks, may require drilling or other invasive techniques. If this is necessary, we'll always discuss your options first and aim to minimize damage, focusing on areas that can be easily repaired.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Safe Opening Service in Liverpool?</h2>
          <p className="text-xl mb-8">
            Contact UK Lock for professional, discreet safe opening by experienced specialists.
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