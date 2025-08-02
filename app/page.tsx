"use client"

import { Phone, Clock, MapPin, Star, Shield, Key, Car, Wrench, Mail, Check, Award, Users, Truck, Zap, AlertTriangle, Settings, Smartphone } from "lucide-react"
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

  // New data for additional sections
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Didsbury, Manchester",
      rating: 5,
      text: "Amazing service! I was locked out of my car at 2 AM and they arrived within 25 minutes. Professional, friendly, and got me back in my car without any damage. Highly recommend!",
      service: "Emergency Lockout"
    },
    {
      name: "Michael Patel",
      location: "Stockport",
      rating: 5,
      text: "Lost my car keys and needed a replacement. They came to my location, cut a new key, and programmed it on the spot. Excellent work and reasonable pricing.",
      service: "Key Replacement"
    },
    {
      name: "Emma Thompson",
      location: "Chorlton",
      rating: 5,
      text: "My ignition was having issues and wouldn't start. They diagnosed the problem and fixed it right there. Very knowledgeable and professional service.",
      service: "Ignition Repair"
    },
    {
      name: "David Wilson",
      location: "Salford",
      rating: 5,
      text: "Broken key stuck in my ignition. They extracted it safely without any damage to my car. Fast, efficient, and reasonably priced. Great service!",
      service: "Key Extraction"
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

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available round the clock for emergency situations. No matter when you need us, we're here to help."
    },
    {
      icon: Truck,
      title: "Mobile Service",
      description: "We come to you! Our fully equipped mobile vans can handle any automotive locksmith job at your location."
    },
    {
      icon: Shield,
      title: "Fully Insured & Licensed",
      description: "Professional, licensed, and fully insured locksmiths. Your security and satisfaction are our top priorities."
    },
    {
      icon: Award,
      title: "5-Star Rated",
      description: "Consistently rated 5 stars by our customers. Quality service and customer satisfaction guaranteed."
    },
    {
      icon: Users,
      title: "Female-Owned Business",
      description: "Trusted female locksmiths providing professional, reliable service with a personal touch."
    },
    {
      icon: Zap,
      title: "Fast Response Times",
      description: "Average response time of 20-30 minutes across Manchester. Quick, efficient service when you need it most."
    }
  ]

  // New data for additional sections
  const emergencyServices = [
    {
      title: "Car Lockout Emergency",
      price: "From £35",
      time: "15-20 minutes",
      description: "Locked out of your car? We'll get you back in safely and quickly.",
      features: ["No damage guarantee", "All vehicle types", "24/7 service"]
    },
    {
      title: "Lost Car Key Replacement",
      price: "From £45",
      time: "30-45 minutes",
      description: "Lost your car keys? We'll cut and program a new key on the spot.",
      features: ["On-site cutting", "Programming included", "Warranty provided"]
    },
    {
      title: "Broken Key Extraction",
      price: "From £30",
      time: "20-30 minutes",
      description: "Key stuck or broken? We'll extract it safely without damage.",
      features: ["Safe extraction", "No damage", "Immediate service"]
    },
    {
      title: "Ignition Repair",
      price: "From £60",
      time: "45-60 minutes",
      description: "Ignition problems? We'll diagnose and fix the issue professionally.",
      features: ["Expert diagnosis", "Quality parts", "Warranty included"]
    }
  ]

  const pricingPlans = [
    {
      name: "Basic Emergency",
      price: "£35",
      description: "Essential emergency services for common lockout situations",
      features: [
        "Car lockout service",
        "Basic key cutting",
        "20-30 min response",
        "Mobile service",
        "No damage guarantee"
      ],
      popular: false
    },
    {
      name: "Standard Service",
      price: "£65",
      description: "Comprehensive locksmith services for most situations",
      features: [
        "All emergency services",
        "Key programming",
        "Ignition repair",
        "Transponder keys",
        "Warranty included",
        "24/7 availability"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      price: "£95",
      description: "Complete automotive locksmith solution with extras",
      features: [
        "All standard services",
        "ECU programming",
        "Smart key programming",
        "Priority response",
        "Extended warranty",
        "Free consultation"
      ],
      popular: false
    }
  ]

  const latestNews = [
    {
      title: "New Smart Key Programming Service",
      date: "December 15, 2024",
      excerpt: "We've expanded our services to include the latest smart key programming for modern vehicles.",
      category: "Service Update",
      readTime: "3 min read"
    },
    {
      title: "Winter Car Security Tips",
      date: "December 10, 2024",
      excerpt: "Essential tips to keep your car secure during the winter months and prevent lockouts.",
      category: "Tips & Advice",
      readTime: "5 min read"
    },
    {
      title: "Manchester's Most Trusted Locksmith",
      date: "December 5, 2024",
      excerpt: "We're proud to announce we've been voted Manchester's most trusted auto locksmith service.",
      category: "Company News",
      readTime: "2 min read"
    }
  ]

  const contactInfo = {
    phone: {
      primary: "+44 7309 903243",
      secondary: "+44 7936 755530"
    },
    email: "info@uklock.co.uk",
    address: "Manchester, Greater Manchester, UK",
    hours: "24/7 Emergency Service",
    responseTime: "20-30 minutes average"
  }

  const appFeatures = [
    {
      icon: Phone,
      title: "One-Tap Calling",
      description: "Emergency contact with just one tap"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Track our technician's arrival in real-time"
    },
    {
      icon: Clock,
      title: "Service History",
      description: "Keep track of all your locksmith services"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and secure payment processing"
    }
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
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {service.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
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

      {/* Why Choose Us Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Choose UK Lock?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We're not just another locksmith service. We're your trusted partner for all automotive security needs.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Testimonials Section - MINIMALISTIC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real feedback from our satisfied customers across Manchester.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-gray-50 hover:bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 mr-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.service}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <div className="text-xs text-gray-400">
                          Verified Customer
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>

          {/* Simple Stats */}
          <AnimatedSection>
            <div className="text-center mt-16">
              <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Our Numbers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">5.0</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Service Available</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +44 7309 903243
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Areas Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Areas We Serve</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We provide comprehensive auto locksmith services across all of Greater Manchester and surrounding areas.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <AnimatedListItem key={index} delay={index * 0.05}>
                  <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-orange-50 transition-colors">
                    <MapPin className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                    <p className="font-medium text-slate-800">{area}</p>
                  </div>
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Car Brands Section - NEW */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Vehicle Brands We Support</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We work with all major vehicle brands and models. No matter what you drive, we can help!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {carBrands.map((brand, index) => (
                <AnimatedListItem key={index} delay={index * 0.05}>
                  <div className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow border">
                    <Car className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <p className="font-medium text-slate-800">{brand}</p>
                  </div>
                </AnimatedListItem>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Got questions? We've got answers. Here are the most common questions we receive.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="hover:shadow-lg transition-shadow bg-[#EA580C] text-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-white/90">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Service Process Section - ENHANCED */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-500 text-white px-4 py-2 text-lg">Simple & Fast</Badge>
              <h2 className="text-5xl font-bold mb-6 text-slate-900">How Our Service Works</h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                Experience the most efficient auto locksmith service in Manchester. Our streamlined process ensures you're back on the road in no time with professional, reliable service.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <AnimatedCard delay={0.1} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-orange-200">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Step 1</div>
                  <CardTitle className="text-2xl mb-4 text-slate-900">Call Us</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Contact us anytime, day or night. We'll get your details and location to dispatch our nearest technician immediately.
                  </CardDescription>
                  <div className="mt-4 text-sm text-purple-600 font-medium">
                    📞 24/7 Emergency Hotline
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-blue-200">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Truck className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Step 2</div>
                  <CardTitle className="text-2xl mb-4 text-slate-900">We Come to You</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Our fully equipped mobile van arrives at your location within 20-30 minutes, ready to solve your problem on-site.
                  </CardDescription>
                  <div className="mt-4 text-sm text-blue-600 font-medium">
                    ⚡ 20-30 Minute Response
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.3} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-green-200">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Wrench className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Step 3</div>
                  <CardTitle className="text-2xl mb-4 text-slate-900">Professional Service</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Our expert technicians diagnose and fix the issue using professional tools and techniques, ensuring quality work.
                  </CardDescription>
                  <div className="mt-4 text-sm text-green-600 font-medium">
                    🛠️ Expert Technicians
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.4} className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-orange-200">
                <CardContent className="pt-8 pb-8">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Step 4</div>
                  <CardTitle className="text-2xl mb-4 text-slate-900">You're All Set</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Test your vehicle, pay with our transparent pricing, and get back on the road with our warranty guarantee.
                  </CardDescription>
                  <div className="mt-4 text-sm text-orange-600 font-medium">
                    ✅ Warranty Included
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </AnimatedList>

          <AnimatedSection>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-10 rounded-2xl shadow-2xl max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Why Choose Our Process?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">Fast Response Time</h4>
                    <p className="text-slate-300 text-sm">Average 20-30 minutes across Manchester</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">Professional & Insured</h4>
                    <p className="text-slate-300 text-sm">Licensed, insured, and fully qualified</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">Satisfaction Guaranteed</h4>
                    <p className="text-slate-300 text-sm">5-star rated service with warranty</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now for Emergency Service
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Services Highlight Section - NEW */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-red-500 text-white px-4 py-2 text-lg">Emergency Services</Badge>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">24/7 Emergency Auto Locksmith Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                When you need us most, we're here. Fast, reliable emergency services across Manchester.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyServices.map((service, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                      <Badge className="bg-red-500 text-white">{service.price}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.time}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
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

      {/* Pricing Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Transparent Pricing Plans</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose the service plan that fits your needs. All plans include our quality guarantee.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className={`relative ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-orange-500 text-white px-4 py-2">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-slate-900">{plan.price}</div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      Choose Plan
                    </Button>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Latest News Section - NEW */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Latest News & Updates</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Stay updated with our latest services, tips, and company news.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestNews.map((article, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-slate-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-500">{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                    <Button variant="link" className="p-0 mt-4 text-orange-600">
                      Read More →
                    </Button>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      {/* Contact Information Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Get in Touch</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Ready to get help? Contact us anytime for emergency locksmith services.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedList>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <AnimatedCard delay={0.1} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg mb-2">Primary Phone</CardTitle>
                  <CardDescription className="text-base font-semibold">{contactInfo.phone.primary}</CardDescription>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg mb-2">Secondary Phone</CardTitle>
                  <CardDescription className="text-base font-semibold">{contactInfo.phone.secondary}</CardDescription>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.3} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg mb-2">Email</CardTitle>
                  <CardDescription className="text-base font-semibold">{contactInfo.email}</CardDescription>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={0.4} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg mb-2">Service Hours</CardTitle>
                  <CardDescription className="text-base font-semibold">{contactInfo.hours}</CardDescription>
                </CardContent>
              </AnimatedCard>
            </div>
          </AnimatedList>

          <AnimatedSection>
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready for Emergency Service?</h3>
                <p className="text-lg mb-6">Average response time: {contactInfo.responseTime}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: {contactInfo.phone.primary}
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile App Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-500 text-white px-4 py-2 text-lg">Coming Soon</Badge>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">UK Lock Mobile App</h2>
                <p className="text-xl text-slate-600 mb-8">
                  Get instant access to our locksmith services with our upcoming mobile app. 
                  Track technicians, manage appointments, and get emergency help with just a tap.
                </p>
                
                <AnimatedList>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {appFeatures.map((feature, index) => (
                      <AnimatedListItem key={index} delay={index * 0.1}>
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <feature.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                            <p className="text-sm text-slate-600">{feature.description}</p>
                          </div>
                        </div>
                      </AnimatedListItem>
                    ))}
                  </div>
                </AnimatedList>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Pre-order App
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Learn More
                  </Button>
                </div>
              </div>

              <AnimatedCard delay={0.2} className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 mb-6">
                    <Smartphone className="h-24 w-24 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">UK Lock App</h3>
                    <p className="text-blue-100">Emergency locksmith services at your fingertips</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Emergency Response</span>
                      <Badge className="bg-green-500 text-white">20 min</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Live Tracking</span>
                      <Badge className="bg-blue-500 text-white">Real-time</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-700">Secure Payments</span>
                      <Badge className="bg-purple-500 text-white">Encrypted</Badge>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action Section - ENHANCED */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Need Emergency Auto Locksmith Services?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait! Call us now for fast, reliable, and professional auto locksmith services across Manchester. 
              Available 24/7 for all your automotive security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 font-bold">
                <Phone className="mr-2 h-6 w-6" />
                Emergency: +44 7309 903243
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
                <Phone className="mr-2 h-6 w-6" />
                Emergency: +44 7936 755530
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>All Manchester Areas</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Fully Insured</span>
              </div>
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
