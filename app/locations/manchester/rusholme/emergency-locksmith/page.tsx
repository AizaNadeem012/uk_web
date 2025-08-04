export const metadata = {
  title: "Emergency Locksmith Rusholme | 24/7 Service | UK Lock",
  description: "24/7 emergency locksmith services in Rusholme by UK Lock. Fast response for lockouts, break-ins, broken keys, and lock failures with non-destructive entry techniques throughout Rusholme, Manchester.",
  openGraph: {
    title: "Emergency Locksmith Rusholme | 24/7 Service",
    description: "24/7 emergency locksmith in Rusholme. Fast response for lockouts, break-ins, broken keys, and lock failures with non-destructive entry techniques.",
    url: "https://www.uklock.co.uk/locations/manchester/rusholme/emergency-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith Rusholme | 24/7 Service",
    description: "24/7 emergency locksmith in Rusholme. Fast response for lockouts, break-ins, broken keys, and lock failures with non-destructive entry techniques.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/rusholme/emergency-locksmith",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, CheckCircle } from "lucide-react"

export default function EmergencyLocksmithRusholmePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Lock className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Emergency Locksmith in Rusholme</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            24/7 emergency locksmith services throughout Rusholme, Manchester. UK Lock provides fast response for lockouts, break-ins, broken keys, and lock failures with professional, non-destructive entry techniques.
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

      {/* Emergency Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Services in Rusholme</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Residential Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fast, non-destructive entry to your Rusholme home when you're locked out. Our emergency locksmiths use specialized techniques to open your door without damaging the lock or door, getting you back inside quickly and safely.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">24/7 Service</Badge>
                  <Badge variant="outline">Non-Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Commercial Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Emergency access to your Rusholme business premises when you're locked out. We understand the urgency of business lockouts and provide priority response to minimize disruption to your operations.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Priority Response</Badge>
                  <Badge variant="outline">Business Security</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Vehicle Lockouts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Specialized assistance when you're locked out of your vehicle in Rusholme. Our auto locksmiths use advanced tools to safely gain entry to your car, van, or motorcycle without causing damage.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Auto Specialists</Badge>
                  <Badge variant="outline">Roadside Assistance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Key Extraction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional removal of broken keys from locks in Rusholme. Using specialized extraction tools, we can safely remove key fragments without damaging the lock, then provide a replacement key on the spot.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Specialized Tools</Badge>
                  <Badge variant="outline">On-Site Key Cutting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Emergency Lock Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Urgent repairs for failed or damaged locks in Rusholme. Whether your lock has suddenly stopped working, been damaged in a break-in attempt, or is malfunctioning, we can repair or replace it immediately.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Rapid Repair</Badge>
                  <Badge variant="outline">All Lock Types</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Post Break-In Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Immediate security restoration after a break-in at your Rusholme property. We can repair or replace damaged locks, reinforce entry points, and upgrade your security to prevent future incidents.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Security Upgrade</Badge>
                  <Badge variant="outline">Burglary Repair</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fast Response Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Fast Response in Rusholme</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Response Times:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>15-30 minutes</strong> for urgent lockouts in Rusholme</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>20-40 minutes</strong> for break-in security restoration</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>15-30 minutes</strong> for vehicle lockouts</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>30-45 minutes</strong> for emergency lock repairs</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span><strong>Available 24/7</strong> including nights, weekends & holidays</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg mb-6">
                When you're facing a lock emergency in Rusholme, every minute counts. Our emergency locksmiths are strategically positioned throughout Manchester to provide the fastest possible response times.
              </p>
              <p className="text-lg mb-6">
                We maintain a fleet of fully equipped mobile workshops that are always ready to respond to emergencies in Rusholme and surrounding areas, ensuring we can reach you quickly regardless of the time or day.
              </p>
              <p className="text-lg mb-6">
                Our locksmiths are local to the Manchester area and know Rusholme well, allowing them to take the most efficient routes to reach you without delays, even during peak traffic hours.
              </p>
              <p className="text-lg">
                We prioritize emergency calls based on urgency, with special priority given to vulnerable individuals, families with young children, and situations that pose security risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Process in Rusholme</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Emergency Call</h3>
              <p className="text-gray-700">
                Contact our 24/7 emergency line or WhatsApp. We'll gather essential information about your situation in Rusholme and dispatch the nearest locksmith.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Rapid Arrival</h3>
              <p className="text-gray-700">
                Our Rusholme locksmith will arrive promptly, fully equipped with specialized tools and parts to handle your emergency on the first visit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Expert Solution</h3>
              <p className="text-gray-700">
                We'll quickly assess the situation and implement the most appropriate solution, prioritizing non-destructive methods whenever possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Security Check</h3>
              <p className="text-gray-700">
                After resolving the immediate emergency, we'll perform a quick security check and offer advice to prevent future lock emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Non-Destructive Entry in Rusholme</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we specialize in non-destructive entry techniques for emergency lockout situations in Rusholme. Our goal is to get you back inside without causing damage to your locks or doors.
              </p>
              <p className="text-lg mb-6">
                Our Rusholme locksmiths are trained in advanced lock picking, lock bumping, and bypass techniques that allow us to open most locks without drilling or breaking them, saving you the cost of unnecessary lock replacements.
              </p>
              <p className="text-lg mb-6">
                We invest in specialized tools and equipment specifically designed for non-destructive entry, including professional lock picks, decoder tools, and key analyzers that allow us to open locks with precision and care.
              </p>
              <p className="text-lg">
                In rare cases where non-destructive methods aren't possible (such as with certain high-security locks or severely damaged mechanisms), we'll explain your options before proceeding with any destructive entry methods.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Benefits of Non-Destructive Entry:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Preserves your existing locks and hardware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Saves money on unnecessary lock replacements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Faster resolution of your lockout emergency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No damage to doors or surrounding areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintains warranty on locks and door hardware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Service Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">24/7 Emergency Service in Rusholme</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">We're Always Available For:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Late-night lockouts in Rusholme</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Weekend and holiday emergencies</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Early morning lock failures</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>After-hours business security issues</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Urgent post-break-in security restoration</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-lg mb-6">
                Lock emergencies don't follow a 9-to-5 schedule, which is why our emergency locksmith service in Rusholme is available 24 hours a day, 7 days a week, 365 days a year.
              </p>
              <p className="text-lg mb-6">
                We maintain full service capabilities around the clock, with no reduction in service quality or response times during nights, weekends, or holidays. Our emergency team is always fully staffed and equipped.
              </p>
              <p className="text-lg mb-6">
                Our 24/7 service includes all our emergency capabilities: lockouts, broken key extraction, lock repairs, security restoration after break-ins, and emergency lock replacements throughout Rusholme.
              </p>
              <p className="text-lg">
                While many locksmiths charge substantial premiums for after-hours service, we keep our emergency rates reasonable and transparent, with no hidden fees or excessive night/weekend surcharges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Emergency Locksmith in Rusholme</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                <p className="text-gray-700">Our strategically positioned locksmiths can reach you quickly in Rusholme, with typical response times of 15-30 minutes for urgent emergencies.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Skilled Technicians</h3>
                <p className="text-gray-700">Our Rusholme emergency locksmiths are highly trained professionals with extensive experience in all types of lock emergencies and non-destructive entry techniques.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Equipped</h3>
                <p className="text-gray-700">Our mobile workshops carry comprehensive tools and parts to handle virtually any lock emergency on the first visit, without delays waiting for parts or equipment.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-700">Our emergency service is genuinely 24/7, with no reduction in service quality or capabilities during nights, weekends, or holidays in Rusholme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rusholme Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Coverage in Rusholme</h2>
          
          <p className="text-lg text-center mb-8">
            Our emergency locksmith services cover all areas of Rusholme and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rusholme</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Curry Mile</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Victoria Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Moss Side</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Longsight</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ardwick</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton-on-Medlock</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How quickly can you reach me in Rusholme?</h3>
              <p className="text-gray-700">For emergency locksmith services in Rusholme, our typical response time is 15-30 minutes depending on your exact location and current traffic conditions. We prioritize urgent cases such as lockouts with children inside, security vulnerabilities after break-ins, and elderly or vulnerable customers. Our locksmiths are strategically positioned throughout Manchester to ensure the fastest possible response to Rusholme emergencies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does emergency locksmith service cost in Rusholme?</h3>
              <p className="text-gray-700">Emergency locksmith services in Rusholme typically range from £80-£200 depending on the service required, time of day, and complexity. Residential lockouts generally cost £80-£120, while commercial lockouts might range from £100-£150. Vehicle lockouts typically cost £100-£150. After-hours services (nights, weekends, holidays) may include a modest callout fee. We always provide a clear quote before beginning any work, with no hidden charges.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you open any lock without damaging it?</h3>
              <p className="text-gray-700">We can open most standard locks non-destructively in Rusholme, including Yale locks, euro cylinders, mortice locks, and most UPVC door mechanisms. Our success rate with non-destructive entry is over 90%. However, certain high-security locks, severely damaged locks, or locks with active anti-manipulation features might require destructive methods. We always attempt non-destructive techniques first and will only resort to destructive methods with your explicit permission after explaining the options.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What ID do I need to prove the property is mine?</h3>
              <p className="text-gray-700">For security purposes, we require proof of identity and property ownership/right of access when providing emergency locksmith services in Rusholme. Acceptable ID includes a photo ID (passport, driving license) plus proof of address matching the property (utility bill, bank statement, tenancy agreement). For vehicle lockouts, we require proof of ownership such as the V5C registration document or insurance documents. For commercial properties, we may require additional verification such as business documentation or contact with other key holders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Locked Out in Rusholme?</h2>
          <p className="text-xl mb-8">
            Contact our emergency locksmith team for fast, professional assistance 24/7.
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