"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: "07309 903243",
      description: "24/7 emergency locksmith service",
      action: "tel:07309903243",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@key2bhp.co.uk",
      description: "Get a quote or ask questions",
      action: "mailto:info@key2bhp.co.uk",
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Greater Manchester, UK",
      description: "Mobile service across the region",
      action: null,
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "24/7 Emergency Service",
      description: "Always available when you need us",
      action: null,
    },
  ]

  const services = [
    "Car Key Replacement",
    "Mobile Locksmith Service",
    "Auto Lockout Service",
    "Ignition Repair",
    "Transponder Programming",
    "Broken Key Extraction",
    "ECU Programming & Diagnostics",
    "Emergency Service",
    "Other",
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
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HeroAnimation>
              <Badge className="mb-6 bg-orange-500 text-white px-4 py-2 text-lg">Contact KEY 2 BHP</Badge>
              <AnimatedText>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  💬 Connect With <span className="text-orange-500">Us</span> Today
            </h1>
              </AnimatedText>
              <AnimatedText>
            <p className="text-xl mb-8 text-slate-300 leading-relaxed">
                  Need emergency locksmith service or want to get a quote? We're here to help 24/7 across Manchester. Contact us now for fast, professional automotive locksmith services.
            </p>
              </AnimatedText>
              <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PulseAnimation>
                    <a
                      href="tel:07309903243"
                      className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4 rounded-lg font-semibold inline-flex items-center"
                    >
                <Phone className="mr-2 h-5 w-5" />
                      Emergency: 07309 903243
                    </a>
                  </PulseAnimation>
                  <PulseAnimation>
                    <a
                      href="tel:07936755530"
                      className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4 rounded-lg font-semibold inline-flex items-center"
                    >
                <Phone className="mr-2 h-5 w-5" />
                      Emergency: 07936 755530
                    </a>
                  </PulseAnimation>
                  <a
                    href="/contact"
                    className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 bg-transparent rounded-lg font-semibold inline-flex items-center border-2"
                  >
                    Get Quote
                  </a>
            </div>
              </AnimatedSection>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Contact Information</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your automotive locksmith needs
            </p>
          </div>
          </AnimatedSection>

          <AnimatedList>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                    <FloatingIcon>
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                    </FloatingIcon>
                  <CardTitle className="text-xl text-slate-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    {info.action ? (
                      <a href={info.action} className="text-lg font-semibold text-orange-500 hover:text-orange-600">
                        {info.details}
                      </a>
                    ) : (
                      <div className="text-lg font-semibold text-slate-900">{info.details}</div>
                    )}
                  </div>
                  <CardDescription className="text-slate-600">{info.description}</CardDescription>
                </CardContent>
                </AnimatedCard>
            ))}
          </div>
          </AnimatedList>
        </div>
      </section>

      {/* Contact Form & Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideInLeft>
            <div>
                <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Get a Free Quote</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you with a competitive quote for your locksmith needs.
              </p>
                </AnimatedSection>

                <AnimatedCard>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email Address *
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                            </div>
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                          Location *
                        </label>
                            <select
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                              <option value="">Select your area</option>
                              {serviceAreas.map((area, index) => (
                                <option key={index} value={area}>
                                  {area}
                                </option>
                              ))}
                            </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                              Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                              placeholder="Please describe your locksmith needs..."
                          className="w-full"
                        />
                      </div>

                          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                            <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
                </AnimatedCard>
            </div>
            </SlideInLeft>

            {/* Service Areas */}
            <SlideInRight>
              <div>
                <AnimatedSection>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">📍 Find Us on Google Maps</h2>
                  <p className="text-slate-600 mb-8">
                    We provide mobile locksmith services across Greater Manchester and surrounding areas. Don't see your area listed? We likely service it too!
                  </p>
                </AnimatedSection>

                <AnimatedCard>
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Areas We Cover</h3>
                        <AnimatedList>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceAreas.map((area, index) => (
                              <AnimatedListItem key={index} delay={index * 0.05}>
                                <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{area}</span>
                        </div>
                              </AnimatedListItem>
                      ))}
                    </div>
                        </AnimatedList>
                      </div>

                      <div className="border-t border-slate-200 pt-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">🗺️ View on Google Maps</h3>
                      <p className="text-slate-600 mb-4">
                          Click below to view our service area on Google Maps and get directions to our location.
                        </p>
                        <Button className="w-full bg-slate-900 hover:bg-slate-800">
                          <MapPin className="mr-2 h-4 w-4" />
                          View on Google Maps
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                </AnimatedCard>

                {/* Quick Contact */}
                <AnimatedCard className="mt-8">
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">📞 Need Immediate Help?</h3>
                      <p className="text-slate-600 mb-6">
                        For emergency locksmith services, call us directly for the fastest response.
                      </p>
                    <div className="space-y-4">
                        <a
                          href="https://wa.me/447309903243"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold"
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          WhatsApp: 07309 903243
                        </a>
                        <a
                          href="https://wa.me/447936755530"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold"
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          WhatsApp: 07936 755530
                        </a>
                        <a
                          href="mailto:info@key2bhp.co.uk"
                          className="flex items-center justify-center w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          <Mail className="mr-2 h-5 w-5" />
                          Email: info@key2bhp.co.uk
                        </a>
                    </div>
                  </CardContent>
                </Card>
                </AnimatedCard>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">💬 Connect With Us</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Follow us on social media for updates, tips, and special offers
            </p>
          </AnimatedSection>
          <AnimatedList>
            <div className="flex justify-center space-x-6">
              <AnimatedListItem>
                <a
                  href="https://www.facebook.com/share/19QA7MjbPE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
                >
                  📘 Visit Our Facebook Page
                </a>
              </AnimatedListItem>
              <AnimatedListItem>
                <a
                  href="#"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
                >
                  👩‍💼 Connect with Vikki Heaton
                </a>
              </AnimatedListItem>
            </div>
          </AnimatedList>
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
                      <Phone className="h-6 w-6 text-white" />
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
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <a href="/" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        🏠 Home
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        🔧 Our Services
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        📩 Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="tel:07309903243" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        🚨 Emergency Help
                      </a>
                    </li>
                    <li>
                      <a href="tel:07936755530" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        📞 Alternate Number
                      </a>
                    </li>
                  </ul>
                </div>
              </AnimatedListItem>
              <AnimatedListItem>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
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
                      <Mail className="h-4 w-4 text-orange-500" />
                      <span>info@key2bhp.co.uk</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <span>Greater Manchester, UK</span>
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
