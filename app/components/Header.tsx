'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  href: string;
  label: string;
  divider?: boolean;
}

interface NavSection {
  label: string;
  links: NavLink[];
}

const navSections: Record<string, NavSection> = {
  construction: {
    label: 'Construction',
    links: [
      { href: '/construction/additions', label: 'Additions' },
      { href: '/construction/adu', label: 'ADU' },
      { href: '/construction/remodeling', label: 'Remodeling' },
    ],
  },
  mitigation: {
    label: 'Mitigation',
    links: [
      { href: '/mitigation/water', label: 'Water' },
      { href: '/mitigation/mold', label: 'Mold' },
      { href: '/mitigation/storm-wind', label: 'Storm & Wind' },
      { href: '/mitigation/fire-smoke', label: 'Fire & Smoke' },
      { href: '/mitigation/prevention-programs', label: 'Prevention Programs', divider: true },
    ],
  },
  about: {
    label: 'About',
    links: [
      { href: '/about/story', label: 'Story / History' },
      { href: '/about/leadership', label: 'Leadership' },
      { href: '/about/service-area', label: 'Service Area Map' },
      { href: '/about/faqs', label: "FAQ's" },
      { href: '/about/careers', label: 'Careers' },
    ],
  },
};

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileAccordion(null);
  }, []);

  const toggleAccordion = (key: string) => {
    setMobileAccordion(prev => (prev === key ? null : key));
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Thin blue line at top */}
      <div className="bg-primary-blue h-1"></div>
      
      {/* Top bar with contact info — hidden on mobile */}
      <div className="bg-gray-100 py-2 px-4 hidden lg:block">
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
            <Link href="/" className="flex items-center" onClick={closeMobile}>
              <Image 
                src="/logos/logo.png" 
                alt="Fowcon Restoration" 
                width={180} 
                height={60}
                className="h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8">
              {Object.keys(navSections).map((key) => {
                const section = navSections[key];
                return (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="text-primary-blue font-bold hover:text-blue-800 py-2">
                      {section.label}
                    </button>
                    {activeDropdown === key && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                        {section.links.map((link) => (
                          <div key={link.href}>
                            {link.divider && <div className="border-t border-gray-100 my-1" />}
                            <Link href={link.href} className="block px-4 py-2 hover:bg-gray-100 font-bold text-primary-blue">
                              {link.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link href="/design-style-quiz" className="text-primary-blue font-bold hover:text-blue-800 py-2">
                Style Quiz
              </Link>
              <Link href="/blog" className="text-primary-blue font-bold hover:text-blue-800 py-2">
                Blog
              </Link>
              <Link href="/contact" className="text-primary-blue font-bold hover:text-blue-800 py-2">
                Contact Us
              </Link>
            </nav>

            {/* Mobile hamburger button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block w-6 h-[2.5px] bg-primary-blue rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <span className={`block w-6 h-[2.5px] bg-primary-blue rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[2.5px] bg-primary-blue rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="max-h-[calc(100vh-120px)] overflow-y-auto">
              {/* Accordion sections */}
              {Object.keys(navSections).map((key) => {
                const section = navSections[key];
                const isOpen = mobileAccordion === key;
                return (
                  <div key={key} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleAccordion(key)}
                      className="w-full flex items-center justify-between px-6 py-4 text-primary-blue font-bold text-lg"
                    >
                      {section.label}
                      <FaChevronDown className={`text-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {section.links.map((link) => (
                            <div key={link.href}>
                              {link.divider && <div className="border-t border-gray-200 mx-6 my-1" />}
                              <Link
                                href={link.href}
                                onClick={closeMobile}
                                className="block px-10 py-3 text-primary-blue font-semibold hover:bg-gray-100"
                              >
                                {link.label}
                              </Link>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Standalone links */}
              <Link href="/design-style-quiz" onClick={closeMobile} className="block px-6 py-4 text-primary-blue font-bold text-lg border-b border-gray-100">
                Style Quiz
              </Link>
              <Link href="/blog" onClick={closeMobile} className="block px-6 py-4 text-primary-blue font-bold text-lg border-b border-gray-100">
                Blog
              </Link>
              <Link href="/contact" onClick={closeMobile} className="block px-6 py-4 text-primary-blue font-bold text-lg border-b border-gray-100">
                Contact Us
              </Link>

              {/* Contact info & social */}
              <div className="px-6 py-5 bg-gray-50 space-y-3">
                <a href="tel:833-336-9266" className="flex items-center gap-3 text-gray-700">
                  <FaPhone className="text-primary-blue text-sm" />
                  <span className="font-semibold">833-336-9266</span>
                </a>
                <a href="mailto:claims@fowconinc.com" className="flex items-center gap-3 text-gray-700">
                  <FaEnvelope className="text-primary-blue text-sm" />
                  <span className="font-semibold">claims@fowconinc.com</span>
                </a>
                <div className="flex gap-4 pt-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-blue-800">
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-blue-800">
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
