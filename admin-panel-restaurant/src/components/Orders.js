import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import useOrders from "../hooks/useOrders";

const Orders = () => {
  const { orderedItem, status, currentDateTime, statusChangedHandler } =
    useOrders();

  return (
    <>
      <div className="container grid grid-cols-12  ">
        <div className="col-span-3 shadow-2xl flex h-screen bg-slate-300 text-white font-semibold text-xl">
          <MenuBar />
        </div>

        <div className="col-span-9 bg-slate-200">
          <Header />
          <div className="bg-slate-200  ">
            <h1 className="text-3xl font-extrabold shadow-inner p-2 text-slate-800 text-center">
              Recipes
            </h1>
            <h3 className="font-semibold m-2">{currentDateTime}</h3>
            <div className="p-2 bg-slate-600 shadow-lg m-4">
              <ul>
                {orderedItem.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-row p-2 bg-slate-400 text-white justify-around rounded-lg border border-dashed m-4"
                  >
                    <h1 className="text-2xl">
                      {item?.name} x{item?.quantity}
                    </h1>
                    <select
                      className="text-black rounded-xl"
                      ref={status}
                      value={item.status}
                      onChange={(e) =>
                        statusChangedHandler(item, e.target.value)
                      }
                    >
                      <option value="">Select status</option>
                      <option value="Pending">Pending</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <p>${item?.totalPrice}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
