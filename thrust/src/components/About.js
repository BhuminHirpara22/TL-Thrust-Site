/* /components/About.js */
import localFont from "next/font/local";

const conthrax = localFont({
  src: "../../public/font/Conthrax-SemiBold.otf",
});

const ocra_extended = localFont({
  src: "../../public/font/OCRAEXT.ttf",
});

import Image from "next/image";

import bottomLeftOrange from "../../public/about_assets/bottom_left_orange.svg";
import bottomRightOrange from "../../public/about_assets/bottom_right_orange.svg";
import topLeftWhite from "../../public/about_assets/top_left_white.svg";
import whiteHr from "../../public/about_assets/white_hr.svg";
import orangeHr from "../../public/about_assets/orange_hr.svg";
import tlImg from "../../public/about_assets/tl.png";

export default function About() {
  return (
    <>
      <section id="race-to-create" className="text-white p-10">
        <div className="flex flex-col lg:flex-row align-middle gap-8 relative">
          <div className={`relative ${ocra_extended.className} flex-initial`}>
            <h2
              className={`${conthrax.className} text-4xl font-bold flex flex-col`}
            >
              <span>
                <span className="text-[#F13909]">RACE</span> TO
              </span>
              CREATE
            </h2>
            <p className="border-l-4 mt-4 border-[#A09991] pl-4">
              Ready, Set, Innovate! THRUST 2025: Race to Create is not just a
              theme—it&apos;s a challenge. Imagine a high-stakes sprint where
              your imagination fuels the engine, and engineering principles pave
              the way to your vision.
            </p>
            <p className="mt-4 pl-16 lg:pl-32">
              This is where you break the chains of conventional thinking, push
              the boundaries of possibility, and transform your boldest ideas
              into tangible realities.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex-none flex pb-24 lg:pb-36">
            <video
              src={null}
              className="w-full left-0 top-0"
              alt="Theme Reveal Video"
            />
          </div>
          <Image
            src={bottomLeftOrange}
            alt=""
            className="absolute left-2 bottom-4 lg:bottom-1/3 w-1/6 lg:w-auto"
          />
          <Image
            src={bottomRightOrange}
            alt=""
            className="absolute right-0 bottom-0 w-1/5 lg:w-auto"
          />
          <Image src={whiteHr} alt="" className="absolute bottom-0 left-160" />
          <Image
            src={orangeHr}
            alt=""
            className="absolute bottom-0 right-20 lg:right-40 w-2/3 lg:w-auto"
          />
        </div>
      </section>
      <section id="about" className="text-white p-10">
        <div className="flex flex-col lg:flex-row align-middle gap-8 lg:gap-32 relative">
          <div className={`relative ${ocra_extended.className} flex-initial`}>
            <h2
              className={`${conthrax.className} text-4xl font-bold flex flex-col`}
            >
              <span className="text-[#F13909]">ABOUT</span>
              TINKERERS&apos; LAB
            </h2>
            <p className="border-l-4 mt-4 border-[#A09991] pl-4">
              Tinkerer’s Lab at IIT Hyderabad is a creative space designed for
              students and faculty to explore technology beyond the academic
              curriculum. Inaugurated in 2018, this lab is a hub for tinkering
              and skill-building activities, fostering innovation and practical
              engineering skills.
            </p>
            <p className="mt-4 pl-4">
              It spans 1600 sqft and is equipped with modern tools like a 3D
              printer, and a miniature CNC machine, allowing for a hands-on
              approach to learning and creating. Other labs in the country
              include IIT Bombay, IIT Gandhinagar, IIT Indore, IIT Jammu, BITS
              Pilani (Goa and Pilani campus), ICT Mumbai etc.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex-none flex relative">
            <Image
              src={tlImg}
              alt="Image of Tinkerers' Lab"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 40%), linear-gradient(to bottom, transparent, black 40%), linear-gradient(to top, transparent, black 40%)",
                maskComposite: "intersect",
              }}
            />
            <Image
              src={topLeftWhite}
              alt=""
              className="absolute left-0 top-0 w-1/5 lg:w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
