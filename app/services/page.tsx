export const metadata = {
  title: "Car Locksmith Services Manchester | Car Key Replacement | KEY 2 BHP",
  description: "Explore our full range of car locksmith services in Manchester: car key replacement, emergency lockout, ignition repair, ECU programming, and more. 24/7 mobile service by KEY 2 BHP.",
  openGraph: {
    title: "Car Locksmith Services Manchester | Car Key Replacement",
    description: "KEY 2 BHP offers professional car locksmith services in Manchester. Car key replacement, lockout help, ignition repair, and more.",
    url: "https://key2bhp.co.uk/services",
    siteName: "KEY 2 BHP",
    locale: "en_GB",
    type: "website",
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

import { Key, Car, Clock, Shield, Wrench, Smartphone, MapPin, CheckCircle, Zap, Users, Phone, Mail, Star } from "lucide-react"
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

  // New data for additional sections
  const serviceProcess = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call our 24/7 emergency hotline or use our online booking system",
      icon: "📞",
      time: "Immediate"
    },
    {
      step: "2",
      title: "Assessment",
      description: "Our technician assesses your situation and provides a quote",
      icon: "🔍",
      time: "5-10 minutes"
    },
    {
      step: "3",
      title: "Mobile Service",
      description: "Fully equipped van arrives at your location",
      icon: "🚐",
      time: "20-30 minutes"
    },
    {
      step: "4",
      title: "Professional Work",
      description: "Expert service using state-of-the-art equipment",
      icon: "🛠️",
      time: "15-60 minutes"
    },
    {
      step: "5",
      title: "Testing & Payment",
      description: "Test your vehicle and complete secure payment",
      icon: "✅",
      time: "5 minutes"
    }
  ]

  const pricingInfo = [
    {
      service: "Emergency Car Lockout",
      price: "From £35",
      description: "Non-destructive entry with damage-free guarantee",
      features: ["Professional tools", "No damage guarantee", "All vehicle types"]
    },
    {
      service: "Car Key Replacement",
      price: "From £45",
      description: "Cut and program new keys on-site",
      features: ["Same day service", "All makes & models", "Programming included"]
    },
    {
      service: "Ignition Repair",
      price: "From £60",
      description: "Professional ignition repair and replacement",
      features: ["Expert diagnosis", "Quality parts", "Warranty included"]
    },
    {
      service: "Key Programming",
      price: "From £40",
      description: "Program transponder and smart keys",
      features: ["All key types", "Advanced equipment", "Testing included"]
    },
    {
      service: "Broken Key Extraction",
      price: "From £30",
      description: "Safe removal of stuck or broken keys",
      features: ["Safe extraction", "No damage", "Emergency service"]
    },
    {
      service: "ECU Programming",
      price: "From £80",
      description: "Advanced diagnostics and ECU reprogramming",
      features: ["Professional equipment", "Performance optimization", "Warranty"]
    }
  ]

  const emergencyResponse = [
    {
      area: "Manchester City Centre",
      responseTime: "15-20 minutes",
      availability: "24/7",
      services: ["Lockouts", "Key replacement", "Ignition repair"]
    },
    {
      area: "Salford & Stockport",
      responseTime: "20-25 minutes",
      availability: "24/7",
      services: ["Emergency assistance", "Key programming", "Mobile service"]
    },
    {
      area: "Oldham & Rochdale",
      responseTime: "25-30 minutes",
      availability: "24/7",
      services: ["Professional locksmith", "Car security", "Affordable rates"]
    },
    {
      area: "Bury & Bolton",
      responseTime: "30-35 minutes",
      availability: "24/7",
      services: ["Emergency response", "Quality guarantee", "Expert service"]
    }
  ]

  const equipment = [
    {
      name: "Advanced Key Programming Equipment",
      description: "State-of-the-art equipment for all transponder and smart key programming",
      icon: "🔧"
    },
    {
      name: "Computerized Key Cutting Machines",
      description: "Precision cutting for all vehicle makes and models",
      icon: "✂️"
    },
    {
      name: "Diagnostic Tools",
      description: "Professional diagnostic equipment for ignition and security systems",
      icon: "🔍"
    },
    {
      name: "Mobile Workshop",
      description: "Fully equipped mobile vans with all necessary tools",
      icon: "🚐"
    },
    {
      name: "Security Tools",
      description: "Specialized tools for safe lockout assistance",
      icon: "🛡️"
    },
    {
      name: "Communication Systems",
      description: "Real-time tracking and communication for efficient service",
      icon: "📱"
    }
  ]

  const guarantees = [
    {
      title: "No Damage Guarantee",
      description: "We guarantee no damage to your vehicle during our service",
      icon: "✅"
    },
    {
      title: "24/7 Emergency Service",
      description: "Available round the clock for emergency situations",
      icon: "🕐"
    },
    {
      title: "Professional Technicians",
      description: "All technicians are certified, insured, and experienced",
      icon: "👨‍🔧"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees - clear, upfront pricing for all services",
      icon: "💰"
    },
    {
      title: "Warranty Included",
      description: "All work comes with our comprehensive warranty",
      icon: "🛡️"
    },
    {
      title: "Fast Response Time",
      description: "Average response time of 20-30 minutes across Manchester",
      icon: "⚡"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you respond to emergency calls?",
      answer: "We typically respond within 20-30 minutes across Greater Manchester. Our mobile vans are strategically positioned to provide fast emergency service 24/7."
    },
    {
      question: "Do you work with all car makes and models?",
      answer: "Yes, we work with all vehicle makes and models including BMW, Audi, Mercedes, Toyota, Honda, Ford, Volkswagen, and many more. Our technicians are trained on all major brands."
    },
    {
      question: "Can you cut and program keys on-site?",
      answer: "Absolutely! Our mobile vans are fully equipped with computerized key cutting machines and programming equipment. We can cut and program most types of keys at your location."
    },
    {
      question: "What types of car keys do you handle?",
      answer: "We handle all types of car keys including basic metal keys, transponder keys, remote key fobs, smart keys, proximity keys, and switchblade keys for all vehicle brands."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide warranty on all our services including key cutting, programming, and repair work. We stand behind our work and ensure customer satisfaction."
    },
    {
      question: "What areas do you serve in Manchester?",
      answer: "We serve all areas of Greater Manchester including Manchester City Centre, Salford, Stockport, Oldham, Rochdale, Bury, Bolton, Wigan, Trafford, and Tameside."
    }
  ]

  // New data for additional sections
  const serviceComparison = [
    {
      service: "Car Key Replacement",
      traditional: "£80-120",
      ourPrice: "From £45",
      savings: "40-60%",
      features: ["Same day service", "Mobile service", "All makes & models", "Programming included"]
    },
    {
      service: "Emergency Lockout",
      traditional: "£60-100",
      ourPrice: "From £35",
      savings: "40-65%",
      features: ["No damage guarantee", "Fast response", "Professional tools", "24/7 service"]
    },
    {
      service: "Ignition Repair",
      traditional: "£120-200",
      ourPrice: "From £60",
      savings: "50-70%",
      features: ["Expert diagnosis", "Quality parts", "Warranty included", "Mobile service"]
    },
    {
      service: "Key Programming",
      traditional: "£70-110",
      ourPrice: "From £40",
      savings: "40-65%",
      features: ["Advanced equipment", "All key types", "Testing included", "Warranty"]
    }
  ]

  const customerStories = [
    {
      name: "Sarah Johnson",
      location: "Didsbury, Manchester",
      situation: "Locked out at 2 AM",
      service: "Emergency Lockout",
      outcome: "Arrived in 18 minutes, no damage to vehicle",
      rating: 5,
      quote: "Amazing service! They arrived quickly and got me back in my car without any damage."
    },
    {
      name: "Michael Patel",
      location: "Stockport",
      situation: "Lost car keys",
      service: "Key Replacement",
      outcome: "New key cut and programmed on-site in 45 minutes",
      rating: 5,
      quote: "Professional service and reasonable pricing. Highly recommend!"
    },
    {
      name: "Emma Thompson",
      location: "Chorlton",
      situation: "Broken key in ignition",
      service: "Key Extraction & Replacement",
      outcome: "Safely extracted broken key and provided new key",
      rating: 5,
      quote: "Expert workmanship. They handled a difficult situation perfectly."
    },
    {
      name: "David Wilson",
      location: "Salford",
      situation: "Ignition problems",
      service: "Ignition Repair",
      outcome: "Diagnosed and fixed ignition issue same day",
      rating: 5,
      quote: "Very knowledgeable technicians. Fixed my ignition quickly and professionally."
    }
  ]

  const technology = [
    {
      name: "Advanced Key Programming",
      description: "Latest equipment for programming all types of transponder and smart keys",
      icon: "🔧",
      benefits: ["Universal compatibility", "Fast programming", "High success rate"]
    },
    {
      name: "Computerized Key Cutting",
      description: "Precision cutting machines for all vehicle makes and models",
      icon: "✂️",
      benefits: ["Perfect fit", "All key types", "On-site cutting"]
    },
    {
      name: "Diagnostic Equipment",
      description: "Professional diagnostic tools for ignition and security systems",
      icon: "🔍",
      benefits: ["Accurate diagnosis", "Quick troubleshooting", "Preventive maintenance"]
    },
    {
      name: "Mobile Workshop",
      description: "Fully equipped mobile vans with all necessary tools",
      icon: "🚐",
      benefits: ["Complete service", "No towing needed", "Convenient location"]
    },
    {
      name: "Real-time Tracking",
      description: "GPS tracking and communication systems for efficient service",
      icon: "📱",
      benefits: ["Live updates", "Fast response", "Customer communication"]
    },
    {
      name: "Security Tools",
      description: "Specialized tools for safe lockout assistance",
      icon: "🛡️",
      benefits: ["No damage", "Safe entry", "Professional approach"]
    }
  ]

  const safetyMeasures = [
    {
      title: "DBS Checked Technicians",
      description: "All technicians undergo thorough background checks",
      icon: "🛡️",
      details: ["Criminal record checks", "Identity verification", "Professional references"]
    },
    {
      title: "Fully Insured Service",
      description: "Comprehensive insurance coverage for all services",
      icon: "📋",
      details: ["Public liability", "Professional indemnity", "Vehicle coverage"]
    },
    {
      title: "No Damage Guarantee",
      description: "We guarantee no damage to your vehicle",
      icon: "✅",
      details: ["Safe entry methods", "Professional tools", "Expert techniques"]
    },
    {
      title: "Licensed & Certified",
      description: "All technicians are licensed and certified",
      icon: "🎓",
      details: ["Industry certifications", "Ongoing training", "Quality standards"]
    },
    {
      title: "Secure Payments",
      description: "Multiple secure payment options available",
      icon: "💳",
      details: ["Card payments", "Digital payments", "Cash accepted"]
    },
    {
      title: "Privacy Protection",
      description: "Your information is kept confidential and secure",
      icon: "🔒",
      details: ["Data protection", "Secure systems", "Customer privacy"]
    }
  ]

  const coverageAreas = [
    {
      area: "Manchester City Centre",
      responseTime: "15-20 minutes",
      services: ["All services", "Emergency priority", "24/7 availability"],
      population: "500,000+",
      coverage: "100%"
    },
    {
      area: "Salford & Stockport",
      responseTime: "20-25 minutes",
      services: ["Full range", "Mobile service", "Emergency response"],
      population: "300,000+",
      coverage: "100%"
    },
    {
      area: "Oldham & Rochdale",
      responseTime: "25-30 minutes",
      services: ["Professional locksmith", "Key services", "Emergency assistance"],
      population: "250,000+",
      coverage: "95%"
    },
    {
      area: "Bury & Bolton",
      responseTime: "30-35 minutes",
      services: ["Mobile locksmith", "Key replacement", "Emergency service"],
      population: "200,000+",
      coverage: "90%"
    },
    {
      area: "Wigan & Trafford",
      responseTime: "30-40 minutes",
      services: ["Emergency response", "Key services", "Professional locksmith"],
      population: "180,000+",
      coverage: "85%"
    },
    {
      area: "Tameside & Altrincham",
      responseTime: "35-45 minutes",
      services: ["Mobile service", "Emergency assistance", "Key replacement"],
      population: "150,000+",
      coverage: "80%"
    }
  ]

  const bookingOptions = [
    {
      method: "Emergency Call",
      description: "24/7 emergency hotline for immediate assistance",
      icon: "📞",
      responseTime: "Immediate",
      bestFor: "Urgent situations"
    },
    {
      method: "Online Booking",
      description: "Schedule appointments through our website",
      icon: "💻",
      responseTime: "Within 2 hours",
      bestFor: "Non-emergency services"
    },
    {
      method: "WhatsApp",
      description: "Quick messaging for quotes and scheduling",
      icon: "📱",
      responseTime: "Within 30 minutes",
      bestFor: "Inquiries and quotes"
    },
    {
      method: "Email Booking",
      description: "Detailed service requests and documentation",
      icon: "📧",
      responseTime: "Within 4 hours",
      bestFor: "Complex services"
    }
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

      {/* Service Process Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500 text-white px-4 py-2 text-lg">How It Works</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Service Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Simple, efficient, and professional - here's how we deliver exceptional locksmith services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {serviceProcess.map((step, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-blue-200">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Step {step.step}</div>
                    <CardTitle className="text-xl mb-4 text-slate-900">{step.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {step.description}
                    </CardDescription>
                    <div className="text-sm text-blue-600 font-medium">
                      ⏱️ {step.time}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Pricing Information Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Transparent Pricing</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Clear, upfront pricing with no hidden fees. Quality service at competitive rates.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingInfo.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-slate-50 to-white border-2 border-orange-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-slate-900">{service.service}</CardTitle>
                      <Badge className="bg-orange-500 text-white text-lg px-3 py-1">{service.price}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6" variant="outline">
                      Get Quote
                    </Button>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Emergency Response Section - NEW */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-red-500 text-white px-4 py-2 text-lg">Emergency Service</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">24/7 Emergency Response</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Fast, reliable emergency locksmith services across Greater Manchester
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencyResponse.map((area, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-slate-900">{area.area}</CardTitle>
                      <Badge className="bg-red-500 text-white">{area.responseTime}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {area.availability}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {area.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Equipment & Technology Section - NEW */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Professional Equipment</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                State-of-the-art tools and technology for the highest quality service
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-green-200">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <CardTitle className="text-xl mb-4 text-slate-900">{item.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Guarantees Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Guarantees</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We stand behind our work with comprehensive guarantees and warranties
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl">{guarantee.icon}</span>
                    </div>
                    <CardTitle className="text-xl mb-4 text-slate-900">{guarantee.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {guarantee.description}
                    </CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Common questions about our locksmith services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="hover:shadow-lg transition-shadow bg-white border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Comparison Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-green-500 text-white px-4 py-2 text-lg">Cost Comparison</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Why Choose Our Prices?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Compare our competitive rates with traditional locksmith services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {serviceComparison.map((comparison, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-xl text-slate-900">{comparison.service}</CardTitle>
                      <Badge className="bg-green-500 text-white">{comparison.savings} Savings</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-slate-600">Traditional</p>
                        <p className="text-lg font-bold text-red-600">{comparison.traditional}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-slate-600">Our Price</p>
                        <p className="text-lg font-bold text-green-600">{comparison.ourPrice}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {comparison.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Customer Success Stories Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Customer Success Stories</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real stories from our satisfied customers across Manchester
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customerStories.map((story, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-slate-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <CardTitle className="text-lg text-slate-900">{story.name}</CardTitle>
                        <p className="text-sm text-slate-600">{story.location}</p>
                      </div>
                      <div className="flex text-orange-500">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="font-medium">Situation:</span>
                        <span className="ml-2 text-slate-600">{story.situation}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Wrench className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="font-medium">Service:</span>
                        <span className="ml-2 text-slate-600">{story.service}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="font-medium">Outcome:</span>
                        <span className="ml-2 text-slate-600">{story.outcome}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-slate-700 italic border-l-4 border-orange-500 pl-4">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Technology & Innovation Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500 text-white px-4 py-2 text-lg">Advanced Technology</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Cutting-Edge Equipment</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                State-of-the-art technology for the highest quality locksmith services
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technology.map((tech, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-blue-200">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl">{tech.icon}</span>
                    </div>
                    <CardTitle className="text-xl mb-4 text-slate-900">{tech.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {tech.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {tech.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Safety & Security Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Your Safety & Security</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We prioritize your safety and security with comprehensive measures
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyMeasures.map((measure, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl">{measure.icon}</span>
                    </div>
                    <CardTitle className="text-xl mb-4 text-slate-900">{measure.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {measure.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {measure.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Coverage Map Section - NEW */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-500 text-white px-4 py-2 text-lg">Coverage Areas</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Service Coverage Map</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive coverage across Greater Manchester with fast response times
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coverageAreas.map((area, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-slate-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-slate-900">{area.area}</CardTitle>
                      <Badge className="bg-slate-500 text-white">{area.coverage}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {area.responseTime}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Population:</span>
                        <span className="font-medium">{area.population}</span>
                      </div>
                      <div className="space-y-2">
                        {area.services.map((service, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Booking & Appointment Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-500 text-white px-4 py-2 text-lg">Easy Booking</Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Multiple Booking Options</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the booking method that works best for you
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bookingOptions.map((option, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-orange-200">
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-3xl">{option.icon}</span>
                    </div>
                    <CardTitle className="text-xl mb-4 text-slate-900">{option.method}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {option.description}
                    </CardDescription>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        <span className="font-medium">{option.responseTime}</span>
                      </div>
                      <div className="text-slate-600">
                        Best for: {option.bestFor}
                      </div>
                    </div>
                    <Button className="w-full mt-6" variant="outline">
                      Book Now
                    </Button>
                  </CardContent>
                </AnimatedCard>
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
