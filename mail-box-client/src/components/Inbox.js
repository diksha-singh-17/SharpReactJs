import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useFetchMails from "../hooks/useFetchMails";
import useMailActions from "../hooks/useMailActions";

const Inbox = () => {
  const { mail, unreadCount } = useFetchMails();
  const { composeEmailHandler, messageHandler, deleteMailHandler } =
    useMailActions();

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
