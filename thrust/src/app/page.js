/* src/app/page.js */
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />

      {/* Add IDs to the sections */}
      <div
        id="hero"
        style={{
          background:
            "radial-gradient(ellipse 65% 65% at bottom right, rgba(234, 88, 12, 0.8) 2%,black 60%)",
        }}
      >
        <Hero />
      </div>
      <div
        id="about"
        style={{
          background:
            "radial-gradient(ellipse 65% 35% at top right, rgba(234, 88, 12, 0.8) 2%,black 60%)",
        }}
      >
        <About />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
