import React, { useState } from "react";
import Premium from "./Premium";

const CheckPremium = () => {
  const [togglePremium, setTogglePremium] = useState(false);

  const handlecheckPremium = () => {
    setTogglePremium(!togglePremium);
  };
  return (
    <div>
      <button
        className="p-2 m-2 bg-amber-800 text-white rounded-lg"
        onClick={handlecheckPremium}
      >
        Premium
      </button>
      {togglePremium && <Premium />}
    </div>
  );
};

export default CheckPremium;
