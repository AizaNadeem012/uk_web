export const metadata = {
  title: "Home Security Services Manchester | High-Security Locks | UK Lock",
  description: "Professional home security services in Manchester by UK Lock. We provide security assessments, high-security lock installation, door & window security upgrades, and smart lock systems. Protect your home with Manchester's trusted security specialists.",
  openGraph: {
    title: "Home Security Services Manchester | High-Security Locks",
    description: "Comprehensive home security solutions in Manchester including security assessments, high-security locks, door & window security, and smart lock installation.",
    url: "https://www.uklock.co.uk/locations/manchester/home-security-services",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Security Services Manchester | High-Security Locks",
    description: "Comprehensive home security solutions in Manchester including security assessments, high-security locks, door & window security, and smart lock installation.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/home-security-services",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Shield, Wrench, Lock, CheckCircle, Building, Home, Smartphone } from "lucide-react"

export default function HomeSecurityServicesManchesterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Home Security Services in Manchester</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Protect your Manchester home with professional security solutions from UK Lock. We provide comprehensive home security services including security assessments, high-security lock installation, door & window security upgrades, and smart lock systems.
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

      {/* Home Security Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Home Security Services in Manchester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <CardTitle>Security Assessments</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our Manchester security specialists provide comprehensive home security assessments to identify vulnerabilities in your property and recommend tailored security solutions.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Professional evaluation</Badge>
                  <Badge variant="outline">Detailed reports</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-8 w-8 text-blue-600" />
                  <CardTitle>High-Security Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We supply and install high-security locks throughout Manchester, including British Standard locks, anti-snap cylinders, and advanced multipoint locking systems.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">BS3621 approved</Badge>
                  <Badge variant="outline">Anti-snap protection</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-blue-600" />
                  <CardTitle>Door & Window Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enhance the security of your Manchester home's entry points with our door and window security upgrades, including reinforced frames, security hinges, and window locks.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Entry point protection</Badge>
                  <Badge variant="outline">Reinforced solutions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-blue-600" />
                  <CardTitle>Security After Break-ins</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  If your Manchester home has experienced a break-in, our emergency security team can quickly repair damage and implement enhanced security measures to prevent future incidents.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Emergency response</Badge>
                  <Badge variant="outline">Enhanced protection</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <CardTitle>Smart Lock Installation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our Manchester locksmiths can install and configure smart lock systems, providing convenient keyless entry while maintaining high security standards for your home.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Keyless convenience</Badge>
                  <Badge variant="outline">Remote access</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-8 w-8 text-blue-600" />
                  <CardTitle>Master Key Systems</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We design and implement master key systems for Manchester homes and properties, allowing convenient access management while maintaining security integrity.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Access control</Badge>
                  <Badge variant="outline">Convenience & security</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Upgrade Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Home Security Upgrade Process in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Security Assessment</h3>
              <p className="text-gray-700">
                We conduct a thorough evaluation of your Manchester home's current security measures, identifying vulnerabilities and areas for improvement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Tailored Recommendations</h3>
              <p className="text-gray-700">
                Based on the assessment, we provide customized security recommendations and a detailed quote for your Manchester property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Professional Installation</h3>
              <p className="text-gray-700">
                Our skilled Manchester locksmiths install your chosen security upgrades with precision and attention to detail.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Final Verification</h3>
              <p className="text-gray-700">
                We thoroughly test all installed security measures and provide guidance on proper use and maintenance for your Manchester home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Security Locks Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">High-Security Locks for Manchester Homes</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At UK Lock, we supply and install a wide range of high-security locks designed to provide maximum protection for Manchester homes. Our selection includes British Standard (BS3621) approved locks, which are often required by insurance companies.
              </p>
              <p className="text-lg mb-6">
                We specialize in anti-snap cylinder locks, which protect against common burglary techniques. These advanced cylinders incorporate multiple security features that prevent forced entry even if the cylinder is attacked.
              </p>
              <p className="text-lg mb-6">
                For UPVC and composite doors, we offer high-security multipoint locking systems that secure the door at multiple points along the frame, providing superior protection against forced entry attempts.
              </p>
              <p className="text-lg">
                Our Manchester locksmiths can advise on the most suitable high-security locks for your specific doors and security requirements, ensuring you receive the optimal balance of security, convenience, and value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Our High-Security Lock Options</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>British Standard (BS3621) mortice locks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Anti-snap euro cylinders with TS007 3-star rating</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>High-security multipoint locking systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Restricted key systems with patented key control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Smart locks with advanced encryption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Security Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Smart Home Security Solutions in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Smart Security Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Smartphone className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Remote locking and unlocking via smartphone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Activity logs to monitor access to your home</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Temporary access codes for visitors and service providers</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Integration with home security systems</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Auto-locking features for enhanced security</span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                Embrace modern security technology with our smart lock installation services in Manchester. Smart locks offer the perfect combination of convenience and security for today's homeowners.
              </p>
              <p className="text-lg mb-6">
                Our Manchester locksmiths are trained in the installation and configuration of leading smart lock brands, ensuring your system works flawlessly with your existing doors and home automation setup.
              </p>
              <p className="text-lg mb-6">
                We can help you select the right smart lock system based on your specific needs, whether you're looking for keyless entry, remote access capabilities, or integration with other smart home devices.
              </p>
              <p className="text-lg">
                All our smart lock installations include comprehensive setup and personalized training to ensure you can fully utilize all the features and benefits of your new security system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose UK Lock for Home Security in Manchester</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Security Expertise</h3>
                <p className="text-gray-700">Our Manchester security specialists have extensive knowledge of modern security threats and solutions specific to properties in the Greater Manchester area.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Products</h3>
                <p className="text-gray-700">We only install high-quality, tested security products from trusted manufacturers, ensuring your Manchester home receives reliable, long-lasting protection.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                <p className="text-gray-700">We provide customized security recommendations based on your specific Manchester property, budget, and security concerns rather than one-size-fits-all approaches.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Prompt Service</h3>
                <p className="text-gray-700">Our Manchester locksmiths provide timely service for all security installations and upgrades, with emergency services available when immediate security improvements are needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manchester Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Home Security Service Coverage in Manchester</h2>
          
          <p className="text-lg text-center mb-8">
            Our home security services cover all areas of Manchester and surrounding regions, including:
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Home Security FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How much does a home security upgrade cost in Manchester?</h3>
              <p className="text-gray-700">The cost of home security upgrades in Manchester varies depending on the specific measures implemented. Basic high-security lock replacements typically start from £80-150 per lock, while comprehensive security packages including multiple door and window upgrades can range from £300-1000+. We always provide a detailed, no-obligation quote after assessing your specific security needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">What are the most important security upgrades for Manchester homes?</h3>
              <p className="text-gray-700">For Manchester homes, the most critical security upgrades typically include: 1) High-security door locks meeting British Standard BS3621, 2) Anti-snap euro cylinders for UPVC doors, 3) Window locks on all accessible windows, 4) Door reinforcement plates and hinge bolts, and 5) Security lighting. The specific priorities may vary based on your property type and existing security measures.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">How long does a home security installation take in Manchester?</h3>
              <p className="text-gray-700">Most standard security installations in Manchester can be completed within a few hours. A basic high-security lock replacement typically takes 30-60 minutes per lock, while more comprehensive security upgrades involving multiple doors and windows may require 2-4 hours. For extensive security system installations, we may schedule a full day. We always work efficiently to minimize disruption to your home.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Are smart locks as secure as traditional locks for Manchester homes?</h3>
              <p className="text-gray-700">Quality smart locks can be as secure as traditional locks when properly installed. The smart locks we install in Manchester homes feature high-security mechanical components combined with encrypted digital technology. They offer additional security benefits such as automatic locking, access logs, and remote management. However, they do require proper setup and maintenance to ensure their security features function correctly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Secure Your Manchester Home Today</h2>
          <p className="text-xl mb-8">
            Contact UK Lock for professional home security services throughout Manchester. Our security specialists are ready to help protect what matters most.
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