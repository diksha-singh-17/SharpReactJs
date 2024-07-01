import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Button from "react-bootstrap/esm/Button";
const Body = () => {
  const email = useRef();
  const subject = useRef();
  const body = useRef();

  const emailHandler = () => {
    console.log(email.current.value, subject.current.value, body.current.value);
    fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox.json",
      {
        method: "PUT",
        body: JSON.stringify({
          email: email.current.value,
          subject: subject.current.value,
          body: body.current.value,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Welcome!! to mail box client.</h1>
      <h2>Here you can send and receive mails.</h2>

      <Card style={{ width: "60rem" }}>
        <Card.Body>
          <Form>
            <Card.Title>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  type="text"
                  ref={email}
                  className="mb-3 rounded"
                />
              </InputGroup>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="subject"
                  type="text"
                  ref={subject}
                  className="mb-3 rounded"
                />
              </InputGroup>
            </Card.Subtitle>
            <Card.Text>
              <InputGroup className="mb-3" size="lg">
                <Form.Control
                  as="textarea"
                  placeholder="body"
                  ref={body}
                  className="mb-3 rounded"
                  style={{ height: "30rem" }}
                />
              </InputGroup>
            </Card.Text>
            <Button variant="success" className="px-4" onClick={emailHandler}>
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Body;
