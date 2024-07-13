import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Orders = () => {
  const [orderedItem, setIsorderedItem] = useState();
  const currentDateTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const fetchCartData = async () => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-cart.json"
    );
    const data = await response.json();

    setIsorderedItem(Object.values(data).flat());
  };
  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: "rgb(35, 39, 54" }}
        className="h-full p-20 m-8 rounded-full"
      >
        <h1
          className="text-center text-3xl  font-semibold"
          style={{ color: "rgb(122, 156, 68)" }}
        >
          My Orders
        </h1>
        <h3 className="font-semibold" style={{ color: "rgb(122, 156, 68)" }}>
          {currentDateTime}
        </h3>
        <div className="p-2 ">
          <ul>
            {orderedItem?.map((item) => {
              return (
                <li
                  className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
                  style={{ backgroundColor: "rgb(254, 161, 22)" }}
                >
                  <h1 className="text-2xl">
                    {item?.name} x{item?.quantity}
                  </h1>
                  <p>{item?.status}</p>
                  <p>${item?.totalPrice}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default Orders;
