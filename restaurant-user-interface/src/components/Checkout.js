import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Checkout = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const checkoutItemsHandler = () => {
    setIsCheckout(true);
  };
  return (
    <>
      <Header />
      <div className="h-screen " style={{ backgroundColor: "rgb(35, 39, 54" }}>
        <h1
          className="text-3xl font-bold text-center p-4 mb-4 "
          style={{ color: "rgb(122, 156, 68)" }}
        >
          Checkout
        </h1>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid sm-grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center items-center "
          >
            <input
              type="text"
              placeholder="Enter Name"
              className="m-4 p-2 rounded-lg w-96"
            />
            <textarea
              placeholder="Enter Address"
              className="m-4 p-2 rounded-lg w-96"
              rows="3"
              cols="25"
            ></textarea>
            <input
              type="text"
              placeholder="Enter City"
              className="m-4 p-2 rounded-lg w-96"
            />
            <input
              type="text"
              placeholder="Enter State"
              className="m-4 p-2 rounded-lg w-96"
            />
            <input
              type="text"
              placeholder="Enter Pincode"
              className="m-4 p-2 rounded-lg w-96"
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="m-4 p-2 rounded-lg w-96"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="m-4 p-2 rounded-lg w-96"
            />
            <div>
              <input type="radio" name="payment" />
              <label className="text-white mx-2 font-semibold text-2xl">
                COD
              </label>
              <input type="radio" name="payment" />
              <label className="text-white mx-2 font-semibold text-2xl ">
                UPI
              </label>
            </div>
          </form>
          {isCheckout && (
            <p
              className="text-xl font-bold text-center"
              style={{ color: "rgb(122, 156, 68)" }}
            >
              Order Placed successfully!!
            </p>
          )}
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 mx-2  text-white rounded"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
              onClick={checkoutItemsHandler}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
