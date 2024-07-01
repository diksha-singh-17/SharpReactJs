import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { validate } from "../utils/validate";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const formDataHandler = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      confirmPassword?.current?.value,
      false
    );
    setError(message);
    if (message) return; //early return

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAo7xmAFa3rvDjDEFnZ9VoSTT1Kb7hfK6I",
      {
        method: "POST",
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("successfully signed up!!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <h1 className="text-muted ">Sign Up</h1>
          <Card.Text>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  type="text"
                  ref={email}
                  className="mb-3 rounded"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Password"
                  type="password"
                  ref={password}
                  className="mb-3 rounded"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  ref={confirmPassword}
                  className="mb-3 rounded"
                />
              </InputGroup>
              <p className="text-danger">{error}</p>
              <Button variant="success" onClick={formDataHandler}>
                SignUp
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <p>
        Already have an acoount? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
