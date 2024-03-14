import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/AuthContext";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  } else if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [collegeIsValid, setcollegeIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    vale: "",
    isValid: false,
  });
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    // ***debouncing***
    const identifier = setTimeout(() => {
      console.log("useeffect");
      setFormIsValid(
        emailState.isValid &&
          passwordState.isValid &&
          enteredCollege.trim().length > 5
      );
    }, 500);
    // **code cleanup**
    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [emailState, passwordState, enteredCollege]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") &&
    //     passwordState.isValid &&
    //     enteredCollege.trim().length > 5
    // );
  };

  const passwordChangeHandler = (event) => {
    // setFormIsValid(
    //   emailState.isValid &&
    //     passwordState.isValid &&
    //     enteredCollege.trim().length > 5
    // );
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });
  };

  const collegeNameChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const validateCollegeNameHandler = () => {
    setcollegeIsValid(enteredCollege.trim().length > 5);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          htmlFor="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type="password"
          id="password"
          htmlFor="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <Input
          type="text"
          id="college"
          htmlFor="College"
          value={enteredCollege}
          onChange={collegeNameChangeHandler}
          onBlur={validateCollegeNameHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
