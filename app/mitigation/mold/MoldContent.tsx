'use client';

import MitigationHero from '@/app/components/mitigation/MitigationHero';
import MitigationServices from '@/app/components/mitigation/MitigationServices';
import MitigationWhyUs from '@/app/components/mitigation/MitigationWhyUs';
import MitigationFAQ from '@/app/components/mitigation/MitigationFAQ';
import MitigationCTA from '@/app/components/mitigation/MitigationCTA';
import { FaSearch, FaShieldAlt, FaClipboardCheck, FaHandsHelping } from 'react-icons/fa';

export default function MoldContent() {
  return (
    <main>
      <MitigationHero
        title="Mold Remediation"
        subtitle="IICRC-certified professionals who identify, contain, and eliminate mold safely — protecting your health and your property."
        image="/images/fakelivingroom.jpg"
        imageAlt="Professional mold remediation"
        ctaText="Schedule a Free Mold Inspection"
      />

      <MitigationServices
        title="Professional Mold Remediation Services"
        intro="Mold growth can lead to serious health issues and structural damage to your property. Florida's humidity makes homes especially vulnerable. Our IICRC-certified mold professionals conduct a free inspection, identify signs of mold, and determine if further assessment is needed. If mold is confirmed, our licensed assessors create a specific removal protocol tailored to your situation."
        services={[
          'Free initial mold inspection',
          'Air and surface sampling sent to certified labs',
          'Containment to prevent mold spread during remediation',
          'Negative air scrubbing and HEPA filtration',
          'Safe removal and disposal of mold-affected materials',
          'Bio-washing with approved antimicrobial agents',
          'Duct and HVAC cleaning for mold-free air circulation',
          'Post-remediation testing and clearance verification',
        ]}
        outro="Your Project Manager will review the protocol with you, answer any questions, and schedule the remediation — keeping you informed at every step."
        image="/images/fakelivingroom.jpg"
        imageAlt="Mold inspection and testing"
        secondTitle="Your Peace of Mind Matters"
        secondParagraphs={[
          'We understand that mold issues cause ongoing stress. Concerns about breathing in dangerous spores and deciphering information about proper cleaning methods can be overwhelming.',
          'Fowcon follows professional mold protocols — not guesswork. We take air and surface samples and send them to a certified lab for evaluation. The specific protocol we receive guides every step of the remediation. Post-testing is also performed and sent to the lab, ensuring all steps are completed correctly.',
          'The result: documented proof that the mold problem has been resolved, giving you confidence that your home is safe.',
        ]}
        secondImage="/images/fakelivingroom.jpg"
        secondImageAlt="Mold remediation containment and removal"
      />

      <MitigationWhyUs
        heading="Why Choose Fowcon for Mold Remediation"
        subtitle="Certified professionals, lab-verified results, and a process you can trust."
        reasons={[
          {
            icon: FaSearch,
            title: 'Free Inspection',
            description: 'Our IICRC-certified mold professionals conduct a thorough inspection to identify and assess mold presence at no cost to you.',
          },
          {
            icon: FaClipboardCheck,
            title: 'Lab-Verified Protocols',
            description: 'We test before and after remediation, sending samples to certified labs. You get documented proof the problem is resolved.',
          },
          {
            icon: FaShieldAlt,
            title: 'Licensed & Certified',
            description: 'Florida-licensed general contractor (CGC 1531101) with IICRC-certified mold remediation technicians and MRSR license (MRSR2151).',
          },
          {
            icon: FaHandsHelping,
            title: 'One Provider, Start to Finish',
            description: 'From inspection and testing through remediation and reconstruction, we handle the entire process so you have one team to rely on.',
          },
        ]}
      />

      <MitigationFAQ
        heading="Mold Remediation FAQs"
        subtitle="Common questions about mold in Florida homes."
        faqs={[
          {
            question: 'How do I know if I have mold?',
            answer: 'Common signs include visible discoloration on walls or ceilings, a persistent musty odor, water stains, or unexplained allergy-like symptoms. If you suspect mold, we offer a free inspection to assess the situation.',
          },
          {
            question: 'Is mold dangerous?',
            answer: 'It can be. Some mold species produce mycotoxins that cause respiratory issues, allergic reactions, and other health problems — especially for children, elderly individuals, and people with compromised immune systems. Professional remediation ensures safe removal.',
          },
          {
            question: 'How long does mold remediation take?',
            answer: 'Most residential mold remediation projects take 1 to 5 days depending on the extent of contamination. Larger or more complex cases may take longer. We provide a clear timeline after the inspection.',
          },
          {
            question: 'Does insurance cover mold remediation?',
            answer: 'It depends on your policy and the cause of the mold. Mold resulting from a covered water damage event is often covered. We work with insurance companies regularly and can help you navigate your claim.',
          },
          {
            question: 'Can I clean mold myself?',
            answer: 'Small surface mold on non-porous materials can sometimes be cleaned, but widespread mold, mold behind walls, or mold in HVAC systems should always be handled by certified professionals. Improper cleaning can spread spores and make the problem worse.',
          },
        ]}
      />

      <MitigationCTA
        heading="Concerned About Mold? Get a Free Inspection."
        subtitle="Our certified team will assess your property, create a remediation plan, and restore your peace of mind."
      />
    </main>
  );
}
