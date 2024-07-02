import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const Inbox = () => {
  const [mail, setMail] = useState([]);
  const [initial, setInitial] = useState(true);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Assuming data is an object where keys are unique identifiers for each mail item
        if (data) {
          const mailArray = Object.values(data);
          setMail(mailArray);
        } else {
          setMail([]); // If data is null or undefined
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (initial) {
      setInitial(false);
      return;
    }
    fetchData();
  }, [initial]);

  const composeEmailHandler = () => {
    navigate("/body");
  };

  return (
    <div>
      <h1>Inbox</h1>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          {console.log(mail)}
          {mail.length > 0 ? (
            mail.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-around  border-2 border-bottom m-2 "
              >
                <h2 className="p-2">{item.subject}</h2>
                <p className="text-truncate p-2">{item.body}</p>
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
