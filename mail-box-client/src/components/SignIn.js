import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";

const SignIn = () => {
  const { error, email, password, formDataHandler } = useSignIn();

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
