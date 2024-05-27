import React from "react";
import { useState } from "react";

const CartContext = React.createContext({
  items: [],
  addToCart: (item) => {},
  deleteFromCart: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
  };

  const deleteItemFromCartHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const cartValue = {
    items: items,
    addToCart: addItemToCartHandler,
    deleteFromCart: deleteItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
