"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional: for arrow icons

export interface Category {
  title: string;
  subcategories: string[];
}

export interface CategoryData {
  categories: Category[];
}

export default function MarksPage() {
  const [data, setData] = useState<CategoryData | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/fruits")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const toggleDropdown = (title: string) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  if (!data) return <p className="p-10 text-gray-600">Loading...</p>;

  return (
    <div className="p-10 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
     Categories
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {data.categories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(category.title)}
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {category.title}
              </h2>
              {openCategory === category.title ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>

            {openCategory === category.title && (
              <ul className="mt-4 space-y-2 ml-2 list-disc list-inside text-gray-700">
                {category.subcategories.map((subcat) => (
                  <li key={subcat}>{subcat}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
