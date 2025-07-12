import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KEY 2 BHP - Auto Locksmith Services in Manchester | Car Key Replacement | Mobile Locksmith",
  description:
    "Professional auto locksmith services in Manchester. 24/7 car key replacement, mobile locksmith, car lockout service, ignition repair, broken key extraction, ECU programming. Trusted female car locksmiths serving Greater Manchester.",
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
    "female locksmith manchester",
    "key 2 bhp",
    "mrs key 2 bhp",
  ].join(", "),
  authors: [{ name: "KEY 2 BHP" }],
  creator: "KEY 2 BHP",
  publisher: "KEY 2 BHP",
  robots: "index, follow",
  openGraph: {
    title: "KEY 2 BHP - Auto Locksmith Services in Manchester",
    description:
      "Professional 24/7 car locksmith services in Manchester. Car key replacement, mobile locksmith, emergency lockout service, broken key extraction, ECU programming.",
    url: "https://key2bhp.co.uk",
    siteName: "KEY 2 BHP",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KEY 2 BHP - Auto Locksmith Services in Manchester",
    description:
      "Professional 24/7 car locksmith services in Manchester. Car key replacement, mobile locksmith, emergency lockout service, broken key extraction, ECU programming.",
  },
  alternates: {
    canonical: "https://key2bhp.co.uk",
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
          "@type": "Organization",
          "name": "KEY 2 BHP",
          "url": "https://key2bhp.co.uk",
          "logo": "https://key2bhp.co.uk/images/uk-lock-logo.png",
          "description": "24/7 Female Auto Locksmith Services in Manchester. Car key replacement, lockout help, ignition repair, and more.",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+44-7309-903243",
            "contactType": "customer service",
            "areaServed": "GB",
            "availableLanguage": ["English", "Urdu"]
          }],
          "sameAs": [
            "https://www.facebook.com/key2bhp",
            "https://www.instagram.com/key2bhp"
          ]
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "KEY 2 BHP",
          "url": "https://key2bhp.co.uk"
        }` }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
