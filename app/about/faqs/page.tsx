import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import FAQContent from '@/app/components/about/FAQContent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'FAQs about Fowcon Construction remodeling and restoration services. Learn about our process, licensing, service areas, insurance claims, financing, and more.',
  openGraph: {
    title: 'FAQs | Fowcon Construction',
    description:
      'Frequently asked questions about Fowcon remodeling and restoration services in Tampa Bay.',
    url: 'https://fowconinc.com/about/faqs',
  },
  alternates: {
    canonical: 'https://fowconinc.com/about/faqs',
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What areas does Fowcon serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We primarily serve the Tampa Bay area including Tampa, St. Petersburg, Clearwater, Westchase, Brandon, Riverview, Wesley Chapel, and Land O\u2019 Lakes. For restoration and large-scale projects, we serve the greater Central Florida and West Coast regions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Fowcon licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fowcon holds a General Contractor license (CGC 1531101), a Mold Remediation license (MRSR2151), and is an IICRC-certified firm. We are fully insured for all remodeling and restoration work.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get a quote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us by phone at (833) 336-9266 or email claims@fowconinc.com to schedule a free consultation. We will evaluate your project, discuss your vision and budget, and provide a detailed estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of remodeling projects does Fowcon handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer full-service remodeling including kitchens, bathrooms, flooring, and whole-home interiors (living rooms, family rooms, home offices, laundry rooms). From design through completion, our team handles it all.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical kitchen or bathroom remodel take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Timelines vary by scope. A bathroom refresh may take 2\u20133 weeks, while a full kitchen gut renovation can take 6\u20138 weeks or more. During your consultation, we provide a realistic timeline based on your specific project.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you help with design selections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our team can guide you through material selections, layout planning, and design choices. We also have a free Design Style Quiz on our website to help you discover your style preferences before your consultation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do immediately after water, fire, or storm damage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Call us at (833) 336-9266 right away. We offer emergency response and can begin mitigation quickly to prevent further damage. Document what you can with photos and contact your insurance company.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Fowcon work with insurance companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We have extensive experience working directly with insurance companies and can help navigate the claims process. Our detailed documentation and transparent pricing make the approval process smoother for homeowners.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between mitigation and restoration?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mitigation is the immediate response \u2014 stopping the damage, extracting water, boarding up openings, and preventing mold growth. Restoration is the rebuild phase \u2014 repairing or replacing damaged structures, finishes, and systems to return your home to its pre-loss condition (or better).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle mold remediation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fowcon is licensed for mold remediation (MRSR2151) and IICRC-certified. We follow strict containment, HEPA filtration, and lab-verified protocols to safely and completely remove mold from your property.',
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Fowcon."
      />
      <FAQContent />
    </div>
  );
}
