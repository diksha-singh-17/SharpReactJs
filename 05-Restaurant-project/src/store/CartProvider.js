import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);

  const addItemToCartHandler = (item) => {
    setItem([...items, item]);
  };
  const deleteItemFromCartHandler = (id) => {
    // minus -1 quantity from the cart
    let newItems = items.map((i) => {
      if (i.id === id) {
        return { ...i, quantity: i.quantity - 1 };
      } else {
        return i;
      }
    });
    // remove completely if no more left in stock
    newItems = newItems.filter((i) => i.quantity > 0);
    setItem(newItems);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
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
