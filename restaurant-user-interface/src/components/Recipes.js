import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Cart from "./Cart";

const Recipes = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    // setIsCartOpen(true);
  };

  return (
    <>
      <Header />
      <div
        style={{ backgroundColor: "rgb(35, 39, 54" }}
        className="h-full p-8 m-8 rounded-tl-full"
      >
        <h1
          className="text-center text-3xl  font-semibold"
          style={{ color: "rgb(122, 156, 68)" }}
        >
          Recipes
        </h1>
        <div className="relative -mb-4">
          <div className="absolute right-0 -top-3">
            <button
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: "rgb(122, 156, 68)" }}
              onClick={() => handleAddToCart({ name: "Sandwich", price: 50 })}
            >
              Add
            </button>
          </div>
        </div>

        <div className="p-2 ">
          <ul>
            <li
              className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              <div className="m-2 ">
                <img
                  className="w-96"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
                  alt="recipeimage"
                />
              </div>
              <div className="flex flex-col m-2 ">
                <h1 className="text-2xl">Sandwich</h1>
                <p>
                  Cheese Sandwich Cheese,Bread,tomato ketchup,schwezen
                  chutney,green chutney. How to make? 1)First make a paste by
                  adding tomato ketchup and schwezen chutney together. 2)spread
                  the above paste on the two slices of bread. 3)Add a slice of
                  cheese between two breads. 4)Toast it with some butter until
                  it gets crunchy on top. breakfast $50
                </p>
                <p>category1</p>
                <p>$price</p>
              </div>
            </li>
            <li
              className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              <div className="m-2 ">
                <img
                  className="w-96"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9BMHoq8yCZ-8AU5qiRgsZPcDDiCekJgvtA&s"
                  alt="recipeimage"
                />
              </div>
              <div className="flex flex-col m-2 ">
                <h1>Sandwich</h1>
                <p>
                  Cheese Sandwich Cheese,Bread,tomato ketchup,schwezen
                  chutney,green chutney. How to make? 1)First make a paste by
                  adding tomato ketchup and schwezen chutney together. 2)spread
                  the above paste on the two slices of bread. 3)Add a slice of
                  cheese between two breads. 4)Toast it with some butter until
                  it gets crunchy on top. breakfast $50
                </p>
                <p>price</p>
              </div>
            </li>
            <li
              className="flex flex-row p-2 text-white justify-around rounded-lg border border-dotted m-4"
              style={{ backgroundColor: "rgb(254, 161, 22)" }}
            >
              <div className="m-2 ">
                <img
                  className="w-96"
                  src="
                https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5okG0tz2dWr36k2p9gxbFmqoM4AeW1e3pPQ&s"
                  alt="recipeimage"
                />
              </div>
              <div className="flex flex-col m-2 ">
                <h1>Sandwich</h1>
                <p>
                  Cheese Sandwich Cheese,Bread,tomato ketchup,schwezen
                  chutney,green chutney. How to make? 1)First make a paste by
                  adding tomato ketchup and schwezen chutney together. 2)spread
                  the above paste on the two slices of bread. 3)Add a slice of
                  cheese between two breads. 4)Toast it with some butter until
                  it gets crunchy on top. breakfast $50
                </p>
                <p>price</p>
              </div>
            </li>
          </ul>
        </div>
        {/* <Cart isOpen={isCartOpen} items={cartItems} /> */}
      </div>

      <Footer />
    </>
  );
};

export default Recipes;
