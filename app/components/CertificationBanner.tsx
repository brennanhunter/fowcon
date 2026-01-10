import Image from 'next/image';

export default function CertificationBanner() {
  const certifications = [
    { src: '/images/bbb.png', alt: 'BBB Accredited Business A+', width: 180, height: 80 },
    { src: '/images/iicrc.png', alt: 'IICRC Certified', width: 120, height: 80 },
    { src: '/images/contractor-connection.png', alt: 'Contractor Connection Network Member', width: 200, height: 80 },
    { src: '/images/florida-general-contractor.png', alt: 'Florida General Contractor', width: 120, height: 80 },
    { src: '/images/ria.webp', alt: 'RIA Restoration Industry Association', width: 180, height: 80 }
  ];

  return (
    <section className="py-8 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 flex-1 min-w-[150px]">
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
