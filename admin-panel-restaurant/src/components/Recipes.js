import React, { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";
import { DATABASE_URL } from "../utils/constants";

const Recipes = () => {
  const [showForm, setShowForm] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [id, setId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const category = useRef(null);
  const recipeName = useRef(null);
  const price = useRef(null);
  const recipeImage = useRef(null);
  const ingredients = useRef(null);

  const fetchRecipeData = async () => {
    try {
      const response = await fetch(
        DATABASE_URL + "restaurant-recipe-admin.json"
      );
      const data = await response.json();

      const formattedData = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        };
      });
      setRecipes(formattedData);
    } catch {
      console.error("error");
    }
  };
  useEffect(() => {
    fetchRecipeData();
  }, []);

  const handleFormToggle = () => {
    setShowForm(!showForm);
    setIsEdit(false);
  };
  const handleRecipeFormData = async () => {
    try {
      if (isEdit) {
        await fetch(DATABASE_URL + "restaurant-recipe-admin/" + id + ".json", {
          method: "PUT",
          body: JSON.stringify({
            category: category?.current.value,
            recipeName: recipeName?.current.value,
            price: price?.current.value,
            ingredients: ingredients?.current.value,
            recipeImage: recipeImage?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        await fetch(DATABASE_URL + "restaurant-recipe-admin.json", {
          method: "POST",
          body: JSON.stringify({
            category: category?.current.value,
            recipeName: recipeName?.current.value,
            price: price?.current.value,
            ingredients: ingredients?.current.value,
            recipeImage: recipeImage?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      category.current.value = "";
      recipeName.current.value = "";
      price.current.value = "";
      ingredients.current.value = "";
      recipeImage.current.value = "";
    } catch {
      console.error("error");
    }
  };

  const editRecipeHandler = (item) => {
    setIsEdit(true);
    setShowForm(true);
    setId(item.id);
    setTimeout(() => {
      if (item.category && item.recipeName && item.price) {
        category.current.value = item.category;
        recipeName.current.value = item.recipeName;
        price.current.value = item.price;
        ingredients.current.value = item.ingredients;
        recipeImage.current.value = item.recipeImage;
      }
    }, 1000);
  };

  const deleteRecipeHandler = (id) => {
    fetch(DATABASE_URL + `restaurant-recipe-admin/${id}.json`, {
      method: "DELETE",
    });
  };

  return (
    <div className="container grid grid-cols-12  ">
      <div className="col-span-3 shadow-2xl flex h-full bg-slate-300 text-white font-semibold text-xl">
        <MenuBar />
      </div>

      <div className="col-span-9 ">
        <Header />
        <div className="bg-slate-200  ">
          <h1 className="text-3xl font-extrabold shadow-inner p-2 text-slate-800 text-center">
            Recipes
          </h1>
          {showForm && (
            <div className="flex justify-center ">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col  justify-center items-center w-1/4 bg-slate-300 p-4 m-4 shadow-2xl"
              >
                <input
                  type="text"
                  placeholder="Recipe Name"
                  ref={recipeName}
                  className="m-4 p-2 rounded-lg border border-transparent"
                />
                <textarea
                  type="text"
                  rows="3"
                  cols="23"
                  placeholder="Ingredients"
                  ref={ingredients}
                  className="m-4 py-6 px-2 rounded-lg border border-transparent"
                />
                <select
                  className="m-4 p-2 rounded-lg w-full"
                  ref={category}
                  placeholder="options"
                >
                  <option value="">option </option>
                  <option value="Appetizers">Appetizers</option>
                  <option value="MainCourse">MainCourse</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Cakes">Cakes</option>
                </select>
                <input
                  type="text"
                  placeholder="Recipe Image Url"
                  ref={recipeImage}
                  className="m-4 p-2 rounded-lg border border-transparent"
                />
                <input
                  type="number"
                  placeholder="Price"
                  ref={price}
                  className="m-4 p-2 rounded-lg"
                />

                <div>
                  <button
                    className="bg-slate-600 hover:bg-slate-400 rounded-md text-white px-2 p-2 m-4 font-bold"
                    onClick={handleRecipeFormData}
                  >
                    {isEdit ? "Edit Recipe" : "Add Recipe"}
                  </button>
                </div>
              </form>
            </div>
          )}
          <div className="flex justify-center">
            <button
              className="bg-slate-600 hover:bg-slate-400 rounded-lg text-white px-2 p-2 m-4 font-bold"
              onClick={handleFormToggle}
            >
              Add More Recipes
            </button>
          </div>

          <div>
            <ul className="bg-slate-500 p-2">
              {recipes?.map((item, index) => {
                return (
                  <li
                    className="bg-white rounded-lg text-xl font-semibold m-4 p-2 flex items-center flex-col"
                    key={index}
                  >
                    <h2 className="font-semibold">{item.recipeName}</h2>
                    <p className="font-extralight">{item.ingredients}</p>
                    <p className="font-normal">{item.recipeImage}</p>
                    <p className="font-medium">{item.category}</p>
                    <p className="font-bold">${item.price}</p>
                    <div>
                      <button
                        className="bg-slate-600 text-white rounded-md p-2 m-2"
                        onClick={() => editRecipeHandler(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-slate-600 text-white rounded-lg p-2 m-2"
                        onClick={() => deleteRecipeHandler(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
