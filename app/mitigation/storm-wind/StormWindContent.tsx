'use client';

import MitigationHero from '@/app/components/mitigation/MitigationHero';
import MitigationServices from '@/app/components/mitigation/MitigationServices';
import MitigationWhyUs from '@/app/components/mitigation/MitigationWhyUs';
import MitigationFAQ from '@/app/components/mitigation/MitigationFAQ';
import MitigationCTA from '@/app/components/mitigation/MitigationCTA';
import { FaBolt, FaShieldAlt, FaFileInvoiceDollar, FaTools } from 'react-icons/fa';

export default function StormWindContent() {
  return (
    <div>
      <MitigationHero
        title="Storm & Wind Damage Restoration"
        subtitle="When nature strikes, you need a reliable partner to secure your property and restore it fast. Our emergency team is ready to deploy."
        image="/images/fakelivingroom.jpg"
        imageAlt="Storm and wind damage restoration"
        ctaText="Get Emergency Storm Restoration"
      />

      <MitigationServices
        title="Comprehensive Storm & Wind Damage Services"
        intro="Storms can cause significant damage to your property — from roof and window destruction to structural issues and water intrusion. The aftermath leaves your home vulnerable, and immediate action is critical to prevent further harm. Our emergency response team is ready to deploy promptly, securing your property and starting the restoration process."
        services={[
          'Emergency board-up and tarping',
          'Roof damage assessment and repair',
          'Window and door replacement',
          'Water intrusion mitigation and drying',
          'Debris removal and cleanup',
          'Structural stabilization and repair',
          'Temporary power setup when permitted',
          'Full property reconstruction',
        ]}
        outro="From the initial emergency response through complete reconstruction, we handle every phase — one team, one provider, start to finish."
        image="/images/fakelivingroom.jpg"
        imageAlt="Emergency storm damage response"
        secondTitle="Guiding You Through the Storm"
        secondParagraphs={[
          'We know how overwhelming storm damage can be. Beyond the physical damage, there are insurance claims to file, temporary living arrangements to consider, and decisions to make while under stress. Fowcon takes that burden off your shoulders.',
          'When you partner with us, you get one dedicated Project Manager from start to finish. We document all damage for your insurance claim, coordinate every trade, and keep you informed throughout the process.',
          'In significant storm events, power outages may leave you in the dark. Fowcon can set up temporary power conditions when permitted, ensuring you have access to essential resources during the restoration process.',
        ]}
        secondImage="/images/fakelivingroom.jpg"
        secondImageAlt="Storm damage reconstruction"
      />

      <MitigationWhyUs
        heading="Why Choose Fowcon for Storm Damage"
        subtitle="Immediate emergency response, comprehensive restoration, and a team you can count on when it matters most."
        reasons={[
          {
            icon: FaBolt,
            title: 'Immediate Response',
            description: 'Our emergency services ensure timely board-up, tarping, and stabilization — reducing further damage to your property.',
          },
          {
            icon: FaTools,
            title: 'Full-Scope Restoration',
            description: 'From emergency mitigation to complete reconstruction, we handle roofing, structural repairs, water damage, and everything in between.',
          },
          {
            icon: FaFileInvoiceDollar,
            title: 'Insurance Experts',
            description: 'We document everything and work directly with your insurance carrier to ensure your claim is thorough and your coverage is maximized.',
          },
          {
            icon: FaShieldAlt,
            title: 'Licensed & Insured',
            description: 'Florida-licensed general contractor (CGC 1531101) with a team of qualified, insured professionals ready to restore your property.',
          },
        ]}
      />

      <MitigationFAQ
        heading="Storm & Wind Damage FAQs"
        subtitle="Common questions about storm damage restoration in Florida."
        faqs={[
          {
            question: 'What should I do immediately after storm damage?',
            answer: 'Ensure everyone is safe, then contact Fowcon for emergency board-up and tarping to prevent further damage. Document the damage with photos and contact your insurance company to start a claim. Do not attempt structural repairs yourself.',
          },
          {
            question: 'Does insurance cover storm damage?',
            answer: "Most homeowner's policies cover wind and storm damage, though specifics vary. Flood damage typically requires a separate policy. We work with insurance companies regularly and help you navigate the claims process.",
          },
          {
            question: 'How long does storm damage restoration take?',
            answer: 'It depends on severity. Emergency stabilization happens within hours. Minor roof and window repairs may take days, while major structural reconstruction can take several weeks. We provide a detailed timeline after assessing the damage.',
          },
          {
            question: 'Can you help if I lose power after a storm?',
            answer: 'Yes. In significant storm events, we can set up temporary power conditions when permitted, ensuring you have access to essential resources during the restoration process.',
          },
          {
            question: 'Do you handle both residential and commercial storm damage?',
            answer: 'Yes. Fowcon restores both residential and commercial properties after storm and wind events. Our licensed team has the experience and equipment to handle projects of any scale.',
          },
        ]}
      />

      <MitigationCTA
        heading="Storm Damage? We're Ready to Help."
        subtitle="Call us 24/7 for emergency storm damage restoration. Immediate response, expert repairs, full reconstruction."
      />
    </div>
  );
}
