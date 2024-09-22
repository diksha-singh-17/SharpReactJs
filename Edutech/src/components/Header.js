import React from "react";
// import logo from "../constants/pic1.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg px-4  py-2 ">
      <div>
        {/* <img className="w-20 " src={med} alt="logo" /> */}
        <h1 className="text-orange-600 font-extrabold text-2xl">
          <b>Learnyst</b>
        </h1>
      </div>
      <div className="flex">
        <h3 className="px-4 font-bold ">Courses</h3>
        <h3 className="px-4 font-bold ">About Us</h3>
        <h3 className="px-4 font-bold ">Testimonials</h3>
        <h3 className="px-4 font-bold ">Advertisements</h3>
      </div>

      <button className="text-white bg-orange-600 hover:ring-2 rounded-lg px-4 py-2">
        <span>SignIn</span>
      </button>
    </div>
  );
};

export default Header;
