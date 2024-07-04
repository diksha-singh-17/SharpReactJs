import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Inbox = () => {
  const [mail, setMail] = useState([]);
  const navigate = useNavigate();

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
        } else {
          setMail([]); // If data is null or undefined
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const composeEmailHandler = () => {
    navigate("/body");
  };

  const messageHandler = (id) => {
    navigate(`/message/${id}`);
  };

  return (
    <div>
      <h1>Inbox</h1>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          {console.log("Mail state:", mail)}
          {mail.length > 0 ? (
            mail.map((item, index) => (
              <div
                id={item.email}
                key={index}
                className="d-flex justify-content-around border-2 border-bottom m-2"
                onClick={() => messageHandler(item.id)}
                style={{ cursor: "pointer" }}
              >
                <h2 className="p-2">{item.subject}</h2>
                <p className="text-truncate p-2">
                  {!item.read && <span style={{ color: "blue" }}>•</span>}
                  {item.body}
                </p>
                <p>{item.newTime}</p>
              </div>
            ))
          ) : (
            <p>No mail available</p>
          )}
          <Button variant="primary" onClick={composeEmailHandler}>
            Compose
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inbox;
