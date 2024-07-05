import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";

const useSignUp = () => {
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
  return { error, email, password, confirmPassword, formDataHandler };
};

export default useSignUp;
