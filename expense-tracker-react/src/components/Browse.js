import React from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import LogOut from "./LogOut";

const Browse = () => {
  const navigate = useNavigate();
  const handleProfileChange = () => {
    navigate("/profile");
  };

  const verifyEmailHandler = () => {
    const idToken = localStorage.getItem("idToken");
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=" +
      API_KEY;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: idToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert("Verify your Email!!");
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-pink-100 p-4">
        <h1 className="font-bold">Welcome to Expense Tracker!!</h1>
        <div>
          <button className="rounded-lg bg-pink-200 px-2">
            Your Profile is Incomplete,
            <b
              className="underline text-blue-500"
              onClick={handleProfileChange}
            >
              Complete Now
            </b>
          </button>
          <LogOut />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-pink-200  rounded-lg p-2 m-2"
          onClick={verifyEmailHandler}
        >
          Verify Email
        </button>
      </div>
    </>
  );
};

export default Browse;
