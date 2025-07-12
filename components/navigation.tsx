"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white text-black py-3 shadow-2xl font-sans"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/uk-lock-logo.png"
                alt="KEY 2 BHP - Trusted Car Locksmiths"
                width={48}
                height={48}
                className="rounded-full border-2 border-orange-500 shadow-md"
            />
            <div>
                <h1 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>KEY 2 BHP</h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide">Trusted Car Locksmiths</p>
            </div>
          </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className="text-black hover:text-orange-500 transition-colors font-semibold text-lg px-2 rounded-md"
              >
                {item.label}
              </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              href="tel:07309903243"
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white border border-orange-100 shadow-sm hover:bg-orange-50 transition font-semibold text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="h-4 w-4 text-orange-500" />
              <span className="text-black">07309 903243</span>
            </motion.a>
            <motion.a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-md shadow-md transition-colors text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white rounded-b-xl shadow-xl"
            >
            <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                <Link
                  href={item.href}
                      className="text-black hover:text-orange-500 transition-colors font-semibold text-lg px-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                  </motion.div>
                ))}
                <motion.a 
                  className="flex items-center space-x-2 pt-4 border-t border-gray-200 px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="tel:07309903243"
                >
                <Phone className="h-4 w-4 text-orange-500" />
                  <span className="font-semibold text-black">07309 903243</span>
                </motion.a>
                <motion.a
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-md shadow-md transition-colors text-base mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Quote
                </motion.a>
              </div>
            </motion.nav>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
