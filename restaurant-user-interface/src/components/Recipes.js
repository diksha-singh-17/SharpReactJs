import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/CartReducer";

const Recipes = () => {
  const [recipeItems, setRecipeItems] = useState([]);
  const { category } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = async (item) => {
    const { id, recipeName, price } = item;
    dispatch(addItemToCart({ id, price, recipeName }));
  };

  const fetchRecipesData = async () => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-recipe-admin.json"
    );
    const data = await response.json();
    const formattedData = Object.keys(data).map((key) => {
      return { ...data[key], id: key };
    });
    const filtereddata = formattedData.filter(
      (item) => category === item.category
    );

    setRecipeItems(filtereddata);
  };

  useEffect(() => {
    fetchRecipesData();
  }, []);

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

        <div className="p-2 ">
          {recipeItems.length === 0 ? (
            <div className="text-center text-lg text-white">
              No items to preview
            </div>
          ) : (
            <ul>
              {recipeItems?.map((item) => {
                return (
                  <>
                    <div className="relative -mb-1 ">
                      <div className="absolute right-0 -top-3">
                        <button
                          className="px-4 py-2 rounded-md text-white"
                          style={{ backgroundColor: "rgb(122, 156, 68)" }}
                          onClick={() => handleAddToCart(item)}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <li
                      key={item.id}
                      className="flex flex-row p-2 text-white  rounded-lg border border-dotted mb-10"
                      style={{ backgroundColor: "rgb(254, 161, 22)" }}
                    >
                      <div className="m-2 ">
                        <img
                          className="max-w-48 min-w-1.5"
                          src={item.recipeImage}
                          alt="recipeimage"
                        />
                      </div>
                      <div className="flex flex-col m-2 ">
                        <h1 className="text-2xl font-serif">
                          {item.recipeName}
                        </h1>
                        <p className="font-thin">{item.ingredients}</p>
                        <p className="font-bold">{item.category}</p>
                        <p>${item.price}</p>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Recipes;
