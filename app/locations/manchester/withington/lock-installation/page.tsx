import { Metadata } from "next";
import { Shield, Lock, Key, Wrench, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Lock Installation in Withington | Professional Locksmith Services | UK Lock",
  description: "Professional lock installation services in Withington, Manchester. Enhance your security with expert installation of mortice, Yale, euro cylinder, smart & high-security locks. Same-day service available.",
  openGraph: {
    title: "Lock Installation in Withington | Professional Locksmith Services | UK Lock",
    description: "Professional lock installation services in Withington, Manchester. Enhance your security with expert installation of mortice, Yale, euro cylinder, smart & high-security locks. Same-day service available.",
    url: "https://www.uklock.co.uk/locations/manchester/withington/lock-installation",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lock Installation in Withington | Professional Locksmith Services | UK Lock",
    description: "Professional lock installation services in Withington, Manchester. Enhance your security with expert installation of mortice, Yale, euro cylinder, smart & high-security locks. Same-day service available.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/withington/lock-installation",
  },
};

export default function LockInstallationWithington() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="mb-4 bg-yellow-500 text-blue-900 hover:bg-yellow-400 px-3 py-1 text-sm font-medium">PROFESSIONAL INSTALLATION</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Lock Installation in Withington</h1>
              <p className="text-xl mb-8">Enhance your home or business security with professional lock installation services in Withington. We install all types of locks to keep your property safe and secure.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">Call Now</Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">Our Services</Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm">Same-day installation available in Withington</span>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Lock Installation Services in Withington</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Mortice lock installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Yale lock fitting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Euro cylinder installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Smart lock setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>High-security lock installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Multipoint lock installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Same-day service available</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-yellow-500 text-blue-900 hover:bg-yellow-400">Book Installation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lock Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Types We Install in Withington</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Mortice Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of mortice locks in Withington for wooden doors. These locks offer excellent security and are often required by insurance companies.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Insurance Approved</Badge>
                  <Badge variant="outline">BS3621 Standard</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Yale Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert installation of Yale night latches and rim cylinders in Withington. These locks provide convenient additional security for your front or back door.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Auto-Locking</Badge>
                  <Badge variant="outline">Additional Security</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Euro Cylinder Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of euro cylinder locks in Withington for UPVC and composite doors. We install anti-snap, anti-bump, and anti-pick cylinders for maximum security.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Anti-Snap</Badge>
                  <Badge variant="outline">3-Star Rated</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Smart Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert installation and setup of smart locks in Withington. Enjoy keyless entry, remote access control, and integration with your home automation system.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Keyless Entry</Badge>
                  <Badge variant="outline">Smartphone Control</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>High-Security Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of high-security locks in Withington from brands like Banham, Ultion, and Abloy. Maximum protection for high-value properties.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Maximum Security</Badge>
                  <Badge variant="outline">Insurance Approved</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Multipoint Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional installation of multipoint locking systems in Withington for UPVC, composite, and aluminum doors. We ensure proper alignment and smooth operation.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Multiple Locking Points</Badge>
                  <Badge variant="outline">Enhanced Security</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lock Installation Process in Withington</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Security Assessment</h3>
              <p className="text-gray-700">
                We assess your security needs and recommend the most suitable lock types for your doors and property in Withington.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Lock Selection</h3>
              <p className="text-gray-700">
                We help you choose the right locks based on your security requirements, budget, and the type of doors you have in your Withington property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Professional Installation</h3>
              <p className="text-gray-700">
                Our skilled locksmiths in Withington precisely install your new locks, ensuring they function perfectly and provide maximum security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Key className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Testing & Handover</h3>
              <p className="text-gray-700">
                We thoroughly test all installed locks, provide you with keys, and demonstrate proper operation before completing the job in Withington.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Lock Brands Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Quality Lock Brands We Install in Withington</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">Yale</h3>
              </div>
              <p className="text-gray-700">Trusted brand for rim cylinders and night latches</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">Chubb</h3>
              </div>
              <p className="text-gray-700">Premium mortice locks and high-security solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">ERA</h3>
              </div>
              <p className="text-gray-700">Quality locks for all door types</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">Ultion</h3>
              </div>
              <p className="text-gray-700">Advanced anti-snap euro cylinders</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">ABS</h3>
              </div>
              <p className="text-gray-700">High-security euro profile cylinders</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-20 flex items-center justify-center mb-4">
                <h3 className="text-xl font-bold text-blue-800">Banham</h3>
              </div>
              <p className="text-gray-700">Premium high-security lock systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Installation Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Same-Day Lock Installation in Withington</h2>
              <p className="text-lg mb-6 text-gray-700">
                Need new locks installed urgently in Withington? Our same-day lock installation service ensures your property is secured without delay.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold">Quick Response:</span> We aim to install your new locks within hours of your call in Withington
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Wrench className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold">Fully Equipped:</span> Our vans carry a wide range of quality locks for immediate installation
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold">Emergency Priority:</span> Urgent security concerns in Withington receive priority attention
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Same-Day Installation</Button>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">When You Need Same-Day Installation</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Lock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Moving Into a New Property</h4>
                      <p className="text-gray-700">Just moved to Withington? We can quickly install new locks so you know exactly who has access to your new home.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Lock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">After a Break-In</h4>
                      <p className="text-gray-700">If your Withington property has been compromised, we can quickly install new, more secure locks to restore your security and peace of mind.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Lock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Lost or Stolen Keys</h4>
                      <p className="text-gray-700">If your keys have been lost or stolen in Withington, we can install new locks quickly to prevent unauthorized access.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Lock Installation in Withington</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Local Withington Experts</h3>
                <p className="text-gray-700">Our locksmiths are based in and around Withington, ensuring fast response times and local knowledge of security concerns in the area.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Qualified Professionals</h3>
                <p className="text-gray-700">All our Withington locksmiths are fully trained, insured, and DBS checked for your complete peace of mind.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-700">We only install high-quality, reliable locks in Withington that meet or exceed British Standards for security.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for all our lock installation services in Withington, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Withington Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Installation Coverage in Withington</h2>
          
          <p className="text-lg text-center mb-8">
            Our lock installation services cover all areas of Withington and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Withington Village</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Old Moat</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ladybarn</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fog Lane</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Mauldeth Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Burton Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Wilmslow Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Withington Community Hospital</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Burnage</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Installation FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">How much does lock installation cost in Withington?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Lock installation costs in Withington typically range from £80-£200, depending on the type of lock and door. Basic Yale lock installation starts around £80, while mortice lock installation may cost £120-£150. High-security and smart lock installation can range from £150-£250. We always provide a clear, upfront quote before beginning any work.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">How long does it take to install a new lock in Withington?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Most standard lock installations in Withington take between 30-60 minutes per lock. More complex installations, such as mortice locks or multipoint locking systems, may take 1-2 hours. Smart lock installations that require wiring or connection to home automation systems can take 2-3 hours. Our experienced locksmiths work efficiently to minimize disruption to your day.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">What types of locks are best for UPVC doors in Withington?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    For UPVC doors in Withington, we recommend anti-snap euro cylinder locks that meet the TS007 3-star standard or the Sold Secure Diamond standard. Brands like Ultion, ABS, and Yale Platinum offer excellent security against common attack methods like snapping, bumping, and picking. These locks are specifically designed for UPVC and composite doors and provide the highest level of security available.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">Can you install smart locks in Withington?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes, we specialize in smart lock installation in Withington. We can install and set up a wide range of smart locks, including Yale Conexis, Samsung, August, and Nuki systems. Our locksmiths will ensure your smart lock is properly installed, connected to your home network, and fully functional. We'll also show you how to use all the features, including app control, temporary access codes, and integration with smart home systems.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">Do I need to replace my locks when I move into a new home in Withington?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes, we strongly recommend replacing the locks when moving into a new home in Withington. Previous owners, tenants, or contractors may have copies of your keys. Replacing the locks ensures you have complete control over who has access to your property. This is a simple, cost-effective security measure that provides peace of mind in your new home.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">Can you install locks that meet insurance requirements in Withington?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Absolutely. We're familiar with the lock requirements specified by insurance companies in Withington. We can install BS3621 rated mortice locks, TS007 3-star euro cylinders, and other insurance-approved locks that meet or exceed your policy requirements. After installation, we can provide documentation confirming that your new locks meet the necessary standards for your insurance policy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}