import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";

const Recipes = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="container grid grid-cols-12  ">
      <div className="col-span-3 shadow-2xl flex h-screen bg-slate-300 text-white font-semibold text-xl">
        <MenuBar />
      </div>

      <div className="col-span-9 ">
        <Header />
        <div className="bg-slate-200  ">
          <h1 className="text-3xl font-extrabold shadow-inner p-2 text-slate-800">
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
                  placeholder="recipe name"
                  className="m-4 p-2 rounded-lg border border-transparent"
                />
                <select className="m-4 p-2 rounded-lg w-full">
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
                <input
                  type="number"
                  placeholder="Price"
                  className="m-4 p-2 rounded-lg"
                />

                <div>
                  <button className="bg-slate-600 hover:bg-slate-400 rounded-md text-white px-2 p-2 m-4 font-bold">
                    {/* {!isLogin ? "Sign Up" : "Sign In"} */}Add Recipe
                  </button>
                </div>
              </form>
            </div>
          )}

          <button
            className="bg-slate-600 hover:bg-slate-400 rounded-lg text-white px-2 p-2 m-4 font-bold"
            onClick={handleFormToggle}
          >
            Add More Recipes
          </button>
          <div>
            <ul className="bg-slate-500 p-2">
              <li className="bg-white rounded-lg text-xl font-semibold m-4 p-2">
                <h2>Recipe name</h2>
                <p>category</p>
                <p>Price</p>

                <div>
                  <button className="bg-slate-600 text-white rounded-md p-2 m-2">
                    Edit
                  </button>
                  <button className="bg-slate-600 text-white rounded-lg p-2 m-2">
                    Delete
                  </button>
                </div>
              </li>
              <li className="bg-white rounded-lg text-xl font-semibold m-4 p-2">
                <h2>Recipe name</h2>
                <p>category</p>
                <p>Price</p>

                <div>
                  <button className="bg-slate-600 text-white rounded-md p-2 m-2">
                    Edit
                  </button>
                  <button className="bg-slate-600 text-white rounded-lg p-2 m-2">
                    Delete
                  </button>
                </div>
              </li>
              <li className="bg-white rounded-lg text-xl font-semibold m-4 p-2">
                <h2>Recipe name</h2>
                <p>category</p>
                <p>Price</p>

                <div>
                  <button className="bg-slate-600 text-white rounded-md p-2 m-2">
                    Edit
                  </button>
                  <button className="bg-slate-600 text-white rounded-lg p-2 m-2">
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
