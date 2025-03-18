import Image from 'next/image';
import Link from 'next/link';
import FooterBg from "../../public/images/footer_bg.png"
import Facebook from "../../public/images/facebook.png"
import Insta from "../../public/images/insta.png"
import LinkedIn from "../../public/images/linkedIn.png"
import Logo from "../../public/images/thrust_logo.png"
import localFont from 'next/font/local';  

const nasalization = localFont({ src: '../../public/font/nasalization-rg.otf' });
const conthrax = localFont({ src: '../../public/font/Conthrax-SemiBold.otf' });
const ocraext = localFont({ src: '../../public/font/OCRAEXT.ttf' });
export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image 
          src={FooterBg}
          alt="Footer Background"
          layout="fill"
        //   objectFit="contain"
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Left Side: Logo and Description */}
        <div className="flex items-center space-x-4 ml-[-5vw]" style={{scale:"1.25"}}>
          <Image 
            src={Logo}
            alt="Thrust Logo" 
            width={60} 
            height={60}
          />
          <div>
            <h2 className={`text-2xl font-bold ${nasalization.className}`}>
              TH<span className="text-[#F13909]">R</span>UST
            </h2>
            <p className={`text-gray-400 max-w-xs mt-2 ${ocraext.className}`}>
              Empowering innovation through technology and creativity.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="text-left mr-[-5vw]" style={{scale:"1.25"}}>
          <h3 className={`text-[#F13909] text-2xl font-bold ${conthrax.className}`}>SOCIALS</h3>
          <div className={`mt-4 space-y-2 ${ocraext.className}`}>
            <p>Email: <Link href="mailto:tinkerers@iith.ac.in" className="text-gray-400 hover:text-[#F13909]">tinkerersiitH@gmail.com</Link></p>
            <p>Phone: <span className="text-gray-400">9245567237</span></p>
            <p>Address: <span className="text-gray-400">something something</span></p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-begin space-x-10 mt-4">
            <Link href="https://www.facebook.com/tl.iith/" target="_blank" aria-label="Facebook">
              <Image src={Facebook} alt="Facebook" width={22} height={22} />
            </Link>
            <Link href="https://www.instagram.com/tinkererslab_iith/?igsh=MTdsMTQ3NTExd3JvdA%3D%3D#" target="_blank" aria-label="Instagram">
              <Image src={Insta} alt="Instagram" width={22} height={22} />
            </Link>
            <Link href="https://www.linkedin.com/company/tinkerers-lab-iith/posts/?feedView=all" target="_blank" aria-label="LinkedIn">
              <Image src={LinkedIn} alt="LinkedIn" width={22} height={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
