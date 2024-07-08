import React from "react";

const MenuBar = () => {
  const DUMMY = ["DashBoard", "Categories", "Recipes", "Orders"];
  return (
    <div className="flex-1 mt-10 ">
      <ul>
        {DUMMY.map((item) => (
          <li key={item} className="my-4 ">
            <button className="bg-slate-600 w-full p-2">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
