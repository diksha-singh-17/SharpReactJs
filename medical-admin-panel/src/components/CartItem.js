import React, { useContext } from "react";
import CartContext from "../store/CartContext";

const CartItem = (props) => {
  const { name, price, quantity, id, total } = props.item;
  const { addToCart, deleteFromCart } = useContext(CartContext);
  console.log(props.item);
  const increaseQuantityHandler = () => {
    addToCart({ id, name, price });
  };
  const decreaseQuantityHandler = () => {
    deleteFromCart(id);
  };
  return (
    <li className=" p-4 m-4 ">
      <header className="flex justify-between items-baseline">
        <h3 className="font-semibold hover:rotate-45">{name}</h3>
        <div className="font-bold">
          <p className="text-red-800">${price}</p>${total.toFixed(2)}{" "}
          <span className="">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="flex justify-between items-center ">
        <div className="font-bold text-lg">
          x <span>{quantity}</span>
        </div>
        <div className="flex justify-end m-1 ">
          <button
            className="bg-green-950 ring-white ml-2 text-white hover:bg-green-900 active:bg-green-800 px-4 rounded-md py-1  "
            onClick={decreaseQuantityHandler}
          >
            -
          </button>
          <button
            className="bg-green-950 ring-white ml-2 text-white hover:bg-green-900 active:bg-green-800 px-4 rounded-md py-1  "
            onClick={increaseQuantityHandler}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
