import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useFetchMessage from "../hooks/useFetchMessage";

const MessageDetails = () => {
  const { id } = useParams();
  const { message } = useFetchMessage(id); //custom hook

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
