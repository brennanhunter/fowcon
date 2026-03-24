import type { Metadata } from 'next';
import KitchenHero from '@/app/components/kitchen/KitchenHero';
import KitchenServices from '@/app/components/kitchen/KitchenServices';
import KitchenWhyUs from '@/app/components/kitchen/KitchenWhyUs';
import KitchenGallery from '@/app/components/kitchen/KitchenGallery';
import KitchenFAQ from '@/app/components/kitchen/KitchenFAQ';
import KitchenCTA from '@/app/components/kitchen/KitchenCTA';

export const metadata: Metadata = {
  title: 'Kitchen Remodeling Tampa Bay | Expert Kitchen Renovations',
  description:
    'Custom kitchen remodeling in Tampa Bay by Fowcon Construction. Countertops, cabinets, islands, and full gut renovations. Licensed general contractor with expert craftsmanship. Free consultation — (833) 336-9266.',
  openGraph: {
    title: 'Kitchen Remodeling Tampa Bay | Fowcon Construction',
    description:
      'Custom kitchen remodeling in Tampa Bay. Countertops, cabinets, islands, and full gut renovations by a licensed general contractor.',
    url: 'https://fowconinc.com/construction/remodeling/kitchens',
  },
  alternates: {
    canonical: 'https://fowconinc.com/construction/remodeling/kitchens',
  },
};

export default function Page() {
  const kitchenServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kitchen Remodeling',
    description:
      'Custom kitchen remodeling in Tampa Bay including countertops, cabinets, islands, and full gut renovations.',
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://fowconinc.com/#organization',
      name: 'Fowcon Construction',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Tampa Bay, Florida',
    },
    serviceType: 'Kitchen Remodeling',
    url: 'https://fowconinc.com/construction/remodeling/kitchens',
  };

  const kitchenFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does a kitchen remodel take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most kitchen remodels take 4\u20138 weeks depending on scope. A countertop and cabinet refresh can be done in 2\u20133 weeks, while a full gut renovation may take 8\u201312 weeks. We\u2019ll give you a clear timeline during your consultation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle permits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. As a licensed Florida general contractor, we handle all necessary permits for plumbing, electrical, and structural work. You don\u2019t need to worry about any of the paperwork.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I stay in my home during the remodel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In most cases, yes. We set up dust barriers and work to minimize disruption. For full gut renovations, we\u2019ll discuss the best plan to keep your daily routine as normal as possible.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a kitchen remodel cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kitchen remodels vary widely based on scope and materials. We provide multiple design options at different price points during your consultation so you can choose what fits your budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer financing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We can discuss financing options during your consultation. We work with homeowners to find solutions that make their dream kitchen achievable.',
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kitchenServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kitchenFaqJsonLd),
        }}
      />
      <KitchenHero />
      <KitchenServices />
      <KitchenWhyUs />
      <KitchenGallery />
      <KitchenFAQ />
      <KitchenCTA />
    </div>
  );
}
