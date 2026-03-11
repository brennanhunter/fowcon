'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Thin blue line at top */}
      <div className="bg-primary-blue h-1"></div>
      
      {/* Top bar with contact info */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:833-336-9266" className="flex items-center gap-2 text-gray-700 hover:text-primary-blue">
              <FaPhone className="text-xs text-primary-blue" />
              <span>833-336-9266</span>
            </a>
            <a href="mailto:claims@fowconinc.com" className="flex items-center gap-2 text-gray-700 hover:text-primary-blue">
              <FaEnvelope className="text-xs text-primary-blue" />
              <span>claims@fowconinc.com</span>
            </a>
            <span className="text-gray-600">Available 24 Hours a Day, 7 Days a Week!</span>
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-blue-800">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-blue-800">
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logos/logo.png" 
                alt="Fowcon Restoration" 
                width={180} 
                height={60}
                className="h-auto"
              />
            </Link>

            {/* Navigation Menu */}
            <nav className="flex gap-8">
              {/* Remodeling Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('remodeling')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-primary-blue font-bold hover:text-blue-800 py-2">
                  Remodeling
                </button>
                {activeDropdown === 'remodeling' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    <Link href="/remodeling/kitchens" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Kitchens</Link>
                    <Link href="/remodeling/bathrooms" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Bathrooms</Link>
                    <Link href="/remodeling/flooring" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Flooring</Link>
                    <Link href="/remodeling/interiors" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Interiors</Link>
                    <Link href="/remodeling/exteriors" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Exteriors</Link>
                  </div>
                )}
              </div>

              {/* Mitigation Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('mitigation')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-primary-blue font-bold hover:text-blue-800 py-2">
                  Mitigation
                </button>
                {activeDropdown === 'mitigation' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    <Link href="/mitigation/water" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Water</Link>
                    <Link href="/mitigation/mold" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Mold</Link>
                    <Link href="/mitigation/storm-wind" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Storm & Wind</Link>
                    <Link href="/mitigation/fire-smoke" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Fire & Smoke</Link>
                  </div>
                )}
              </div>

              {/* Prevention Programs Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('prevention')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-primary-blue font-bold hover:text-blue-800 py-2">
                  Prevention Programs
                </button>
                {activeDropdown === 'prevention' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    <Link href="/prevention/emergency-planning" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Emergency Planning</Link>
                    <Link href="/prevention/home-inspection" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Home Inspection</Link>
                    <Link href="/prevention/referral-partnerships" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Referral Partnerships</Link>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-primary-blue font-bold hover:text-blue-800 py-2">
                  About
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                    <Link href="/about/story" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Story / History</Link>
                    <Link href="/about/leadership" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Leadership</Link>
                    <Link href="/about/service-area" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Service Area Map</Link>
                    <Link href="/about/faqs" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">FAQ's</Link>
                    <Link href="/about/careers" className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">Careers</Link>
                  </div>
                )}
              </div>

              {/* Blog */}
              <Link href="/blog" className="text-primary-blue font-bold hover:text-blue-800 py-2">
                Blog
              </Link>

              {/* Contact Us */}
              <Link href="/contact" className="text-primary-blue font-bold hover:text-blue-800 py-2">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
