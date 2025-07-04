import React from "react";
import categoriesData from "../data/fruits.json";
import {
  Apple,
  Drumstick,
  Cookie,
  PawPrint,
  SprayCan,
  Milk,
  Soup,
  Croissant,
  Wine
} from "lucide-react";

const categoryIcons = {
  "Fruits and Vegetables": <Apple size={20} />,
  "Meats and Fish": <Drumstick size={20} />,
  "Snacks": <Cookie size={20} />,
  "Pet Care": <PawPrint size={20} />,
  "Home and Cleaning": <SprayCan size={20} />,
  "Dairy": <Milk size={20} />,
  "Cooking": <Soup size={20} />,
  "Breakfast": <Croissant size={20} />,
  "Beverage": <Wine size={20} />,
};

const CategoryDropdown = ({ onSelectCategory }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <section id="shops">
    <div className="max-w-80 min-h-screen bg-white p-3">
      <div className="space-y-4">
        {categoriesData.categories.map((category, index) => (
          <div key={index} className="bg-white rounded">
            <button
              className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-black hover:bg-green-100"
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            >
              <span className="flex items-center gap-2">
                {categoryIcons[category.title]}
                {category.title}
              </span>
              <span className="ml-5">{activeIndex === index ? "▲" : "▼"}</span>
            </button>

            {activeIndex === index && (
              <div className="px-6 py-3 space-y-2 bg-gray-50">
                {category.subcategories.map((sub, i) => (
                  <div
                    key={i}
                    onClick={() => onSelectCategory(sub)}
                    className="text-gray-700 hover:text-green-600 cursor-pointer"
                  >
                    • {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CategoryDropdown;
