import React, { useEffect } from "react";
import Portal from "./Portal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/CartReducer";

const Cart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const checkoutItemsHandler = async () => {
    console.log(cartItem);
    await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-cart.json",
      {
        method: "POST",
        body: JSON.stringify(cartItem),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    navigate("/checkout");
  };

  const decreaseQuantityHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!isOpen) return null;
  return (
    <Portal containerId="cart-root">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div
          className="text-white p-8 rounded shadow-lg max-w-md w-full"
          style={{ backgroundColor: "rgb(35, 39, 54" }}
        >
          <h2
            className="text-xl font-bold mb-4 text-center"
            style={{ color: "rgb(122, 156, 68)" }}
          >
            Cart
          </h2>
          {cartItem.length === 0 ? (
            <div className="text-center text-lg"></div>
          ) : (
            <h2
              className="text-xl font-bold mb-4 text-right"
              style={{ color: "rgb(122, 156, 68)" }}
            >
              ${totalPrice}
            </h2>
          )}
          {cartItem.length === 0 ? (
            <div className="text-center text-lg">No items to preview</div>
          ) : (
            <ul>
              {cartItem.map((item, index) => (
                <li className="border-b p-2 flex justify-between" key={index}>
                  <h1>{item.name}</h1>
                  <p>
                    ${item.price} - {item.quantity}x
                  </p>
                  <button
                    onClick={() => decreaseQuantityHandler(item.id)}
                    className="text-3xl mb-4 text-center"
                    style={{ color: "rgb(122, 156, 68)" }}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 mx-2  text-white rounded"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
              onClick={checkoutItemsHandler}
            >
              Checkout
            </button>
            <button
              className="px-4 py-2  text-white rounded"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Cart;
