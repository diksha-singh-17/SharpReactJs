import React from "react";
import pic1 from "../constants/pic6.jpg";
const Social = () => {
  return (
    <div className="flex justify-around flex-row m-6 p-6 bg-slate-100/70">
      <div>
        <h1 className="text-orange-600 font-extrabold">
          ClassRoom In Your Pocket
        </h1>
        <p className="text-gray-600 font-bold">
          Lorem ipsum Lorem Ipsum is simply dummy text
        </p>
        <div className="m-4">
          <input placeholder="Enter Your Phone Number" className="p-4" />
          <button className="bg-orange-600 text-white p-4">Get Started</button>
        </div>
        <p className="text-orange-600 m-8 font-bold">Download App Now</p>
        <div>
          <button className="bg-black p-4 text-white m-2 rounded-lg">
            Get It In Play Store
          </button>
          <button className="bg-black p-4 m-2 text-white rounded-lg">
            Get It In App Store
          </button>
        </div>
      </div>

      <img className="w-96 px-4" src={pic1} alt="sideimage" />
    </div>
  );
};

export default Social;
