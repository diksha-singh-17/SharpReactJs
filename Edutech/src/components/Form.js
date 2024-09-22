import React, { useContext, useRef } from "react";
import CartContext from "../store/CartContext";

const Form = () => {
  const inputRef = useRef();
  const classRef = useRef();
  const phoneRef = useRef();
  const { addToCart, items } = useContext(CartContext);

  const handleFormData = async () => {
    const newItem = {
      id: inputRef.current.value,
      name: inputRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      addToCart(newItem);

      inputRef.current.value = "";
      phoneRef.current.value = "";
      classRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-auto bg-slate-100/70">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex  flex-col  justify-center  items-center p-6  bg-slate-100/70"
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Your Name"
          className=" rounded-lg  m-2  px-4  py-2 outline outline-offset-2 outline-gray-700"
        />

        <input
          type="number"
          placeholder="Enter Your Mobile Number (USA Only)"
          className=" rounded-lg  m-2  px-4  py-2 outline outline-offset-2 outline-gray-700 "
          ref={phoneRef}
        />

        <input
          className=" rounded-lg  m-2  px-4  py-2 outline outline-offset-2 outline-gray-700"
          typr="number"
          placeholder="Select Class"
          ref={classRef}
        />
        <button
          className="bg-orange-600  text-white  rounded-lg  m-4  px-4  py-2  font-bold   cursor-pointer shadow-lg  "
          onClick={handleFormData}
        >
          Book A Free Demo
        </button>
      </form>
    </div>
  );
};

export default Form;
