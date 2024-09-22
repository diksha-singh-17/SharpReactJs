import React from "react";
import pic1 from "../constants/pic9.jpg";
import Form from "./Form";
const Contact = () => {
  return (
    <>
      <div className=" m-6 p-6 bg-slate-100/70">
        <h1 className="font-bold text-3xl">
          Book Your{" "}
          <b className="text-orange-600 font-extrabold text-4xl">Free Demo</b>
          Session
        </h1>
        <h3 className="font-bold text-slate-700">
          Get Your Free Academic Counselling Sessions
        </h3>
        <div className="flex justify-around flex-row m-6 p-6 ">
          <img className="w-96 px-4" src={pic1} alt="sideimage" />
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
