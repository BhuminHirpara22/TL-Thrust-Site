'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../../public/images/thrust_logo.png";
import { Audiowide } from 'next/font/google';
import localFont from 'next/font/local';


const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });  
const nasalization = localFont({ src: '../../public/font/nasalization-rg.otf' });

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`bg-black text-white py-3 md:py-4 px-4 md:px-8 flex justify-between items-center w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src={Logo} 
          alt="Thrust Logo" 
          width={36}
          height={36}
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mr-2" 
        />
        <span className={`text-xl sm:text-2xl font-bold ${nasalization.className}`}>
          TH<span className="text-[#F13909]">R</span>UST
        </span>
      </div>

      {/* Desktop Navigation with scroll buttons */}
      <nav className={`hidden md:flex space-x-2 lg:space-x-6 xl:space-x-8 ${audiowide.className} text-sm lg:text-base`}>
        <button onClick={() => scrollToSection('hero')} className="hover:text-[#F13909] transition-colors px-2">HOME</button>
        <button onClick={() => scrollToSection('events')} className="hover:text-[#F13909] transition-colors px-2">EVENTS</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-[#F13909] transition-colors px-2">ABOUT</button>
        <button onClick={() => scrollToSection('contact')} className="text-[#F13909] transition-colors px-2">CONTACT US</button>
      </nav>

      {/* Mobile Menu */}
      <button 
        className="md:hidden flex flex-col justify-center items-center space-y-1.5 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className={`flex flex-col space-y-6 p-6 ${audiowide.className}`}>
          <button 
            onClick={() => { scrollToSection('hero'); setIsMobileMenuOpen(false); }}
            className="hover:text-[#F13909] transition-colors block py-2 border-b border-gray-800"
          >
            HOME
          </button>
          <button 
            onClick={() => { scrollToSection('events'); setIsMobileMenuOpen(false); }}
            className="hover:text-[#F13909] transition-colors block py-2 border-b border-gray-800"
          >
            EVENTS
          </button>
          <button 
            onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}
            className="hover:text-[#F13909] transition-colors block py-2 border-b border-gray-800"
          >
            ABOUT
          </button>
          <button 
            onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
            className="text-[#F13909] transition-colors block py-2 border-b border-gray-800"
          >
            CONTACT US
          </button>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
