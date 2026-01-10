import Image from 'next/image';

export default function ServiceAreaSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          {/* Text Content */}
          <div className="text-center md:text-right md:pr-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-blue leading-tight">
              Serving The Tampa Bay Area,<br />
              Surrounding West Coast,<br />
              and Greater Florida
            </h2>
          </div>

          {/* Florida Map Image */}
          <div className="flex justify-center md:justify-start">
            <Image 
              src="/images/florida-image.png" 
              alt="Florida service area map" 
              width={600} 
              height={400}
              className="w-full h-auto max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
