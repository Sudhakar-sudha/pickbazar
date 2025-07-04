import React from "react";
import { FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";
import founderImg from "../assets/man.png"; // Replace with your actual image
import founderImg2 from "../assets/titlelogo.png"; // Replace with your actual image

const AboutUs = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Intro */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#00b386] mb-4">About PicBazar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PicBazar is your one-stop online shop for fresh groceries, daily essentials,
            and local store convenience — all at your fingertips.
          </p>
        </div>

        {/* Mission & Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#00b386]">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              We aim to empower local vendors and small-scale sellers by providing
              them with a digital platform to reach customers efficiently. With
              fast delivery, competitive pricing, and a simple interface,
              PicBazar connects you with your neighborhood stores in a smarter way.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#00b386]" />
                Fresh fruits and vegetables delivered to your door.
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#00b386]" />
                Support for local sellers and startups.
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-[#00b386]" />
                Easy ordering with safe and secure payments.
              </li>
            </ul>
          </div>

          {/* Illustration or Image */}
          <img
            src={founderImg2}
            alt="Grocery Shopping"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Founder Section */}
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center gap-8">
          <img
            src={founderImg}
            alt="Founder"
            className="h-40 w-40 object-cover rounded-full shadow-md"
          />
          <div>
            <h4 className="text-xl font-bold text-[#00b386]">Sudhakar</h4>
            <p className="text-sm text-gray-600 mb-2">Founder & CEO, PicBazar</p>
            <p className="text-gray-700">
              With a passion for tech and local development, I started PicBazar to
              help our community vendors grow and to bring fresh, affordable products
              to every doorstep.
            </p>
          </div>
        </div>

        {/* Stats or Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
          <div>
            <FaRocket className="mx-auto text-[#00b386] text-3xl mb-2" />
            <h5 className="text-lg font-semibold">Fast Delivery</h5>
            <p className="text-sm text-gray-500">Within 60 minutes</p>
          </div>
          <div>
            <FaUsers className="mx-auto text-[#00b386] text-3xl mb-2" />
            <h5 className="text-lg font-semibold">1K+ Happy Users</h5>
            <p className="text-sm text-gray-500">Across Tamil Nadu</p>
          </div>
          <div>
            <FaCheckCircle className="mx-auto text-[#00b386] text-3xl mb-2" />
            <h5 className="text-lg font-semibold">Trusted Vendors</h5>
            <p className="text-sm text-gray-500">100+ Partnered Shops</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
