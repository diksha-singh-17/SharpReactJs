import React, { useEffect, useState } from "react";

const useFetchMessage = (id) => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    console.log("Message ID:", id);
    fetch(
      `https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox/${id}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        const messageData = Array.isArray(data) ? data[0] : data;
        if (messageData) {
          setMessage(messageData);
          // Mark the message as read in the database
          if (!messageData.read) {
            const updatedMessage = { ...messageData, read: true };
            fetch(
              `https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox/${id}.json`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedMessage),
              }
            ).catch((error) => console.log("Error updating message:", error));
          }
        }
      })
      .catch((error) => console.log("Error fetching message:", error));
  }, [id]);

  return { message };
};

export default useFetchMessage;
