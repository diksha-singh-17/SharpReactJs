import React from "react";
import Portal from "./Portal";

const Cart = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Portal containerId="cart-root">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div
          className="text-white p-8 rounded shadow-lg max-w-md w-full"
          style={{ backgroundColor: "rgb(35, 39, 54" }}
        >
          <h2
            className="text-xl font-bold mb-4 text-center"
            style={{ color: "rgb(122, 156, 68)" }}
          >
            Cart
          </h2>
          <ul>
            {/* {items.map((item, index) => ( */}
            <li className="border-b py-2">joy-happy 40</li>
            {/* ))} */}
          </ul>
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 mx-2  text-white rounded"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              Checkout
            </button>
            <button
              className="px-4 py-2  text-white rounded"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Cart;
