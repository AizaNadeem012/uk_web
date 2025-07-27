import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UK Lock - Auto Locksmith Manchester | 24/7 Car Key Replacement | Mobile Locksmith",
  description:
    "UK Lock is a trusted 24/7 mobile auto locksmith service covering all of Manchester. We specialize in car unlocking, key replacement, remote fob repair, ignition repair, ECU programming, and more.",
  keywords: [
    "car locksmith near me",
    "car key replacement near me",
    "mobile locksmith near me",
    "car locksmith manchester",
    "auto locksmith manchester",
    "automotive locksmith",
    "car lockout service",
    "ignition repair manchester",
    "transponder key programming",
    "24 hour car locksmith",
    "emergency locksmith manchester",
    "lost car keys manchester",
    "car key cutting manchester",
    "vehicle locksmith manchester",
    "broken key extraction",
    "ECU programming",
    "uk lock manchester",
    "uk lock auto locksmith",
  ].join(", "),
  authors: [{ name: "UK Lock" }],
  creator: "UK Lock",
  publisher: "UK Lock",
  robots: "index, follow",
  openGraph: {
    title: "UK Lock - Auto Locksmith Manchester",
    description:
      "UK Lock is a trusted 24/7 mobile auto locksmith service covering all of Manchester. We specialize in car unlocking, key replacement, remote fob repair, ignition repair, ECU programming, and more.",
    url: "https://www.uklock.co.uk",
    siteName: "UK Lock",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Lock - Auto Locksmith Manchester",
    description:
      "UK Lock is a trusted 24/7 mobile auto locksmith service covering all of Manchester. We specialize in car unlocking, key replacement, remote fob repair, ignition repair, ECU programming, and more.",
  },
  alternates: {
    canonical: "https://www.uklock.co.uk",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/images/uk-lock-logo.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "name": "UK Lock - Auto Locksmith Manchester",
  "image": "https://www.uklock.co.uk/wp-content/uploads/2024/03/logo.webp",
  "@id": "https://www.uklock.co.uk",
  "url": "https://www.uklock.co.uk",
  "telephone": ["+44 7309 903243", "+44 7936 755530"],
  "description": "UK Lock is a trusted 24/7 mobile auto locksmith service covering all of Manchester. We specialize in car unlocking, key replacement, remote fob repair, ignition repair, ECU programming, and more.",
  "priceRange": "££",
  "areaServed": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.4994,
    "longitude": -2.2396
  },
  "hasMap": "https://www.google.com/maps?cid=13167963435301611227",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/uklockmanchester",
    "https://www.instagram.com/uklockmanchester",
    "https://www.google.com/maps/place/KEY+2+BHP+AUTO+LOCKSMITH/@53.5064506,-2.3200198,10z",
    "https://mrskey2bhpautolocksmith.co.uk"
  ],
  "knowsAbout": [
    {
      "@type": "LocalBusiness",
      "name": "Key 2 BHP Auto Locksmith",
      "url": "https://mrskey2bhpautolocksmith.co.uk",
      "image": "https://mrskey2bhpautolocksmith.co.uk/wp-content/uploads/2024/03/logo.webp",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 53.5064506,
        "longitude": -2.3200198
      },
      "sameAs": "https://www.google.com/maps/place/KEY+2+BHP+AUTO+LOCKSMITH/@53.5064506,-2.3200198,10z"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Emergency Car Unlocking", "description": "24/7 emergency unlocking of vehicles across all of Manchester." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Car Key Replacement", "description": "Replacement of lost, stolen, or damaged car keys on the spot." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Remote Key Fob Repair", "description": "Fix or reprogram faulty or non-working key fobs." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Car Key Duplication", "description": "Create spare car keys including chip and remote keys." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Broken Key Extraction", "description": "Extract broken keys from ignition or door locks without damage." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Ignition Repair & Replacement", "description": "On-site repair or replacement of car ignitions that fail to start." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Transponder Key Programming", "description": "Program or reprogram transponder keys to match your vehicle." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Lost Car Key Replacement", "description": "Full replacement and programming for completely lost car keys." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Spare Car Key Cutting", "description": "Cut and clone spare keys for backup or family use." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Car Lock Repair", "description": "Repair or replace faulty or damaged door and boot locks." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Smart Key Reprogramming", "description": "Reprogram smart keys and proximity keyless remotes." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "Keyless Entry Remote Setup", "description": "Set up and re-sync modern keyless entry systems." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "ECU Programming & Immobiliser Reset", "description": "Reset immobilisers and reprogram ECUs after key loss or theft." }
    },
    {
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": "24/7 Mobile Auto Locksmith", "description": "We come to you anytime, anywhere in Manchester. Fully equipped vans." }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "53"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amir Khan" },
      "datePublished": "2024-12-01",
      "reviewBody": "Quick, professional, and reliable car locksmith. Arrived in 20 minutes and solved my problem without damage!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide emergency car unlocking services in Manchester?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 mobile emergency unlocking services for all vehicles across Greater Manchester."
        }
      },
      {
        "@type": "Question",
        "name": "Can you cut and program spare keys on-site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we carry equipment in our van to cut and program spare keys wherever you are."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas of Manchester do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all areas including Salford, Didsbury, Stockport, Wythenshawe, Cheetham Hill, Oldham, and more."
        }
      }
    ]
  }
}` }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
