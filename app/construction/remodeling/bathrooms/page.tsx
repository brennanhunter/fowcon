import type { Metadata } from 'next';
import BathroomHero from '@/app/components/bathroom/BathroomHero';
import BathroomServices from '@/app/components/bathroom/BathroomServices';
import BathroomWhyUs from '@/app/components/bathroom/BathroomWhyUs';
import BathroomGallery from '@/app/components/bathroom/BathroomGallery';
import BathroomFAQ from '@/app/components/bathroom/BathroomFAQ';
import BathroomCTA from '@/app/components/bathroom/BathroomCTA';

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Tampa Bay | Bathroom Remodelers Near Me',
  description:
    'Expert bathroom remodeling in Tampa, St. Petersburg & Clearwater. Custom showers, vanities, tile, tub-to-shower conversions. Licensed contractor. FREE consultation — (833) 336-9266.',
  openGraph: {
    title: 'Bathroom Remodeling Tampa Bay | Fowcon Construction',
    description:
      'Professional bathroom remodeling in Tampa Bay. Custom showers, vanities, tile work, and full bathroom renovations by a licensed general contractor.',
    url: 'https://fowconinc.com/construction/remodeling/bathrooms',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/remodeling/bathrooms',
  },
};

export default function BathroomsPage() {
  const bathroomServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Bathroom Remodeling',
    description:
      'Professional bathroom remodeling in Tampa Bay including custom showers, vanities, tile work, tub-to-shower conversions, and full renovations.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://fowconinc.com/#organization',
      name: 'Fowcon Construction',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Tampa Bay, Florida',
    },
    serviceType: 'Bathroom Remodeling',
    url: 'https://fowconinc.com/construction/remodeling/bathrooms',
  };

  const bathroomFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a typical bathroom remodel take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most bathroom remodels take between 2 and 4 weeks depending on scope. A cosmetic refresh can be completed in about 2 weeks. A full gut renovation with layout changes typically takes 3 to 4 weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need permits for a bathroom remodel in Florida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes \u2014 any work involving plumbing, electrical, or structural changes requires permits in most Florida municipalities. As a licensed general contractor, Fowcon handles all permitting and inspections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I still use my home during the remodel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We take steps to contain dust and minimize disruption. If you have a second bathroom, you can continue your daily routine with minimal impact.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a bathroom remodel cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A standard guest bathroom remodel typically starts around $12,000\u2013$18,000, while a full master bath renovation can range from $20,000\u2013$40,000 or more. We provide a detailed, no-obligation estimate after your free consultation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer financing for bathroom remodels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We work with lending partners to offer flexible financing options so you can get the bathroom you want without putting everything on hold.',
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bathroomServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bathroomFaqJsonLd),
        }}
      />
      <BathroomHero />
      <BathroomServices />
      <BathroomWhyUs />
      <BathroomGallery />
      <BathroomFAQ />
      <BathroomCTA />
    </div>
  );
}
