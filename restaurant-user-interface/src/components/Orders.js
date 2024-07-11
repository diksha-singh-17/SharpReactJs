import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Orders = () => {
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
        <div className="p-2 ">
          <ul>
            <li
              className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              <h1 className="text-2xl">Sandwich</h1>
              <p>status</p>
              <p>$price</p>
            </li>
            <li
              className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              <h1 className="text-2xl">Sandwich</h1>
              <p>status</p>
              <p>$price</p>
            </li>
            <li
              className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              <h1 className="text-2xl">Sandwich</h1>
              <p>status</p>
              <p>$price</p>
            </li>
          </ul>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default Orders;
