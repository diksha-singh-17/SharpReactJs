import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const categoryHandler = () => {
    navigate("/recipes");
  };
  return (
    <div>
      <Header />
      <div className="container shadow-lg flex justify-around bg-white">
        <ul
          className="flex flex-row flex-wrap m-8 p-8 shadow-xl justify-around rounded-se-full"
          style={{ backgroundColor: "rgb(35, 39, 54" }}
        >
          <li
            className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl cursor-pointer"
            onClick={categoryHandler}
          >
            <img
              className="p-2 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
              alt="categoryimage"
            />
            <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
              category1
            </h1>
          </li>
          <li className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl">
            <img
              className="p-2 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
              alt="categoryimage"
            />
            <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
              category1
            </h1>
          </li>
          <li className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl">
            <img
              className="p-2 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
              alt="categoryimage"
            />
            <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
              category1
            </h1>
          </li>
          <li className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl">
            <img
              className="p-2 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
              alt="categoryimage"
            />
            <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
              category1
            </h1>
          </li>
          <li className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl">
            <img
              className="p-2 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
              alt="categoryimage"
            />
            <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
              category1
            </h1>
          </li>
          <li className="border border-yellow-700 bg-yellow-700 p-4 m-4 rounded-2xl">
            <img
              className="p-2 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkStQkoBP57wTO48WU8Mf5DOj7bREve2Guw&s"
              alt="categoryimage"
            />
            <h1 className="text-center text-white font-medium text-2xl p-4 m-4">
              category1
            </h1>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
