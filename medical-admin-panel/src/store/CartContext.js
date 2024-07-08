import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCartVisible: false,
  replaceItems: (item) => {},
  cartToggle: () => {},
  addToCart: (item) => {},
  deleteFromCart: (id) => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const toggleCartHandler = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  const replaceItemsHandler = (storedItem) => {
    setItems(storedItem);
  };
  const addItemToCartHandler = (newItem) => {
    console.log("Adding item to cart:", newItem);

    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        console.log("Item exists, updating quantity");
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
          totalPrice: existingItem.totalPrice + newItem.price,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        console.log("Item does not exist, adding new item");
        const newItemWithQuantity = {
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        };
        updatedItems = prevItems.concat(newItemWithQuantity);
        // Directly mutating prevItems
        updatedItems = [...prevItems]; // shallow copy
        updatedItems.push(newItemWithQuantity); // adds new item in the array
      }

      return updatedItems;
    });

    setTotalPrice((prevTotalPrice) => {
      const newTotalPrice = prevTotalPrice + newItem.price;
      console.log("Updated totalPrice:", newTotalPrice);
      return newTotalPrice;
    });

    setTotalQuantity((prevTotalQuantity) => {
      const newTotalQuantity = prevTotalQuantity + 1;
      console.log("Updated totalQuantity:", newTotalQuantity);
      return newTotalQuantity;
    });
  };

  const deleteItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem.quantity === 1) {
        updatedItems = prevItems.filter((item) => item.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          totalPrice: existingItem.totalPrice - existingItem.price,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }

      setTotalPrice((prevTotalPrice) => prevTotalPrice - existingItem.price);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);

      return updatedItems;
    });
  };

  const cartValue = {
    items,
    totalPrice,
    totalQuantity,
    isCartVisible,
    replaceItems: replaceItemsHandler,
    cartToggle: toggleCartHandler,
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
