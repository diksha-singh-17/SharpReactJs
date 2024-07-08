import React from "react";
import Form from "./Form";
import pic1 from "../constants/half_pic_med.jpg";

const Browse = () => {
  return (
    <div className="flex justify-center flex-row m-6 p-6 shadow-2xl">
      <img className="w-96" src={pic1} alt="sideimage" />
      <Form />
    </div>
  );
};

export default Browse;
