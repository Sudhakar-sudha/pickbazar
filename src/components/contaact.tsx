import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white text-gray-800 py-16 px-6 md:px-20 md:py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info and Quick Links */}
        <div>
          <h2 className="text-3xl font-bold text-[#00b386] mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Reach out to us for any queries, feedback, or support. We're happy to help you!
          </p>

          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-[#00b386]" size={18} />
              support@picbazar.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#00b386]" size={18} />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-[#00b386]" size={18} />
              123, Market Street, Sivakasi, Tamil Nadu - 626123
            </li>
          </ul>

          {/* Quick Links */}
          <div className="mt-10">
            <h3 className="font-semibold text-lg text-[#00b386] mb-3">Quick Links</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/" className="hover:underline text-gray-700">Home</a>
              <a href="#offers" className="hover:underline text-gray-700">Offers</a>
              <a href="#shops" className="hover:underline text-gray-700">Shop</a>
              <a href="#about" className="hover:underline text-gray-700">About Us</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-[#00b386] hover:scale-110 transition">
              <Facebook />
            </a>
            <a href="#" className="text-[#00b386] hover:scale-110 transition">
              <Twitter />
            </a>
            <a href="#" className="text-[#00b386] hover:scale-110 transition">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-[#00b386]">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#00b386]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#00b386]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#00b386]"
            />
            <button
              type="submit"
              className="bg-[#00b386] text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
