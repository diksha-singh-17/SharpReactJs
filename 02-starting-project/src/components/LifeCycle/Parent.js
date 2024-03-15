import React from "react";
import Child from "./Child";
import { useState } from "react";
const Parent = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      {showCounter && <Child />}
      <button
        onClick={() => {
          setShowCounter(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default Parent;
