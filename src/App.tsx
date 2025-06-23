// import Cards from './components/cards'
// import CategoryDropdown from './components/categoryDropdown'
// import CategoryProductCards from './components/CategoryProductCards'
// import Home from './components/home'
// import Navbar from './components/navbar'
// import CartBox from './components/cartBox'
// import { useState } from "react";
// function App() {
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Fresh Fruits");

//   const handleAddToCart = (product) => {
//     setCartItems((prev) => [...prev, product]);
//   };



//   return (
//     <>
//     <Navbar/>
//     <Home/>
//     <Cards/>
//        <div className="min-h-screen flex flex-col md:flex-row ">
//       <CategoryDropdown onSelectCategory={setSelectedCategory} />
//         <div className="relative min-h-screen">
//       <h1 className="text-2xl font-bold text-center mt-6">🛍️ Pick Your Products</h1>

//       {/* Render products by category */}
//       <CategoryProductCards
//         selectedCategory={selectedCategory}
//         onAddToCart={handleAddToCart}
//       />

//       {/* Sticky cart box */}
//       <CartBox cartItems={cartItems} />
//     </div>
//     </div>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Cards from "./components/cards";
import CategoryDropdown from "./components/categoryDropdown";
import CategoryProductCards from "./components/CategoryProductCards";
import CartBox from "./components/checkoutbox";

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
      <Navbar />
      <Home />
      <Cards />

      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Category List */}
        <CategoryDropdown onSelectCategory={setSelectedCategory} />

        {/* Right Side - Products & Cart */}
        <div className="relative flex-1 px-4">  

          <CategoryProductCards
            selectedCategory={selectedCategory}
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />

          {/* Sticky Cart */}
          <CartBox cartItems={cartItems}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
              onRemove={handleRemove}
          />
        </div>
      </div>
    </>
  );
}

export default App;
