import { Metadata } from 'next'
import { Shield, Clock, Wrench, Key, CheckCircle, Smartphone, WrenchIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lock Repair in Stretford | Fast & Reliable Service | UK Lock',
  description: 'Professional lock repair services in Stretford. We fix all types of locks including UPVC, mortice, Yale & euro cylinder. Same-day service with no call-out fee.',
  openGraph: {
    title: 'Lock Repair in Stretford | Fast & Reliable Service | UK Lock',
    description: 'Professional lock repair services in Stretford. We fix all types of locks including UPVC, mortice, Yale & euro cylinder. Same-day service with no call-out fee.',
    url: 'https://www.uklock.co.uk/locations/manchester/stretford/lock-repair',
    siteName: 'UK Lock',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock Repair in Stretford | Fast & Reliable Service | UK Lock',
    description: 'Professional lock repair services in Stretford. We fix all types of locks including UPVC, mortice, Yale & euro cylinder. Same-day service with no call-out fee.',
  },
  alternates: {
    canonical: 'https://www.uklock.co.uk/locations/manchester/stretford/lock-repair',
  },
}

export default function LockRepairStretford() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lock Repair in Stretford
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Faulty lock? Key not turning? Our expert locksmiths provide fast, reliable lock repair services throughout Stretford and surrounding areas.
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
                href="#problems"
                className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center"
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                See Lock Problems We Fix
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>12-Month Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>No Call-Out Fee</span>
              </div>
              <div className="flex items-center">
                <Wrench className="h-5 w-5 mr-2" />
                <span>All Lock Types</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Lock Problems Section */}
      <section id="problems" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Common Lock Problems We Fix in Stretford</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stiff or Jammed Locks */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <WrenchIcon className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Stiff or Jammed Locks</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Locks that are difficult to turn or completely jammed are common in Stretford homes. This is often caused by dirt, debris, or worn internal components.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Professional cleaning & lubrication</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Internal mechanism repairs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Component replacement when needed</span>
                </li>
              </ul>
            </div>

            {/* Keys Turning But Not Working */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Key className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Keys Turning But Not Working</h3>
              </div>
              <p className="text-gray-700 mb-4">
                If your key turns in the lock but doesn't actually lock or unlock the door, there's likely an issue with the internal mechanism or connecting components.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Mechanism realignment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Cam or follower replacement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Complete internal servicing</span>
                </li>
              </ul>
            </div>

            {/* Broken Keys in Lock */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Key className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Broken Keys in Lock</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Keys can snap off inside locks, especially in cold weather or with older, worn keys. Our Stretford locksmiths can extract broken keys without damaging your lock.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Non-destructive key extraction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Lock inspection after extraction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>New key cutting on the spot</span>
                </li>
              </ul>
            </div>

            {/* UPVC Door Lock Issues */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <DoorClosed className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">UPVC Door Lock Issues</h3>
              </div>
              <p className="text-gray-700 mb-4">
                UPVC door locks in Stretford homes often develop problems with the multipoint locking mechanism, making doors difficult to lock or unlock properly.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Multipoint mechanism repairs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Gearbox replacement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Door realignment services</span>
                </li>
              </ul>
            </div>

            {/* Damaged Lock Cylinders */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Lock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Damaged Lock Cylinders</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Lock cylinders can become damaged due to attempted break-ins, wear and tear, or exposure to the elements, particularly in Stretford's variable weather conditions.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Cylinder repair when possible</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Like-for-like cylinder replacement</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Security upgrade options</span>
                </li>
              </ul>
            </div>

            {/* Smart Lock Malfunctions */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Smartphone className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Smart Lock Malfunctions</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Modern smart locks can experience electronic failures, connectivity issues, or mechanical problems. Our Stretford locksmiths are trained in the latest smart lock technologies.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Electronic diagnostics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Software troubleshooting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Mechanical component repair</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Lock Repair Process in Stretford</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Diagnosis</h3>
              <p className="text-gray-700">
                Our Stretford locksmiths will thoroughly examine your lock to identify the exact cause of the problem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Repair Options</h3>
              <p className="text-gray-700">
                We'll explain the repair options available, including costs, and recommend the most effective solution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Repair</h3>
              <p className="text-gray-700">
                Using specialist tools and parts, we'll repair your lock on the spot in most cases.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Testing & Guarantee</h3>
              <p className="text-gray-700">
                We'll thoroughly test the repaired lock and provide a 12-month guarantee on all our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Service Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Same-Day Lock Repair Service in Stretford</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Don't live with a faulty lock that compromises your security. Our Stretford locksmiths provide same-day lock repair services throughout the area.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Response Times</h3>
              <p>
                We aim to reach Stretford properties within 30-60 minutes of your call for urgent lock repairs.
              </p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully Equipped Vans</h3>
              <p>
                Our mobile workshops carry a comprehensive range of parts and tools to complete most repairs in one visit.
              </p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-xl">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">7-Day Availability</h3>
              <p>
                Our Stretford lock repair service is available 7 days a week, including weekends and bank holidays.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="tel:01614109870"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call For Same-Day Repair
            </a>
          </div>
        </div>
      </section>

      {/* Lock Brands Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Brands We Service in Stretford</h2>
          
          <p className="text-lg text-center mb-10 text-gray-700">
            Our Stretford locksmiths are trained to repair and service all major lock brands, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Yale</h3>
              <p className="text-gray-700 mt-2">Night latches, cylinders & smart locks</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Chubb</h3>
              <p className="text-gray-700 mt-2">Mortice locks & high-security systems</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600">ERA</h3>
              <p className="text-gray-700 mt-2">Multipoint locks & security solutions</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Banham</h3>
              <p className="text-gray-700 mt-2">High-security locks & cylinders</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Union</h3>
              <p className="text-gray-700 mt-2">Mortice locks & door furniture</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-600">Ultion</h3>
              <p className="text-gray-700 mt-2">Anti-snap euro cylinders</p>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            Don't see your lock brand listed? Don't worry - our Stretford locksmiths can repair virtually any type of lock. Just give us a call to discuss your specific requirements.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Our Stretford Lock Repair Service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fully Qualified Locksmiths</h3>
              </div>
              <p className="text-gray-700">
                All our Stretford locksmiths are fully trained, qualified, and experienced in all aspects of lock repair and maintenance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Fast Response Times</h3>
              </div>
              <p className="text-gray-700">
                We understand that a faulty lock is a security risk, which is why we aim to reach Stretford properties quickly, usually within 30-60 minutes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <PoundSterling className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Transparent Pricing</h3>
              </div>
              <p className="text-gray-700">
                We provide clear, upfront pricing with no hidden fees or call-out charges for our Stretford lock repair services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Wrench className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Comprehensive Repairs</h3>
              </div>
              <p className="text-gray-700">
                We can repair virtually any type of lock, from traditional mortice locks to modern smart locks and everything in between.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <ThumbsUp className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">12-Month Guarantee</h3>
              </div>
              <p className="text-gray-700">
                All our lock repairs in Stretford come with a comprehensive 12-month guarantee for your peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-10 w-10 text-blue-600 mr-4 flex-shrink-0" />
                <h3 className="text-xl font-bold">Highly Rated Service</h3>
              </div>
              <p className="text-gray-700">
                Our Stretford lock repair service is highly rated on Google, Checkatrade, and Trustpilot, with hundreds of 5-star reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stretford Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lock Repair Coverage in Stretford</h2>
          
          <p className="text-lg text-center mb-8">
            Our lock repair services cover all areas of Stretford and surrounding regions, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stretford Town Centre</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Old Trafford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Gorse Hill</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Longford</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Stretford Meadows</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Trafford Park</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Firswood</div>
            <div className="bg-blue-100 rounded-lg p-3 text-center text-blue-800 font-medium">Davyhulme</div>
          </div>
          
          <p className="text-center mt-8 text-gray-700">
            Don't see your area listed? Don't worry - we cover the entire Stretford area and beyond. Just give us a call to confirm our availability for your location.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How quickly can you repair my lock in Stretford?</h3>
              <p className="text-gray-700">
                In most cases, we can repair your lock on the same day you call us. Our Stretford locksmiths aim to reach you within 30-60 minutes for urgent repairs, and we carry a comprehensive range of parts to complete most repairs in a single visit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Is it cheaper to repair a lock or replace it?</h3>
              <p className="text-gray-700">
                In many cases, repairing a lock is more cost-effective than replacing it, especially for high-quality or specialized locks. Our Stretford locksmiths will always advise you on the most economical option based on the condition of your lock and the nature of the problem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you repair UPVC door locks in Stretford?</h3>
              <p className="text-gray-700">
                Yes, our Stretford locksmiths specialize in repairing UPVC door locks and multipoint locking systems. We can fix issues with the gearbox, mechanism, or cylinder, and we carry a wide range of UPVC lock parts for all major brands.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you charge a call-out fee for lock repairs in Stretford?</h3>
              <p className="text-gray-700">
                No, we don't charge any call-out fees for our lock repair services in Stretford. You only pay for the actual repair work carried out, and we'll always provide a clear quote before starting any work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can you repair smart locks?</h3>
              <p className="text-gray-700">
                Yes, our Stretford locksmiths are trained to repair and service a wide range of smart locks. We can diagnose and fix electronic issues, mechanical problems, and connectivity issues with most major smart lock brands.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do you offer any guarantee on lock repairs?</h3>
              <p className="text-gray-700">
                Yes, all our lock repairs in Stretford come with a comprehensive 12-month guarantee. If you experience any issues with the repaired lock within this period, we'll return and fix it free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Phone, ArrowDown, Calendar, PoundSterling, ThumbsUp, Star, Lock, DoorClosed } from 'lucide-react'