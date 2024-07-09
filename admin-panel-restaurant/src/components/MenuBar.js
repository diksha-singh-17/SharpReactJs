import React from "react";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const DUMMY = ["DashBoard", "Categories", "Recipes", "Orders"];
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    switch (item) {
      case "DashBoard":
        navigate("/");
        break;
      case "Categories":
        navigate("/categories");
        break;
      case "Recipes":
        navigate("/recipes");
        break;
      case "Orders":
        navigate("/orders");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <div className="flex-1 mt-10 ">
      <ul>
        {DUMMY.map((item) => (
          <li key={item} className="my-4 ">
            <button
              className="bg-slate-600 w-full p-2"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
