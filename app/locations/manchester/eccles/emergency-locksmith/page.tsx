import { Metadata } from 'next'
import { Shield, Clock, Wrench, Car, Home, Building2, Key, CheckCircle, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Locksmith in Eccles | 24/7 Fast Response | UK Lock',
  description: 'Need an emergency locksmith in Eccles? UK Lock provides 24/7 fast response for home, business & vehicle lockouts. Non-destructive entry specialists with 20-minute response times.',
  openGraph: {
    title: 'Emergency Locksmith in Eccles | 24/7 Fast Response | UK Lock',
    description: 'Need an emergency locksmith in Eccles? UK Lock provides 24/7 fast response for home, business & vehicle lockouts. Non-destructive entry specialists with 20-minute response times.',
    url: 'https://www.uklock.co.uk/locations/manchester/eccles/emergency-locksmith',
    siteName: 'UK Lock',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Locksmith in Eccles | 24/7 Fast Response | UK Lock',
    description: 'Need an emergency locksmith in Eccles? UK Lock provides 24/7 fast response for home, business & vehicle lockouts. Non-destructive entry specialists with 20-minute response times.',
  },
  alternates: {
    canonical: 'https://www.uklock.co.uk/locations/manchester/eccles/emergency-locksmith',
  },
}

export default function EmergencyLocksmithEccles() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Emergency Locksmith in Eccles
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Locked out? Key broken? Lock damaged? Our 24/7 emergency locksmith service in Eccles provides fast, reliable solutions when you need them most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:01614109870"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 0161 410 9870
              </a>
              <a
                href="#services"
                className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center"
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                See Emergency Services
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                <span>15-Min Response</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>No Call-Out Fee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Locksmith Services in Eccles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Lockouts */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Home className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Residential Lockouts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Locked out of your home in Eccles? Our emergency locksmiths can quickly gain access to your property using non-destructive entry techniques, minimizing damage and stress.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Non-destructive entry methods</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>All types of residential doors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>UPVC, wooden & composite doors</span>
                </li>
              </ul>
            </div>

            {/* Commercial Lockouts */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Building2 className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Commercial Lockouts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Business security issues in Eccles? Our emergency locksmiths can help with office lockouts, shop security problems, and commercial property access issues.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Office & retail premises</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>High-security commercial locks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Master key system emergencies</span>
                </li>
              </ul>
            </div>

            {/* Vehicle Lockouts */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Car className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Vehicle Lockouts</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Locked keys in your car in Eccles? Our auto locksmith specialists can quickly gain access to your vehicle without causing damage to your car.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>All makes and models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Non-destructive car entry</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>On-the-spot key replacement</span>
                </li>
              </ul>
            </div>

            {/* Broken Key Extraction */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Key className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Broken Key Extraction</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Key snapped in the lock? Our Eccles emergency locksmiths can extract broken keys from any lock without damaging the mechanism, then cut you a new key on the spot.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Specialist extraction tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Door, window & car locks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>On-site key replacement</span>
                </li>
              </ul>
            </div>

            {/* Emergency Lock Repairs */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Emergency Lock Repairs</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Damaged or faulty lock in Eccles? Our emergency locksmiths can repair or replace any type of lock on the spot, restoring your security as quickly as possible.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>All lock types & brands</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>UPVC mechanism specialists</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Same-day lock replacement</span>
                </li>
              </ul>
            </div>

            {/* Post Break-in Security */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Post Break-in Security</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Been a victim of a break-in in Eccles? Our emergency locksmiths can secure your property quickly, repairing or replacing damaged locks and upgrading your security.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Rapid response priority service</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Temporary security measures</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Security upgrade consultation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Response Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Fast Response in Eccles</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-blue-100 rounded-full p-4 mb-4 md:mb-0 md:mr-6">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Average Response Times in Eccles</h3>
                <p className="text-gray-700">
                  When you're facing a lockout emergency, every minute counts. Our dedicated Eccles emergency locksmith team aims to reach you as quickly as possible.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Eccles Town Centre</h4>
                <p className="text-gray-700 mb-2">Average response time:</p>
                <p className="text-2xl font-bold text-blue-600">15-20 minutes</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Patricroft</h4>
                <p className="text-gray-700 mb-2">Average response time:</p>
                <p className="text-2xl font-bold text-blue-600">20-25 minutes</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Monton</h4>
                <p className="text-gray-700 mb-2">Average response time:</p>
                <p className="text-2xl font-bold text-blue-600">20-25 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Emergency Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Call Our Hotline</h3>
              <p className="text-gray-700">
                Contact our 24/7 emergency number for immediate assistance in Eccles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Describe Your Emergency</h3>
              <p className="text-gray-700">
                Explain your situation so we can dispatch the right specialist with the proper tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Arrival</h3>
              <p className="text-gray-700">
                Our Eccles locksmith will arrive promptly, usually within 15-25 minutes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Problem Solved</h3>
              <p className="text-gray-700">
                We'll resolve your emergency quickly and efficiently, restoring your security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Destructive Entry Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Non-Destructive Entry Specialists</h2>
              <p className="text-lg text-gray-700 mb-4">
                At UK Lock, our Eccles emergency locksmiths specialize in non-destructive entry techniques. This means we can get you back into your property without causing unnecessary damage to your doors or locks.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Using the latest locksmith tools and techniques, we can open most locks without drilling or breaking them, saving you money on replacements and repairs.
              </p>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Lock picking & bumping techniques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Specialized tools for non-destructive entry</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Minimal damage guarantee</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">When We Might Need to Drill</h3>
                <p className="text-gray-700 mb-4">
                  While we always try non-destructive methods first, there are some situations where drilling may be necessary:
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <span>High-security locks that cannot be picked</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <span>Severely damaged or jammed lock mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <span>When time is critical (e.g., medical emergencies)</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Even when drilling is necessary, we minimize damage and can replace the lock on the spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Service Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">24/7 Emergency Locksmith Service in Eccles</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Locksmith emergencies don't follow a 9-to-5 schedule. That's why our Eccles emergency locksmith team is available 24 hours a day, 7 days a week, 365 days a year.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Moon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Late Night Emergencies</h3>
              <p>
                Locked out after a night out in Eccles? We're just a phone call away, any time of night.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Weekend & Holiday Service</h3>
              <p>
                Emergencies don't take holidays, and neither do we. Available throughout Eccles on weekends and bank holidays.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Always On Call</h3>
              <p>
                Our Eccles emergency team is always ready to respond, with locksmiths on standby 24/7.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="tel:01614109870"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Our 24/7 Emergency Line
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Eccles Emergency Locksmith Service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fast Response Times</h3>
              </div>
              <p className="text-gray-700">
                Our Eccles emergency locksmiths aim to reach you within 15-25 minutes, minimizing your wait time during stressful situations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fully Qualified & Vetted</h3>
              </div>
              <p className="text-gray-700">
                All our Eccles emergency locksmiths are fully qualified, DBS checked, and extensively trained in the latest locksmith techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fully Equipped Vans</h3>
              </div>
              <p className="text-gray-700">
                Our mobile workshops carry a comprehensive range of tools and replacement parts to solve your emergency on the first visit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <PoundSterling className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Transparent Pricing</h3>
              </div>
              <p className="text-gray-700">
                We provide clear, upfront pricing with no hidden fees or call-out charges, even for emergency locksmith services in Eccles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <ThumbsUp className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Highly Rated Service</h3>
              </div>
              <p className="text-gray-700">
                Our Eccles emergency locksmith service is highly rated on Google, Checkatrade, and Trustpilot, with hundreds of 5-star reviews.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Smartphone className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">24/7 Availability</h3>
              </div>
              <p className="text-gray-700">
                Our emergency locksmith service in Eccles is available 24 hours a day, 7 days a week, including nights, weekends, and bank holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eccles Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Emergency Locksmith Coverage in Eccles</h2>
          
          <p className="text-lg text-center mb-8">
            Our emergency locksmith services cover all areas of Eccles and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Eccles Town Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Patricroft</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Monton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Winton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Barton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Peel Green</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ellesmere Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Worsley</div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            Don't see your area listed? Don't worry - we cover the entire Eccles area and beyond. Just give us a call to confirm our availability for your location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How quickly can you reach me in Eccles?</h3>
              <p className="text-gray-700">
                Our average response time for emergency locksmith callouts in Eccles is 15-25 minutes. For Eccles town centre locations, we can often arrive within 15-20 minutes. Response times may vary slightly depending on time of day, traffic conditions, and your exact location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you charge a call-out fee for emergency locksmith services in Eccles?</h3>
              <p className="text-gray-700">
                No, we don't charge any call-out fees for our emergency locksmith services in Eccles, even for late-night, weekend, or holiday callouts. You only pay for the work carried out.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you open any type of lock in an emergency?</h3>
              <p className="text-gray-700">
                Our Eccles emergency locksmiths are trained to open virtually all types of locks, including UPVC door locks, mortice locks, euro cylinders, smart locks, car locks, and high-security locks. We use non-destructive entry methods whenever possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">What ID do I need to show when you arrive?</h3>
              <p className="text-gray-700">
                For security purposes, we require proof that you're the property or vehicle owner. This can be ID showing your address (for properties) or vehicle registration documents. For tenants, a tenancy agreement or similar documentation is acceptable.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you help if I've lost all my keys?</h3>
              <p className="text-gray-700">
                Yes, our Eccles emergency locksmiths can help if you've lost all your keys. We can gain entry to your property, then replace your locks or rekey them as needed. For vehicles, we can create new keys even if you have no spare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you provide emergency boarding-up services after break-ins?</h3>
              <p className="text-gray-700">
                Yes, if your property in Eccles has been broken into and your door or window is damaged, we can provide emergency boarding-up services to secure your property temporarily until permanent repairs can be made.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Phone, ArrowDown, Zap, Calendar, Moon, PoundSterling, ThumbsUp } from 'lucide-react'