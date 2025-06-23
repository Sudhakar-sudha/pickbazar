import { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Use Heroicons/React Icons if needed

const cardData = [
  {
    title: "Express Delivery",
    description: "with selected items",
    image: "/fastdelivery.png",
    button: "Save Now",
  },
  {
    title: "Cash On Delivery",
    description: "with selected items",
    image: "/cashondelivery.png",
    button: "Save Now",
  },
  {
    title: "Gift Voucher",
    description: "with personal card items ",
    image: "/giftbox.png",
    button: "Shop Coupons",
  },
  {
    title: "Express Delivery",
    description: "with selected items",
    image: "/fastdelivery.png",
    button: "Save Now",
  },
  {
    title: "Cash On Delivery",
    description: "with selected items",
    image: "/cashondelivery.png",
    button: "Save Now",
  },
  {
    title: "Gift Voucher",
    description: "with personal card items ",
    image: "/giftbox.png",
    button: "Shop Coupons",
  },
];

const Cards = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cardData.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + cardData.length) % cardData.length
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(cardData[(startIndex + i) % cardData.length]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full px-4 py-8 overflow-hidden">

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white cursor-pointer p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards Row */}
        <div className="flex gap-4 h-56 transition-all duration-700 ease-in-out">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 min-w-[280px] bg-cover bg-center rounded-xl shadow-lg flex items-center justify-start p-6"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              <div className="p-4 rounded-md w-[70%]">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <h5 className="text-sm font-semibold text-white mt-3">
                  {card.description}
                </h5>
                <button className="mt-5 bg-white text-black px-4 py-2 rounded hover:bg-[#00b386] cursor-pointer transition ">
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Cards;