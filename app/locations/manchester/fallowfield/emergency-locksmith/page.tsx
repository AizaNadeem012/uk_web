import { Metadata } from "next";
import { Clock, Wrench, ShieldCheck, Car, Home, Building2, Key, Lock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Emergency Locksmith in Fallowfield | 24/7 Fast Response | UK Lock",
  description: "24/7 emergency locksmith services in Fallowfield, Manchester. Fast 20-minute response for lockouts, break-ins, and lock failures. Call our local Fallowfield locksmiths now!",
  openGraph: {
    title: "Emergency Locksmith in Fallowfield | 24/7 Fast Response | UK Lock",
    description: "24/7 emergency locksmith services in Fallowfield, Manchester. Fast 20-minute response for lockouts, break-ins, and lock failures. Call our local Fallowfield locksmiths now!",
    url: "https://www.uklock.co.uk/locations/manchester/fallowfield/emergency-locksmith",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Locksmith in Fallowfield | 24/7 Fast Response | UK Lock",
    description: "24/7 emergency locksmith services in Fallowfield, Manchester. Fast 20-minute response for lockouts, break-ins, and lock failures. Call our local Fallowfield locksmiths now!",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk/locations/manchester/fallowfield/emergency-locksmith",
  },
};

export default function EmergencyLocksmithFallowfield() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="mb-4 bg-yellow-500 text-blue-900 hover:bg-yellow-400 px-3 py-1 text-sm font-medium">24/7 EMERGENCY SERVICE</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Locksmith in Fallowfield</h1>
              <p className="text-xl mb-8">Locked out? Broken key? Security breach? Our emergency locksmiths in Fallowfield are available 24/7 with a rapid 20-minute response time.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">Call Now</Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">Our Services</Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm">Average response time in Fallowfield: <strong>20 minutes</strong></span>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Emergency Locksmith Fallowfield</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 emergency response</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>20-minute average arrival time</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Residential & commercial lockouts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Vehicle lockouts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Broken key extraction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Lock repairs & replacements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Burglary repairs</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-yellow-500 text-blue-900 hover:bg-yellow-400">Call Our Fallowfield Team</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Services in Fallowfield</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Residential Lockouts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked out of your home in Fallowfield? Our emergency locksmiths can quickly gain access to your property without causing damage, using non-destructive entry techniques.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Non-Destructive Entry</Badge>
                  <Badge variant="outline">24/7 Service</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Commercial Lockouts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Business lockouts in Fallowfield can disrupt operations. We provide fast emergency access to offices, shops, and commercial properties to minimize downtime.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Minimal Disruption</Badge>
                  <Badge variant="outline">Business Priority</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Vehicle Lockouts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Locked keys in your car in Fallowfield? Our auto locksmiths can quickly open your vehicle without damage and provide replacement keys if needed.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All Vehicle Types</Badge>
                  <Badge variant="outline">Roadside Assistance</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Broken Key Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Key broken in the lock? Our Fallowfield locksmiths can extract broken keys from any lock and provide a replacement key on the spot.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Specialized Tools</Badge>
                  <Badge variant="outline">On-Site Solutions</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Emergency Lock Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Faulty or damaged locks in Fallowfield? We can repair or replace any type of lock, including UPVC door mechanisms, mortice locks, and euro cylinders.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">All Lock Types</Badge>
                  <Badge variant="outline">Same-Day Repair</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Post Break-In Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Been a victim of a break-in in Fallowfield? We provide emergency boarding up, lock replacements, and security upgrades to secure your property immediately.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="mr-2">Rapid Response</Badge>
                  <Badge variant="outline">Security Upgrade</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fast Response Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Fast Response in Fallowfield</h2>
              <p className="text-lg mb-6 text-gray-700">
                When you're facing a lock emergency in Fallowfield, every minute counts. Our local emergency locksmiths are strategically positioned throughout the Fallowfield area to provide the fastest possible response times.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold">Average Response Time:</span> 20 minutes in Fallowfield
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold">24/7 Availability:</span> Including nights, weekends, and holidays
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Wrench className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-bold">Fully Equipped Vans:</span> All tools and parts for on-site solutions
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Emergency Response Times</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Fallowfield Central</span>
                      <span className="text-blue-600 font-bold">15-20 mins</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Fallowfield East</span>
                      <span className="text-blue-600 font-bold">20-25 mins</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Fallowfield West</span>
                      <span className="text-blue-600 font-bold">20-25 mins</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Fallowfield South</span>
                      <span className="text-blue-600 font-bold">20-30 mins</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-yellow-500 text-blue-900 hover:bg-yellow-400">Call For Emergency Service</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Our Hotline</h3>
              <p className="text-gray-700">
                Contact our dedicated Fallowfield emergency line. We'll ask about your situation and dispatch the nearest locksmith.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Arrival</h3>
              <p className="text-gray-700">
                Our Fallowfield locksmith will arrive within the estimated time frame, fully equipped to handle your emergency.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Assessment</h3>
              <p className="text-gray-700">
                We'll quickly assess the situation, explain the issue, and provide a clear quote before any work begins.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Immediate Solution</h3>
              <p className="text-gray-700">
                We'll resolve your lock emergency on the spot, whether it's gaining entry, repairing, or replacing locks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Non-Destructive Entry Specialists</h2>
              <p className="text-lg mb-6 text-gray-700">
                Our Fallowfield emergency locksmiths specialize in non-destructive entry techniques, ensuring we can get you back into your property without causing damage to your doors or locks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Lock picking techniques that leave your locks intact</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Specialized tools for non-destructive UPVC door entry</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Advanced methods for gaining entry to high-security locks</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Vehicle entry without damaging car doors or ignitions</p>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More About Our Techniques</Button>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Why Choose Non-Destructive Entry?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Wrench className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Save Money</h4>
                      <p className="text-gray-700">Avoid costly door and lock replacements by using our non-destructive entry methods.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Save Time</h4>
                      <p className="text-gray-700">Get back into your property faster without waiting for replacement parts.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <ShieldCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Maintain Security</h4>
                      <p className="text-gray-700">Keep your existing security intact without compromising your property's protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Service Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">24/7 Emergency Locksmith Service in Fallowfield</h2>
          <p className="text-xl mb-10 max-w-4xl mx-auto">
            Lock emergencies don't follow a 9-to-5 schedule. That's why our Fallowfield emergency locksmiths are available 24 hours a day, 7 days a week, 365 days a year – including nights, weekends, and holidays.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Late Night Lockouts</h3>
              <p className="text-white/80">
                Locked out in the middle of the night in Fallowfield? We'll be there quickly to get you back inside safely.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Weekend Emergencies</h3>
              <p className="text-white/80">
                Lock failures don't take weekends off, and neither do we. Our Fallowfield team is ready to help any day of the week.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Holiday Coverage</h3>
              <p className="text-white/80">
                Even during holidays, our Fallowfield emergency locksmiths are on call to handle any lock or key emergency.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">Call Our 24/7 Hotline</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Fallowfield Emergency Locksmiths</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Local Fallowfield Experts</h3>
                <p className="text-gray-700">Our emergency locksmiths are based in and around Fallowfield, ensuring the fastest possible response times to your location.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Qualified Professionals</h3>
                <p className="text-gray-700">All our Fallowfield locksmiths are fully trained, insured, and DBS checked for your complete peace of mind.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Services</h3>
                <p className="text-gray-700">From lockouts to break-ins, broken keys to faulty locks, we handle all emergency locksmith situations in Fallowfield.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">We provide clear, upfront pricing for all our emergency locksmith services in Fallowfield, with no hidden fees or unexpected charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fallowfield Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Coverage in Fallowfield</h2>
          
          <p className="text-lg text-center mb-8">
            Our emergency locksmith services cover all areas of Fallowfield and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield Central</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield East</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield West</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield South</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ladybarn</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Owens Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Wilmslow Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Oak House</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Platt Fields</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Birchfields</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Withington</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rusholme</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith FAQs</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">How quickly can an emergency locksmith reach me in Fallowfield?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Our average response time in Fallowfield is 20 minutes. We have locksmiths positioned throughout the area to ensure we can reach you as quickly as possible in an emergency. Response times may vary slightly depending on your exact location within Fallowfield and current traffic conditions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">How much does an emergency locksmith cost in Fallowfield?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Emergency locksmith services in Fallowfield typically start from £79 for a basic lockout. The final cost depends on the complexity of the job, time of day, and any parts required. We always provide a clear quote before beginning any work, and there are no hidden fees or call-out charges.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">Can you open any type of lock in Fallowfield?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes, our Fallowfield emergency locksmiths are trained to open virtually all types of locks, including UPVC door locks, mortice locks, euro cylinders, smart locks, car locks, and high-security locks. We use non-destructive entry techniques whenever possible to minimize damage and cost.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">Do you provide emergency locksmith services for businesses in Fallowfield?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Absolutely. We provide emergency locksmith services for all types of commercial properties in Fallowfield, including shops, offices, restaurants, and industrial units. We understand the importance of business continuity and prioritize commercial lockouts to minimize disruption to your operations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">What should I do if I'm locked out of my house in Fallowfield at night?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    If you're locked out of your house in Fallowfield at night, simply call our 24/7 emergency hotline. We'll dispatch the nearest available locksmith to your location. While waiting, try to find a safe place to wait, perhaps with a neighbor if possible. Our locksmiths work around the clock and can help you regain entry to your home safely and quickly, even in the middle of the night.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl font-bold">Can you help if my key has broken in the lock in Fallowfield?</AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes, we specialize in broken key extraction in Fallowfield. Our locksmiths have specialized tools to safely remove broken keys from any type of lock without causing further damage. After extracting the broken key, we can either repair the existing lock or replace it if necessary, and cut you a new key on the spot.
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