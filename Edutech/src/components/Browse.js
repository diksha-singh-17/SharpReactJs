import React from "react";
import pic1 from "../constants/pic3.jpg";

const Browse = () => {
  return (
    <div className="flex justify-around flex-row m-6 p-6 ">
      <div className="mt-20">
        <h2 className="font-extrabold text-xl text-left">Get Into</h2>
        <h1 className="text-orange-600 font-extrabold text-5xl my-3 text-left">
          <b>Dream College</b>
        </h1>
        <p className="font-bold my-3 text-left">
          Affordable SAT, ACT,PSAT and AP Test<br></br> Prep That Raises Test
          Scores.
        </p>
        <button className="text-white bg-black px-4 py-2 my-4 ">
          Book Free Sessions
        </button>
      </div>
      <img className="w-96 px-4" src={pic1} alt="sideimage" />
    </div>
  );
};

export default Browse;
