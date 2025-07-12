"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

// Fade in animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Scale animation variants
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

// Stagger animation for lists
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
}

export const hoverLift = {
  whileHover: { 
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  transition: { duration: 0.2 }
}

// Animated components
export const AnimatedSection = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const AnimatedCard = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={scaleIn}
    whileHover="whileHover"
    variants={hoverLift}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const AnimatedButton = ({ children, className = "", ...props }: { children: ReactNode, className?: string, [key: string]: any }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
)

export const AnimatedText = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const AnimatedList = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
)

export const AnimatedListItem = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Hero animation
export const HeroAnimation = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.2
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Floating animation for icons
export const FloatingIcon = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Pulse animation for emergency elements
export const PulseAnimation = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <motion.div
    animate={{ 
      scale: [1, 1.05, 1],
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
)

// Slide in from sides
export const SlideInLeft = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideInRight = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Counter animation
export const AnimatedCounter = ({ value, className = "" }: { value: number | string, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {value}
  </motion.div>
) 