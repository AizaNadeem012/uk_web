"use client"

import { Phone, Clock, MapPin, Star, Shield, Key, Car, Wrench, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { 
  HeroAnimation, 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedList, 
  AnimatedListItem,
  FloatingIcon,
  PulseAnimation,
  SlideInLeft,
  SlideInRight
} from "@/components/animated-components"

export default function HomePage() {
  const services = [
    {
      title: "Car Key Replacement",
      description:
        "Lost or broken car keys? We cut and program new keys on the spot for all makes and models including BMW, Audi, Toyota, Honda, and more.",
      keywords: [
        "car key replacement near me",
        "lost car keys",
        "new car key replacement",
        "24 hour car key replacement",
      ],
    },
    {
      title: "Emergency Lockouts",
      description:
        "Locked out? We'll get you back in your vehicle fast – no damage! Professional car lockout service across Manchester.",
      keywords: ["car lockout service", "locked out of car", "unlock car door service", "auto lockout service"],
    },
    {
      title: "Ignition Repairs",
      description:
        "Having trouble starting your car? We fix ignition issues on-site with professional ignition repair and replacement services.",
      keywords: ["car ignition repair", "ignition replacement", "ignition locksmith", "rekey car ignition"],
    },
    {
      title: "Car Key Programming",
      description:
        "We program smart, transponder, and remote keys for all vehicles. Professional transponder key programming and chip key services.",
      keywords: ["transponder key replacement", "key programming", "car key coding", "key reprogramming"],
    },
    {
      title: "Broken Key Extraction",
      description:
        "Key stuck or broken in your ignition or door? We remove it safely with professional broken key extraction services.",
      keywords: ["broken key extraction", "key stuck in ignition", "remove broken key", "key extraction service"],
    },
    {
      title: "ECU Programming & Diagnostics",
      description:
        "We diagnose and reprogram your car's ECU for maximum performance and key recognition. Advanced automotive diagnostics.",
      keywords: ["ECU programming", "car diagnostics", "automotive diagnostics", "ECU reprogramming"],
    },
  ]

  const carBrands = [
    "BMW",
    "Audi",
    "Toyota",
    "Honda",
    "Ford",
    "Volkswagen",
    "Nissan",
    "Hyundai",
    "Kia",
    "Lexus",
    "Mitsubishi",
    "Mazda",
    "Volvo",
    "Vauxhall",
    "Jeep",
    "Mercedes",
  ]

  const serviceAreas = [
    "Manchester City Centre",
    "Didsbury",
    "Rusholme",
    "Chorlton",
    "Prestwich",
    "Salford",
    "Stockport",
    "Oldham",
    "Rochdale",
    "Bury",
    "Bolton",
    "Wigan",
    "Tameside",
    "Trafford",
    "Altrincham",
    "Stretford",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <HeroAnimation>
            <PulseAnimation>
              <Badge className="mb-6 bg-orange-500 text-white px-4 py-2 text-lg">24/7 Emergency Service</Badge>
            </PulseAnimation>
            <AnimatedText>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                🔧 Our Locksmith Services in <span className="text-orange-500">Manchester</span>
              </h1>
            </AnimatedText>
            <AnimatedText>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-300">
                Welcome to <strong>KEY 2 BHP</strong> — trusted female car and auto locksmiths in Manchester. We offer emergency key replacements, car lockouts, transponder programming, and more. Available 24/7 across Greater Manchester with fast response and affordable rates.
              </p>
            </AnimatedText>
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 07309 903243
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 bg-transparent"
                >
                  Get Free Quote
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedList>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <AnimatedListItem>
                  <div className="flex items-center justify-center space-x-2">
                    <FloatingIcon>
                      <Clock className="h-6 w-6 text-orange-500" />
                    </FloatingIcon>
                    <span>24/7 Available</span>
                  </div>
                </AnimatedListItem>
                <AnimatedListItem>
                  <div className="flex items-center justify-center space-x-2">
                    <FloatingIcon>
                      <Shield className="h-6 w-6 text-orange-500" />
                    </FloatingIcon>
                    <span>Fully Insured</span>
                  </div>
                </AnimatedListItem>
                <AnimatedListItem>
                  <div className="flex items-center justify-center space-x-2">
                    <FloatingIcon>
                      <Star className="h-6 w-6 text-orange-500" />
                    </FloatingIcon>
                    <span>5-Star Rated</span>
                  </div>
                </AnimatedListItem>
              </div>
            </AnimatedList>
          </HeroAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">🔧 Emergency Car & Auto Locksmith Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We specialize in fast, affordable, and reliable auto locksmith solutions just for you. Whether you're locked out or need a replacement car key in Manchester, we're just one call away — available 24/7!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <FloatingIcon>
                        <div className="bg-orange-500 p-2 rounded-lg">
                          <Key className="h-6 w-6 text-white" />
                        </div>
                      </FloatingIcon>
                      <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.slice(0, 2).map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">We Service All Car Makes & Models</h2>
              <p className="text-lg text-slate-600">
                Professional car key replacement and locksmith services for all major automotive brands including BMW & Nissan key replacement
              </p>
            </div>
          </AnimatedSection>
          <AnimatedList>
            <div className="flex flex-wrap justify-center gap-4">
              {carBrands.map((brand, index) => (
                <AnimatedListItem key={index} delay={index * 0.05}>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                    {brand} Key Replacement
                  </Badge>
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">✨ Why Choose KEY 2 BHP Auto Locksmith?</h2>
              <p className="text-xl text-slate-300">Manchester's most trusted automotive locksmith service</p>
            </div>
          </AnimatedSection>
          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedListItem>
                <div className="text-center">
                  <FloatingIcon>
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-8 w-8 text-white" />
                    </div>
                  </FloatingIcon>
                  <h3 className="text-xl font-semibold mb-2">🚘 Fast Mobile Response</h3>
                  <p className="text-slate-300">We reach you quickly, wherever you are—saving you time and hassle.</p>
                </div>
              </AnimatedListItem>
              <AnimatedListItem>
                <div className="text-center">
                  <FloatingIcon>
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </FloatingIcon>
                  <h3 className="text-xl font-semibold mb-2">🔐 Certified Experts</h3>
                  <p className="text-slate-300">Trained professionals with years of experience in auto locksmithing.</p>
                </div>
              </AnimatedListItem>
              <AnimatedListItem>
                <div className="text-center">
                  <FloatingIcon>
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                  </FloatingIcon>
                  <h3 className="text-xl font-semibold mb-2">💷 Affordable Prices</h3>
                  <p className="text-slate-300">Transparent, budget-friendly rates with excellent service quality.</p>
                </div>
              </AnimatedListItem>
              <AnimatedListItem>
                <div className="text-center">
                  <FloatingIcon>
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                  </FloatingIcon>
                  <h3 className="text-xl font-semibold mb-2">📞 24/7 Availability</h3>
                  <p className="text-slate-300">We're available round-the-clock for emergency services in your area.</p>
                </div>
              </AnimatedListItem>
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">📍 Areas We Cover (Manchester UK)</h2>
              <p className="text-lg text-slate-600">
                Professional mobile locksmith services across Greater Manchester and surrounding areas
              </p>
            </div>
          </AnimatedSection>
          <AnimatedList>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area, index) => (
                <AnimatedListItem key={index} delay={index * 0.05}>
                  <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                    {area}
                  </Badge>
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Need Emergency Car Locksmith Service?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait! Our mobile locksmith team is ready to help you 24/7 across Manchester. Fast response times guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <PulseAnimation>
                <Button size="lg" className="bg-white text-orange-500 hover:bg-slate-100 text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 07309 903243
                </Button>
              </PulseAnimation>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 text-lg px-8 py-4 bg-transparent"
              >
                Email: info@key2bhp.co.uk
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>Serving Manchester & Greater Manchester Area</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedListItem>
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src="/images/uk-lock-logo.png"
                      alt="KEY 2 BHP Logo"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-bold">KEY 2 BHP</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    24/7 Emergency Car & Auto Locksmith Services in Manchester. Quick, secure, and trusted service by professionals.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/19QA7MjbPE/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-400"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </AnimatedListItem>
              <AnimatedListItem>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>Car Key Replacement Near Me</li>
                    <li>Mobile Locksmith Service</li>
                    <li>Auto Lockout Service</li>
                    <li>Car Ignition Repair</li>
                    <li>Transponder Key Programming</li>
                    <li>24 Hour Emergency Service</li>
                    <li>Broken Key Extraction</li>
                    <li>ECU Programming & Diagnostics</li>
                  </ul>
                </div>
              </AnimatedListItem>
              <AnimatedListItem>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span>07309 903243</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span>07936 755530</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span>Greater Manchester, UK</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-orange-500" />
                      <span>info@key2bhp.co.uk</span>
                    </div>
                  </div>
                </div>
              </AnimatedListItem>
            </div>
          </AnimatedList>
          <AnimatedSection>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
              <p>&copy; 2025 KEY 2 BHP — All Rights Reserved.</p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}
