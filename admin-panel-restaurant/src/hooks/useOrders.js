import React, { useEffect, useRef, useState } from "react";
import { setOrdersLength } from "../store/ItemsSlice";
import { useDispatch } from "react-redux";

const useOrders = () => {
  const [orderedItem, setOrderedItem] = useState([]);
  const status = useRef();
  const dispatch = useDispatch();

  const currentDateTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const updateCartData = async () => {
    const response = await fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/restaurant-cart.json"
    );
    const data = await response.json();

    dispatch(setOrdersLength(Object.keys(data).length));
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
  return { orderedItem, status, currentDateTime, statusChangedHandler };
};

export default useOrders;
