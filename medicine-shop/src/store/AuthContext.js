import React, { useState } from "react";

const AuthContext = React.createContext({
  products: [],
  addProduct: (item) => {},
  deleteProduct: (id) => {},
});

export const AuthContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addProductHandler = (item) => {
    setItems([...items, item]);

    fetch(
      "https://crudcrud.com/api/f9af62288dc54241a9d59824b3d511e9/medicine-shop",
      {
        method: "POST",
        body: JSON.stringify({
          name: item.name,
          price: item.price,
          desc: item.desc,
          quantity: item.quantity,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deleteProductHandler = (id) => {
    console.log(id, items);
    setItems(items.filter((item) => item.id !== id));
  };

  const productContext = {
    products: items,
    addProduct: addProductHandler,
    deleteProduct: deleteProductHandler,
  };
  return (
    <AuthContext.Provider value={productContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
