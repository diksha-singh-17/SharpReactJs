import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";

const Categories = () => {
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
            Categories
          </h1>
          {showForm && (
            <div className="flex justify-center ">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col  justify-center items-center w-1/4 bg-slate-300 p-4 m-4 shadow-2xl"
              >
                <input
                  type="text"
                  placeholder="category"
                  className="m-4 p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Image url"
                  className="m-4 p-2 rounded-lg"
                />

                <div>
                  <button className="bg-slate-600 hover:bg-slate-400 rounded-md text-white px-2 p-2 m-4 font-bold">
                    {/* {!isLogin ? "Sign Up" : "Sign In"} */}Add Category
                  </button>
                </div>
              </form>
            </div>
          )}

          <button
            className="bg-slate-600 hover:bg-slate-400 rounded-lg text-white px-2 p-2 m-4 font-bold"
            onClick={handleFormToggle}
          >
            Add More Category
          </button>
          <div>
            <ul className="bg-slate-500 p-2">
              <li className="bg-white rounded-lg text-xl font-semibold m-4 p-2">
                <h2>name</h2>
                <p>url image</p>

                <div>
                  <button className="bg-slate-600 text-white rounded-md px-2 m-2">
                    Edit
                  </button>
                  <button className="bg-slate-600 text-white rounded-lg px-2 m-2">
                    Delete
                  </button>
                </div>
              </li>
              <li className="bg-white rounded-lg text-xl font-semibold m-4 p-2">
                <h2>name</h2>
                <p>url image</p>

                <div>
                  <button className="bg-slate-600 text-white rounded-md px-2 m-2">
                    Edit
                  </button>
                  <button className="bg-slate-600 text-white rounded-lg px-2 m-2">
                    Delete
                  </button>
                </div>
              </li>
              <li className="bg-white rounded-lg text-xl font-semibold m-4 p-2">
                <h2>name</h2>
                <p>url image</p>

                <div>
                  <button className="bg-slate-600 text-white rounded-md px-2 m-2">
                    Edit
                  </button>
                  <button className="bg-slate-600 text-white rounded-lg px-2 m-2">
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

export default Categories;
