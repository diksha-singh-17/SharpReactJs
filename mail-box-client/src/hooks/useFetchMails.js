import React, { useState, useEffect } from "react";

const useFetchMails = () => {
  const [mail, setMail] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const fetchData = () => {
    fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Raw data fetched:", data);
        if (data) {
          const formattedData = Object.keys(data).map((key) => {
            // Check if data[key] is an array or object and handle accordingly
            if (Array.isArray(data[key])) {
              return { ...data[key][0], id: key };
            } else if (typeof data[key] === "object") {
              return { ...data[key], id: key };
            }
          });
          console.log("Formatted data:", formattedData);
          setMail(formattedData);
          setUnreadCount(formattedData.filter((item) => !item.read).length);
        } else {
          setMail([]); // If data is null or undefined
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  return { mail, unreadCount };
};

export default useFetchMails;
