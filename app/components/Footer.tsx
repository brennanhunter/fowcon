import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/logos/logo.png" 
              alt="Fowcon Restoration" 
              width={250} 
              height={80}
              className="h-auto"
            />
          </div>

          {/* License Information */}
          <div className="text-center md:text-right">
            <p className="text-primary-blue font-bold text-lg md:text-xl mb-2">
              General Contractor License | CGC 1531101
            </p>
            <p className="text-primary-blue font-bold text-lg md:text-xl mb-2">
              Mold Remediation License | MRSR2151
            </p>
            <p className="text-primary-blue font-bold text-lg md:text-xl">
              Fully Insured | 9+ Years in Business
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700">
            <p>Copyright © 2026 Fowcon Inc - All Rights Reserved.</p>
            <div className="flex gap-8">
              <p>Toll Free: 833-336-9266</p>
              <p>Tampa Area: 813-501-1552</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
