import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/AuthReducer";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutUserHandler = () => {
    navigate("/");
    dispatch(authActions.logout());
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
