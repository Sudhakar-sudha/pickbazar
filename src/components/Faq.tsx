import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is PicBazar?",
    answer: "PicBazar is an online marketplace where you can shop for groceries, fresh produce, and daily essentials from local stores.",
  },
  {
    question: "How do I place an order?",
    answer: "Browse through our product categories, add items to your cart, and proceed to checkout. You can choose your preferred delivery address and payment method.",
  },
  {
    question: "Is home delivery available?",
    answer: "Yes! We offer home delivery for all orders. Delivery time may vary depending on your location and the seller.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support multiple payment methods including UPI, debit/credit cards, net banking, and cash on delivery (COD) where available.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "You can cancel or modify your order before it is confirmed or dispatched. Once the order is shipped, modifications are not allowed.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach out to us via the Contact page or email us at support@picbazar.com.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-[#00b386] mb-8">
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border border-gray-200 rounded-lg shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-[#00b386]" />
            ) : (
              <ChevronDown className="text-[#00b386]" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 text-sm text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    </section>
  );
};

export default Faq;
