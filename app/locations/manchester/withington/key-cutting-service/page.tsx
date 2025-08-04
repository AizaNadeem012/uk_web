import { Metadata } from 'next'
import { Key, Shield, Clock, Wrench, Car, Home, Building2, CheckCircle, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Key Cutting Service in Withington | Mobile Service | UK Lock',
  description: 'Professional key cutting service in Withington. UK Lock offers mobile key cutting for all types of keys - residential, commercial, car keys, and high-security keys. Same-day service available.',
  openGraph: {
    title: 'Key Cutting Service in Withington | Mobile Service | UK Lock',
    description: 'Professional key cutting service in Withington. UK Lock offers mobile key cutting for all types of keys - residential, commercial, car keys, and high-security keys. Same-day service available.',
    url: 'https://www.uklock.co.uk/locations/manchester/withington/key-cutting-service',
    siteName: 'UK Lock',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Cutting Service in Withington | Mobile Service | UK Lock',
    description: 'Professional key cutting service in Withington. UK Lock offers mobile key cutting for all types of keys - residential, commercial, car keys, and high-security keys. Same-day service available.',
  },
  alternates: {
    canonical: 'https://www.uklock.co.uk/locations/manchester/withington/key-cutting-service',
  },
}

export default function KeyCuttingServiceWithington() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Key Cutting Service in Withington
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Professional and precise key cutting service for all types of keys. Our mobile service brings expert key cutting directly to your location in Withington.
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
                See Key Cutting Services
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                <span>Mobile Service</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Cutting Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Services in Withington</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Keys */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Home className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Residential Keys</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We cut all types of residential keys for homes in Withington, including Yale keys, mortice keys, and UPVC door keys for your house, flat, or apartment.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Yale type keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Mortice keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>UPVC door keys</span>
                </li>
              </ul>
            </div>

            {/* Commercial Keys */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Building2 className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Commercial Keys</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our Withington key cutting service includes commercial keys for offices, shops, and business premises, including master key systems.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Office keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Master key systems</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Restricted key systems</span>
                </li>
              </ul>
            </div>

            {/* Car Keys */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Car className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Car Keys</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We cut and program car keys for all makes and models in Withington, including standard keys, flip keys, and proximity keys.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Standard car keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Transponder keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Remote key fobs</span>
                </li>
              </ul>
            </div>

            {/* High-Security Keys */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">High-Security Keys</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our Withington key cutting service includes high-security keys with advanced security features, providing maximum protection for your property.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Anti-snap keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dimple keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Patented key systems</span>
                </li>
              </ul>
            </div>

            {/* Padlock Keys */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Lock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Padlock Keys</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lost your padlock key? Our Withington key cutting service can cut replacement keys for most types of padlocks, including security padlocks.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Standard padlock keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Security padlock keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Locker keys</span>
                </li>
              </ul>
            </div>

            {/* Key Cutting from Locks */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Key Cutting from Locks</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lost all your keys? Our Withington locksmiths can cut new keys directly from your lock, saving you the cost of a complete lock replacement.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Key cutting from door locks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Key cutting from car locks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Key cutting from padlocks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Cutting Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-700">
                We discuss your key cutting needs and identify the exact type of key required for your lock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Key Selection</h3>
              <p className="text-gray-700">
                We select the appropriate key blank that matches your original key or lock specifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Cutting</h3>
              <p className="text-gray-700">
                Using state-of-the-art key cutting machines, we precisely cut your new key to exact specifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Testing & Finishing</h3>
              <p className="text-gray-700">
                We test your new key to ensure perfect operation, then finish and polish it for smooth use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Key Cutting Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Precision Key Cutting in Withington</h2>
              <p className="text-lg text-gray-700 mb-4">
                At UK Lock, we use the latest computerized key cutting technology to ensure your new keys are cut with absolute precision. This means your keys will work smoothly in your locks every time, with no sticking or jamming.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our advanced key cutting machines can accurately duplicate even the most complex keys, including those with intricate security features. This precision is especially important for high-security keys and car keys, where even minor inaccuracies can cause problems.
              </p>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Computerized cutting technology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Accuracy to 0.01mm</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Perfect operation guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Why Precision Matters</h3>
                <p className="text-gray-700 mb-4">
                  Poorly cut keys can cause numerous problems:
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Difficulty inserting or removing keys from locks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Keys that stick or jam in the lock</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Premature wear on both keys and locks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <XCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <span>Keys that work intermittently or not at all</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Our precision key cutting service in Withington eliminates these problems, ensuring your keys work perfectly every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Key Cutting Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Mobile Key Cutting in Withington</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Can't come to us? No problem! Our mobile key cutting service brings our expertise directly to your location in Withington.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Home Visits</h3>
              <p>
                We'll come to your home in Withington to cut keys on the spot, saving you time and hassle.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Premises</h3>
              <p>
                Our mobile service is perfect for businesses in Withington needing multiple keys cut without disruption.
              </p>
            </div>
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Roadside Assistance</h3>
              <p>
                Lost your car keys in Withington? We'll come to your vehicle to cut and program new keys on the spot.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="tel:01614109870"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Our Mobile Service
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Withington Key Cutting Service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Expert Technicians</h3>
              </div>
              <p className="text-gray-700">
                Our Withington key cutting specialists are fully trained and experienced in cutting all types of keys with precision and accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Truck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Mobile Service</h3>
              </div>
              <p className="text-gray-700">
                Our mobile key cutting service brings our expertise directly to your location in Withington, saving you time and hassle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Zap className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fast Service</h3>
              </div>
              <p className="text-gray-700">
                Most key cutting jobs in Withington are completed within minutes, getting you back to your day as quickly as possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Quality Guaranteed</h3>
              </div>
              <p className="text-gray-700">
                We guarantee the quality of our key cutting service in Withington, with a satisfaction guarantee on all keys cut.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <PoundSterling className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Competitive Pricing</h3>
              </div>
              <p className="text-gray-700">
                Our Withington key cutting service offers excellent value for money, with transparent pricing and no hidden fees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Smartphone className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Convenient Booking</h3>
              </div>
              <p className="text-gray-700">
                Booking our Withington key cutting service is easy - simply call us or book online for same-day or scheduled appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Withington Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting Coverage in Withington</h2>
          
          <p className="text-lg text-center mb-8">
            Our key cutting services cover all areas of Withington and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Withington Village</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Old Moat</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Ladybarn</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Fallowfield</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Didsbury</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Burnage</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Chorlton</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Rusholme</div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            Don't see your area listed? Don't worry - we cover the entire Withington area and beyond. Just give us a call to confirm our availability for your location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How long does key cutting take in Withington?</h3>
              <p className="text-gray-700">
                Most standard keys can be cut in just a few minutes. More complex keys, such as high-security or car keys, may take 10-20 minutes. Our mobile service in Withington aims to complete all key cutting jobs as efficiently as possible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you cut any type of key in Withington?</h3>
              <p className="text-gray-700">
                We can cut most types of keys in Withington, including house keys, car keys, padlock keys, and high-security keys. The only exceptions are some very specialized or restricted keys that require authorization from the manufacturer.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How much does key cutting cost in Withington?</h3>
              <p className="text-gray-700">
                The cost of key cutting in Withington varies depending on the type of key. Standard house keys typically start from £5-£10, while more complex keys like car keys or high-security keys may cost more. We always provide a clear quote before starting any work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you cut keys if I've lost all my originals?</h3>
              <p className="text-gray-700">
                Yes, our Withington locksmiths can cut keys even if you've lost all your originals. We can either extract the code from your lock or use specialized techniques to create a new key that works with your existing lock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do I need to come to you, or can you come to me in Withington?</h3>
              <p className="text-gray-700">
                We offer a convenient mobile key cutting service throughout Withington. Our fully equipped vans can come to your home, business, or even roadside location to cut keys on the spot. Just call us to arrange a visit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you cut and program car keys in Withington?</h3>
              <p className="text-gray-700">
                Yes, we can cut and program car keys for most makes and models in Withington. Our mobile service carries specialized equipment for car key programming, allowing us to provide a complete service at your location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Phone, ArrowDown, Lock, Star, Truck, ShieldCheck, PoundSterling, XCircle, Zap } from 'lucide-react'