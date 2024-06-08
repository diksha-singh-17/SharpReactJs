import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const logOutUserHandler = () => {
    navigate("/");
    localStorage.removeItem("idToken");
  };
  return (
    <>
      <button
        className="rounded-lg px-2 m-2 bg-gradient-to-r from-stone-700"
        onClick={logOutUserHandler}
      >
        LogOut
      </button>
    </>
  );
};

export default LogOut;
