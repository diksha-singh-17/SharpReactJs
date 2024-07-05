import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const { error, email, password, confirmPassword, formDataHandler } =
    useSignUp();

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
