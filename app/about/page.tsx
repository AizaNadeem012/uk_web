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
