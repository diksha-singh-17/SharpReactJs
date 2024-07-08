import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg p-4  bg-gray-400 text-white font-semibold text-2xl">
      <h1>FoodApp</h1>
      <div className="flex mx-2 ">
        <p className="mx-2">Profile</p>
        <button>Cart (0)</button>
      </div>
    </div>
  );
};

export default Header;
