import React, { useEffect, useRef, useState } from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";
import { DATABASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setRecipeLength } from "../store/ItemsSlice";
import useRecipes from "../hooks/useRecipes";

const Recipes = () => {
  const {
    handleFormToggle,
    handleRecipeFormData,
    editRecipeHandler,
    deleteRecipeHandler,
    showForm,
    recipes,
    category,
    recipeName,
    price,
    recipeImage,
    ingredients,
    isEdit,
  } = useRecipes();

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
