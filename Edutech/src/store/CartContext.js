import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  addToCart: (item) => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (newItem) => {
    console.log("Adding item to cart:", newItem);

    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const newItemWithQuantity = {
          ...newItem,
        };
        updatedItems = prevItems.concat(newItemWithQuantity);
        // Directly mutating prevItems
        updatedItems = [...prevItems]; // shallow copy
        updatedItems.push(newItemWithQuantity); // adds new item in the array
      }

      return updatedItems;
    });
  };

  const cartValue = {
    items,
    addToCart: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
