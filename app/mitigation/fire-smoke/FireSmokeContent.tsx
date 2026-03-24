'use client';

import MitigationHero from '@/app/components/mitigation/MitigationHero';
import MitigationServices from '@/app/components/mitigation/MitigationServices';
import MitigationWhyUs from '@/app/components/mitigation/MitigationWhyUs';
import MitigationFAQ from '@/app/components/mitigation/MitigationFAQ';
import MitigationCTA from '@/app/components/mitigation/MitigationCTA';
import { FaBolt, FaShieldAlt, FaFileInvoiceDollar, FaHandsHelping } from 'react-icons/fa';

export default function FireSmokeContent() {
  return (
    <main>
      <MitigationHero
        title="Fire & Smoke Damage Restoration"
        subtitle="Fire damage is devastating, but you're not alone. Our experienced team guides you through every step — from emergency response to full reconstruction."
        image="/images/fakelivingroom.jpg"
        imageAlt="Fire and smoke damage restoration"
        ctaText="Get Emergency Fire Restoration"
      />

      <MitigationServices
        title="Comprehensive Fire & Smoke Restoration"
        intro="The aftermath of a fire can be overwhelming. Beyond the visible structural damage, smoke and soot contamination can spread throughout your property, affecting air quality and damaging belongings in rooms the fire never reached. Fowcon provides full-scope fire and smoke restoration — addressing every layer of damage so you can rebuild and move forward."
        services={[
          'Emergency board-up and property securing',
          'Smoke and soot cleanup and deodorization',
          'Content cleaning and personal property restoration',
          'Structural damage assessment and demolition',
          'Full home reconstruction to pre-fire condition',
          'Air quality testing and restoration',
          'Odor elimination using professional-grade equipment',
          'Insurance claim documentation and negotiation',
        ]}
        outro="We understand that your personal belongings are precious and often irreplaceable. Our trained professionals clean and restore items, ensuring they are free from potentially harmful toxins."
        image="/images/fakelivingroom.jpg"
        imageAlt="Fire damage cleanup and restoration"
        secondTitle="Your Partner in Fire Restoration"
        secondParagraphs={[
          "At Fowcon, we don't just see ourselves as fire damage restoration contractors. We see ourselves as your partners in restoration. Our dedication to customer satisfaction is at the core of everything we do.",
          "With a keen eye for detail, we carefully reconstruct your home to its pre-fire condition, making sure no smoke contamination is left behind. From structural framing to finish work, we handle every trade and every detail.",
          "Dealing with insurance companies after a fire can be confusing and frustrating. We have years of experience negotiating with insurance agents — we speak their language and help you maximize your coverage so you're not caught off guard by unexpected bills.",
        ]}
        secondImage="/images/fakelivingroom.jpg"
        secondImageAlt="Home reconstruction after fire damage"
      />

      <MitigationWhyUs
        heading="Why Choose Fowcon for Fire Damage"
        subtitle="Decades of experience, compassionate service, and full-scope restoration from emergency response to move-in day."
        reasons={[
          {
            icon: FaBolt,
            title: 'Emergency Response',
            description: 'We respond quickly to secure your property, prevent further damage, and begin the cleanup process as soon as conditions are safe.',
          },
          {
            icon: FaFileInvoiceDollar,
            title: 'Insurance Navigation',
            description: 'Our experience negotiating with insurance companies ensures a smooth process and maximizes your coverage. We document everything.',
          },
          {
            icon: FaHandsHelping,
            title: 'Full-Service Restoration',
            description: 'From property cleaning and content restoration to complete home reconstruction, we take care of every aspect of the restoration process.',
          },
          {
            icon: FaShieldAlt,
            title: 'Licensed & Certified',
            description: 'Florida-licensed general contractor (CGC 1531101) with IICRC-certified technicians. Your property and your family are in safe hands.',
          },
        ]}
      />

      <MitigationFAQ
        heading="Fire & Smoke Damage FAQs"
        subtitle="Common questions about fire and smoke restoration."
        faqs={[
          {
            question: 'What should I do right after a fire?',
            answer: "After the fire department clears the property, contact Fowcon immediately. We'll secure the structure with board-up services, assess the damage, and begin the restoration process. Don't attempt to clean soot or smoke damage yourself — improper cleaning can cause permanent staining.",
          },
          {
            question: "Can smoke damage affect rooms the fire didn't reach?",
            answer: 'Yes. Smoke and soot travel through HVAC systems, ductwork, and gaps in walls, contaminating areas far from the fire itself. Our restoration process includes air quality testing and decontamination of the entire property.',
          },
          {
            question: 'Can you save my personal belongings after a fire?',
            answer: 'In many cases, yes. Our content restoration team specializes in cleaning, deodorizing, and restoring personal items affected by smoke and soot. We treat your belongings with the care they deserve.',
          },
          {
            question: 'Does insurance cover fire damage restoration?',
            answer: "Most homeowner's policies cover fire and smoke damage. We work directly with your insurance company, providing detailed documentation and negotiating on your behalf to help maximize your coverage.",
          },
          {
            question: 'How long does fire damage restoration take?',
            answer: 'It depends on the extent of damage. Minor smoke cleanup may take days, while full structural reconstruction after a significant fire can take several weeks to months. We provide a clear timeline after our initial assessment.',
          },
        ]}
      />

      <MitigationCTA
        heading="Fire Damage? We're Here to Help."
        subtitle="Call us 24/7 for emergency fire and smoke damage restoration. We'll guide you through every step from cleanup to reconstruction."
      />
    </main>
  );
}
