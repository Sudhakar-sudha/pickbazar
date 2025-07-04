import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Home = ({ onSearch }) => {

    const [query, setQuery] = useState("");
    const handleSearch = () => {
        const input = query.toLowerCase().trim();

        // Map keywords to categories
        const categoryMap = {
            fruits: "Fresh Fruits",
            vegetables: "Fresh Vegetables",
            meat: "Meats and Fish",
            fish: "Meats and Fish",
            snacks: "Snacks",
            dairy: "Dairy",
            cooking: "Cooking",
            breakfast: "Breakfast",
            beverage: "Beverage",
        };

        const matched = categoryMap[input];
        if (matched) {
            onSearch(matched); // ✅ this updates selectedCategory in App
            // Optional: Scroll to the shop section
            const shopSection = document.getElementById("shop");
            if (shopSection) shopSection.scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Category not found. Try keywords like 'fruits', 'snacks', etc.");
        }
    };
    return (
        <section id="/"
            className="h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/bg.png')" }} // Replace with your image path
        >
            <div className="text-center px-4  md:-mt-20 mt-10">
                <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg text-black ">
                    Groceries Delivered in 90 Minutes
                </h1>
                <p className="mt-16 text-lg md:text-lg drop-shadow-sm text-black ">
                    Get your healthy foods & snacks delivered at your doorstep all day, every day.
                </p>


                <div className="flex w-full max-w-xl shadow-lg rounded-2xl overflow-hidden">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search categories like fruits, dairy, etc..."
                        className="flex-1 px-4 py-3 outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-[#00b386] text-white px-6 py-3 hover:bg-green-600 flex items-center gap-2"
                    >
                        <FaSearch />
                        Search
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Home;
