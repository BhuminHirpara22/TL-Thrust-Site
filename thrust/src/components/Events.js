import Image from "next/image";
import SilentDj from "../../public/images/silent_dj.png";
import RoboWars from "../../public/images/robo_wars.png";
import AutoExpo from "../../public/images/auto_expo.png";
import Qawali from "../../public/images/qawali.png";
import Frame from "../../public/images/frame.png";
import Line from "../../public/images/line.png";
import Logo from "../../public/images/upleft_logo.png";
import smallLogo from "../../public/images/bottomRight_logo.png";
import smallWhiteLogo from "../../public/images/bottomRight_whiteLogo.png";
import { Audiowide } from "next/font/google";  // Correct import path

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });  // Weight should be an array

export default function Events() {
  return (
    <section id="events" className={`bg-black text-white p-4 md:p-8 lg:p-10 ${audiowide.className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 lg:mb-25 px-4 md:px-8 lg:px-10">EVENTS</h2>
      
      {/* Event grid - changes to 1 column on smaller screens */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-10 xl:px-20" style={{background: "radial-gradient(ellipse 65% 55% at left, rgba(234, 88, 12, 0.8) 2%,black 60%)"}} >
        {/* Silent DJ */}
        <div className="relative group w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 mb-6">
            Silent DJ
          </h3>

          <div className="relative w-80 md:w-80 lg:w-125 mx-auto">
            {/* Small Logo - Sized relatively to container */}
            <Image
              src={smallLogo}
              alt="logo"
              className="absolute w-1/12 md:w-1/10 lg:w-1/10 h-auto z-40"
              style={{
                top: "0",
                left: "0",
              }}
            />
            
            {/* Background Frame */}
            <Image
              src={Frame}
              alt="Background Frame"
              className="absolute w-full h-auto z-0"
              style={{
                top: "10%",
                left: "5%",
              }}
            />

            <div className="relative w-full filter contrast-150">
              {/* Main Image */}
              <Image
                src={SilentDj}
                alt="Silent DJ"
                className="w-full h-auto rounded-lg relative z-10"
              />

              {/* Colored Background */}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-lg z-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #9B361B 20%, transparent 100%)",
                  opacity: 0.4,
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)",
                }}
              />
            </div>

            {/* Foreground Frame */}
            <Image
              src={Frame}
              alt="Frame"
              className="absolute w-full h-auto z-30"
              style={{
                top: "0%",
                left: "0%",
              }}
            />
          </div>
        </div>

        {/* Robo Wars */}
        <div className="relative group w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 mb-6">
            Robo Wars
          </h3>
          <div className="relative w-80 md:w-80 lg:w-125 mx-auto">
            {/* Small White Logo - Sized relatively to container */}
            <Image
              src={smallWhiteLogo}
              alt="logo"
              className="absolute w-1/12 md:w-1/10 lg:w-1/10 h-auto z-40"
              style={{
                top: "0",
                left: "0",
              }}
            />
            
            {/* Background Frame */}
            <Image
              src={Frame}
              alt="Background Frame"
              className="absolute w-full h-auto z-0"
              style={{ top: "10%", left: "5%" }}
            />

            <div className="relative w-full filter contrast-150">
              <Image
                src={RoboWars}
                alt="Robo Wars"
                className="w-full h-auto rounded-lg relative z-10"
              />

              <div
                className="absolute top-0 left-0 w-full h-full rounded-lg z-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #9B361B 20%, transparent 100%)",
                  opacity: 0.4,
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)",
                }}
              />
            </div>

            <Image
              src={Frame}
              alt="Frame"
              className="absolute w-full h-auto z-30"
              style={{ top: "0%", left: "0%" }}
            />
          </div>
        </div>

        {/* Auto Expo */}
        <div className="relative group w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 mb-6">
            Auto Expo
          </h3>
          <div className="relative w-80 md:w-80 lg:w-125 mx-auto">
            {/* Small Logo - Sized relatively to container */}
            <Image
              src={smallLogo}
              alt="logo"
              className="absolute w-1/12 md:w-1/10 lg:w-1/10 h-auto z-40"
              style={{
                top: "0",
                left: "0",
              }}
            />
            
            {/* Background Frame */}
            <Image
              src={Frame}
              alt="Background Frame"
              className="absolute w-full h-auto z-0"
              style={{ top: "10%", left: "5%" }}
            />

            <div className="relative w-full filter contrast-150">
              <Image
                src={AutoExpo}
                alt="Auto Expo"
                className="w-full h-auto rounded-lg relative z-10"
              />

              <div
                className="absolute top-0 left-0 w-full h-full rounded-lg z-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #9B361B 20%, transparent 100%)",
                  opacity: 0.4,
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)",
                }}
              />
            </div>

            <Image
              src={Frame}
              alt="Frame"
              className="absolute w-full h-auto z-30"
              style={{ top: "0%", left: "0%" }}
            />
          </div>
        </div>

        {/* Qawali */}
        <div className="relative group w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 mb-6">
            Qawali
          </h3>
          <div className="relative w-80 md:w-80 lg:w-125 mx-auto">
            {/* Small White Logo - Sized relatively to container */}
            <Image
              src={smallWhiteLogo}
              alt="logo"
              className="absolute w-1/12 md:w-1/10 lg:w-1/10 h-auto z-40"
              style={{
                top: "0",
                left: "0",
              }}
            />
            
            {/* Background Frame */}
            <Image
              src={Frame}
              alt="Background Frame"
              className="absolute w-full h-auto z-0"
              style={{ top: "10%", left: "5%" }}
            />

            <div className="relative w-full filter contrast-150">
              <Image
                src={Qawali}
                alt="Qawali"
                className="w-full h-auto rounded-lg relative z-10"
              />

              <div
                className="absolute top-0 left-0 w-full h-full rounded-lg z-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #9B361B 20%, transparent 100%)",
                  opacity: 0.4,
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)",
                }}
              />
            </div>

            <Image
              src={Frame}
              alt="Frame"
              className="absolute w-full h-auto z-30"
              style={{ top: "0%", left: "0%" }}
            />
          </div>
        </div>
      </div>

      {/* MORE button, line, and logo */}
      <div className="flex flex-row justify-between items-end mt-16 md:mt-20 lg:mt-30 px-4 md:px-8 lg:px-10 xl:px-20">
        {/* MORE button on the left - made non-clickable by removing href */}
        <div
          className="bg-[#F13909] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 font-bold relative inline-block cursor-default"
          style={{
            clipPath:
              "polygon(15% 0, 100% 0, 100% 65%, 85% 100%, 0 100%, 0 35%)",
          }}
        >
          MORE ➤
        </div>

        {/* Line and Logo images on the right */}
        <div className="flex items-end space-x-1 sm:space-x-2 md:space-x-4">
          <Image 
            src={Line} 
            alt="Line" 
            className="h-1 w-20 sm:w-32 md:w-48 lg:w-96" 
          />
          <Image 
            src={Logo} 
            alt="Logo" 
            className="w-12 sm:w-16 md:w-20 lg:w-24" 
          />
        </div>
      </div>
    </section>
  );
}