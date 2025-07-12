export const metadata = {
  title: "Car Locksmith Services Manchester | Car Key Replacement | KEY 2 BHP",
  description: "Explore our full range of car locksmith services in Manchester: car key replacement, emergency lockout, ignition repair, ECU programming, and more. 24/7 mobile service by KEY 2 BHP.",
  openGraph: {
    title: "Car Locksmith Services Manchester | Car Key Replacement",
    description: "KEY 2 BHP offers professional car locksmith services in Manchester. Car key replacement, lockout help, ignition repair, and more.",
    url: "https://key2bhp.co.uk/services",
    siteName: "KEY 2 BHP",
    locale: "en_GB",
    type: "service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Locksmith Services Manchester | Car Key Replacement",
    description: "24/7 car locksmith and key replacement services in Manchester by KEY 2 BHP.",
  },
  alternates: {
    canonical: "https://key2bhp.co.uk/services",
  },
}

import { Key, Car, Clock, Shield, Wrench, Smartphone, MapPin, CheckCircle, Zap, Users, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Key,
      title: "Car Key Replacement",
      description:
        "Lost or broken car keys? We cut and program new keys on the spot for all makes and models including BMW, Audi, Toyota, Honda, and more.",
      features: [
        "Same day key replacement",
        "All car makes & models",
        "Transponder key programming",
        "Remote key fob replacement",
        "Spare key creation",
        "Lost key replacement",
        "BMW & Nissan key replacement",
        "Mobile car key replacement",
      ],
      keywords: ["car key replacement near me", "lost car keys", "new car key", "spare car key", "BMW key replacement"],
    },
    {
      icon: Car,
      title: "Emergency Lockouts",
      description: "Locked out? We'll get you back in your vehicle fast – no damage! Professional car lockout service across Manchester.",
      features: [
        "Non-destructive entry",
        "All vehicle types",
        "Quick response time",
        "Professional tools",
        "Damage-free guarantee",
        "Emergency service",
        "Car unlock service",
        "Auto lockout service",
      ],
      keywords: ["car lockout service", "locked out of car", "unlock car door", "auto lockout", "car unlock service near me"],
    },
    {
      icon: Wrench,
      title: "Ignition Repairs",
      description: "Having trouble starting your car? We fix ignition issues on-site with professional ignition repair and replacement services.",
      features: [
        "Ignition cylinder repair",
        "Ignition replacement",
        "Key extraction",
        "Ignition rekeying",
        "Switch replacement",
        "Same day service",
        "Car ignition repair",
        "Ignition locksmith",
      ],
      keywords: ["car ignition repair", "ignition replacement", "ignition locksmith", "stuck ignition", "ignition repair near me"],
    },
    {
      icon: Shield,
      title: "Car Key Programming",
      description: "We program smart, transponder, and remote keys for all vehicles. Professional transponder key programming and chip key services.",
      features: [
        "All transponder types",
        "Key programming",
        "Chip key replacement",
        "Remote programming",
        "ECU programming",
        "Diagnostic services",
        "Car key coding",
        "Key reprogramming",
      ],
      keywords: ["transponder key programming", "chip key replacement", "key programming", "car key coding", "transponder key replacement"],
    },
    {
      icon: Zap,
      title: "Broken Key Extraction",
      description: "Key stuck or broken in your ignition or door? We remove it safely with professional broken key extraction services.",
      features: [
        "Safe key removal",
        "No damage guarantee",
        "Professional tools",
        "All key types",
        "Emergency service",
        "Quick response",
        "Key stuck in ignition",
        "Remove broken key",
      ],
      keywords: ["broken key extraction", "key stuck in ignition", "remove broken key", "key extraction service", "broken key removal"],
    },
    {
      icon: Clock,
      title: "ECU Programming & Diagnostics",
      description: "We diagnose and reprogram your car's ECU for maximum performance and key recognition. Advanced automotive diagnostics.",
      features: [
        "ECU reprogramming",
        "Car diagnostics",
        "Performance optimization",
        "Key recognition",
        "Advanced diagnostics",
        "Professional equipment",
        "Automotive diagnostics",
        "ECU programming near me",
      ],
      keywords: ["ECU programming", "car diagnostics", "automotive diagnostics", "ECU reprogramming", "ECU programming near me"],
    },
  ]

  const carBrands = [
    { name: "BMW", services: "Key replacement, programming, ignition repair, BMW key replacement" },
    { name: "Audi", services: "Advanced key programming, lockout service, audi car key replacement" },
    { name: "Toyota", services: "Key cutting, transponder programming, car key duplication" },
    { name: "Honda", services: "Key replacement, ignition service, car key fix near me" },
    { name: "Ford", services: "Key programming, lockout assistance, car lock repair" },
    { name: "Volkswagen", services: "VW key specialist, programming, car door locksmith near me" },
    { name: "Nissan", services: "Key replacement, chip programming, nissan car key replacement" },
    { name: "Hyundai", services: "Key cutting, ignition repair, car locksmith near me prices" },
    { name: "Kia", services: "Key programming, lockout service, mobile car key locksmith" },
    { name: "Mercedes", services: "Premium key service, programming, bmw locksmith near me" },
    { name: "Vauxhall", services: "Key replacement, ignition service, car ignition repair" },
    { name: "Volvo", services: "Key programming, security systems, car lock replacement" },
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

  const additionalServices = [
    "Key Cutting & Duplication",
    "Lost or Broken Key Replacement",
    "Key Programming",
    "Car Locksmith Services",
    "Emergency Locksmith Services",
    "Mobile Car Locksmith",
    "Car Key Fobs",
    "Smart Car Key Replacement",
    "Chip Key Replacement",
    "Car Key Programming Near Me",
    "Cheap Car Key Replacement",
    "24 Hour Car Unlock Service",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HeroAnimation>
            <Badge className="mb-6 bg-orange-500 text-white px-4 py-2 text-lg">Professional Services</Badge>
              <AnimatedText delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  🔧 Complete <span className="text-orange-500">Car Locksmith</span> Services
            </h1>
              </AnimatedText>
              <AnimatedText delay={0.4}>
            <p className="text-xl mb-8 text-slate-300 leading-relaxed">
                  From emergency lockouts to complex key programming, we provide comprehensive automotive locksmith services across Manchester with 24/7 availability and professional expertise.
            </p>
              </AnimatedText>
              <AnimatedSection delay={0.6}>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
                  Call Now: 07309 903243
            </Button>
              </AnimatedSection>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Professional Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive automotive locksmith solutions with expert technicians and state-of-the-art equipment
            </p>
          </div>
          </AnimatedSection>

          <AnimatedList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="hover:shadow-xl transition-shadow border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                      <FloatingIcon>
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                      </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

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

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Additional Services We Offer</h2>
              <p className="text-lg text-slate-600">
                Complete automotive locksmith solutions for all your needs
              </p>
            </div>
          </AnimatedSection>
          <AnimatedList>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalServices.map((service, index) => (
                <AnimatedListItem key={index} delay={index * 0.05}>
                  <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                    {service}
                  </Badge>
                </AnimatedListItem>
            ))}
          </div>
          </AnimatedList>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">We Service All Car Makes & Models</h2>
              <p className="text-lg text-slate-600">
                Professional car key replacement and locksmith services for all major automotive brands
            </p>
          </div>
          </AnimatedSection>
          <AnimatedList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carBrands.map((brand, index) => (
                <AnimatedCard key={index} delay={index * 0.05} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Car className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      {brand.name}
                    </h3>
                    <p className="text-sm text-slate-600">{brand.services}</p>
                </CardContent>
                </AnimatedCard>
            ))}
          </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
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

      {/* Why Choose Us */}
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
                      <Zap className="h-8 w-8 text-white" />
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

      {/* Contact CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Need Emergency Car Locksmith Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait! Our mobile locksmith team is ready to help you 24/7 across Manchester. Fast response times guaranteed.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Key className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">KEY 2 BHP</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    24/7 Emergency Car & Auto Locksmith Services in Manchester. Quick, secure, and trusted service by professionals.
                  </p>
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
