import { FaSearch } from "react-icons/fa";

const Home = () => {
    return (
        <section
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


                {/* Search Box */}
                <div className="mt-16 flex sm:flex-row items-center justify-center px-4 gap-0 sm:gap-0 max-w-3xl mx-auto w-full">
                    {/* Input - 3/4 width */}
                    <div className="w-full sm:basis-3/4">
                        <input
                            type="text"
                            placeholder="Search for products from here"
                            className="w-full px-4 py-3 text-black border-2 border-white shadow-2xl rounded-l-2xl outline-none bg-white"
                        />
                    </div>

                    {/* Button - 1/4 width */}
                    <button className=" sm:basis-1/4 bg-[#00b386] hover:bg-green-700 text-white px-6 py-3 rounded-r-2xl transition cursor-pointer flex items-center justify-center gap-2">
                        <FaSearch className="text-white" />
                        Search
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Home;
