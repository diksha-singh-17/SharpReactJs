import React, { Fragment, useContext, useEffect, useState } from "react";
import med_image from "../constants/bg_img.jpg";
import CartContext from "../store/CartContext";

const Products = () => {
  const [data, setData] = useState(null);
  const [quantities, setQuantities] = useState({});
  const { items, addToCart } = useContext(CartContext);

  const getMedData = async () => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/medical-admin.json"
    );
    const data = await response.json();
    return data ? Object.values(data) : [];
  };

  const fetchData = async () => {
    try {
      const item = await getMedData();
      setData(item);
      console.log(item);
      const initialQuantities = item?.reduce((acc, curr) => {
        acc[curr.name] = curr.quantity;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set up polling interval
    // const intervalId = setInterval(fetchData, 3000); // Poll every 60 seconds

    // // Cleanup function to clear interval
    // return () => clearInterval(intervalId);
  }, []);

  const addTOCartHandler = (item) => {
    console.log("addTOCartHandler called for:", item.name);
    const { id, name, price } = item;
    addToCart({ id, name, price });
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[name] > 0) {
        newQuantities[name] -= 1;
      }
      console.log("Updated quantities:", newQuantities);
      return newQuantities;
    });
  };

  return (
    <Fragment>
      <div className="relative p-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${med_image})`,
            opacity: 0.5,
          }}
        ></div>
        <div className="relative flex justify-center items-center flex-col shadow-2xl max-w-6xl text-lg p-10  bg-slate-700/30">
          <h1 className="font-bold text-2xl m-2 p-6">List of Medicines</h1>
          <table className="w-3/4 border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className=" border border-green-950">Name</th>
                <th className="border border-green-950">Description</th>
                <th className="border border-green-950">Price</th>
                <th className="border border-green-950">Quantity</th>
                <th className="border border-green-950">Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                const currentQuantity = quantities[item.name];
                return (
                  <tr key={item.name}>
                    <td className="px-6 py-4 font-semibold border border-green-950">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 font-semibold  border border-green-950">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 font-semibold  border border-green-950">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 font-semibold  border border-green-950">
                      <span>
                        {currentQuantity > 0
                          ? currentQuantity
                          : "Item out of stock"}
                      </span>
                    </td>
                    <td className="px-6 py-4   border border-green-950">
                      <button
                        className="text-white ring-green-700 bg-green-950 hover:ring-2 rounded-lg px-6 py-2 disabled:ring-lime-800 disabled:bg-green-900 disabled:cursor-not-allowed"
                        onClick={() => addTOCartHandler(item)}
                        disabled={currentQuantity === 0}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
