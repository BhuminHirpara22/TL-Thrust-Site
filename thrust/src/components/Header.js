import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/images/thrust_logo.png"
import { Audiowide } from '@next/font/google';
import localFont from 'next/font/local';  // Import local font

// Import fonts
const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });
const nasalization = localFont({ src: '../../public/font/nasalization-rg.otf' });

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={Logo} alt="Thrust Logo" className="h-10 w-10 mr-2" />
        <span className={`text-2xl font-bold ${nasalization.className}`}>
          TH<span className="text-[#F13909]">R</span>UST
        </span>
      </div>
      <nav className={`flex space-x-8 ${audiowide.className}`}>
        <Link href="/" className={`hover:text-[#F13909]`}>HOME</Link>
        <Link href="/events" className="hover:text-[#F13909]">EVENTS</Link>
        <Link href="/partners" className="hover:text-[#F13909]">PARTNERS</Link>
        <Link href="/about" className="hover:text-[#F13909]">ABOUT</Link>
        <Link href="/contact" className="text-[#F13909]">CONTACT US</Link>
      </nav>
    </header>
  );
}
