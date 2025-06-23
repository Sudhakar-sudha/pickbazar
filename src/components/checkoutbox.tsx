import { useState } from "react";
import { X, ShoppingBag, Plus, Minus } from "lucide-react";

const CartBox = ({ cartItems, onIncrement, onDecrement, onRemove }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.length; // total products
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.offer_price, 0);

  return (
    <>
      {/* Floating Mini Cart Box */}
      <div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 border shadow-lg rounded-lg cursor-pointer z-50"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-2 text-[#00b386] font-semibold">
          <div className="bg-[#00b386] text-white rounded-lg px-4 py-6 w-32 shadow-lg">
            {/* Top row: icon + items */}
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} />
              <span>{totalItems} Items</span>
            </div>
            {/* Bottom row: price */}
            <div className="mt-3 bg-white text-[#00b386] font-semibold text-center py-1 rounded">
              ₹{totalPrice}
            </div>
          </div>
        </div>
      </div>

      {/* Side Panel */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-[90%] sm:w-[400px] h-full bg-white shadow-xl z-50 transition-all duration-300 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-xl font-bold text-[#00b386]">
              <ShoppingBag size={20} />
              <span>{totalItems} Items</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black bg-gray-300 rounded-2xl p-2 cursor-pointer hover:text-red-600"
            >
              <X size={18} />
            </button>
          </div>

          {/* Items */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500 px-4">Your cart is empty.</p>
          ) : (
            <div className="space-y-4 overflow-y-auto px-5 pr-3 flex-1">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start pb-3 relative"
                >
                  {/* Quantity Controls */}
                  <div className="flex flex-col items-center gap-1 bg-gray-200 rounded-4xl p-1">
                    <button
                      onClick={() => onIncrement(item.name)}
                      className="bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-green-200 cursor-pointer"
                    >
                      <Plus size={14} />
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => onDecrement(item.name)}
                      className="bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-red-200 cursor-pointer"
                    >
                      <Minus size={14} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-[#00b386] font-bold">₹{item.offer_price}</p>
                    <p className="text-xs text-gray-500">
                      {item.quantity} × ({item.quantityLabel || "1kg"})
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(item.name)} // ✅ Full removal
                    className="absolute top-5 right-1 text-gray-400 hover:text-red-500 cursor-pointer"
                    title="Remove item"
                  >
                    ✕
                  </button>

                  {/* Total Price */}
                  <p className="text-sm font-semibold text-black absolute top-5 right-14">
                    ₹{item.offer_price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="p-4">
            <button className="w-full flex justify-between items-center bg-[#00b386] text-white py-2 px-4 rounded-3xl hover:bg-green-700 transition">
              <span className="text-lg font-medium">Checkout</span>
              <span className="bg-white text-[#00b386] text-sm font-semibold px-6 py-2 rounded-3xl shadow-sm">
                ₹{totalPrice}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBox;
