import React from "react";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleProfileChange = () => {
    navigate("/profile");
  };
  return (
    <div className="flex justify-between bg-gradient-to-r from-pink-100 p-4">
      <h1 className="font-bold">Welcome to Expense Tracker!!</h1>
      <div>
        <button className="rounded-lg bg-pink-200 px-2">
          Your Profile is Incomplete,
          <b className="underline text-blue-500" onClick={handleProfileChange}>
            Complete Now
          </b>
        </button>
      </div>
    </div>
  );
};

export default Browse;
