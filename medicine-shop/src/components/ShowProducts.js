import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../store/CartContext";

const ShowProducts = () => {
  const cartCntxt = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState();
  const addItemToCartHandler = (name, desc, price, quantity, id) => {
    cartCntxt.addToCart({
      name: name,
      desc: desc,
      price: price,
      quantity: quantity - 1,
      id: id,
    });
    console.log(cartCntxt);
  };

  useEffect(() => {
    setProducts(products);
    setQuantity(products.quantity - 1);
    fetch(
      "https://crudcrud.com/api/f9af62288dc54241a9d59824b3d511e9/medicine-shop"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="d-flex justify-content-around m-2 p-2">
        <h2>Name</h2>
        <h2>Description</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
      </div>

      <div>
        {products.map((item) => {
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
