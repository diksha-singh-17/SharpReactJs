import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);

  const addItemToCartHandler = (item) => {
    setItem([...items, item]);
  };
  const deleteItemFromCartHandler = (id) => {
    console.log(items);

    setItem(items.filter((x) => x.id !== id));
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
