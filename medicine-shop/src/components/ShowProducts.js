import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../store/CartContext";

const ShowProducts = (props) => {
  const cartCntxt = useContext(CartContext);
  const [products, setProducts] = useState(props.products);
  const [cart, setCart] = useState([props.products]);

  useEffect(() => {
    setProducts(products);

    setCart(cartCntxt.items);
  }, []);

  const addItemToCartHandler = (name, desc, price, quantity, id) => {
    cartCntxt.addToCart({
      name: name,
      desc: desc,
      price: price,
      quantity: quantity,
      id: id,
    });
    console.log(cartCntxt);
    console.log("products", products);
    //
    const menuItem = products.find((item) => item._id === id);
    console.log("menuItem", menuItem);
    if (!menuItem || menuItem.quantity === 0 || menuItem.quantity === "0") {
      alert("Item out of stock!");
      return;
    }
    const updatedMenuItems = products.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    console.log(updatedMenuItems, "updated");
    setProducts(updatedMenuItems);

    const existingItemIndex = products.findIndex((item) => item._id === id);
    console.log(existingItemIndex, cart);
    if (existingItemIndex !== -1) {
      // If item exists in the cart, update its quantity
      const updatedCart = [...products];
      console.log(updatedCart);

      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      console.log(updatedCart, "up-next");
    } else {
      // If item doesn't exist in the cart, add it
      const updatedCart = [...products, { ...products, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  return (
    <div>
      {console.log(cartCntxt.items)}
      <h1>Products</h1>
      <div className="d-flex justify-content-around m-2 p-2">
        <h2>Name</h2>
        <h2>Description</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
      </div>

      <div>
        {products.length === 1
          ? props.products.map((item) => {
              return (
                <div
                  className="d-flex justify-content-around m-2 p-2"
                  key={item._id}
                >
                  <h3>{item.name}</h3>
                  <h3>{item.desc}</h3>
                  <h3>{item.price}</h3>
                  <h3>{item.quantity}</h3>
                  <Button
                    onClick={() =>
                      addItemToCartHandler(
                        item.name,
                        item.desc,
                        item.price,
                        item.quantity,
                        item._id
                      )
                    }
                  >
                    Add
                  </Button>
                </div>
              );
            })
          : products.map((item) => {
              return (
                <div
                  className="d-flex justify-content-around m-2 p-2"
                  key={item._id}
                >
                  <h3>{item.name}</h3>
                  <h3>{item.desc}</h3>
                  <h3>{item.price}</h3>
                  <h3>{item.quantity}</h3>
                  <Button
                    onClick={() =>
                      addItemToCartHandler(
                        item.name,
                        item.desc,
                        item.price,
                        item.quantity,
                        item._id
                      )
                    }
                  >
                    Add
                  </Button>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ShowProducts;
