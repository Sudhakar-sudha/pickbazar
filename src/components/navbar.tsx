import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // For icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGrocery, setShowGrocery] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shops", href: "#" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];

  const pagesDropdown = [
    { name: "About Us", href: "#about" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "FAQ", href: "#faq" },
  ];

  const groceryDropdown = [
    { name: "Fruits", href: "#fruits" },
    { name: "Vegetables", href: "#vegetables" },
    { name: "Beverages", href: "#beverages" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Heading + Grocery */}
          <div className="flex items-center space-x-4">
            <img
              src="/titlelogo.png"
              alt="Logo"
              className="h-10 w-10 object-cover"
            />
            <h1 className="text-xl font-bold text-gray-800">PickBazar</h1>

            {/* Grocery Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowGrocery(!showGrocery)}
                className=" text-green-700 px-4 py-1 rounded border-2 border-green-400 flex items-center space-x-1 cursor-pointer"
              >
                <span>Grocery</span>
                <ChevronDown size={18} />
              </button>
              {showGrocery && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow-md w-40 z-50">
                  {groceryDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowPages(!showPages)}
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-1 cursor-pointer"
              >
                <span>Pages</span>
                <ChevronDown size={18} />
              </button>
              {showPages && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow-md w-40 z-50 ">
                  {pagesDropdown.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <button className="bg-[#00b386] text-white px-4 py-2 rounded hover:bg-green-100 hover:text-black  border-2 hover:border-green-700 cursor-pointer">
              Join
            </button>
            <button className="bg-[#00b386] text-white px-4 py-2 rounded hover:bg-green-100 hover:text-black border-2 hover:border-green-700 cursor-pointer">
              Become a Seller
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none cursor-pointer pl-11"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {/* Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-800 font-medium hover:text-green-600 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Pages Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setShowPages(!showPages)}
              className="w-full text-left text-gray-800 font-medium flex items-center justify-between hover:text-green-600 transition cursor-pointer"
            >
              Pages
              <ChevronDown
                size={18}
                className={`transition-transform ${showPages ? "rotate-180" : ""
                  }`}
              />
            </button>

            {showPages && (
              <div className="mt-2 ml-4 space-y-2">
                {pagesDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-600 hover:text-green-500 transition cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button className="w-full bg-[#00b386] text-white px-4 py-2 rounded hover:bg-green-400 transition cursor-pointer">
              Join
            </button>
            <button className="w-full bg-[#00b386] text-white px-4 py-2 rounded hover:bg-green-400 transition cursor-pointer">
              Become a Seller
            </button>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
