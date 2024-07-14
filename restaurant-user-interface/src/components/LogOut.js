import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/AuthReducer";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutUserHandler = () => {
    navigate("/");
    dispatch(logout());
    localStorage.removeItem("idTokenRestaurant");
  };
  return (
    <>
      <button className="rounded-lg  " onClick={logOutUserHandler}>
        Logout
      </button>
    </>
  );
};

export default LogOut;
