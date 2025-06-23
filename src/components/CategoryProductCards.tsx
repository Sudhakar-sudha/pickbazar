import { useState } from "react";
import categoriesData from "../data/categories-select.json";
import { ShoppingBag } from "lucide-react";

const CategoryProductCards = ({
  selectedCategory = "Fresh Fruits",
  cartItems,
  onAddToCart,
  onIncrement,
  onDecrement,
}) => {
  const [visibleCount, setVisibleCount] = useState(8); // 2 rows of 4 cards

  const selectedProducts =
    categoriesData.categories.find((cat) => cat.name === selectedCategory)?.products || [];

  const getCartQuantity = (name) =>
    cartItems.find((item) => item.name === name)?.quantity || 0;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8); // Show 2 more rows (8 more items)
  };

  const visibleProducts = selectedProducts.slice(0, visibleCount);

  return (
    <div className="flex-1 px-4 py-8 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleProducts.map((product, idx) => {
          const quantity = getCartQuantity(product.name);
          return (
            <div key={idx} className="bg-white rounded-lg shadow-lg relative overflow-hidden">
              {product.offer && (
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  {product.offer}
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.quantity}</p>
              </div>

              <div className="flex items-center justify-between px-4 pb-4">
                <div>
                  <span className="text-sm line-through text-gray-400">
                    ₹{product.original_price}
                  </span>
                  <div className="text-[#00b386] font-semibold text-lg">
                    ₹{product.offer_price}
                  </div>
                </div>

                {quantity === 0 ? (
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex items-center gap-2 hover:bg-[#00b386] text-[#00b386] px-4 py-2 rounded-4xl cursor-pointer bg-white hover:text-white border border-gray-300 transition"
                  >
                    <ShoppingBag size={18} />
                    Cart
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-[#00b386] rounded-4xl">
                    <button
                      onClick={() => onDecrement(product.name)}
                      className="px-3 py-2 bg-[#00b386] text-gray-800 rounded-4xl cursor-pointer"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => onIncrement(product.name)}
                      className="px-3 py-2 bg-[#00b386] text-gray-800 rounded-4xl cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < selectedProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-[#00b386] hover:bg-green-700 text-white px-6 py-2 rounded-full transition cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryProductCards;
