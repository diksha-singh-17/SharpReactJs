import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { validate } from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const formDataHandler = () => {
    const message = validate(
      email?.current.value,
      password?.current.value,
      null,
      true
    );
    setError(message);
    if (message) return; //early return

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAo7xmAFa3rvDjDEFnZ9VoSTT1Kb7hfK6I",
      {
        method: "POST",
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
          id: email.current.value,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("mail_token", data.idToken);
        console.log("successfully signed in!!");
        if (!data.error) navigate("/body");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <h1 className="text-muted ">Sign In</h1>
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

              <p className="text-danger">{error}</p>
              <Button variant="success" onClick={formDataHandler}>
                SignIn
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <p>
        Don't have an acoount? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default SignIn;
