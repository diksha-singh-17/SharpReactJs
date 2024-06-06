import "./App.css";
import React, { useRef, useState } from "react";
import { validate } from "./utils/validate";

function App() {
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleFormData = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      confirmPassword.current.value
    );
    setError(message);
    if (message) return;
    if (isLogin) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAo7xmAFa3rvDjDEFnZ9VoSTT1Kb7hfK6I",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log("Succesfully Signed Up!"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-slate-700 hover:text-slate-400 bg-gradient-to-r from-slate-500">
        Sign Up
      </h1>
      <div className="flex justify-center m-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col  justify-center items-center w-1/4 bg-slate-300 p-4 m-4 shadow-2xl"
        >
          <input
            type="text"
            placeholder="email"
            className="m-4 p-2 rounded-lg"
            ref={email}
          />
          <input
            type="password"
            placeholder="password"
            className="m-4 p-2 rounded-lg"
            ref={password}
          />
          <input
            type="password"
            placeholder="confirm password"
            className="m-4 p-2 rounded-lg"
            ref={confirmPassword}
          />
          <p className="text-red-500 font-bold">{error}</p>
          <div>
            <button
              className="bg-slate-600 hover:bg-slate-400 rounded-md text-white p-2 m-4 font-bold"
              onClick={handleFormData}
            >
              Sign Up
            </button>
          </div>
          <p className="text-slate-500 font-bold">
            Already have an account?{" "}
            <button className="underline hover:text-white">Sign In</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
