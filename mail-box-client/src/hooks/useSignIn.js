import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
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

  return { error, email, password, formDataHandler };
};

export default useSignIn;
