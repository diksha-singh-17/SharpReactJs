import React, { useContext } from "react";
import CartContext from "../store/CartContext";

const CartButton = () => {
  const { cartToggle, totalQuantity } = useContext(CartContext);
  console.log("inside cartbutton", totalQuantity);

  return (
    <button
      className="text-white ring-green-700 bg-green-950 hover:ring-2 rounded-lg px-4 py-2"
      onClick={cartToggle}
    >
      <span>🛒Cart</span>
      <span className=""> ({totalQuantity})</span>
    </button>
  );
};

export default CartButton;
