import React from "react";
import { authActions } from "../store/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
const ToggleTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.auth.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(authActions.toggleTheme(newTheme));
  };
  return (
    <div>
      <button className="bg-pink-200  rounded-lg p-2 m-2" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ToggleTheme;
