import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../utils/constants";

const ForgotPassword = () => {
  const email = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);

  const handleForgotPassword = () => {
    setLoader(true);
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" +
      API_KEY;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoader(false);
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleLoginNavigation = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center m-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col  justify-center items-center w-1/4 bg-zinc-500 p-4 m-4 shadow-2xl"
        >
          <p className="text-white font-bold">
            Enter the Email with which you have registered.
          </p>
          <input
            type="text"
            placeholder="email"
            className="m-4 p-2 rounded-lg"
            ref={email}
          />
          <p className="text-red-500 font-bold">{error}</p>
          <p className="text-slate-300 font-bold">
            {loader && <p>Loading....</p>}
          </p>
          <div>
            <button
              className="bg-slate-600 hover:bg-slate-400 rounded-md text-white p-2 m-4 font-bold"
              onClick={handleForgotPassword}
            >
              Send Link
            </button>
          </div>
          <p className="text-white font-semibold cursor-pointer">
            Already a user?{" "}
            <b className="underline" onClick={handleLoginNavigation}>
              Login
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
