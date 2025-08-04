import { Metadata } from 'next'
import { Shield, Clock, Key, CheckCircle, Smartphone, Scissors, Car, Home, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Key Cutting Service in Altrincham | Fast & Precise | UK Lock',
  description: 'Professional key cutting service in Altrincham. We cut all types of keys including house, car, security & padlock keys. Mobile service available with same-day appointments.',
  openGraph: {
    title: 'Key Cutting Service in Altrincham | Fast & Precise | UK Lock',
    description: 'Professional key cutting service in Altrincham. We cut all types of keys including house, car, security & padlock keys. Mobile service available with same-day appointments.',
    url: 'https://www.uklock.co.uk/locations/manchester/altrincham/key-cutting-service',
    siteName: 'UK Lock',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Cutting Service in Altrincham | Fast & Precise | UK Lock',
    description: 'Professional key cutting service in Altrincham. We cut all types of keys including house, car, security & padlock keys. Mobile service available with same-day appointments.',
  },
  alternates: {
    canonical: 'https://www.uklock.co.uk/locations/manchester/altrincham/key-cutting-service',
  },
}

export default function KeyCuttingAltrincham() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Key Cutting Service in Altrincham
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Need spare keys? Lost your only key? Our professional key cutting service in Altrincham provides fast, precise key cutting for all types of keys.
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
                href="#key-types"
                className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center"
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                See Key Types We Cut
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center">
                <Scissors className="h-5 w-5 mr-2" />
                <span>Precision Cutting</span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 mr-2" />
                <span>Mobile Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>All Key Types</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Types Section */}
      <section id="key-types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Types We Cut in Altrincham</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Keys */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Home className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Residential Keys</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We cut all types of residential keys for homes in Altrincham, including Yale, mortice, and UPVC door keys.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Yale & night latch keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Mortice keys (Chubb & Union)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>UPVC door & window keys</span>
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
                Our Altrincham key cutting service caters to businesses with a range of commercial key cutting solutions.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Master key systems</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Restricted key systems</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Filing cabinet & desk keys</span>
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
                We provide car key cutting services for a wide range of vehicle makes and models in Altrincham.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Standard car keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Flip keys & remote keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Transponder key programming</span>
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
                Our Altrincham locksmiths can cut high-security keys with complex profiles and multiple cuts.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Anti-snap euro cylinder keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dimple keys</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Multi-point locking system keys</span>
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
                Lost your padlock key? We can cut replacement keys for most types of padlocks in Altrincham.
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
                  <span>Locker & cabinet padlock keys</span>
                </li>
              </ul>
            </div>

            {/* Keys Cut from Locks */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Key className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Keys Cut from Locks</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lost all your keys? Our Altrincham locksmiths can create new keys directly from your lock.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Key creation by lock impression</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Key cutting by lock code</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>On-site key creation service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Cutting Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Key Cutting Process in Altrincham</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Key Assessment</h3>
              <p className="text-gray-700">
                We examine your original key or lock to determine the exact key type and specifications needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Cutting</h3>
              <p className="text-gray-700">
                Using state-of-the-art key cutting machines, we cut your new key with exact precision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Finishing & Polishing</h3>
              <p className="text-gray-700">
                We carefully finish and polish each key to ensure smooth operation in your lock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Testing & Verification</h3>
              <p className="text-gray-700">
                We test each key to ensure it works perfectly before handing it over to you.
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
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Precision Key Cutting in Altrincham</h2>
              <p className="text-lg text-gray-700 mb-4">
                At UK Lock, we understand that accurate key cutting is essential for smooth lock operation. Our Altrincham key cutting service uses advanced computerized key cutting machines for precise results every time.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Unlike basic key cutting services that can produce rough or imprecise copies, our professional equipment ensures that each key is cut to the exact specifications required for your lock.
              </p>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Computerized cutting technology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Micrometric precision</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Perfect operation guaranteed</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Why Precision Matters</h3>
                <p className="text-gray-700 mb-4">
                  Poorly cut keys can cause various problems that affect your lock's performance and lifespan:
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <span>Difficulty inserting or removing the key from the lock</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <span>Keys that stick or require excessive force to turn</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <span>Premature wear on your lock's internal components</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <span>Keys that work intermittently or stop working over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Key Cutting Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Mobile Key Cutting Service in Altrincham</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Can't come to us? No problem! Our mobile key cutting service brings our professional key cutting equipment directly to your location in Altrincham.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Convenient Scheduling</h3>
              <p>
                Book our mobile key cutting service at a time that suits you, including evenings and weekends in Altrincham.
              </p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">On-Site Service</h3>
              <p>
                We bring professional-grade key cutting equipment to your home or business in Altrincham.
              </p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Same Quality Guarantee</h3>
              <p>
                Our mobile service provides the same precision and quality as our in-shop key cutting in Altrincham.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="tel:01614109870"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Mobile Key Cutting
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Altrincham Key Cutting Service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Scissors className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Precision Equipment</h3>
              </div>
              <p className="text-gray-700">
                We use advanced computerized key cutting machines for accurate, precise key cutting every time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fast Service</h3>
              </div>
              <p className="text-gray-700">
                Most keys can be cut while you wait, with our Altrincham service typically taking just 5-10 minutes per key.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Experienced Locksmiths</h3>
              </div>
              <p className="text-gray-700">
                Our Altrincham key cutting specialists have years of experience cutting all types of keys with precision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Car className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Mobile Service</h3>
              </div>
              <p className="text-gray-700">
                Can't come to us? Our mobile key cutting service comes to your location in Altrincham at a time that suits you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Key className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">All Key Types</h3>
              </div>
              <p className="text-gray-700">
                We can cut virtually any type of key, from standard house keys to complex security keys and car keys.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <ThumbsUp className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Satisfaction Guarantee</h3>
              </div>
              <p className="text-gray-700">
                All our key cutting work in Altrincham is guaranteed. If your key doesn't work perfectly, we'll replace it free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Altrincham Coverage Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Cutting Coverage in Altrincham</h2>
          
          <p className="text-lg text-center mb-8">
            Our key cutting services cover all areas of Altrincham and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Altrincham Town Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Bowdon</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Hale</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Timperley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Broadheath</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Navigation Road</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">West Timperley</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Dunham Massey</div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            Don't see your area listed? Don't worry - we cover the entire Altrincham area and beyond. Just give us a call to confirm our availability for your location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How long does key cutting take in Altrincham?</h3>
              <p className="text-gray-700">
                Most standard keys can be cut in just 5-10 minutes at our Altrincham service. More complex keys, such as high-security or car keys, may take 15-30 minutes. Our mobile service in Altrincham operates on the same timeframe once we arrive at your location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you cut a key if I don't have the original?</h3>
              <p className="text-gray-700">
                Yes, our Altrincham locksmiths can create keys even without an original. We can cut keys directly from the lock using specialized techniques, or by the lock's code if available. This service is available for most residential and commercial locks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you cut all types of car keys in Altrincham?</h3>
              <p className="text-gray-700">
                We can cut most types of car keys in Altrincham, including standard mechanical keys, flip keys, and some transponder keys. For modern car keys with electronic components, we can cut the mechanical part and also program the electronic chip if needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How much does key cutting cost in Altrincham?</h3>
              <p className="text-gray-700">
                Key cutting prices in Altrincham vary depending on the type of key. Standard house keys typically start from £5-£10, while more complex keys like high-security or car keys range from £15-£50. We always provide a clear quote before proceeding with any work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do I need to bring ID for key cutting in Altrincham?</h3>
              <p className="text-gray-700">
                For standard key cutting from an original key, ID is not usually required. However, for security keys, restricted keys, or when cutting keys from a lock rather than an original key, we may ask for proof of ownership or ID for security purposes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How quickly can your mobile service reach me in Altrincham?</h3>
              <p className="text-gray-700">
                Our mobile key cutting service can typically reach most locations in Altrincham within 30-60 minutes for urgent requests. For non-urgent key cutting, we offer scheduled appointments at a time that's convenient for you, including evenings and weekends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Phone, ArrowDown, Calendar, PoundSterling, ThumbsUp, Star, Lock } from 'lucide-react'