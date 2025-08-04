export const metadata = {
  title: "Lock Repair Prestwich | Fast & Reliable Service | UK Lock",
  description: "Professional lock repair services in Prestwich by UK Lock. We fix all types of locks including mortice, Yale, euro cylinders, UPVC mechanisms, and smart locks with same-day service throughout Prestwich, Manchester.",
  openGraph: {
    title: "Lock Repair Prestwich | Fast & Reliable Service",
    description: "Professional lock repair in Prestwich for all lock types. Mortice, Yale, euro cylinders, UPVC mechanisms, and smart locks with same-day service.",
    url: "https://www.uklock.co.uk/locations/manchester/prestwich/lock-repair",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock Repair Prestwich | Fast & Reliable Service",
    description: "Professional lock repair in Prestwich for all lock types. Mortice, Yale, euro cylinders, UPVC mechanisms, and smart locks with same-day service.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/prestwich/lock-repair",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, CheckCircle } from "lucide-react"

export default function LockRepairPrestwichPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Wrench className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Lock Repair in Prestwich</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fast, reliable lock repair services throughout Prestwich, Manchester. UK Lock provides expert repair of all types of locks for residential and commercial properties, including mortice locks, Yale locks, euro cylinders, UPVC mechanisms, and smart locks.
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

      {/* Common Lock Problems Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Common Lock Problems We Fix in Prestwich</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Stiff or Jammed Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We repair locks that have become stiff, jammed, or difficult to turn in Prestwich. This common problem can be caused by dirt, debris, wear and tear, or internal mechanism issues. Our locksmiths can clean, lubricate, and repair the internal components to restore smooth operation.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All Lock Types</Badge>
                  <Badge variant="outline">Quick Fix</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Keys Turning But Not Working</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  If your key turns in the lock but doesn't properly lock or unlock the door in Prestwich, we can fix it. This issue often indicates worn internal components, misalignment, or a problem with the locking mechanism. Our experts can diagnose and repair these issues efficiently.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Mechanism Repair</Badge>
                  <Badge variant="outline">Alignment Fix</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Broken Keys in Locks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We safely extract broken keys from locks in Prestwich without damaging the lock mechanism. After extraction, we can repair any damage to the lock cylinder and cut a new key for you. Our specialized tools allow for non-destructive key extraction in most cases.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Key Extraction</Badge>
                  <Badge variant="outline">Lock Preservation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>UPVC Door Lock Problems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We repair faulty multipoint locking systems on UPVC doors in Prestwich. Common issues include mechanisms that won't lift up, handles that are difficult to operate, or locks that won't engage properly. Our specialists can repair or replace the gearbox, mechanisms, and cylinders as needed.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Multipoint Repair</Badge>
                  <Badge variant="outline">Mechanism Replacement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Damaged Lock Cylinders</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We repair or replace damaged lock cylinders in Prestwich, including those affected by attempted break-ins, wear and tear, or weather damage. Our locksmiths can assess the damage and either repair the existing cylinder or replace it with a new, high-security option.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Cylinder Repair</Badge>
                  <Badge variant="outline">Security Upgrade</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Lock Malfunctions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We diagnose and repair smart lock issues in Prestwich, including electronic failures, connectivity problems, and mechanical malfunctions. Our technicians are trained in the latest smart lock technologies and can troubleshoot both the electronic and mechanical components.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Electronic Repair</Badge>
                  <Badge variant="outline">System Reset</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lock Repair Process in Prestwich</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Diagnosis</h3>
              <p className="text-gray-700">
                Our Prestwich locksmiths carefully examine your lock to identify the exact cause of the problem, using specialized diagnostic tools when necessary.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Repair Options</h3>
              <p className="text-gray-700">
                We explain the repair options available, including costs and benefits of repair versus replacement, helping you make an informed decision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Expert Repair</h3>
              <p className="text-gray-700">
                Our skilled technicians repair your lock using quality parts and precision techniques, addressing both the symptoms and underlying causes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing & Guarantee</h3>
              <p className="text-gray-700">
                We thoroughly test the repaired lock to ensure smooth, reliable operation and provide a guarantee on our workmanship and any parts used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Service Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Same-Day Lock Repair in Prestwich</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                When your lock malfunctions, you need it fixed quickly. Our same-day lock repair service in Prestwich ensures you don't have to wait days for a functional, secure lock.
              </p>
              <p className="text-lg mb-6">
                Our mobile workshops are fully equipped with specialized tools and a comprehensive range of quality parts for all common lock types, allowing us to complete most repairs on the first visit.
              </p>
              <p className="text-lg mb-6">
                Whether it's a residential door lock, commercial security system, or vehicle lock, our Prestwich locksmiths can diagnose and repair the problem efficiently, often within the hour of arrival.
              </p>
              <p className="text-lg">
                We prioritize urgent repairs while maintaining our high standards of workmanship, ensuring your lock is not only fixed quickly but fixed properly for long-term reliability.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Same-Day Service Includes:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fast response throughout Prestwich</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Fully equipped mobile workshops</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Comprehensive stock of quality parts</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Professional diagnostic equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>No extra charge for same-day service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lock Brands Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Brands We Repair in Prestwich</h2>
          
          <p className="text-lg text-center mb-8">
            Our Prestwich locksmiths are trained to repair locks from all major manufacturers, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Yale</h3>
              <p className="text-sm text-gray-600">Night latches & cylinders</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Chubb</h3>
              <p className="text-sm text-gray-600">Mortice locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">ERA</h3>
              <p className="text-sm text-gray-600">Multipoint locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Union</h3>
              <p className="text-sm text-gray-600">Mortice & cylinder locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Banham</h3>
              <p className="text-sm text-gray-600">High-security locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">ABUS</h3>
              <p className="text-sm text-gray-600">Padlocks & cylinders</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Mul-T-Lock</h3>
              <p className="text-sm text-gray-600">High-security systems</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">ABS</h3>
              <p className="text-sm text-gray-600">UPVC door locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Ingersoll</h3>
              <p className="text-sm text-gray-600">High-security locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Schlage</h3>
              <p className="text-sm text-gray-600">Smart locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Kwikset</h3>
              <p className="text-sm text-gray-600">Smart & traditional locks</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <h3 className="font-bold text-blue-600">Avocet</h3>
              <p className="text-sm text-gray-600">ABS high-security locks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Lock Repair in Prestwich</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Skilled Technicians</h3>
                <p className="text-gray-700">Our Prestwich locksmiths are highly trained professionals with extensive experience repairing all types of locks, from traditional to modern smart systems.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-gray-700">We understand the urgency of lock problems and provide prompt service throughout Prestwich, with same-day repairs available for most lock issues.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
                <p className="text-gray-700">We use only high-quality replacement parts that match or exceed the specifications of your original lock, ensuring long-lasting repairs.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
                <p className="text-gray-700">From diagnosis to repair and testing, we provide a complete lock repair service with attention to detail and a focus on both function and security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestwich Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Repair Coverage in Prestwich</h2>
          
          <p className="text-lg text-center mb-8">
            Our lock repair services cover all areas of Prestwich and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Prestwich Village</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Sedgley Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Heaton Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rainsough</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Hilton Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Simister</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Carr Clough</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Besses o' th' Barn</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Repair FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does lock repair cost in Prestwich?</h3>
              <p className="text-gray-700">Lock repair costs in Prestwich typically range from £60-£150 depending on the type of lock and the extent of the damage. Minor repairs like fixing a stiff lock might cost £60-£80, while more complex repairs such as fixing UPVC multipoint mechanisms might range from £100-£150. We always provide a clear quote before beginning any work.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Is it better to repair or replace a faulty lock?</h3>
              <p className="text-gray-700">Whether to repair or replace depends on several factors: the age of the lock, the extent of damage, the lock's security rating, and cost considerations. For minor issues in quality locks, repair is often more economical. However, if the lock is old, severely damaged, or of low security, replacement might be better. Our Prestwich locksmiths will assess your lock and provide honest advice on the most appropriate option.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does lock repair take?</h3>
              <p className="text-gray-700">Most standard lock repairs in Prestwich can be completed within 30-60 minutes. Simple issues like stiff or jammed locks might take just 20-30 minutes, while more complex problems with multipoint mechanisms or smart locks could take up to 90 minutes. Our locksmiths work efficiently to minimize disruption to your day.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Can you repair locks damaged during a break-in attempt?</h3>
              <p className="text-gray-700">Yes, we can repair many locks damaged during break-in attempts in Prestwich. However, the repairability depends on the extent of damage. Locks with minor damage to the cylinder or mechanism can often be repaired, while those with significant structural damage typically need replacement. After a break-in attempt, we recommend a security assessment to identify any vulnerabilities in your current locking system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Need Lock Repair in Prestwich?</h2>
          <p className="text-xl mb-8">
            Contact our locksmith team for fast, professional lock repair at your location.
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