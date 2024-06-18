import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/AuthReducer";

const Body = () => {
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const toggleSignInHandler = () => {
    setIsLogin(!isLogin);
  };
  const handleFormData = () => {
    const message = validate(
      email.current.value,
      password.current.value,
      confirmPassword?.current?.value,
      isLogin
    );
    setError(message);
    if (message) return; //early return
    let url;
    if (!isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY;
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        API_KEY;
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.error) localStorage.setItem("idToken", data.idToken);
        dispatch(authActions.token(data.idToken));
        if (data && !data.error && !data.error?.message) {
          dispatch(authActions.login());
          navigate("/browse");
        }
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-700 hover:text-slate-400 bg-gradient-to-r from-slate-500 p-4">
        {!isLogin ? "Sign Up" : "Sign In"}
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
          {!isLogin && (
            <input
              type="password"
              placeholder="confirm password"
              className="m-4 p-2 rounded-lg"
              ref={confirmPassword}
            />
          )}
          <p className="text-red-500 font-bold">{error}</p>
          <p
            className="text-slate-500 font-bold hover:text-slate-400 cursor-pointer"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>
          <div>
            <button
              className="bg-slate-600 hover:bg-slate-400 rounded-md text-white p-2 m-4 font-bold"
              onClick={handleFormData}
            >
              {!isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
          <p className="text-slate-500 font-bold">
            {!isLogin ? "Already have an account?" : "Don't have an account?"}
            <button
              className="underline hover:text-white"
              onClick={toggleSignInHandler}
            >
              {!isLogin ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Body;
