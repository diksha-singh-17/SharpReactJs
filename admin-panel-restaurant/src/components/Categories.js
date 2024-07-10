import React, { useRef, useState, useEffect } from "react";
import MenuBar from "./MenuBar";
import Header from "./Header";
import { DATABASE_URL } from "../utils/constants";

const Categories = () => {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const category = useRef(null);
  const imageUrl = useRef(null);

  const fetchCategoryData = async () => {
    try {
      let response = await fetch(DATABASE_URL + "restaurant-admin.json");
      let data = await response.json();

      const formattedData = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        };
      });
      setCategories(formattedData);
    } catch {
      console.error("error");
    }
  };
  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleFormToggle = () => {
    setShowForm(!showForm);
    setIsEdit(false);
  };

  const handleCategoryFormData = async () => {
    try {
      if (isEdit) {
        await fetch(DATABASE_URL + "restaurant-admin/" + id + ".json", {
          method: "PUT",
          body: JSON.stringify({
            category: category?.current.value,
            imageUrl: imageUrl?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        await fetch(DATABASE_URL + "restaurant-admin.json", {
          method: "POST",
          body: JSON.stringify({
            category: category?.current.value,
            imageUrl: imageUrl?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      category.current.value = "";
      imageUrl.current.value = "";
    } catch {
      console.error("error");
    }
  };

  const editCategoryHandler = (item) => {
    setIsEdit(true);
    setShowForm(true);
    setId(item.id);
    setTimeout(() => {
      if (item.category && item.imageUrl) {
        category.current.value = item.category;
        imageUrl.current.value = item.imageUrl;
      }
    }, 1000);
  };

  return (
    <div className="container grid grid-cols-12  ">
      <div className="col-span-3 shadow-2xl flex h-full bg-slate-300 text-white font-semibold text-xl">
        <MenuBar />
      </div>

      <div className="col-span-9 ">
        <Header />
        <div className="bg-slate-200">
          <h1 className="text-3xl font-extrabold shadow-inner p-2 text-slate-800 text-center">
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
                    <h2>{item.category}</h2>
                    <p>{item.imageUrl}</p>

                    <div>
                      <button
                        className="bg-slate-600 text-white rounded-md p-2 m-2"
                        onClick={() => editCategoryHandler(item)}
                      >
                        Edit
                      </button>
                      <button className="bg-slate-600 text-white rounded-lg p-2 m-2">
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
