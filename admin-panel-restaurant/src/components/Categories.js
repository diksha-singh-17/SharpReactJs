import React from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const {
    showForm,
    categories,
    isEdit,
    category,
    imageUrl,
    handleFormToggle,
    handleCategoryFormData,
    editCategoryHandler,
    deleteCategoryHandler,
  } = useCategories();

  return (
    <div className="container grid grid-cols-12">
      <div className="col-span-3 shadow-2xl flex h-full bg-slate-300 text-white font-semibold text-xl">
        <MenuBar />
      </div>

      <div className="col-span-9 ">
        <Header />
        <div className="bg-slate-200">
          <h1 className="text-2xl font-extrabold shadow-inner p-2 text-slate-800 text-center">
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
                  ref={category}
                  className="m-4 p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Image url"
                  ref={imageUrl}
                  className="m-4 p-2 rounded-lg"
                />

                <div>
                  <button
                    className="bg-slate-600 hover:bg-slate-400 rounded-md text-white px-2 p-2 m-4 font-bold"
                    onClick={handleCategoryFormData}
                  >
                    {isEdit ? "Edit category" : "Add Category"}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="flex justify-center">
            <button
              className="bg-slate-600 hover:bg-slate-400 rounded-lg text-white px-2 p-2 m-4 font-bold "
              onClick={handleFormToggle}
            >
              Add More Category
            </button>
          </div>

          <div>
            <ul className="bg-slate-500 p-2">
              {categories?.map((item, index) => {
                return (
                  <li
                    className="bg-white rounded-lg text-xl font-semibold m-4 p-2 flex items-center flex-col"
                    key={index}
                  >
                    <h2 className="font-serif">{item.category}</h2>
                    <p className="font-thin">{item.imageUrl}</p>

                    <div>
                      <button
                        className="bg-slate-600 text-white rounded-md p-2 m-2"
                        onClick={() => editCategoryHandler(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-slate-600 text-white rounded-lg p-2 m-2"
                        onClick={() => deleteCategoryHandler(item.id)}
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

export default Categories;
