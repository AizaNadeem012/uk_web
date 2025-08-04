import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench as Tool, Lock, CheckCircle, Wrench, DoorClosed } from "lucide-react"

export const metadata = {
  title: "UPVC Door Lock Repair Manchester | Fast & Reliable Service | UK Lock",
  description: "Professional UPVC door lock repair services in Manchester by UK Lock. We fix jammed mechanisms, misaligned doors, broken multipoint locks, and handle problems with same-day service throughout Manchester.",
  openGraph: {
    title: "UPVC Door Lock Repair Manchester | Fast & Reliable Service",
    description: "Professional UPVC door lock repair in Manchester. We fix jammed mechanisms, misaligned doors, broken multipoint locks, and handle problems with same-day service.",
    url: "https://www.uklock.co.uk/locations/manchester/upvc-door-lock-repair",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPVC Door Lock Repair Manchester | Fast & Reliable Service",
    description: "Professional UPVC door lock repair in Manchester. We fix jammed mechanisms, misaligned doors, broken multipoint locks, and handle problems with same-day service.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/upvc-door-lock-repair",
  },
}

export default function UPVCDoorLockRepairManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <DoorClosed className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">UPVC Door Lock Repair in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Having trouble with your UPVC door lock? UK Lock provides fast, professional UPVC door lock repair services throughout Manchester. Our experienced locksmiths can fix jammed mechanisms, misaligned doors, broken multipoint locks, and handle problems to restore your door's security and functionality.
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

      {/* Common UPVC Door Lock Problems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Common UPVC Door Lock Problems We Fix in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Jammed Mechanisms</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Is your UPVC door lock mechanism jammed or stiff? Our Manchester locksmiths can lubricate, repair, or replace jammed multipoint locking mechanisms to restore smooth operation.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Common issue</Badge>
                  <Badge variant="outline">Quick fix available</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Key Turning Issues</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Having trouble turning the key in your UPVC door lock? Our Manchester specialists can fix or replace damaged cylinders, extract broken keys, and resolve internal mechanism problems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Cylinder repair</Badge>
                  <Badge variant="outline">Key extraction</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Multipoint Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dealing with a broken multipoint lock on your UPVC door in Manchester? We can repair or replace faulty gearboxes, mechanisms, and locking points to restore full security.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Complete repair</Badge>
                  <Badge variant="outline">Security restoration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DoorClosed className="h-8 w-8 text-blue-600" />
                  <CardTitle>Misaligned Doors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Is your UPVC door misaligned, making it difficult to lock properly? Our Manchester technicians can adjust hinges, realign the door, and ensure proper engagement of locking points.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Door adjustment</Badge>
                  <Badge variant="outline">Hinge repair</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Tool className="h-8 w-8 text-blue-600" />
                  <CardTitle>Handle Failures</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Experiencing loose, broken, or stiff door handles on your UPVC door in Manchester? We can repair or replace handles, springs, and internal mechanisms to restore proper function.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Handle replacement</Badge>
                  <Badge variant="outline">Spring repair</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Cylinder Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Having issues with your UPVC door lock cylinder in Manchester? We can repair or upgrade cylinders, including anti-snap, anti-bump, and high-security options for enhanced protection.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Security upgrade</Badge>
                  <Badge variant="outline">Anti-snap options</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our UPVC Door Lock Repair Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Diagnosis Call</h3>
              <p className="text-gray-700">
                Contact our Manchester team and describe your UPVC door lock issues. We'll ask specific questions to help diagnose the problem remotely.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. On-Site Assessment</h3>
              <p className="text-gray-700">
                Our UPVC specialist will visit your Manchester property, thoroughly examine the door lock, and identify the specific issues affecting performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Repair Solution</h3>
              <p className="text-gray-700">
                We'll provide a clear explanation of the problem and a transparent quote for the repair. Once approved, we'll implement the appropriate fix.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing & Warranty</h3>
              <p className="text-gray-700">
                After completing the repair, we'll thoroughly test the door lock to ensure proper function and provide a warranty on our workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Service Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Same-Day UPVC Door Lock Repair in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we understand that a malfunctioning UPVC door lock can compromise your home's security and convenience. That's why we prioritize providing same-day UPVC door lock repair services throughout Manchester.
              </p>
              <p className="text-lg mb-6">
                Our team of UPVC door specialists is strategically positioned across Manchester, allowing us to respond quickly to repair requests, often reaching you within 1-2 hours of your call during standard service hours.
              </p>
              <p className="text-lg mb-6">
                Each of our Manchester UPVC door technicians carries a comprehensive inventory of parts and components for all major UPVC door lock brands and models, enabling us to complete most repairs in a single visit without delays.
              </p>
              <p className="text-lg">
                Whether you're dealing with a jammed mechanism, misaligned door, broken multipoint lock, or handle failure, our same-day service ensures your UPVC door is secure and functional again as quickly as possible.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Same-Day Service Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fast response times throughout Manchester</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Comprehensive parts inventory for immediate repairs</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Local UPVC specialists throughout Greater Manchester</span>
                </li>
                <li className="flex items-start">
                  <Tool className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile workshops</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Emergency service available for urgent security issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UPVC Door Lock Brands Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Brands We Service in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our Manchester locksmiths are experienced in repairing and replacing locks from all major UPVC door lock manufacturers, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Yale</h3>
              <p className="text-sm text-gray-600 mt-1">Multipoint locks & cylinders</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">ERA</h3>
              <p className="text-sm text-gray-600 mt-1">Security solutions</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Avocet</h3>
              <p className="text-sm text-gray-600 mt-1">ABS high security locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Mila</h3>
              <p className="text-sm text-gray-600 mt-1">Door hardware</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">GU</h3>
              <p className="text-sm text-gray-600 mt-1">Ferco mechanisms</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Winkhaus</h3>
              <p className="text-sm text-gray-600 mt-1">AV2 & AV3 locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Fullex</h3>
              <p className="text-sm text-gray-600 mt-1">Crimebeater locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Lockmaster</h3>
              <p className="text-sm text-gray-600 mt-1">Multipoint systems</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">KFV</h3>
              <p className="text-sm text-gray-600 mt-1">German engineering</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Fuhr</h3>
              <p className="text-sm text-gray-600 mt-1">Multipoint mechanisms</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Maco</h3>
              <p className="text-sm text-gray-600 mt-1">Door security</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Roto</h3>
              <p className="text-sm text-gray-600 mt-1">Door hardware</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for UPVC Door Lock Repair in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Tool className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">UPVC Specialists</h3>
                <p className="text-gray-700">Our Manchester technicians specialize in UPVC door mechanisms and locks, with extensive training and experience in diagnosing and repairing all types of UPVC door issues.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-700">We prioritize UPVC door lock repairs in Manchester, offering same-day service to quickly restore your door's security and functionality.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Parts & Warranty</h3>
                <p className="text-gray-700">We use only genuine or high-quality compatible parts for all UPVC door lock repairs in Manchester, backed by our workmanship warranty.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for all our UPVC door lock repairs in Manchester, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Repair Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our UPVC door lock repair services cover all areas of Manchester and surrounding regions, including:
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">UPVC Door Lock Repair FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does it cost to repair a UPVC door lock in Manchester?</h3>
              <p className="text-gray-700">The cost of repairing a UPVC door lock in Manchester varies depending on the specific issue, parts required, and complexity of the repair. Minor repairs such as lubrication or adjustments typically start from £79, while more complex repairs involving mechanism replacement can range from £120-£250. We always provide a clear, no-obligation quote after diagnosing the specific problem with your UPVC door lock.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you repair my UPVC door lock or will it need to be replaced?</h3>
              <p className="text-gray-700">In many cases, we can repair UPVC door locks without full replacement, especially for issues like misalignment, stiffness, or minor mechanical problems. However, if the multipoint mechanism has suffered significant internal damage or wear, replacement may be more cost-effective and provide better long-term security. Our Manchester technicians will always diagnose the problem thoroughly and explain your repair vs. replacement options, allowing you to make an informed decision.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does a UPVC door lock repair take in Manchester?</h3>
              <p className="text-gray-700">Most UPVC door lock repairs in Manchester can be completed within 30-90 minutes, depending on the specific issue. Simple repairs like lubrication or adjustments might take just 30 minutes, while full mechanism replacements typically take 60-90 minutes. Our technicians work efficiently to minimize disruption while ensuring a thorough and lasting repair.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">My UPVC door is difficult to lock or unlock. What could be the problem?</h3>
              <p className="text-gray-700">Difficulty locking or unlocking a UPVC door in Manchester can be caused by several issues: 1) Door misalignment due to hinge movement or settlement, 2) Worn or damaged gearbox in the multipoint mechanism, 3) Cylinder problems including wear or damage, 4) Locking points not engaging properly, or 5) Handle mechanism issues. Our UPVC specialists can quickly diagnose the specific cause and implement the appropriate repair to restore smooth operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">UPVC Door Lock Problems in Manchester?</h2>
          <p className="text-xl mb-8">
            Contact our UPVC specialists for fast, professional door lock repairs throughout Manchester.
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