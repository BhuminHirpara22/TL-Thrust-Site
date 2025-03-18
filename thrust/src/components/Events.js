import Image from 'next/image';
import SilentDj from "../../public/images/silent_dj.png"
import RoboWars from "../../public/images/robo_wars.png"
import AutoExpo from "../../public/images/auto_expo.png"
import Qawali from "../../public/images/qawali.png"

export default function Events() {
  return (
    <section id="events" className="bg-black text-white p-10">
      <h2 className="text-4xl font-bold mb-8">EVENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative group">
          <Image src={SilentDj} alt="Silent DJ" className="w-full rounded-lg group-hover:opacity-80 transition" />
          <h3 className="text-2xl font-bold mt-4">Silent DJ</h3>
        </div>
        <div className="relative group">
          <Image src={RoboWars} alt="Robo Wars" className="w-full rounded-lg group-hover:opacity-80 transition" />
          <h3 className="text-2xl font-bold mt-4">Robo wars</h3>
        </div>
        <div className="relative group">
          <Image src={AutoExpo} alt="Auto Expo" className="w-full rounded-lg group-hover:opacity-80 transition" />
          <h3 className="text-2xl font-bold mt-4">Auto expo</h3>
        </div>
        <div className="relative group">
          <Image src={Qawali} alt="Qawali" className="w-full rounded-lg group-hover:opacity-80 transition" />
          <h3 className="text-2xl font-bold mt-4">Qawali</h3>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <a href="/events" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">MORE ➤</a>
      </div>
    </section>
  );
}
