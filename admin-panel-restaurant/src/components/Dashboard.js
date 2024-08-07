import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const categoryLength = useSelector((store) => store.item.categoryLength);
  const RecipeLength = useSelector((store) => store.item.recipeLength);
  const ordersLength = useSelector((store) => store.item.ordersLength);

  return (
    <div className="container grid grid-cols-12  ">
      <div className="col-span-3 shadow-2xl flex h-screen bg-slate-300 text-white font-semibold text-xl">
        <MenuBar />
      </div>

      <div className="col-span-9 bg-slate-200">
        <Header />
        <div className="  flex justify-around  items-center">
          <div className="flex justify-center border-double border-4 flex-col items-center  p-4 m-5 rounded-lg border-slate-600">
            <h1 className="text-2xl">Categories</h1>
            <button className="bg-slate-600 p-2 m-2 rounded-md text-white">
              Total Category {categoryLength}
            </button>
          </div>
          <div className="flex justify-center border-double border-4 flex-col items-center p-4 rounded-lg border-slate-600">
            <h1 className="text-2xl ">Recipes</h1>
            <button className="bg-slate-600 p-2 m-2 rounded-md text-white">
              Add Recipes {RecipeLength}
            </button>
          </div>
          <div className="flex justify-center border-double border-4 flex-col items-center p-4 rounded-lg border-slate-600 ">
            <h1 className="text-2xl">Orders</h1>
            <button className="bg-slate-600 p-2 m-2 rounded-md text-white">
              Total Orders {ordersLength}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
