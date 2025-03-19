'use client';

import Link from 'next/link';
import Image from 'next/image';
import Facebook from "../../public/images/facebook.png";
import Insta from "../../public/images/insta.png";
import LinkedIn from "../../public/images/linkedIn.png";
import Logo from "../../public/images/thrust_logo.png";
import localFont from 'next/font/local';  

const nasalization = localFont({ src: '../../public/font/nasalization-rg.otf' });
const conthrax = localFont({ src: '../../public/font/Conthrax-SemiBold.otf' });
const ocraext = localFont({ src: '../../public/font/OCRAEXT.ttf' });

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Base black background */}
      <div className="absolute inset-0 z-0 w-full h-full bg-black">
        {/* Grey overlay with cut-out */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[#222222]" 
          style={{
            clipPath: 'polygon(0 0, 35% 0, 40% 20%, 60% 20%, 65% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />
        {/* Black dip element that shows through */}
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{
            clipPath: 'polygon(25% 0, 40% 20%, 60% 20%, 75% 0)',
            backgroundColor: 'transparent'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Wrapper to maintain padding above the dip */}
        <div className="pt-8 md:pt-10 lg:pt-12">
          {/* Responsive container */}
          <div className="flex flex-col sm:flex-row justify-between">
            
            {/* Left Side: Logo and Description */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-12 sm:mb-0 sm:w-2/5">
              <Image 
                src={Logo}
                alt="Thrust Logo" 
                width={40}
                height={40}
                className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0"
              />
              <div className="min-w-0"> {/* Prevents child content from overflowing */}
                <h2 className={`text-lg sm:text-2xl md:text-4xl font-bold ${nasalization.className}`}>
                  TH<span className="text-[#F13909]">R</span>UST
                </h2>
                <p className={`text-gray-400 text-s sm:text-m md:text-xl ${ocraext.className} line-clamp-2 sm:line-clamp-none`}>
                  Empowering innovation through technology and creativity.
                </p>
              </div>
            </div>
            
            {/* Right Side: Contact Details */}
            <div className="text-center sm:text-right sm:w-2/5">
              <h3 className={`text-[#F13909] text-xl sm:text-2xl md:text-4xl font-bold ${conthrax.className}`}>SOCIALS</h3>
              <div className={`mt-2 sm:mt-3 md:mt-4 space-y-1 ${ocraext.className} text-sm sm:text-m md:text-xl`}>
                <p className="truncate">Email: <Link href="mailto:tinkerersiitH@gmail.com" className="text-gray-400 hover:text-[#F13909]">tinkerersiitH@gmail.com</Link></p>
                <p>Phone: <span className="text-gray-400">9245567237</span></p>
                <p className="truncate">Address: <span className="text-gray-400">something something</span></p>
              </div>
              
              {/* Social Icons */}
              <div className="flex justify-center sm:justify-end space-x-5 sm:space-x-6 md:space-x-8 mt-3 sm:mt-4">
                <Link href="https://www.facebook.com/tl.iith/" target="_blank" aria-label="Facebook">
                  <Image src={Facebook} alt="Facebook" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="https://www.instagram.com/tinkererslab_iith/" target="_blank" aria-label="Instagram">
                  <Image src={Insta} alt="Instagram" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="https://www.linkedin.com/company/tinkerers-lab-iith/" target="_blank" aria-label="LinkedIn">
                  <Image src={LinkedIn} alt="LinkedIn" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}