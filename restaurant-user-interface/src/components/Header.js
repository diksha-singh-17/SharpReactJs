import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    // setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const navigateToHomeHandler = () => {
    navigate("/dashboard");
  };

  const navigateToOrdersHandler = () => {
    navigate("/orders");
  };
  const navigateToProfileHandler = () => {
    navigate("/profile");
  };

  return (
    <div
      className="flex justify-between items-center  p-4 bg-transparent shadow-2xl text-white "
      style={{ backgroundColor: "rgb(35, 39, 54" }}
    >
      <h1 style={{ color: "rgb(122, 156, 68)" }} className="text-xl font-bold">
        SpiceVilla🌶️
      </h1>
      <div className="flex mx-2 items-center">
        <p
          className="mx-4 font-semibold cursor-pointer"
          style={{ color: "rgb(122, 156, 68)" }}
          onClick={navigateToHomeHandler}
        >
          Home
        </p>
        <p
          className="mx-4 font-semibold cursor-pointer  "
          style={{
            color: "rgb(122, 156, 68)",
          }}
          onClick={navigateToOrdersHandler}
        >
          Orders
        </p>
        <p
          className="mx-4 font-semibold cursor-pointer  "
          style={{
            color: "rgb(122, 156, 68)",
          }}
          onClick={navigateToProfileHandler}
        >
          Profile
        </p>
        <button
          className=" rounded-xl p-2 font-bold text-xl"
          style={{ backgroundColor: "rgb(254, 161, 22)" }}
          onClick={() => handleAddToCart()}
        >
          Cart🛒 (0)
        </button>
      </div>
      <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
    </div>
  );
};

export default Header;
