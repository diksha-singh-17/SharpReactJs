import React from "react";
import CartButton from "./CartButton";
import med from "../constants/logo_med.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-lg px-4  py-2 ">
      <div>
        <img className="w-20 " src={med} alt="logo" />
      </div>

      <CartButton />
    </div>
  );
};

export default Header;
