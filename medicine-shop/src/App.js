import "./App.css";
import { useRef, useContext, useState } from "react";
import AuthContext from "./store/AuthContext";
import ShowProducts from "./components/ShowProducts";
import CartItems from "./components/CartItems";
import med from "../src/med.jpg";

function App() {
  const inputRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const authCntxt = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const addItemsHandler = (e) => {
    e.preventDefault();
    authCntxt.addProduct({
      id: Math.random().toString(),
      name: inputRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      quantity: Number(quantityRef.current.value),
    });
    console.log(authCntxt);

    fetch(
      "https://crudcrud.com/api/2656e1aa66bd44e19cd61e84e2373072/medicine-shop"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("data from get", data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div
        className="relative "
        style={{
          backgroundImage: `url(${med})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 tw-bg-gradient-to-b tw-from-zinc-900 ">
          <div className="tw-flex tw-justify-center ">
            <h1 className="tw-font-bold tw-text-white tw-text-3xl">
              Medicine Shop
            </h1>
          </div>
          <CartItems />
          <form className="absolute tw-flex tw-flex-col tw-justify-center tw-items-center tw-p-6 tw-m-4 ">
            <label className=" tw-text-white tw-rounded-lg  tw-font-bold">
              MedicineName:{" "}
            </label>
            <input
              type="text"
              ref={inputRef}
              className="tw-rounded-lg tw-m-2 tw-px-4 tw-py-2 tw-border-orange-200"
            />
            <label className=" tw-text-white tw-rounded-lg  tw-font-bold">
              {" "}
              Description:{" "}
            </label>
            <input
              type="text"
              ref={descRef}
              className="tw-rounded-lg tw-m-2 tw-px-4 tw-py-4 tw-border-orange-200"
            />
            <label className=" tw-text-white tw-rounded-lg tw-font-bold">
              {" "}
              Price:
            </label>
            <input
              type="number"
              className="tw-rounded-lg tw-m-2 tw-px-4 tw-py-2 tw-border-orange-200"
              ref={priceRef}
            />
            <label className="tw-font-bold tw-text-white  ">
              Quantity Available:
            </label>

            <input
              className="tw-rounded-lg tw-m-2 tw-px-4 tw-py-2 tw-border-orange-200"
              typr="number"
              ref={quantityRef}
            />
            <button
              variant="secondary"
              className="tw-bg-gray-50 tw-rounded-lg tw-m-2 tw-px-4 tw-py-2 tw-font-bold hover:tw-bg-orange-200 tw-cursor-pointer tw-border-orange-200 tw-shadow-lg tw-shadow-white"
              onClick={addItemsHandler}
            >
              Add Product
            </button>
          </form>
          <ShowProducts products={products} />
        </div>
      </div>
    </>
  );
}

export default App;
