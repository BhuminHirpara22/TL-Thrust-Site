/* /components/Hero.js */
import localFont from "next/font/local";
const nasalization = localFont({
  src: "../../public/font/nasalization-rg.otf",
});
const ocra_extended = localFont({
  src: "../../public/font/OCRAEXT.ttf",
});
const conthrax = localFont({
  src: "../../public/font/Conthrax-SemiBold.otf",
});

import registerNowBackground from "../../public/hero_assets/register_now_bg.svg";
import bottomRightOrange from "../../public/hero_assets/bottom_right_orange.svg";
import bottomRightWhite from "../../public/hero_assets/bottom_right_white.svg";
import topLeftWhite from "../../public/hero_assets/top_left_white.svg";
import whiteHr from "../../public/hero_assets/white_hr.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-row">
      <section className="w-1/2 relative z-0 overflow-clip">
        <video
          src="/hero_assets/greybg.mp4"
          loop
          autoPlay
          playsInline
          className="rotate-[47.31deg] w-4/5 top-1/2 left-1/2 -translate-1/2 absolute"
        />
        <p
          className={`${nasalization.className} text-6xl absolute bottom-1/6 left-1/6`}
        >
          <span className="text-[#F13909]">2</span>5
        </p>
        <Image
          src={topLeftWhite}
          alt=""
          className="absolute top-1/10 left-1/7"
        />
        <Image
          src={bottomRightWhite}
          alt=""
          className="absolute bottom-1/7 right-1/7"
        />
        <Image src={whiteHr} alt="" className="absolute bottom-1/7 left-1/6" />
      </section>
      <section className="bg-gradient-to-r from-black to-orange-600 text-white p-10 text-left relative z-1 w-1/2">
        <h2 className={`text-8xl font-bold ${nasalization.className} mt-16`}>
          TH<span className="text-[#F13909]">R</span>UST
        </h2>
        <p
          className={`mt-4 ${ocra_extended.className} flex flex-col justify-start border-l-6 border-[#A09991] pl-6`}
        >
          <span>By Tinkerers&apos; Lab</span>
          <span>IIT Hyderabad</span>
        </p>
        <button className="px-6 py-2 mt-6 relative">
          <Image src={registerNowBackground} alt="" />
          <span
            className={`text-3xl absolute top-1/2 left-0 w-full ${conthrax.className} -translate-y-1/2`}
          >
            REGISTER NOW
          </span>
        </button>
        <Image src={bottomRightOrange} alt="" className="ml-auto" />
      </section>
    </div>
  );
}
