import React, { useEffect, useState, useRef } from "react";

const Orders = () => {
  const [orderedItem, setOrderedItem] = useState([]);
  const status = useRef();
  const currentDateTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const updateCartData = async () => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-cart.json"
    );
    const data = await response.json();
    console.log(data);

    // Flatten the data into a single array and set the state
    const items = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];
        if (Array.isArray(item)) {
          item.forEach((i) => items.push({ ...i, parentKey: key }));
        } else if (typeof item === "object" && item !== null) {
          items.push({ ...item, parentKey: key });
        }
      }
    }
    setOrderedItem(items);
  };

  useEffect(() => {
    updateCartData();
  }, []);

  const statusChangedHandler = async (item, newStatus) => {
    const { parentKey, id, ...rest } = item;
    console.log(id);
    const response = await fetch(
      `https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-cart/${parentKey}.json`,
      {
        method: "PUT",
        body: JSON.stringify([{ ...rest, status: newStatus }]),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      updateCartData();
    } else {
      console.error("Failed to update the item");
    }
  };

  return (
    <>
      {console.log(orderedItem)}
      <div className="h-full p-20 bg-slate-700 text-white">
        <h1 className="text-center text-3xl font-semibold">My Orders</h1>
        <h3 className="font-semibold">{currentDateTime}</h3>
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
                  onChange={(e) => statusChangedHandler(item, e.target.value)}
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
    </>
  );
};

export default Orders;
