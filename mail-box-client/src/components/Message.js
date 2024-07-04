import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MessageDetails = () => {
  const { id } = useParams();
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

  if (!message) {
    return <div>Loading...</div>;
  }

  return (
    <Card style={{ width: "60rem" }}>
      <Card.Body>
        <Card.Title>{message.subject}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {message.email}
        </Card.Subtitle>
        <Card.Text>{message.body}</Card.Text>
        <Button variant="primary" onClick={() => window.history.back()}>
          Back to Inbox
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MessageDetails;
