import React, { useContext, useRef, useEffect } from "react";
import CartContext from "../store/CartContext";

const Form = () => {
  const inputRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const { addToCart, items } = useContext(CartContext);

  const getMedData = async () => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/medical-admin.json"
    );
    if (!response.ok) {
      throw new Error("Failed to send data");
    }
    const data = await response.json();
    return data;
  };

  const sendMedData = async (updatedItem) => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/medical-admin.json",
      {
        method: "PUT",
        body: JSON.stringify(updatedItem),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send data");
    }
    const data = await response.json();
    return data;
  };

  const handleFormData = async () => {
    console.log(inputRef.current.value);

    const newItem = {
      id: inputRef.current.value,
      name: inputRef.current.value,
      description: descRef.current.value,
      price: Number(priceRef.current.value),
      quantity: Number(quantityRef.current.value),
    };

    try {
      const res = await getMedData();
      const updatedItems = res ? [...res, newItem] : [newItem];
      console.log(updatedItems, "updateditems");
      sendMedData(updatedItems);

      inputRef.current.value = "";
      descRef.current.value = "";
      priceRef.current.value = "";
      quantityRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-auto bg-green-950">
      {console.log(items)}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex  flex-col  justify-center  items-center p-6  bg-green-950"
      >
        <label className="  text-white  rounded-lg   font-bold">
          MedicineName:{" "}
        </label>
        <input
          type="text"
          ref={inputRef}
          className=" rounded-lg  m-2  px-4  py-2 outline outline-offset-2 outline-green-950"
        />
        <label className="text-white rounded-lg  font-bold">
          {" "}
          Description:{" "}
        </label>
        <input
          type="text"
          ref={descRef}
          className=" rounded-lg  m-2  px-4  py-4 outline outline-offset-2 outline-green-950"
        />
        <label className="  text-white  rounded-lg  font-bold"> Price:</label>
        <input
          type="number"
          className=" rounded-lg  m-2  px-4  py-2 outline outline-offset-2 outline-green-950 "
          ref={priceRef}
        />
        <label className=" font-bold  text-white  ">Quantity Available:</label>

        <input
          className=" rounded-lg  m-2  px-4  py-2 outline outline-offset-2 outline-green-950"
          typr="number"
          ref={quantityRef}
        />
        <button
          className="bg-white text-green-950  rounded-lg  m-2  px-4  py-2  font-bold   cursor-pointer ring-green-950 shadow-lg ring-2 ring-offset-2 hover:ring-offset-4 "
          onClick={handleFormData}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
