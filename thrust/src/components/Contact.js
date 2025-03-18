export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white p-10">
      <h2 className="text-3xl font-bold">CONTACT US</h2>
      <div className="mt-4">
        <p>Email: <a href="mailto:tinkerers.iiit@gmail.com" className="text-orange-500">tinkerers.iiit@gmail.com</a></p>
        <p>Phone: <a href="tel:+4215547897" className="text-orange-500">+4215547897</a></p>
        <p>Address: Something, Something</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-orange-500">Facebook</a>
        <a href="#" className="text-orange-500">Instagram</a>
        <a href="#" className="text-orange-500">LinkedIn</a>
      </div>
    </section>
  );
}