import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fowconinc.com"),
  title: {
    default: "Fowcon Construction | Kitchen & Bathroom Remodeling Tampa Bay",
    template: "%s | Fowcon Construction",
  },
  description:
    "Tampa Bay's trusted remodeling contractor. Kitchen remodeling, bathroom renovations, home additions, ADUs, and emergency restoration. Licensed & insured. Free consultations — call (833) 336-9266.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fowconinc.com",
    siteName: "Fowcon Construction",
    title: "Fowcon Construction | Kitchen & Bathroom Remodeling Tampa Bay",
    description:
      "Tampa Bay's trusted remodeling contractor. Kitchen remodeling, bathroom renovations, home additions, ADUs, and emergency restoration. Licensed & insured.",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Fowcon Construction — Kitchen & Bathroom Remodeling Tampa Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fowcon Construction | Kitchen & Bathroom Remodeling Tampa Bay",
    description:
      "Tampa Bay's trusted remodeling contractor. Kitchen remodeling, bathroom renovations, home additions, and emergency restoration.",
    images: ["/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://fowconinc.com/#organization",
    name: "Fowcon Construction",
    alternateName: "Fowcon Inc",
    url: "https://fowconinc.com",
    telephone: "+1-833-336-9266",
    email: "claims@fowconinc.com",
    description:
      "Tampa Bay's trusted remodeling contractor specializing in kitchen and bathroom renovations, home additions, ADUs, and emergency restoration services.",
    foundingDate: "2017",
    areaServed: [
      {
        "@type": "City",
        name: "Tampa",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "City",
        name: "St. Petersburg",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "City",
        name: "Clearwater",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "City",
        name: "Westchase",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "City",
        name: "Brandon",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
      {
        "@type": "City",
        name: "Wesley Chapel",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Florida General Contractor License",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Florida Department of Business and Professional Regulation",
        },
        identifier: "CGC 1531101",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Mold Remediation License",
        identifier: "MRSR2151",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "IICRC Certified Firm",
      },
    ],
    knowsAbout: [
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Home Additions",
      "ADU Construction",
      "Flooring Installation",
      "Interior Remodeling",
      "Water Damage Restoration",
      "Fire Damage Restoration",
      "Mold Remediation",
      "Storm Damage Restoration",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "YOUR STREET ADDRESS",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "YOUR ZIP",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.9506,
      longitude: -82.4572,
    },
    image: "https://fowconinc.com/logos/logo.png",
    logo: "https://fowconinc.com/logos/logo.png",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kitchen Remodeling",
          description:
            "Custom kitchen remodeling including countertops, cabinets, islands, and full gut renovations.",
          areaServed: "Tampa Bay, FL",
          provider: { "@id": "https://fowconinc.com/#organization" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bathroom Remodeling",
          description:
            "Professional bathroom remodeling including custom showers, vanities, tile work, and tub-to-shower conversions.",
          areaServed: "Tampa Bay, FL",
          provider: { "@id": "https://fowconinc.com/#organization" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Remodeling",
          description:
            "Full-service home remodeling including kitchens, bathrooms, flooring, and whole-home interiors.",
          areaServed: "Tampa Bay, FL",
          provider: { "@id": "https://fowconinc.com/#organization" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Restoration",
          description:
            "24/7 emergency restoration for water damage, fire damage, mold, and storm damage.",
          areaServed: "Tampa Bay, FL",
          provider: { "@id": "https://fowconinc.com/#organization" },
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
