

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Cards from "./components/cards";
import CategoryDropdown from "./components/categoryDropdown";
import CategoryProductCards from "./components/CategoryProductCards";
import CartBox from "./components/checkoutbox";
import Contact from "./components/contaact";
import AboutUs from "./components/Aboutus";
import TermsAndConditions from "./components/TermsandConditions";
import Faq from "./components/Faq";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Fresh Fruits");

  // Add to Cart logic
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.name === product.name);
      if (exists) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleIncrement = (name) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (name) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handleRemove = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };



  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* Home Page Layout */}
          <Route
            path="/"
            element={
              <>
                     <Home onSearch={setSelectedCategory} />
                <Cards />
                <div className="min-h-screen flex flex-col md:flex-row">
                  <CategoryDropdown onSelectCategory={setSelectedCategory} />
                  <div id="shop" className="relative flex-1 px-4">
                    <CategoryProductCards
                      selectedCategory={selectedCategory}
                      cartItems={cartItems}
                      onAddToCart={handleAddToCart}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      
                    />
                    <CartBox
                      cartItems={cartItems}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                      onRemove={handleRemove}
                    />
                  </div>
                </div>
                <Faq />
                <Contact />
                <div className="text-center text-sm bg-[#00996e] text-white py-4">
                  © {new Date().getFullYear()} <span className="font-semibold">PicBazar</span>. All rights reserved.
                </div>

              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
