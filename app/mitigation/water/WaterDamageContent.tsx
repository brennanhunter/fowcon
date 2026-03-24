'use client';

import MitigationHero from '@/app/components/mitigation/MitigationHero';
import MitigationServices from '@/app/components/mitigation/MitigationServices';
import MitigationWhyUs from '@/app/components/mitigation/MitigationWhyUs';
import MitigationFAQ from '@/app/components/mitigation/MitigationFAQ';
import MitigationCTA from '@/app/components/mitigation/MitigationCTA';
import { FaBolt, FaShieldAlt, FaFileInvoiceDollar, FaHandsHelping } from 'react-icons/fa';

export default function WaterDamageContent() {
  return (
    <main>
      <MitigationHero
        title="Water Damage Restoration"
        subtitle="When water wreaks havoc on your property, immediate action is crucial. Our expert team responds fast to extract water, dry your property, and prevent further damage."
        image="/images/fakelivingroom.jpg"
        imageAlt="Water damage restoration"
        ctaText="Get Emergency Water Restoration"
      />

      <MitigationServices
        title="Comprehensive Water Damage Restoration"
        intro="Water damage can strike from burst pipes, leaking roofs, appliance failures, or flooding. The longer water sits, the worse the damage gets — from soaked carpets and warped flooring to ruined furniture, ceiling damage, and mold growth. Fowcon responds quickly with a full team and the right equipment to stop the damage and start the recovery."
        services={[
          'Emergency water extraction and removal',
          'Structural drying and dehumidification',
          'Moisture mapping and monitoring',
          'Content and personal property restoration',
          'Mold prevention treatment',
          'Flooring, drywall, and ceiling repair',
          'Full reconstruction of damaged areas',
          'Insurance claim documentation and support',
        ]}
        outro="We handle everything from the initial emergency response through final reconstruction — one team, one point of contact, start to finish."
        image="/images/fakelivingroom.jpg"
        imageAlt="Water extraction and drying process"
        secondTitle="The Science of Water Extraction and Drying"
        secondParagraphs={[
          'Water extraction and drying of materials requires precision and expertise. Different materials absorb and release moisture at different rates, and improper drying can lead to warping, swelling, and hidden mold growth behind walls and under floors.',
          'Our IICRC-certified technicians use industrial-grade equipment — including commercial dehumidifiers, air movers, and thermal imaging — to ensure every affected area is thoroughly dried and returned to safe moisture levels.',
          'We also document the entire process with moisture readings and photos, which helps streamline your insurance claim and ensures nothing is missed.',
        ]}
        secondImage="/images/fakelivingroom.jpg"
        secondImageAlt="Professional water damage drying equipment"
      />

      <MitigationWhyUs
        heading="Why Choose Fowcon for Water Damage"
        subtitle="Fast response, expert execution, and full-service restoration from a licensed Florida general contractor."
        reasons={[
          {
            icon: FaBolt,
            title: 'Rapid Response',
            description: 'Water damage gets worse by the hour. Our emergency team deploys quickly to extract water and begin drying before secondary damage takes hold.',
          },
          {
            icon: FaShieldAlt,
            title: 'Licensed & Insured',
            description: 'Fowcon is a Florida-licensed general contractor (CGC 1531101) with IICRC-certified technicians. Your property is in qualified hands.',
          },
          {
            icon: FaFileInvoiceDollar,
            title: 'Insurance Navigation',
            description: 'We have years of experience working with insurance companies. We document everything and help you maximize your coverage.',
          },
          {
            icon: FaHandsHelping,
            title: 'Start-to-Finish Service',
            description: 'From emergency mitigation through full reconstruction, we handle every phase so you have one provider and one point of contact.',
          },
        ]}
      />

      <MitigationFAQ
        heading="Water Damage FAQs"
        subtitle="Common questions about water damage restoration."
        faqs={[
          {
            question: 'How quickly should water damage be addressed?',
            answer: 'Immediately. Mold can begin growing within 24–48 hours of water exposure. The faster extraction and drying begins, the less secondary damage occurs and the lower the overall restoration cost.',
          },
          {
            question: 'Does Fowcon work with insurance companies?',
            answer: 'Yes. We have extensive experience working with insurance carriers. We document the damage thoroughly with photos, moisture readings, and detailed reports to support your claim and help maximize your coverage.',
          },
          {
            question: 'What causes water damage in homes?',
            answer: 'Common causes include burst or leaking pipes, appliance failures (water heaters, washing machines), roof leaks, storm flooding, and sewage backups. We handle all types of water damage regardless of the source.',
          },
          {
            question: 'Can you save my personal belongings?',
            answer: 'In many cases, yes. Our team is trained in content restoration — cleaning, drying, and restoring personal items affected by water damage. We understand your belongings are irreplaceable and do everything we can to save them.',
          },
          {
            question: 'Do I need to leave my home during restoration?',
            answer: "It depends on the extent of the damage. Minor water damage may allow you to stay in unaffected areas. For major flooding or structural damage, we may recommend temporary relocation for safety. We'll guide you through the decision.",
          },
        ]}
      />

      <MitigationCTA
        heading="Water Damage? We're Here Now."
        subtitle="Call us 24/7 for emergency water damage restoration. Fast response, expert service, full reconstruction."
      />
    </main>
  );
}
