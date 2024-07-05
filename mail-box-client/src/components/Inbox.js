import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Inbox = () => {
  const [mail, setMail] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
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

  const composeEmailHandler = () => {
    navigate("/body");
  };

  const messageHandler = (id) => {
    navigate(`/message/${id}`);
  };

  const deleteMailHandler = (id) => {
    fetch(
      `https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox/${id}.json`,
      {
        method: "DELETE",
      }
    );
    console.log("successfully deleted mail!!");
  };

  return (
    <div>
      <h1>Inbox</h1>
      <p>Total unread messages: {unreadCount}</p>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          {console.log("Mail state:", mail)}
          {mail.length > 0 ? (
            mail.map((item, index) => (
              <div className="">
                <div
                  id={item.email}
                  key={index}
                  className="d-flex justify-content-around border-2 border-bottom m-2"
                >
                  <h2 className="p-2">{item.subject}</h2>
                  <p
                    className="text-truncate p-2"
                    onClick={() => messageHandler(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {!item.read && <span style={{ color: "blue" }}>•</span>}
                    {item.body}
                  </p>
                  <p>{item.newTime}</p>

                  <div className="m-2">
                    <Button
                      variant="danger"
                      className="px-2"
                      onClick={() => deleteMailHandler(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
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
