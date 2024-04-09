import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default CartContext;
