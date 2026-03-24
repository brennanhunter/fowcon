import type { Metadata } from 'next';
import AdditionsHero from '@/app/components/construction/additions/AdditionsHero';
import AdditionsServices from '@/app/components/construction/additions/AdditionsServices';
import AdditionsWhyUs from '@/app/components/construction/additions/AdditionsWhyUs';
import AdditionsFAQ from '@/app/components/construction/additions/AdditionsFAQ';
import AdditionsCTA from '@/app/components/construction/additions/AdditionsCTA';

export const metadata: Metadata = {
  title: 'Home Additions Tampa Bay | Room Additions & Second Stories',
  description:
    'Professional home additions in Tampa Bay by Fowcon Construction. Room additions, second stories, sunrooms, and more. Licensed general contractor. Free consultation — (833) 336-9266.',
  openGraph: {
    title: 'Home Additions Tampa Bay | Fowcon Construction',
    description:
      'Professional home additions in Tampa Bay. Room additions, second stories, sunrooms, and more by a licensed general contractor.',
    url: 'https://fowconinc.com/construction/additions',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/additions',
  },
};

export default function AdditionsPage() {
  const additionsServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Additions',
    description:
      'Professional home additions in Tampa Bay including room additions, second stories, sunrooms, garage conversions, and in-law suites.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://fowconinc.com/#organization',
      name: 'Fowcon Construction',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Tampa Bay, Florida',
    },
    serviceType: 'Home Additions',
    url: 'https://fowconinc.com/construction/additions',
  };

  const additionsFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a home addition take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most home additions take 3–6 months from permitting to final walkthrough. A single-room addition on a slab can be closer to 3 months, while a second story or multi-room addition with complex structural work may take 5–6 months.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a permit for a home addition?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All structural additions in Florida require building permits, engineering plans, and multiple inspections. As a licensed general contractor (CGC 1531101), we handle the entire permitting process.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the addition match my existing home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our team carefully matches rooflines, siding, paint, trim, and finishes so the addition blends seamlessly with your existing home — inside and out.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I live in my home during construction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In most cases, yes. We stage the work to minimize disruption and maintain safe access to your living areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a home addition cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costs vary significantly based on size, complexity, and finishes. During your free consultation, we provide itemized estimates with multiple options at different price points.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer financing for additions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer flexible financing options to help make your project achievable.',
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(additionsServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(additionsFaqJsonLd) }}
      />
      <AdditionsHero />
      <AdditionsServices />
      <AdditionsWhyUs />
      <AdditionsFAQ />
      <AdditionsCTA />
    </main>
  );
}
