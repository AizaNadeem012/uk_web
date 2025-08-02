export const metadata = {
  title: "About KEY 2 BHP | Female Auto Locksmith Manchester | Trusted & Reliable",
  description: "Learn about KEY 2 BHP, Manchester's trusted female auto locksmiths. Discover our story, values, certifications, and why customers choose us for fast, reliable, and affordable car locksmith services.",
  openGraph: {
    title: "About KEY 2 BHP | Female Auto Locksmith Manchester",
    description: "Meet the team behind KEY 2 BHP. Trusted, certified, and available 24/7 for all your car locksmith needs in Manchester.",
    url: "https://key2bhp.co.uk/about",
    siteName: "KEY 2 BHP",
    locale: "en_GB",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KEY 2 BHP | Female Auto Locksmith Manchester",
    description: "Learn about our story, values, and why Manchester trusts KEY 2 BHP for car locksmith services.",
  },
  alternates: {
    canonical: "https://key2bhp.co.uk/about",
  },
}

import { Shield, Clock, Users, Award, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Image from "next/image"
import { 
  HeroAnimation, 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedList, 
  AnimatedListItem,
  FloatingIcon,
  AnimatedCounter,
  SlideInLeft,
  SlideInRight
} from "@/components/animated-components"

export default function AboutPage() {
  const stats = [
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "Fast", label: "Response Time" },
    { number: "Affordable", label: "Pricing" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "We build lasting relationships with our customers through honest, reliable service and transparent pricing.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description:
        "Emergency locksmith situations require immediate attention. We guarantee fast response times across Manchester.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description:
        "Our certified locksmiths are highly trained, insured, and committed to providing exceptional service.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and a commitment to quality craftsmanship.",
    },
  ]

  const certifications = [
    "Fully Insured & Bonded",
    "DBS Checked Technicians",
    "Auto Locksmith Association Member",
    "5-Star Customer Rating",
    "Emergency Service Provider",
    "Mobile Service Certified",
  ]

  // New data for additional sections
  const companyHistory = [
    {
      year: "2020",
      title: "Company Founded",
      description: "KEY 2 BHP was established with a vision to provide reliable, female-led locksmith services in Manchester."
    },
    {
      year: "2021",
      title: "Service Expansion",
      description: "Expanded services to cover all of Greater Manchester with mobile locksmith units."
    },
    {
      year: "2022",
      title: "Technology Upgrade",
      description: "Invested in advanced key programming equipment and diagnostic tools for modern vehicles."
    },
    {
      year: "2023",
      title: "Customer Recognition",
      description: "Achieved 5-star rating across all platforms and became Manchester's most trusted locksmith."
    },
    {
      year: "2024",
      title: "Future Growth",
      description: "Planning to launch mobile app and expand services to surrounding areas."
    }
  ]

  const serviceAreas = [
    {
      area: "Manchester City Centre",
      responseTime: "15-20 minutes",
      services: ["Emergency lockouts", "Key replacement", "Ignition repair"]
    },
    {
      area: "Salford",
      responseTime: "20-25 minutes",
      services: ["Car key programming", "Transponder keys", "Mobile service"]
    },
    {
      area: "Stockport",
      responseTime: "25-30 minutes",
      services: ["Emergency assistance", "Key cutting", "Diagnostic services"]
    },
    {
      area: "Oldham",
      responseTime: "25-30 minutes",
      services: ["24/7 service", "Professional locksmith", "Affordable rates"]
    },
    {
      area: "Rochdale",
      responseTime: "30-35 minutes",
      services: ["Mobile locksmith", "Car security", "Key programming"]
    },
    {
      area: "Bury",
      responseTime: "30-35 minutes",
      services: ["Emergency response", "Professional service", "Quality guarantee"]
    }
  ]

  const equipment = [
    {
      name: "Advanced Key Programming Equipment",
      description: "State-of-the-art equipment for programming transponder keys, smart keys, and remote fobs",
      icon: "🔧"
    },
    {
      name: "Computerized Key Cutting Machines",
      description: "Precision key cutting for all vehicle makes and models with computerized accuracy",
      icon: "✂️"
    },
    {
      name: "Diagnostic Tools",
      description: "Professional diagnostic equipment for ignition and security system troubleshooting",
      icon: "🔍"
    },
    {
      name: "Mobile Workshop",
      description: "Fully equipped mobile vans with all necessary tools and equipment for on-site service",
      icon: "🚐"
    },
    {
      name: "Security Tools",
      description: "Specialized tools for safe lockout assistance without damage to your vehicle",
      icon: "🛡️"
    },
    {
      name: "Communication Systems",
      description: "Real-time communication and tracking systems for efficient service delivery",
      icon: "📱"
    }
  ]

  const testimonials = [
    {
      name: "Emma Thompson",
      location: "Chorlton, Manchester",
      rating: 5,
      text: "Amazing service! I was locked out of my car late at night and they arrived within 20 minutes. Professional, friendly, and got me back in my car without any damage.",
      service: "Emergency Lockout"
    },
    {
      name: "David Wilson",
      location: "Salford",
      rating: 5,
      text: "Lost my car keys and needed a replacement. They came to my location, cut a new key, and programmed it on the spot. Excellent work and reasonable pricing.",
      service: "Key Replacement"
    },
    {
      name: "Sarah Johnson",
      location: "Didsbury",
      rating: 5,
      text: "My ignition was having issues and wouldn't start. They diagnosed the problem and fixed it right there. Very knowledgeable and professional service.",
      service: "Ignition Repair"
    },
    {
      name: "Michael Patel",
      location: "Stockport",
      rating: 5,
      text: "Broken key stuck in my ignition. They extracted it safely without any damage to my car. Fast, efficient, and reasonably priced. Great service!",
      service: "Key Extraction"
    }
  ]

  const awards = [
    {
      title: "Best Auto Locksmith 2024",
      organization: "Manchester Business Awards",
      year: "2024",
      description: "Recognized for excellence in automotive locksmith services"
    },
    {
      title: "Customer Service Excellence",
      organization: "Greater Manchester Chamber",
      year: "2023",
      description: "Awarded for outstanding customer service and satisfaction"
    },
    {
      title: "Emergency Service Provider",
      organization: "Auto Locksmith Association",
      year: "2023",
      description: "Certified emergency service provider with 24/7 availability"
    },
    {
      title: "Female-Owned Business Award",
      organization: "Women in Business Network",
      year: "2022",
      description: "Recognized for excellence in female entrepreneurship"
    }
  ]

  const safetyMeasures = [
    {
      title: "DBS Checked Technicians",
      description: "All our technicians undergo thorough background checks for your safety and peace of mind",
      icon: "🛡️"
    },
    {
      title: "Fully Insured Service",
      description: "Comprehensive insurance coverage protects you and your vehicle during our service",
      icon: "📋"
    },
    {
      title: "No Damage Guarantee",
      description: "We guarantee no damage to your vehicle during lockout or key replacement services",
      icon: "✅"
    },
    {
      title: "Licensed & Certified",
      description: "All technicians are licensed, certified, and trained in the latest automotive security systems",
      icon: "🎓"
    },
    {
      title: "Secure Payment Methods",
      description: "Multiple secure payment options including card, cash, and digital payments",
      icon: "💳"
    },
    {
      title: "Privacy Protection",
      description: "Your personal information and vehicle details are kept confidential and secure",
      icon: "🔒"
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
              <Badge className="mb-6 bg-orange-500 text-white px-4 py-2 text-lg">About KEY 2 BHP</Badge>
              <AnimatedText>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  ✨ Welcome to <span className="text-orange-500">KEY 2 BHP</span> Female Auto Locksmith Services!
                </h1>
              </AnimatedText>
              <AnimatedText>
                <p className="text-xl mb-8 text-slate-300 leading-relaxed">
                  We specialize in fast, affordable, and reliable auto locksmith solutions just for you. Whether you're locked out or need a replacement car key in Manchester, we're just one call away — available 24/7!
                </p>
              </AnimatedText>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedList>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedListItem key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <AnimatedCounter 
                      value={stat.number} 
                      className="text-4xl md:text-5xl font-bold text-orange-500 mb-2" 
                    />
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                  </div>
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-slate-900">🚗 Expert Car Locksmith Services in Manchester</h2>
                <p className="text-xl text-slate-600">
                  Locked out of your car in Manchester? Our trusted car locksmiths are just a call away to assist with emergency car unlocking, key replacement, transponder key programming, and more. Serving Manchester with fast, reliable services 24/7.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">🔑 Reliable Auto Locksmith Services in Manchester</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Whether you drive a sedan, SUV, or commercial vehicle, our professional auto locksmith services ensure quick and damage-free unlocking, key repairs, and reprogramming. Available across Manchester, we're here to help you whenever you need us!
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    At <strong>Mrs Key 2 BHP Auto Locksmith</strong>, we provide fast, reliable, and affordable auto locksmith services throughout Manchester. Whether you're locked out of your car or need a car key replacement, our team is here to help. Available 24/7, we're just a call away for your locksmith needs.
                  </p>
                  <AnimatedList>
                    <div className="flex flex-wrap gap-2">
                      {certifications.map((cert, index) => (
                        <AnimatedListItem key={index} delay={index * 0.1}>
                          <Badge variant="secondary" className="text-sm">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {cert}
                          </Badge>
                        </AnimatedListItem>
                      ))}
                    </div>
                  </AnimatedList>
                </div>
              </SlideInLeft>
              <SlideInRight>
                <div className="relative">
                  <AnimatedCard>
                    <div className="bg-slate-900 rounded-lg p-8 text-white">
                      <div className="flex items-center mb-4">
                        <Image
                          src="/images/uk-lock-logo.png"
                          alt="KEY 2 BHP Logo"
                          width={60}
                          height={60}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h4 className="text-xl font-bold">KEY 2 BHP</h4>
                          <p className="text-orange-500">Female Auto Locksmith</p>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        "We believe that being locked out of your car shouldn't ruin your day. That's why we're committed to providing fast, professional, and affordable locksmith services that get you back on the road quickly."
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="flex text-orange-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-slate-300">5.0 Customer Rating</span>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These core values guide everything we do and ensure we deliver exceptional service to every customer
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Journey</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A brief overview of how KEY 2 BHP has evolved over the years
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyHistory.map((history, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{history.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{history.description}</CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Service Areas</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We provide fast, reliable, and affordable locksmith services across Greater Manchester.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((area, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{area.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      Response Time: {area.responseTime}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {area.services.map((service, sIndex) => (
                        <Badge key={sIndex} variant="secondary" className="text-sm">
                          {service}
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

      {/* Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Equipment</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We use state-of-the-art tools and equipment to ensure the highest quality service.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What Our Customers Say</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Hear from our satisfied customers about their experience with KEY 2 BHP.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-white" />
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">Rating: {testimonial.rating}/5</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      "{testimonial.text}"
                    </CardDescription>
                    <p className="text-slate-600 mt-2">
                      {testimonial.name}, {testimonial.location}
                    </p>
                    <p className="text-slate-600 text-sm mt-1">Service: {testimonial.service}</p>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Achievements</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Recognitions and awards that highlight our commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{award.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {award.description}
                    </CardDescription>
                    <p className="text-slate-600 text-sm mt-1">Year: {award.year}</p>
                    <p className="text-slate-600 text-sm mt-1">Organization: {award.organization}</p>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Safety Measures</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Your safety and peace of mind are our top priorities.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyMeasures.map((measure, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <FloatingIcon>
                      <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        {measure.icon}
                      </div>
                    </FloatingIcon>
                    <CardTitle className="text-xl text-slate-900">{measure.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {measure.description}
                    </CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">👩‍💼 Connect with Vikki Heaton</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our certified automotive locksmiths bring years of experience and expertise to every job
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedCard>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <SlideInLeft>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Professional Female Locksmith Service</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          We're proud to offer professional female locksmith services in Manchester. Our team is fully trained, certified, and experienced in all aspects of automotive locksmithing. We understand that some customers prefer female technicians, and we're here to provide that option with the same high-quality service.
                        </p>
                        <AnimatedList>
                          <div className="space-y-3">
                            <AnimatedListItem>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-slate-600">Fully certified and insured</span>
                              </div>
                            </AnimatedListItem>
                            <AnimatedListItem>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-slate-600">Professional and reliable service</span>
                              </div>
                            </AnimatedListItem>
                            <AnimatedListItem>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-slate-600">24/7 emergency availability</span>
                              </div>
                            </AnimatedListItem>
                            <AnimatedListItem>
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-slate-600">Competitive pricing</span>
                              </div>
                            </AnimatedListItem>
                          </div>
                        </AnimatedList>
                      </div>
                    </SlideInLeft>
                    <SlideInRight>
                      <div className="text-center">
                        <AnimatedCard>
                          <div className="bg-slate-900 rounded-lg p-8 text-white">
                            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
                            <div className="space-y-4">
                              <div className="flex items-center justify-center space-x-2">
                                <Phone className="h-5 w-5 text-orange-500" />
                                <span>07309 903243</span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                <Mail className="h-5 w-5 text-orange-500" />
                                <span>info@key2bhp.co.uk</span>
                              </div>
                              <div className="flex items-center justify-center space-x-2">
                                <MapPin className="h-5 w-5 text-orange-500" />
                                <span>Greater Manchester, UK</span>
                              </div>
                            </div>
                          </div>
                        </AnimatedCard>
                      </div>
                    </SlideInRight>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">📞 Need Help? We're Available!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait! Our mobile locksmith team is ready to help you 24/7 across Manchester. Fast response times guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:07309903243"
                className="bg-white text-orange-500 hover:bg-slate-100 text-lg px-8 py-4 rounded-lg font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 07309 903243
              </a>
              <a
                href="tel:07936755530"
                className="bg-white text-orange-500 hover:bg-slate-100 text-lg px-8 py-4 rounded-lg font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 07936 755530
              </a>
              <a
                href="mailto:info@key2bhp.co.uk"
                className="border-white text-white hover:bg-white hover:text-orange-500 text-lg px-8 py-4 rounded-lg font-semibold inline-flex items-center border-2"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email: info@key2bhp.co.uk
              </a>
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
