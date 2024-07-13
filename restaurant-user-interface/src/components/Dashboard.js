import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [categoryItems, setCategoryItems] = useState([]);

  const categoryHandler = ({ category }) => {
    navigate(`/recipes/${category}`);
  };

  const fetchCategoryData = async () => {
    const res = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-admin.json"
    );
    const data = await res.json();
    const formattedData = Object.keys(data).map((key) => {
      return { ...data[key], id: key };
    });
    console.log(formattedData);
    setCategoryItems(formattedData);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container shadow-lg flex justify-around bg-white">
        {categoryItems.length === 0 ? (
          <div className="text-center text-lg text-white">
            No items to preview
          </div>
        ) : (
          <ul
            className="flex flex-row flex-wrap m-8 p-8 shadow-xl justify-around rounded-se-full"
            style={{ backgroundColor: "rgb(35, 39, 54" }}
          >
            {categoryItems?.map((item) => {
              return (
                <li
                  className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl cursor-pointer"
                  key={item.id}
                  onClick={() => categoryHandler(item)}
                >
                  <img
                    className="p-2 rounded-2xl"
                    src={item.imageUrl}
                    alt="categoryimage"
                  />
                  <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
                    {item.category}
                  </h1>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
