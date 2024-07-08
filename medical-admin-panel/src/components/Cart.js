import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../store/CartContext";

const Cart = () => {
  const { cartToggle } = useContext(CartContext);
  const DUMMY = [
    {
      name: "abc",
      desc: "qwe",
      quantity: 1,
      price: 12,
      id: "12",
      totalPrice: 567,
    },
    {
      name: "abcdef",
      desc: "qwerty",
      quantity: 123,
      price: 78,
      id: "90",
      totalPrice: 345,
    },
    {
      name: "abcd",
      desc: "qwhje",
      quantity: 18,
      price: 178,
      id: "901",
      totalPrice: 123,
    },
  ];
  const { items } = useContext(CartContext);
  console.log(items);

  return (
    <div className="m-4 0 shadow-2xl p-4 w-[90%] max-w-xl">
      <h2 className="m-2 text-green-950 font-bold text-xl">Your Cart</h2>
      <ul className="p-0 m-0 divide-y-2 divide-solid  divide-green-950">
        {items?.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={{
                name: item.name,
                desc: item.description,
                quantity: item.quantity,
                price: item.price,
                id: item.id,
                total: item.totalPrice,
              }}
            />
          );
        })}
      </ul>
      <button
        className="hover:translate-x-6 bg-green-950 ring-white ml-2 text-white hover:bg-green-900 active:bg-green-800 px-6 transition duration-150 ease-out hover:ease-in rounded-md py-1"
        onClick={cartToggle}
      >
        Close
      </button>
      {/* <div class="flex justify-center -space-x-14">
        <div class="mix-blend-multiply bg-green-600 ">you are the best</div>
        <div class="mix-blend-multiply bg-yellow-300 ">
          me and you makes perfect goal
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
